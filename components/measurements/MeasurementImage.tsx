"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState, type SyntheticEvent } from "react";
import type { Measurement } from "@/types";
import { type MeasurementImage, getStaticImage, getWikiCandidates, getCategoryFallback } from "@/lib/measurementImages";
import { resolveWikiImage } from "@/lib/wikiImage";

function useMeasurementImage(m: Measurement): MeasurementImage | null {
  const isVedic = m.sector === "vedic-measurements" || m.tags?.includes("vedic-measurements") || m.tags?.includes("vedic");
  const [img, setImg] = useState<MeasurementImage | null>(() => (isVedic ? null : getStaticImage(m)));
  useEffect(() => {
    if (isVedic) {
      setImg(null);
      return;
    }
    const fixed = getStaticImage(m);
    setImg(fixed);
    if (fixed) return;
    let dead = false;
    (async () => {
      const own = getWikiCandidates(m);
      if (own) {
        const h = await resolveWikiImage(own.titles);
        if (h && !dead) return setImg({ src: h.src, fallbackSrc: h.fallbackSrc, alt: m.name_english, credit: `Wikipedia – ${h.title}`, sourceUrl: h.page, wiki: true });
      }
      const { fixed: sf, titles } = getCategoryFallback(m);
      if (sf) { if (!dead) setImg(sf); return; }
      if (titles.length) {
        const h = await resolveWikiImage(titles);
        if (h && !dead) setImg({ src: h.src, fallbackSrc: h.fallbackSrc, alt: `${m.category} (representative)`, credit: `Wikipedia – ${h.title}`, sourceUrl: h.page, wiki: true, generic: true });
      }
    })();
    return () => { dead = true; };
  }, [m.slug, m.name_english, m.category, isVedic]); // eslint-disable-line react-hooks/exhaustive-deps
  return isVedic ? null : img;
}

const onErr = (img: MeasurementImage) => (e: SyntheticEvent<HTMLImageElement>) => {
  const t = e.currentTarget;
  if (img.fallbackSrc && t.src !== img.fallbackSrc) t.src = img.fallbackSrc;
  else t.style.display = "none";
};

/** Card thumbnail – renders nothing if there is no photo. */
export function MeasurementThumb({ m }: { m: Measurement }) {
  const img = useMeasurementImage(m);
  if (!img) return null;
  return (
    <div className="-mx-5 -mt-5 mb-4 h-40 overflow-hidden rounded-t-lg bg-[#FAF7F2]">
      <img src={img.src} alt={img.alt} loading="lazy" onError={onErr(img)}
        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
    </div>
  );
}

/** Small figure for the detail-page sidebar, with credit line. */
export function MeasurementFigure({ m }: { m: Measurement }) {
  const img = useMeasurementImage(m);
  if (!img) return null;
  return (
    <figure className="overflow-hidden rounded-lg border border-[#E8DED1] bg-white">
      <div className="h-40 bg-[#FAF7F2]">
        <img src={img.src} alt={img.alt} onError={onErr(img)} className="h-full w-full object-cover" />
      </div>
      <figcaption className="px-3 py-2 text-[11px] leading-snug text-[#A09080]">
        {img.generic && <span className="block text-[#7A6E65]">Representative image</span>}
        {img.credit && (<>Photo: {img.sourceUrl
          ? <a href={img.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#6F4E37]">{img.credit}</a>
          : img.credit}{img.license ? ` · ${img.license}` : ""}</>)}
      </figcaption>
    </figure>
  );
}
