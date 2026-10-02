/**
 * Looks up the lead photo of a Wikipedia article (free-licensed images hosted on Wikimedia).
 * Results are cached in memory + localStorage (7 days). Requests are limited to 5 at a time.
 */
export interface WikiHit { src: string; fallbackSrc: string; page: string; title: string }

const KEY = "desinaap:wikiimg:v1:";
const TTL = 7 * 24 * 3600 * 1000;
const mem = new Map<string, Promise<WikiHit | null>>();
let active = 0;
const waiting: Array<() => void> = [];
const acquire = () => new Promise<void>((res) => { if (active < 5) { active++; res(); } else waiting.push(() => { active++; res(); }); });
const release = () => { active--; waiting.shift()?.(); };

function upscale(src: string) {
  return src.includes("/thumb/") ? src.replace(/\/(\d+)px-/, "/640px-") : src;
}

async function lookup(title: string): Promise<WikiHit | null> {
  try {
    const c = localStorage.getItem(KEY + title);
    if (c) { const o = JSON.parse(c); if (Date.now() - o.t < TTL) return o.v; }
  } catch { /* ignore */ }
  let v: WikiHit | null = null;
  await acquire();
  try {
    const r = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title.replace(/ /g, "_"))}`);
    if (r.ok) {
      const j = await r.json();
      const t = j?.thumbnail?.source as string | undefined;
      if (j?.type === "standard" && t && !/\.svg/i.test(t)) {
        v = { src: upscale(t), fallbackSrc: t, page: j.content_urls?.desktop?.page ?? `https://en.wikipedia.org/wiki/${encodeURIComponent(title.replace(/ /g, "_"))}`, title: j.title ?? title };
      }
    }
  } catch { /* offline / blocked → no image */ } finally { release(); }
  try { localStorage.setItem(KEY + title, JSON.stringify({ t: Date.now(), v })); } catch { /* ignore */ }
  return v;
}

export function resolveWikiImage(titles: string[]): Promise<WikiHit | null> {
  const k = titles.join("|");
  if (!mem.has(k)) {
    mem.set(k, (async () => {
      for (const t of titles) { const h = await lookup(t); if (h) return h; }
      return null;
    })());
  }
  return mem.get(k)!;
}
