import type { Measurement } from "@/types";

/**
 * IMAGES FOR MEASUREMENTS  (Telangana + Andhra Pradesh + any other state)
 *
 * Order used to pick a picture for a record:
 *   1. m.image_url (if you ever set one in the data)
 *   2. IMAGE_BY_SLUG / IMAGE_BY_STATE_NAME / IMAGE_BY_NAME   – exact Wikimedia Commons files (fixed)
 *   3. WIKI_TITLES  – the lead photo of that unit's Wikipedia article (looked up automatically)
 *   4. Category fallback – a "representative image" for the type (weight, volume, length, area, currency)
 *
 * To force a picture for a unit: add a line to IMAGE_BY_NAME using commons("File name.jpg", …).
 * To change which Wikipedia article is used: edit WIKI_TITLES.
 */

export interface MeasurementImage {
  src: string;
  fallbackSrc?: string;
  alt: string;
  credit?: string;
  license?: string;
  sourceUrl?: string;   // Commons file page / Wikipedia article (used as the credit link)
  generic?: boolean;    // true = representative image, not the exact unit
  wiki?: boolean;       // true = came from a Wikipedia lead image
}

/** Exact Wikimedia Commons file (name without the "File:" prefix). */
export function commons(
  fileName: string,
  meta: { alt: string; credit?: string; license?: string; width?: number; generic?: boolean }
): MeasurementImage {
  const enc = encodeURIComponent(fileName.replace(/ /g, "_"));
  return {
    src: `https://commons.wikimedia.org/wiki/Special:FilePath/${enc}?width=${meta.width ?? 800}`,
    alt: meta.alt,
    credit: meta.credit ?? "Wikimedia Commons",
    license: meta.license,
    generic: meta.generic,
    sourceUrl: `https://commons.wikimedia.org/wiki/File:${enc}`,
  };
}

// ─── 2. Fixed Commons photos (file names verified on Commons) ───────────────
const rattiSeeds = commons("Guriginja (Telugu- గురిగింజ) (2892680566).jpg", {
  alt: "Guriginja (Gunja / Ratti) – red and black Abrus precatorius seeds",
  credit: "Dinesh Valke",
  license: "CC BY-SA 2.0",
});
const maundWeight = commons("Edai kal (1 manu).jpg", {
  alt: "Traditional stone weight (edai kal) used as a Maund",
});
const seerWeight = commons("AlmoraSeer.jpg", { alt: "Traditional Seer weight" });
const padiMeasure = commons("Padi in India.jpg", { alt: "Padi – traditional grain measure" });
const tulaBalance = commons("Thulas.jpg", { alt: "Traditional balance (tula)", generic: true });
const oldWeights = commons("Patwa Haveli, Jaisalmer - measurement objects, weights 1.jpg", {
  alt: "Traditional weights used with the tola system", generic: true,
});
const grainMeasure = commons("Uzhakku (measuring tool).jpg", {
  alt: "Traditional South Indian grain measure (uzhakku)", generic: true,
});

export const IMAGE_BY_NAME: Record<string, MeasurementImage> = {
  ratti: rattiSeeds, guriginja: rattiSeeds, gunja: rattiSeeds, ginjalu: rattiSeeds,
  maund: maundWeight, "maund (man)": maundWeight, "tula / maund": maundWeight,
  seer: seerWeight, "seer / sher": seerWeight, seeru: seerWeight,
  padi: padiMeasure,
  tula: tulaBalance,
  tola: oldWeights, "ardha tola": oldWeights,
  marakkal: grainMeasure, maraka: grainMeasure,
  // add more:  name: commons("File name.jpg", { alt: "...", credit: "...", license: "CC BY-SA 4.0" }),
  // or own photo:  name: { src: "/images/yourfile.jpg", alt: "...", credit: "Your name" },
};
export const IMAGE_BY_STATE_NAME: Record<string, MeasurementImage> = {}; // "telangana:hasta"
export const IMAGE_BY_SLUG: Record<string, MeasurementImage> = {};

