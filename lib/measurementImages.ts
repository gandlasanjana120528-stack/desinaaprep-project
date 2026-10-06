import type { Measurement } from "@/types";
import { UNIT_PHOTOS, UNIT_PHOTO_BY_SLUG } from "./unitPhotos";

/**
 * IMAGES FOR MEASUREMENTS
 *
 * Rule: every picture must show THAT unit (or the object it is literally named
 * after). There are no "representative" or category pictures any more – if we
 * have nothing specific, the unit simply has no image.
 * The same unit in different states (e.g. Ratti in Telangana and Ratti in
 * Gujarat) is allowed to share its picture.
 *
 * Order used to pick a picture for a record:
 *   0. The team's real photo for that unit (lib/unitPhotos.ts – from the
 *      Real Image Checklist documents). Always wins.
 *   1. m.image_url (if set in the data or in Firestore)
 *   2. IMAGE_BY_SLUG / IMAGE_BY_NAME  – fixed photos (project photos + verified Commons files)
 *   3. Tola / Tulam  → the silver one-rupee coin (1 Tola = weight of 1 rupee)
 *   4. WIKI_TITLES   – lead photo of the Wikipedia article about that exact unit/object
 *   (No generated drawings: if none of the above exists, the unit shows no picture.)
 *
 * To force a picture for a unit: add a line to IMAGE_BY_NAME.
 * To stop a unit from showing a picture: add its name to NO_IMAGE.
 */

export interface MeasurementImage {
  src: string;
  fallbackSrc?: string;
  alt: string;
  credit?: string;
  license?: string;
  sourceUrl?: string; // Commons file page / Wikipedia article (used as the credit link)
  wiki?: boolean;     // true = came from a Wikipedia lead image
}

/** Exact Wikimedia Commons file (name without the "File:" prefix). */
export function commons(
  fileName: string,
  meta: { alt: string; credit?: string; license?: string; width?: number }
): MeasurementImage {
  const enc = encodeURIComponent(fileName.replace(/ /g, "_"));
  return {
    src: `https://commons.wikimedia.org/wiki/Special:FilePath/${enc}?width=${meta.width ?? 800}`,
    alt: meta.alt,
    credit: meta.credit ?? "Wikimedia Commons",
    license: meta.license,
    sourceUrl: `https://commons.wikimedia.org/wiki/File:${enc}`,
  };
}

// ─── Project photos (public/images/…) ───────────────────────────────────────
const rattiSeeds: MeasurementImage = {
  src: "/images/local/ratti-seeds-user.jpg",
  alt: "Ratti (Gunja) – red and black Abrus precatorius seeds",
  credit: "DESINAAP project photo",
};
const paramanuDust: MeasurementImage = {
  src: "/images/local/paramanu-dust.jpg",
  alt: "Dust particles floating in a beam of sunlight – the Paramanu is smaller than the smallest visible mote",
  credit: "DESINAAP project photo",
};
const mashaSeeds: MeasurementImage = {
  src: "/images/generated/masha-8-ratti.svg",
  alt: "Eight Ratti seeds, which together weigh one Masha",
  credit: "DESINAAP illustration",
};
const cowrieShells: MeasurementImage = {
  src: "/images/local/cowrie-shells-user.jpg",
  alt: "Cowrie shells, the smallest unit of traditional Indian money",
  credit: "DESINAAP project photo",
};

// ─── Verified Commons photos of specific objects ─────────────────────────────
const maundWeight = commons("Edai kal (1 manu).jpg", { alt: "Traditional stone weight marked as one Maund (manu)" });
const seerWeight = commons("AlmoraSeer.jpg", { alt: "Traditional Seer measure" });
const padiMeasure = commons("Padi in India.jpg", { alt: "Padi – traditional grain measure" });
const uzhakkuMeasure = commons("Uzhakku (measuring tool).jpg", { alt: "Uzhakku – South Indian grain measure" });

export const IMAGE_BY_NAME: Record<string, MeasurementImage> = {
  // seed weights
  ratti: rattiSeeds, rati: rattiSeeds, raktika: rattiSeeds, gunja: rattiSeeds, gunjā: rattiSeeds,
  guriginja: rattiSeeds, ginjalu: rattiSeeds, kunni: rattiSeeds,
  masha: mashaSeeds, maasha: mashaSeeds, maas: mashaSeeds, "māṣa": mashaSeeds, mashe: mashaSeeds,
  // the smallest particle
  paramanu: paramanuDust, "paramāṇu": paramanuDust, "parmanu": paramanuDust,
  // money
  cowrie: cowrieShells, cowry: cowrieShells, kaudi: cowrieShells, kauri: cowrieShells, kowdi: cowrieShells,
  "cowrie shell": cowrieShells, "cowrie (kaudi)": cowrieShells,
  // weights & measures with an exact photo
  maund: maundWeight, "maund (man)": maundWeight, manu: maundWeight,
  seer: seerWeight, "seer / sher": seerWeight, seeru: seerWeight, ser: seerWeight,
  padi: padiMeasure,
  uzhakku: uzhakkuMeasure, ulakku: uzhakkuMeasure,
  // own photo:  name: { src: "/images/local/yourfile.jpg", alt: "...", credit: "Your name" },
};
export const IMAGE_BY_SLUG: Record<string, MeasurementImage> = {};

