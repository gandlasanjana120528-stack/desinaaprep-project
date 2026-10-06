"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState, type SyntheticEvent } from "react";
import type { Measurement } from "@/types";
import { type MeasurementImage, getStaticImage, getWikiCandidates } from "@/lib/measurementImages";
import { resolveWikiImage } from "@/lib/wikiImage";

type Visual = { kind: "image"; img: MeasurementImage } | null;

function initialVisual(m: Measurement): Visual {
  const fixed = getStaticImage(m);
  if (fixed) return { kind: "image", img: fixed };
  if (getWikiCandidates(m)) return null; // resolved after mount
  return null; // real photos only – no generated drawings
}

function useMeasurementVisual(m: Measurement): Visual {
  const [visual, setVisual] = useState<Visual>(() => initialVisual(m));
  useEffect(() => {
    const first = initialVisual(m);
    setVisual(first);
    if (first) return;
    const titles = getWikiCandidates(m);
    if (!titles) return;
    let dead = false;
    resolveWikiImage(titles).then((h) => {
      if (dead) return;
      if (h) {
        setVisual({ kind: "image", img: { src: h.src, fallbackSrc: h.fallbackSrc, alt: m.name_english, credit: `Wikipedia – ${h.title}`, sourceUrl: h.page, wiki: true } });
      } else {
        setVisual(null);
      }
    });
    return () => { dead = true; };
  }, [m.slug, m.name_english, m.modern_equivalent]); // eslint-disable-line react-hooks/exhaustive-deps
  return visual;
}

const onErr = (img: MeasurementImage) => (e: SyntheticEvent<HTMLImageElement>) => {
  const t = e.currentTarget;
  if (img.fallbackSrc && t.src !== img.fallbackSrc) t.src = img.fallbackSrc;
  else (t.closest("[data-measurement-visual]") as HTMLElement | null)?.style.setProperty("display", "none");
};

/** Card thumbnail – renders nothing if there is no picture for this unit. */
export function MeasurementThumb({ m }: { m: Measurement }) {
  const v = useMeasurementVisual(m);
  if (!v) return null;
  return (
    <div data-measurement-visual className="-mx-5 -mt-5 mb-4 h-52 overflow-hidden rounded-t-lg bg-[#F3EBDD] flex items-center justify-center">
      {/* object-contain: the whole photo is shown, never cropped or zoomed */}
      <img src={v.img.src} alt={v.img.alt} loading="lazy" onError={onErr(v.img)}
        className="max-h-full max-w-full object-contain" />
    </div>
  );
}

/** Large figure on the unit's detail page – the full photo, uncropped; click to open it at full size. */
export function MeasurementFigure({ m }: { m: Measurement }) {
  const v = useMeasurementVisual(m);
  if (!v) return null;
  return (
    <figure data-measurement-visual className="mb-8 overflow-hidden rounded-xl border border-[#E8DED1] bg-white">
      <a href={v.img.src} target="_blank" rel="noopener noreferrer" title="Open the full-size photo"
        className="flex items-center justify-center bg-[#F3EBDD] p-3 cursor-zoom-in">
        <img src={v.img.src} alt={v.img.alt} onError={onErr(v.img)}
          className="w-auto max-w-full h-auto max-h-[32rem] object-contain rounded" />
      </a>
      {v.img.credit && (
        <figcaption className="px-3 py-2 text-[11px] leading-snug text-[#A09080]">
          Photo: {v.img.sourceUrl
            ? <a href={v.img.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#6F4E37]">{v.img.credit}</a>
            : v.img.credit}{v.img.license ? `, ${v.img.license}` : ""}
        </figcaption>
      )}
    </figure>
  );
}
