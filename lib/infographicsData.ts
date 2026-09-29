import { Infographic } from "@/types";

export const INFOGRAPHICS_DATA: Infographic[] = [
  {
    id: "vedic-length",
    title: "Vedic Length Hierarchy: From Paramanu to Yojana",
    subtitle: "The ancient Indian continuum from infinitesimal particle to astronomical distances",
    category: "length",
    sector: "architecture",
    period: "Vedic to Classical (~1500 BCE – 500 CE)",
    historical_source: "Arthashastra of Kautilya (Book II, Ch. 20) & Manasara Silpa Shastra",
    icon_emoji: "📐",
    tags: ["vedic", "architecture", "vastu", "astronomy", "linear-flow"],
    theme: {
      primary: "#2563EB",
      light: "#EFF6FF",
      accent: "#1D4ED8",
      border: "#BFDBFE",
      badge: "bg-blue-100 text-blue-800 border-blue-200",
      gradient: "from-blue-900/90 via-blue-800/80 to-indigo-900/90"
    },
    description:
      "Ancient Indian metrology established a comprehensive base-8 and anatomical length scale. Starting with the Paramanu (the finest visible speck in a sunbeam), it ascends through botanical measures (sesame, mustard, barley) to human anatomical standards (Angula = finger-breadth, Hasta = forearm cubit), up to the cosmic Yojana used for astronomical and road measurements.",
    nodes: [
      {
        id: "paramanu",
        name: "Paramanu",
        vernacular: "परमाणु",
        relation_text: "Base Micro-Unit",
        multiplier: 1,
        metric_equiv: "≈ 0.054 µm",
        desc: "The finest mote seen floating in a sunbeam passing through a lattice window.",
        category_level: "micro",
        badge: "Atomic Scale",
        historical_note: "Mentioned in Vaisesika Darshana and Arthashastra."
      },
      {
        id: "trasarenu",
        name: "Trasarenu",
        vernacular: "त्रसरेणु",
        relation_text: "8 Paramanu",
        multiplier: 8,
        metric_equiv: "≈ 0.43 µm",
        desc: "Visible dust mote agitated in sunbeam.",
        category_level: "micro",
        badge: "8× Paramanu"
      },
      {
        id: "liksha",
        name: "Liksha / Nit",
        vernacular: "लिक्षा",
        relation_text: "8 Trasarenu",
        multiplier: 64,
        metric_equiv: "≈ 3.44 µm",
        desc: "Egg of a louse or finest poppy speck.",
        category_level: "micro",
        badge: "8× Trasarenu"
      },
      {
        id: "yuka",
        name: "Yuka",
        vernacular: "यूक",
        relation_text: "8 Liksha",
        multiplier: 512,
        metric_equiv: "≈ 27.5 µm",
        desc: "Width of a mustard seed / louse.",
        category_level: "micro",
        badge: "8× Liksha"
      },
      {
        id: "yava",
        name: "Yava (Barley)",
        vernacular: "यव",
        relation_text: "8 Yuka",
        multiplier: 4096,
        metric_equiv: "≈ 2.2 mm",
        desc: "Width of a medium barley grain placed side-by-side.",
        category_level: "micro",
        badge: "Botanical Standard"
      },
      {
        id: "angula",
        name: "Angula",
        vernacular: "अंगुल",
        relation_text: "8 Yava",
        multiplier: 32768,
        metric_equiv: "≈ 1.763 cm (3/4 in)",
        desc: "Width of the middle joint of the middle finger of an adult.",
        category_level: "anatomical",
        badge: "Core Master Unit",
        historical_note: "The primary standard unit in Vastu Shastra and Shilpa Shastras."
      },
      {
        id: "vitasti",
        name: "Vitasti (Span)",
        vernacular: "वितस्ति",
        relation_text: "12 Angula",
        multiplier: 393216,
        metric_equiv: "≈ 21.15 cm (8.3 in)",
        desc: "Full hand span from the tip of the thumb to the tip of the little finger outstretched.",
        category_level: "anatomical",
        badge: "12× Angula"
      },
      {
        id: "hasta",
        name: "Hasta (Cubit)",
        vernacular: "हस्त",
        relation_text: "24 Angula (2 Vitasti)",
        multiplier: 786432,
        metric_equiv: "≈ 45.72 cm (18 in)",
        desc: "Distance from elbow tip to the tip of the extended middle finger.",
        category_level: "anatomical",
        badge: "Architectural Cubit",
        historical_note: "Standard measure for temple architecture, idols, and domestic structures."
      },
      {
        id: "danda",
        name: "Danda / Dhanus",
        vernacular: "दण्ड / धनुष",
        relation_text: "4 Hasta",
        multiplier: 3145728,
        metric_equiv: "≈ 1.828 m (6 ft)",
        desc: "Measuring rod / warrior bow length used in royal town planning and fort construction.",
        category_level: "tool",
        badge: "4× Hasta"
      },
      {
        id: "krosa",
        name: "Krosa / Goruta",
        vernacular: "क्रोश / गोरुत",
        relation_text: "2,000 Danda",
        multiplier: 6291456000,
        metric_equiv: "≈ 3.65 km (2.27 miles)",
        desc: "The audible range of a cow's moo or stage distance between resting points.",
        category_level: "macro",
        badge: "2000× Danda"
      },
      {
        id: "yojana",
        name: "Yojana",
        vernacular: "योजन",
        relation_text: "4 Krosa",
        multiplier: 25165824000,
        metric_equiv: "≈ 14.63 km (9.09 miles)",
        desc: "A day's march for an army or harnessed bullock cart; astronomical unit of earth's diameter.",
        category_level: "macro",
        badge: "4× Krosa / 8000 Danda",
        historical_note: "Used by Aryabhata and Surya Siddhanta for calculating Earth circumference."
      }
    ],
    connections: [
      { from: "paramanu", to: "trasarenu", label: "× 8", formula: "8 Paramanu = 1 Trasarenu" },
      { from: "trasarenu", to: "liksha", label: "× 8", formula: "8 Trasarenu = 1 Liksha" },
      { from: "liksha", to: "yuka", label: "× 8", formula: "8 Liksha = 1 Yuka" },
      { from: "yuka", to: "yava", label: "× 8", formula: "8 Yuka = 1 Yava" },
      { from: "yava", to: "angula", label: "× 8", formula: "8 Yava = 1 Angula (~1.76 cm)" },
      { from: "angula", to: "vitasti", label: "× 12", formula: "12 Angula = 1 Vitasti (~21.15 cm)" },
      { from: "vitasti", to: "hasta", label: "× 2", formula: "2 Vitasti = 24 Angula = 1 Hasta (~45.7 cm)" },
      { from: "hasta", to: "danda", label: "× 4", formula: "4 Hasta = 1 Danda / Dhanus (~1.83 m)" },
      { from: "danda", to: "krosa", label: "× 2,000", formula: "2,000 Danda = 1 Krosa (~3.65 km)" },
      { from: "krosa", to: "yojana", label: "× 4", formula: "4 Krosa = 1 Yojana (~14.6 km)" }
    ],
    conversion_table: [
      { from: "1 Angula", to: "Metric", ratio: "1.763 cm", notes: "24 Angula = 1 Hasta" },
      { from: "1 Hasta", to: "Metric", ratio: "45.72 cm (1.5 ft)", notes: "Standard construction cubit" },
      { from: "1 Danda", to: "Metric", ratio: "1.828 meters", notes: "4 Hasta" },
      { from: "1 Krosa", to: "Metric", ratio: "3.65 km", notes: "8,000 Hasta" },
      { from: "1 Yojana", to: "Metric", ratio: "14.63 km", notes: "32,000 Hasta" }
    ],
    key_insights: [
      "Master base-8 logarithmic progression governs the micro-world (Paramanu to Angula).",
      "Human body proportions (finger width, palm span, forearm) formed universal architectural harmony.",
      "The Yojana was so rigorously defined that Surya Siddhanta computed Earth's diameter to within 1.5% accuracy."
    ],
    calculator: {
      base_unit_id: "angula",
      units: [
        { id: "yava", name: "Yava (Barley)", factor_to_base: 0.125, symbol: "yv", metric_unit: "mm", metric_factor: 2.203 },
        { id: "angula", name: "Angula (Finger)", factor_to_base: 1, symbol: "ang", metric_unit: "cm", metric_factor: 1.763 },
        { id: "vitasti", name: "Vitasti (Span)", factor_to_base: 12, symbol: "vit", metric_unit: "cm", metric_factor: 21.156 },
        { id: "hasta", name: "Hasta (Cubit)", factor_to_base: 24, symbol: "hst", metric_unit: "cm", metric_factor: 45.72 },
        { id: "danda", name: "Danda (Staff)", factor_to_base: 96, symbol: "dnd", metric_unit: "m", metric_factor: 1.8288 },
        { id: "krosa", name: "Krosa (Cos)", factor_to_base: 192000, symbol: "krs", metric_unit: "km", metric_factor: 3.6576 },
        { id: "yojana", name: "Yojana", factor_to_base: 768000, symbol: "yoj", metric_unit: "km", metric_factor: 14.63 }
      ]
    }
  },
  {
    id: "bazaar-weights",
    title: "Traditional Weight Systems: Gunja/Ratti to Maund (Man)",
    subtitle: "The pan-Indian weight system from jeweler's seed balance to mandi freight",
    category: "weight",
    sector: "trade-commerce",
    period: "Mughal & British Standardized (1590 – 1958 CE)",
    historical_source: "Ain-i-Akbari by Abul Fazl & Indian Weights and Measures Act (1871)",
    icon_emoji: "⚖️",
    tags: ["weight", "trade", "jewellery", "bullion", "mandi"],
    theme: {
      primary: "#059669",
      light: "#ECFDF5",
      accent: "#047857",
      border: "#A7F3D0",
      badge: "bg-emerald-100 text-emerald-800 border-emerald-200",
      gradient: "from-emerald-900/90 via-teal-800/80 to-green-950/90"
    },
    description:
      "Centred around the red Gunja (Abrus precatorius seed) and silver Rupee coin, this hierarchical system governed all commerce across the subcontinent. Jewellers used Ratti and Masha; spice and grocery merchants traded in Tola and Seer; and agricultural mandis transacted in Paseri and Maund (Man).",
    nodes: [
      {
        id: "gunja",
        name: "Gunja / Ratti",
        vernacular: "गुंजा / रत्ती",
        relation_text: "Base Seed Standard",
        multiplier: 1,
        metric_equiv: "≈ 0.1215 g (1.875 grains)",
        desc: "Bright red-and-black seed of Abrus precatorius known for remarkable weight consistency.",
        category_level: "micro",
        badge: "Jeweler's Seed",
        historical_note: "Standard gem and gold weighing seed in Charaka Samhita."
      },
      {
        id: "masha",
        name: "Masha",
        vernacular: "माषा",
        relation_text: "8 Ratti",
        multiplier: 8,
        metric_equiv: "≈ 0.972 g (15 grains)",
        desc: "Traditional unit for gold, silver lace, saffron, and Ayurvedic compound drugs.",
        category_level: "standard",
        badge: "8× Ratti"
      },
      {
        id: "tola",
        name: "Tola",
        vernacular: "तोला",
        relation_text: "12 Masha (96 Ratti)",
        multiplier: 96,
        metric_equiv: "≈ 11.664 g (180 grains troy)",
        desc: "Exactly the weight of 1 standard silver Rupee coin of Emperor Akbar and later British India.",
        category_level: "standard",
        badge: "Imperial Pivot Unit",
        historical_note: "Still ubiquitous across Indian gold souks today (1 tola = 10g or 11.66g traditional)."
      },
      {
        id: "chhatak",
        name: "Chhatak",
        vernacular: "छटाक",
        relation_text: "5 Tola",
        multiplier: 480,
        metric_equiv: "≈ 58.32 g (2.05 oz)",
        desc: "Common retail spice, ghee, and tea measure in North and Eastern Indian bazaars.",
        category_level: "standard",
        badge: "5× Tola / 1/16 Seer"
      },
      {
        id: "pao",
        name: "Pao / Pav",
        vernacular: "पाव",
        relation_text: "4 Chhatak (20 Tola)",
        multiplier: 1920,
        metric_equiv: "≈ 233.28 g (1/4 Seer)",
        desc: "Literally 'one-fourth'; standard household grocery unit for pulses, butter, and sweets.",
        category_level: "standard",
        badge: "1/4 Seer (250g modern)"
      },
      {
        id: "seer",
        name: "Seer (Ser)",
        vernacular: "सेर",
        relation_text: "4 Pao (80 Tola)",
        multiplier: 7680,
        metric_equiv: "≈ 0.9331 kg (2.057 lbs)",
        desc: "The universal benchmark of domestic trade in British India (80 tolas = 2.057 lbs).",
        category_level: "standard",
        badge: "80× Tola (Benchmark)",
        historical_note: "Standardized in 1833 by the East India Company."
      },
      {
        id: "paseri",
        name: "Paseri / Dhari",
        vernacular: "पसेरी / धड़ी",
        relation_text: "5 Seer",
        multiplier: 38400,
        metric_equiv: "≈ 4.665 kg (10.28 lbs)",
        desc: "Standard five-seer wholesale weight used by farmers for vegetables, grains, and jaggery.",
        category_level: "macro",
        badge: "5× Seer"
      },
      {
        id: "maund",
        name: "Maund (Man)",
        vernacular: "मन",
        relation_text: "8 Paseri (40 Seer)",
        multiplier: 307200,
        metric_equiv: "≈ 37.324 kg (82.28 lbs)",
        desc: "Major wholesale agricultural and railway freight unit across North and Central India.",
        category_level: "macro",
        badge: "40× Seer (Wholesale)",
        historical_note: "Standardized in Bengal/Mughal metrology for shipping cotton, indigo, and wheat."
      }
    ],
    connections: [
      { from: "gunja", to: "masha", label: "× 8", formula: "8 Ratti / Gunja = 1 Masha" },
      { from: "masha", to: "tola", label: "× 12", formula: "12 Masha = 1 Tola (~11.66 g)" },
      { from: "tola", to: "chhatak", label: "× 5", formula: "5 Tola = 1 Chhatak (~58.3 g)" },
      { from: "chhatak", to: "pao", label: "× 4", formula: "4 Chhatak = 1 Pao (~233.3 g)" },
      { from: "pao", to: "seer", label: "× 4", formula: "4 Pao = 80 Tola = 1 Seer (~0.933 kg)" },
      { from: "seer", to: "paseri", label: "× 5", formula: "5 Seer = 1 Paseri (~4.66 kg)" },
      { from: "paseri", to: "maund", label: "× 8", formula: "8 Paseri = 40 Seer = 1 Maund (~37.32 kg)" }
    ],
    conversion_table: [
      { from: "1 Tola", to: "Metric", ratio: "11.664 grams", notes: "12 Masha / 96 Ratti" },
      { from: "1 Chhatak", to: "Metric", ratio: "58.32 grams", notes: "5 Tolas" },
      { from: "1 Pao", to: "Metric", ratio: "233.28 grams", notes: "20 Tolas" },
      { from: "1 Seer", to: "Metric", ratio: "933.10 grams", notes: "80 Tolas" },
      { from: "1 Maund", to: "Metric", ratio: "37.324 kg", notes: "40 Seer / 3,200 Tolas" }
    ],
    key_insights: [
      "The system bridged fine gem balances (Ratti) directly to freight railcars (Maund) with exact integer ratios.",
      "1 Tola was calibrated directly against the pure silver content of the standard Mughal/British Rupee coin.",
      "The popular slang 'Pao Bhar' (250g) and 'Dhari' (5kg) in North Indian markets directly descends from this pipeline."
    ],
    calculator: {
      base_unit_id: "tola",
      units: [
        { id: "ratti", name: "Ratti / Gunja", factor_to_base: 0.0104166, symbol: "rt", metric_unit: "g", metric_factor: 0.1215 },
        { id: "masha", name: "Masha", factor_to_base: 0.08333, symbol: "msh", metric_unit: "g", metric_factor: 0.972 },
        { id: "tola", name: "Tola", factor_to_base: 1, symbol: "tl", metric_unit: "g", metric_factor: 11.664 },
        { id: "chhatak", name: "Chhatak", factor_to_base: 5, symbol: "cht", metric_unit: "g", metric_factor: 58.32 },
        { id: "pao", name: "Pao (Pav)", factor_to_base: 20, symbol: "pao", metric_unit: "g", metric_factor: 233.28 },
        { id: "seer", name: "Seer", factor_to_base: 80, symbol: "ser", metric_unit: "kg", metric_factor: 0.9331 },
        { id: "paseri", name: "Paseri", factor_to_base: 400, symbol: "psr", metric_unit: "kg", metric_factor: 4.665 },
        { id: "maund", name: "Maund (Man)", factor_to_base: 3200, symbol: "mnd", metric_unit: "kg", metric_factor: 37.324 }
      ]
    }
  },
  {
    id: "deccan-grain",
    title: "Grain Measures of Telangana & Deccan Plateau",
    subtitle: "The volumetric grain and pulse hierarchy of Kakatiya and Asaf Jahi Deccan",
    category: "volume",
    sector: "agriculture",
    state: "Telangana",
    period: "Kakatiya to Nizam Era (~1200 – 1948 CE)",
    historical_source: "Nizam Revenue Manuals & Village Patwari Granary Registers",
    icon_emoji: "🌾",
    tags: ["grain", "volume", "telangana", "deccan", "paddy"],
    theme: {
      primary: "#D97706",
      light: "#FFFBEB",
      accent: "#B45309",
      border: "#FDE68A",
      badge: "bg-amber-100 text-amber-800 border-amber-200",
      gradient: "from-amber-900/90 via-amber-800/80 to-yellow-950/90"
    },
    description:
      "In the agrarian Deccan, brass vessels calibrated with concentric rings (Ginna, Tavva, Manika) were used for paddy, millets, sesame, and castor oil. Village accountants recorded tenancy grain shares in Kuncham and Khanduga, which also defined the seed capacity needed to sow one unit of arable land.",
    nodes: [
      {
        id: "solai",
        name: "Solai / Gidda",
        vernacular: "సోల / గిద్ద",
        relation_text: "Base Vessel Unit",
        multiplier: 1,
        metric_equiv: "≈ 0.25 Litres (250 ml)",
        desc: "Small brass cup used for retail pulses, ghee, and daily seed rations.",
        category_level: "standard",
        badge: "Household Measure"
      },
      {
        id: "tavva",
        name: "Tavva",
        vernacular: "తవ్వ",
        relation_text: "2 Solai",
        multiplier: 2,
        metric_equiv: "≈ 0.50 Litres (500 ml)",
        desc: "Standard daily cooking measure for rice or jowar in Telangana families.",
        category_level: "standard",
        badge: "2× Solai"
      },
      {
        id: "manika",
        name: "Manika / Mana",
        vernacular: "మానిక / మాన",
        relation_text: "2 Tavva (4 Solai)",
        multiplier: 4,
        metric_equiv: "≈ 1.0 to 1.25 Litres (≈ 1 kg grain)",
        desc: "The pivot volumetric measure of Deccan; cast in heavy bell-metal with regional seals.",
        category_level: "standard",
        badge: "Deccan Master Vessel",
        historical_note: "Vessel bore the official stamp of the local Subedar or Zamindar."
      },
      {
        id: "adda",
        name: "Adda",
        vernacular: "అడ్డ",
        relation_text: "2 Manika",
        multiplier: 8,
        metric_equiv: "≈ 2.0 to 2.5 Litres",
        desc: "Two-manika grain vessel used at weekly shandies (Santha markets).",
        category_level: "standard",
        badge: "2× Manika"
      },
      {
        id: "kuncham",
        name: "Kuncham",
        vernacular: "కుంచం",
        relation_text: "4 Manika (2 Adda)",
        multiplier: 16,
        metric_equiv: "≈ 4.0 to 5.0 Litres (≈ 4 kg paddy)",
        desc: "Standard field measure for paying agricultural laborers (Kuli) at harvest.",
        category_level: "standard",
        badge: "Harvester's Share"
      },
      {
        id: "kula",
        name: "Kula / Irumu",
        vernacular: "కుల / ఇరుము",
        relation_text: "8 Manika (2 Kuncham)",
        multiplier: 32,
        metric_equiv: "≈ 8.0 to 10.0 Litres",
        desc: "Intermediate bag measure used in local grain trade.",
        category_level: "macro",
        badge: "2× Kuncham"
      },
      {
        id: "khanduga",
        name: "Khanduga / Putti",
        vernacular: "ఖండుగ / పుట్టి",
        relation_text: "20 Kuncham (80 Manika)",
        multiplier: 320,
        metric_equiv: "≈ 80 to 100 kg (1 Bag / Cart)",
        desc: "The largest granary unit in Telangana; also defined land area by seed capacity (Khanduga Vithana).",
        category_level: "macro",
        badge: "Granary Bulk Standard",
        historical_note: "Mentioned in Kakatiya pillar inscriptions as land revenue dues."
      }
    ],
    connections: [
      { from: "solai", to: "tavva", label: "× 2", formula: "2 Solai = 1 Tavva (~500 ml)" },
      { from: "tavva", to: "manika", label: "× 2", formula: "2 Tavva = 4 Solai = 1 Manika (~1.2 L)" },
      { from: "manika", to: "adda", label: "× 2", formula: "2 Manika = 1 Adda (~2.4 L)" },
      { from: "adda", to: "kuncham", label: "× 2", formula: "2 Adda = 4 Manika = 1 Kuncham (~4.8 L)" },
      { from: "kuncham", to: "kula", label: "× 2", formula: "2 Kuncham = 8 Manika = 1 Kula (~9.6 L)" },
      { from: "kuncham", to: "khanduga", label: "× 20", formula: "20 Kuncham = 80 Manika = 1 Khanduga (~96 L / 80 kg)" }
    ],
    conversion_table: [
      { from: "1 Manika (Mana)", to: "Metric", ratio: "≈ 1.20 Liters (≈ 1 kg paddy)", notes: "Standard brass measure" },
      { from: "1 Kuncham", to: "Metric", ratio: "≈ 4.80 Liters (≈ 4 kg paddy)", notes: "4 Manikas" },
      { from: "1 Khanduga", to: "Metric", ratio: "≈ 96.0 Liters (≈ 80 kg)", notes: "20 Kunchams / 80 Manikas" }
    ],
    key_insights: [
      "Binary vessel doubling (Solai ➔ Tavva ➔ Manika ➔ Adda ➔ Kuncham) enabled swift, foolproof tallying without scales.",
      "Seed-sowing capacity: 1 Khanduga of land meant the exact acreage that required 1 Khanduga of seed grain.",
      "Vessels were consecrated during Sankranti and Ugadi harvest rituals."
    ],
    calculator: {
      base_unit_id: "manika",
      units: [
        { id: "solai", name: "Solai / Gidda", factor_to_base: 0.25, symbol: "sol", metric_unit: "L", metric_factor: 0.3 },
        { id: "tavva", name: "Tavva", factor_to_base: 0.5, symbol: "tv", metric_unit: "L", metric_factor: 0.6 },
        { id: "manika", name: "Manika (Mana)", factor_to_base: 1, symbol: "man", metric_unit: "L", metric_factor: 1.2 },
        { id: "adda", name: "Adda", factor_to_base: 2, symbol: "ada", metric_unit: "L", metric_factor: 2.4 },
        { id: "kuncham", name: "Kuncham", factor_to_base: 4, symbol: "kun", metric_unit: "L", metric_factor: 4.8 },
        { id: "khanduga", name: "Khanduga / Putti", factor_to_base: 80, symbol: "khn", metric_unit: "kg (paddy)", metric_factor: 80 }
      ]
    }
  },
  {
    id: "vedic-time",
    title: "Vedic Cosmic Time Units: From Truti to Kalpa",
    subtitle: "The profound Indian time scale spanning microsecond eye-blinks to universal epochs",
    category: "time",
    sector: "religious-cultural",
    period: "Vedic to Classical (~1500 BCE – 1100 CE)",
    historical_source: "Surya Siddhanta (Ch. 1) & Bhagavata Purana (Canto 3, Ch. 11)",
    icon_emoji: "⏳",
    tags: ["time", "vedic", "astronomy", "panchang", "cosmic"],
    theme: {
      primary: "#7C3AED",
      light: "#F5F3FF",
      accent: "#6D28D9",
      border: "#DDD6FE",
      badge: "bg-purple-100 text-purple-800 border-purple-200",
      gradient: "from-purple-950/90 via-indigo-900/80 to-purple-900/90"
    },
    description:
      "Indian astronomical texts divided continuous time from atomic vibrations (Truti = ~33.7 microseconds) to human experiential time (Nimesha = eye-blink, Ghatika = 24-minute water clock bowl), onward through solar calendars to the cosmic Kalpa (Day of Brahma = 4.32 billion human years).",
    nodes: [
      {
        id: "truti",
        name: "Truti",
        vernacular: "त्रुटि",
        relation_text: "Base Atomic Moment",
        multiplier: 1,
        metric_equiv: "≈ 33.7 microseconds (1/29,160 sec)",
        desc: "Time taken to pierce a delicate lotus petal with a fine needle.",
        category_level: "cosmic",
        badge: "Micro-Temporal Unit"
      },
      {
        id: "tatpara",
        name: "Tatpara",
        vernacular: "तत्पर",
        relation_text: "100 Truti",
        multiplier: 100,
        metric_equiv: "≈ 3.37 milliseconds",
        desc: "Sub-visual fraction of motion.",
        category_level: "micro",
        badge: "100× Truti"
      },
      {
        id: "nimesha",
        name: "Nimesha",
        vernacular: "निमेष",
        relation_text: "30 Tatpara",
        multiplier: 3000,
        metric_equiv: "≈ 0.213 seconds",
        desc: "The natural winking/blinking of a human eyelid at rest.",
        category_level: "standard",
        badge: "1 Eye-Blink"
      },
      {
        id: "kashtha",
        name: "Kashtha",
        vernacular: "काष्ठा",
        relation_text: "15 Nimesha",
        multiplier: 45000,
        metric_equiv: "≈ 3.2 seconds",
        desc: "Fifteen blinks; short pause in chanting.",
        category_level: "standard",
        badge: "15× Nimesha"
      },
      {
        id: "kala",
        name: "Kala",
        vernacular: "कला",
        relation_text: "30 Kashtha",
        multiplier: 1350000,
        metric_equiv: "≈ 1.6 minutes (96 sec)",
        desc: "Thirty Kashthas; fundamental astronomical division.",
        category_level: "standard",
        badge: "30× Kashtha"
      },
      {
        id: "ghatika",
        name: "Ghatika (Nadi)",
        vernacular: "घटिका / नाड़ी",
        relation_text: "30 Kala (2 Pali)",
        multiplier: 40500000,
        metric_equiv: "≈ 24.0 minutes",
        desc: "Time taken for a copper water-clock bowl (Ghati Yantra) with a bottom aperture to sink in water.",
        category_level: "standard",
        badge: "24 Minutes (Clock Unit)",
        historical_note: "Standard unit across all Indian Panchangs and horoscopes."
      },
      {
        id: "muhurta",
        name: "Muhurta",
        vernacular: "मुहूर्त",
        relation_text: "2 Ghatika",
        multiplier: 81000000,
        metric_equiv: "≈ 48.0 minutes",
        desc: "Two Ghatikas; 1/30th of a full solar day-night cycle (Ahoratra).",
        category_level: "standard",
        badge: "Auspicious Window"
      },
      {
        id: "ahoratra",
        name: "Ahoratra (Day & Night)",
        vernacular: "अहोरात्र",
        relation_text: "30 Muhurta (60 Ghatika)",
        multiplier: 2430000000,
        metric_equiv: "24.0 Solar Hours",
        desc: "One complete civil day from sunrise to next sunrise.",
        category_level: "macro",
        badge: "60 Ghatikas"
      },
      {
        id: "mahayuga",
        name: "Chaturyuga (Mahayuga)",
        vernacular: "चतुर्युग",
        relation_text: "4,320,000 Solar Years",
        multiplier: 10497600000000,
        metric_equiv: "4.32 Million Years",
        desc: "Sum of Satya (1.728M), Treta (1.296M), Dvapara (864k), and Kali Yuga (432k years).",
        category_level: "cosmic",
        badge: "Epoch Cycle"
      },
      {
        id: "kalpa",
        name: "Kalpa (Day of Brahma)",
        vernacular: "कल्प",
        relation_text: "1,000 Mahayugas",
        multiplier: 10497600000000000,
        metric_equiv: "4.32 Billion Solar Years",
        desc: "One cosmic day of creation, followed by a Pralaya (night) of equal duration.",
        category_level: "cosmic",
        badge: "Cosmic Day (4.32B Yrs)",
        historical_note: "Carl Sagan famously lauded this for aligning with modern astrophysics."
      }
    ],
    connections: [
      { from: "truti", to: "tatpara", label: "× 100", formula: "100 Truti = 1 Tatpara (~3.37 ms)" },
      { from: "tatpara", to: "nimesha", label: "× 30", formula: "30 Tatpara = 1 Nimesha (~0.21 sec)" },
      { from: "nimesha", to: "kashtha", label: "× 15", formula: "15 Nimesha = 1 Kashtha (~3.2 sec)" },
      { from: "kashtha", to: "kala", label: "× 30", formula: "30 Kashtha = 1 Kala (~96 sec)" },
      { from: "kala", to: "ghatika", label: "× 30", formula: "30 Kala = 1 Ghatika (24 minutes)" },
      { from: "ghatika", to: "muhurta", label: "× 2", formula: "2 Ghatika = 1 Muhurta (48 minutes)" },
      { from: "muhurta", to: "ahoratra", label: "× 30", formula: "30 Muhurta = 60 Ghatika = 1 Ahoratra (24 hours)" },
      { from: "ahoratra", to: "mahayuga", label: "Cycles", formula: "1 Mahayuga = 4.32 Million Solar Years" },
      { from: "mahayuga", to: "kalpa", label: "× 1,000", formula: "1,000 Mahayugas = 1 Kalpa (4.32 Billion Years)" }
    ],
    conversion_table: [
      { from: "1 Nimesha (Eye-blink)", to: "Metric", ratio: "0.2133 seconds", notes: "Biological baseline" },
      { from: "1 Ghatika (Nadi)", to: "Metric", ratio: "24 minutes", notes: "60 Ghatika = 1 Solar Day" },
      { from: "1 Muhurta", to: "Metric", ratio: "48 minutes", notes: "2 Ghatikas" },
      { from: "1 Mahayuga", to: "Solar Years", ratio: "4,320,000 years", notes: "4 Yuga cycle" },
      { from: "1 Kalpa", to: "Solar Years", ratio: "4,320,000,000 years", notes: "1,000 Mahayugas" }
    ],
    key_insights: [
      "The base-60 sexagesimal system for day division (60 Ghatikas = 24 hours, where 1 Ghatika = 24 min).",
      "Surya Siddhanta calibrated water clocks with exact copper thickness and needle hole diameters.",
      "The Kalpa duration (4.32 billion years) closely approximates modern estimations of Earth's age (4.54 billion years)."
    ],
    calculator: {
      base_unit_id: "ghatika",
      units: [
        { id: "nimesha", name: "Nimesha (Blink)", factor_to_base: 0.000148, symbol: "nim", metric_unit: "sec", metric_factor: 0.2133 },
        { id: "kala", name: "Kala", factor_to_base: 0.03333, symbol: "kal", metric_unit: "sec", metric_factor: 96 },
        { id: "ghatika", name: "Ghatika", factor_to_base: 1, symbol: "ght", metric_unit: "min", metric_factor: 24 },
        { id: "muhurta", name: "Muhurta", factor_to_base: 2, symbol: "muh", metric_unit: "min", metric_factor: 48 },
        { id: "ahoratra", name: "Ahoratra (Day)", factor_to_base: 60, symbol: "day", metric_unit: "hours", metric_factor: 24 }
      ]
    }
  },
  {
    id: "land-area",
    title: "Traditional Land Survey & Cadastral Chains: Unwasi to Bigha",
    subtitle: "The land settlement, cadastral survey, and revenue hierarchy of North & Central India",
    category: "area",
    sector: "land-measurement",
    period: "Mughal & British Cadastral (~1570 – Present)",
    historical_source: "Zabti System of Raja Todar Mal & British Land Revenue Settlement Manuals",
    icon_emoji: "🗺️",
    tags: ["land", "area", "bigha", "revenue", "cadastral"],
    theme: {
      primary: "#EA580C",
      light: "#FFF7ED",
      accent: "#C2410C",
      border: "#FED7AA",
      badge: "bg-orange-100 text-orange-800 border-orange-200",
      gradient: "from-orange-950/90 via-amber-900/80 to-stone-900/90"
    },
    description:
      "Pioneered by Akbar's finance minister Raja Todar Mal with the bamboo-iron linked Ilahi Gaz and Jarib chain, this base-20 vigesimal system forms the legal foundation of rural patwari land records, khasra numbers, and agricultural land ownership across India to this day.",
    nodes: [
      {
        id: "unwasi",
        name: "Unwasi",
        vernacular: "उनवासी",
        relation_text: "Base Fractional Plot",
        multiplier: 1,
        metric_equiv: "≈ 0.034 sq. meters (0.366 sq ft)",
        desc: "Finest legal fraction in village boundary dispute settlements.",
        category_level: "micro",
        badge: "Base Fraction"
      },
      {
        id: "tiswansi",
        name: "Tiswansi",
        vernacular: "तिसवांसी",
        relation_text: "20 Unwasi",
        multiplier: 20,
        metric_equiv: "≈ 0.68 sq. meters (7.32 sq ft)",
        desc: "One-twentieth of a Biswansi.",
        category_level: "cadastral",
        badge: "20× Unwasi"
      },
      {
        id: "biswansi",
        name: "Biswansi",
        vernacular: "बिस्वांसी",
        relation_text: "20 Tiswansi",
        multiplier: 400,
        metric_equiv: "≈ 13.61 sq. meters (146.4 sq ft)",
        desc: "Square of 1 Gatha (measuring bamboo rod = 5.5 cubits).",
        category_level: "cadastral",
        badge: "1 Sq. Gatha (Rod)"
      },
      {
        id: "biswa",
        name: "Biswa / Katha",
        vernacular: "बिस्वा / कट्ठा",
        relation_text: "20 Biswansi",
        multiplier: 8000,
        metric_equiv: "≈ 126 to 135 sq. meters (1,360 sq ft)",
        desc: "Standard residential and farming sub-plot (1/20th of a Bigha).",
        category_level: "cadastral",
        badge: "1/20 Bigha (Standard)"
      },
      {
        id: "kaccha-bigha",
        name: "Kaccha Bigha",
        vernacular: "कच्चा बीघा",
        relation_text: "1/3 Pucca Bigha",
        multiplier: 53333,
        metric_equiv: "≈ 843 sq. meters (1,008 sq yd)",
        desc: "Informal local village bigha common in Western UP, Punjab, and Haryana.",
        category_level: "cadastral",
        badge: "Village Standard"
      },
      {
        id: "pucca-bigha",
        name: "Pucca Bigha (Standard)",
        vernacular: "पक्का बीघा",
        relation_text: "20 Biswa",
        multiplier: 160000,
        metric_equiv: "≈ 2,529.3 sq. meters (3,025 sq yd / 0.625 acre)",
        desc: "Legal survey Bigha defined as 1 square Jarib chain (55 × 55 yards).",
        category_level: "macro",
        badge: "Official Revenue Unit",
        historical_note: "Established by Raja Todar Mal; 1.6 Pucca Bigha = 1 Acre."
      },
      {
        id: "jarib",
        name: "Jarib (Chain Area)",
        vernacular: "जरीब",
        relation_text: "1 Sq. Jarib = 1 Bigha",
        multiplier: 160000,
        metric_equiv: "55 yards = 50.29 meters length",
        desc: "Survey chain of iron links joined with rings; 1 square chain = 1 standard Pucca Bigha.",
        category_level: "tool",
        badge: "Survey Chain Standard"
      }
    ],
    connections: [
      { from: "unwasi", to: "tiswansi", label: "× 20", formula: "20 Unwasi = 1 Tiswansi" },
      { from: "tiswansi", to: "biswansi", label: "× 20", formula: "20 Tiswansi = 1 Biswansi (1 Sq Gatha)" },
      { from: "biswansi", to: "biswa", label: "× 20", formula: "20 Biswansi = 1 Biswa (~135 sq m)" },
      { from: "biswa", to: "pucca-bigha", label: "× 20", formula: "20 Biswa = 1 Pucca Bigha (~2,529 sq m / 0.625 Acre)" },
      { from: "kaccha-bigha", to: "pucca-bigha", label: "× 3", formula: "3 Kaccha Bigha = 1 Pucca Bigha" }
    ],
    conversion_table: [
      { from: "1 Biswansi", to: "Metric", ratio: "13.61 sq. meters", notes: "1 Square Gatha" },
      { from: "1 Biswa", to: "Metric", ratio: "135.29 sq. meters (1,456 sq ft)", notes: "20 Biswansi" },
      { from: "1 Pucca Bigha", to: "Metric", ratio: "2,529.3 sq. meters (3,025 sq yd)", notes: "20 Biswa (0.625 Acre)" },
      { from: "1 Acre", to: "Bigha", ratio: "1.60 Pucca Bighas (4,046.8 sq m)", notes: "4,840 sq yards" }
    ],
    key_insights: [
      "Vigesimal Base-20 Law: 20 Unwasi = 1 Tiswansi, 20 Tiswansi = 1 Biswansi, 20 Biswansi = 1 Biswa, 20 Biswa = 1 Bigha.",
      "Todar Mal replaced stretching hemp ropes with linked bamboo & iron rods to prevent revenue fraud during rains.",
      "Khasra maps and registry records in land revenue courts today still use Biswa-Bigha notations."
    ],
    calculator: {
      base_unit_id: "biswa",
      units: [
        { id: "biswansi", name: "Biswansi", factor_to_base: 0.05, symbol: "bsw-si", metric_unit: "sq.m", metric_factor: 13.61 },
        { id: "biswa", name: "Biswa", factor_to_base: 1, symbol: "bsw", metric_unit: "sq.m", metric_factor: 135.29 },
        { id: "kaccha-bigha", name: "Kaccha Bigha", factor_to_base: 6.666, symbol: "k-bgh", metric_unit: "sq.m", metric_factor: 843 },
        { id: "pucca-bigha", name: "Pucca Bigha", factor_to_base: 20, symbol: "p-bgh", metric_unit: "sq.m", metric_factor: 2529.3 },
        { id: "acre", name: "Acre", factor_to_base: 32, symbol: "ac", metric_unit: "sq.m", metric_factor: 4046.86 }
      ]
    }
  },
  {
    id: "currency-tree",
    title: "Currency & Monetary Denominations: Cowrie to Gold Mohur",
    subtitle: "The monetary hierarchy of Mughal, Nizam Osmania, and Pre-Decimal Indian Coinage",
    category: "currency",
    sector: "currency-money",
    period: "Mughal to Post-Independence (1540 – 1957 CE)",
    historical_source: "Ain-i-Akbari & Hyderabad Currency Act (Osmania Sicca)",
    icon_emoji: "🪙",
    tags: ["currency", "money", "nizam", "mughal", "numismatics"],
    theme: {
      primary: "#DC2626",
      light: "#FEF2F2",
      accent: "#B91C1C",
      border: "#FECACA",
      badge: "bg-red-100 text-red-800 border-red-200",
      gradient: "from-red-950/90 via-rose-900/80 to-amber-950/90"
    },
    description:
      "Before the decimal rupee (1957), India's monetary system linked natural Cowrie shells to copper Damris, bronze Pies and Paisas, silver Annas, and the sterling Silver Rupee (11.66g of 91.7% pure silver), crowned by the Gold Mohur / Ashrafi.",
    nodes: [
      {
        id: "kauri",
        name: "Kauri (Cowrie Shell)",
        vernacular: "कौड़ी / కౌడీ",
        relation_text: "Natural Mollusc Currency",
        multiplier: 1,
        desc: "Marine shell from Maldives used for micro-transactions, buying salt, greens, and betel leaves.",
        category_level: "micro",
        badge: "Marine Currency",
        historical_note: "Gave rise to the Hindi proverb 'Ek phooti kauri nahi doonga'."
      },
      {
        id: "damri",
        name: "Damri",
        vernacular: "दमड़ी",
        relation_text: "20 to 80 Kauris",
        multiplier: 20,
        desc: "Sub-copper coin of 1/8th Paisa (1/128 Rupee).",
        category_level: "standard",
        badge: "1/8 Paisa"
      },
      {
        id: "pie",
        name: "Pie (Pai)",
        vernacular: "पाई",
        relation_text: "3 Damri",
        multiplier: 60,
        desc: "Smallest minted bronze coin under British India (1/12th of an Anna = 1/192nd Rupee).",
        category_level: "standard",
        badge: "1/12 Anna"
      },
      {
        id: "paisa",
        name: "Paisa (Old)",
        vernacular: "पैसा / పైసా",
        relation_text: "3 Pies (1/4 Anna)",
        multiplier: 180,
        desc: "Quarter of an Anna; 64 paise made up 1 silver Rupee.",
        category_level: "standard",
        badge: "4 Paise = 1 Anna"
      },
      {
        id: "anna",
        name: "Anna (Aana)",
        vernacular: "आना / ఆణా",
        relation_text: "4 Paise (16 per Rupee)",
        multiplier: 720,
        desc: "Famous nickel/copper coin; 16 Annas = 1 Rupee (Chavanni = 4 annas, Athanio = 8 annas).",
        category_level: "standard",
        badge: "1/16 Rupee (Pivot)",
        historical_note: "Term '16 Aane Sach' (100% truth) comes from 16 Annas in a Rupee."
      },
      {
        id: "rupee",
        name: "Silver Rupee (Rupiya / Sicca)",
        vernacular: "रुपया / రూపాయి",
        relation_text: "16 Annas (64 Paise / 192 Pies)",
        multiplier: 11520,
        desc: "Standard 1 Tola (11.66g) pure silver coin introduced by Sher Shah Suri in 1540.",
        category_level: "macro",
        badge: "Standard Rupee",
        historical_note: "Nizam Hyderabad minted its own Osmania Sicca Rupee (valued at 116.6 OS = 100 British Rs)."
      },
      {
        id: "mohur",
        name: "Gold Mohur / Ashrafi",
        vernacular: "मोहर / अशरफ़ी",
        relation_text: "15 to 16 Silver Rupees",
        multiplier: 184320,
        desc: "Pure gold coin (1 tola gold) used for royal tribute, treaties, and high-value savings.",
        category_level: "macro",
        badge: "15× Silver Rupee (Gold)"
      }
    ],
    connections: [
      { from: "kauri", to: "damri", label: "× 20", formula: "20 Kauri = 1 Damri" },
      { from: "damri", to: "pie", label: "× 3", formula: "3 Damri ≈ 1 Pie" },
      { from: "pie", to: "paisa", label: "× 3", formula: "3 Pies = 1 Paisa (1/4 Anna)" },
      { from: "paisa", to: "anna", label: "× 4", formula: "4 Paise = 1 Anna" },
      { from: "anna", to: "rupee", label: "× 16", formula: "16 Annas = 64 Paise = 192 Pies = 1 Rupee" },
      { from: "rupee", to: "mohur", label: "× 15", formula: "15-16 Silver Rupees = 1 Gold Mohur / Ashrafi" }
    ],
    conversion_table: [
      { from: "1 Pie", to: "Anna", ratio: "1/12 Anna (1/192 Rupee)", notes: "Smallest minted coin" },
      { from: "1 Paisa", to: "Anna", ratio: "1/4 Anna (3 Pies)", notes: "64 Paise = 1 Rupee" },
      { from: "1 Anna", to: "Rupee", ratio: "1/16 Rupee (4 Paise)", notes: "16 Annas = 1 Rupee" },
      { from: "1 Gold Mohur", to: "Rupees", ratio: "15 to 16 Silver Rupees", notes: "1 Tola Pure Gold" }
    ],
    key_insights: [
      "1 Rupee = 16 Annas = 64 Paise = 192 Pies.",
      "The decimalization on 1 April 1957 converted 1 Rupee into 100 'Naye Paise', abolishing the 16-anna base-4/base-16 math.",
      "Expressions like 'Dhelis', 'Chavanni' (25p), 'Aathanni' (50p), and 'Barah Aane' (75%) remain deep in the Indian lexicon."
    ],
    calculator: {
      base_unit_id: "anna",
      units: [
        { id: "pie", name: "Pie (Pai)", factor_to_base: 0.08333, symbol: "pie", metric_unit: "equiv paise (modern)", metric_factor: 0.52 },
        { id: "paisa_old", name: "Old Paisa", factor_to_base: 0.25, symbol: "ps", metric_unit: "equiv paise (modern)", metric_factor: 1.56 },
        { id: "anna", name: "Anna", factor_to_base: 1, symbol: "ana", metric_unit: "equiv paise (modern)", metric_factor: 6.25 },
        { id: "chavanni", name: "Chavanni (4 Annas)", factor_to_base: 4, symbol: "chv", metric_unit: "equiv paise (modern)", metric_factor: 25 },
        { id: "athanio", name: "Athanio (8 Annas)", factor_to_base: 8, symbol: "ath", metric_unit: "equiv paise (modern)", metric_factor: 50 },
        { id: "rupee", name: "Silver Rupee", factor_to_base: 16, symbol: "rs", metric_unit: "equiv paise (modern)", metric_factor: 100 },
        { id: "mohur", name: "Gold Mohur", factor_to_base: 240, symbol: "mhr", metric_unit: "silver Rs", metric_factor: 15 }
      ]
    }
  },
  {
    id: "ayurvedic-metrology",
    title: "Ayurvedic Pharmaceutical Metrology: Dhvamsi to Drona",
    subtitle: "Precision compounding measures for herbal, mineral, and Bhasma preparations",
    category: "medicine",
    sector: "medicine",
    period: "Classical Ayurvedic (~600 BCE – 1400 CE)",
    historical_source: "Sarangadhara Samhita (Prathama Khanda, Ch. 1) & Charaka Samhita",
    icon_emoji: "🌿",
    tags: ["ayurveda", "medicine", "pharmacy", "ratti", "drona"],
    theme: {
      primary: "#0D9488",
      light: "#F0FDFA",
      accent: "#0F766E",
      border: "#99F6E4",
      badge: "bg-teal-100 text-teal-800 border-teal-200",
      gradient: "from-teal-950/90 via-emerald-900/80 to-teal-900/90"
    },
    description:
      "Ayurvedic pharmacopoeia required extraordinary dosage precision for potent Rasashastra mercury-mineral calces (Bhasmas) and bulk decoctions (Kashayams). The scale starts with Dhvamsi dust motes, calibrates against botanical seeds (mustard, red Abrus), and scales to Karsha (Tola) and Drona (bulk decoction vat).",
    nodes: [
      {
        id: "dhvamsi",
        name: "Dhvamsi / Vanshi",
        vernacular: "ध्वंसी",
        relation_text: "Base Dust Particle",
        multiplier: 1,
        metric_equiv: "≈ 0.05 mg",
        desc: "Particle visible in beam of morning light.",
        category_level: "micro",
        badge: "Microscopic Particle"
      },
      {
        id: "marichi",
        name: "Marichi (Black Pepper)",
        vernacular: "मरीचि",
        relation_text: "6 Dhvamsi",
        multiplier: 6,
        metric_equiv: "≈ 0.3 mg",
        desc: "Weight of fine single black pepper seed dust.",
        category_level: "micro",
        badge: "6× Dhvamsi"
      },
      {
        id: "rajika",
        name: "Rajika (Black Mustard)",
        vernacular: "राजिका",
        relation_text: "6 Marichi",
        multiplier: 36,
        metric_equiv: "≈ 1.8 mg",
        desc: "Small black mustard seed weight.",
        category_level: "micro",
        badge: "6× Marichi"
      },
      {
        id: "sarshapa",
        name: "Sarshapa (White Mustard)",
        vernacular: "सर्षप",
        relation_text: "3 Rajika",
        multiplier: 108,
        metric_equiv: "≈ 5.4 mg",
        desc: "White mustard seed; used for micro-dosage of mineral Bhasmas.",
        category_level: "micro",
        badge: "3× Rajika"
      },
      {
        id: "yava-med",
        name: "Yava (Barley)",
        vernacular: "यव",
        relation_text: "8 Sarshapa",
        multiplier: 864,
        metric_equiv: "≈ 43.2 mg",
        desc: "Dehusked dried barley grain weight.",
        category_level: "micro",
        badge: "8× Sarshapa"
      },
      {
        id: "gunja-med",
        name: "Gunja / Raktika",
        vernacular: "गुंजा (रक्तिका)",
        relation_text: "4 Yava",
        multiplier: 3456,
        metric_equiv: "≈ 121.5 mg (0.12 g)",
        desc: "Standard red seed of Abrus precatorius; core dosage benchmark for Rasa-Aushadhis.",
        category_level: "standard",
        badge: "1 Ratti (Dosage Standard)"
      },
      {
        id: "masha-med",
        name: "Masha",
        vernacular: "माष",
        relation_text: "8 Gunja",
        multiplier: 27648,
        metric_equiv: "≈ 0.972 g (~1 gram)",
        desc: "Dosage unit for Churna (herbal powder) and Vati (pills).",
        category_level: "standard",
        badge: "8× Gunja"
      },
      {
        id: "karsha",
        name: "Karsha / Tola",
        vernacular: "कर्ष / तोला",
        relation_text: "12 Masha",
        multiplier: 331776,
        metric_equiv: "≈ 11.66 g (or 12 g modern API)",
        desc: "Daily single dose of decoction extract, medicated ghee (Ghrita), or Taila (oil).",
        category_level: "standard",
        badge: "12× Masha / 1 Tola",
        historical_note: "Defined in Ayurvedic Pharmacopoeia of India (API) as standard 12g."
      },
      {
        id: "pala",
        name: "Pala (Bilva / Mushti)",
        vernacular: "पल",
        relation_text: "4 Karsha (48 g)",
        multiplier: 1327104,
        metric_equiv: "≈ 48.0 grams",
        desc: "Four Karshas; single palmful / standard vessel volume.",
        category_level: "standard",
        badge: "4× Karsha (~48g)"
      },
      {
        id: "prastha",
        name: "Prastha",
        vernacular: "प्रस्थ",
        relation_text: "16 Pala (64 Karsha)",
        multiplier: 21233664,
        metric_equiv: "≈ 768 grams / 768 ml",
        desc: "Liquid volume measure for cooking Asava and Arishta herbal wines.",
        category_level: "macro",
        badge: "16× Pala"
      },
      {
        id: "drona",
        name: "Drona",
        vernacular: "द्रोण",
        relation_text: "16 Prastha (1,024 Karsha)",
        multiplier: 339738624,
        metric_equiv: "≈ 12.288 Litres / kg",
        desc: "Large brass boiling vat unit for manufacturing Ayurvedic oils and bulk syrups.",
        category_level: "macro",
        badge: "Bulk Pharmaceutical Vat",
        historical_note: "Standard liquid fermentation vessel capacity in Sarangadhara Samhita."
      }
    ],
    connections: [
      { from: "dhvamsi", to: "marichi", label: "× 6", formula: "6 Dhvamsi = 1 Marichi" },
      { from: "marichi", to: "rajika", label: "× 6", formula: "6 Marichi = 1 Rajika" },
      { from: "rajika", to: "sarshapa", label: "× 3", formula: "3 Rajika = 1 Sarshapa" },
      { from: "sarshapa", to: "yava-med", label: "× 8", formula: "8 Sarshapa = 1 Yava" },
      { from: "yava-med", to: "gunja-med", label: "× 4", formula: "4 Yava = 1 Gunja / Ratti (~121.5 mg)" },
      { from: "gunja-med", to: "masha-med", label: "× 8", formula: "8 Gunja = 1 Masha (~0.97 g)" },
      { from: "masha-med", to: "karsha", label: "× 12", formula: "12 Masha = 1 Karsha / Tola (~11.66 g)" },
      { from: "karsha", to: "pala", label: "× 4", formula: "4 Karsha = 1 Pala (~48 g)" },
      { from: "pala", to: "prastha", label: "× 16", formula: "16 Pala = 1 Prastha (~768 ml/g)" },
      { from: "prastha", to: "drona", label: "× 16", formula: "16 Prastha = 1 Drona (~12.28 Litres/kg)" }
    ],
    conversion_table: [
      { from: "1 Gunja (Ratti)", to: "Metric", ratio: "121.5 mg", notes: "Standard mineral dose" },
      { from: "1 Masha", to: "Metric", ratio: "0.972 g", notes: "8 Ratti" },
      { from: "1 Karsha", to: "Metric", ratio: "11.66 g / 12 g (API)", notes: "12 Masha" },
      { from: "1 Pala", to: "Metric", ratio: "48.0 g", notes: "4 Karsha" },
      { from: "1 Drona", to: "Metric", ratio: "12.288 Liters", notes: "1,024 Karsha (Bulk vat)" }
    ],
    key_insights: [
      "Ayurvedic Pharmacopoeia of India (API) provides exact legal metric conversions for each Sarangadhara unit.",
      "Bhasmas of gold, mica (Abhraka), and pearl (Mukta) were dosed in sub-divisions of Ratti (e.g., 1/2 to 2 Ratti).",
      "Liquid Kashayam preparation strictly mandated boiling 16 parts water down to 1/4th (4 parts) or 1/8th by Prastha volume."
    ],
    calculator: {
      base_unit_id: "karsha",
      units: [
        { id: "gunja", name: "Gunja (Ratti)", factor_to_base: 0.010416, symbol: "gnj", metric_unit: "mg", metric_factor: 121.5 },
        { id: "masha", name: "Masha", factor_to_base: 0.08333, symbol: "msh", metric_unit: "g", metric_factor: 0.972 },
        { id: "karsha", name: "Karsha (Tola)", factor_to_base: 1, symbol: "ksh", metric_unit: "g", metric_factor: 12 },
        { id: "pala", name: "Pala", factor_to_base: 4, symbol: "pal", metric_unit: "g", metric_factor: 48 },
        { id: "prastha", name: "Prastha", factor_to_base: 64, symbol: "prs", metric_unit: "ml / g", metric_factor: 768 },
        { id: "drona", name: "Drona", factor_to_base: 1024, symbol: "drn", metric_unit: "L / kg", metric_factor: 12.288 }
      ]
    }
  },
  {
    id: "tamil-sangam",
    title: "Classical Tamil Sangam Metrology: Nel to Veli & Marakkal",
    subtitle: "Ancient Dravidian linear, land, and liquid measurement pipelines of the Chola & Pandya realms",
    category: "volume",
    sector: "agriculture",
    state: "Tamil Nadu",
    period: "Sangam to Imperial Chola (~300 BCE – 1250 CE)",
    historical_source: "Silappadikaram, Tolkappiyam & Thanjavur Brihadisvara Temple Epigraphs",
    icon_emoji: "🛕",
    tags: ["tamil", "sangam", "chola", "muzham", "marakkal"],
    theme: {
      primary: "#BE123C",
      light: "#FFF1F2",
      accent: "#9F1239",
      border: "#FECDD3",
      badge: "bg-rose-100 text-rose-800 border-rose-200",
      gradient: "from-rose-950/90 via-pink-900/80 to-stone-900/90"
    },
    description:
      "Documented in Sangam literature and thousands of Chola temple inscriptions, Tamil metrology featured specialized systems for land survey (Muzham rod to Veli) and dry/liquid volume (Sevadu to Marakkal / Kalam), which regulated the Kaveri delta's extensive irrigation and tax taxation.",
    nodes: [
      {
        id: "nel",
        name: "Nel (Paddy Grain)",
        vernacular: "நெல்",
        relation_text: "Base Grain Length",
        multiplier: 1,
        metric_equiv: "≈ 0.6 cm length",
        desc: "Length of a single unhusked paddy grain.",
        category_level: "micro",
        badge: "Paddy Grain Base"
      },
      {
        id: "viral",
        name: "Viral (Fingerbreadth)",
        vernacular: "விரல்",
        relation_text: "8 Nel",
        multiplier: 8,
        metric_equiv: "≈ 1.95 cm (3/4 in)",
        desc: "Width of thumb/finger joint.",
        category_level: "anatomical",
        badge: "8× Nel"
      },
      {
        id: "muzham",
        name: "Muzham (Tamil Cubit)",
        vernacular: "முழம்",
        relation_text: "24 Viral (2 Jaan)",
        multiplier: 192,
        metric_equiv: "≈ 46.5 to 50 cm (1.5 ft)",
        desc: "Forearm length from elbow to tip of middle finger; still used across Tamil Nadu flower markets.",
        category_level: "anatomical",
        badge: "Jasmine / Silk Cubit",
        historical_note: "Used for weaving Kanchipuram sarees and measuring temple stone pillars."
      },
      {
        id: "kol",
        name: "Kol (Survey Rod)",
        vernacular: "கோல்",
        relation_text: "4 to 16 Muzham",
        multiplier: 768,
        metric_equiv: "≈ 2.0 to 3.6 meters",
        desc: "Standard land survey pole; King Rajaraja Chola standardized the '16-foot Ulakalanda Kol'.",
        category_level: "tool",
        badge: "Chola Survey Rod"
      },
      {
        id: "marakkal",
        name: "Marakkal (Kuruni)",
        vernacular: "மராக்கால் (குறுணி)",
        relation_text: "8 Padi",
        multiplier: 3072,
        metric_equiv: "≈ 3.2 to 4.0 Litres (≈ 3.5 kg paddy)",
        desc: "Brass/wooden cylindrical volume measure for temple paddy revenue endowment.",
        category_level: "standard",
        badge: "Grain Volume Standard",
        historical_note: "Rajarajan Marakkal was the imperial bronze vessel at Brihadisvara Temple."
      },
      {
        id: "kalam",
        name: "Kalam",
        vernacular: "கலம்",
        relation_text: "12 Marakkal (96 Padi)",
        multiplier: 36864,
        metric_equiv: "≈ 40 to 48 Litres (≈ 35 kg)",
        desc: "Wholesale granary sack measure for Kaveri delta paddy barges.",
        category_level: "macro",
        badge: "Wholesale Kalam"
      },
      {
        id: "veli",
        name: "Veli (Imperial Land Unit)",
        vernacular: "வேலி",
        relation_text: "2,000 Kulis (100 Kani)",
        multiplier: 3686400,
        metric_equiv: "≈ 6.60 Acres (2.67 Hectares)",
        desc: "The premier agrarian estate unit of the Chola kingdom granted to Brahmadeya and temples.",
        category_level: "macro",
        badge: "Chola Estate Unit (6.6 Acres)"
      }
    ],
    connections: [
      { from: "nel", to: "viral", label: "× 8", formula: "8 Nel = 1 Viral (~1.95 cm)" },
      { from: "viral", to: "muzham", label: "× 24", formula: "24 Viral = 1 Muzham (~46.5 cm)" },
      { from: "muzham", to: "kol", label: "× 4-8", formula: "Survey Rod = 8 to 16 Muzham" },
      { from: "marakkal", to: "kalam", label: "× 12", formula: "12 Marakkal = 96 Padi = 1 Kalam (~40 L)" },
      { from: "kol", to: "veli", label: "Cadastral", formula: "1 Veli ≈ 6.60 Acres (100 Kani)" }
    ],
    conversion_table: [
      { from: "1 Muzham", to: "Metric", ratio: "46.5 cm (1.5 ft)", notes: "Flower & textile cubit" },
      { from: "1 Padi", to: "Metric", ratio: "≈ 1.5 to 1.8 Liters", notes: "Standard home vessel" },
      { from: "1 Marakkal", to: "Metric", ratio: "≈ 3.6 Liters", notes: "8 Padi" },
      { from: "1 Kalam", to: "Metric", ratio: "≈ 43.2 Liters", notes: "12 Marakkal" },
      { from: "1 Veli", to: "Metric", ratio: "6.60 Acres (26,700 sq.m)", notes: "100 Kanis" }
    ],
    key_insights: [
      "The 'Muzham' is still alive today in Madurai and Chennai for purchasing fragrant jasmine garlands (Malli poo).",
      "Chola King Rajaraja I was celebrated as 'Ulakalanda Perumal' (The King who surveyed the entire world) for surveying all agrarian lands in Veli.",
      "Temple inscriptions recorded annual paddy dues in exact fractions of Marakkal and Sevidu."
    ],
    calculator: {
      base_unit_id: "muzham",
      units: [
        { id: "viral", name: "Viral (Finger)", factor_to_base: 0.04166, symbol: "vrl", metric_unit: "cm", metric_factor: 1.95 },
        { id: "jaan", name: "Jaan (Span)", factor_to_base: 0.5, symbol: "jan", metric_unit: "cm", metric_factor: 23.25 },
        { id: "muzham", name: "Muzham (Cubit)", factor_to_base: 1, symbol: "mzh", metric_unit: "cm", metric_factor: 46.5 },
        { id: "kol", name: "Kol (Rod)", factor_to_base: 4, symbol: "kol", metric_unit: "m", metric_factor: 1.86 },
        { id: "kani", name: "Kani (Land Area)", factor_to_base: 100, symbol: "kni", metric_unit: "acres", metric_factor: 1.32 },
        { id: "veli", name: "Veli (Land Area)", factor_to_base: 500, symbol: "vel", metric_unit: "acres", metric_factor: 6.6 }
      ]
    }
  },
  {
    id: "textile-metrology",
    title: "Textile & Handloom Weaving Metrology: Soot to Than (Bolt)",
    subtitle: "The yarn count, loom reed, and bolt length hierarchy of Banarasi & Kanchipuram master weavers",
    category: "length",
    sector: "textile-handloom",
    period: "Medieval to Modern Handloom (~1400 CE – Present)",
    historical_source: "Master Weavers Guild Handbooks & Indian Handloom Standards",
    icon_emoji: "🧵",
    tags: ["textile", "handloom", "banarasi", "weaving", "silk"],
    theme: {
      primary: "#4F46E5",
      light: "#EEF2FF",
      accent: "#4338CA",
      border: "#C7D2FE",
      badge: "bg-indigo-100 text-indigo-800 border-indigo-200",
      gradient: "from-indigo-950/90 via-blue-900/80 to-purple-950/90"
    },
    description:
      "Traditional Indian silk brocades (Zari, Kinkhab) and fine muslins required an exacting metrological hierarchy combining yarn thread thickness (Soot), loom reed spacing (Girah), warp yardage (Gaz), and standard folded fabric bolts (Taav & Than).",
    nodes: [
      {
        id: "soot",
        name: "Soot (Yarn Strand)",
        vernacular: "सूत",
        relation_text: "Base Yarn Calibre",
        multiplier: 1,
        metric_equiv: "≈ 3.175 mm (1/8 inch)",
        desc: "Thickness of 1 ply warp yarn / 1/8th of an inch.",
        category_level: "micro",
        badge: "1/8th Inch"
      },
      {
        id: "girah",
        name: "Girah (Finger Knot)",
        vernacular: "गिरह",
        relation_text: "16 per Gaz (Yard)",
        multiplier: 18,
        metric_equiv: "≈ 5.715 cm (2.25 inches)",
        desc: "Width of three fingers grouped; 16 girahs formed 1 full tailor's Gaz (yard).",
        category_level: "standard",
        badge: "1/16 Gaz (Yard)"
      },
      {
        id: "angul-tex",
        name: "Angul (Loom Reed Finger)",
        vernacular: "अंगुल",
        relation_text: "Loom Dent Spacing",
        multiplier: 6,
        metric_equiv: "≈ 1.90 cm",
        desc: "Distance used to calibrate reed dents on pit-looms.",
        category_level: "anatomical",
        badge: "Reed Spacing"
      },
      {
        id: "gaz",
        name: "Gaz (Weaver's Yard)",
        vernacular: "गज",
        relation_text: "16 Girah (2 Hath)",
        multiplier: 288,
        metric_equiv: "≈ 91.44 cm (36 inches / 3 ft)",
        desc: "Standard yardage stick notched in brass on the weaver's bench.",
        category_level: "standard",
        badge: "Master Yardstick (36 in)"
      },
      {
        id: "saree-length",
        name: "Saree Standard (Nav-vari / Chha-vari)",
        vernacular: "साड़ी (६ गज / ९ गज)",
        relation_text: "6 to 9 Gaz (Muzham)",
        multiplier: 1728,
        metric_equiv: "≈ 5.5 to 8.2 meters",
        desc: "Traditional 6-yard (six-yard) and Maharashtrian 9-yard (Nauvari) draped saree dimensions.",
        category_level: "standard",
        badge: "Traditional Drape Length"
      },
      {
        id: "taav",
        name: "Taav (Loom Fold)",
        vernacular: "ताव",
        relation_text: "Double-fold section",
        multiplier: 576,
        metric_equiv: "≈ 1.82 meters (2 Gaz)",
        desc: "One natural fold of silk brocade off the take-up beam.",
        category_level: "standard",
        badge: "Loom Fold"
      },
      {
        id: "than",
        name: "Than (Silk Bolt)",
        vernacular: "थान",
        relation_text: "10 to 20 Gaz (Full Bolt)",
        multiplier: 5760,
        metric_equiv: "≈ 18.28 meters (20 Yards)",
        desc: "Uncut roll/bolt of unstitched Banarasi, Chanderi, or Muslin cloth sent to royal karkhanas.",
        category_level: "macro",
        badge: "Commercial Fabric Bolt",
        historical_note: "Wholesale cloth consignment unit recorded in Mughal textile ledgers."
      }
    ],
    connections: [
      { from: "soot", to: "girah", label: "× 18", formula: "Yarn strands to Finger Knot" },
      { from: "girah", to: "gaz", label: "× 16", formula: "16 Girah = 1 Gaz (~91.4 cm / 36 in)" },
      { from: "gaz", to: "saree-length", label: "6× - 9×", formula: "6 Gaz = 5.5m Standard Saree / 9 Gaz = Nauvari" },
      { from: "gaz", to: "than", label: "× 20", formula: "20 Gaz = 1 Than (~18.28 m bolt)" }
    ],
    conversion_table: [
      { from: "1 Girah", to: "Metric", ratio: "5.715 cm (2.25 in)", notes: "1/16 Gaz" },
      { from: "1 Gaz", to: "Metric", ratio: "91.44 cm (36 in)", notes: "16 Girahs" },
      { from: "1 Saree Length", to: "Metric", ratio: "5.50 meters (6 Gaz)", notes: "Standard handloom length" },
      { from: "1 Than (Bolt)", to: "Metric", ratio: "18.28 meters (20 Gaz)", notes: "Wholesale bolt" }
    ],
    key_insights: [
      "16 Girahs in 1 Gaz: Every Indian tailor and silk merchant still checks fabric width in Girahs.",
      "Zari borders (Pallu) were counted in 'Angul' breadth to determine gold wire weight.",
      "Muslin fine count from Dhaka and Varanasi was tested by passing an entire 20-gaz Than through a signet ring."
    ],
    calculator: {
      base_unit_id: "gaz",
      units: [
        { id: "girah", name: "Girah", factor_to_base: 0.0625, symbol: "grh", metric_unit: "cm", metric_factor: 5.715 },
        { id: "gaz", name: "Gaz (Yard)", factor_to_base: 1, symbol: "gaz", metric_unit: "m", metric_factor: 0.9144 },
        { id: "saree", name: "Saree (6 Yards)", factor_to_base: 6, symbol: "sri", metric_unit: "m", metric_factor: 5.4864 },
        { id: "nauvari", name: "Nauvari (9 Yards)", factor_to_base: 9, symbol: "nau", metric_unit: "m", metric_factor: 8.2296 },
        { id: "than", name: "Than (Bolt)", factor_to_base: 20, symbol: "thn", metric_unit: "m", metric_factor: 18.288 }
      ]
    }
  },
  {
    id: "gujarat-mandi",
    title: "Gujarat Mandi & Commercial Metrology: Navtak to Khandi",
    subtitle: "The maritime, cotton, and spice trade weight continuum of Baroda, Surat & Saurashtra",
    category: "weight",
    sector: "trade-commerce",
    state: "Gujarat",
    period: "Gaekwad & British Gujarat (~1750 – 1950 CE)",
    historical_source: "Baroda State Gazette & Saurashtra Cotton Mandi Rules",
    icon_emoji: "🚢",
    tags: ["gujarat", "cotton", "mandi", "surat", "khandi"],
    theme: {
      primary: "#0891B2",
      light: "#ECFEFF",
      accent: "#0E7490",
      border: "#A5F3FC",
      badge: "bg-cyan-100 text-cyan-800 border-cyan-200",
      gradient: "from-cyan-950/90 via-teal-900/80 to-blue-950/90"
    },
    description:
      "Gujarat's vibrant ports (Surat, Bharuch, Mandvi) and cotton ginning mandis developed a precise commercial weighing ladder. Starting from the fine spice Navtak and domestic Ser, it scaled up to the famous 20-Ser Gujarat Mann (20 kg) and the maritime shipping Khandi (approx 350-500 kg).",
    nodes: [
      {
        id: "navtak",
        name: "Navtak",
        vernacular: "નવટાંક",
        relation_text: "Base Retail Weight",
        multiplier: 1,
        metric_equiv: "≈ 58.3 g",
        desc: "One-sixteenth of a Ser; used for cardamom, cloves, and premium ghee in pols.",
        category_level: "standard",
        badge: "1/16 Ser"
      },
      {
        id: "pav-gj",
        name: "Pav (Pao)",
        vernacular: "પાવ",
        relation_text: "4 Navtak",
        multiplier: 4,
        metric_equiv: "≈ 233.3 g (1/4 Ser)",
        desc: "Quarter of a Ser; universal dairy and grain shopping unit.",
        category_level: "standard",
        badge: "1/4 Ser"
      },
      {
        id: "ser-gj",
        name: "Ser (Sher)",
        vernacular: "શેર",
        relation_text: "4 Pav (16 Navtak / 40 Tola)",
        multiplier: 16,
        metric_equiv: "≈ 466.5 g (approx 0.5 kg)",
        desc: "Gujarat's domestic Ser (distinctly half of Bengal's 80-tola Seer).",
        category_level: "standard",
        badge: "Gujarat Standard Ser (40 Tola)",
        historical_note: "Standard 40-tola Ser officially gazetted by Maharaja Sayajirao Gaekwad of Baroda."
      },
      {
        id: "dhonli",
        name: "Dhonli / Pach-seri",
        vernacular: "ધોંલી / પાંચશેરી",
        relation_text: "5 Ser",
        multiplier: 80,
        metric_equiv: "≈ 2.33 kg",
        desc: "Five-ser cast iron bell weight used by grocery wholesalers.",
        category_level: "standard",
        badge: "5× Ser"
      },
      {
        id: "mann-gj",
        name: "Mann (Gujarat Maund)",
        vernacular: "મણ",
        relation_text: "40 Ser (or 20 kg modern)",
        multiplier: 640,
        metric_equiv: "≈ 18.66 kg (standardized as 20 kg)",
        desc: "The universal benchmark of Saurashtra and North Gujarat agricultural mandis for cotton, groundnut, and cumin.",
        category_level: "macro",
        badge: "20 kg Mandi Unit",
        historical_note: "Still the primary quoting unit for cotton bales and castor seed on commodity exchanges."
      },
      {
        id: "khandi-gj",
        name: "Khandi",
        vernacular: "ખાંડી",
        relation_text: "20 Mann",
        multiplier: 12800,
        metric_equiv: "≈ 373.2 kg (standardized as 355.6 kg for cotton)",
        desc: "Heavy freight shipping unit for timber, raw uncarded cotton, and ship ballast at Surat & Bhavnagar ports.",
        category_level: "macro",
        badge: "20× Mann (Freight Bales)",
        historical_note: "Standard raw cotton trade bale pricing is still quoted per candy/khandi in Indian textile mills."
      }
    ],
    connections: [
      { from: "navtak", to: "pav-gj", label: "× 4", formula: "4 Navtak = 1 Pav (~233 g)" },
      { from: "pav-gj", to: "ser-gj", label: "× 4", formula: "4 Pav = 16 Navtak = 1 Ser (~466 g)" },
      { from: "ser-gj", to: "dhonli", label: "× 5", formula: "5 Ser = 1 Pach-seri (~2.33 kg)" },
      { from: "ser-gj", to: "mann-gj", label: "× 40 (or 20 kg)", formula: "40 Ser = 1 Mann (≈ 20 kg)" },
      { from: "mann-gj", to: "khandi-gj", label: "× 20", formula: "20 Mann = 1 Khandi (≈ 373.2 kg / 355.6 kg cotton candy)" }
    ],
    conversion_table: [
      { from: "1 Ser", to: "Metric", ratio: "466.5 grams (≈ 0.5 kg)", notes: "40 Tola Gujarat Ser" },
      { from: "1 Mann (Maund)", to: "Metric", ratio: "20.0 kg (18.66 kg exact)", notes: "Primary APMC mandi unit" },
      { from: "1 Khandi", to: "Metric", ratio: "373.2 kg (355.6 kg cotton)", notes: "20 Manns" }
    ],
    key_insights: [
      "In Gujarat APMC mandis (Rajkot, Unjha, Gondal), agricultural produce prices are still quoted 'per Mann' (20 kg).",
      "The 'Khandi' (Candy) remains the recognized international trading contract size for Indian Shankar-6 raw cotton.",
      "The Gujarat 40-Tola Ser allowed simple binary arithmetic with the British Pound (1 Ser ≈ 1.028 lbs)."
    ],
    calculator: {
      base_unit_id: "mann-gj",
      units: [
        { id: "navtak", name: "Navtak", factor_to_base: 0.0029, symbol: "nvt", metric_unit: "g", metric_factor: 58.3 },
        { id: "ser", name: "Ser (Sher)", factor_to_base: 0.025, symbol: "ser", metric_unit: "kg", metric_factor: 0.4665 },
        { id: "pachseri", name: "Panch-Seri", factor_to_base: 0.125, symbol: "p-ser", metric_unit: "kg", metric_factor: 2.33 },
        { id: "mann", name: "Mann (Maund)", factor_to_base: 1, symbol: "man", metric_unit: "kg", metric_factor: 20 },
        { id: "khandi", name: "Khandi", factor_to_base: 20, symbol: "khd", metric_unit: "kg", metric_factor: 373.2 }
      ]
    }
  }
];
