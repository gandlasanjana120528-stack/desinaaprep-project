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

export const SAMPLE_MEASUREMENTS: Measurement[] = [
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
  ...BASE_SAMPLE_MEASUREMENTS
];

// ─── Sample States ────────────────────────────────────────────────────────────

export const INDIAN_STATES: State[] = [
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
    description: "Andhra Pradesh possesses an ancient and rich metrological heritage documented across 12 major sectors including Seed & Crop (Agriculture), Trade & Commerce, Construction & Architecture, Medicine (Ayurveda), Textile & Handloom, Currency & Money, Household & Daily Life, Storage & Transportation, Land Measurement, Transportation & Distance, Livestock & Dairy, and Gold & Jewellery, drawing from classical treatises (Mānasāra, Mayamata, Charaka Samhita, Sushruta Samhita, Arthashastra, Śilpa Śāstra), Satavahana and Vijayanagara epigraphs, and Madras Presidency historical records.",
    measurement_count: 192
  },
  {
    id: "tn",
    slug: "tamil-nadu",
    name: "Tamil Nadu",
    capital: "Chennai",
    region: "South India",
    language: "Tamil",
    description: "Tamil Nadu possesses a profound and ancient metrological heritage documented across 12 major sectors including Agriculture, Trade & Commerce, Architecture, Medicine (Siddha & Ayurveda), Textile & Handloom, Currency & Money, Household, Storage & Transportation, Land Measurement, Transportation & Distance, Livestock & Dairy, and Gold & Jewellery, drawing directly from Sangam literature, Chola epigraphs, Pallava-Nayak temple architecture treatises (Mānasāra, Mayamata, Śilpa Śāstra), Siddha pharmacy texts, and Madras Presidency historical records.",
    measurement_count: 204
  },
  {
    id: "ka",
    slug: "karnataka",
    name: "Karnataka",
    capital: "Bengaluru",
    region: "South India",
    language: "Kannada",
    description: "Karnataka possesses a rich traditional metrological heritage documented across 12 major sectors including Transportation & Distance, Land Measurement, Livestock & Dairy, Household & Daily Life, Gold & Jewellery, Seed & Crop (Agriculture), Currency & Money, Storage & Transportation, Trade & Commerce, Textile & Handloom, Medicine (Ayurveda), and Construction & Architecture, drawing from ancient Sanskrit treatises (Charaka Samhita, Sushruta Samhita, Arthashastra, Mānasāra, Mayamata, Manusmriti, Aṣṭāṅga Hṛdaya, Śilpa Śāstra), Hoysala and Vijayanagara epigraphs, Karnataka State Gazetteers, and Mysore historical revenue records.",
    measurement_count: 245
  },
  {
    id: "mh",
    slug: "maharashtra",
    name: "Maharashtra",
    capital: "Mumbai",
    region: "West India",
    language: "Marathi",
    description: "Maharashtra possesses a rich traditional metrological heritage documented across 12 major sectors including Transportation & Distance, Land Measurement, Livestock & Dairy, Household & Daily Life, Gold & Jewellery, Seed & Crop (Agriculture), Currency & Money, Storage & Transportation, Trade & Commerce, Textile & Handloom, Medicine (Ayurveda), and Construction & Architecture, drawing from ancient Sanskrit treatises (Mānasāra, Mayamata, Charaka Samhita, Sushruta Samhita, Arthashastra, Śilpa Śāstra), Maratha-era revenue records, and Bombay Presidency historical archives.",
    measurement_count: 186
  },
  {
    id: "gj",
    slug: "gujarat",
    name: "Gujarat",
    capital: "Gandhinagar",
    region: "West India",
    language: "Gujarati",
    description: "Gujarat possesses a rich indigenous metrological heritage documented across 12 key sectors including Agriculture, Trade & Commerce, Construction & Architecture, Medicine (Ayurveda), Textile & Handloom, Currency & Money, Household & Daily Life, Storage & Transportation, Land Measurement, Transportation & Distance, Livestock & Dairy, and Gold & Jewellery.",
    measurement_count: 199
  },
  {
    id: "rj",
    slug: "rajasthan",
    name: "Rajasthan",
    capital: "Jaipur",
    region: "North India",
    language: "Rajasthani",
    description: "Rajasthan possesses a vast traditional metrological heritage documented across 12 distinct sectors including Seed & Crop (Agriculture), Trade & Commerce, Construction & Architecture, Medicine (Ayurveda), Textile & Handloom, Currency & Money, Household & Daily Life, Storage & Transportation, Land Measurement, Transportation & Distance, Livestock & Dairy, and Gold & Jewellery.",
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
    description: "West Bengal possesses a rich indigenous metrological heritage documented across 13 distinct sectors including Trade & Commerce, Textile & Handloom (Jamdani & Baluchari silk), Medicine (Ayurveda/Kobirai), Construction & Architecture (Terracotta temples), Transportation & Distance, Land Measurement (Chatak, Katha, Bigha), Livestock & Dairy, Household & Daily Life (Sherpai/Kunke bowls), Gold & Jewellery (Bhori/Roti system), Seed & Crop Agriculture, Currency & Money (Kori cowrie ladder, Tanka), Storage & Transportation (Gola granaries, Nouka-bhar boatloads), and Religious & Cultural Sectors (Panjika almanac).",
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
    description: "Bihar possesses a deep metrological heritage documented across 13 major sectors including Trade & Commerce (Mauryan punch-marked coinage at Pataliputra, Karshapana, Satamana), Textile & Handloom (Bhagalpuri Tussar silk & Mithila Madhubani art), Medicine (Nalanda Mahavihara Ayurvedic Metrology, Karsha, Kudava, Prastha), Construction & Architecture (Arthashastra specifications for Mauryan Pataliputra, Dhanus, Danda, Lagga), Transportation & Distance (Ashokan royal highway Uttarapatha rest-stops, Yojana, Kos, Manzil), Land Measurement (Dhurki, Dhur, Kattha, Bigha), Livestock & Dairy, Household & Daily Life, Gold & Jewellery, Seed & Crop Agriculture, Currency & Money, Storage & Transportation (Patna's Golghar granary), and Religious & Cultural Sectors.",
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
    description: "Madhya Pradesh possesses a rich traditional metrological heritage documented across 12 major sectors including Transportation & Distance, Land Measurement, Livestock & Dairy, Household & Daily Life, Gold & Jewellery, Seed & Crop (Agriculture), Currency & Money, Storage & Transportation, Trade & Commerce, Textile & Handloom, Medicine (Ayurveda), and Construction & Architecture.",
    measurement_count: 92
  },
  {
    id: "as",
    slug: "assam",
    name: "Assam",
    capital: "Dispur",
    region: "Northeast India",
    language: "Assamese / Hindi",
    description: "Assam possesses a rich indigenous measurement heritage across 10 major sectors documented directly from official land records (Dharitree portal), tea gardens, Muga and Eri silk weaving, Ahom-era architecture, livestock dairies, goldsmith trade (Bhori system), and Brahmaputra riverways.",
    measurement_count: 65
  },
  {
    id: "hr",
    slug: "haryana",
    name: "Haryana",
    capital: "Chandigarh",
    region: "North India",
    language: "Haryanvi / Hindi",
    description: "Haryana possesses a rich traditional measurement heritage across 13 major sectors documented directly from official revenue records, agricultural mandis, Panipat handloom weaving traditions, Kos Minar road monuments, livestock dairies, goldsmith trade, currency systems, granary storage, religious rituals, and Ayurvedic metrology.",
    measurement_count: 58
  },
  {
    id: "hp",
    slug: "himachal-pradesh",
    name: "Himachal Pradesh",
    capital: "Shimla",
    region: "North India",
    language: "Hindi / Pahari",
    description: "Himachal Pradesh possesses a distinctive Western Himalayan metrological heritage documented across 13 major sectors including Trade & Commerce (Pahari bazaar weights, Ratti, Masha, Tola, Seer, Maund), Textile & Handloom (GI-tagged Kullu and Kinnauri shawls, wool yarn count Nm), Medicine (Ayurveda and Sowa-Rigpa Tibetan Amchi medicine, Srang), Construction & Architecture (Kath-Kuni earthquake-resistant timber-stone wall techniques), Transportation & Distance (Hindustan-Tibet pilgrim routes, Kos, Yojana), Land Measurement (Biswansi, Biswa, Bigha, Marla, Kanal), Livestock & Dairy, Household & Daily Life, Gold & Jewellery, Seed & Crop Agriculture, Currency & Money (ancient Trigarta, Kulluta, Audumbara punch-marked coins, Chamba copper Chakli), Storage & Transportation (Doko baskets, Khachar caravan loads, Kothar granaries), and Religious & Cultural Sectors.",
    measurement_count: 73
  },
  {
    id: "jk",
    slug: "jammu-and-kashmir",
    name: "Jammu and Kashmir",
    capital: "Srinagar / Jammu",
    region: "North India",
    language: "Kashmiri / Dogri",
    description: "Jammu & Kashmir possesses a unique Himalayan and Central Asian metrological heritage documented across 14 distinct sectors including Trade & Commerce, Textile & Handloom (Kashmiri hand-knotted carpets, KPSI, Talim notation, Pashmina wool weights), Medicine (Ayurveda and Unani), Construction & Architecture (Khatamband geometric wood ceilings, Taq and Dhajji Dewari timber-laced masonry), Transportation & Distance, Land Measurement (Karam survey chain, Sarsahi, Marla, Kanal), Livestock & Dairy, Household & Daily Life, Gold & Jewellery, Seed & Crop Agriculture, Currency & Money (Dogra copper Paisa, Hari Singh Rupee), Storage & Transportation (Trakh, Kharwar, Shikara-loads), Religious & Cultural Sectors, and Time & Calendar.",
    measurement_count: 192
  },
  {
    id: "jh",
    slug: "jharkhand",
    name: "Jharkhand",
    capital: "Ranchi",
    region: "East India",
    language: "Hindi / Nagpuri / Sadri / Santhali",
    description: "Jharkhand possesses a rich heritage of traditional measurement systems documented across 13 major sectors including Trade & Commerce, Textile & Handloom (GI-certified Tussar silk), Medicine (Ayurveda), Construction & Architecture, Transportation & Distance, Land Measurement (Dhurki, Dhur, Katha, Bigha), Livestock & Dairy, Household & Daily Life, Gold & Jewellery (Santhal Rajohar silver units), Seed & Crop Agriculture, Currency & Money, Storage & Transportation, and Religious & Cultural Sectors.",
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
    description: "Chhattisgarh possesses a rich traditional metrological heritage documented across 12 major sectors including Agriculture (Seed & Crop), Trade & Commerce, Textile & Handloom, Medicine (Ayurveda), Construction & Architecture, Transportation & Distance, Land Measurement, Livestock & Dairy, Household & Daily Life, Gold & Jewellery, Currency & Money, and Storage & Transportation, drawing from classical Sanskrit treatises (Charaka Samhita, Sushruta Samhita, Arthashastra, Mayamata, Mānasāra), Central Provinces Gazetteers, and regional revenue settlement records.",
    measurement_count: 88
  },
  {
    id: "ga",
    slug: "goa",
    name: "Goa",
    capital: "Panaji",
    region: "West India",
    language: "Konkani",
    description: "Goa possesses a distinct traditional metrological heritage documented across 12 major sectors including Seed & Crop (Agriculture), Trade & Commerce, Construction & Architecture, Medicine (Ayurveda), Textile & Handloom, Currency & Money, Household & Daily Life, Storage & Transportation, Land Measurement, Transportation & Distance, Livestock & Dairy, and Gold & Jewellery, drawing from ancient Sanskrit treatises (Mānasāra, Arthashastra, Charaka Samhita, Sushruta Samhita), local Konkani village customs, and Portuguese colonial-era administrative records.",
    measurement_count: 194
  },
  {
    id: "ut",
    slug: "uttarakhand",
    name: "Uttarakhand",
    capital: "Dehradun",
    region: "North India",
    language: "Garhwali / Kumaoni",
    description: "Uttarakhand possesses a distinctive Himalayan metrological heritage across Garhwal and Kumaon documented across 13 major sectors including Trade & Commerce, Textile & Handloom (Pankhi & Thulma weaving), Medicine (Ayurveda), Architecture (Koti Banal earthquake-resistant construction), Transportation & Distance, Land Measurement (Nali, Mutthi), Livestock & Dairy, Household & Daily Life, Gold & Jewellery, Seed & Crop Agriculture, Currency & Money, Storage & Transportation, and Religious & Cultural Sectors.",
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
    description: "Sikkim possesses a rich traditional metrological system reflecting Namgyal dynasty kingdom practices, trans-Himalayan trade routes, Lepcha and Bhutia indigenous traditions across 13 major sectors including Trade & Commerce, Textile & Handloom, Medicine, Architecture, Distance, Land Survey, Livestock, Daily Life, Gold, Agriculture, Currency, Storage, and Religious Sacred Geography.",
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

// ─── Sectors ──────────────────────────────────────────────────────────────────

export const SECTORS: Sector[] = [
  { id: "trade", slug: "trade-commerce", name: "Trade & Commerce", icon: "Store", description: "Weight and volume units for bazaar, mandi, and commercial trade", measurement_count: 67 },
  { id: "textile", slug: "textile-handloom", name: "Textile & Handloom", icon: "Scissors", description: "Length and count units for Banarasi silk, brocade, and loom weaving", measurement_count: 31 },
  { id: "med", slug: "medicine", name: "Medicine (Ayurveda)", icon: "Stethoscope", description: "Ayurvedic drug measures, dosage units, and herbo-mineral preparations", measurement_count: 39 },
  { id: "arch", slug: "architecture", name: "Construction & Architecture", icon: "Building2", description: "Length measures for temple, fort, home and urban planning", measurement_count: 72 },
  { id: "trans-dist", slug: "transportation-distance", name: "Transportation & Distance", icon: "Compass", description: "Stage distance, Kos Minar road markers, and travel units", measurement_count: 24 },
  { id: "land", slug: "land-measurement", name: "Land Measurement", icon: "Map", description: "Bigha, Biswa, Dhur, Jarib chain, and survey revenue units", measurement_count: 45 },
  { id: "dairy", slug: "livestock-dairy", name: "Livestock & Dairy", icon: "Milk", description: "Milk, ghee, and khoya measures used by gwalas and dairy mandis", measurement_count: 18 },
  { id: "hh", slug: "household", name: "Household & Daily Life", icon: "Home", description: "Everyday cooking, handful, pinch, and utility vessel volume units", measurement_count: 45 },
  { id: "gold", slug: "gold-jewellery", name: "Gold & Jewellery", icon: "Gem", description: "Sunar gold, silver, gem weighing scales (Ratti, Tola, Suvarna)", measurement_count: 35 },
  { id: "agri", slug: "agriculture", name: "Seed & Crop (Agriculture)", icon: "Wheat", description: "Seed sowing quantities, grain harvest measures, and crop yield units", measurement_count: 84 },
  { id: "currency", slug: "currency-money", name: "Currency & Money", icon: "Coins", description: "Mughal Dam, Rupee, Damri, Paisa, and monetary denominations", measurement_count: 48 },
  { id: "storage", slug: "storage-transport", name: "Storage & Transportation", icon: "Package", description: "Bulk granary storage, cartload, and warehouse consignment measures", measurement_count: 28 },
  { id: "relig", slug: "religious-cultural", name: "Religious & Cultural", icon: "Sparkles", description: "Panchang ritual time, Ghati, Pal, Muhurta, and sacred geography units", measurement_count: 30 }
];

// ─── References ───────────────────────────────────────────────────────────────

export const SAMPLE_REFERENCES: Reference[] = [
  { id: "1", title: "Arthashastra", author: "Kautilya", type: "ancient_text", year: -300, description: "Comprehensive treatise on statecraft, economic policy and military strategy; contains detailed descriptions of weights, measures and monetary systems of ancient India.", tags: ["weights", "measures", "economics"] },
  { id: "2", title: "Manasara Silpa Shastra", author: "Manasara", type: "ancient_text", description: "Ancient Sanskrit treatise on architecture and sculpture with extensive coverage of the Angula-based measurement system used in construction.", tags: ["architecture", "length", "angula"] },
  { id: "3", title: "Indian Weights and Measures", author: "V. A. Smith", type: "book", year: 1912, publisher: "Journal of the Royal Asiatic Society", description: "Colonial-era academic survey documenting traditional Indian weights and measures across provinces.", tags: ["weights", "history", "colonial"] },
  { id: "4", title: "Traditional Weights and Measures of Telangana", author: "T. Hanumantha Rao", type: "research_paper", year: 2018, description: "Contemporary research paper documenting the indigenous measurement systems of the Telangana region with field surveys.", tags: ["telangana", "field-survey"] },
  { id: "5", title: "Report on Traditional Measurement Systems", author: "Ministry of Culture, Govt. of India", type: "government_source", year: 2019, description: "Official government documentation of indigenous measurement practices across Indian states.", tags: ["government", "national"] },
  { id: "6", title: "Lilavati", author: "Bhaskaracharya", type: "ancient_text", year: 1150, description: "12th century mathematical treatise with extensive tables of weights and measures used in India.", tags: ["mathematics", "weights"] }
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
    volume: "bg-purple-100 text-purple-800",
    area: "bg-orange-100 text-orange-800",
    time: "bg-yellow-100 text-yellow-800",
    currency: "bg-red-100 text-red-800",
    count: "bg-pink-100 text-pink-800",
    other: "bg-gray-100 text-gray-800"
  };
  return map[category] || "bg-gray-100 text-gray-800";
};
