import { Measurement } from "@/types";

export const MEGHALAYA_MEASUREMENTS: Measurement[] = [
  // ─── 1. Transportation & Distance (2 units) ─────────────────────────────────
  {
    id: "meghalaya-trans-1",
    slug: "days-walk-hill-reckoning-distance-meghalaya",
    name_english: "(Day's walk hill reckoning)",
    name_sanskrit:
      "N/A — informal, terrain-based measurement, no fixed named unit documented",
    local_names: [],
    name_hindi: "दिन भर की यात्रा (अनौपचारिक)",
    category: "length",
    measurement_type: "Distance (informal, time-based)",
    sector: "transportation-distance",
    origin: "Pan-Meghalaya generally",
    modern_equivalent:
      "Distance expressed as the number of days' walk required through hill terrain",
    conversion_formula: "No standardised hierarchy",
    meaning:
      "In Meghalaya's steep, forested plateau and hill terrain, traditional inter-village and hill-to-plains trade distance was reckoned by days' walk, the same practice documented across the wider Northeast Indian hill tracts — living root bridges were essential infrastructure for these very trade paths, allowing trade to continue even when rivers were in monsoon spate",
    historical_period:
      "Customary/traditional practice of the Khasi, Jaintia (Pnar) and Garo communities, predating and continuing alongside Jaintia-kingdom and colonial administration",
    region_applicable: "Pan-Meghalaya generally",
    states: ["Meghalaya"],
    used_in: [
      "In Meghalaya's steep, forested plateau and hill terrain, traditional inter-village and hill-to-plains trade distance was reckoned by days' walk, the same practice documented across the wider Northeast Indian hill tracts — living root bridges were essential infrastructure for these very trade paths, allowing trade to continue even when rivers were in monsoon spate",
      "Transportation & Distance",
    ],
    references: ["https://en.wikipedia.org/wiki/Living_root_bridge"],
    tags: [
      "meghalaya",
      "traditional-units",
      "transportation-distance",
      "days-walk",
      "hill-terrain",
      "living-root-bridge",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "meghalaya-trans-2",
    slug: "jonbeel-mela-trade-route-reckoning-distance-meghalaya",
    name_english: "Jonbeel Mela trade-route reckoning",
    name_sanskrit:
      "N/A — a specific fair-route tradition, not a generalisable unit",
    local_names: [],
    name_hindi: "जोनबील मेला मार्ग",
    category: "length",
    measurement_type: "Distance / Route (fair-specific)",
    sector: "transportation-distance",
    origin: "Pan-Meghalaya generally",
    modern_equivalent:
      "A fixed annual meeting point (Jagiroad) rather than a measured distance",
    conversion_formula: "Not applicable — route/event-specific",
    meaning:
      "Illustrates how inter-community trade distance between the Khasi-Jaintia hills and the Assam plains was conventionally organised around a known annual meeting-point rather than a measured distance figure",
    historical_period:
      "Customary/traditional practice of the Khasi, Jaintia (Pnar) and Garo communities, predating and continuing alongside Jaintia-kingdom and colonial administration",
    region_applicable: "Pan-Meghalaya generally",
    states: ["Meghalaya"],
    used_in: [
      "Illustrates how inter-community trade distance between the Khasi-Jaintia hills and the Assam plains was conventionally organised around a known annual meeting-point rather than a measured distance figure",
      "Transportation & Distance",
    ],
    references: [
      "https://www.learncbse.in/from-barter-to-money-class-7-notes/",
    ],
    tags: [
      "meghalaya",
      "traditional-units",
      "transportation-distance",
      "jonbeel-mela",
      "trade-route",
      "jagiroad",
    ],
    created_at: "2024-01-01",
  },

  // ─── 2. Land Measurement (3 units) ──────────────────────────────────────────
  {
    id: "meghalaya-land-1",
    slug: "matrilineal-clan-kur-land-right-land-meghalaya",
    name_english: "(Matrilineal clan/kur land right)",
    name_sanskrit: "N/A — a tenure classification, not a unit of area",
    local_names: ["Ri Kynti (ancestral clan land)"],
    name_hindi: "मातृवंशीय कुल भूमि अधिकार",
    category: "area",
    measurement_type: "Area (customary tenure, not a fixed unit)",
    sector: "land-measurement",
    origin: "Pan-Meghalaya generally",
    modern_equivalent:
      "Not quantified in a standard area unit — reckoned by named plot and matrilineal descent",
    conversion_formula: "No fixed hierarchy",
    meaning:
      "Khasi and Jaintia land is traditionally held as Ri Kynti (ancestral/clan land, inherited through the mother's line, typically to the youngest daughter or Ka Khadduh, who acts as custodian for the whole clan) or Ri Raid (community land under the Hima/Syiem), rather than measured against a standardised area unit — a genuinely distinct land philosophy from the Bigha-Katha systems of the Gangetic plains",
    historical_period:
      "Khasi Hima (Syiem-chiefdom) period, pre-dating and continuing alongside Jaintia and British administration",
    region_applicable: "Pan-Meghalaya generally",
    states: ["Meghalaya"],
    used_in: [
      "Khasi and Jaintia land is traditionally held as Ri Kynti (ancestral/clan land, inherited through the mother's line, typically to the youngest daughter or Ka Khadduh, who acts as custodian for the whole clan) or Ri Raid (community land under the Hima/Syiem), rather than measured against a standardised area unit — a genuinely distinct land philosophy from the Bigha-Katha systems of the Gangetic plains",
      "Land Measurement",
    ],
    references: [
      "https://www.exoticindiaart.com/book/details/coinage-of-jaintiapur-with-account-of-last-days-of-jaintia-raj-haj740/",
    ],
    tags: [
      "meghalaya",
      "traditional-units",
      "land-measurement",
      "ri-kynti",
      "matrilineal",
      "clan-land",
      "ka-khadduh",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "meghalaya-land-2",
    slug: "ri-raid-hima-community-land-meghalaya",
    name_english: "Ri Raid (Hima/community land)",
    name_sanskrit:
      "N/A — a land-tenure category administered by the Syiem-led Dorbar, not a unit of area",
    local_names: ["Ri Raid"],
    name_hindi: "समुदाय भूमि (हिमा)",
    category: "area",
    measurement_type: "Area (land-tenure classification, not a fixed unit)",
    sector: "land-measurement",
    origin:
      "Khasi Hills — Shillong plateau and surrounding Syiem chiefdoms",
    modern_equivalent:
      "Not quantified in a standard unit — administered collectively by the village/Hima Dorbar (council)",
    conversion_formula:
      "Not applicable — a governance category, not a metric hierarchy",
    meaning:
      "Community land under the jurisdiction of a Hima (Khasi chiefdom) headed by an elected Syiem, allocated to individual families for cultivation through the village Dorbar rather than through a surveyed land-record system",
    historical_period:
      "Khasi Hima (Syiem-chiefdom) period, pre-dating and continuing alongside Jaintia and British administration",
    region_applicable:
      "Khasi Hills — Shillong plateau and surrounding Syiem chiefdoms",
    states: ["Meghalaya"],
    used_in: [
      "Community land under the jurisdiction of a Hima (Khasi chiefdom) headed by an elected Syiem, allocated to individual families for cultivation through the village Dorbar rather than through a surveyed land-record system",
      "Land Measurement",
    ],
    references: [
      "https://www.exoticindiaart.com/book/details/coinage-of-jaintiapur-with-account-of-last-days-of-jaintia-raj-haj740/",
    ],
    tags: [
      "meghalaya",
      "traditional-units",
      "land-measurement",
      "ri-raid",
      "hima",
      "syiem",
      "dorbar",
      "community-land",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "meghalaya-land-3",
    slug: "acre-hectare-post-colonial-administrative-units-land-meghalaya",
    name_english: "Acre / Hectare (post-colonial administrative units)",
    name_sanskrit: "एकड / हेक्टेयर",
    local_names: [],
    name_hindi: "एकड़ / हेक्टेयर",
    category: "area",
    measurement_type: "Area",
    sector: "land-measurement",
    origin: "Pan-Meghalaya generally",
    modern_equivalent: "43,560 sq ft (Acre); 10,000 sq m (Hectare)",
    conversion_formula: "100 Are = 1 Hectare; 1 Acre ≈ 0.405 Hectare",
    meaning:
      "Introduced into Meghalaya's land records only through British colonial administration and later state governance, layered on top of, not replacing, the Ri Kynti/Ri Raid customary system",
    historical_period:
      "British colonial period (Khasi & Jaintia Hills District, Assam, from 1835/1874) through post-1972 Meghalaya statehood",
    region_applicable: "Pan-Meghalaya generally",
    states: ["Meghalaya"],
    used_in: [
      "Introduced into Meghalaya's land records only through British colonial administration and later state governance, layered on top of, not replacing, the Ri Kynti/Ri Raid customary system",
      "Land Measurement",
    ],
    references: ["https://en.wikipedia.org/wiki/Acre"],
    tags: [
      "meghalaya",
      "traditional-units",
      "land-measurement",
      "acre",
      "hectare",
      "colonial-survey",
    ],
    created_at: "2024-01-01",
  },

  // ─── 3. Livestock & Dairy (1 unit) ──────────────────────────────────────────
  {
    id: "meghalaya-dairy-1",
    slug: "ser-seer-post-contact-market-unit-dairy-meghalaya",
    name_english: "Ser (Seer) — post-contact market unit",
    name_sanskrit: "सेर (Sēra)",
    local_names: [],
    name_hindi: "सेर",
    category: "volume",
    measurement_type: "Weight/Volume",
    sector: "livestock-dairy",
    origin: "Pan-Meghalaya generally",
    modern_equivalent: "~0.93 kg / ~0.93 L",
    conversion_formula: "1/40 Mon",
    meaning:
      "Used only where produce is sold into wider Assamese/plains markets via colonial-era and later road contact; no dairy-exclusive Khasi/Garo unit is documented, and livestock-keeping in Meghalaya's hills was historically smaller-scale than the Gangetic plains dairy economy",
    historical_period:
      "British colonial period (Khasi & Jaintia Hills District, Assam, from 1835/1874) through post-1972 Meghalaya statehood",
    region_applicable: "Pan-Meghalaya generally",
    states: ["Meghalaya"],
    used_in: [
      "Used only where produce is sold into wider Assamese/plains markets via colonial-era and later road contact; no dairy-exclusive Khasi/Garo unit is documented, and livestock-keeping in Meghalaya's hills was historically smaller-scale than the Gangetic plains dairy economy",
      "Livestock & Dairy",
    ],
    references: [
      "https://grokipedia.com/page/Seer_(unit)",
      "https://en.wikipedia.org/wiki/Maund",
    ],
    tags: [
      "meghalaya",
      "traditional-units",
      "livestock-dairy",
      "ser",
      "seer",
      "market-contact",
    ],
    created_at: "2024-01-01",
  },

  // ─── 4. Household & Daily Life (3 units) ─────────────────────────────────────
  {
    id: "meghalaya-hh-1",
    slug: "chutki-muthi-pinch-fistful-household-meghalaya",
    name_english: "Chutki / Muthi (pinch/fistful)",
    name_sanskrit:
      "N/A (general North Indian vernacular, adopted through colonial-era and later administrative/market contact)",
    local_names: [],
    name_hindi: "चुटकी / मुट्ठी",
    category: "volume",
    measurement_type: "Volume (informal)",
    sector: "household",
    origin: "Pan-Meghalaya generally",
    modern_equivalent: "Pinch to ~50–100 g fistful",
    conversion_formula: "Chutki < Muthi",
    meaning:
      "Everyday informal cooking-quantity gestures, alongside each community's own largely undocumented household terms",
    historical_period:
      "British colonial period (Khasi & Jaintia Hills District, Assam, from 1835/1874) through post-1972 Meghalaya statehood",
    region_applicable: "Pan-Meghalaya generally",
    states: ["Meghalaya"],
    used_in: [
      "Everyday informal cooking-quantity gestures, alongside each community's own largely undocumented household terms",
      "Household & Daily Life",
    ],
    references: ["https://en.wikipedia.org/wiki/Handful"],
    tags: [
      "meghalaya",
      "traditional-units",
      "household",
      "chutki",
      "muthi",
      "pinch",
      "fistful",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "meghalaya-hh-2",
    slug: "knup-bamboo-rain-shield-household-meghalaya",
    name_english:
      "Knup (bamboo rain-shield — a utility item, not a volume unit)",
    name_sanskrit:
      "N/A — a named object, not a measurement unit; included here only for its cultural cross-reference",
    local_names: ["Knup"],
    name_hindi: "क्नुप (बांस वर्षा कवच)",
    category: "other",
    measurement_type: "Utility item (not a measurement unit)",
    sector: "household",
    origin:
      "Khasi Hills — Shillong plateau and surrounding Syiem chiefdoms",
    modern_equivalent: "Not applicable",
    conversion_formula: "Not applicable",
    meaning:
      "A traditional Khasi conical bamboo rain-shield, famously referenced in the Nartiang monolith origin legend (where a woman challenged the giant Mar Phalyngki to use a market stone slab as his 'knup' instead) — included to show how everyday objects, not abstract units, often carry Khasi oral history",
    historical_period:
      "Customary/traditional practice of the Khasi, Jaintia (Pnar) and Garo communities, predating and continuing alongside Jaintia-kingdom and colonial administration",
    region_applicable:
      "Khasi Hills — Shillong plateau and surrounding Syiem chiefdoms",
    states: ["Meghalaya"],
    used_in: [
      "A traditional Khasi conical bamboo rain-shield, famously referenced in the Nartiang monolith origin legend (where a woman challenged the giant Mar Phalyngki to use a market stone slab as his 'knup' instead) — included to show how everyday objects, not abstract units, often carry Khasi oral history",
      "Household & Daily Life",
    ],
    references: [
      "https://westjaintiahills.gov.in/tourist-place/nartiang-monoliths/",
      "https://tribal.study/tribals-in-north-north-east-regions-of-india/jaintia-tribe-meghalaya-tradition/",
    ],
    tags: [
      "meghalaya",
      "traditional-units",
      "household",
      "knup",
      "bamboo-rain-shield",
      "nartiang",
      "khasi-legend",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "meghalaya-hh-3",
    slug: "bamboo-internode-container-household-meghalaya",
    name_english: "(Bamboo internode container — informal volume measure)",
    name_sanskrit:
      "N/A — vessel-based, no fixed named hierarchy documented",
    local_names: [],
    name_hindi: "बांस पात्र (अनौपचारिक)",
    category: "volume",
    measurement_type: "Volume (utility, informal)",
    sector: "household",
    origin: "Pan-Meghalaya generally",
    modern_equivalent:
      "Determined by the natural internode size of the bamboo used",
    conversion_formula: "No standardised hierarchy",
    meaning:
      "Hollowed bamboo sections are used across Khasi, Jaintia and Garo households to store and informally measure rice and local rice-beer",
    historical_period:
      "Customary/traditional practice of the Khasi, Jaintia (Pnar) and Garo communities, predating and continuing alongside Jaintia-kingdom and colonial administration",
    region_applicable: "Pan-Meghalaya generally",
    states: ["Meghalaya"],
    used_in: [
      "Hollowed bamboo sections are used across Khasi, Jaintia and Garo households to store and informally measure rice and local rice-beer",
      "Household & Daily Life",
    ],
    references: [
      "No standardised metrological reference documented for this practice",
    ],
    tags: [
      "meghalaya",
      "traditional-units",
      "household",
      "bamboo-internode",
      "rice-storage",
      "rice-beer",
    ],
    created_at: "2024-01-01",
  },

  // ─── 5. Gold & Jewellery (2 units) ──────────────────────────────────────────
  {
    id: "meghalaya-gold-1",
    slug: "coral-silver-glass-bead-ornament-gold-meghalaya",
    name_english:
      "(Coral, silver and glass-bead ornament — no gold-weight hierarchy documented)",
    name_sanskrit: "N/A — count/craft-based, not a weight unit",
    local_names: [],
    name_hindi: "प्रवाल-चांदी-कांच आभूषण (अनौपचारिक)",
    category: "other",
    measurement_type: "Count/Craft unit (informal)",
    sector: "gold-jewellery",
    origin:
      "Khasi Hills — Shillong plateau and surrounding Syiem chiefdoms",
    modern_equivalent:
      "Valued by craftsmanship, bead-count and material rarity rather than by a weight scale",
    conversion_formula: "No fixed hierarchy",
    meaning:
      "Khasi women traditionally wear elaborate coral-bead necklaces (paila) and silver ornaments (including the ksiar crown worn during the Nongkrem dance) rather than gold weighed by a Tola-type scale — echoing the same silver/bead-preference pattern documented among Assam's, Tripura's and Arunachal's hill communities",
    historical_period:
      "Customary/traditional practice of the Khasi, Jaintia (Pnar) and Garo communities, predating and continuing alongside Jaintia kingdom and colonial administration",
    region_applicable:
      "Khasi Hills — Shillong plateau and surrounding Syiem chiefdoms",
    states: ["Meghalaya"],
    used_in: [
      "Khasi women traditionally wear elaborate coral-bead necklaces (paila) and silver ornaments (including the ksiar crown worn during the Nongkrem dance) rather than gold weighed by a Tola-type scale — echoing the same silver/bead-preference pattern documented among Assam's, Tripura's and Arunachal's hill communities",
      "Gold & Jewellery",
    ],
    references: [
      "https://www.exoticindiaart.com/book/details/coinage-of-jaintiapur-with-account-of-last-days-of-jaintia-raj-haj740/",
    ],
    tags: [
      "meghalaya",
      "traditional-units",
      "gold-jewellery",
      "paila",
      "coral-beads",
      "ksiar-crown",
      "nongkrem",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "meghalaya-gold-2",
    slug: "tola-bullion-reference-gold-meghalaya",
    name_english: "Tola (bullion reference)",
    name_sanskrit: "तोला (Tola)",
    local_names: [],
    name_hindi: "तोला",
    category: "weight",
    measurement_type: "Weight",
    sector: "gold-jewellery",
    origin: "Pan-Meghalaya generally",
    modern_equivalent: "~11.66 g",
    conversion_formula: "12 Masha = 1 Tola",
    meaning:
      "Used only in gold and silver bullion transactions with plains jewelers reached via colonial-era and later market integration — not a traditional Khasi/Jaintia/Garo unit in its own right",
    historical_period:
      "British colonial period (Khasi & Jaintia Hills District, Assam, from 1835/1874) through post-1972 Meghalaya statehood",
    region_applicable: "Pan-Meghalaya generally",
    states: ["Meghalaya"],
    used_in: [
      "Used only in gold and silver bullion transactions with plains jewelers reached via colonial-era and later market integration — not a traditional Khasi/Jaintia/Garo unit in its own right",
      "Gold & Jewellery",
    ],
    references: ["https://en.wikipedia.org/wiki/Tola_(unit)"],
    tags: [
      "meghalaya",
      "traditional-units",
      "gold-jewellery",
      "tola",
      "bullion",
      "plains-jewelers",
    ],
    created_at: "2024-01-01",
  },

  // ─── 6. Seed & Crop (Agriculture) (2 units) ─────────────────────────────────
  {
    id: "meghalaya-agri-1",
    slug: "basket-load-jhum-reckoning-agriculture-meghalaya",
    name_english: "(Basket-load Jhum reckoning)",
    name_sanskrit:
      "N/A — vessel-based, no fixed named weight/volume unit documented",
    local_names: [],
    name_hindi: "टोकरी-भार (अनौपचारिक)",
    category: "volume",
    measurement_type: "Weight/Volume (informal)",
    sector: "agriculture",
    origin: "Pan-Meghalaya generally",
    modern_equivalent:
      "Determined by the size of the woven bamboo carrying basket (khoh) in use",
    conversion_formula: "No standardised hierarchy",
    meaning:
      "Jhum (shifting-cultivation) harvests of rice, millet and maize across the Khasi, Jaintia and Garo hills, along with cash crops like betel nut (kwai), ginger and oranges — long traded via the ancient hill-to-plains trade corridors — were traditionally carried and quantified basket-by-basket rather than by a fixed named unit",
    historical_period:
      "Customary/traditional practice of the Khasi, Jaintia (Pnar) and Garo communities, predating and continuing alongside Jaintia kingdom and colonial administration",
    region_applicable: "Pan-Meghalaya generally",
    states: ["Meghalaya"],
    used_in: [
      "Jhum (shifting-cultivation) harvests of rice, millet and maize across the Khasi, Jaintia and Garo hills, along with cash crops like betel nut (kwai), ginger and oranges — long traded via the ancient hill-to-plains trade corridors — were traditionally carried and quantified basket-by-basket rather than by a fixed named unit",
      "Seed & Crop (Agriculture)",
    ],
    references: [
      "https://meghalaya.pscnotes.com/meghalaya-history/ancient-trade-routes/",
    ],
    tags: [
      "meghalaya",
      "traditional-units",
      "agriculture",
      "jhum",
      "khoh",
      "basket-load",
      "shifting-cultivation",
      "kwai",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "meghalaya-agri-2",
    slug: "ser-seer-post-contact-market-unit-agriculture-meghalaya",
    name_english: "Ser (Seer) — post-contact market unit",
    name_sanskrit: "सेर (Sēra)",
    local_names: [],
    name_hindi: "सेर",
    category: "weight",
    measurement_type: "Weight",
    sector: "agriculture",
    origin: "Pan-Meghalaya generally",
    modern_equivalent: "~0.93 kg",
    conversion_formula: "16 Chittak = 1 Ser",
    meaning:
      "Used only where produce (betel nut, ginger, oranges) is sold into wider Assamese/plains markets via colonial-era roads, not as a traditional in-village unit",
    historical_period:
      "British colonial period (Khasi & Jaintia Hills District, Assam, from 1835/1874) through post-1972 Meghalaya statehood",
    region_applicable: "Pan-Meghalaya generally",
    states: ["Meghalaya"],
    used_in: [
      "Used only where produce (betel nut, ginger, oranges) is sold into wider Assamese/plains markets via colonial-era roads, not as a traditional in-village unit",
      "Seed & Crop (Agriculture)",
    ],
    references: [
      "https://grokipedia.com/page/Seer_(unit)",
      "https://en.wikipedia.org/wiki/Maund",
    ],
    tags: [
      "meghalaya",
      "traditional-units",
      "agriculture",
      "ser",
      "seer",
      "cash-crops",
      "market-roads",
    ],
    created_at: "2024-01-01",
  },

  // ─── 7. Currency & Money (4 units) ──────────────────────────────────────────
  {
    id: "meghalaya-curr-1",
    slug: "ka-ri-tynrap-cowrie-shells-currency-meghalaya",
    name_english: "Ka Ri Tynrap (cowrie shells)",
    name_sanskrit: "कपर्दक (Kapardaka)",
    local_names: ["Ka Ri Tynrap"],
    name_hindi: "कौड़ी",
    category: "currency",
    measurement_type: "Currency",
    sector: "currency-money",
    origin: "Pan-Meghalaya generally",
    modern_equivalent: "1 natural cowrie shell",
    conversion_formula: "Base unit of Khasi traditional exchange",
    meaning:
      "The Khasi tribe's own currency, used for trade and barter for centuries and still ceremonially exchanged at weddings and childbirth as a marker of Khasi identity",
    historical_period:
      "Customary/traditional practice of the Khasi, Jaintia (Pnar) and Garo communities, predating and continuing alongside Jaintia kingdom and colonial administration",
    region_applicable: "Pan-Meghalaya generally",
    states: ["Meghalaya"],
    used_in: [
      "The Khasi tribe's own currency, used for trade and barter for centuries and still ceremonially exchanged at weddings and childbirth as a marker of Khasi identity",
      "Currency & Money",
    ],
    references: [
      "https://english.mahamoney.com/what-is-khasi-tribe-famous-for",
    ],
    tags: [
      "meghalaya",
      "traditional-units",
      "currency-money",
      "ka-ri-tynrap",
      "cowrie-shells",
      "khasi-tribe",
      "ceremonial-exchange",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "meghalaya-curr-2",
    slug: "jaintiapur-rupee-anonymous-silver-coin-currency-meghalaya",
    name_english: "Jaintiapur Rupee (anonymous silver coin)",
    name_sanskrit:
      "N/A — devotional Shiva/kingdom legends, never the ruler's own name",
    local_names: [],
    name_hindi: "जयंतियापुर रुपया",
    category: "currency",
    measurement_type: "Currency",
    sector: "currency-money",
    origin:
      "Jaintia Hills — Jowai, Nartiang (former Jaintia kingdom heartland)",
    modern_equivalent: "~8.5–9.4 g silver",
    conversion_formula:
      "The Jaintia kingdom's standard silver coin denomination",
    meaning:
      "Struck at Jaintiapur; the near-total absence of the ruling king's name across the whole known Jaintia coin series — highly unusual among Indian regional kingdoms — most likely reflects the distinctive, non-absolute status of kingship in matrilineal Khasi-Jaintia political culture, rather than any external prohibition",
    historical_period:
      "Jaintia (Syiem) kingdom period (traditionally from the 11th century CE to British annexation in 1835 CE)",
    region_applicable:
      "Jaintia Hills — Jowai, Nartiang (former Jaintia kingdom heartland)",
    states: ["Meghalaya"],
    used_in: [
      "Struck at Jaintiapur; the near-total absence of the ruling king's name across the whole known Jaintia coin series — highly unusual among Indian regional kingdoms — most likely reflects the distinctive, non-absolute status of kingship in matrilineal Khasi-Jaintia political culture, rather than any external prohibition",
      "Currency & Money",
    ],
    references: [
      "https://theshillongtimes.com/2026/06/06/coins-of-the-jaintia-kingdom/",
      "https://www.mintageworld.com/media/detail/14504/",
    ],
    tags: [
      "meghalaya",
      "traditional-units",
      "currency-money",
      "jaintiapur-rupee",
      "silver-coin",
      "jaintia-kingdom",
      "matrilineal-kingship",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "meghalaya-curr-3",
    slug: "iron-as-a-store-of-value-currency-meghalaya",
    name_english: "Iron (as a store of value)",
    name_sanskrit: "N/A — a valuable commodity, not a coined unit",
    local_names: [],
    name_hindi: "लोहा (मूल्यवान वस्तु)",
    category: "other",
    measurement_type: "Commodity-value unit (informal)",
    sector: "currency-money",
    origin:
      "Khasi Hills — Shillong plateau and surrounding Syiem chiefdoms",
    modern_equivalent:
      "Value set by quantity and quality of smelted iron, not a fixed denomination",
    conversion_formula: "No fixed hierarchy",
    meaning:
      "The Khasi Hills' 2,000-year-old iron-smelting industry made iron itself a store of tradeable value alongside — and, in the hill interior, often instead of — coined money",
    historical_period:
      "Khasi Hima (Syiem-chiefdom) period, pre-dating and continuing alongside Jaintia and British administration",
    region_applicable:
      "Khasi Hills — Shillong plateau and surrounding Syiem chiefdoms",
    states: ["Meghalaya"],
    used_in: [
      "The Khasi Hills' 2,000-year-old iron-smelting industry made iron itself a store of tradeable value alongside — and, in the hill interior, often instead of — coined money",
      "Currency & Money",
    ],
    references: [
      "https://meghalayamonitor.com/cock-bull-stones-of-jaintia-kingdom-still-exist/",
    ],
    tags: [
      "meghalaya",
      "traditional-units",
      "currency-money",
      "iron",
      "store-of-value",
      "iron-smelting",
      "khasi-hima",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "meghalaya-curr-4",
    slug: "indian-rupee-post-1835-1947-currency-meghalaya",
    name_english: "Indian Rupee (post-1835/1947)",
    name_sanskrit: "N/A",
    local_names: [],
    name_hindi: "रुपया",
    category: "currency",
    measurement_type: "Currency",
    sector: "currency-money",
    origin: "Pan-Meghalaya generally",
    modern_equivalent: "Standard Indian Rupee",
    conversion_formula:
      "Superseded the Jaintiapur Rupee and, in day-to-day transactions, the barter/cowrie economy",
    meaning:
      "Became Meghalaya's standard currency following the 1835 British annexation of Jaintiapur and, later, Indian independence and Meghalaya's 1972 statehood",
    historical_period:
      "British colonial period (Khasi & Jaintia Hills District, Assam, from 1835/1874) through post-1972 Meghalaya statehood",
    region_applicable: "Pan-Meghalaya generally",
    states: ["Meghalaya"],
    used_in: [
      "Became Meghalaya's standard currency following the 1835 British annexation of Jaintiapur and, later, Indian independence and Meghalaya's 1972 statehood",
      "Currency & Money",
    ],
    references: ["https://en.wikipedia.org/wiki/Meghalaya"],
    tags: [
      "meghalaya",
      "traditional-units",
      "currency-money",
      "indian-rupee",
      "post-colonial",
      "statehood",
    ],
    created_at: "2024-01-01",
  },

  // ─── 8. Storage & Transportation (3 units) ───────────────────────────────────
  {
    id: "meghalaya-stor-1",
    slug: "bamboo-granary-informal-capacity-storage-meghalaya",
    name_english: "(Bamboo granary — informal capacity)",
    name_sanskrit: "N/A — structure-based, no fixed named unit documented",
    local_names: [],
    name_hindi: "बांस भंडार (अनौपचारिक)",
    category: "volume",
    measurement_type: "Volume (utility, informal)",
    sector: "storage-transport",
    origin: "Pan-Meghalaya generally",
    modern_equivalent:
      "Capacity set by the size of the individual household granary structure",
    conversion_formula: "No standardised hierarchy",
    meaning:
      "Raised bamboo-and-thatch granaries store Jhum harvests across Khasi, Jaintia and Garo villages, with capacity reckoned informally",
    historical_period:
      "Customary/traditional practice of the Khasi, Jaintia (Pnar) and Garo communities, predating and continuing alongside Jaintia kingdom and colonial administration",
    region_applicable: "Pan-Meghalaya generally",
    states: ["Meghalaya"],
    used_in: [
      "Raised bamboo-and-thatch granaries store Jhum harvests across Khasi, Jaintia and Garo villages, with capacity reckoned informally",
      "Storage & Transportation",
    ],
    references: [
      "No standardised metrological reference documented for this practice",
    ],
    tags: [
      "meghalaya",
      "traditional-units",
      "storage-transport",
      "bamboo-granary",
      "jhum-harvest",
      "informal-capacity",
      "household-granary",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "meghalaya-stor-2",
    slug: "porter-headload-reckoning-storage-meghalaya",
    name_english: "(Porter/headload reckoning)",
    name_sanskrit: "N/A — body-based, no fixed named unit documented",
    local_names: [],
    name_hindi: "सिर-भार (अनौपचारिक)",
    category: "weight",
    measurement_type: "Weight (informal, load-based)",
    sector: "storage-transport",
    origin:
      "Khasi Hills — Shillong plateau and surrounding Syiem chiefdoms",
    modern_equivalent:
      "One person's comfortable carrying load over hill-trail terrain",
    conversion_formula: "No standardised hierarchy",
    meaning:
      "Given Meghalaya's steep plateau-and-valley terrain, goods were traditionally moved by human porterage along footpaths and across living root bridges, with loads reckoned informally rather than by a named weight unit",
    historical_period:
      "Customary/traditional practice of the Khasi, Jaintia (Pnar) and Garo communities, predating and continuing alongside Jaintia kingdom and colonial administration",
    region_applicable:
      "Khasi Hills — Shillong plateau and surrounding Syiem chiefdoms",
    states: ["Meghalaya"],
    used_in: [
      "Given Meghalaya's steep plateau-and-valley terrain, goods were traditionally moved by human porterage along footpaths and across living root bridges, with loads reckoned informally rather than by a named weight unit",
      "Storage & Transportation",
    ],
    references: [
      "https://en.wikipedia.org/wiki/Living_root_bridge",
    ],
    tags: [
      "meghalaya",
      "traditional-units",
      "storage-transport",
      "headload",
      "porterage",
      "hill-trails",
      "living-root-bridge",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "meghalaya-stor-3",
    slug: "ser-mon-seer-maund-post-contact-market-unit-storage-meghalaya",
    name_english: "Ser / Mon (Seer/Maund) — post-contact market unit",
    name_sanskrit: "सेर / मन",
    local_names: [],
    name_hindi: "सेर / मन",
    category: "weight",
    measurement_type: "Weight",
    sector: "storage-transport",
    origin: "Pan-Meghalaya generally",
    modern_equivalent: "~0.93 kg Ser; 40 Ser = 1 Mon ≈ 37.3 kg",
    conversion_formula: "40 Ser = 1 Mon",
    meaning:
      "Used for goods once they reach roadhead markets and depots connected to the Assam/plains trading network, including via the Jonbeel Mela",
    historical_period:
      "British colonial period (Khasi & Jaintia Hills District, Assam, from 1835/1874) through post-1972 Meghalaya statehood",
    region_applicable: "Pan-Meghalaya generally",
    states: ["Meghalaya"],
    used_in: [
      "Used for goods once they reach roadhead markets and depots connected to the Assam/plains trading network, including via the Jonbeel Mela",
      "Storage & Transportation",
    ],
    references: [
      "https://grokipedia.com/page/Seer_(unit)",
      "https://en.wikipedia.org/wiki/Maund",
    ],
    tags: [
      "meghalaya",
      "traditional-units",
      "storage-transport",
      "ser",
      "mon",
      "seer",
      "maund",
      "market-depots",
      "jonbeel-mela",
    ],
    created_at: "2024-01-01",
  },

  // ─── 9. Religious & Cultural (4 units) ───────────────────────────────────────
  {
    id: "meghalaya-rel-1",
    slug: "moo-shynrang-moo-kynthai-menhirs-dolmens-religious-meghalaya",
    name_english:
      "Moo Shynrang / Moo Kynthai (menhirs and dolmens) — memorial markers, not a subdivided unit",
    name_sanskrit:
      "N/A — memorial stone forms, not a measurement hierarchy",
    local_names: ["Moo Shynrang (upright) / Moo Kynthai (flat)"],
    name_hindi: "मू श्यनरंग / मू क्यंथाई (स्मारक शिला)",
    category: "other",
    measurement_type: "Monument type (not a unit)",
    sector: "religious-cultural",
    origin:
      "Jaintia Hills — Jowai, Nartiang (former Jaintia kingdom heartland)",
    modern_equivalent:
      "Individual stones up to 8 m tall (the tallest at Nartiang, said to have been erected by U Mar Phalyngki, reaches roughly 26 feet)",
    conversion_formula:
      "Not applicable — memorial objects, not a hierarchical unit",
    meaning:
      "The Nartiang Monoliths (locally 'Kper Mawbynna', Monolith Garden), erected by Jaintia kings and clans between roughly 1500 and 1835 CE, form the largest single collection of megaliths in Northeast India — upright Moo Shynrang stones honour male ancestors and victories; flat Moo Kynthai dolmens honour female ancestors, reflecting the deeply matrilineal-yet-dual character of Khasi-Jaintia ancestor worship",
    historical_period:
      "Ancient megalithic tradition, attested from at least the medieval period (Nartiang monoliths dated 1500–1835 CE) and continuing today",
    region_applicable:
      "Jaintia Hills — Jowai, Nartiang (former Jaintia kingdom heartland)",
    states: ["Meghalaya"],
    used_in: [
      "The Nartiang Monoliths (locally 'Kper Mawbynna', Monolith Garden), erected by Jaintia kings and clans between roughly 1500 and 1835 CE, form the largest single collection of megaliths in Northeast India — upright Moo Shynrang stones honour male ancestors and victories; flat Moo Kynthai dolmens honour female ancestors, reflecting the deeply matrilineal-yet-dual character of Khasi-Jaintia ancestor worship",
      "Religious & Cultural",
    ],
    references: [
      "https://westjaintiahills.gov.in/tourist-place/nartiang-monoliths/",
      "https://tribal.study/tribals-in-north-north-east-regions-of-india/jaintia-tribe-meghalaya-tradition/",
    ],
    tags: [
      "meghalaya",
      "traditional-units",
      "religious-cultural",
      "nartiang-monoliths",
      "moo-shynrang",
      "moo-kynthai",
      "menhir",
      "dolmen",
      "matrilineal-ancestor-worship",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "meghalaya-rel-2",
    slug: "behdienkhlam-festival-timing-religious-meghalaya",
    name_english: "Behdienkhlam festival timing",
    name_sanskrit:
      "N/A — a fixed annual festival following the sowing season, not a subdivided numeric time unit",
    local_names: ["Behdienkhlam"],
    name_hindi: "बेहदेइंखलाम पर्व",
    category: "time",
    measurement_type: "Calendar (agricultural/ritual festival marker)",
    sector: "religious-cultural",
    origin:
      "Jaintia Hills — Jowai, Nartiang (former Jaintia kingdom heartland)",
    modern_equivalent:
      "Held annually in July, after the sowing season, over four days",
    conversion_formula:
      "Not applicable — a fixed seasonal festival rather than a numeric time subdivision",
    meaning:
      "The largest festival of the Niamtre (indigenous Pnar) religion, held mainly at Jowai to drive away evil spirits and disease (the name combines 'behdein', to drive away, and 'khlam', disease) and to invoke a good harvest — historically linked to deliverance from a past cholera epidemic",
    historical_period:
      "Customary/traditional practice of the Khasi, Jaintia (Pnar) and Garo communities, predating and continuing alongside Jaintia kingdom and colonial administration",
    region_applicable:
      "Jaintia Hills — Jowai, Nartiang (former Jaintia kingdom heartland)",
    states: ["Meghalaya"],
    used_in: [
      "The largest festival of the Niamtre (indigenous Pnar) religion, held mainly at Jowai to drive away evil spirits and disease (the name combines 'behdein', to drive away, and 'khlam', disease) and to invoke a good harvest — historically linked to deliverance from a past cholera epidemic",
      "Religious & Cultural",
    ],
    references: ["https://en.wikipedia.org/wiki/Behdienkhlam"],
    tags: [
      "meghalaya",
      "traditional-units",
      "religious-cultural",
      "behdienkhlam",
      "niamtre",
      "pnar-festival",
      "jowai",
      "harvest-festival",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "meghalaya-rel-3",
    slug: "chad-sukra-festival-timing-religious-meghalaya",
    name_english: "Chad Sukra festival timing",
    name_sanskrit:
      "N/A — a fixed pre-sowing festival date, not a subdivided numeric time unit",
    local_names: ["Chad Sukra"],
    name_hindi: "चाद सुकरा पर्व",
    category: "time",
    measurement_type: "Calendar (agricultural festival marker)",
    sector: "religious-cultural",
    origin:
      "Jaintia Hills — Jowai, Nartiang (former Jaintia kingdom heartland)",
    modern_equivalent: "Held before the sowing season each year",
    conversion_formula:
      "Not applicable — a seasonal marker rather than a numeric subdivision",
    meaning:
      "A Pnar (Jaintia) festival marking the start of the agricultural sowing season, celebrated at Jowai",
    historical_period:
      "Customary/traditional practice of the Khasi, Jaintia (Pnar) and Garo communities, predating and continuing alongside Jaintia kingdom and colonial administration",
    region_applicable:
      "Jaintia Hills — Jowai, Nartiang (former Jaintia kingdom heartland)",
    states: ["Meghalaya"],
    used_in: [
      "A Pnar (Jaintia) festival marking the start of the agricultural sowing season, celebrated at Jowai",
      "Religious & Cultural",
    ],
    references: [
      "https://www.outlooktraveller.com/destinations/india/all-about-behdienkhlam-meghalayas-monsoon-festival-that-wards-off-evil-and-welcomes-a-good-harvest",
    ],
    tags: [
      "meghalaya",
      "traditional-units",
      "religious-cultural",
      "chad-sukra",
      "pnar-festival",
      "sowing-season",
      "jowai",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "meghalaya-rel-4",
    slug: "days-walk-pilgrimage-ancestral-site-reckoning-religious-meghalaya",
    name_english: "(Day's-walk pilgrimage/ancestral-site reckoning)",
    name_sanskrit:
      "N/A — informal, terrain-based measurement, no fixed named unit documented",
    local_names: [],
    name_hindi: "यात्रा-दिवस (अनौपचारिक)",
    category: "length",
    measurement_type: "Distance (informal, time-based)",
    sector: "religious-cultural",
    origin: "Pan-Meghalaya generally",
    modern_equivalent:
      "Distance to a sacred grove or monolith site expressed in days' walk",
    conversion_formula: "No standardised hierarchy",
    meaning:
      "As with everyday travel, ritual and ancestor-worship travel distance to monolith sites and sacred groves (Law Kyntang) was traditionally reckoned by days' walk rather than by a fixed-length unit such as the Krosha or Yojana used in the Hindu Gangetic-plains pilgrimage tradition",
    historical_period:
      "Customary/traditional practice of the Khasi, Jaintia (Pnar) and Garo communities, predating and continuing alongside Jaintia kingdom and colonial administration",
    region_applicable: "Pan-Meghalaya generally",
    states: ["Meghalaya"],
    used_in: [
      "As with everyday travel, ritual and ancestor-worship travel distance to monolith sites and sacred groves (Law Kyntang) was traditionally reckoned by days' walk rather than by a fixed-length unit such as the Krosha or Yojana used in the Hindu Gangetic-plains pilgrimage tradition",
      "Religious & Cultural",
    ],
    references: [
      "No standardised metrological reference documented for this practice",
    ],
    tags: [
      "meghalaya",
      "traditional-units",
      "religious-cultural",
      "days-walk",
      "pilgrimage",
      "sacred-groves",
      "law-kyntang",
      "monolith-sites",
    ],
    created_at: "2024-01-01",
  },

  // ─── 10. Trade & Commerce (5 units) ─────────────────────────────────────────
  {
    id: "meghalaya-trade-1",
    slug: "iron-trade-commodity-quasi-currency-meghalaya",
    name_english: "(Iron as trade commodity/quasi-currency)",
    name_sanskrit: "N/A — a valuable traded commodity, not a coined unit",
    local_names: [],
    name_hindi: "लोहा (व्यापारिक वस्तु)",
    category: "other",
    measurement_type: "Commodity-value unit (informal)",
    sector: "trade-commerce",
    origin:
      "Khasi Hills — Shillong plateau and surrounding Syiem chiefdoms",
    modern_equivalent:
      "Value set by iron quality and quantity, not a fixed denomination",
    conversion_formula: "No fixed hierarchy",
    meaning:
      "Radiocarbon dating of iron slag (eit-nar) from Khasi Hills smelting sites confirmed a continuous iron industry of more than 2,000 years; 18th-century British trader Robert Lindsay recorded acquiring 'iron of the finest quality' from the Khasi Hills as one of the region's most prized exports, alongside sugar, honey, cotton and silk",
    historical_period:
      "Khasi Hima (Syiem-chiefdom) period, pre-dating and continuing alongside Jaintia and British administration",
    region_applicable:
      "Khasi Hills — Shillong plateau and surrounding Syiem chiefdoms",
    states: ["Meghalaya"],
    used_in: [
      "Radiocarbon dating of iron slag (eit-nar) from Khasi Hills smelting sites confirmed a continuous iron industry of more than 2,000 years; 18th-century British trader Robert Lindsay recorded acquiring 'iron of the finest quality' from the Khasi Hills as one of the region's most prized exports, alongside sugar, honey, cotton and silk",
      "Trade & Commerce",
    ],
    references: [
      "https://meghalayamonitor.com/cock-bull-stones-of-jaintia-kingdom-still-exist/",
    ],
    tags: [
      "meghalaya",
      "traditional-units",
      "trade-commerce",
      "iron-smelting",
      "eit-nar",
      "khasi-hills",
      "commodity-currency",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "meghalaya-trade-2",
    slug: "ka-ri-tynrap-cowrie-shells-trade-meghalaya",
    name_english: "Ka Ri Tynrap (cowrie shells)",
    name_sanskrit: "कपर्दक (Kapardaka)",
    local_names: ["Ka Ri Tynrap"],
    name_hindi: "कौड़ी",
    category: "currency",
    measurement_type: "Currency",
    sector: "trade-commerce",
    origin: "Pan-Meghalaya generally",
    modern_equivalent:
      "1 natural cowrie shell (Cypraea moneta), no fixed metal weight equivalent documented",
    conversion_formula:
      "Base unit of Khasi traditional exchange; no further documented counting-ladder (unlike Bengal's Kori-Gonda-Pan-Kahan system)",
    meaning:
      "Used for trade and barter within Khasi communities for centuries, and still exchanged today as ceremonial gifts at weddings and childbirth, carrying symbolic value even where it no longer functions as day-to-day money",
    historical_period:
      "Customary/traditional practice of the Khasi, Jaintia (Pnar) and Garo communities, predating and continuing alongside Jaintia kingdom and colonial administration",
    region_applicable: "Pan-Meghalaya generally",
    states: ["Meghalaya"],
    used_in: [
      "Used for trade and barter within Khasi communities for centuries, and still exchanged today as ceremonial gifts at weddings and childbirth, carrying symbolic value even where it no longer functions as day-to-day money",
      "Trade & Commerce",
    ],
    references: [
      "https://english.mahamoney.com/what-is-khasi-tribe-famous-for",
    ],
    tags: [
      "meghalaya",
      "traditional-units",
      "trade-commerce",
      "ka-ri-tynrap",
      "cowrie-shells",
      "khasi",
      "ceremonial-gifts",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "meghalaya-trade-3",
    slug: "jaintiapur-rupee-anonymous-silver-coin-trade-meghalaya",
    name_english: "Jaintiapur Rupee (anonymous silver coin)",
    name_sanskrit:
      "N/A — legends invoke Shiva and the kingdom, never the king's own name",
    local_names: [],
    name_hindi: "जयंतियापुर रुपया",
    category: "currency",
    measurement_type: "Currency",
    sector: "trade-commerce",
    origin:
      "Jaintia Hills — Jowai, Nartiang (former Jaintia kingdom heartland)",
    modern_equivalent: "~8.5–9.4 g silver (individual issues vary)",
    conversion_formula:
      "The Jaintia kingdom's standard coin denomination",
    meaning:
      "Struck at the Jaintiapur mint from at least the 17th century; uniquely among Indian princely coinages, Jaintia kings customarily never placed their own name on their coins, instead using devotional Shiva legends and the formula 'Lord of Jayantipur' — a practice historians link to the distinctive, non-absolute status of the king in matrilineal Khasi-Jaintia society",
    historical_period:
      "Jaintia (Syiem) kingdom period (traditionally from the 11th century CE to British annexation in 1835 CE)",
    region_applicable:
      "Jaintia Hills — Jowai, Nartiang (former Jaintia kingdom heartland)",
    states: ["Meghalaya"],
    used_in: [
      "Struck at the Jaintiapur mint from at least the 17th century; uniquely among Indian princely coinages, Jaintia kings customarily never placed their own name on their coins, instead using devotional Shiva legends and the formula 'Lord of Jayantipur' — a practice historians link to the distinctive, non-absolute status of the king in matrilineal Khasi-Jaintia society",
      "Trade & Commerce",
    ],
    references: [
      "https://theshillongtimes.com/2026/06/06/coins-of-the-jaintia-kingdom/",
      "https://www.mintageworld.com/media/detail/14504/",
    ],
    tags: [
      "meghalaya",
      "traditional-units",
      "trade-commerce",
      "jaintiapur-rupee",
      "silver-coin",
      "jaintia-kingdom",
      "nartiang",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "meghalaya-trade-4",
    slug: "jonbeel-mela-barter-fair-trade-meghalaya",
    name_english: "Jonbeel Mela (barter fair)",
    name_sanskrit: "N/A — an annual barter institution, not a unit of value",
    local_names: [],
    name_hindi: "जोनबील मेला",
    category: "other",
    measurement_type:
      "Exchange system (non-monetary, living tradition)",
    sector: "trade-commerce",
    origin: "Pan-Meghalaya generally",
    modern_equivalent:
      "Goods exchanged directly, hill produce for plains produce, without an intervening currency",
    conversion_formula: "Not applicable — a fair, not a subdivided unit",
    meaning:
      "An annual barter fair dating from at least the 15th century, where Khasi and Jaintia hill communities historically met Tiwa, Karbi and Assamese plains traders at Jagiroad (on the Assam-Meghalaya border) to exchange hill produce (ginger, betel nut, iron tools) for plains produce (rice, fish, vegetables) — a living barter tradition that continues to this day",
    historical_period:
      "Customary/traditional practice of the Khasi, Jaintia (Pnar) and Garo communities, predating and continuing alongside Jaintia kingdom and colonial administration",
    region_applicable: "Pan-Meghalaya generally",
    states: ["Meghalaya"],
    used_in: [
      "An annual barter fair dating from at least the 15th century, where Khasi and Jaintia hill communities historically met Tiwa, Karbi and Assamese plains traders at Jagiroad (on the Assam-Meghalaya border) to exchange hill produce (ginger, betel nut, iron tools) for plains produce (rice, fish, vegetables) — a living barter tradition that continues to this day",
      "Trade & Commerce",
    ],
    references: [
      "https://www.learncbse.in/from-barter-to-money-class-7-notes/",
    ],
    tags: [
      "meghalaya",
      "traditional-units",
      "trade-commerce",
      "jonbeel-mela",
      "barter-fair",
      "hill-produce",
      "living-tradition",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "meghalaya-trade-5",
    slug: "british-indian-rupee-post-1835-trade-meghalaya",
    name_english: "British Indian / Indian Rupee (post-1835)",
    name_sanskrit: "N/A",
    local_names: [],
    name_hindi: "रुपया",
    category: "currency",
    measurement_type: "Currency",
    sector: "trade-commerce",
    origin: "Pan-Meghalaya generally",
    modern_equivalent: "Standard Rupee",
    conversion_formula:
      "Superseded the Jaintiapur Rupee and reduced (without eliminating) the ceremonial role of cowrie exchange",
    meaning:
      "Became the standard currency following the 1835 British annexation of the Jaintia kingdom and, later, the incorporation of the Khasi Hima under British paramountcy",
    historical_period:
      "British colonial period (Khasi & Jaintia Hills District, Assam, from 1835/1874) through post-1972 Meghalaya statehood",
    region_applicable: "Pan-Meghalaya generally",
    states: ["Meghalaya"],
    used_in: [
      "Became the standard currency following the 1835 British annexation of the Jaintia kingdom and, later, the incorporation of the Khasi Hima under British paramountcy",
      "Trade & Commerce",
    ],
    references: ["https://en.wikipedia.org/wiki/Rupee"],
    tags: [
      "meghalaya",
      "traditional-units",
      "trade-commerce",
      "british-rupee",
      "indian-rupee",
      "colonial-era",
    ],
    created_at: "2024-01-01",
  },

  // ─── 11. Textile & Handloom (4 units) ────────────────────────────────────────
  {
    id: "meghalaya-textile-1",
    slug: "loin-loom-garment-based-reckoning-textile-meghalaya",
    name_english: "(Loin-loom, garment-based reckoning)",
    name_sanskrit:
      "N/A — informal, garment-specific measurement, no fixed named length-unit documented",
    local_names: [],
    name_hindi: "अनौपचारिक वस्त्र-मापन",
    category: "length",
    measurement_type: "Length (informal)",
    sector: "textile-handloom",
    origin: "Pan-Meghalaya generally",
    modern_equivalent:
      "Set by the finished size of the specific garment being woven, using simple wood-and-bamboo apparatus that can be assembled in a day or two",
    conversion_formula: "No standardised hierarchy",
    meaning:
      "Khasi and Garo weavers work on a floor/loin loom (Garo weavers now often use a raised version) without reference to a codified length-unit system — cloth is woven directly to the size of the finished jainsem, jainpein or dakmanda garment",
    historical_period:
      "Customary/traditional practice of the Khasi, Jaintia (Pnar) and Garo communities, predating and continuing alongside Jaintia kingdom and colonial administration",
    region_applicable: "Pan-Meghalaya generally",
    states: ["Meghalaya"],
    used_in: [
      "Khasi and Garo weavers work on a floor/loin loom (Garo weavers now often use a raised version) without reference to a codified length-unit system — cloth is woven directly to the size of the finished jainsem, jainpein or dakmanda garment",
      "Textile & Handloom",
    ],
    references: [
      "https://en.wikipedia.org/wiki/Eri_silk_in_Meghalaya",
      "https://garlandmag.com/article/ryndia-silk-of-the-khasi-hills-meghalaya/",
    ],
    tags: [
      "meghalaya",
      "traditional-units",
      "textile-handloom",
      "loin-loom",
      "floor-loom",
      "garment-reckoning",
      "dakmanda",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "meghalaya-textile-2",
    slug: "ryndia-eri-peace-silk-textile-meghalaya",
    name_english: "Ryndia (Eri 'peace' silk)",
    name_sanskrit:
      "N/A (Khasi vernacular term for Eri silk and the garment made from it)",
    local_names: ["Ryndia"],
    name_hindi: "रिन्दिया (एरी रेशम)",
    category: "other",
    measurement_type: "Garment/fabric (type unit, not a length measure)",
    sector: "textile-handloom",
    origin: "Ri-Bhoi district — the epicentre of Eri/Ryndia silk weaving",
    modern_equivalent:
      "One woven piece — a shawl, stole or turban-length of undyed or maroon-and-mustard plaid cloth",
    conversion_formula:
      "Not a subdivided unit — reckoned as a finished textile piece; GI Tag No: 1112 (registered for Ryndia yarns and textiles)",
    meaning:
      "Produced entirely by Khasi women, from silkworm rearing through spinning and natural dyeing (turmeric, onion skin, and the plant-based mordants Sohkhu and Soh lung), centred on Ri-Bhoi district; worn by Khasi men as a shawl or turban on religious occasions and by women as the jainsem wraparound",
    historical_period:
      "Customary/traditional practice of the Khasi, Jaintia (Pnar) and Garo communities, predating and continuing alongside Jaintia kingdom and colonial administration",
    region_applicable:
      "Ri-Bhoi district — the epicentre of Eri/Ryndia silk weaving",
    states: ["Meghalaya"],
    used_in: [
      "Produced entirely by Khasi women, from silkworm rearing through spinning and natural dyeing (turmeric, onion skin, and the plant-based mordants Sohkhu and Soh lung), centred on Ri-Bhoi district; worn by Khasi men as a shawl or turban on religious occasions and by women as the jainsem wraparound",
      "Textile & Handloom",
    ],
    references: [
      "https://en.wikipedia.org/wiki/Eri_silk_in_Meghalaya",
      "https://garlandmag.com/article/ryndia-silk-of-the-khasi-hills-meghalaya/",
    ],
    tags: [
      "meghalaya",
      "traditional-units",
      "textile-handloom",
      "ryndia",
      "eri-silk",
      "peace-silk",
      "ri-bhoi",
      "gi-tag",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "meghalaya-textile-3",
    slug: "jainsem-jainpein-jainspong-textile-meghalaya",
    name_english: "Jainsem / Jainpein / Jainspong (women's garments)",
    name_sanskrit: "N/A (Khasi garment terms)",
    local_names: ["জাইনসেਮ / জাইনপেইন / জাইনস্পং"],
    name_hindi: "जैनसेम / जैनपेइन / जैनस्पोंग",
    category: "other",
    measurement_type: "Garment (type unit, not a length measure)",
    sector: "textile-handloom",
    origin:
      "Khasi Hills — Shillong plateau and surrounding Syiem chiefdoms",
    modern_equivalent: "Each an individually sized woven piece",
    conversion_formula:
      "Not a subdivided unit — reckoned as finished garments",
    meaning:
      "The layered traditional dress of Khasi women, each piece woven to size rather than cut from a length measured in a codified unit",
    historical_period:
      "Customary/traditional practice of the Khasi, Jaintia (Pnar) and Garo communities, predating and continuing alongside Jaintia kingdom and colonial administration",
    region_applicable:
      "Khasi Hills — Shillong plateau and surrounding Syiem chiefdoms",
    states: ["Meghalaya"],
    used_in: [
      "The layered traditional dress of Khasi women, each piece woven to size rather than cut from a length measured in a codified unit",
      "Textile & Handloom",
    ],
    references: [
      "https://en.wikipedia.org/wiki/Eri_silk_in_Meghalaya",
      "https://garlandmag.com/article/ryndia-silk-of-the-khasi-hills-meghalaya/",
    ],
    tags: [
      "meghalaya",
      "traditional-units",
      "textile-handloom",
      "jainsem",
      "jainpein",
      "jainspong",
      "khasi-women",
      "traditional-dress",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "meghalaya-textile-4",
    slug: "khyrwang-jaintia-striped-cloth-textile-meghalaya",
    name_english: "Khyrwang (Jaintia striped cloth)",
    name_sanskrit: "N/A (Khasi/Jaintia vernacular term)",
    local_names: ["Khyrwang"],
    name_hindi: "खयरवांग",
    category: "other",
    measurement_type: "Fabric (type unit, not a length measure)",
    sector: "textile-handloom",
    origin:
      "Jaintia Hills — Jowai, Nartiang (former Jaintia kingdom heartland)",
    modern_equivalent: "One woven length, individually produced",
    conversion_formula: "Not a subdivided unit",
    meaning:
      "A striped eri cloth ('the delight of mountaineers') traded between the Khasi Hills and the Mikir (Karbi) Hills; while Khasis traditionally obtained their silk thread ready-made from the Assam valley, the Syntengs (Jaintias) are recorded as having woven their own Khyrwang cloth in white-mauve or chocolate-white patterns",
    historical_period:
      "Jaintia (Syiem) kingdom period (traditionally from the 11th century CE to British annexation in 1835 CE)",
    region_applicable:
      "Jaintia Hills — Jowai, Nartiang (former Jaintia kingdom heartland)",
    states: ["Meghalaya"],
    used_in: [
      "A striped eri cloth ('the delight of mountaineers') traded between the Khasi Hills and the Mikir (Karbi) Hills; while Khasis traditionally obtained their silk thread ready-made from the Assam valley, the Syntengs (Jaintias) are recorded as having woven their own Khyrwang cloth in white-mauve or chocolate-white patterns",
      "Textile & Handloom",
    ],
    references: ["https://en.wikipedia.org/wiki/Eri_silk_in_Meghalaya"],
    tags: [
      "meghalaya",
      "traditional-units",
      "textile-handloom",
      "khyrwang",
      "jaintia",
      "striped-cloth",
      "synteng",
    ],
    created_at: "2024-01-01",
  },

  // ─── 12. Medicine (Ayurveda) (2 units) ───────────────────────────────────────
  {
    id: "meghalaya-med-1",
    slug: "handful-pinch-herbal-preparation-medicine-meghalaya",
    name_english: "(Handful/pinch of herbal preparation)",
    name_sanskrit:
      "N/A — no codified weight-dosage system documented for Meghalaya's indigenous healing traditions",
    local_names: [],
    name_hindi: "मुट्ठी/चुटकी (अनौपचारिक)",
    category: "volume",
    measurement_type: "Volume (informal)",
    sector: "medicine",
    origin: "Pan-Meghalaya generally",
    modern_equivalent: "Approximated by hand — no fixed weight scale",
    conversion_formula: "No standardised hierarchy",
    meaning:
      "Khasi, Jaintia and Garo communities traditionally relied on their own herbal-healing knowledge and ritual specialists (nongkhan, priests) rather than a codified, Sanskrit-derived Ayurvedic weight-and-dosage system — this sector is therefore left largely unpopulated rather than importing a system not historically practised here",
    historical_period:
      "Customary/traditional practice of the Khasi, Jaintia (Pnar) and Garo communities, predating and continuing alongside Jaintia kingdom and colonial administration",
    region_applicable: "Pan-Meghalaya generally",
    states: ["Meghalaya"],
    used_in: [
      "Khasi, Jaintia and Garo communities traditionally relied on their own herbal-healing knowledge and ritual specialists (nongkhan, priests) rather than a codified, Sanskrit-derived Ayurvedic weight-and-dosage system — this sector is therefore left largely unpopulated rather than importing a system not historically practised here",
      "Medicine (Ayurveda)",
    ],
    references: [
      "No standardised metrological reference documented for this tradition",
    ],
    tags: [
      "meghalaya",
      "traditional-units",
      "medicine",
      "herbal-healing",
      "handful",
      "pinch",
      "nongkhan",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "meghalaya-med-2",
    slug: "possible-ayurvedic-access-jaintiapur-court-medicine-meghalaya",
    name_english:
      "(Possible Ayurvedic access via the Jaintiapur royal Hindu court)",
    name_sanskrit:
      "N/A — plausible but not independently confirmed for this workbook",
    local_names: [],
    name_hindi: "जयंतियापुर राजदरबार (अपुष्ट)",
    category: "weight",
    measurement_type: "Weight (not independently confirmed)",
    sector: "medicine",
    origin:
      "Jaintia Hills — Jowai, Nartiang (former Jaintia kingdom heartland)",
    modern_equivalent: "Not independently verified",
    conversion_formula: "Not independently verified",
    meaning:
      "The Jaintia royal family (Syiem Sad Malngiang) were Hindu by religion even while remaining matrilineal Khasi-Jaintia by custom, which makes some familiarity with classical Ayurvedic weight units (Ratti-Masha-Karsha-Pala) plausible at court — but no source specifically documenting this practice in Jaintiapur was located, so it is flagged rather than asserted",
    historical_period:
      "Jaintia (Syiem) kingdom period (traditionally from the 11th century CE to British annexation in 1835 CE)",
    region_applicable:
      "Jaintia Hills — Jowai, Nartiang (former Jaintia kingdom heartland)",
    states: ["Meghalaya"],
    used_in: [
      "The Jaintia royal family (Syiem Sad Malngiang) were Hindu by religion even while remaining matrilineal Khasi-Jaintia by custom, which makes some familiarity with classical Ayurvedic weight units (Ratti-Masha-Karsha-Pala) plausible at court — but no source specifically documenting this practice in Jaintiapur was located, so it is flagged rather than asserted",
      "Medicine (Ayurveda)",
    ],
    references: [
      "Flagged for further verification — not confirmed by an accessible source at time of writing",
    ],
    tags: [
      "meghalaya",
      "traditional-units",
      "medicine",
      "ayurvedic-access",
      "jaintiapur",
      "court-medicine",
    ],
    created_at: "2024-01-01",
  },

  // ─── 13. Construction & Architecture (2 units) ──────────────────────────────
  {
    id: "meghalaya-arch-1",
    slug: "bamboo-timber-body-based-reckoning-architecture-meghalaya",
    name_english: "(Bamboo/timber, body-based reckoning)",
    name_sanskrit:
      "N/A — informal, material-based measurement, no fixed named unit documented",
    local_names: [],
    name_hindi: "बांस-लकड़ी (अनौपचारिक)",
    category: "length",
    measurement_type: "Length (informal)",
    sector: "architecture",
    origin: "Pan-Meghalaya generally",
    modern_equivalent:
      "Set by material length and the builder's own body-reference, varying by use",
    conversion_formula: "No standardised hierarchy",
    meaning:
      "Traditional Khasi and Garo houses (the Khasi 'ing' and the Garo 'nokmong') were built using informal bamboo- and timber-based measurement, without a codified Angula-Hasta-Danda type canon",
    historical_period:
      "Customary/traditional practice of the Khasi, Jaintia (Pnar) and Garo communities, predating and continuing alongside Jaintia kingdom and colonial administration",
    region_applicable: "Pan-Meghalaya generally",
    states: ["Meghalaya"],
    used_in: [
      "Traditional Khasi and Garo houses (the Khasi 'ing' and the Garo 'nokmong') were built using informal bamboo- and timber-based measurement, without a codified Angula-Hasta-Danda type canon",
      "Construction & Architecture",
    ],
    references: [
      "No standardised metrological reference documented for this practice",
    ],
    tags: [
      "meghalaya",
      "traditional-units",
      "architecture",
      "bamboo",
      "timber",
      "ing",
      "nokmong",
      "body-reckoning",
    ],
    created_at: "2024-01-01",
  },
  {
    id: "meghalaya-arch-2",
    slug: "living-root-bridge-growth-time-unit-architecture-meghalaya",
    name_english:
      "(Living root bridge — growth-time as the 'unit', not a spatial one)",
    name_sanskrit:
      "N/A — a construction method measured in years/generations, not in a spatial unit",
    local_names: ["Jingkieng Jri / Jing Kieng Deng Jri"],
    name_hindi: "जिंगकिएंग जरी (जीवित मूल पुल)",
    category: "time",
    measurement_type: "Time-to-maturity (construction reckoning)",
    sector: "architecture",
    origin:
      "Khasi Hills — Shillong plateau and surrounding Syiem chiefdoms",
    modern_equivalent:
      "10–15 years of guided growth to become walkable; some mature bridges are 100+ years old and still strengthening",
    conversion_formula:
      "Not a spatial hierarchy — a generational time-scale of growth replaces a measured construction schedule",
    meaning:
      "War Khasi villages in the southern Khasi Hills (e.g. Nongriat, Mawlynnong) train the aerial roots of the Ficus elastica rubber tree across rivers using betel-nut trunk scaffolding, guiding a living bridge into shape over one to two generations rather than 'building' it in a fixed span of time — arguably Meghalaya's most distinctive contribution to any global inventory of traditional construction practice",
    historical_period:
      "Customary/traditional practice of the Khasi, Jaintia (Pnar) and Garo communities, predating and continuing alongside Jaintia-kingdom and colonial administration",
    region_applicable:
      "Khasi Hills — Shillong plateau and surrounding Syiem chiefdoms",
    states: ["Meghalaya"],
    used_in: [
      "War Khasi villages in the southern Khasi Hills (e.g. Nongriat, Mawlynnong) train the aerial roots of the Ficus elastica rubber tree across rivers using betel-nut trunk scaffolding, guiding a living bridge into shape over one to two generations rather than 'building' it in a fixed span of time — arguably Meghalaya's most distinctive contribution to any global inventory of traditional construction practice",
      "Construction & Architecture",
    ],
    references: ["https://en.wikipedia.org/wiki/Living_root_bridge"],
    tags: [
      "meghalaya",
      "traditional-units",
      "architecture",
      "living-root-bridge",
      "jingkieng-jri",
      "ficus-elastica",
      "war-khasi",
    ],
    created_at: "2024-01-01",
  },
];
