import { Measurement, State, Sector, Reference, Infographic } from "@/types";
import { UP_MEASUREMENTS } from "@/lib/upData";
import { JHARKHAND_MEASUREMENTS } from "@/lib/jharkhandData";
import { BIHAR_MEASUREMENTS } from "@/lib/biharData";
import { HARYANA_MEASUREMENTS } from "@/lib/haryanaData";
import { ASSAM_MEASUREMENTS } from "@/lib/assamData";
import { WEST_BENGAL_MEASUREMENTS } from "@/lib/westBengalData";
import { KERALA_MEASUREMENTS } from "@/lib/keralaData";
import { ODISHA_MEASUREMENTS } from "@/lib/odishaData";
import { TRIPURA_MEASUREMENTS } from "@/lib/tripuraData";
import { ARUNACHAL_PRADESH_MEASUREMENTS } from "@/lib/arunachalPradeshData";
import { MANIPUR_MEASUREMENTS } from "@/lib/manipurData";
import { PUNJAB_MEASUREMENTS } from "@/lib/punjabData";
import { MEGHALAYA_MEASUREMENTS } from "@/lib/meghalayaData";
import { NAGALAND_MEASUREMENTS } from "@/lib/nagalandData";
import { TELANGANA_MEASUREMENTS } from "@/lib/telanganaData";
import { HIMACHAL_PRADESH_MEASUREMENTS } from "@/lib/himachalPradeshData";
import { SIKKIM_MEASUREMENTS } from "@/lib/sikkimData";
import { UTTARAKHAND_MEASUREMENTS } from "@/lib/uttarakhandData";
import { GUJARAT_MEASUREMENTS } from "@/lib/gujaratData";
import { RAJASTHAN_MEASUREMENTS } from "@/lib/rajasthanData";
import { MP_MEASUREMENTS } from "@/lib/mpData";
import { GOA_MEASUREMENTS } from "@/lib/goaData";
import { MAHARASHTRA_MEASUREMENTS } from "@/lib/maharashtraData";
import { AP_MEASUREMENTS } from "@/lib/apData";
import { KARNATAKA_MEASUREMENTS } from "@/lib/karnatakaData";
import { MIZORAM_MEASUREMENTS } from "@/lib/mizoramData";
import { CHHATTISGARH_MEASUREMENTS } from "@/lib/chhattisgarhData";
import { TAMILNADU_MEASUREMENTS } from "@/lib/tamilnaduData";
import { JK_MEASUREMENTS } from "@/lib/jkData";
import { VEDIC_MEASUREMENTS } from "@/lib/vedicData";

// ─── Base Sample Measurements ──────────────────────────────────────────────────

