import { Measurement } from "@/types";
import VEDIC_RAW_DATA from "./vedicMeasurements.json";

export interface VedicRawItem {
  ID: string;
  Order: number;
  "Unit (English)": string;
  Sanskrit: string;
  Telugu: string;
  "Measurement Type": string;
  "Modern Equivalent": string;
  "Relation / Hierarchy": string;
  "Primary Use": string;
  "Source / Period": string;
  Reference: string;
}

export interface VedicMeasurementsData {
  sector: string;
  categories: {
    Length: VedicRawItem[];
    Weight: VedicRawItem[];
    Capacity: VedicRawItem[];
    Time: VedicRawItem[];
  };
}

export const VEDIC_JSON: VedicMeasurementsData = VEDIC_RAW_DATA as VedicMeasurementsData;

export const VEDIC_CATEGORY_NAMES = ["Length", "Weight", "Capacity", "Time"] as const;
export type VedicCategoryName = (typeof VEDIC_CATEGORY_NAMES)[number];

function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const VEDIC_MEASUREMENTS: Measurement[] = Object.entries(VEDIC_JSON.categories).flatMap(
  ([categoryName, items]) => {
    return items.map((item): Measurement => {
      const cleanEnglishName = item["Unit (English)"];
      const baseSlug = slugify(cleanEnglishName) || item.ID.toLowerCase();
      const slug = `${baseSlug}-vedic-${item.ID.toLowerCase()}`;

      return {
        id: item.ID,
        slug,
        name_english: cleanEnglishName,
        name_sanskrit: item.Sanskrit,
        name_telugu: item.Telugu,
        category: categoryName.toLowerCase() as any,
        measurement_type: item["Measurement Type"],
        sector: "vedic-measurements",
        origin: "Ancient India / Vedic Tradition",
        meaning: item["Primary Use"],
        historical_context: item["Source / Period"],
        historical_period: item["Source / Period"],
        modern_equivalent: item["Modern Equivalent"],
        conversion_formula: item["Relation / Hierarchy"],
        states: ["National", "Vedic India"],
        used_in: [item["Primary Use"], "Vedic Metrology"],
        references: [item.Reference],
        tags: ["vedic", "vedic-measurements", categoryName.toLowerCase()],
        created_at: "2024-01-01",
      };
    });
  }
);