// ─── 3. Wikipedia article whose lead photo represents the unit ──────────────
// key = lowercase unit name (without brackets). First article that has a photo wins.
export const WIKI_TITLES: Record<string, string[]> = {
  // weights
  masha: ["Masha (unit)"], candy: ["Candy (unit)"], khandi: ["Candy (unit)"],
  quintal: ["Quintal"], "metric ton": ["Tonne"], kilogram: ["Kilogram"], gram: ["Gram"],
 
  // grain / storage / transport
  gone: ["Sack (bag)"], bora: ["Sack (bag)"], 
  kottam: ["Granary"], "bandi bharuvu": ["Bullock cart"],
  bharuvu: ["Bullock cart"], gampa: ["Basket"], kolaga: ["Ladle"],
  mushti: ["Handful"], muthi: ["Handful"], chitikedu: ["Handful"],
  petti: ["Chest (furniture)"],
  // money
  cowrie: ["Cowrie"], kaudi: ["Cowrie"], anna: ["Anna (currency)"], rupee: ["Indian rupee"],
  rupiya: ["Indian rupee"], paisa: ["Paisa"], pie: ["Pie (Indian coin)"], dam: ["Dam (coin)"],
  mohur: ["Mohur"], "gold mohur": ["Mohur"], pagoda: ["Pagoda (coin)"], "madras pagoda": ["Pagoda (coin)"],
  varaha: ["Pagoda (coin)", "Vijayanagara coinage"], gadyana: ["Vijayanagara coinage"],
  honnu: ["Vijayanagara coinage"], pon: ["Vijayanagara coinage"], fanam: ["Fanam"],
  panam: ["Fanam"], kasu: ["Vijayanagara coinage"], karshapana: ["Karshapana"],
  "pana": ["Karshapana"], purana: ["Karshapana"], 
  chavanni: ["Coinage of India"], athanni: ["Coinage of India"], duggani: ["Coinage of India"],
  damri: ["Coinage of India"], tara: ["Vijayanagara coinage"], suvarna: ["Coinage of India"],
  kakini: ["Coinage of India"], mashaka: ["Coinage of India"],
  // length / distance
  hasta: ["Hasta (unit)", "Cubit"], angula: ["Angula"], angulam: ["Angula"], anguli: ["Angula"],
  vitasti: ["Vitasti", "Span (unit)"], yojana: ["Yojana"], kos: ["Kos minar", "Kos (unit)"],
  krosha: ["Kos minar"], krosa: ["Kos minar"], kosu: ["Kos minar"], gavyuti: ["Kos minar"],
  gajam: ["Yard"], gaz: ["Yard"], "adugu": ["Foot (unit)"], foot: ["Foot (unit)"],
  aratni: ["Cubit"], muzham: ["Cubit"], kol: ["Cubit"], kolu: ["Cubit"],
  // area
  acre: ["Acre"], hectare: ["Hectare"], guntha: ["Guntha"], kunta: ["Guntha"], are: ["Are (unit)"],
  "square foot": ["Square foot"], "square meter": ["Square metre"], "square kilometer": ["Square kilometre"],
  // agriculture / textile / misc
  manjadi: ["Adenanthera pavonina"], "vadla ginja": ["Rice"], yava: ["Barley"],
  noolu: ["Yarn"], tantu: ["Yarn"], "cheera podavu": ["Sari"], "panche podavu": ["Dhoti"],
  "pattu kattu": ["Silk"], bale: ["Bale"], "kani": ["Acre"], cawnie: ["Acre"],
};

// ─── 4. Representative image by MEASUREMENT TYPE (never by sector) ─────────
// A volume unit gets a grain-measure photo, a weight gets weights, and so on –
// so the picture always matches what the unit actually measures.
const surveyChain = commons("Chain (unit) (YS) (17).jpg", { alt: "Surveyor's measuring chain", generic: true });
const landTape = commons("Land measurement using tape.jpg", { alt: "Measuring land with a tape", generic: true });
export const IMAGE_BY_CATEGORY: Record<string, MeasurementImage> = {
  weight: oldWeights,
  volume: grainMeasure,
  length: surveyChain,
  distance: surveyChain,
  area: landTape,
  "area measurement": landTape,
};
const CATEGORY_WIKI: Record<string, string[]> = {
  currency: ["Coinage of India", "Indian rupee"],
};

// ─── lookups ────────────────────────────────────────────────────────────────
function nameKeys(name: string): string[] {
  const full = name.toLowerCase().trim();
  const base = full.replace(/\s*\([^)]*\)/g, "").trim();
  const parts = base.split(/\s*\/\s*/).map((p) => p.trim()).filter(Boolean);
  const first = base.split(" ")[0];
  return Array.from(new Set([full, base, ...parts, first]));
}

/** Instant (no network) image – fixed Commons photos and own uploads. */
export function getStaticImage(m: Measurement): MeasurementImage | null {
  if (m.image_url) return { src: m.image_url, alt: m.image_alt || m.name_english, credit: m.image_credit };
  if (IMAGE_BY_SLUG[m.slug]) return IMAGE_BY_SLUG[m.slug];
  const keys = nameKeys(m.name_english);
  for (const s of m.states ?? []) for (const k of keys) {
    const hit = IMAGE_BY_STATE_NAME[`${s.toLowerCase()}:${k}`];
    if (hit) return hit;
  }
  for (const k of keys) if (IMAGE_BY_NAME[k]) return IMAGE_BY_NAME[k];
  return null;
}

/** Wikipedia articles to try (unit-specific first, then sector fallback). */
export function getWikiCandidates(m: Measurement): { titles: string[]; generic: boolean } | null {
  for (const k of nameKeys(m.name_english)) if (WIKI_TITLES[k]) return { titles: WIKI_TITLES[k], generic: false };
  return null;
}

export function getCategoryFallback(m: Measurement): { fixed: MeasurementImage | null; titles: string[] } {
  const c = (m.category || "").toLowerCase();
  return { fixed: IMAGE_BY_CATEGORY[c] ?? null, titles: CATEGORY_WIKI[c] ?? [] };
}