const BASE_SAMPLE_MEASUREMENTS: Measurement[] = [
  {
    id: "1",
    slug: "angula",
    name_english: "Angula",
    name_sanskrit: "अंगुल",
    name_telugu: "అంగుళం",
    name_hindi: "अंगुल",
    local_names: ["Viral", "Angushtam"],
    meaning: "Finger breadth — the width of a finger at the middle joint",
    category: "length",
    sector: "architecture",
    origin: "Vedic India",
    historical_context:
      "The Angula is one of the oldest units of measurement in Indian history, dating back to the Vedic era. It appears extensively in Vastu Shastra texts and was standardised across multiple ancient treatises including the Arthashastra of Kautilya and the Manasara.",
    modern_equivalent: "~1.763 cm (varies by text)",
    conversion_formula: "1 Angula ≈ 1.763 cm; 24 Angulas = 1 Hasta",
    states: ["National"],
    districts: ["Hyderabad", "Warangal", "Vijayawada"],
    used_in: ["Temple construction", "Vastu Shastra", "Sculpture", "Town planning"],
    hierarchy: [
      { name: "Paramanu", relation: "smaller", value: 8, unit: "Paramanu = 1 Trasa" },
      { name: "Yava", relation: "smaller", value: 6, unit: "Yava = 1 Angula" },
      { name: "Vitasti", relation: "larger", value: 12, unit: "Angula = 1 Vitasti" },
      { name: "Hasta", relation: "larger", value: 24, unit: "Angula = 1 Hasta" }
    ],
    tags: ["vedic", "vastu", "architecture", "body-based"],
    created_at: "2024-01-01"
  },
  {
    id: "2",
    slug: "hasta",
    name_english: "Hasta",
    name_sanskrit: "हस्त",
    name_telugu: "హస్తం",
    name_hindi: "हस्त",
    local_names: ["Muzham", "Kol"],
    meaning: "Cubit — measured from the elbow to the tip of the middle finger",
    category: "length",
    sector: "architecture",
    origin: "Ancient India",
    historical_context:
      "The Hasta (cubit) was the primary unit of length in ancient Indian construction. Mentioned in both Rigveda and later architectural texts, it was used to plan everything from domestic houses to grand temple complexes. The Arthashastra mentions it as a standard for public works.",
    modern_equivalent: "~45 cm (24 Angulas)",
    conversion_formula: "1 Hasta = 24 Angulas ≈ 45 cm; 4 Hasta = 1 Danda",
    states: ["National"],
    used_in: ["Temple architecture", "Agricultural land measurement", "Textile"],
    hierarchy: [
      { name: "Angula", relation: "smaller", value: 24, unit: "Angula = 1 Hasta" },
      { name: "Danda", relation: "larger", value: 4, unit: "Hasta = 1 Danda" },
      { name: "Rajju", relation: "larger", value: 10, unit: "Danda = 1 Rajju" }
    ],
    tags: ["cubit", "construction", "vedic"],
    created_at: "2024-01-01"
  },
  {
    id: "3",
    slug: "mana",
    name_english: "Mana",
    name_sanskrit: "माण",
    name_telugu: "మాన",
    name_hindi: "माण",
    local_names: ["Manamu", "Maanam"],
    meaning: "A traditional unit of volume used for measuring grain",
    category: "volume",
    sector: "agriculture",
    origin: "Deccan Plateau region",
    historical_context:
      "The Mana was widely used across the Deccan for measuring paddy, jowar, and other grains. It was particularly prevalent in Telangana and was used as a standard unit in local markets well into the 20th century. Different districts had varying sizes of Mana.",
    modern_equivalent: "~2 to 4 kg (varies by district)",
    conversion_formula: "1 Mana ≈ 2-4 kg; 8 Mana = 1 Kula; 40 Mana = 1 Khanduga",
    states: ["Telangana"],
    districts: ["Nalgonda", "Khammam", "Medak", "Nizamabad"],
    used_in: ["Grain measurement", "Market trade", "Revenue collection"],
    hierarchy: [
      { name: "Seer", relation: "smaller", value: 4, unit: "Seer = 1 Mana" },
      { name: "Kula", relation: "larger", value: 8, unit: "Mana = 1 Kula" },
      { name: "Khanduga", relation: "larger", value: 40, unit: "Mana = 1 Khanduga" }
    ],
    tags: ["grain", "agriculture", "deccan", "telangana"],
    created_at: "2024-01-01"
  },
  {
    id: "4",
    slug: "khanduga",
    name_english: "Khanduga",
    name_sanskrit: "खंडुग",
    name_telugu: "ఖండుగ",
    local_names: ["Khandav", "Khanduva"],
    meaning: "Largest traditional grain measure equivalent to roughly 40 Manas",
    category: "volume",
    sector: "agriculture",
    origin: "Telangana and Andhra region",
    historical_context:
      "The Khanduga was used as the unit for bulk grain transactions and revenue assessments. Nizam-era records refer to it in land revenue calculations. Village accountants (Patwaris) maintained records in Khandugas.",
    modern_equivalent: "~80-160 kg (varies)",
    conversion_formula: "1 Khanduga = 40 Mana ≈ 80-160 kg",
    states: ["Telangana"],
    used_in: ["Revenue collection", "Bulk grain trade", "Land assessment"],
    tags: ["grain", "revenue", "nizam", "telangana"],
    created_at: "2024-01-01"
  },
  {
    id: "5",
    slug: "tola",
    name_english: "Tola",
    name_sanskrit: "तोला",
    name_telugu: "తోల",
    name_hindi: "तोला",
    local_names: ["Tolam", "Tole"],
    meaning: "Traditional unit of weight, originally the weight of a silver rupee coin",
    category: "weight",
    sector: "trade",
    origin: "Medieval India (Mughal era)",
    historical_context:
      "The Tola was standardised by the Mughal empire as the weight of a silver rupee. It was used extensively in trade, jewellery, and medicine across the Indian subcontinent. The British later defined 1 Tola = 180 grains troy = 11.664 grams.",
    modern_equivalent: "11.664 grams",
    conversion_formula: "1 Tola = 12 Mashas = 180 grains troy = 11.664 grams",
    states: ["Telangana"],
    used_in: ["Gold & silver trade", "Ayurvedic medicine", "Spice trade"],
    hierarchy: [
      { name: "Masha", relation: "smaller", value: 12, unit: "Masha = 1 Tola" },
      { name: "Seer", relation: "larger", value: 80, unit: "Tola = 1 Seer" }
    ],
    tags: ["weight", "mughal", "jewellery", "medicine"],
    created_at: "2024-01-01"
  },
  {
    id: "6",
    slug: "kani",
    name_english: "Kani",
    name_sanskrit: "कणि",
    name_telugu: "కాని",
    local_names: ["Kaanikaram"],
    meaning: "Small unit of area measurement used in land records",
    category: "area",
    sector: "agriculture",
    origin: "South India",
    historical_context:
      "The Kani was used in Tamil Nadu and Andhra for land measurement. It was part of a complex system of area units used in agricultural land records maintained by the British and Nizam governments.",
    modern_equivalent: "~0.33 acres (varies by region)",
    conversion_formula: "1 Kani ≈ 1/3 acre; 3 Kani = 1 Acre (approximately)",
    states: ["National"],
    used_in: ["Land records", "Agriculture", "Revenue"],
    tags: ["land", "area", "agriculture", "revenue"],
    created_at: "2024-01-01"
  }
];

export const RAW_MEASUREMENTS: Measurement[] = [
  ...WEST_BENGAL_MEASUREMENTS,
  ...JHARKHAND_MEASUREMENTS,
  ...BIHAR_MEASUREMENTS,
  ...HARYANA_MEASUREMENTS,
  ...ASSAM_MEASUREMENTS,
  ...UP_MEASUREMENTS,
  ...KERALA_MEASUREMENTS,
  ...ODISHA_MEASUREMENTS,
  ...TRIPURA_MEASUREMENTS,
  ...ARUNACHAL_PRADESH_MEASUREMENTS,
  ...MANIPUR_MEASUREMENTS,
  ...PUNJAB_MEASUREMENTS,
  ...MEGHALAYA_MEASUREMENTS,
  ...NAGALAND_MEASUREMENTS,
  ...TELANGANA_MEASUREMENTS,
  ...HIMACHAL_PRADESH_MEASUREMENTS,
  ...SIKKIM_MEASUREMENTS,
  ...UTTARAKHAND_MEASUREMENTS,
  ...GUJARAT_MEASUREMENTS,
  ...RAJASTHAN_MEASUREMENTS,
  ...MP_MEASUREMENTS,
  ...GOA_MEASUREMENTS,
  ...MAHARASHTRA_MEASUREMENTS,
  ...AP_MEASUREMENTS,
  ...KARNATAKA_MEASUREMENTS,
  ...MIZORAM_MEASUREMENTS,
  ...CHHATTISGARH_MEASUREMENTS,
  ...TAMILNADU_MEASUREMENTS,
  ...JK_MEASUREMENTS,
  ...VEDIC_MEASUREMENTS,
  ...BASE_SAMPLE_MEASUREMENTS
];

// ─── Data clean-up rules (applied once, at load time) ─────────────────────────
// Sectors that have been removed from the platform entirely.
export const REMOVED_SECTORS = new Set(["storage-transport", "storage"]);

// The site uses 8 major sectors (plus the separate Vedic collection).
// Smaller sectors from the source spreadsheets are folded into the closest major one.
export const SECTOR_ALIASES: Record<string, string> = {
  trade: "trade-commerce",
  "gold-jewellery": "trade-commerce",      // goldsmith's Ratti / Masha / Tola are trade weights
  "livestock-dairy": "agriculture",         // herding and dairy belong with farming
  "transportation-distance": "land-measurement", // Kos, Yojana … → Land & Distance
  "religious-cultural": "household",        // ritual and festival measures of everyday life
  time: "household",
};