/** Units that must never show a picture (add names here if a photo is wrong). */
export const NO_IMAGE = new Set<string>([]);

// ─── Wikipedia articles about the exact unit / object ────────────────────────
export const WIKI_TITLES: Record<string, string[]> = {
  // weights
  candy: ["Candy (unit)"], khandi: ["Candy (unit)"],
  quintal: ["Quintal"], "metric ton": ["Tonne"], kilogram: ["Kilogram"], gram: ["Gram"],
  // grain / bulk
  gone: ["Sack (bag)"], bora: ["Sack (bag)"],
  kottam: ["Granary"], "bandi bharuvu": ["Bullock cart"], bharuvu: ["Bullock cart"],
  gampa: ["Basket"], mushti: ["Handful"], muthi: ["Handful"], petti: ["Chest (furniture)"],
  // money (each coin has its own article)
  anna: ["Anna (currency)"], rupee: ["Indian rupee"], rupiya: ["Indian rupee"], paisa: ["Paisa"],
  pie: ["Pie (Indian coin)"], dam: ["Dam (coin)"], mohur: ["Mohur"], "gold mohur": ["Mohur"],
  pagoda: ["Pagoda (coin)"], "madras pagoda": ["Pagoda (coin)"], varaha: ["Pagoda (coin)"],
  fanam: ["Fanam"], panam: ["Fanam"], karshapana: ["Karshapana"], purana: ["Karshapana"],
  // coins with their own articles
  tangka: ["Tibetan tangka"],
  // land (modern equivalents)
  acre: ["Acre"], hectare: ["Hectare"], guntha: ["Guntha"], kunta: ["Guntha"],
  // seeds / grains / textiles named after the object
  manjadi: ["Adenanthera pavonina"], "vadla ginja": ["Rice"], yava: ["Barley"],
  noolu: ["Yarn"], tantu: ["Yarn"], "cheera podavu": ["Sari"], "panche podavu": ["Dhoti"],
  "pattu kattu": ["Silk"], bale: ["Bale"],
};

const RUPEE_COIN_TITLES = ["Indian 1-rupee coin", "Indian rupee"];

// ─── lookups ────────────────────────────────────────────────────────────────
function nameKeys(name: string): string[] {
  const full = name.toLowerCase().trim();
  const inner = Array.from(full.matchAll(/\(([^)]*)\)/g)).flatMap((x) => x[1].split(/\s*\/\s*/));
  const base = full.replace(/\s*\([^)]*\)/g, "").trim();
  const parts = base.split(/\s*\/\s*/).map((p) => p.trim()).filter(Boolean);
  return Array.from(new Set([full, base, ...parts, ...inner.map((p) => p.trim())])).filter(Boolean);
}

const isTola = (m: Measurement) => {
  const keys = nameKeys(m.name_english);
  const named = keys.some((k) => /^(tola|tolā|tolam|tulam|tula|bhori|tola \(.*\))$/.test(k));
  if (!named) return false;
  // "Tula" is also a much larger weight in some texts – only use the coin for the ~11.66 g unit
  const eq = (m.modern_equivalent || "").toLowerCase();
  return keys.some((k) => k.startsWith("tola") || k === "tolam") || /11\.6/.test(eq);
};

/** Instant (no network) image – project photos and fixed Commons photos. */
export function getTeamPhoto(m: Measurement): MeasurementImage | null {
  const i = UNIT_PHOTO_BY_SLUG[m.slug];
  if (i === undefined) return null;
  const p = UNIT_PHOTOS[i];
  return {
    src: p.src,
    alt: `${m.name_english}${p.what ? ` – ${p.what}` : ""}`,
    credit: p.credit,
    sourceUrl: p.source ?? undefined,
  };
}

export function getStaticImage(m: Measurement): MeasurementImage | null {
  const team = getTeamPhoto(m);
  if (team) return team;
  const keys = nameKeys(m.name_english);
  if (keys.some((k) => NO_IMAGE.has(k))) return null;
  if (m.image_url) return { src: m.image_url, alt: m.image_alt || m.name_english, credit: m.image_credit };
  if (IMAGE_BY_SLUG[m.slug]) return IMAGE_BY_SLUG[m.slug];
  for (const k of keys) if (IMAGE_BY_NAME[k]) return IMAGE_BY_NAME[k];
  return null;
}

const isVedic = (m: Measurement) =>
  m.sector === "vedic-measurements" || !!m.tags?.includes("vedic-measurements");

/** Wikipedia article(s) to try for this unit, or null. */
export function getWikiCandidates(m: Measurement): string[] | null {
  if (isVedic(m)) return null;
  const keys = nameKeys(m.name_english);
  if (keys.some((k) => NO_IMAGE.has(k))) return null;
  if (isTola(m)) return RUPEE_COIN_TITLES;
  for (const k of keys) if (WIKI_TITLES[k]) return WIKI_TITLES[k];
  return null;
}
