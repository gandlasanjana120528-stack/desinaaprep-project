import { Measurement } from "@/types";

export const ARUNACHAL_PRADESH_MEASUREMENTS: Measurement[] = [
  // ─── 1. Transportation & Distance (2 units) ─────────────────────────────────
  {
    id: "arunachal-trans-1",
    slug: "days-walk-reckoning-transport-arunachal",
    name_english: "(Day's-walk reckoning)",
    name_sanskrit:
      "N/A — informal, terrain-based measurement, no fixed named unit documented",
    local_names: [],
    name_hindi: "दिन भर की यात्रा (अनौपचारिक)",
    category: "length",
    measurement_type: "Distance (informal, time-based)",
    sector: "transportation-distance",
    origin: "Arunachal Pradesh",
    modern_equivalent:
      "Distance expressed as the number of days' walk required, not a fixed linear unit",
    conversion_formula: "No standardised hierarchy",
    meaning:
      "In Arunachal's steep, forested mountain terrain, traditional distance was — and in many remote areas still is — reckoned by how many days' walking it takes to reach a place, rather than by a fixed length unit like the plains states' Krosha or Yojana",
    historical_period:
      "Customary/traditional practice, pre-dating and continuing alongside NEFA/state administration (undated origin)",
    region_applicable:
      "Eastern Himalayan hill tracts generally — Nyishi, Adi, Galo, Tagin, Mishmi and other tribal homelands",
    states: ["Arunachal Pradesh"],
    used_in: [
      "In Arunachal's steep, forested mountain terrain, traditional distance was — and in many remote areas still is — reckoned by how many days' walking it takes to reach a place, rather than by a fixed length unit like the plains states' Krosha or Yojana",
      "Transportation & Distance",
    ],
    references: [
      "No standardised metrological reference documented for this practice",
    ],
    tags: [
      "arunachal-pradesh",
      "traditional-units",
      "transportation-distance",
      "distance",
      "days-walk",
      "tribal",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "arunachal-trans-2",
    slug: "chhingi-chandury-chempela-transport-arunachal",
    name_english: "Chhingi–Chandury–Chempela (named trade-route stages)",
    name_sanskrit: "N/A — a specific historical route, not a generalisable unit",
    local_names: [],
    name_hindi: "व्यापार-मार्ग चरण",
    category: "length",
    measurement_type: "Distance / Stage (route-specific)",
    sector: "transportation-distance",
    origin: "Arunachal Pradesh (Monyul / Monpa)",
    modern_equivalent:
      "A fixed sequence of named stages along one historical trade route, not a repeatable unit of measure",
    conversion_formula: "Not applicable — route-specific",
    meaning:
      "The named stages of the historical Monpa trading route from Tawang into Bhutan, illustrating how trans-Himalayan trade distance was conventionally described by the string of stopping-points along a known route rather than by a measured distance figure",
    historical_period:
      "Monyul Buddhist period — Tawang Monastery founded 1680–81 CE, under Tibetan/Lhasa administration until 1951",
    region_applicable:
      "Tawang & West Kameng districts — Monpa Buddhist Monyul region, bordering Tibet and Bhutan",
    states: ["Arunachal Pradesh"],
    used_in: [
      "The named stages of the historical Monpa trading route from Tawang into Bhutan, illustrating how trans-Himalayan trade distance was conventionally described by the string of stopping-points along a known route rather than by a measured distance figure",
      "Transportation & Distance",
    ],
    references: [
      "https://centreforpastoralism.org/contextualising-monpa-pastoralism-in-arunachal-pradesh/",
      "https://dl.dbuniversity.ac.in/bitstream/123456789/8/8/08_chapter%204.pdf",
    ],
    tags: [
      "arunachal-pradesh",
      "traditional-units",
      "transportation-distance",
      "trade-route",
      "monpa",
      "tawang",
    ],
    created_at: "2024-01-01",
  },

  // ─── 2. Land Measurement (3 units) ──────────────────────────────────────────
  {
    id: "arunachal-land-1",
    slug: "customary-clan-community-land-right-arunachal",
    name_english: "(Customary clan/community land right)",
    name_sanskrit: "N/A — a tenure classification, not a unit of area",
    local_names: [],
    name_hindi: "सामुदायिक भूमि अधिकार",
    category: "area",
    measurement_type: "Area (customary tenure, not a fixed unit)",
    sector: "land-measurement",
    origin: "Arunachal Pradesh",
    modern_equivalent:
      "Not quantified in a standard area unit — reckoned by named plot and genealogical right",
    conversion_formula: "No fixed hierarchy",
    meaning:
      "Unlike the Bigha-Katha-Dhur systems of the Gangetic plains and Assam, most Arunachali tribal land — including Jhum (shifting-cultivation) plots — was traditionally held and passed down under customary clan or community right rather than measured against a standardised area unit",
    historical_period:
      "Customary/traditional practice, pre-dating and continuing alongside NEFA/state administration (undated origin)",
    region_applicable:
      "Eastern Himalayan hill tracts generally — Nyishi, Adi, Galo, Tagin, Mishmi and other tribal homelands",
    states: ["Arunachal Pradesh"],
    used_in: [
      "Unlike the Bigha-Katha-Dhur systems of the Gangetic plains and Assam, most Arunachali tribal land — including Jhum (shifting-cultivation) plots — was traditionally held and passed down under customary clan or community right rather than measured against a standardised area unit",
      "Land Measurement",
    ],
    references: [
      "No standardised metrological reference documented for this practice",
    ],
    tags: [
      "arunachal-pradesh",
      "traditional-units",
      "land-measurement",
      "area",
      "customary-tenure",
      "clan-land",
      "tribal",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "arunachal-land-2",
    slug: "apatani-concentric-land-use-zones-arunachal",
    name_english: "Apatani concentric land-use zones (private / clan / forest)",
    name_sanskrit: "N/A — a land use classification, not a unit of area",
    local_names: [],
    name_hindi: "आपातानी भूमि-उपयोग क्षेत्र",
    category: "area",
    measurement_type: "Area (land use classification, not a fixed unit)",
    sector: "land-measurement",
    origin: "Arunachal Pradesh (Apatani)",
    modern_equivalent:
      "Concentric rings: privately owned wet-rice land at the centre, clan-held land around it, community/state forest (Morey) beyond",
    conversion_formula: "Not applicable — a zoning pattern, not a metric hierarchy",
    meaning:
      "The Apatani tribe's distinctive land-use pattern in Ziro Valley, considered for UNESCO World Heritage status, organises the valley by use-intensity rather than by area measurement — Aji is their own term for the paddy-cum-fish wet-rice system itself",
    historical_period:
      "Customary/traditional practice, pre-dating and continuing alongside NEFA/state administration (undated origin)",
    region_applicable:
      "Ziro Valley, Lower Subansiri district — Apatani tribal homeland",
    states: ["Arunachal Pradesh"],
    used_in: [
      "The Apatani tribe's distinctive land-use pattern in Ziro Valley, considered for UNESCO World Heritage status, organises the valley by use-intensity rather than by area measurement — Aji is their own term for the paddy-cum-fish wet-rice system itself",
      "Land Measurement",
    ],
    references: [
      "https://www.indiawaterportal.org/agriculture/farm/lessons-ecology-apatani-tribe-ziro-valley",
      "http://jbr.rgu.ac.in/img/pdf/50%20to%2057%202nd.pdf",
    ],
    tags: [
      "arunachal-pradesh",
      "traditional-units",
      "land-measurement",
      "area",
      "apatani",
      "ziro-valley",
      "concentric-zones",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "arunachal-land-3",
    slug: "acre-hectare-land-arunachal",
    name_english: "Acre / Hectare (post-1950s administrative units)",
    name_sanskrit: "एकर / हेक्टेयर",
    local_names: [],
    name_hindi: "एकड़ / हेक्टेयर",
    category: "area",
    measurement_type: "Area",
    sector: "land-measurement",
    origin: "Pan-Arunachal Pradesh",
    modern_equivalent:
      "43,560 sq ft / 4,046.86 sq m (Acre); 10,000 sq m (Hectare)",
    conversion_formula: "100 Are = 1 Hectare; 1 Acre ≈ 0.405 Hectare",
    meaning:
      "Introduced into Arunachal's land records only after the formation of the North-East Frontier Agency (NEFA) and later statehood (1987), layered on top of, not replacing, customary tenure",
    historical_period:
      "British/Indian administration as the North-East Frontier Agency (NEFA), 1914 McMahon Line onward, formal statehood 1987",
    region_applicable: "Pan-Arunachal Pradesh generally",
    states: ["Arunachal Pradesh"],
    used_in: [
      "Introduced into Arunachal's land records only after the formation of the North-East Frontier Agency (NEFA) and later statehood (1987), layered on top of, not replacing, customary tenure",
      "Land Measurement",
    ],
    references: [
      "https://en.wikipedia.org/wiki/North-East_Frontier_Agency",
    ],
    tags: [
      "arunachal-pradesh",
      "traditional-units",
      "land-measurement",
      "area",
      "acre",
      "hectare",
      "nefa",
    ],
    created_at: "2024-01-01",
  },

  // ─── 3. Livestock & Dairy (2 units) ─────────────────────────────────────────
  {
    id: "arunachal-dairy-1",
    slug: "mithun-count-dairy-arunachal",
    name_english: "Mithun-count",
    name_sanskrit:
      "N/A — value/wealth reckoning, not a weight or volume unit",
    local_names: [],
    name_hindi: "मिथुन-गणना",
    category: "count",
    measurement_type: "Count (wealth/value unit)",
    sector: "livestock-dairy",
    origin: "Arunachal Pradesh",
    modern_equivalent:
      "A household or clan's status and wealth is reckoned directly by the number of Mithun owned",
    conversion_formula:
      "No fixed hierarchy — larger, healthier and more numerous animals carry proportionately greater value",
    meaning:
      "The central traditional measure of pastoral wealth across most of Arunachal's tribes — used for bride-price, dispute compensation, and status display",
    historical_period:
      "Customary/traditional practice, pre-dating and continuing alongside NEFA/state administration (undated origin)",
    region_applicable:
      "Eastern Himalayan hill tracts generally — Nyishi, Adi, Galo, Tagin, Mishmi and other tribal homelands",
    states: ["Arunachal Pradesh"],
    used_in: [
      "The central traditional measure of pastoral wealth across most of Arunachal's tribes — used for bride-price, dispute compensation, and status display",
      "Livestock & Dairy",
    ],
    references: [
      "https://www.insidene.com/importance-of-the-mithun-in-arunachal-pradesh/",
      "https://villagesquare.in/mithun-matters-arunachal-elders-ban-giving-native-animal-in-dowry/",
    ],
    tags: [
      "arunachal-pradesh",
      "traditional-units",
      "livestock-dairy",
      "mithun",
      "pastoral-wealth",
      "tribal",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "arunachal-dairy-2",
    slug: "bre-tibetan-grain-volume-dairy-arunachal",
    name_english: "Bre (Tibetan grain-volume measure)",
    name_sanskrit:
      "N/A (Tibetan vernacular term, not independently confirmed for Arunachal-specific use)",
    local_names: [],
    name_hindi: "ब्रे (तिब्बती)",
    category: "volume",
    measurement_type: "Volume",
    sector: "livestock-dairy",
    origin: "Arunachal Pradesh (Monyul / Monpa)",
    modern_equivalent:
      "Approximately 2 litres on general Tibetan reckoning",
    conversion_formula: "20 Bre = 1 Khel (general Tibetan convention)",
    meaning:
      "The general Tibetan volume measure for barley (tsampa) and grain across the Tibetan cultural sphere; plausibly used in Monpa-Tibetan butter-and-grain barter trade, though Arunachal-specific confirmation was not located, so this entry is flagged as unverified",
    historical_period:
      "Monyul Buddhist period — Tawang Monastery founded 1680–81 CE, under Tibetan/Lhasa administration until 1951",
    region_applicable:
      "Tawang & West Kameng districts — Monpa Buddhist Monyul region, bordering Tibet and Bhutan",
    states: ["Arunachal Pradesh"],
    used_in: [
      "The general Tibetan volume measure for barley (tsampa) and grain across the Tibetan cultural sphere; plausibly used in Monpa-Tibetan butter-and-grain barter trade, though Arunachal-specific confirmation was not located, so this entry is flagged as unverified",
      "Livestock & Dairy",
    ],
    references: [
      "Flagged for further verification — general Tibetan-sphere unit, Arunachal-specific usage not independently confirmed",
    ],
    tags: [
      "arunachal-pradesh",
      "traditional-units",
      "livestock-dairy",
      "volume",
      "bre",
      "tibetan",
      "monpa",
    ],
    created_at: "2024-01-01",
  },

  // ─── 4. Household & Daily Life (2 units) ─────────────────────────────────────
  {
    id: "arunachal-hh-1",
    slug: "chutki-muthi-household-arunachal",
    name_english: "Chutki / Muthi (pinch/fistful)",
    name_sanskrit:
      "N/A (general North Indian vernacular, adopted through post-1950s administrative/market contact)",
    local_names: [],
    name_hindi: "चुटकी / मुट्ठी",
    category: "volume",
    measurement_type: "Volume (informal)",
    sector: "household",
    origin: "Pan-Arunachal Pradesh",
    modern_equivalent: "Pinch to ~50–100 g fistful",
    conversion_formula: "Chutki < Muthi",
    meaning:
      "Everyday informal cooking-quantity gestures, common to household cooking across Arunachal's diverse communities",
    historical_period:
      "British/Indian administration as the North-East Frontier Agency (NEFA), 1914 McMahon Line onward, formal statehood 1987",
    region_applicable: "Pan-Arunachal Pradesh generally",
    states: ["Arunachal Pradesh"],
    used_in: [
      "Everyday informal cooking-quantity gestures, common to household cooking across Arunachal's diverse communities",
      "Household & Daily Life",
    ],
    references: ["https://en.wikipedia.org/wiki/Handful"],
    tags: [
      "arunachal-pradesh",
      "traditional-units",
      "household",
      "volume",
      "chutki",
      "muthi",
      "cooking",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "arunachal-hh-2",
    slug: "bamboo-internode-container-household-arunachal",
    name_english: "Bamboo internode container (informal volume measure)",
    name_sanskrit: "N/A — vessel-based, no fixed named hierarchy documented",
    local_names: [],
    name_hindi: "बांस पात्र (अनौपचारिक)",
    category: "volume",
    measurement_type: "Volume (utility, informal)",
    sector: "household",
    origin: "Pan-Arunachal Pradesh",
    modern_equivalent:
      "Determined by the natural internode length/width of the bamboo used",
    conversion_formula: "No standardised hierarchy",
    meaning:
      "Hollowed bamboo internodes are used across Arunachal's tribal households to store, carry and informally measure out rice, water and apong/rice-beer, with the vessel itself — not a named unit — serving as the practical measure",
    historical_period:
      "Customary/traditional practice, pre-dating and continuing alongside NEFA/state administration (undated origin)",
    region_applicable: "Pan-Arunachal Pradesh generally",
    states: ["Arunachal Pradesh"],
    used_in: [
      "Hollowed bamboo internodes are used across Arunachal's tribal households to store, carry and informally measure out rice, water and apong/rice-beer, with the vessel itself — not a named unit — serving as the practical measure",
      "Household & Daily Life",
    ],
    references: [
      "No standardised metrological reference documented for this practice",
    ],
    tags: [
      "arunachal-pradesh",
      "traditional-units",
      "household",
      "volume",
      "bamboo-container",
      "apong",
      "tribal",
    ],
    created_at: "2024-01-01",
  },

  // ─── 5. Gold & Jewellery (2 units) ──────────────────────────────────────────
  {
    id: "arunachal-gold-1",
    slug: "bead-string-count-gold-arunachal",
    name_english: "(Bead-string count — no standard weight system)",
    name_sanskrit: "N/A — count-based, not a weight unit",
    local_names: [],
    name_hindi: "मनका-माला (अनौपचारिक)",
    category: "count",
    measurement_type: "Count (ornament unit, informal)",
    sector: "gold-jewellery",
    origin: "Arunachal Pradesh",
    modern_equivalent:
      "Valued by string-length, bead-count, material rarity and craftsmanship rather than by weight",
    conversion_formula: "No fixed hierarchy",
    meaning:
      "Across most Arunachali tribes, traditional wealth in personal ornament was carried in strings of beads (including prized old trade beads, coral and, among Monpa/Buddhist communities, turquoise) rather than in gold reckoned by a Tola-type weight scale",
    historical_period:
      "Customary/traditional practice, pre-dating and continuing alongside NEFA/state administration (undated origin)",
    region_applicable:
      "Eastern Himalayan hill tracts generally — Nyishi, Adi, Galo, Tagin, Mishmi and other tribal homelands",
    states: ["Arunachal Pradesh"],
    used_in: [
      "Across most Arunachali tribes, traditional wealth in personal ornament was carried in strings of beads (including prized old trade beads, coral and, among Monpa/Buddhist communities, turquoise) rather than in gold reckoned by a Tola-type weight scale",
      "Gold & Jewellery",
    ],
    references: [
      "https://www.insidene.com/importance-of-the-mithun-in-arunachal-pradesh/",
      "https://villagesquare.in/mithun-matters-arunachal-elders-ban-giving-native-animal-in-dowry/",
    ],
    tags: [
      "arunachal-pradesh",
      "traditional-units",
      "gold-jewellery",
      "bead-string",
      "ornament",
      "turquoise",
      "tribal",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "arunachal-gold-2",
    slug: "tola-post-contact-gold-arunachal",
    name_english: "Tola (post-contact bullion weight)",
    name_sanskrit: "तोला (Tolā)",
    local_names: [],
    name_hindi: "तोला",
    category: "weight",
    measurement_type: "Weight",
    sector: "gold-jewellery",
    origin: "Pan-Arunachal Pradesh",
    modern_equivalent: "~11.66 g",
    conversion_formula: "12 Masha = 1 Tola",
    meaning:
      "Used only in gold and silver bullion transactions with plains and Assamese/Tibetan-Bhutanese jewellers reached via post-1950s market integration — not a traditional Arunachali unit in its own right",
    historical_period:
      "British/Indian administration as the North-East Frontier Agency (NEFA), 1914 McMahon Line onward, formal statehood 1987",
    region_applicable: "Pan-Arunachal Pradesh generally",
    states: ["Arunachal Pradesh"],
    used_in: [
      "Used only in gold and silver bullion transactions with plains and Assamese/Tibetan-Bhutanese jewellers reached via post-1950s market integration — not a traditional Arunachali unit in its own right",
      "Gold & Jewellery",
    ],
    references: ["https://en.wikipedia.org/wiki/Tola_(unit)"],
    tags: [
      "arunachal-pradesh",
      "traditional-units",
      "gold-jewellery",
      "weight",
      "tola",
      "bullion",
    ],
    created_at: "2024-01-01",
  },

  // ─── 6. Seed & Crop (Agriculture) (3 units) ─────────────────────────────────
  {
    id: "arunachal-agri-1",
    slug: "basket-load-reckoning-agriculture-arunachal",
    name_english: "(Basket-load reckoning)",
    name_sanskrit:
      "N/A — vessel-based, no fixed named weight/volume unit documented",
    local_names: [],
    name_hindi: "टोकरी-भार (अनौपचारिक)",
    category: "volume",
    measurement_type: "Weight/Volume (informal)",
    sector: "agriculture",
    origin: "Arunachal Pradesh",
    modern_equivalent:
      "Determined by the size of the woven bamboo/cane carrying-basket in use",
    conversion_formula: "No standardised hierarchy",
    meaning:
      "Jhum (shifting-cultivation) harvests of rice, millet and maize, and Apatani wet-rice paddy, are traditionally carried and informally quantified basket-by-basket rather than against a fixed named weight unit like the plains states' Seer or Maund",
    historical_period:
      "Customary/traditional practice, pre-dating and continuing alongside NEFA/state administration (undated origin)",
    region_applicable:
      "Eastern Himalayan hill tracts generally — Nyishi, Adi, Galo, Tagin, Mishmi and other tribal homelands",
    states: ["Arunachal Pradesh"],
    used_in: [
      "Jhum (shifting-cultivation) harvests of rice, millet and maize, and Apatani wet-rice paddy, are traditionally carried and informally quantified basket-by-basket rather than against a fixed named weight unit like the plains states' Seer or Maund",
      "Seed & Crop (Agriculture)",
    ],
    references: [
      "https://www.indiawaterportal.org/agriculture/farm/lessons-ecology-apatani-tribe-ziro-valley",
      "http://jbr.rgu.ac.in/img/pdf/50%20to%2057%202nd.pdf",
    ],
    tags: [
      "arunachal-pradesh",
      "traditional-units",
      "agriculture",
      "seed-crop",
      "basket-load",
      "jhum",
      "harvest",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "arunachal-agri-2",
    slug: "aji-apatani-wet-rice-system-agriculture-arunachal",
    name_english: "Aji (Apatani wet rice cultivation system)",
    name_sanskrit: "N/A — a farming-system name, not a unit of quantity",
    local_names: [],
    name_hindi: "आजी (अपातानी प्रणाली)",
    category: "other",
    measurement_type: "System designation (not a unit)",
    sector: "agriculture",
    origin: "Arunachal Pradesh (Apatani)",
    modern_equivalent:
      "Not applicable — names the integrated paddy-cum-fish (Aji-ngilyi for the fish) cultivation method itself",
    conversion_formula: "Not applicable",
    meaning:
      "The Apatani tribe's centuries-old, UNESCO-recognised integrated paddy-cum-fish farming system in Ziro Valley — included here to record that its output is measured informally rather than by a codified metrological scale",
    historical_period:
      "Customary/traditional practice, pre-dating and continuing alongside NEFA/state administration (undated origin)",
    region_applicable:
      "Ziro Valley, Lower Subansiri district — Apatani tribal homeland",
    states: ["Arunachal Pradesh"],
    used_in: [
      "The Apatani tribe's centuries-old, UNESCO-recognised integrated paddy-cum-fish farming system in Ziro Valley — included here to record that its output is measured informally rather than by a codified metrological scale",
      "Seed & Crop (Agriculture)",
    ],
    references: [
      "https://www.indiawaterportal.org/agriculture/farm/lessons-ecology-apatani-tribe-ziro-valley",
      "http://jbr.rgu.ac.in/img/pdf/50%20to%2057%202nd.pdf",
    ],
    tags: [
      "arunachal-pradesh",
      "traditional-units",
      "agriculture",
      "seed-crop",
      "aji",
      "apatani",
      "ziro-valley",
      "wet-rice",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "arunachal-agri-3",
    slug: "ser-mon-post-contact-agriculture-arunachal",
    name_english: "Ser / Mon (Seer/Maund) — post-contact market unit",
    name_sanskrit: "सेर / मन",
    local_names: [],
    name_hindi: "सेर / मन",
    category: "weight",
    measurement_type: "Weight",
    sector: "agriculture",
    origin: "Pan-Arunachal Pradesh",
    modern_equivalent: "~0.93 kg Ser; 40 Ser = 1 Mon ≈ 37.3 kg",
    conversion_formula: "40 Ser = 1 Mon",
    meaning:
      "Used only where produce is sold into wider Assamese/plains markets via post-1950s roads, not as a traditional Arunachali in-village unit",
    historical_period:
      "British/Indian administration as the North-East Frontier Agency (NEFA), 1914 McMahon Line onward, formal statehood 1987",
    region_applicable: "Pan-Arunachal Pradesh generally",
    states: ["Arunachal Pradesh"],
    used_in: [
      "Used only where produce is sold into wider Assamese/plains markets via post-1950s roads, not as a traditional Arunachali in-village unit",
      "Seed & Crop (Agriculture)",
    ],
    references: ["https://grokipedia.com/page/Seer_(unit)"],
    tags: [
      "arunachal-pradesh",
      "traditional-units",
      "agriculture",
      "seed-crop",
      "seer",
      "maund",
      "market",
    ],
    created_at: "2024-01-01",
  },

  // ─── 7. Currency & Money (3 units) ──────────────────────────────────────────
  {
    id: "arunachal-curr-1",
    slug: "mithun-bos-frontalis-currency-arunachal",
    name_english: "Mithun (Bos frontalis)",
    name_sanskrit:
      "N/A — value/wealth unit functioning as a currency-equivalent, not a coined or weighed unit",
    local_names: [],
    name_hindi: "मिथुन",
    category: "currency",
    measurement_type: "Currency-equivalent (livestock-as-money)",
    sector: "currency-money",
    origin: "Arunachal Pradesh",
    modern_equivalent:
      "No fixed numeric value; described by tribal sources themselves as 'akin to gold'",
    conversion_formula:
      "The pre-eminent traditional store and medium of high-value exchange",
    meaning:
      "Used for bride-price, compensation in dispute settlement, ceremonial sacrifice, and as the clearest public marker of a household's wealth and status across most of Arunachal Pradesh's tribal communities",
    historical_period:
      "Customary/traditional practice, pre-dating and continuing alongside NEFA/state administration (undated origin)",
    region_applicable:
      "Eastern Himalayan hill tracts generally — Nyishi, Adi, Galo, Tagin, Mishmi and other tribal homelands",
    states: ["Arunachal Pradesh"],
    used_in: [
      "Used for bride-price, compensation in dispute settlement, ceremonial sacrifice, and as the clearest public marker of a household's wealth and status across most of Arunachal Pradesh's tribal communities",
      "Currency & Money",
    ],
    references: [
      "https://www.insidene.com/importance-of-the-mithun-in-arunachal-pradesh/",
      "https://villagesquare.in/mithun-matters-arunachal-elders-ban-giving-native-animal-in-dowry/",
    ],
    tags: [
      "arunachal-pradesh",
      "traditional-units",
      "currency-money",
      "mithun",
      "livestock-as-money",
      "tribal",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "arunachal-curr-2",
    slug: "tibetan-coin-ladder-skar-sho-tangka-srang-arunachal",
    name_english: "Skar → Sho → Tangka → Srang (Tibetan coin ladder)",
    name_sanskrit: "N/A (Tibetan currency chain)",
    local_names: ["སྐར (→ ཞོ) → ཏྲམ་ཀ → སྲང"],
    name_hindi: "स्कर (→ शो) → टंका → स्रांग",
    category: "currency",
    measurement_type: "Currency (full denomination ladder)",
    sector: "currency-money",
    origin: "Arunachal Pradesh (Monyul / Monpa)",
    modern_equivalent:
      "15 Skar = 1 Tangka (~1½ Sho); 10 Sho = 1 Srang (from 1909)",
    conversion_formula:
      "10 Skar = 1 Sho; 15 Skar (1½ Sho) = 1 Tangka; 10 Sho = 1 Srang",
    meaning:
      "The coined money system that reached the Monpa of Tawang through centuries-old trans-Himalayan trade with Tibet — co-existing with, but never displacing, barter and Mithun-based exchange further east and south",
    historical_period:
      "Monyul Buddhist period — Tawang Monastery founded 1680–81 CE, under Tibetan/Lhasa administration until 1951",
    region_applicable:
      "Tawang & West Kameng districts — Monpa Buddhist Monyul region, bordering Tibet and Bhutan",
    states: ["Arunachal Pradesh"],
    used_in: [
      "The coined money system that reached the Monpa of Tawang through centuries-old trans-Himalayan trade with Tibet — co-existing with, but never displacing, barter and Mithun-based exchange further east and south",
      "Currency & Money",
    ],
    references: [
      "https://en.wikipedia.org/wiki/Tibetan_tangka",
      "https://en.wikipedia.org/wiki/Tibetan_srang",
    ],
    tags: [
      "arunachal-pradesh",
      "traditional-units",
      "currency-money",
      "skar",
      "sho",
      "tangka",
      "srang",
      "tibetan",
      "monpa",
      "tawang",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "arunachal-curr-3",
    slug: "indian-rupee-post-1950s-arunachal",
    name_english: "Indian Rupee (post-1950s)",
    name_sanskrit: "N/A",
    local_names: [],
    name_hindi: "रुपया",
    category: "currency",
    measurement_type: "Currency",
    sector: "currency-money",
    origin: "Pan-Arunachal Pradesh",
    modern_equivalent: "Standard Indian Rupee",
    conversion_formula:
      "Superseded regional/barter economies as NEFA administration, roads and markets extended across the territory",
    meaning:
      "Became the state's standard currency following India's assertion of administrative control after 1951 and the extension of NEFA/Arunachal Pradesh governance",
    historical_period:
      "British/Indian administration as the North-East Frontier Agency (NEFA), 1914 McMahon Line onward, formal statehood 1987",
    region_applicable: "Pan-Arunachal Pradesh generally",
    states: ["Arunachal Pradesh"],
    used_in: [
      "Became the state's standard currency following India's assertion of administrative control after 1951 and the extension of NEFA/Arunachal Pradesh governance",
      "Currency & Money",
    ],
    references: [
      "https://en.wikipedia.org/wiki/North-East_Frontier_Agency",
    ],
    tags: [
      "arunachal-pradesh",
      "traditional-units",
      "currency-money",
      "rupee",
      "nefa",
      "modern-currency",
    ],
    created_at: "2024-01-01",
  },

  // ─── 8. Storage & Transportation (3 units) ──────────────────────────────────
  {
    id: "arunachal-stor-1",
    slug: "bamboo-granary-storage-arunachal",
    name_english: "(Bamboo granary — informal capacity)",
    name_sanskrit: "N/A — structure-based, no fixed named unit documented",
    local_names: [],
    name_hindi: "बांस भंडार (अनौपचारिक)",
    category: "volume",
    measurement_type: "Volume (utility, informal)",
    sector: "storage-transport",
    origin: "Arunachal Pradesh",
    modern_equivalent:
      "Capacity set by the size of the individual raised bamboo-and-thatch granary built by each household",
    conversion_formula: "No standardised hierarchy",
    meaning:
      "Raised bamboo granaries, built apart from the main house as a precaution against fire, are the traditional grain-storage structure across most Arunachali tribal villages",
    historical_period:
      "Customary/traditional practice, pre-dating and continuing alongside NEFA/state administration (undated origin)",
    region_applicable:
      "Eastern Himalayan hill tracts generally — Nyishi, Adi, Galo, Tagin, Mishmi and other tribal homelands",
    states: ["Arunachal Pradesh"],
    used_in: [
      "Raised bamboo granaries, built apart from the main house as a precaution against fire, are the traditional grain-storage structure across most Arunachali tribal villages",
      "Storage & Transportation",
    ],
    references: [
      "No standardised metrological reference documented for this practice",
    ],
    tags: [
      "arunachal-pradesh",
      "traditional-units",
      "storage-transport",
      "granary",
      "bamboo",
      "grain-storage",
      "tribal",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "arunachal-stor-2",
    slug: "porter-headload-reckoning-storage-arunachal",
    name_english: "(Porter/headload reckoning)",
    name_sanskrit: "N/A — body-based, no fixed named unit documented",
    local_names: [],
    name_hindi: "सिर भार (अनौपचारिक)",
    category: "weight",
    measurement_type: "Weight (informal, load-based)",
    sector: "storage-transport",
    origin: "Arunachal Pradesh",
    modern_equivalent:
      "One person's comfortable carrying load over mountain trail terrain",
    conversion_formula: "No standardised hierarchy",
    meaning:
      "Given Arunachal's absence of navigable rivers or cart roads through most of its mountainous terrain, goods were traditionally moved by human porterage along footpaths, with loads reckoned informally",
    historical_period:
      "Customary/traditional practice, pre-dating and continuing alongside NEFA/state administration (undated origin)",
    region_applicable:
      "Eastern Himalayan hill tracts generally — Nyishi, Adi, Galo, Tagin, Mishmi and other tribal homelands",
    states: ["Arunachal Pradesh"],
    used_in: [
      "Given Arunachal's absence of navigable rivers or cart roads through most of its mountainous terrain, goods were traditionally moved by human porterage along footpaths, with loads reckoned informally",
      "Storage & Transportation",
    ],
    references: [
      "No standardised metrological reference documented for this practice",
    ],
    tags: [
      "arunachal-pradesh",
      "traditional-units",
      "storage-transport",
      "porter",
      "headload",
      "mountain-transport",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "arunachal-stor-3",
    slug: "ser-mon-storage-transport-arunachal",
    name_english: "Ser / Mon (Seer/Maund) — post-contact market unit",
    name_sanskrit: "सेर / मन",
    local_names: [],
    name_hindi: "सेर / मन",
    category: "weight",
    measurement_type: "Weight",
    sector: "storage-transport",
    origin: "Pan-Arunachal Pradesh",
    modern_equivalent: "~0.93 kg Ser; 40 Ser = 1 Mon ≈ 37.3 kg",
    conversion_formula: "40 Ser = 1 Mon",
    meaning:
      "Used for goods once they reach roadhead markets and depots connected to the wider Assam/plains trading network, post-1950s",
    historical_period:
      "British/Indian administration as the North-East Frontier Agency (NEFA), 1914 McMahon Line onward, formal statehood 1987",
    region_applicable: "Pan-Arunachal Pradesh generally",
    states: ["Arunachal Pradesh"],
    used_in: [
      "Used for goods once they reach roadhead markets and depots connected to the wider Assam/plains trading network, post-1950s",
      "Storage & Transportation",
    ],
    references: ["https://grokipedia.com/page/Seer_(unit)"],
    tags: [
      "arunachal-pradesh",
      "traditional-units",
      "storage-transport",
      "seer",
      "maund",
      "market",
    ],
    created_at: "2024-01-01",
  },

  // ─── 9. Religious & Cultural (5 units) ──────────────────────────────────────
  {
    id: "arunachal-rel-1",
    slug: "losar-tibetan-lunar-new-year-arunachal",
    name_english: "Losar (Tibetan Lunar New Year)",
    name_sanskrit: "N/A (Tibetan Buddhist calendar term)",
    local_names: ["ལོ་གསར"],
    name_hindi: "लोसार",
    category: "time",
    measurement_type: "Calendar (lunar year marker)",
    sector: "religious-cultural",
    origin: "Arunachal Pradesh (Monyul / Monpa)",
    modern_equivalent:
      "Dated by the Tibetan lunar calendar; falls in February/March, varying year to year",
    conversion_formula:
      "The principal annual calendar marker of the Monpa Buddhist year",
    meaning:
      "The Tibetan Buddhist New Year, the most important festival observed at Tawang Monastery and across the Monpa Buddhist community",
    historical_period:
      "Monyul Buddhist period — Tawang Monastery founded 1680–81 CE, under Tibetan/Lhasa administration until 1951",
    region_applicable:
      "Tawang & West Kameng districts — Monpa Buddhist Monyul region, bordering Tibet and Bhutan",
    states: ["Arunachal Pradesh"],
    used_in: [
      "The Tibetan Buddhist New Year, the most important festival observed at Tawang Monastery and across the Monpa Buddhist community",
      "Religious & Cultural",
    ],
    references: [
      "https://www.borderlens.com/2023/01/19/the-making-of-tawang-monastery-and-the-monpas/",
      "https://en.wikipedia.org/wiki/Buddhism_in_Arunachal_Pradesh",
    ],
    tags: [
      "arunachal-pradesh",
      "traditional-units",
      "religious-cultural",
      "losar",
      "tibetan-calendar",
      "monpa",
      "tawang",
      "buddhist",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "arunachal-rel-2",
    slug: "torgya-religious-arunachal",
    name_english: "Torgya",
    name_sanskrit: "N/A (Tibetan Buddhist monastic festival term)",
    local_names: [],
    name_hindi: "तोरग्या",
    category: "time",
    measurement_type: "Calendar (monastic ritual marker)",
    sector: "religious-cultural",
    origin: "Arunachal Pradesh (Monyul / Monpa)",
    modern_equivalent:
      "Held annually at a fixed point in the Tibetan calendar, at Tawang Monastery",
    conversion_formula:
      "Dated within the Tibetan Buddhist ritual calendar, distinct from Losar",
    meaning:
      "An annual masked dance monastic festival performed at Tawang Monastery to ward off evil spirits for the coming year",
    historical_period:
      "Monyul Buddhist period — Tawang Monastery founded 1680–81 CE, under Tibetan/Lhasa administration until 1951",
    region_applicable:
      "Tawang & West Kameng districts — Monpa Buddhist Monyul region, bordering Tibet and Bhutan",
    states: ["Arunachal Pradesh"],
    used_in: [
      "An annual masked dance monastic festival performed at Tawang Monastery to ward off evil spirits for the coming year",
      "Religious & Cultural",
    ],
    references: [
      "https://www.borderlens.com/2023/01/19/the-making-of-tawang-monastery-and-the-monpas/",
      "https://en.wikipedia.org/wiki/Buddhism_in_Arunachal_Pradesh",
    ],
    tags: [
      "arunachal-pradesh",
      "traditional-units",
      "religious-cultural",
      "torgya",
      "tawang-monastery",
      "monpa",
      "buddhist",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "arunachal-rel-3",
    slug: "saga-dawa-dukpa-tse-shi-lhabab-duechen-arunachal",
    name_english: "Saga Dawa / Dukpa Tse Shi / Lhabab Duechen",
    name_sanskrit: "N/A (Tibetan Buddhist calendar terms)",
    local_names: [],
    name_hindi: "सागा दावा / द्रुकपा त्से शी / ल्हाबाब दुएचेन",
    category: "time",
    measurement_type: "Calendar (Buddhist ritual markers)",
    sector: "religious-cultural",
    origin: "Arunachal Pradesh (Monyul / Monpa)",
    modern_equivalent:
      "Each dated to a specific day in the Tibetan lunar calendar, commemorating events in the Buddha's life",
    conversion_formula:
      "Distinct fixed points across the Tibetan Buddhist ritual year",
    meaning:
      "Major Buddhist observances marked at Tawang Monastery and by Monpa communities, commemorating the Buddha's birth/enlightenment/parinirvana (Saga Dawa), his first sermon (Dukpa Tse Shi) and his descent from the Tushita heaven (Lhabab Duechen)",
    historical_period:
      "Monyul Buddhist period — Tawang Monastery founded 1680–81 CE, under Tibetan/Lhasa administration until 1951",
    region_applicable:
      "Tawang & West Kameng districts — Monpa Buddhist Monyul region, bordering Tibet and Bhutan",
    states: ["Arunachal Pradesh"],
    used_in: [
      "Major Buddhist observances marked at Tawang Monastery and by Monpa communities, commemorating the Buddha's birth/enlightenment/parinirvana (Saga Dawa), his first sermon (Dukpa Tse Shi) and his descent from the Tushita heaven (Lhabab Duechen)",
      "Religious & Cultural",
    ],
    references: [
      "https://www.borderlens.com/2023/01/19/the-making-of-tawang-monastery-and-the-monpas/",
      "https://en.wikipedia.org/wiki/Buddhism_in_Arunachal_Pradesh",
    ],
    tags: [
      "arunachal-pradesh",
      "traditional-units",
      "religious-cultural",
      "saga-dawa",
      "dukpa-tse-shi",
      "lhabab-duechen",
      "tibetan-calendar",
      "buddhist",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "arunachal-rel-4",
    slug: "seasonal-agricultural-festival-markers-arunachal",
    name_english:
      "Seasonal/agricultural festival markers (Mopin, Solung, Nyokum, Reh, Si-Donyi)",
    name_sanskrit:
      "N/A — tribal animist calendar markers, not a subdivided numeric time unit",
    local_names: [],
    name_hindi: "मोपिन / सोलुंग / न्योकुम / रेह / सी-दोन्यी",
    category: "time",
    measurement_type: "Calendar (agricultural/seasonal marker)",
    sector: "religious-cultural",
    origin: "Arunachal Pradesh",
    modern_equivalent:
      "Each tied to a specific point in the agricultural cycle (sowing, harvest, post-harvest)",
    conversion_formula:
      "Distinct festivals across different tribes, not forming a single shared numeric hierarchy",
    meaning:
      "The major agricultural festivals of Arunachal's largest tribes — Mopin (Galo), Solung (Adi), Nyokum (Nyishi), Reh (Idu Mishmi) and Si Donyi (honouring the Sun-Moon deities of the indigenous Donyi-Polo faith) — mark the farming year's key transitions rather than subdividing time into fixed numeric units",
    historical_period:
      "Indigenous animist (Donyi-Polo) tradition, pre-dating recorded history, still practised today",
    region_applicable:
      "Eastern Himalayan hill tracts generally — Nyishi, Adi, Galo, Tagin, Mishmi and other tribal homelands",
    states: ["Arunachal Pradesh"],
    used_in: [
      "The major agricultural festivals of Arunachal's largest tribes — Mopin (Galo), Solung (Adi), Nyokum (Nyishi), Reh (Idu Mishmi) and Si Donyi (honouring the Sun-Moon deities of the indigenous Donyi-Polo faith) — mark the farming year's key transitions rather than subdividing time into fixed numeric units",
      "Religious & Cultural",
    ],
    references: ["https://en.wikipedia.org/wiki/Donyi-Polo"],
    tags: [
      "arunachal-pradesh",
      "traditional-units",
      "religious-cultural",
      "festivals",
      "donyi-polo",
      "mopin",
      "solung",
      "nyokum",
      "tribal",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "arunachal-rel-5",
    slug: "days-walk-pilgrimage-travel-reckoning-arunachal",
    name_english: "Day's-walk pilgrimage/travel reckoning",
    name_sanskrit:
      "N/A — informal, terrain-based measurement, no fixed named unit documented",
    local_names: [],
    name_hindi: "यात्रा-दिवस (अनौपचारिक)",
    category: "length",
    measurement_type: "Distance (informal, time-based)",
    sector: "religious-cultural",
    origin: "Arunachal Pradesh",
    modern_equivalent: "Distance to a sacred site expressed in days' walk",
    conversion_formula: "No standardised hierarchy",
    meaning:
      "Pilgrimage and ritual travel distance was traditionally reckoned by the number of days the journey took on foot, rather than by a fixed-length unit such as the Krosha or Yojana used in the Hindu Gangetic-plains pilgrimage tradition",
    historical_period:
      "Customary/traditional practice, pre-dating and continuing alongside NEFA/state administration (undated origin)",
    region_applicable:
      "Eastern Himalayan hill tracts generally — Nyishi, Adi, Galo, Tagin, Mishmi and other tribal homelands",
    states: ["Arunachal Pradesh"],
    used_in: [
      "Pilgrimage and ritual travel distance was traditionally reckoned by the number of days the journey took on foot, rather than by a fixed-length unit such as the Krosha or Yojana used in the Hindu Gangetic-plains pilgrimage tradition",
      "Religious & Cultural",
    ],
    references: [
      "No standardised metrological reference documented for this practice",
    ],
    tags: [
      "arunachal-pradesh",
      "traditional-units",
      "religious-cultural",
      "pilgrimage",
      "days-walk",
      "sacred-travel",
    ],
    created_at: "2024-01-01",
  },

  // ─── 10. Trade & Commerce (6 units) ─────────────────────────────────────────
  {
    id: "arunachal-trade-1",
    slug: "produce-for-produce-barter-trade-arunachal",
    name_english: "(Produce-for-produce barter)",
    name_sanskrit: "N/A — no named unit; a practice, not a fixed unit",
    local_names: [],
    name_hindi: "वस्तु-विनिमय",
    category: "other",
    measurement_type: "Exchange system (non-monetary)",
    sector: "trade-commerce",
    origin: "Arunachal Pradesh",
    modern_equivalent:
      "Not applicable — reckoned load-for-load or animal-for-produce, not against a fixed numeric scale",
    conversion_formula: "No fixed hierarchy",
    meaning:
      "The primary traditional exchange system among most Arunachali hill tribes — Monpa Brokpa (yak-herding) pastoralists traditionally traded butter, cheese (chhurpi) and yak-hair/tail products directly for the grain and chili grown by neighbouring Umpa (settled agriculturalist) Monpa villages, without an intervening coin",
    historical_period:
      "Customary/traditional practice, pre-dating and continuing alongside NEFA/state administration (undated origin)",
    region_applicable:
      "Tawang & West Kameng districts — Monpa Buddhist Monyul region, bordering Tibet and Bhutan",
    states: ["Arunachal Pradesh"],
    used_in: [
      "The primary traditional exchange system among most Arunachali hill tribes — Monpa Brokpa (yak-herding) pastoralists traditionally traded butter, cheese (chhurpi) and yak-hair/tail products directly for the grain and chili grown by neighbouring Umpa (settled agriculturalist) Monpa villages, without an intervening coin",
      "Trade & Commerce",
    ],
    references: [
      "https://centreforpastoralism.org/contextualising-monpa-pastoralism-in-arunachal-pradesh/",
      "https://dl.dbuniversity.ac.in/bitstream/123456789/8/8/08_chapter%204.pdf",
    ],
    tags: [
      "arunachal-pradesh",
      "traditional-units",
      "trade-commerce",
      "barter",
      "monpa",
      "pastoralism",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "arunachal-trade-2",
    slug: "skar-trade-arunachal",
    name_english: "Skar",
    name_sanskrit: "N/A (Tibetan currency term)",
    local_names: ["སྐར"],
    name_hindi: "स्कर",
    category: "currency",
    measurement_type: "Currency",
    sector: "trade-commerce",
    origin: "Arunachal Pradesh (Monyul / Monpa)",
    modern_equivalent: "Smallest Tibetan Tangka-system coin",
    conversion_formula: "15 Skar = 1 Tangka (also expressed as 1½ Sho)",
    meaning:
      "Smallest-denomination currency circulating in trans-Himalayan trade between the Monpa of Tawang and Tibet/Bhutan before 1951",
    historical_period:
      "Monyul Buddhist period — Tawang Monastery founded 1680–81 CE, under Tibetan/Lhasa administration until 1951",
    region_applicable:
      "Tawang & West Kameng districts — Monpa Buddhist Monyul region, bordering Tibet and Bhutan",
    states: ["Arunachal Pradesh"],
    used_in: [
      "Smallest-denomination currency circulating in trans-Himalayan trade between the Monpa of Tawang and Tibet/Bhutan before 1951",
      "Trade & Commerce",
    ],
    references: [
      "https://en.wikipedia.org/wiki/Tibetan_tangka",
      "https://en.wikipedia.org/wiki/Tibetan_srang",
    ],
    tags: [
      "arunachal-pradesh",
      "traditional-units",
      "trade-commerce",
      "currency",
      "skar",
      "tibetan",
      "tawang",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "arunachal-trade-3",
    slug: "sho-trade-arunachal",
    name_english: "Sho",
    name_sanskrit: "N/A (Tibetan currency term)",
    local_names: ["ཞོ"],
    name_hindi: "शो",
    category: "currency",
    measurement_type: "Currency",
    sector: "trade-commerce",
    origin: "Arunachal Pradesh (Monyul / Monpa)",
    modern_equivalent: "—",
    conversion_formula: "10 Skar = 1 Sho; 1½ Sho = 1 Tangka",
    meaning:
      "Intermediate Tibetan trade coin denomination used in the Monpa-Tibet-Bhutan caravan trade",
    historical_period:
      "Monyul Buddhist period — Tawang Monastery founded 1680–81 CE, under Tibetan/Lhasa administration until 1951",
    region_applicable:
      "Tawang & West Kameng districts — Monpa Buddhist Monyul region, bordering Tibet and Bhutan",
    states: ["Arunachal Pradesh"],
    used_in: [
      "Intermediate Tibetan trade coin denomination used in the Monpa-Tibet-Bhutan caravan trade",
      "Trade & Commerce",
    ],
    references: [
      "https://en.wikipedia.org/wiki/Tibetan_tangka",
      "https://en.wikipedia.org/wiki/Tibetan_srang",
    ],
    tags: [
      "arunachal-pradesh",
      "traditional-units",
      "trade-commerce",
      "currency",
      "sho",
      "tibetan",
      "tawang",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "arunachal-trade-4",
    slug: "tangka-tam-trade-arunachal",
    name_english: "Tangka (Tam)",
    name_sanskrit: "N/A (Tibetan currency term)",
    local_names: ["ཏཾ"],
    name_hindi: "टंका",
    category: "currency",
    measurement_type: "Currency",
    sector: "trade-commerce",
    origin: "Arunachal Pradesh (Monyul / Monpa)",
    modern_equivalent: "Tibetan silver coin, minted from 1791 onward",
    conversion_formula: "15 Skar = 1 Tangka",
    meaning:
      "The standard silver coin of Tibet that circulated through the ancient caravan trade route linking the Tibetan plateau to the Assam plains via Tawang, used by Monpa traders",
    historical_period:
      "Monyul Buddhist period — Tawang Monastery founded 1680–81 CE, under Tibetan/Lhasa administration until 1951",
    region_applicable:
      "Tawang & West Kameng districts — Monpa Buddhist Monyul region, bordering Tibet and Bhutan",
    states: ["Arunachal Pradesh"],
    used_in: [
      "The standard silver coin of Tibet that circulated through the ancient caravan trade route linking the Tibetan plateau to the Assam plains via Tawang, used by Monpa traders",
      "Trade & Commerce",
    ],
    references: [
      "https://en.wikipedia.org/wiki/Tibetan_tangka",
      "https://en.wikipedia.org/wiki/Tibetan_srang",
    ],
    tags: [
      "arunachal-pradesh",
      "traditional-units",
      "trade-commerce",
      "currency",
      "tangka",
      "silver",
      "tawang",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "arunachal-trade-5",
    slug: "srang-trade-arunachal",
    name_english: "Srang",
    name_sanskrit: "N/A (Tibetan currency term)",
    local_names: ["སྲང"],
    name_hindi: "स्रांग",
    category: "currency",
    measurement_type: "Currency",
    sector: "trade-commerce",
    origin: "Arunachal Pradesh (Monyul / Monpa)",
    modern_equivalent: "—",
    conversion_formula:
      "10 Sho = 1 Srang (introduced 1909, circulated alongside the Tangka)",
    meaning:
      "Later, higher-value Tibetan currency unit used in the final decades of trans-Himalayan trade through Tawang before 1951",
    historical_period:
      "Early 20th century (from 1909) until the 1951 integration of Tawang into India",
    region_applicable:
      "Tawang & West Kameng districts — Monpa Buddhist Monyul region, bordering Tibet and Bhutan",
    states: ["Arunachal Pradesh"],
    used_in: [
      "Later, higher-value Tibetan currency unit used in the final decades of trans-Himalayan trade through Tawang before 1951",
      "Trade & Commerce",
    ],
    references: [
      "https://en.wikipedia.org/wiki/Tibetan_tangka",
      "https://en.wikipedia.org/wiki/Tibetan_srang",
    ],
    tags: [
      "arunachal-pradesh",
      "traditional-units",
      "trade-commerce",
      "currency",
      "srang",
      "tibetan",
      "tawang",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "arunachal-trade-6",
    slug: "mithun-bos-frontalis-trade-arunachal",
    name_english: "Mithun (Bos frontalis)",
    name_sanskrit:
      "N/A — a living animal functioning as a store of value, not a coined/weighed unit",
    local_names: [],
    name_hindi: "मिथुन",
    category: "other",
    measurement_type: "Value/wealth unit (livestock-as-currency)",
    sector: "trade-commerce",
    origin: "Arunachal Pradesh",
    modern_equivalent:
      "No fixed numeric value — individual animals are valued by size, health and pedigree",
    conversion_formula:
      "The highest tier of traditional value, above any coined currency",
    meaning:
      "Described by tribal communities themselves as 'akin to gold' — the medium of the highest-value barter transactions, bride-price payment, and the standard means of settling major disputes and compensation claims across most of Arunachal Pradesh's tribes",
    historical_period:
      "Customary/traditional practice, pre-dating and continuing alongside NEFA/state administration (undated origin)",
    region_applicable:
      "Eastern Himalayan hill tracts generally — Nyishi, Adi, Galo, Tagin, Mishmi and other tribal homelands",
    states: ["Arunachal Pradesh"],
    used_in: [
      "Described by tribal communities themselves as 'akin to gold' — the medium of the highest-value barter transactions, bride-price payment, and the standard means of settling major disputes and compensation claims across most of Arunachal Pradesh's tribes",
      "Trade & Commerce",
    ],
    references: [
      "https://www.insidene.com/importance-of-the-mithun-in-arunachal-pradesh/",
      "https://villagesquare.in/mithun-matters-arunachal-elders-ban-giving-native-animal-in-dowry/",
    ],
    tags: [
      "arunachal-pradesh",
      "traditional-units",
      "trade-commerce",
      "wealth",
      "mithun",
      "livestock",
      "tribal",
    ],
    created_at: "2024-01-01",
  },

  // ─── 11. Textile & Handloom (3 units) ────────────────────────────────────────
  {
    id: "arunachal-textile-1",
    slug: "handspan-forearm-length-textile-arunachal",
    name_english: "(Handspan/forearm-length reckoning)",
    name_sanskrit:
      "N/A — informal, gesture-based measurement, no fixed named unit documented",
    local_names: [],
    name_hindi: "बित्ता/हाथ (अनौपचारिक)",
    category: "length",
    measurement_type: "Length (informal)",
    sector: "textile-handloom",
    origin: "Arunachal Pradesh",
    modern_equivalent:
      "Approximated by the weaver's own hand-span or forearm length, varying person to person",
    conversion_formula: "No standardised hierarchy",
    meaning:
      "Arunachal's tribal back-strap loom weavers (notably Adi, Apatani, Galo and Tagin women, weaving cotton and eri-silk into gale/gyale shawls and jackets) traditionally set loom width and cloth length by direct bodily reference rather than a codified, named unit-of-length system",
    historical_period:
      "Customary/traditional practice, pre-dating and continuing alongside NEFA/state administration (undated origin)",
    region_applicable:
      "Eastern Himalayan hill tracts generally — Nyishi, Adi, Galo, Tagin, Mishmi and other tribal homelands",
    states: ["Arunachal Pradesh"],
    used_in: [
      "Arunachal's tribal back-strap loom weavers (notably Adi, Apatani, Galo and Tagin women, weaving cotton and eri-silk into gale/gyale shawls and jackets) traditionally set loom width and cloth length by direct bodily reference rather than a codified, named unit-of-length system",
      "Textile & Handloom",
    ],
    references: [
      "No standardised metrological reference documented for this practice",
    ],
    tags: [
      "arunachal-pradesh",
      "traditional-units",
      "textile-handloom",
      "backstrap-loom",
      "weaving",
      "tribal",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "arunachal-textile-2",
    slug: "eri-silk-cocoon-count-textile-arunachal",
    name_english: "Eri silk cocoon count / raw-fibre bundle",
    name_sanskrit:
      "N/A — informal count/bundle, no fixed weight unit hierarchy documented",
    local_names: [],
    name_hindi: "एरी रेशम बंडल",
    category: "count",
    measurement_type: "Count/Bundle (informal)",
    sector: "textile-handloom",
    origin: "Arunachal Pradesh",
    modern_equivalent:
      "Reckoned by cocoon count or bundle rather than a fixed weight denomination",
    conversion_formula: "No standardised hierarchy",
    meaning:
      "Eri silk (from the castor-feeding Samia ricini moth) is reared and traded across Arunachal and neighbouring Assam; unlike Assam's Muga silk trade, no distinctly named Arunachali bundling/weight unit for eri fibre is documented",
    historical_period:
      "Customary/traditional practice, pre-dating and continuing alongside NEFA/state administration (undated origin)",
    region_applicable:
      "Eastern Himalayan hill tracts generally — Nyishi, Adi, Galo, Tagin, Mishmi and other tribal homelands",
    states: ["Arunachal Pradesh"],
    used_in: [
      "Eri silk (from the castor-feeding Samia ricini moth) is reared and traded across Arunachal and neighbouring Assam; unlike Assam's Muga silk trade, no distinctly named Arunachali bundling/weight unit for eri fibre is documented",
      "Textile & Handloom",
    ],
    references: ["https://en.wikipedia.org/wiki/Eri_silk"],
    tags: [
      "arunachal-pradesh",
      "traditional-units",
      "textile-handloom",
      "eri-silk",
      "silk",
      "cocoon",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "arunachal-textile-3",
    slug: "dengo-woven-cotton-bag-textile-arunachal",
    name_english: "Dengo (woven cotton bag)",
    name_sanskrit: "N/A (Monpa vernacular craft-item term)",
    local_names: [],
    name_hindi: "डेंगो",
    category: "count",
    measurement_type: "Count (trade-item unit)",
    sector: "textile-handloom",
    origin: "Arunachal Pradesh (Monyul / Monpa)",
    modern_equivalent: "One woven bag, size not standardised",
    conversion_formula:
      "Traded individually, alongside Tamku (indigenous tobacco leaf)",
    meaning:
      "A Monpa-woven, colourfully patterned cotton bag carried as a standard trade item — along with tobacco leaf, deer-skin and cloth — on Monpa trading expeditions into Bhutan via the Chhingi-Chandury-Chempela route",
    historical_period:
      "Customary/traditional practice, pre-dating and continuing alongside NEFA/state administration (undated origin)",
    region_applicable:
      "Tawang & West Kameng districts — Monpa Buddhist Monyul region, bordering Tibet and Bhutan",
    states: ["Arunachal Pradesh"],
    used_in: [
      "A Monpa-woven, colourfully patterned cotton bag carried as a standard trade item — along with tobacco leaf, deer-skin and cloth — on Monpa trading expeditions into Bhutan via the Chhingi-Chandury-Chempela route",
      "Textile & Handloom",
    ],
    references: [
      "https://centreforpastoralism.org/contextualising-monpa-pastoralism-in-arunachal-pradesh/",
      "https://dl.dbuniversity.ac.in/bitstream/123456789/8/8/08_chapter%204.pdf",
    ],
    tags: [
      "arunachal-pradesh",
      "traditional-units",
      "textile-handloom",
      "dengo",
      "cotton-bag",
      "monpa",
    ],
    created_at: "2024-01-01",
  },

  // ─── 12. Medicine (Ayurveda) (2 units) ───────────────────────────────────────
  {
    id: "arunachal-med-1",
    slug: "handful-pinch-herbal-medicine-arunachal",
    name_english: "(Handful/pinch of herbal preparation)",
    name_sanskrit:
      "N/A — no codified weight dosage system documented for Arunachal's indigenous healing traditions",
    local_names: [],
    name_hindi: "मुट्ठी/चुटकी (अनौपचारिक)",
    category: "volume",
    measurement_type: "Volume (informal)",
    sector: "medicine",
    origin: "Arunachal Pradesh",
    modern_equivalent: "Approximated by hand — no fixed weight scale",
    conversion_formula: "No standardised hierarchy",
    meaning:
      "Arunachal's tribal communities traditionally relied on animist/shamanic healers (e.g. the Nyibu among Nyishi and Adi communities) and household herbal knowledge rather than a codified, Sanskrit-derived Ayurvedic weight-and-dosage system — this sector is therefore left largely unpopulated rather than importing a system not historically practised here",
    historical_period:
      "Customary/traditional practice, pre-dating and continuing alongside NEFA/state administration (undated origin)",
    region_applicable: "Pan-Arunachal Pradesh generally",
    states: ["Arunachal Pradesh"],
    used_in: [
      "Arunachal's tribal communities traditionally relied on animist/shamanic healers (e.g. the Nyibu among Nyishi and Adi communities) and household herbal knowledge rather than a codified, Sanskrit-derived Ayurvedic weight-and-dosage system — this sector is therefore left largely unpopulated rather than importing a system not historically practised here",
      "Medicine (Ayurveda)",
    ],
    references: [
      "No standardised metrological reference documented for this tradition",
    ],
    tags: [
      "arunachal-pradesh",
      "traditional-units",
      "medicine",
      "herbal",
      "healing",
      "tribal",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "arunachal-med-2",
    slug: "sowa-rigpa-dosage-practice-medicine-arunachal",
    name_english: "Sowa Rigpa dosage practice (Monpa/Tibetan medicine)",
    name_sanskrit:
      "N/A — Tibetan medical tradition, distinct from Sanskritic Ayurveda",
    local_names: [],
    name_hindi: "सोवा रिग्पा",
    category: "weight",
    measurement_type:
      "Weight/Volume (not independently confirmed for Arunachal practice)",
    sector: "medicine",
    origin: "Arunachal Pradesh (Monyul / Monpa)",
    modern_equivalent: "Not independently verified for this workbook",
    conversion_formula: "Not independently verified for this workbook",
    meaning:
      "The Monpa of Tawang, as practising Tibetan Buddhists, have historical access to the Sowa Rigpa (Tibetan medicine) tradition, which uses its own weight-based pharmacological system — a Tawang-specific documented account was not located, so this entry is flagged rather than filled in with an assumed figure",
    historical_period:
      "Monyul Buddhist period — Tawang Monastery founded 1680–81 CE, under Tibetan/Lhasa administration until 1951",
    region_applicable:
      "Tawang & West Kameng districts — Monpa Buddhist Monyul region, bordering Tibet and Bhutan",
    states: ["Arunachal Pradesh"],
    used_in: [
      "The Monpa of Tawang, as practising Tibetan Buddhists, have historical access to the Sowa Rigpa (Tibetan medicine) tradition, which uses its own weight-based pharmacological system — a Tawang-specific documented account was not located, so this entry is flagged rather than filled in with an assumed figure",
      "Medicine (Ayurveda)",
    ],
    references: [
      "Flagged for further verification — not confirmed by an accessible source at time of writing",
    ],
    tags: [
      "arunachal-pradesh",
      "traditional-units",
      "medicine",
      "sowa-rigpa",
      "tibetan-medicine",
      "monpa",
      "tawang",
    ],
    created_at: "2024-01-01",
  },

  // ─── 13. Construction & Architecture (2 units) ───────────────────────────────
  {
    id: "arunachal-arch-1",
    slug: "bamboo-pole-length-architecture-arunachal",
    name_english: "(Bamboo-pole length reckoning)",
    name_sanskrit:
      "N/A — informal, material-based measurement, no fixed named unit documented",
    local_names: [],
    name_hindi: "बांस-डंडा (अनौपचारिक)",
    category: "length",
    measurement_type: "Length (informal)",
    sector: "architecture",
    origin: "Arunachal Pradesh",
    modern_equivalent:
      "Set by the length of a standard-cut bamboo pole, which varies by species and use",
    conversion_formula: "No standardised hierarchy",
    meaning:
      "Arunachal's traditional stilt-raised bamboo-and-timber longhouses (such as the Adi 'Ekum/Ike' and Apatani houses of Ziro) are built to proportions set by the material itself and the builder's own body-reference measurements, rather than a codified Angula-Hasta-Danda unit chain",
    historical_period:
      "Customary/traditional practice, pre-dating and continuing alongside NEFA/state administration (undated origin)",
    region_applicable:
      "Eastern Himalayan hill tracts generally — Nyishi, Adi, Galo, Tagin, Mishmi and other tribal homelands",
    states: ["Arunachal Pradesh"],
    used_in: [
      "Arunachal's traditional stilt-raised bamboo-and-timber longhouses (such as the Adi 'Ekum/Ike' and Apatani houses of Ziro) are built to proportions set by the material itself and the builder's own body-reference measurements, rather than a codified Angula-Hasta-Danda unit chain",
      "Construction & Architecture",
    ],
    references: [
      "No standardised metrological reference documented for this practice",
    ],
    tags: [
      "arunachal-pradesh",
      "traditional-units",
      "architecture",
      "bamboo",
      "longhouse",
      "tribal",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "arunachal-arch-2",
    slug: "bitta-handspan-architecture-arunachal",
    name_english: "Bitta (handspan)",
    name_sanskrit: "वितस्ति (Vitasti)",
    local_names: [],
    name_hindi: "बित्ता",
    category: "length",
    measurement_type: "Length (informal)",
    sector: "architecture",
    origin: "Pan-Arunachal Pradesh",
    modern_equivalent: "~20–23 cm",
    conversion_formula: "Informal, body-based reference unit",
    meaning:
      "General-purpose informal spanning measurement, shared with the wider North Indian vernacular vocabulary via post-1950s administrative and market contact rather than a distinctly Arunachali term",
    historical_period:
      "British/Indian administration as the North-East Frontier Agency (NEFA), 1914 McMahon Line onward, formal statehood 1987",
    region_applicable: "Pan-Arunachal Pradesh generally",
    states: ["Arunachal Pradesh"],
    used_in: [
      "General-purpose informal spanning measurement, shared with the wider North Indian vernacular vocabulary via post-1950s administrative and market contact rather than a distinctly Arunachali term",
      "Construction & Architecture",
    ],
    references: [
      "https://en.wikipedia.org/wiki/Indian_units_of_measure",
    ],
    tags: [
      "arunachal-pradesh",
      "traditional-units",
      "architecture",
      "handspan",
      "bitta",
      "vitasti",
    ],
    created_at: "2024-01-01",
  },
];