// The Ratti (Gunja / Guriginja – the same Abrus seed) is a jeweller's and
// physician's weight, not an agricultural unit, so it is dropped from Agriculture.
const RATTI_NAMES = /^(ratti|gunja|guriginja)$/i;

const STATE_NAME_FIXES: Record<string, string> = {
  "jammu & kashmir": "Jammu and Kashmir",
};

const isUrl = (v?: string) => !!v && /^https?:\/\//i.test(v.trim());

/** True for records that should not appear anywhere on the site. */
export function isExcludedMeasurement(m: Pick<Measurement, "sector" | "name_english">): boolean {
  if (REMOVED_SECTORS.has(m.sector)) return true;
  if (m.sector === "agriculture" && RATTI_NAMES.test((m.name_english || "").trim())) return true;
  return false;
}

/** Normalises one record (sector aliases, state names, URL-only history text). */
export function normalizeMeasurement(m: Measurement): Measurement {
  const sector = SECTOR_ALIASES[m.sector] ?? m.sector;
  const states = m.states
    ? Array.from(new Set(m.states.map((s) => STATE_NAME_FIXES[s.toLowerCase()] ?? s)))
    : m.states;
  let { historical_context, references } = m;
  if (isUrl(historical_context)) {
    const url = historical_context!.trim();
    references = references?.includes(url) ? references : [...(references ?? []), url];
    historical_context = undefined;
  }
  return { ...m, sector, states, historical_context, references };
}

