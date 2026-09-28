// ─── Core Types ──────────────────────────────────────────────────────────────

export interface Measurement {
  id: string;
  slug: string;
  name_english: string;
  name_sanskrit?: string;
  name_telugu?: string;
  name_hindi?: string;
  local_names?: string[];
  meaning?: string;
  category: MeasurementCategory;
  sector: string;
  origin?: string;
  historical_context?: string;
  modern_equivalent?: string;
  conversion_formula?: string;
  states?: string[];
  districts?: string[];
  used_in?: string[];
  hierarchy?: MeasurementHierarchyItem[];
  references?: string[];
  tags?: string[];
  image_url?: string;
  image_alt?: string;
  image_credit?: string;
  created_at?: string;
  updated_at?: string;
}

export type MeasurementCategory =
  | "length"
  | "weight"
  | "volume"
  | "area"
  | "time"
  | "currency"
  | "count"
  | "temperature"
  | "distance"
  | "area measurement"
  | "other"
  | (string & {});

export interface MeasurementHierarchyItem {
  name: string;
  relation: string;
  value: number;
  unit: string;
}

export interface State {
  id: string;
  slug: string;
  name: string;
  capital: string;
  region: string;
  language?: string;
  description?: string;
  measurement_count?: number;
  districts?: District[];
}

export interface District {
  id: string;
  slug: string;
  name: string;
  state_id: string;
  state_name?: string;
  description?: string;
  measurement_count?: number;
  regional_vocabulary?: RegionalVocab[];
}

export interface RegionalVocab {
  term: string;
  meaning: string;
  language: string;
}

export interface Sector {
  id: string;
  slug: string;
  name: string;
  icon: string;
  description: string;
  measurement_count?: number;
  overview?: string;
  references?: string[];
}

export interface FlowchartNode {
  id: string;
  name: string;
  vernacular?: string;
  script?: string;
  relation_text?: string;
  multiplier?: number;
  metric_equiv?: string;
  desc?: string;
  category_level?: "micro" | "anatomical" | "tool" | "cadastral" | "macro" | "cosmic" | "standard";
  badge?: string;
  historical_note?: string;
}

export interface FlowchartConnection {
  from: string;
  to: string;
  label: string;
  formula?: string;
}

export interface InfographicCalculatorUnit {
  id: string;
  name: string;
  factor_to_base: number;
  symbol: string;
  metric_unit: string;
  metric_factor: number;
}

export interface InfographicTheme {
  primary: string;
  light: string;
  accent: string;
  border: string;
  badge: string;
  gradient: string;
}

export interface Infographic {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  category: string;
  sector?: string;
  state?: string;
  period?: string;
  historical_source?: string;
  image_url?: string;
  icon_emoji?: string;
  tags?: string[];
  theme?: InfographicTheme;
  nodes?: FlowchartNode[];
  connections?: FlowchartConnection[];
  conversion_table?: Array<{ from: string; to: string; ratio: string; notes?: string }>;
  key_insights?: string[];
  calculator?: {
    base_unit_id: string;
    units: InfographicCalculatorUnit[];
  };
  created_at?: string;
}

export interface Reference {
  id: string;
  title: string;
  author?: string;
  type: ReferenceType;
  year?: number;
  publisher?: string;
  url?: string;
  description?: string;
  tags?: string[];
}

export type ReferenceType =
  | "book"
  | "research_paper"
  | "ancient_text"
  | "government_source"
  | "journal"
  | "website"
  | "other";

export interface User {
  id: string;
  email: string;
  full_name?: string;
  role: "admin" | "editor" | "viewer";
  created_at?: string;
  last_sign_in?: string;
}

// ─── Filter / Search Types ────────────────────────────────────────────────────

export interface SearchFilters {
  query?: string;
  category?: MeasurementCategory | "";
  sector?: string;
  state?: string;
  district?: string;
}

export interface PaginationMeta {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: PaginationMeta;
}
