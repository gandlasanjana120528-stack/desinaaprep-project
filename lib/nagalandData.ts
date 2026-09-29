import { Measurement } from "@/types";

export const NAGALAND_MEASUREMENTS: Measurement[] = [
  // ─── 1. Transportation & Distance (2 units) ─────────────────────────────────
  {
    id: "nagaland-trans-1",
    slug: "days-walk-hill-reckoning-distance-nagaland",
    name_english: "(Day's-walk hill reckoning)",
    name_sanskrit:
      "N/A — informal, terrain-based measurement, no fixed named unit documented",
    local_names: [],
    name_hindi: "दिन-भर की यात्रा (अनौपचारिक)",
    category: "length",
    measurement_type: "Distance (informal, time-based)",
    sector: "transportation-distance",
    origin: "Pan-Nagaland / Naga Hills generally",
    modern_equivalent:
      "Distance expressed as the number of days' walk required through hill terrain",
    conversion_formula: "No standardised hierarchy",
    meaning:
      "In Nagaland's steep, forested hill terrain, travel between the traditionally independent, often mutually hostile Naga villages was reckoned by days' walk, the same practice documented across the wider Northeast Indian hill tracts",
    historical_period:
      "Customary/traditional practice of Nagaland's 16+ Naga tribes, pre-dating and continuing alongside British and post-1963 state administration",
    region_applicable: "Pan-Nagaland / Naga Hills generally",
    states: ["Nagaland"],
    used_in: [
      "In Nagaland's steep, forested hill terrain, travel between the traditionally independent, often mutually hostile Naga villages was reckoned by days' walk, the same practice documented across the wider Northeast Indian hill tracts",
      "Transportation & Distance",
    ],
    references: [
      "No standardised metrological reference documented for this practice",
    ],
    tags: [
      "nagaland",
      "traditional-units",
      "transportation-distance",
      "days-walk",
      "hill-terrain",
      "inter-village-travel",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "nagaland-trans-2",
    slug: "naga-khat-trade-route-reckoning-distance-nagaland",
    name_english: "Naga khat trade-route reckoning",
    name_sanskrit:
      "N/A — specific foothill market locations, not a generalisable distance unit",
    local_names: ["Naga khat"],
    name_hindi: "नागा खट मार्ग",
    category: "length",
    measurement_type: "Distance / Route (route-specific)",
    sector: "transportation-distance",
    origin: "Pan-Nagaland / Naga Hills generally",
    modern_equivalent:
      "Distance to the nearest revenue-free foothill market, not a measured figure",
    conversion_formula: "Not applicable — route/location-specific",
    meaning:
      "Trade distance between Naga hill villages and the Assam plains was conventionally organised around known duar (pass) market locations rather than a measured distance figure",
    historical_period:
      "Naga Hills–Ahom contact period (1228–1826 CE), conducted through tribute, refuge and barter rather than conquest",
    region_applicable: "Pan-Nagaland / Naga Hills generally",
    states: ["Nagaland"],
    used_in: [
      "Trade distance between Naga hill villages and the Assam plains was conventionally organised around known duar (pass) market locations rather than a measured distance figure",
      "Transportation & Distance",
    ],
    references: [
      "https://chalohoppo.com/a-brief-history-of-nagaland/",
    ],
    tags: [
      "nagaland",
      "traditional-units",
      "transportation-distance",
      "naga-khat",
      "duar",
      "trade-route",
      "ahom-contact",
    ],
    created_at: "2024-01-01",
  },

  // ─── 2. Land Measurement (3 units) ──────────────────────────────────────────
  {
    id: "nagaland-land-1",
    slug: "clan-village-community-land-right-land-nagaland",
    name_english: "(Clan/village community land right)",
    name_sanskrit: "N/A — a tenure classification, not a unit of area",
    local_names: [],
    name_hindi: "समुदाय भूमि अधिकार",
    category: "area",
    measurement_type: "Area (customary tenure, not a fixed unit)",
    sector: "land-measurement",
    origin: "Pan-Nagaland / Naga Hills generally",
    modern_equivalent:
      "Not quantified in a standard area unit — reckoned by named plot, clan and continuous use",
    conversion_formula: "No fixed hierarchy",
    meaning:
      "Naga land was, and largely still is, held under village or clan community ownership administered by clan-based councils (notably among the Angami, who historically had no hereditary chiefs) rather than measured against a standardised area unit — a genuinely distinct land philosophy from the Bigha-Katha systems of the Gangetic plains",
    historical_period:
      "Customary/traditional practice of Nagaland's 16+ Naga tribes, pre-dating and continuing alongside British and post-1963 state administration",
    region_applicable: "Pan-Nagaland / Naga Hills generally",
    states: ["Nagaland"],
    used_in: [
      "Naga land was, and largely still is, held under village or clan community ownership administered by clan-based councils (notably among the Angami, who historically had no hereditary chiefs) rather than measured against a standardised area unit — a genuinely distinct land philosophy from the Bigha-Katha systems of the Gangetic plains",
      "Land Measurement",
    ],
    references: [
      "https://grokipedia.com/page/Angami_Naga",
    ],
    tags: [
      "nagaland",
      "traditional-units",
      "land-measurement",
      "clan-land",
      "community-land",
      "customary-tenure",
      "angami",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "nagaland-land-2",
    slug: "terrace-plot-reckoning-wet-rice-land-nagaland",
    name_english: "(Terrace plot reckoning — wet rice cultivation)",
    name_sanskrit:
      "N/A — a plot classification defined by terrain and inherited maintenance-right, not a unit of area",
    local_names: [],
    name_hindi: "सीढ़ीदार खेत (अनौपचारिक)",
    category: "area",
    measurement_type: "Area (land-use classification, not a fixed unit)",
    sector: "land-measurement",
    origin:
      "Kohima district — Angami and Chakhesang Naga homeland (including Khonoma)",
    modern_equivalent:
      "Each terrace individually sized to its stretch of hillside",
    conversion_formula:
      "Not applicable — a terrain-shaped plot, not a metric hierarchy",
    meaning:
      "Individual Angami wet-rice terraces at Khonoma and similar villages are inherited and maintained plot by plot along the contour of the hillside, rather than being surveyed to a standard area figure",
    historical_period:
      "Customary/traditional practice of Nagaland's 16+ Naga tribes, pre-dating and continuing alongside British and post-1963 state administration",
    region_applicable:
      "Kohima district — Angami and Chakhesang Naga homeland (including Khonoma)",
    states: ["Nagaland"],
    used_in: [
      "Individual Angami wet-rice terraces at Khonoma and similar villages are inherited and maintained plot by plot along the contour of the hillside, rather than being surveyed to a standard area figure",
      "Land Measurement",
    ],
    references: [
      "https://grokipedia.com/page/Angami_Naga",
    ],
    tags: [
      "nagaland",
      "traditional-units",
      "land-measurement",
      "terrace-plot",
      "wet-rice",
      "khonoma",
      "angami",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "nagaland-land-3",
    slug: "acre-hectare-post-colonial-administrative-units-land-nagaland",
    name_english: "Acre / Hectare (post-colonial administrative units)",
    name_sanskrit: "एकड़ / हेक्टेयर",
    local_names: [],
    name_hindi: "एकड़ / हेक्टेयर",
    category: "area",
    measurement_type: "Area",
    sector: "land-measurement",
    origin: "Pan-Nagaland / Naga Hills generally",
    modern_equivalent:
      "43,560 sq ft (Acre); 10,000 sq m (Hectare)",
    conversion_formula: "100 Are = 1 Hectare; 1 Acre ≈ 0.405 Hectare",
    meaning:
      "Introduced into Nagaland's land records only through British colonial administration and later state governance, layered on top of, not replacing, customary clan/village tenure",
    historical_period:
      "British colonial period (Naga Hills District annexed progressively from the 1830s onward) through post-1963 Nagaland statehood",
    region_applicable: "Pan-Nagaland / Naga Hills generally",
    states: ["Nagaland"],
    used_in: [
      "Introduced into Nagaland's land records only through British colonial administration and later state governance, layered on top of, not replacing, customary clan/village tenure",
      "Land Measurement",
    ],
    references: ["https://en.wikipedia.org/wiki/Acre"],
    tags: [
      "nagaland",
      "traditional-units",
      "land-measurement",
      "acre",
      "hectare",
      "colonial-records",
      "post-statehood",
    ],
    created_at: "2024-01-01",
  },

  // ─── 3. Livestock & Dairy (2 units) ─────────────────────────────────────────
  {
    id: "nagaland-dairy-1",
    slug: "mithun-count-livestock-nagaland",
    name_english: "Mithun count",
    name_sanskrit:
      "N/A — value/wealth reckoning, not a weight or volume unit",
    local_names: [],
    name_hindi: "मिथुन गणना",
    category: "count",
    measurement_type: "Count (wealth/value unit)",
    sector: "livestock-dairy",
    origin: "Pan-Nagaland / Naga Hills generally",
    modern_equivalent:
      "A household's status and wealth is reckoned directly by the number of Mithun (gayal) owned",
    conversion_formula:
      "No fixed hierarchy — larger, healthier animals carry proportionately greater value",
    meaning:
      "The Mithun functions as a symbol of pride and 'local currency' for barter trade across Naga society, used for bride-price, dispute settlement, and — critically — as the sacrificial centrepiece of the Feast of Merit through which a man advances his social rank",
    historical_period:
      "Customary/traditional practice of Nagaland's 16+ Naga tribes, pre-dating and continuing alongside British and post-1963 state administration",
    region_applicable: "Pan-Nagaland / Naga Hills generally",
    states: ["Nagaland"],
    used_in: [
      "The Mithun functions as a symbol of pride and 'local currency' for barter trade across Naga society, used for bride-price, dispute settlement, and — critically — as the sacrificial centrepiece of the Feast of Merit through which a man advances his social rank",
      "Livestock & Dairy",
    ],
    references: [
      "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8663241/",
    ],
    tags: [
      "nagaland",
      "traditional-units",
      "livestock-dairy",
      "mithun",
      "gayal",
      "wealth-unit",
      "feast-of-merit",
      "bride-price",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "nagaland-dairy-2",
    slug: "ser-seer-post-contact-market-unit-dairy-nagaland",
    name_english: "Ser (Seer) — post-contact market unit",
    name_sanskrit: "सेर (Sēra)",
    local_names: [],
    name_hindi: "सेर",
    category: "weight",
    measurement_type: "Weight/Volume",
    sector: "livestock-dairy",
    origin: "Pan-Nagaland / Naga Hills generally",
    modern_equivalent: "~0.93 kg / ~0.93 L",
    conversion_formula: "1/40 Mon",
    meaning:
      "Used only where produce is sold into wider Assamese/plains markets via colonial-era and later road contact; no dairy-exclusive Naga unit is documented",
    historical_period:
      "British colonial period (Naga Hills District annexed progressively from the 1830s onward) through post-1963 Nagaland statehood",
    region_applicable: "Pan-Nagaland / Naga Hills generally",
    states: ["Nagaland"],
    used_in: [
      "Used only where produce is sold into wider Assamese/plains markets via colonial-era and later road contact; no dairy-exclusive Naga unit is documented",
      "Livestock & Dairy",
    ],
    references: [
      "https://grokipedia.com/page/Seer_(unit)",
      "https://en.wikipedia.org/wiki/Maund",
    ],
    tags: [
      "nagaland",
      "traditional-units",
      "livestock-dairy",
      "ser",
      "seer",
      "market-contact",
      "dairy-produce",
    ],
    created_at: "2024-01-01",
  },

  // ─── 4. Household & Daily Life (2 units) ────────────────────────────────────
  {
    id: "nagaland-hh-1",
    slug: "chutki-muthi-pinch-fistful-household-nagaland",
    name_english: "Chutki / Muthi (pinch/fistful)",
    name_sanskrit:
      "N/A (general North Indian vernacular, adopted through colonial era and later administrative/market contact)",
    local_names: [],
    name_hindi: "चुटकी / मुट्ठी",
    category: "volume",
    measurement_type: "Volume (informal)",
    sector: "household",
    origin: "Pan-Nagaland / Naga Hills generally",
    modern_equivalent: "Pinch to ~50–100 g fistful",
    conversion_formula: "Chutki < Muthi",
    meaning:
      "Everyday informal cooking-quantity gestures, alongside each Naga tribe's own largely undocumented household terms",
    historical_period:
      "British colonial period (Naga Hills District annexed progressively from the 1830s onward) through post-1963 Nagaland statehood",
    region_applicable: "Pan-Nagaland / Naga Hills generally",
    states: ["Nagaland"],
    used_in: [
      "Everyday informal cooking-quantity gestures, alongside each Naga tribe's own largely undocumented household terms",
      "Household & Daily Life",
    ],
    references: [
      "https://en.wikipedia.org/wiki/Handful",
    ],
    tags: [
      "nagaland",
      "traditional-units",
      "household",
      "chutki",
      "muthi",
      "cooking-gestures",
      "informal-volume",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "nagaland-hh-2",
    slug: "bamboo-internode-container-informal-volume-measure-household-nagaland",
    name_english:
      "(Bamboo internode container — informal volume measure)",
    name_sanskrit:
      "N/A — vessel-based, no fixed named hierarchy documented",
    local_names: [],
    name_hindi: "बांस पात्र (अनौपचारिक)",
    category: "volume",
    measurement_type: "Volume (utility, informal)",
    sector: "household",
    origin: "Pan-Nagaland / Naga Hills generally",
    modern_equivalent:
      "Determined by the natural internode size of the bamboo used",
    conversion_formula: "No standardised hierarchy",
    meaning:
      "Hollowed bamboo sections are used across Naga households to store and informally measure rice and zutho/rice-beer, echoing the same practice found across the wider Northeast Indian hill tracts",
    historical_period:
      "Customary/traditional practice of Nagaland's 16+ Naga tribes, pre-dating and continuing alongside British and post-1963 state administration",
    region_applicable: "Pan-Nagaland / Naga Hills generally",
    states: ["Nagaland"],
    used_in: [
      "Hollowed bamboo sections are used across Naga households to store and informally measure rice and zutho/rice-beer, echoing the same practice found across the wider Northeast Indian hill tracts",
      "Household & Daily Life",
    ],
    references: [
      "No standardised metrological reference documented for this practice",
    ],
    tags: [
      "nagaland",
      "traditional-units",
      "household",
      "bamboo-internode",
      "zutho",
      "rice-beer",
      "informal-vessel",
    ],
    created_at: "2024-01-01",
  },

  // ─── 5. Gold & Jewellery (2 units) ──────────────────────────────────────────
  {
    id: "nagaland-gold-1",
    slug: "bead-conch-shell-cowrie-ornament-gold-nagaland",
    name_english:
      "(Bead, conch-shell and cowrie ornament — no gold-weight hierarchy documented)",
    name_sanskrit: "N/A — count/craft-based, not a weight unit",
    local_names: [],
    name_hindi: "मनका-शंख-कौड़ी आभूषण (अनौपचारिक)",
    category: "count",
    measurement_type: "Count/Craft unit (informal)",
    sector: "gold-jewellery",
    origin: "Pan-Nagaland / Naga Hills generally",
    modern_equivalent:
      "Valued by craftsmanship, bead-count and material rarity rather than by a weight scale",
    conversion_formula: "No fixed hierarchy",
    meaning:
      "Naga tribes traditionally wore ornaments of beads, conch shell, boar tusk, hornbill feather and brass rather than gold weighed by a Tola-type scale — the ornament itself, especially warrior head-hunter necklaces and boar-tusk armlets, functioned as a status marker comparable in role to the graded shawl system",
    historical_period:
      "Customary/traditional practice of Nagaland's 16+ Naga tribes, pre-dating and continuing alongside British and post-1963 state administration",
    region_applicable: "Pan-Nagaland / Naga Hills generally",
    states: ["Nagaland"],
    used_in: [
      "Naga tribes traditionally wore ornaments of beads, conch shell, boar tusk, hornbill feather and brass rather than gold weighed by a Tola-type scale — the ornament itself, especially warrior head-hunter necklaces and boar-tusk armlets, functioned as a status marker comparable in role to the graded shawl system",
      "Gold & Jewellery",
    ],
    references: [
      "https://indiatribalheritage.org/?p=19037",
      "https://easternroutes.com/northeast-india/nagaland/art-and-craft/",
    ],
    tags: [
      "nagaland",
      "traditional-units",
      "gold-jewellery",
      "bead-ornaments",
      "conch-shell",
      "cowrie",
      "boar-tusk",
      "hornbill",
      "status-marker",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "nagaland-gold-2",
    slug: "tola-bullion-reference-gold-nagaland",
    name_english: "Tola (bullion reference)",
    name_sanskrit: "तोला (Tolā)",
    local_names: [],
    name_hindi: "तोला",
    category: "weight",
    measurement_type: "Weight",
    sector: "gold-jewellery",
    origin: "Pan-Nagaland / Naga Hills generally",
    modern_equivalent: "~11.66 g",
    conversion_formula: "12 Masha = 1 Tola",
    meaning:
      "Used only in gold and silver bullion transactions with plains jewellers reached via colonial-era and later market integration — not a traditional Naga unit in its own right",
    historical_period:
      "British colonial period (Naga Hills District annexed progressively from the 1830s onward) through post-1963 Nagaland statehood",
    region_applicable: "Pan-Nagaland / Naga Hills generally",
    states: ["Nagaland"],
    used_in: [
      "Used only in gold and silver bullion transactions with plains jewellers reached via colonial-era and later market integration — not a traditional Naga unit in its own right",
      "Gold & Jewellery",
    ],
    references: ["https://en.wikipedia.org/wiki/Tola_(unit)"],
    tags: [
      "nagaland",
      "traditional-units",
      "gold-jewellery",
      "tola",
      "bullion",
      "colonial-market",
    ],
    created_at: "2024-01-01",
  },

  // ─── 6. Seed & Crop (Agriculture) (3 units) ─────────────────────────────────
  {
    id: "nagaland-agri-1",
    slug: "basket-load-jhum-reckoning-agriculture-nagaland",
    name_english: "(Basket-load Jhum reckoning)",
    name_sanskrit:
      "N/A — vessel-based, no fixed named weight/volume unit documented",
    local_names: [],
    name_hindi: "टोकरी-भार (अनौपचारिक)",
    category: "volume",
    measurement_type: "Weight/Volume (informal)",
    sector: "agriculture",
    origin: "Pan-Nagaland / Naga Hills generally",
    modern_equivalent:
      "Determined by the size of the woven bamboo carrying basket in use",
    conversion_formula: "No standardised hierarchy",
    meaning:
      "Jhum (shifting-cultivation) harvests of rice, millet and maize across most Naga tribal areas were traditionally carried and quantified basket-by-basket rather than by a fixed named unit",
    historical_period:
      "Customary/traditional practice of Nagaland's 16+ Naga tribes, pre-dating and continuing alongside British and post-1963 state administration",
    region_applicable: "Pan-Nagaland / Naga Hills generally",
    states: ["Nagaland"],
    used_in: [
      "Jhum (shifting-cultivation) harvests of rice, millet and maize across most Naga tribal areas were traditionally carried and quantified basket-by-basket rather than by a fixed named unit",
      "Seed & Crop (Agriculture)",
    ],
    references: [
      "No standardised metrological reference documented for this practice",
    ],
    tags: [
      "nagaland",
      "traditional-units",
      "agriculture",
      "basket-load",
      "jhum-harvest",
      "shifting-cultivation",
      "bamboo-basket",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "nagaland-agri-2",
    slug: "terrace-wet-rice-yield-plot-based-reckoning-agriculture-nagaland",
    name_english:
      "(Terrace wet-rice yield — plot-based reckoning)",
    name_sanskrit:
      "N/A — reckoned by terrace plot, no fixed named weight/volume unit documented",
    local_names: [],
    name_hindi: "सीढ़ीदार धान उपज (अनौपचारिक)",
    category: "volume",
    measurement_type: "Weight/Volume (informal)",
    sector: "agriculture",
    origin:
      "Kohima district — Angami and Chakhesang Naga homeland (including Khonoma)",
    modern_equivalent:
      "Yield reckoned per named terrace plot rather than by a fixed unit",
    conversion_formula: "No standardised hierarchy",
    meaning:
      "Angami wet-rice terrace farming at Khonoma and similar villages — a rare and sophisticated exception to the jhum-dominated Naga hill economy — reckoned harvest informally by the individual, inherited terrace plot rather than a codified weight or area unit",
    historical_period:
      "Customary/traditional practice of Nagaland's 16+ Naga tribes, pre-dating and continuing alongside British and post-1963 state administration",
    region_applicable:
      "Kohima district — Angami and Chakhesang Naga homeland (including Khonoma)",
    states: ["Nagaland"],
    used_in: [
      "Angami wet-rice terrace farming at Khonoma and similar villages — a rare and sophisticated exception to the jhum-dominated Naga hill economy — reckoned harvest informally by the individual, inherited terrace plot rather than a codified weight or area unit",
      "Seed & Crop (Agriculture)",
    ],
    references: [
      "https://grokipedia.com/page/Angami_Naga",
    ],
    tags: [
      "nagaland",
      "traditional-units",
      "agriculture",
      "terrace-yield",
      "wet-rice",
      "angami",
      "khonoma",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "nagaland-agri-3",
    slug: "ser-seer-post-contact-market-unit-agriculture-nagaland",
    name_english: "Ser (Seer) — post-contact market unit",
    name_sanskrit: "सेर (Sēra)",
    local_names: [],
    name_hindi: "सेर",
    category: "weight",
    measurement_type: "Weight",
    sector: "agriculture",
    origin: "Pan-Nagaland / Naga Hills generally",
    modern_equivalent: "~0.93 kg",
    conversion_formula: "16 Chittak = 1 Ser",
    meaning:
      "Used only where produce is sold into wider Assamese/plains markets via colonial-era roads, not as a traditional in-village unit",
    historical_period:
      "British colonial period (Naga Hills District annexed progressively from the 1830s onward) through post-1963 Nagaland statehood",
    region_applicable: "Pan-Nagaland / Naga Hills generally",
    states: ["Nagaland"],
    used_in: [
      "Used only where produce is sold into wider Assamese/plains markets via colonial-era roads, not as a traditional in-village unit",
      "Seed & Crop (Agriculture)",
    ],
    references: [
      "https://grokipedia.com/page/Seer_(unit)",
      "https://en.wikipedia.org/wiki/Maund",
    ],
    tags: [
      "nagaland",
      "traditional-units",
      "agriculture",
      "ser",
      "seer",
      "market-crop",
      "colonial-road",
    ],
    created_at: "2024-01-01",
  },

  // ─── 7. Currency & Money (6 units) ──────────────────────────────────────────
  {
    id: "nagaland-curr-1",
    slug: "barter-pre-coinage-currency-nagaland",
    name_english: "(Barter — pre-coinage)",
    name_sanskrit: "N/A — no named unit; a practice, not a fixed unit",
    local_names: [],
    name_hindi: "वस्तु विनिमय",
    category: "other",
    measurement_type: "Exchange system (non-monetary)",
    sector: "currency-money",
    origin: "Pan-Nagaland / Naga Hills generally",
    modern_equivalent: "Not applicable",
    conversion_formula: "No fixed hierarchy",
    meaning:
      "Documented as the Naga Hills' primary economic system before the arrival of the British Rupee, alongside iron, conch shell and (for the Ao) chabili knife commodity-money",
    historical_period:
      "Customary/traditional practice of Nagaland's 16+ Naga tribes, pre-dating and continuing alongside British and post-1963 state administration",
    region_applicable: "Pan-Nagaland / Naga Hills generally",
    states: ["Nagaland"],
    used_in: [
      "Documented as the Naga Hills' primary economic system before the arrival of the British Rupee, alongside iron, conch shell and (for the Ao) chabili knife commodity-money",
      "Currency & Money",
    ],
    references: [
      "https://www.everyculture.com/South-Asia/Nagas-Economy.html",
    ],
    tags: [
      "nagaland",
      "traditional-units",
      "currency-money",
      "barter",
      "pre-coinage",
      "commodity-money",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "nagaland-curr-2",
    slug: "kukhayu-reservation-fee-coins-currency-nagaland",
    name_english: "Kükhayü ('reservation fee' coins)",
    name_sanskrit: "N/A (Pochury Naga vernacular)",
    local_names: ["Kükhayü"],
    name_hindi: "कुखायू (आरक्षण शुल्क)",
    category: "currency",
    measurement_type: "Currency (bride-price instalment)",
    sector: "currency-money",
    origin: "Meluri district — Pochury Naga homeland",
    modern_equivalent: "5 coins, paid immediately after engagement",
    conversion_formula:
      "First of four documented instalments in the Pochury Naga bride-price sequence",
    meaning:
      "Among the Pochury Naga's Yisi group, five coins paid to the bride's family right after engagement as a reservation fee — a rare, explicitly documented tribal 'bride-price currency ladder'",
    historical_period:
      "Customary/traditional practice of Nagaland's 16+ Naga tribes, pre-dating and continuing alongside British and post-1963 state administration",
    region_applicable: "Meluri district — Pochury Naga homeland",
    states: ["Nagaland"],
    used_in: [
      "Among the Pochury Naga's Yisi group, five coins paid to the bride's family right after engagement as a reservation fee — a rare, explicitly documented tribal 'bride-price currency ladder'",
      "Currency & Money",
    ],
    references: ["https://en.wikipedia.org/wiki/Pochury"],
    tags: [
      "nagaland",
      "traditional-units",
      "currency-money",
      "kukhayu",
      "pochury-naga",
      "reservation-fee",
      "bride-price-ladder",
      "meluri",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "nagaland-curr-3",
    slug: "ashiphu-buffalo-mithun-money-equivalent-currency-nagaland",
    name_english:
      "Ashiphü (a buffalo, Mithun, or its money equivalent)",
    name_sanskrit: "N/A (Pochury Naga vernacular)",
    local_names: ["Ashiphü"],
    name_hindi: "अशिपू",
    category: "currency",
    measurement_type:
      "Currency (bride-price instalment, livestock equivalent)",
    sector: "currency-money",
    origin: "Meluri district — Pochury Naga homeland",
    modern_equivalent:
      "1 buffalo or Mithun, or its equivalent value in coin",
    conversion_formula:
      "Second instalment; a wealthier family gives the livestock itself rather than its cash equivalent",
    meaning:
      "A substantial bride-price gift among the Pochury Yisi group, illustrating how livestock (as in Mithun-count elsewhere in this workbook) and coined money were treated as directly interchangeable units of value",
    historical_period:
      "Customary/traditional practice of Nagaland's 16+ Naga tribes, pre-dating and continuing alongside British and post-1963 state administration",
    region_applicable: "Meluri district — Pochury Naga homeland",
    states: ["Nagaland"],
    used_in: [
      "A substantial bride-price gift among the Pochury Yisi group, illustrating how livestock (as in Mithun-count elsewhere in this workbook) and coined money were treated as directly interchangeable units of value",
      "Currency & Money",
    ],
    references: ["https://en.wikipedia.org/wiki/Pochury"],
    tags: [
      "nagaland",
      "traditional-units",
      "currency-money",
      "ashiphu",
      "pochury",
      "mithun-equivalent",
      "livestock-money",
      "bride-price",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "nagaland-curr-4",
    slug: "pithayu-achetsu-second-dowry-coins-currency-nagaland",
    name_english: "Pithayü achetsü ('second dowry' coins)",
    name_sanskrit: "N/A (Pochury Naga vernacular)",
    local_names: ["Pithayü achetsü"],
    name_hindi: "पिथायू अचेत्सू (द्वितीय दहेज)",
    category: "currency",
    measurement_type: "Currency (bride-price instalment)",
    sector: "currency-money",
    origin: "Meluri district — Pochury Naga homeland",
    modern_equivalent: "50 coins, paid before the marriage ceremony",
    conversion_formula:
      "Third and largest coin instalment in the sequence",
    meaning:
      "The largest documented coin-count instalment in the Pochury bride-price sequence, paid to the bride's family before the wedding itself",
    historical_period:
      "Customary/traditional practice of Nagaland's 16+ Naga tribes, pre-dating and continuing alongside British and post-1963 state administration",
    region_applicable: "Meluri district — Pochury Naga homeland",
    states: ["Nagaland"],
    used_in: [
      "The largest documented coin-count instalment in the Pochury bride-price sequence, paid to the bride's family before the wedding itself",
      "Currency & Money",
    ],
    references: ["https://en.wikipedia.org/wiki/Pochury"],
    tags: [
      "nagaland",
      "traditional-units",
      "currency-money",
      "pithayu-achetsu",
      "pochury",
      "coin-instalment",
      "dowry-coins",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "nagaland-curr-5",
    slug: "munuyu-final-dowry-pig-or-coins-currency-nagaland",
    name_english: "Münüyü (final dowry — a pig, or coins)",
    name_sanskrit: "N/A (Pochury Naga vernacular)",
    local_names: ["Münüyü"],
    name_hindi: "मुनूयू",
    category: "currency",
    measurement_type: "Currency (bride-price instalment)",
    sector: "currency-money",
    origin: "Meluri district — Pochury Naga homeland",
    modern_equivalent: "1 adult pig, or 5 to 10 coins",
    conversion_formula:
      "Fourth and final instalment, paid by the groom's own parents (distinct from the first three, paid by/for the groom to the bride's family)",
    meaning:
      "Completes the Pochury Naga bride-price sequence; all four instalments had to be cleared before the marriage ceremony could proceed",
    historical_period:
      "Customary/traditional practice of Nagaland's 16+ Naga tribes, pre-dating and continuing alongside British and post-1963 state administration",
    region_applicable: "Meluri district — Pochury Naga homeland",
    states: ["Nagaland"],
    used_in: [
      "Completes the Pochury Naga bride-price sequence; all four instalments had to be cleared before the marriage ceremony could proceed",
      "Currency & Money",
    ],
    references: ["https://en.wikipedia.org/wiki/Pochury"],
    tags: [
      "nagaland",
      "traditional-units",
      "currency-money",
      "munuyu",
      "final-dowry",
      "pochury",
      "pig-coins",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "nagaland-curr-6",
    slug: "british-indian-rupee-post-colonial-currency-nagaland",
    name_english:
      "British Indian / Indian Rupee (post-colonial contact)",
    name_sanskrit: "N/A",
    local_names: [],
    name_hindi: "रुपया",
    category: "currency",
    measurement_type: "Currency",
    sector: "currency-money",
    origin: "Pan-Nagaland / Naga Hills generally",
    modern_equivalent: "Standard Rupee",
    conversion_formula:
      "Superseded iron, conch-shell and chabili commodity-money in day-to-day transactions",
    meaning:
      "Introduced through British administration of the Naga Hills District and consolidated after Nagaland's 1963 statehood",
    historical_period:
      "British colonial period (Naga Hills District annexed progressively from the 1830s onward) through post-1963 Nagaland statehood",
    region_applicable: "Pan-Nagaland / Naga Hills generally",
    states: ["Nagaland"],
    used_in: [
      "Introduced through British administration of the Naga Hills District and consolidated after Nagaland's 1963 statehood",
      "Currency & Money",
    ],
    references: ["https://en.wikipedia.org/wiki/Rupee"],
    tags: [
      "nagaland",
      "traditional-units",
      "currency-money",
      "rupee",
      "british-rupee",
      "indian-rupee",
      "post-statehood",
    ],
    created_at: "2024-01-01",
  },

  // ─── 8. Storage & Transportation (3 units) ───────────────────────────────────
  {
    id: "nagaland-stor-1",
    slug: "bamboo-granary-informal-capacity-storage-nagaland",
    name_english: "(Bamboo granary — informal capacity)",
    name_sanskrit: "N/A — structure-based, no fixed named unit documented",
    local_names: [],
    name_hindi: "बांस भंडार (अनौपचारिक)",
    category: "volume",
    measurement_type: "Volume (utility, informal)",
    sector: "storage-transport",
    origin: "Pan-Nagaland / Naga Hills generally",
    modern_equivalent:
      "Capacity set by the size of the individual household granary structure",
    conversion_formula: "No standardised hierarchy",
    meaning:
      "Raised bamboo-and-thatch granaries store Jhum and terrace-rice harvests across Naga villages, with capacity reckoned informally",
    historical_period:
      "Customary/traditional practice of Nagaland's 16+ Naga tribes, pre-dating and continuing alongside British and post-1963 state administration",
    region_applicable: "Pan-Nagaland / Naga Hills generally",
    states: ["Nagaland"],
    used_in: [
      "Raised bamboo-and-thatch granaries store Jhum and terrace-rice harvests across Naga villages, with capacity reckoned informally",
      "Storage & Transportation",
    ],
    references: [
      "No standardised metrological reference documented for this practice",
    ],
    tags: [
      "nagaland",
      "traditional-units",
      "storage-transport",
      "bamboo-granary",
      "harvest-storage",
      "household-granary",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "nagaland-stor-2",
    slug: "porter-headload-reckoning-storage-nagaland",
    name_english: "(Porter/headload reckoning)",
    name_sanskrit: "N/A — body-based, no fixed named unit documented",
    local_names: [],
    name_hindi: "सिर-भार (अनौपचारिक)",
    category: "weight",
    measurement_type: "Weight (informal, load-based)",
    sector: "storage-transport",
    origin: "Pan-Nagaland / Naga Hills generally",
    modern_equivalent:
      "One person's comfortable carrying load over hill-trail terrain",
    conversion_formula: "No standardised hierarchy",
    meaning:
      "Given Nagaland's steep hill terrain and the traditional isolation of individual villages, goods were moved by human porterage along footpaths, with loads reckoned informally rather than by a named weight unit",
    historical_period:
      "Customary/traditional practice of Nagaland's 16+ Naga tribes, pre-dating and continuing alongside British and post-1963 state administration",
    region_applicable: "Pan-Nagaland / Naga Hills generally",
    states: ["Nagaland"],
    used_in: [
      "Given Nagaland's steep hill terrain and the traditional isolation of individual villages, goods were moved by human porterage along footpaths, with loads reckoned informally rather than by a named weight unit",
      "Storage & Transportation",
    ],
    references: [
      "No standardised metrological reference documented for this practice",
    ],
    tags: [
      "nagaland",
      "traditional-units",
      "storage-transport",
      "headload",
      "porterage",
      "hill-trails",
      "footpaths",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "nagaland-stor-3",
    slug: "ser-mon-seer-maund-post-contact-market-unit-storage-nagaland",
    name_english: "Ser / Mon (Seer/Maund) — post-contact market unit",
    name_sanskrit: "सेर / मन",
    local_names: [],
    name_hindi: "सेर / मन",
    category: "weight",
    measurement_type: "Weight",
    sector: "storage-transport",
    origin: "Pan-Nagaland / Naga Hills generally",
    modern_equivalent: "~0.93 kg Ser; 40 Ser = 1 Mon ≈ 37.3 kg",
    conversion_formula: "40 Ser = 1 Mon",
    meaning:
      "Used for goods once they reach roadhead markets and the historic Naga khat trading points connected to the Assam plains",
    historical_period:
      "British colonial period (Naga Hills District annexed progressively from the 1830s onward) through post-1963 Nagaland statehood",
    region_applicable: "Pan-Nagaland / Naga Hills generally",
    states: ["Nagaland"],
    used_in: [
      "Used for goods once they reach roadhead markets and the historic Naga khat trading points connected to the Assam plains",
      "Storage & Transportation",
    ],
    references: [
      "https://grokipedia.com/page/Seer_(unit)",
      "https://en.wikipedia.org/wiki/Maund",
    ],
    tags: [
      "nagaland",
      "traditional-units",
      "storage-transport",
      "ser",
      "mon",
      "seer",
      "maund",
      "naga-khat",
      "market-depot",
    ],
    created_at: "2024-01-01",
  },

  // ─── 9. Religious & Cultural (4 units) ───────────────────────────────────────
  {
    id: "nagaland-rel-1",
    slug: "genna-individual-merit-feast-religious-nagaland",
    name_english:
      "Genna (individual merit-feast) — a graded social institution, not a subdivided time/quantity unit",
    name_sanskrit:
      "N/A (general Naga term for a taboo/ritual observance, extended to merit-feast ceremonies)",
    local_names: ["Genna"],
    name_hindi: "गेन्ना (योग्यता भोज)",
    category: "other",
    measurement_type:
      "Social-status ladder (ceremonial, not a numeric unit)",
    sector: "religious-cultural",
    origin: "Pan-Nagaland / Naga Hills generally",
    modern_equivalent:
      "Each genna performed is one rung; multiple gennas, performed over a man's lifetime, are cumulatively recorded",
    conversion_formula:
      "Ranked, cumulative — the specific graded Lotha and related shawl series directly encode how many gennas a man has performed",
    meaning:
      "The individual merit feast within the wider Feast of Merit institution — through Mithun sacrifice, communal feasting and gift-giving, a man ascends a recognised, cumulative ladder of social prestige, ritual status and the right to wear correspondingly higher-ranked shawls",
    historical_period:
      "Customary/traditional practice of Nagaland's 16+ Naga tribes, pre-dating and continuing alongside British and post-1963 state administration",
    region_applicable: "Pan-Nagaland / Naga Hills generally",
    states: ["Nagaland"],
    used_in: [
      "The individual merit feast within the wider Feast of Merit institution — through Mithun sacrifice, communal feasting and gift-giving, a man ascends a recognised, cumulative ladder of social prestige, ritual status and the right to wear correspondingly higher-ranked shawls",
      "Religious & Cultural",
    ],
    references: [
      "https://en.wikipedia.org/wiki/Feast_of_Merit",
    ],
    tags: [
      "nagaland",
      "traditional-units",
      "religious-cultural",
      "genna",
      "merit-feast",
      "mithun-sacrifice",
      "social-prestige",
      "shawl-rank",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "nagaland-rel-2",
    slug: "feast-of-merit-full-institution-religious-nagaland",
    name_english: "Feast of Merit (full institution)",
    name_sanskrit: "N/A — a ceremonial institution, not a unit",
    local_names: [],
    name_hindi: "योग्यता भोज (संस्था)",
    category: "other",
    measurement_type:
      "Social-status ladder (ceremonial institution)",
    sector: "religious-cultural",
    origin: "Pan-Nagaland / Naga Hills generally",
    modern_equivalent:
      "A lifetime, multi-tiered progression rather than a single fixed event",
    conversion_formula:
      "The overarching institution within which individual gennas are the graded rungs",
    meaning:
      "Practiced across Naga communities in Nagaland and Manipur, involving public wealth distribution — feasting, Mithun sacrifice and gift-giving — to attain social prestige, ritual status and communal recognition; formally comparable in social function to the shawl grading system, since both convert accumulated wealth and achievement into a publicly recognised rank",
    historical_period:
      "Customary/traditional practice of Nagaland's 16+ Naga tribes, pre-dating and continuing alongside British and post-1963 state administration",
    region_applicable: "Pan-Nagaland / Naga Hills generally",
    states: ["Nagaland"],
    used_in: [
      "Practiced across Naga communities in Nagaland and Manipur, involving public wealth distribution — feasting, Mithun sacrifice and gift-giving — to attain social prestige, ritual status and communal recognition; formally comparable in social function to the shawl grading system, since both convert accumulated wealth and achievement into a publicly recognised rank",
      "Religious & Cultural",
    ],
    references: [
      "https://en.wikipedia.org/wiki/Feast_of_Merit",
    ],
    tags: [
      "nagaland",
      "traditional-units",
      "religious-cultural",
      "feast-of-merit",
      "public-wealth-distribution",
      "status-institution",
      "ritual-prestige",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "nagaland-rel-3",
    slug: "tribe-specific-agricultural-festivals-religious-nagaland",
    name_english:
      "Tribe-specific agricultural festivals (Sekrenyi—Angami, Moatsu—Ao, Tuluni—Sumi)",
    name_sanskrit:
      "N/A — fixed seasonal festival dates, not subdivided numeric time units",
    local_names: ["Sekrenyi / Moatsu / Tuluni"],
    name_hindi: "सेक्रेन्यी / मोआत्सु / तुलुनी",
    category: "time",
    measurement_type:
      "Calendar (agricultural/purification festival marker)",
    sector: "religious-cultural",
    origin: "Pan-Nagaland / Naga Hills generally",
    modern_equivalent:
      "Each tied to a specific point in the tribe's own agricultural cycle (post-sowing purification, early cultivation, or pre-harvest)",
    conversion_formula:
      "Distinct festivals across different tribes, not forming one shared numeric hierarchy",
    meaning:
      "Major seasonal festivals of individual Naga tribes — Sekrenyi (Angami, a February purification rite), Moatsu (Ao, marking the completion of sowing), and Tuluni (Sumi, a mid-year harvest-blessing festival) — mark agricultural transitions rather than subdividing time into fixed numeric units",
    historical_period:
      "Customary/traditional practice of Nagaland's 16+ Naga tribes, pre-dating and continuing alongside British and post-1963 state administration",
    region_applicable: "Pan-Nagaland / Naga Hills generally",
    states: ["Nagaland"],
    used_in: [
      "Major seasonal festivals of individual Naga tribes — Sekrenyi (Angami, a February purification rite), Moatsu (Ao, marking the completion of sowing), and Tuluni (Sumi, a mid-year harvest-blessing festival) — mark agricultural transitions rather than subdividing time into fixed numeric units",
      "Religious & Cultural",
    ],
    references: ["https://en.wikipedia.org/wiki/Sekrenyi"],
    tags: [
      "nagaland",
      "traditional-units",
      "religious-cultural",
      "sekrenyi",
      "moatsu",
      "tuluni",
      "agricultural-festivals",
      "seasonal-markers",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "nagaland-rel-4",
    slug: "days-walk-pilgrimage-ancestral-site-reckoning-religious-nagaland",
    name_english:
      "(Day's-walk pilgrimage/ancestral-site reckoning)",
    name_sanskrit:
      "N/A — informal, terrain-based measurement, no fixed named unit documented",
    local_names: [],
    name_hindi: "यात्रा-दिवस (अनौपचारिक)",
    category: "length",
    measurement_type: "Distance (informal, time-based)",
    sector: "religious-cultural",
    origin: "Pan-Nagaland / Naga Hills generally",
    modern_equivalent:
      "Distance to an ancestral or sacred site expressed in days' walk",
    conversion_formula: "No standardised hierarchy",
    meaning:
      "As with everyday travel, ritual travel distance between villages for feasts, alliances or ancestor-related observances was traditionally reckoned by days' walk rather than by a fixed-length unit",
    historical_period:
      "Customary/traditional practice of Nagaland's 16+ Naga tribes, pre-dating and continuing alongside British and post-1963 state administration",
    region_applicable: "Pan-Nagaland / Naga Hills generally",
    states: ["Nagaland"],
    used_in: [
      "As with everyday travel, ritual travel distance between villages for feasts, alliances or ancestor-related observances was traditionally reckoned by days' walk rather than by a fixed-length unit",
      "Religious & Cultural",
    ],
    references: [
      "No standardised metrological reference documented for this practice",
    ],
    tags: [
      "nagaland",
      "traditional-units",
      "religious-cultural",
      "days-walk",
      "ritual-travel",
      "ancestral-sites",
      "inter-village",
    ],
    created_at: "2024-01-01",
  },

  // ─── 10. Trade & Commerce (5 units) ─────────────────────────────────────────
  {
    id: "nagaland-trade-1",
    slug: "barter-rice-salt-cotton-cattle-trade-nagaland",
    name_english: "(Barter — rice, salt, cotton, cattle)",
    name_sanskrit: "N/A — no named unit; a practice, not a fixed unit",
    local_names: [],
    name_hindi: "वस्तु विनिमय",
    category: "other",
    measurement_type: "Exchange system (non-monetary)",
    sector: "trade-commerce",
    origin: "Pan-Nagaland / Naga Hills generally",
    modern_equivalent: "Not applicable — reckoned good-for-good",
    conversion_formula: "No fixed hierarchy",
    meaning:
      "The primary form of exchange in pre-colonial Naga Hills markets, with rice, salt, cotton and cattle as the main commodities traded, alongside occasional luxury items",
    historical_period:
      "Customary/traditional practice of Nagaland's 16+ Naga tribes, pre-dating and continuing alongside British and post-1963 state administration",
    region_applicable: "Pan-Nagaland / Naga Hills generally",
    states: ["Nagaland"],
    used_in: [
      "The primary form of exchange in pre-colonial Naga Hills markets, with rice, salt, cotton and cattle as the main commodities traded, alongside occasional luxury items",
      "Trade & Commerce",
    ],
    references: [
      "http://www.socialresearchfoundation.com/new/publish-journal.php?editID=7108",
    ],
    tags: [
      "nagaland",
      "traditional-units",
      "trade-commerce",
      "barter",
      "rice",
      "salt",
      "cotton",
      "cattle",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "nagaland-trade-2",
    slug: "conch-shell-trade-nagaland",
    name_english: "Conch shell",
    name_sanskrit: "शङ्ख (Śaṅkha)",
    local_names: [],
    name_hindi: "शंख",
    category: "currency",
    measurement_type: "Currency (commodity-money)",
    sector: "trade-commerce",
    origin: "Pan-Nagaland / Naga Hills generally",
    modern_equivalent:
      "1 conch shell; no documented fixed metal-weight equivalent",
    conversion_formula:
      "One of three documented pre-Rupee currency items, alongside iron and barter",
    meaning:
      "Used as a form of currency among Naga tribes before the arrival of the British Rupee, per ethnographic economic surveys of Angami and related communities",
    historical_period:
      "Customary/traditional practice of Nagaland's 16+ Naga tribes, pre-dating and continuing alongside British and post-1963 state administration",
    region_applicable: "Pan-Nagaland / Naga Hills generally",
    states: ["Nagaland"],
    used_in: [
      "Used as a form of currency among Naga tribes before the arrival of the British Rupee, per ethnographic economic surveys of Angami and related communities",
      "Trade & Commerce",
    ],
    references: [
      "https://www.everyculture.com/South-Asia/Nagas-Economy.html",
    ],
    tags: [
      "nagaland",
      "traditional-units",
      "trade-commerce",
      "conch-shell",
      "shankha",
      "commodity-money",
      "angami",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "nagaland-trade-3",
    slug: "iron-as-currency-trade-nagaland",
    name_english: "Iron (as currency)",
    name_sanskrit:
      "N/A — a valuable commodity functioning as money, not a coined unit",
    local_names: [],
    name_hindi: "लोहा (मुद्रा रूप में)",
    category: "currency",
    measurement_type: "Currency (commodity-money)",
    sector: "trade-commerce",
    origin: "Pan-Nagaland / Naga Hills generally",
    modern_equivalent:
      "Value set by quantity and quality of iron, not a fixed denomination",
    conversion_formula: "Documented pre-Rupee currency item",
    meaning:
      "Iron — used for tools, weapons and trade — functioned as a form of money among Naga tribes before British coinage arrived, reflecting the broader importance of iron working across the Naga Hills",
    historical_period:
      "Customary/traditional practice of Nagaland's 16+ Naga tribes, pre-dating and continuing alongside British and post-1963 state administration",
    region_applicable: "Pan-Nagaland / Naga Hills generally",
    states: ["Nagaland"],
    used_in: [
      "Iron — used for tools, weapons and trade — functioned as a form of money among Naga tribes before British coinage arrived, reflecting the broader importance of iron working across the Naga Hills",
      "Trade & Commerce",
    ],
    references: [
      "https://www.everyculture.com/South-Asia/Nagas-Economy.html",
    ],
    tags: [
      "nagaland",
      "traditional-units",
      "trade-commerce",
      "iron",
      "commodity-money",
      "iron-working",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "nagaland-trade-4",
    slug: "chabili-assamese-carving-knife-trade-nagaland",
    name_english: "Chabili (Assamese carving knife)",
    name_sanskrit:
      "N/A — an Assamese-made trade knife, used specifically by the Ao as a currency item",
    local_names: ["Chabili"],
    name_hindi: "छबिली (चाकू-मुद्रा)",
    category: "currency",
    measurement_type: "Currency (commodity-money)",
    sector: "trade-commerce",
    origin: "Mokokchung district — Ao Naga homeland",
    modern_equivalent:
      "1 knife; value set by size/quality; no documented sub-denomination",
    conversion_formula:
      "Documented pre-Rupee currency item specific to the Ao Naga",
    meaning:
      "An Assamese-manufactured carving knife that the Ao Naga specifically used as currency, obtained through trade contact with the Ahom-ruled Assam plains via the Naga Hills' foothill trade routes",
    historical_period:
      "Naga Hills–Ahom contact period (1228–1826 CE), conducted through tribute, refuge and barter rather than conquest",
    region_applicable: "Mokokchung district — Ao Naga homeland",
    states: ["Nagaland"],
    used_in: [
      "An Assamese-manufactured carving knife that the Ao Naga specifically used as currency, obtained through trade contact with the Ahom-ruled Assam plains via the Naga Hills' foothill trade routes",
      "Trade & Commerce",
    ],
    references: [
      "https://www.everyculture.com/South-Asia/Nagas-Economy.html",
    ],
    tags: [
      "nagaland",
      "traditional-units",
      "trade-commerce",
      "chabili",
      "ao-naga",
      "knife-currency",
      "mokokchung",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "nagaland-trade-5",
    slug: "naga-khat-revenue-free-trade-market-trade-nagaland",
    name_english: "Naga khat (revenue-free trade market)",
    name_sanskrit:
      "N/A — a market-place designation, not a unit of value",
    local_names: ["Naga khat"],
    name_hindi: "नागा खट (व्यापार बाज़ार)",
    category: "other",
    measurement_type: "Trade infrastructure (not a unit)",
    sector: "trade-commerce",
    origin: "Pan-Nagaland / Naga Hills generally",
    modern_equivalent: "Not applicable — a place, not a quantity",
    conversion_formula: "Not applicable",
    meaning:
      "Revenue-free market lands established at foothill locations along Naga-Ahom trade routes and passes (duars), where barter-based commerce between hill and plains communities was conducted",
    historical_period:
      "Naga Hills–Ahom contact period (1228–1826 CE), conducted through tribute, refuge and barter rather than conquest",
    region_applicable: "Pan-Nagaland / Naga Hills generally",
    states: ["Nagaland"],
    used_in: [
      "Revenue-free market lands established at foothill locations along Naga-Ahom trade routes and passes (duars), where barter-based commerce between hill and plains communities was conducted",
      "Trade & Commerce",
    ],
    references: [
      "https://chalohoppo.com/a-brief-history-of-nagaland/",
    ],
    tags: [
      "nagaland",
      "traditional-units",
      "trade-commerce",
      "naga-khat",
      "duar-markets",
      "trade-infrastructure",
      "ahom-period",
    ],
    created_at: "2024-01-01",
  },

  // ─── 11. Textile & Handloom (5 units) ─────────────────────────────────────────
  {
    id: "nagaland-textile-1",
    slug: "lohe-angami-common-social-shawl-textile-nagaland",
    name_english: "Lohe (Angami common social shawl)",
    name_sanskrit: "N/A (Angami vernacular)",
    local_names: ["Lohe"],
    name_hindi: "लोहे (आम सामाजिक शॉल)",
    category: "other",
    measurement_type: "Garment (status-graded, entry tier)",
    sector: "textile-handloom",
    origin:
      "Kohima district — Angami and Chakhesang Naga homeland (including Khonoma)",
    modern_equivalent:
      "One woven piece — red and yellow bands on black cloth",
    conversion_formula:
      "Lowest tier of the graded social-shawl system; higher tiers require specific ceremonial or warrior achievements",
    meaning:
      "The most common everyday social shawl pattern among Angami men, worn without the restrictions attached to warrior or feast-of-merit shawls",
    historical_period:
      "Customary/traditional practice of Nagaland's 16+ Naga tribes, pre-dating and continuing alongside British and post-1963 state administration",
    region_applicable:
      "Kohima district — Angami and Chakhesang Naga homeland (including Khonoma)",
    states: ["Nagaland"],
    used_in: [
      "The most common everyday social shawl pattern among Angami men, worn without the restrictions attached to warrior or feast-of-merit shawls",
      "Textile & Handloom",
    ],
    references: [
      "https://easternroutes.com/northeast-india/nagaland/art-and-craft/",
    ],
    tags: [
      "nagaland",
      "traditional-units",
      "textile-handloom",
      "lohe",
      "angami",
      "social-shawl",
      "kohima",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "nagaland-textile-2",
    slug: "lungpensu-stone-dragging-ceremony-shawl-textile-nagaland",
    name_english: "Lungpensu (stone-dragging ceremony shawl)",
    name_sanskrit: "N/A (Naga vernacular)",
    local_names: ["Lungpensu"],
    name_hindi: "लुंगपेन्सु (शिला-खिंचाई शॉल)",
    category: "other",
    measurement_type: "Garment (status-graded, mid tier)",
    sector: "textile-handloom",
    origin: "Pan-Nagaland / Naga Hills generally",
    modern_equivalent:
      "One woven piece — five stripes of light blue on dark blue cloth",
    conversion_formula:
      "A specific rank within the graded Naga shawl system, earned rather than purchased",
    meaning:
      "Worn exclusively by a man who has performed the stone-dragging ceremony (the communal hauling of a large memorial stone) — the Lotha shawl series in particular is 'woven into a graded pattern, a series of shawls indicating the gennas [merit feasts] he has performed'",
    historical_period:
      "Customary/traditional practice of Nagaland's 16+ Naga tribes, pre-dating and continuing alongside British and post-1963 state administration",
    region_applicable: "Pan-Nagaland / Naga Hills generally",
    states: ["Nagaland"],
    used_in: [
      "Worn exclusively by a man who has performed the stone-dragging ceremony (the communal hauling of a large memorial stone) — the Lotha shawl series in particular is 'woven into a graded pattern, a series of shawls indicating the gennas [merit feasts] he has performed'",
      "Textile & Handloom",
    ],
    references: [
      "https://indiatribalheritage.org/?p=19037",
      "https://easternroutes.com/northeast-india/nagaland/art-and-craft/",
    ],
    tags: [
      "nagaland",
      "traditional-units",
      "textile-handloom",
      "lungpensu",
      "stone-dragging",
      "merit-feast",
      "lotha",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "nagaland-textile-3",
    slug: "tsungkotepsu-ao-warrior-mithun-sacrifice-shawl-textile-nagaland",
    name_english: "Tsungkotepsu (Ao warrior/Mithun sacrifice shawl)",
    name_sanskrit: "N/A (Ao Naga vernacular)",
    local_names: ["Tsungkotepsu"],
    name_hindi: "चुंगकोतेप्सु (योद्धा शॉल)",
    category: "other",
    measurement_type: "Garment (status-graded, highest tier)",
    sector: "textile-handloom",
    origin: "Mokokchung district — Ao Naga homeland",
    modern_equivalent:
      "One woven piece — black and red striped with a white central band bearing mithun, tiger, elephant, spear/dao and (historically) human head motifs",
    conversion_formula:
      "The highest ranking male shawl in Ao Naga society — the top of the graded shawl hierarchy",
    meaning:
      "Traditionally worn only by warriors who had taken an enemy head; in the post-headhunting era, the right to wear it transferred to men who had performed a mithun sacrifice as an equivalent demonstration of wealth and status; GI protected since 2008",
    historical_period:
      "Customary/traditional practice of Nagaland's 16+ Naga tribes, pre-dating and continuing alongside British and post-1963 state administration",
    region_applicable: "Mokokchung district — Ao Naga homeland",
    states: ["Nagaland"],
    used_in: [
      "Traditionally worn only by warriors who had taken an enemy head; in the post-headhunting era, the right to wear it transferred to men who had performed a mithun sacrifice as an equivalent demonstration of wealth and status; GI protected since 2008",
      "Textile & Handloom",
    ],
    references: [
      "https://en.wikipedia.org/wiki/Naga_shawl",
      "https://en.wikipedia.org/wiki/Tsungkotepsu",
    ],
    tags: [
      "nagaland",
      "traditional-units",
      "textile-handloom",
      "tsungkotepsu",
      "ao-naga",
      "warrior-shawl",
      "mithun-sacrifice",
      "gi-tag",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "nagaland-textile-4",
    slug: "loukaisa-womens-shawl-textile-nagaland",
    name_english: "Loukaisa (women's shawl)",
    name_sanskrit: "N/A (Naga vernacular)",
    local_names: ["Loukaisa"],
    name_hindi: "लौकाइसा",
    category: "other",
    measurement_type: "Garment (type unit, not graded by achievement)",
    sector: "textile-handloom",
    origin: "Pan-Nagaland / Naga Hills generally",
    modern_equivalent:
      "One woven piece, colourful and popular across tribes",
    conversion_formula:
      "Not part of the male achievement-graded hierarchy",
    meaning:
      "A widely worn women's shawl, distinct from the achievement-restricted male warrior shawls",
    historical_period:
      "Customary/traditional practice of Nagaland's 16+ Naga tribes, pre-dating and continuing alongside British and post-1963 state administration",
    region_applicable: "Pan-Nagaland / Naga Hills generally",
    states: ["Nagaland"],
    used_in: [
      "A widely worn women's shawl, distinct from the achievement-restricted male warrior shawls",
      "Textile & Handloom",
    ],
    references: [
      "https://www.outlookindia.com/travel/weaving-a-story-the-handloom-shawls-of-nagaland-news-242783",
    ],
    tags: [
      "nagaland",
      "traditional-units",
      "textile-handloom",
      "loukaisa",
      "womens-shawl",
      "naga-weaving",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "nagaland-textile-5",
    slug: "shatni-konyak-womens-wedding-shroud-shawl-textile-nagaland",
    name_english: "Shatni (Konyak women's wedding/shroud shawl)",
    name_sanskrit: "N/A (Konyak vernacular)",
    local_names: ["Shatni"],
    name_hindi: "शात्नी",
    category: "other",
    measurement_type:
      "Garment (life-stage marker, not a length measure)",
    sector: "textile-handloom",
    origin: "Mon district — Konyak Naga homeland",
    modern_equivalent:
      "One woven piece, worn at two life-stage moments",
    conversion_formula:
      "Not applicable — a life-stage marker rather than a subdivided unit",
    meaning:
      "Worn by a Konyak woman on her wedding day, and again wrapped around her body when she dies — the same single garment marking both the beginning and end of her married life",
    historical_period:
      "Customary/traditional practice of Nagaland's 16+ Naga tribes, pre-dating and continuing alongside British and post-1963 state administration",
    region_applicable: "Mon district — Konyak Naga homeland",
    states: ["Nagaland"],
    used_in: [
      "Worn by a Konyak woman on her wedding day, and again wrapped around her body when she dies — the same single garment marking both the beginning and end of her married life",
      "Textile & Handloom",
    ],
    references: [
      "https://www.outlookindia.com/travel/weaving-a-story-the-handloom-shawls-of-nagaland-news-242783",
    ],
    tags: [
      "nagaland",
      "traditional-units",
      "textile-handloom",
      "shatni",
      "konyak",
      "wedding-shawl",
      "shroud",
      "life-stage-marker",
    ],
    created_at: "2024-01-01",
  },

  // ─── 12. Medicine (Ayurveda) (1 unit) ────────────────────────────────────────
  {
    id: "nagaland-med-1",
    slug: "handful-pinch-herbal-preparation-medicine-nagaland",
    name_english: "(Handful/pinch of herbal preparation)",
    name_sanskrit:
      "N/A — no codified weight-dosage system documented for Naga indigenous healing traditions",
    local_names: [],
    name_hindi: "मुट्ठी/चुटकी (अनौपचारिक)",
    category: "volume",
    measurement_type: "Volume (informal)",
    sector: "medicine",
    origin: "Pan-Nagaland / Naga Hills generally",
    modern_equivalent: "Approximated by hand — no fixed weight scale",
    conversion_formula: "No standardised hierarchy",
    meaning:
      "Naga tribes traditionally relied on their own herbal healing knowledge, village healers and animist ritual specialists rather than a codified, Sanskrit-derived Ayurvedic weight-and-dosage system — this sector is therefore left largely unpopulated rather than importing a system not historically practised here",
    historical_period:
      "Customary/traditional practice of Nagaland's 16+ Naga tribes, pre-dating and continuing alongside British and post-1963 state administration",
    region_applicable: "Pan-Nagaland / Naga Hills generally",
    states: ["Nagaland"],
    used_in: [
      "Naga tribes traditionally relied on their own herbal healing knowledge, village healers and animist ritual specialists rather than a codified, Sanskrit-derived Ayurvedic weight-and-dosage system — this sector is therefore left largely unpopulated rather than importing a system not historically practised here",
      "Medicine (Ayurveda)",
    ],
    references: [
      "No standardised metrological reference documented for this tradition",
    ],
    tags: [
      "nagaland",
      "traditional-units",
      "medicine",
      "herbal-healing",
      "handful",
      "pinch",
      "village-healers",
    ],
    created_at: "2024-01-01",
  },

  // ─── 13. Construction & Architecture (2 units) ───────────────────────────────
  {
    id: "nagaland-arch-1",
    slug: "bamboo-timber-body-based-reckoning-architecture-nagaland",
    name_english: "(Bamboo/timber, body-based reckoning)",
    name_sanskrit:
      "N/A — informal, material-based measurement, no fixed named unit documented",
    local_names: [],
    name_hindi: "बांस-लकड़ी (अनौपचारिक)",
    category: "length",
    measurement_type: "Length (informal)",
    sector: "architecture",
    origin: "Pan-Nagaland / Naga Hills generally",
    modern_equivalent:
      "Set by material length and the builder's own body-reference, varying by use",
    conversion_formula: "No standardised hierarchy",
    meaning:
      "Naga village houses and the morung (the men's/bachelors' ceremonial dormitory, central to a village's social and warrior training) were traditionally built using informal bamboo- and timber-based measurement, without a codified length unit canon",
    historical_period:
      "Customary/traditional practice of Nagaland's 16+ Naga tribes, pre-dating and continuing alongside British and post-1963 state administration",
    region_applicable: "Pan-Nagaland / Naga Hills generally",
    states: ["Nagaland"],
    used_in: [
      "Naga village houses and the morung (the men's/bachelors' ceremonial dormitory, central to a village's social and warrior training) were traditionally built using informal bamboo- and timber-based measurement, without a codified length unit canon",
      "Construction & Architecture",
    ],
    references: [
      "No standardised metrological reference documented for this practice",
    ],
    tags: [
      "nagaland",
      "traditional-units",
      "architecture",
      "bamboo",
      "timber",
      "morung",
      "village-houses",
      "body-reckoning",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "nagaland-arch-2",
    slug: "terrace-field-construction-contour-based-reckoning-architecture-nagaland",
    name_english:
      "(Terrace-field construction, contour-based reckoning)",
    name_sanskrit:
      "N/A — engineering by eye and contour, no fixed named unit documented",
    local_names: [],
    name_hindi: "सीढ़ीदार खेत (अनौपचारिक)",
    category: "area",
    measurement_type: "Area/Length (informal, terrain-based)",
    sector: "architecture",
    origin:
      "Kohima district — Angami and Chakhesang Naga homeland (including Khonoma)",
    modern_equivalent:
      "Terrace width and height set by the hillside's own contour, not a fixed unit",
    conversion_formula: "No standardised hierarchy",
    meaning:
      "Angami wet-rice terrace agriculture, most famously at Khonoma, involved sophisticated water-channelling and terrace-wall construction across steep hillsides, engineered by inherited skill and direct observation of the terrain rather than a codified survey-unit system",
    historical_period:
      "Customary/traditional practice of Nagaland's 16+ Naga tribes, pre-dating and continuing alongside British and post-1963 state administration",
    region_applicable:
      "Kohima district — Angami and Chakhesang Naga homeland (including Khonoma)",
    states: ["Nagaland"],
    used_in: [
      "Angami wet-rice terrace agriculture, most famously at Khonoma, involved sophisticated water-channelling and terrace-wall construction across steep hillsides, engineered by inherited skill and direct observation of the terrain rather than a codified survey-unit system",
      "Construction & Architecture",
    ],
    references: [
      "https://grokipedia.com/page/Angami_Naga",
    ],
    tags: [
      "nagaland",
      "traditional-units",
      "architecture",
      "terrace-field",
      "khonoma",
      "angami",
      "water-channelling",
    ],
    created_at: "2024-01-01",
  },
];