// After merging sectors the same unit can appear twice for one state
// (e.g. Tola from "Trade" and from "Gold"); keep the first, most complete one.
function dedupe(list: Measurement[]): Measurement[] {
  const seen = new Set<string>();
  const key = (m: Measurement) =>
    `${(m.states ?? []).join("|").toLowerCase()}::${m.sector}::${m.name_english.toLowerCase().trim()}`;
  return list.filter((m) => {
    const k = key(m);
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export const SAMPLE_MEASUREMENTS: Measurement[] = dedupe(
  RAW_MEASUREMENTS.map(normalizeMeasurement).filter((m) => !isExcludedMeasurement(m))
);

const countFor = (pred: (m: Measurement) => boolean) => SAMPLE_MEASUREMENTS.filter(pred).length;
const sameText = (a?: string, b?: string) => !!a && !!b && a.toLowerCase() === b.toLowerCase();


// ─── Sample States ────────────────────────────────────────────────────────────

const RAW_STATES: State[] = [
  {
    id: "ts",
    slug: "telangana",
    name: "Telangana",
    capital: "Hyderabad",
    region: "South India",
    language: "Telugu",
    description:
      "Telangana, carved out as India's 29th state in 2014, has a rich tradition of indigenous measurement systems shaped by Kakatiya, Bahmani, and Nizam-era administrations. The region's agricultural heritage is reflected in unique grain measures like Mana and Khanduga.",
    measurement_count: 161,
    districts: [
      { id: "hyd", slug: "hyderabad", name: "Hyderabad", state_id: "ts", measurement_count: 18 },
      { id: "wgl", slug: "warangal", name: "Warangal", state_id: "ts", measurement_count: 12 },
      { id: "nlg", slug: "nalgonda", name: "Nalgonda", state_id: "ts", measurement_count: 9 },
      { id: "khm", slug: "khammam", name: "Khammam", state_id: "ts", measurement_count: 11 },
      { id: "nzb", slug: "nizamabad", name: "Nizamabad", state_id: "ts", measurement_count: 8 },
      { id: "mdk", slug: "medak", name: "Medak", state_id: "ts", measurement_count: 7 },
      { id: "krm", slug: "karimnagar", name: "Karimnagar", state_id: "ts", measurement_count: 10 },
      { id: "adb", slug: "adilabad", name: "Adilabad", state_id: "ts", measurement_count: 6 }
    ]
  },
  {
    id: "ap",
    slug: "andhra-pradesh",
    name: "Andhra Pradesh",
    capital: "Amaravati",
    region: "South India",
    language: "Telugu",
    description: "Andhra Pradesh possesses an ancient and rich metrological heritage documented across major sectors including Seed & Crop (Agriculture), Trade & Commerce, Construction & Architecture, Medicine (Ayurveda), Textile & Handloom, Currency & Money, Household & Daily Life, Land Measurement, Transportation & Distance, Livestock & Dairy, and Gold & Jewellery, drawing from classical treatises (Mānasāra, Mayamata, Charaka Samhita, Sushruta Samhita, Arthashastra, Śilpa Śāstra), Satavahana and Vijayanagara epigraphs, and Madras Presidency historical records.",
    measurement_count: 192
  },
  {
    id: "tn",
    slug: "tamil-nadu",
    name: "Tamil Nadu",
    capital: "Chennai",
    region: "South India",
    language: "Tamil",
    description: "Tamil Nadu possesses a profound and ancient metrological heritage documented across major sectors including Agriculture, Trade & Commerce, Architecture, Medicine (Siddha & Ayurveda), Textile & Handloom, Currency & Money, Household, Land Measurement, Transportation & Distance, Livestock & Dairy, and Gold & Jewellery, drawing directly from Sangam literature, Chola epigraphs, Pallava-Nayak temple architecture treatises (Mānasāra, Mayamata, Śilpa Śāstra), Siddha pharmacy texts, and Madras Presidency historical records.",
    measurement_count: 204
  },
  {
    id: "ka",
    slug: "karnataka",
    name: "Karnataka",
    capital: "Bengaluru",
    region: "South India",
    language: "Kannada",
    description: "Karnataka possesses a rich traditional metrological heritage documented across major sectors including Transportation & Distance, Land Measurement, Livestock & Dairy, Household & Daily Life, Gold & Jewellery, Seed & Crop (Agriculture), Currency & Money, Trade & Commerce, Textile & Handloom, Medicine (Ayurveda), and Construction & Architecture, drawing from ancient Sanskrit treatises (Charaka Samhita, Sushruta Samhita, Arthashastra, Mānasāra, Mayamata, Manusmriti, Aṣṭāṅga Hṛdaya, Śilpa Śāstra), Hoysala and Vijayanagara epigraphs, Karnataka State Gazetteers, and Mysore historical revenue records.",
    measurement_count: 245
  },
  {
    id: "mh",
    slug: "maharashtra",
    name: "Maharashtra",
    capital: "Mumbai",
    region: "West India",
    language: "Marathi",
    description: "Maharashtra possesses a rich traditional metrological heritage documented across major sectors including Transportation & Distance, Land Measurement, Livestock & Dairy, Household & Daily Life, Gold & Jewellery, Seed & Crop (Agriculture), Currency & Money, Trade & Commerce, Textile & Handloom, Medicine (Ayurveda), and Construction & Architecture, drawing from ancient Sanskrit treatises (Mānasāra, Mayamata, Charaka Samhita, Sushruta Samhita, Arthashastra, Śilpa Śāstra), Maratha-era revenue records, and Bombay Presidency historical archives.",
    measurement_count: 186
  },
  {
    id: "gj",
    slug: "gujarat",
    name: "Gujarat",
    capital: "Gandhinagar",
    region: "West India",
    language: "Gujarati",
    description: "Gujarat possesses a rich indigenous metrological heritage documented across key sectors including Agriculture, Trade & Commerce, Construction & Architecture, Medicine (Ayurveda), Textile & Handloom, Currency & Money, Household & Daily Life, Land Measurement, Transportation & Distance, Livestock & Dairy, and Gold & Jewellery.",
    measurement_count: 199
  },
  {
    id: "rj",
    slug: "rajasthan",
    name: "Rajasthan",
    capital: "Jaipur",
    region: "North India",
    language: "Rajasthani",
    description: "Rajasthan possesses a vast traditional metrological heritage documented across 12 distinct sectors including Seed & Crop (Agriculture), Trade & Commerce, Construction & Architecture, Medicine (Ayurveda), Textile & Handloom, Currency & Money, Household & Daily Life, Land Measurement, Transportation & Distance, Livestock & Dairy, and Gold & Jewellery.",
    measurement_count: 221
  },
  {
    id: "up",
    slug: "uttar-pradesh",
    name: "Uttar Pradesh",
    capital: "Lucknow",
    region: "North India",
    language: "Hindi",
    description: "Uttar Pradesh possesses a vast repertoire of traditional measurement systems documented across 13 distinct sectors including Trade & Commerce, Textile & Handloom (Banarasi silk), Medicine (Ayurveda), Architecture (Mughal & Vastu), Distance, Land Survey, Currency, and Agriculture.",
    measurement_count: 88,
    districts: [
      { id: "vns", slug: "varanasi", name: "Varanasi (Kashi)", state_id: "up", measurement_count: 28 },
      { id: "agr", slug: "agra", name: "Agra", state_id: "up", measurement_count: 22 },
      { id: "lko", slug: "lucknow", name: "Lucknow", state_id: "up", measurement_count: 18 },
      { id: "pry", slug: "prayagraj", name: "Prayagraj", state_id: "up", measurement_count: 12 },
      { id: "mth", slug: "mathura", name: "Mathura", state_id: "up", measurement_count: 8 }
    ]
  },
  {
    id: "pb",
    slug: "punjab",
    name: "Punjab",
    capital: "Chandigarh",
    region: "North India",
    language: "Punjabi",
    description: "Punjab possesses a distinct traditional metrological heritage shaped by the Sikh Empire of Maharaja Ranjit Singh, Lahore and Amritsar mint coinages (Nanakshahi Rupee, Falus, Dhela, Paisa), Grand Trunk Road travel reckoning (Kos, Karam), iconic Phulkari and Bagh textile traditions, and canal-colony agricultural and survey standards.",
    measurement_count: 56
  },
  {
    id: "wb",
    slug: "west-bengal",
    name: "West Bengal",
    capital: "Kolkata",
    region: "East India",
    language: "Bengali",
    description: "West Bengal possesses a rich indigenous metrological heritage documented across 13 distinct sectors including Trade & Commerce, Textile & Handloom (Jamdani & Baluchari silk), Medicine (Ayurveda/Kobirai), Construction & Architecture (Terracotta temples), Transportation & Distance, Land Measurement (Chatak, Katha, Bigha), Livestock & Dairy, Household & Daily Life (Sherpai/Kunke bowls), Gold & Jewellery (Bhori/Roti system), Seed & Crop Agriculture, Currency & Money (Kori cowrie ladder, Tanka), and Religious & Cultural Sectors (Panjika almanac).",
    measurement_count: 69
  },
  { id: "od", slug: "odisha", name: "Odisha", capital: "Bhubaneswar", region: "East India", language: "Odia", measurement_count: 49 },
  { id: "kl", slug: "kerala", name: "Kerala", capital: "Thiruvananthapuram", region: "South India", language: "Malayalam", measurement_count: 201 },
  {
    id: "tr",
    slug: "tripura",
    name: "Tripura",
    capital: "Agartala",
    region: "Northeast India",
    language: "Bengali / Kokborok",
    description: "Tripura possesses a unique metrological heritage blending Manikya dynasty royal court standards (silver Tanka coinage, gold Mohur, palace architecture in Agartala and Neermahal) with customary backstrap-loom textile measurements (GI-tagged Risa, Rignai, Pachra) and indigenous hill reckoning traditions across 19 indigenous tribal communities.",
    measurement_count: 56
  },
  {
    id: "br",
    slug: "bihar",
    name: "Bihar",
    capital: "Patna",
    region: "East India",
    language: "Hindi / Bhojpuri / Maithili / Magahi",
    description: "Bihar possesses a deep metrological heritage documented across major sectors including Trade & Commerce (Mauryan punch-marked coinage at Pataliputra, Karshapana, Satamana), Textile & Handloom (Bhagalpuri Tussar silk & Mithila Madhubani art), Medicine (Nalanda Mahavihara Ayurvedic Metrology, Karsha, Kudava, Prastha), Construction & Architecture (Arthashastra specifications for Mauryan Pataliputra, Dhanus, Danda, Lagga), Transportation & Distance (Ashokan royal highway Uttarapatha rest-stops, Yojana, Kos, Manzil), Land Measurement (Dhurki, Dhur, Kattha, Bigha), Livestock & Dairy, Household & Daily Life, Gold & Jewellery, Seed & Crop Agriculture, Currency & Money, and Religious & Cultural Sectors.",
    measurement_count: 100,
    districts: [
      { id: "ptn", slug: "patna", name: "Patna (Pataliputra)", state_id: "br", measurement_count: 24 },
      { id: "bgp", slug: "bhagalpur", name: "Bhagalpur (Anga)", state_id: "br", measurement_count: 18 },
      { id: "gya", slug: "gaya", name: "Gaya / Bodh Gaya", state_id: "br", measurement_count: 16 },
      { id: "nld", slug: "nalanda", name: "Nalanda / Rajgir", state_id: "br", measurement_count: 14 },
      { id: "mfp", slug: "muzaffarpur", name: "Muzaffarpur (Tirhut)", state_id: "br", measurement_count: 12 },
      { id: "dbg", slug: "darbhanga", name: "Darbhanga (Mithila)", state_id: "br", measurement_count: 10 },
      { id: "ssm", slug: "sasaram", name: "Sasaram (Rohtas)", state_id: "br", measurement_count: 6 }
    ]
  },
  {
    id: "mp",
    slug: "madhya-pradesh",
    name: "Madhya Pradesh",
    capital: "Bhopal",
    region: "Central India",
    language: "Hindi",
    description: "Madhya Pradesh possesses a rich traditional metrological heritage documented across major sectors including Transportation & Distance, Land Measurement, Livestock & Dairy, Household & Daily Life, Gold & Jewellery, Seed & Crop (Agriculture), Currency & Money, Trade & Commerce, Textile & Handloom, Medicine (Ayurveda), and Construction & Architecture.",
    measurement_count: 92
  },
  {
    id: "as",
    slug: "assam",
    name: "Assam",
    capital: "Dispur",
    region: "Northeast India",
    language: "Assamese / Hindi",
    description: "Assam possesses a rich indigenous measurement heritage across major sectors documented directly from official land records (Dharitree portal), tea gardens, Muga and Eri silk weaving, Ahom-era architecture, livestock dairies, goldsmith trade (Bhori system), and Brahmaputra riverways.",
    measurement_count: 65
  },
  {
    id: "hr",
    slug: "haryana",
    name: "Haryana",
    capital: "Chandigarh",
    region: "North India",
    language: "Haryanvi / Hindi",
    description: "Haryana possesses a rich traditional measurement heritage across major sectors documented directly from official revenue records, agricultural mandis, Panipat handloom weaving traditions, Kos Minar road monuments, livestock dairies, goldsmith trade, currency systems, religious rituals, and Ayurvedic metrology.",
    measurement_count: 58
  },
  {
    id: "hp",
    slug: "himachal-pradesh",
    name: "Himachal Pradesh",
    capital: "Shimla",
    region: "North India",
    language: "Hindi / Pahari",
    description: "Himachal Pradesh possesses a distinctive Western Himalayan metrological heritage documented across major sectors including Trade & Commerce (Pahari bazaar weights, Ratti, Masha, Tola, Seer, Maund), Textile & Handloom (GI-tagged Kullu and Kinnauri shawls, wool yarn count Nm), Medicine (Ayurveda and Sowa-Rigpa Tibetan Amchi medicine, Srang), Construction & Architecture (Kath-Kuni earthquake-resistant timber-stone wall techniques), Transportation & Distance (Hindustan-Tibet pilgrim routes, Kos, Yojana), Land Measurement (Biswansi, Biswa, Bigha, Marla, Kanal), Livestock & Dairy, Household & Daily Life, Gold & Jewellery, Seed & Crop Agriculture, Currency & Money (ancient Trigarta, Kulluta, Audumbara punch-marked coins, Chamba copper Chakli), and Religious & Cultural Sectors.",
    measurement_count: 73
  },
  {
    id: "jk",
    slug: "jammu-and-kashmir",
    name: "Jammu and Kashmir",
    capital: "Srinagar / Jammu",
    region: "North India",
    language: "Kashmiri / Dogri",
    description: "Jammu & Kashmir possesses a unique Himalayan and Central Asian metrological heritage documented across 14 distinct sectors including Trade & Commerce, Textile & Handloom (Kashmiri hand-knotted carpets, KPSI, Talim notation, Pashmina wool weights), Medicine (Ayurveda and Unani), Construction & Architecture (Khatamband geometric wood ceilings, Taq and Dhajji Dewari timber-laced masonry), Transportation & Distance, Land Measurement (Karam survey chain, Sarsahi, Marla, Kanal), Livestock & Dairy, Household & Daily Life, Gold & Jewellery, Seed & Crop Agriculture, Currency & Money (Dogra copper Paisa, Hari Singh Rupee), Religious & Cultural Sectors, and Time & Calendar.",
    measurement_count: 192
  },
  {
    id: "jh",
    slug: "jharkhand",
    name: "Jharkhand",
    capital: "Ranchi",
    region: "East India",
    language: "Hindi / Nagpuri / Sadri / Santhali",
    description: "Jharkhand possesses a rich heritage of traditional measurement systems documented across major sectors including Trade & Commerce, Textile & Handloom (GI-certified Tussar silk), Medicine (Ayurveda), Construction & Architecture, Transportation & Distance, Land Measurement (Dhurki, Dhur, Katha, Bigha), Livestock & Dairy, Household & Daily Life, Gold & Jewellery (Santhal Rajohar silver units), Seed & Crop Agriculture, Currency & Money, and Religious & Cultural Sectors.",
    measurement_count: 100,
    districts: [
      { id: "rnc", slug: "ranchi", name: "Ranchi", state_id: "jh", measurement_count: 18 },
      { id: "jsr", slug: "jamshedpur", name: "Jamshedpur (East Singhbhum)", state_id: "jh", measurement_count: 14 },
      { id: "dnb", slug: "dhanbad", name: "Dhanbad", state_id: "jh", measurement_count: 12 },
      { id: "hzb", slug: "hazaribagh", name: "Hazaribagh", state_id: "jh", measurement_count: 10 },
      { id: "dmk", slug: "dumka", name: "Dumka", state_id: "jh", measurement_count: 9 },
      { id: "dgh", slug: "deoghar", name: "Deoghar", state_id: "jh", measurement_count: 8 }
    ]
  },
  {
    id: "ct",
    slug: "chhattisgarh",
    name: "Chhattisgarh",
    capital: "Raipur",
    region: "Central India",
    language: "Chhattisgarhi / Hindi",
    description: "Chhattisgarh possesses a rich traditional metrological heritage documented across major sectors including Agriculture (Seed & Crop), Trade & Commerce, Textile & Handloom, Medicine (Ayurveda), Construction & Architecture, Transportation & Distance, Land Measurement, Livestock & Dairy, Household & Daily Life, Gold & Jewellery, Currency & Money, and, drawing from classical Sanskrit treatises (Charaka Samhita, Sushruta Samhita, Arthashastra, Mayamata, Mānasāra), Central Provinces Gazetteers, and regional revenue settlement records.",
    measurement_count: 88
  },
  {
    id: "ga",
    slug: "goa",
    name: "Goa",
    capital: "Panaji",
    region: "West India",
    language: "Konkani",
    description: "Goa possesses a distinct traditional metrological heritage documented across major sectors including Seed & Crop (Agriculture), Trade & Commerce, Construction & Architecture, Medicine (Ayurveda), Textile & Handloom, Currency & Money, Household & Daily Life, Land Measurement, Transportation & Distance, Livestock & Dairy, and Gold & Jewellery, drawing from ancient Sanskrit treatises (Mānasāra, Arthashastra, Charaka Samhita, Sushruta Samhita), local Konkani village customs, and Portuguese colonial-era administrative records.",
    measurement_count: 194
  },
  {
    id: "ut",
    slug: "uttarakhand",
    name: "Uttarakhand",
    capital: "Dehradun",
    region: "North India",
    language: "Garhwali / Kumaoni",
    description: "Uttarakhand possesses a distinctive Himalayan metrological heritage across Garhwal and Kumaon documented across major sectors including Trade & Commerce, Textile & Handloom (Pankhi & Thulma weaving), Medicine (Ayurveda), Architecture (Koti Banal earthquake-resistant construction), Transportation & Distance, Land Measurement (Nali, Mutthi), Livestock & Dairy, Household & Daily Life, Gold & Jewellery, Seed & Crop Agriculture, Currency & Money, and Religious & Cultural Sectors.",
    measurement_count: 77
  },
  {
    id: "mn",
    slug: "manipur",
    name: "Manipur",
    capital: "Imphal",
    region: "Northeast India",
    language: "Meitei / Kokborok",
    description: "Manipur possesses a distinct traditional metrological system rooted in the Ningthouja/Meitei royal kingdom, centred on the King's arm-span (Sana Lamjel fathom for cloth, land survey, and valley roads), historical bell metal (Sel) and archaic Meitei bronze coinage, Vaishnavite Ayurvedic measures (Ratti, Masha, Karsha, Pala), fine handloom weaving (Moirang Phee, Innaphi, Phanek), and hill-tribal bodily reckoning across Naga and Kuki-Zo communities.",
    measurement_count: 52
  },
  {
    id: "ml",
    slug: "meghalaya",
    name: "Meghalaya",
    capital: "Shillong",
    region: "Northeast India",
    language: "Khasi / Garo",
    description: "Meghalaya possesses a distinct indigenous metrological heritage rooted in the Khasi, Jaintia (Pnar), and Garo communities. It features living root bridges (Jingkieng Jri) measured by generational growth-time rather than spatial units, centuries-old iron smelting and trade, Ka Ri Tynrap cowrie-shell currencies, Jaintiapur royal silver coinage, Ryndia Eri peace silk weaving, and annual hill-plains barter traditions at Jonbeel Mela.",
    measurement_count: 37
  },
  {
    id: "mz",
    slug: "mizoram",
    name: "Mizoram",
    capital: "Aizawl",
    region: "Northeast India",
    language: "Mizo",
    description: "Mizoram possesses an indigenous metrological and material culture deeply tied to Tibeto-Burman traditions, jhum-cultivation cycles, and village chieftainship (Lal). Key traditional measures include the Tin (grain measure and land unit), Sial (Mithun cattle as the highest measure of wealth and ceremonial sacrifice at Khuangchawi), heirloom brass gongs (Darbu), woven loin-loom cloths (Puan, Puanchei, Tawlhlohpuan, Pawndum), and traditional carrying baskets (Em dawrawn, Em tlamem).",
    measurement_count: 43
  },
  {
    id: "nl",
    slug: "nagaland",
    name: "Nagaland",
    capital: "Kohima",
    region: "Northeast India",
    language: "Naga tribal / English",
    description: "Nagaland possesses a distinct indigenous metrological and material heritage across 16+ Naga tribes. It features pre-colonial barter and commodity currencies (conch shells, iron, and Assamese Chabili trade knives), achievement-graded social shawls (Angami Lohe, Lotha Lungpensu stone-dragging shawls, and GI-tagged Ao Tsungkotepsu warrior shawls), morung bachelors' dormitory construction, and sophisticated wet-rice terrace engineering at Khonoma.",
    measurement_count: 40
  },
  {
    id: "sk",
    slug: "sikkim",
    name: "Sikkim",
    capital: "Gangtok",
    region: "Northeast India",
    language: "Nepali / Bhutia / Lepcha",
    description: "Sikkim possesses a rich traditional metrological system reflecting Namgyal dynasty kingdom practices, trans-Himalayan trade routes, Lepcha and Bhutia indigenous traditions across major sectors including Trade & Commerce, Textile & Handloom, Medicine, Architecture, Distance, Land Survey, Livestock, Daily Life, Gold, Agriculture, Currency, and Religious Sacred Geography.",
    measurement_count: 83
  },
  {
    id: "ar",
    slug: "arunachal-pradesh",
    name: "Arunachal Pradesh",
    capital: "Itanagar",
    region: "Northeast India",
    language: "Monpa / Nyishi / Adi / Hindi",
    description: "Arunachal Pradesh possesses a distinct indigenous metrological heritage reflecting trans-Himalayan Buddhist trade routes in Monyul (Tibetan Skar, Sho, Tangka, Srang coinages, Tawang caravan routes), customary tribal wealth systems (Mithun livestock-as-currency), back-strap loom textile measurements, and informal bodily and material reckoning across Eastern Himalayan hill communities.",
    measurement_count: 38
  }
];

export const INDIAN_STATES: State[] = RAW_STATES.map((st) => ({
  ...st,
  measurement_count: countFor((m) => !!m.states?.some((x) => sameText(x, st.name) || sameText(x, st.slug))),
  districts: st.districts?.map((d) => ({
    ...d,
    measurement_count: countFor(
      (m) => !!m.districts?.some((x) => sameText(x, d.name) || sameText(x, d.name.split(/\s*[(/]/)[0].trim()))
    ),
  })),
}));

// ─── Sectors ──────────────────────────────────────────────────────────────────

const RAW_SECTORS: Sector[] = [
  { id: "vedic", slug: "vedic-measurements", name: "Vedic Measurements", icon: "Scroll", kind: "classical", description: "Ancient canonical units across Length, Weight, Capacity, and Time codified in classical treatises" },
  { id: "agri", slug: "agriculture", name: "Agriculture & Livestock", icon: "Wheat", description: "Seed sowing, grain harvest and crop yield measures, with milk, ghee and herd measures of livestock and dairy" },
  { id: "trade", slug: "trade-commerce", name: "Trade & Commerce", icon: "Store", description: "Bazaar and mandi weights and volumes, including the goldsmith's Ratti, Masha and Tola" },
  { id: "arch", slug: "architecture", name: "Construction & Architecture", icon: "Building2", description: "Length measures for temple, fort, home and urban planning" },
  { id: "med", slug: "medicine", name: "Medicine (Ayurveda)", icon: "Stethoscope", description: "Ayurvedic drug measures, dosage units, and herbo-mineral preparations" },
  { id: "textile", slug: "textile-handloom", name: "Textile & Handloom", icon: "Scissors", description: "Length and count units for yarn, cloth, silk and loom weaving" },
  { id: "currency", slug: "currency-money", name: "Currency & Money", icon: "Coins", description: "Cowrie, Dam, Paisa, Anna, Rupee, Mohur and other monetary denominations" },
  { id: "hh", slug: "household", name: "Household & Daily Life", icon: "Home", description: "Everyday cooking and vessel measures, with the ritual time and festival reckoning of daily life" },
  { id: "land", slug: "land-measurement", name: "Land & Distance", icon: "Map", description: "Bigha, Guntha, Kani and survey units for land, and Kos, Yojana and stage distances for travel" },
];

export const SECTORS: Sector[] = RAW_SECTORS.map((sec) => ({
  ...sec,
  measurement_count: countFor((m) => m.sector === sec.slug),
}));

/**
 * Headline figure shown on the public pages ("3000+ measurements documented").
 * Change it here to update the home, about and sector pages together.
 * The exact live count is SITE_STATS.measurements (shown in the admin dashboard).
 */
export const MEASUREMENT_HEADLINE = "3000+";

/** Live totals used by the home page, admin dashboard and about page. */
export const SITE_STATS = {
  measurements: SAMPLE_MEASUREMENTS.length,
  states: RAW_STATES.length,
  sectors: RAW_SECTORS.filter((s) => s.kind !== "classical").length, // 8 major sectors
};

// ─── References ───────────────────────────────────────────────────────────────

export const SAMPLE_REFERENCES: Reference[] = [
  // ── Classical & historical texts ──
  { id: "1", title: "Arthashastra", author: "Kautilya (tr. R. Shamasastry, 1915)", type: "ancient_text", year: -300, url: "https://archive.org/stream/kautilyasarthash00sham/kautilyasarthash00sham_djvu.txt", description: "Treatise on statecraft and economics. Book II gives the Mauryan tables of weights, measures of length and divisions of time. Full English translation on the Internet Archive.", tags: ["weights", "measures", "economics"] },
  { id: "1b", title: "Arthashastra (Wikisource edition)", author: "Kautilya (tr. R. Shamasastry)", type: "ancient_text", url: "https://en.wikisource.org/wiki/Arthashastra", description: "Public-domain, chapter-by-chapter text of the Shamasastry translation, convenient for citing individual books.", tags: ["weights", "measures", "primary-source"] },
  { id: "2", title: "Manasara Silpa Shastra", author: "Manasara", type: "ancient_text", description: "Ancient Sanskrit treatise on architecture and sculpture with extensive coverage of the Angula-based measurement system used in construction.", tags: ["architecture", "length", "angula"] },
  { id: "6", title: "Lilavati", author: "Bhaskaracharya", type: "ancient_text", year: 1150, description: "12th century mathematical treatise with extensive tables of weights and measures used in India.", tags: ["mathematics", "weights"] },
  { id: "7", title: "Useful Tables: Coins, Weights and Measures of British India", author: "James Prinsep (ed. Edward Thomas)", type: "book", year: 1858, publisher: "John Murray, London (digitised by Gokhale Institute, Pune)", url: "https://dspace.gipe.ac.in/xmlui/handle/10973/38650", description: "The standard 19th-century compilation of Indian coin weights, seers, maunds and regional measures, digitised by the Gokhale Institute of Politics and Economics.", tags: ["colonial", "coins", "weights"] },
  { id: "3", title: "Indian Weights and Measures", author: "V. A. Smith", type: "book", year: 1912, publisher: "Journal of the Royal Asiatic Society", description: "Colonial-era academic survey documenting traditional Indian weights and measures across provinces.", tags: ["weights", "history", "colonial"] },
  { id: "4", title: "Traditional Weights and Measures of Telangana", author: "T. Hanumantha Rao", type: "research_paper", year: 2018, description: "Contemporary research paper documenting the indigenous measurement systems of the Telangana region with field surveys.", tags: ["telangana", "field-survey"] },
  { id: "5", title: "Report on Traditional Measurement Systems", author: "Ministry of Culture, Govt. of India", type: "government_source", year: 2019, description: "Official government documentation of indigenous measurement practices across Indian states.", tags: ["government", "national"] },

  // ── Government sources ──
  { id: "8", title: "The Legal Metrology Act, 2009", author: "Government of India", type: "government_source", year: 2009, publisher: "India Code (Legislative Department)", url: "https://www.indiacode.nic.in/bitstream/123456789/2102/1/2009l.pdf", description: "The current law that fixes India's standard weights and measures; it replaced the Standards of Weights and Measures Acts of 1976 and 1985 that completed the move away from traditional units.", tags: ["metric", "law", "standards"] },
  { id: "9", title: "Indian Knowledge Systems Division", author: "Ministry of Education, Govt. of India", type: "government_source", year: 2020, url: "https://iksindia.org/about.php", description: "The MoE division, set up in October 2020, that supports research and internships on Indian Knowledge Systems, including this project.", tags: ["iks", "moe", "internship"] },

  // ── Archaeology & museums ──
  { id: "10", title: "Cubical Weights of the Indus Civilisation", author: "Harappa.com (J. M. Kenoyer, Harappa Archaeological Research Project)", type: "website", url: "https://www.harappa.com/blog/cubical-weights", description: "Photographs and notes on the chert cube weights of Harappa, which followed a binary 1:2:4:8:16 series – the earliest standardised weights in South Asia.", tags: ["harappan", "weights", "archaeology"] },
  { id: "11", title: "Harappan Stone Weight (museum object)", author: "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya, Mumbai", type: "website", url: "https://csmvs.in/collections/weight/", description: "Museum record of a Harappan cubical weight, noting that the same weight system continued into the Gangetic kingdoms and later market practice.", tags: ["harappan", "museum", "weights"] },

  // ── Encyclopaedic references ──
  { id: "12", title: "Indian units of measurement", author: "Wikipedia", type: "website", url: "https://en.wikipedia.org/wiki/Indian_units_of_measurement", description: "Overview of pre-Akbar, Akbar-era and British-era Indian units, with tables linking Ratti, Masha, Tola, Seer and Maund.", tags: ["overview", "weights", "length"] },
  { id: "13", title: "Hindu units of time", author: "Wikipedia", type: "website", url: "https://en.wikipedia.org/wiki/Hindu_units_of_time", description: "Units of time from the Truti to the Kalpa as described in the Vedas, Puranas and Surya Siddhanta.", tags: ["time", "vedic"] },
  { id: "14", title: "Kos (unit)", author: "Wikipedia", type: "website", url: "https://en.wikipedia.org/wiki/Kos_(unit)", description: "The Kos / Krosha distance unit, its Arthashastra value and its use in Kos Minars and parikrama routes.", tags: ["distance", "kos"] },
  { id: "15", title: "Ratti (unit)", author: "Wikipedia", type: "website", url: "https://en.wikipedia.org/wiki/Ratti_(unit)", description: "The Ratti or Gunja seed weight (Abrus precatorius), the base of the jeweller's and Ayurvedic weight systems.", tags: ["ratti", "weight", "gold"] },
  { id: "16", title: "Tola (unit)", author: "Wikipedia", type: "website", url: "https://en.wikipedia.org/wiki/Tola_(unit)", description: "The Tola, standardised in 1833 as 180 grains (11.66 g) – the weight of the silver rupee.", tags: ["tola", "weight", "gold"] },
  { id: "17", title: "Indian 1-rupee coin", author: "Wikipedia", type: "website", url: "https://en.wikipedia.org/wiki/Indian_1-rupee_coin", description: "History of the rupee coin from the Mughal and Company periods; the silver rupee doubled as the one-Tola reference weight.", tags: ["currency", "tola", "rupee"] },
  { id: "18", title: "Angula – definitions across Indian texts", author: "Wisdom Library", type: "website", url: "https://www.wisdomlib.org/definition/angula", description: "How the Angula is defined in the Manasara, Vayu Purana, Ayurveda and Jain texts, with its relation to Yava and Vitasti.", tags: ["angula", "length", "vastu"] },
  { id: "19", title: "Vitasti – definitions across Indian texts", author: "Wisdom Library", type: "website", url: "https://www.wisdomlib.org/definition/vitasti", description: "The Vitasti (span of 12 Angulas) in Vastu, Shilpa and Puranic literature.", tags: ["vitasti", "length", "vastu"] },
];

// ─── Infographics ─────────────────────────────────────────────────────────────

export const SAMPLE_INFOGRAPHICS: Infographic[] = [
  { id: "1", title: "Length Hierarchy: From Paramanu to Yojana", category: "length", sector: "architecture", tags: ["hierarchy", "vedic"] },
  { id: "2", title: "Grain Measures of Telangana", category: "volume", state: "Telangana", tags: ["grain", "agriculture"] },
  { id: "3", title: "Traditional Weight Systems: Tola to Maund", category: "weight", sector: "trade", tags: ["weight", "trade"] },
  { id: "4", title: "Vedic Time Units: Nimesa to Kalpa", category: "time", tags: ["time", "vedic"] },
  { id: "5", title: "Land Area Units of Deccan Plateau", category: "area", state: "Telangana", tags: ["land", "agriculture"] },
  { id: "6", title: "Currency of Nizam's Hyderabad", category: "currency", state: "Telangana", tags: ["currency", "nizam"] }
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

export const CATEGORIES = [
  { value: "length", label: "Length" },
  { value: "weight", label: "Weight" },
  { value: "capacity", label: "Capacity" },
  { value: "volume", label: "Volume" },
  { value: "area", label: "Area" },
  { value: "time", label: "Time" },
  { value: "currency", label: "Currency" },
  { value: "count", label: "Count" },
  { value: "other", label: "Other" }
];

export const getCategoryColor = (category: string): string => {
  const map: Record<string, string> = {
    length: "bg-blue-100 text-blue-800",
    weight: "bg-green-100 text-green-800",
    capacity: "bg-teal-100 text-teal-800",
    volume: "bg-purple-100 text-purple-800",
    area: "bg-orange-100 text-orange-800",
    time: "bg-amber-100 text-amber-800",
    currency: "bg-red-100 text-red-800",
    count: "bg-pink-100 text-pink-800",
    other: "bg-gray-100 text-gray-800"
  };
  return map[category?.toLowerCase()] || "bg-gray-100 text-gray-800";
};
