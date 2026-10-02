import json
import re

agri_rows = [
    (1, "Vadla Ginja", "వడ్ల గింజ", "Vadla Ginja", "Dhānya", "Seed", 1, "Single grain", "Individual grain", "Seed reference", "Agriculture", "Paddy grain used as the smallest agricultural reference.", "Ancient", "Andhra Pradesh", "Telugu Agricultural Traditions"),
    (2, "Yava", "యవ", "Yava", "Yava", "Length/Seed", 2, "Grain-based unit", "≈2.4 mm", "Fine agricultural measurements", "Agriculture", "Barley grain used in traditional measurements.", "Ancient", "Andhra Pradesh", "Arthashastra"),
    (3, "Guriginja", "గురిగింజ", "Guriginja", "Guñjā (Raktikā)", "Weight", 3, "Seed weight", "≈0.12 g", "Seed weighing", "Agriculture", "Red Gunja seed used as a standard weight.", "Ancient", "Andhra Pradesh", "Ayurvedic Texts"),
    (4, "Manjadi", "మంజడి", "Manjadi", "—", "Weight", 4, "Larger than Guriginja", "≈0.26 g", "Seed measurement", "Agriculture", "Seed used for weighing valuable seeds and produce.", "Ancient", "Rayalaseema", "Telugu Lexicon"),
    (5, "Tula", "తులం", "Tulam", "Tulā", "Weight", 5, "Traditional weight unit", "≈11.66 g", "Seed and spice trade", "Agriculture", "Used for weighing seeds, spices and herbs.", "Medieval", "Andhra Pradesh", "Madras Presidency Records"),
    (6, "Pala", "పలం", "Palam", "Pala", "Weight", 6, "1 Pala = 4 Karsha", "≈48 g", "Produce weighing", "Agriculture", "Used to weigh grains and agricultural products.", "Ancient", "Andhra Pradesh", "Charaka Samhita"),
    (7, "Sola", "సోల", "Sola", "—", "Capacity", 7, "Small grain measure", "≈180–200 ml (regional variation)", "Seed measurement", "Agriculture", "Small household measure for seeds and grains.", "Medieval", "Coastal Andhra", "Telugu Village Traditions"),
    (8, "Kuncham", "కుంచం", "Kuncham", "Kuñcaka", "Capacity", 8, "Multiple Sola", "≈0.7–0.8 L (regional variation)", "Grain measurement", "Agriculture", "Traditional vessel used for measuring grains.", "Medieval", "Andhra Pradesh", "Andhra Gazetteers"),
    (9, "Manika", "మానిక", "Manika", "Mānikā", "Capacity", 9, "Multiple Kuncham", "≈1.4–1.6 L (regional variation)", "Paddy measurement", "Agriculture", "Standard grain measuring vessel.", "Medieval", "Andhra Pradesh", "Telugu Inscriptions"),
    (10, "Adda", "అడ్డ", "Adda", "—", "Capacity", 10, "2 Manikas", "Regional variation", "Grain trade", "Agriculture", "Medium-sized measure used by farmers.", "Medieval", "Andhra Pradesh", "Revenue Records"),
    (11, "Maraka", "మరక", "Maraka", "—", "Capacity", 11, "Multiple Adda", "≈10–12 L (regional variation)", "Grain storage", "Agriculture", "Principal grain measure in village markets.", "Medieval", "Andhra Pradesh", "Andhra Revenue Records"),
    (12, "Tumu", "తూము", "Tumu", "Droṇa (related)", "Capacity", 12, "8 Maraka = 1 Tumu (regional variation)", "≈80–100 L (regional variation)", "Harvest storage", "Agriculture", "Large unit used for harvested paddy.", "Medieval", "Andhra Pradesh", "Telugu Agricultural Records"),
    (13, "Putti", "పుట్టి", "Putti", "Pūti", "Capacity", 13, "Multiple Tumu", "Regional variation", "Bulk grain storage", "Agriculture", "Large storage measure used by farmers.", "Medieval", "Andhra Pradesh", "Andhra Gazetteers"),
    (14, "Garise", "గరిసె", "Garise", "—", "Capacity", 14, "Basket measure", "Regional variation", "Grain storage", "Agriculture", "Bamboo basket used for measuring and storing grains.", "Traditional", "Andhra Pradesh", "Village Agricultural Practices"),
    (15, "Basta", "బస్తా", "Basta", "—", "Storage Measure", 15, "Sack measure", "Commodity dependent", "Grain storage", "Agriculture", "Traditional jute sack used for harvested produce.", "Colonial", "Andhra Pradesh", "Agricultural Market Records"),
    (16, "Moota", "మూట", "Moota", "—", "Bundle Measure", 16, "Bundle of produce", "Commodity dependent", "Crop transport", "Agriculture", "Bundle used for carrying harvested crops.", "Traditional", "Andhra Pradesh", "Rural Farming Traditions"),
    (17, "Katta", "కట్ట", "Katta", "—", "Bundle Measure", 17, "Bundle of stalks", "Commodity dependent", "Harvest collection", "Agriculture", "Bundle of paddy or crop stalks tied after harvesting.", "Traditional", "Andhra Pradesh", "Telugu Agricultural Customs"),
    (18, "Meda", "మేడ", "Meda", "—", "Storage Structure", 18, "Grain heap", "Variable", "Grain preservation", "Agriculture", "Raised platform used for temporary grain storage.", "Traditional", "Andhra Pradesh", "Village Granary Records"),
    (19, "Gade", "గాదె", "Gade", "Koṣṭha", "Storage Structure", 19, "Granary", "Variable", "Long-term storage", "Agriculture", "Traditional granary for preserving paddy and cereals.", "Medieval–Modern", "Andhra Pradesh", "Andhra Rural Architecture"),
    (20, "Kotta", "కొట్టం", "Kotta", "Koṣṭha", "Bulk Storage", 20, "Largest storage structure", "Variable", "Community grain storage", "Agriculture", "Large village grain store used after harvest.", "Medieval", "Andhra Pradesh", "Andhra State Gazetteers")
]

trade_rows = [
    (1, "Guriginja", "గురిగింజ", "Guriginja", "Guñjā (Raktikā)", "Weight", 1, "Seed weight", "≈0.12 g", "Gold and gems", "Trade & Commerce", "Gunja seed used by merchants for weighing precious goods.", "Ancient", "Andhra Pradesh", "Ayurvedic Texts"),
    (2, "Manjadi", "మంజడి", "Manjadi", "—", "Weight", 2, "Larger than Guriginja", "≈0.26 g", "Jewellery trade", "Trade & Commerce", "Seed used as a standard commercial weight.", "Ancient", "Rayalaseema", "Telugu Lexicon"),
    (3, "Masha", "మాష", "Masha", "Māṣa", "Weight", 3, "8 Ratti = 1 Masha", "≈0.97 g", "Medicine and spice trade", "Trade & Commerce", "Used for weighing spices and valuable commodities.", "Ancient", "Andhra Pradesh", "Charaka Samhita"),
    (4, "Karsha", "కర్శ", "Karsha", "Karṣa", "Weight", 4, "12 Masha = 1 Karsha", "≈12 g", "Commercial weighing", "Trade & Commerce", "Standard weight used in markets.", "Ancient", "Andhra Pradesh", "Arthashastra"),
    (5, "Tula", "తులం", "Tulam", "Tulā", "Weight", 5, "Traditional weight unit", "≈11.66 g", "Gold and silver trade", "Trade & Commerce", "Widely used by jewellers and merchants.", "Medieval", "Andhra Pradesh", "Madras Presidency Records"),
    (6, "Pala", "పలం", "Palam", "Pala", "Weight", 6, "1 Pala = 4 Karsha", "≈48 g", "Grocery trade", "Trade & Commerce", "Used for grains, jaggery and spices.", "Ancient", "Andhra Pradesh", "Charaka Samhita"),
    (7, "Seeru", "సేరు", "Seeru", "Ser", "Weight/Capacity", 7, "Regional unit", "≈0.93 kg", "Market trade", "Trade & Commerce", "Standard market measure for grains.", "Colonial", "Andhra Pradesh", "Madras Weights & Measures"),
    (8, "Maund", "మణుగు", "Manugu (Maund)", "—", "Weight", 8, "40 Seeru = 1 Maund", "≈37.3 kg", "Wholesale trade", "Trade & Commerce", "Bulk commercial weight used for agricultural produce.", "Colonial", "Andhra Pradesh", "Madras Presidency Records"),
    (9, "Sola", "సోల", "Sola", "—", "Capacity", 9, "Small grain measure", "≈180–200 ml (regional variation)", "Retail grain sales", "Trade & Commerce", "Used by village merchants.", "Medieval", "Coastal Andhra", "Telugu Village Traditions"),
    (10, "Kuncham", "కుంచం", "Kuncham", "Kuñcaka", "Capacity", 10, "Multiple Sola", "≈0.7–0.8 L", "Grain markets", "Trade & Commerce", "Traditional grain measuring vessel.", "Medieval", "Andhra Pradesh", "Andhra Gazetteers"),
    (11, "Manika", "మానిక", "Manika", "Mānikā", "Capacity", 11, "Multiple Kuncham", "≈1.4–1.6 L", "Grain trade", "Trade & Commerce", "Standard market measure for paddy.", "Medieval", "Andhra Pradesh", "Telugu Inscriptions"),
    (12, "Adda", "అడ్డ", "Adda", "—", "Capacity", 12, "2 Manikas", "Regional variation", "Paddy trade", "Trade & Commerce", "Medium-sized grain measuring unit.", "Medieval", "Andhra Pradesh", "Revenue Records"),
    (13, "Maraka", "మరక", "Maraka", "—", "Capacity", 13, "Multiple Adda", "≈10–12 L", "Grain markets", "Trade & Commerce", "Widely used commercial grain measure.", "Medieval", "Andhra Pradesh", "Andhra Revenue Records"),
    (14, "Tumu", "తూము", "Tumu", "Droṇa (related)", "Capacity", 14, "8 Maraka = 1 Tumu (regional variation)", "≈80–100 L", "Wholesale grain trade", "Trade & Commerce", "Large measure for bulk grain transactions.", "Medieval", "Andhra Pradesh", "Andhra Agricultural Records"),
    (15, "Putti", "పుట్టి", "Putti", "Pūti", "Capacity", 15, "Multiple Tumu", "Regional variation", "Bulk trade", "Trade & Commerce", "Large commercial storage and trade unit.", "Medieval", "Andhra Pradesh", "Andhra Gazetteers"),
    (16, "Garise", "గరిసె", "Garise", "—", "Capacity", 16, "Basket measure", "Regional variation", "Grain markets", "Trade & Commerce", "Bamboo basket used for measuring and selling grain.", "Traditional", "Andhra Pradesh", "Village Market Traditions"),
    (17, "Basta", "బస్తా", "Basta", "—", "Storage/Trade", 17, "Sack measure", "Commodity dependent", "Commodity transport", "Trade & Commerce", "Standard jute sack used in agricultural markets.", "Colonial", "Andhra Pradesh", "Agricultural Market Records"),
    (18, "Moota", "మూట", "Moota", "—", "Bundle Measure", 18, "Bundle of goods", "Commodity dependent", "Market transport", "Trade & Commerce", "Bundle used by merchants to transport goods.", "Traditional", "Andhra Pradesh", "Telugu Trade Customs"),
    (19, "Candy", "ఖండి", "Candy", "Khaṇḍī (related)", "Bulk Weight", 19, "Multiple Maunds", "≈227 kg (regional variation)", "Export trade", "Trade & Commerce", "Bulk weight used for cotton, tobacco and spices.", "Colonial", "Andhra Pradesh", "East India Company Records"),
    (20, "Bale", "బేల్", "Bale", "—", "Commercial Bundle", 20, "Multiple bundles", "Commodity dependent", "Textile and cotton trade", "Trade & Commerce", "Standard bale used for transporting cotton and textiles.", "Colonial", "Andhra Pradesh", "Madras Trade Records")
]

arch_rows = [
    (1, "Paramanu", "పరమాణువు", "Paramanuvu", "Paramāṇu", "Length", 1, "Smallest theoretical unit", "Theoretical", "Temple architecture", "Architecture", "Smallest conceptual unit described in ancient architectural texts.", "Ancient", "Andhra Pradesh", "Mānasāra"),
    (2, "Raji", "రజి", "Raji", "Rajī", "Length", 2, "Larger than Paramāṇu", "Theoretical", "Architectural calculations", "Architecture", "Minute unit used in Vāstu calculations.", "Ancient", "Andhra Pradesh", "Mayamata"),
    (3, "Yava", "యవం", "Yavam", "Yava", "Length", 3, "8 Yava = 1 Angula", "≈2.4 mm", "Stone carving", "Architecture", "Barley grain used as a basic linear measure.", "Ancient", "Andhra Pradesh", "Mānasāra"),
    (4, "Angula", "అంగుళం", "Angulam", "Aṅgula", "Length", 4, "8 Yava = 1 Angula", "≈1.9 cm", "Temple construction", "Architecture", "Finger width measurement used by architects and sculptors.", "Ancient", "Andhra Pradesh", "Mayamata"),
    (5, "Velu", "వేలు", "Velu", "Aṅgula (related)", "Length", 5, "Equivalent to finger width", "≈1.9 cm", "Local construction", "Architecture", "Telugu traditional finger-width measure.", "Medieval", "Andhra Pradesh", "Telugu Lexicon"),
    (6, "Vitasti", "వితస్తి", "Vitasti", "Vitasti", "Length", 6, "12 Angula = 1 Vitasti", "≈22.8 cm", "Building layout", "Architecture", "Palm-span used for laying out buildings.", "Ancient", "Andhra Pradesh", "Mānasāra"),
    (7, "Hasta", "హస్తం", "Hastam", "Hasta", "Length", 7, "24 Angula = 1 Hasta", "≈45.7 cm", "Temple construction", "Architecture", "Cubit widely used in temples, houses and sculpture.", "Satavahana–Vijayanagara", "Andhra Pradesh", "Śilpa Śāstra"),
    (8, "Aratni", "అరత్ని", "Aratni", "Aratni", "Length", 8, "Elbow to fingertip", "≈41 cm", "Sculpture", "Architecture", "Cubit variation used in idol and pillar carving.", "Ancient", "Andhra Pradesh", "Mayamata"),
    (9, "Tala", "తాళం", "Talam", "Tāla", "Proportional Measure", 9, "Body proportion unit", "Variable", "Idol making", "Architecture", "Canonical proportion used in sculpting deities.", "Ancient", "Andhra Pradesh", "Śilpa Śāstra"),
    (10, "Danda", "దండం", "Dandam", "Daṇḍa", "Length", 10, "4 Hasta = 1 Danda", "≈1.83 m", "Land and building layout", "Architecture", "Measuring rod used by architects.", "Ancient", "Andhra Pradesh", "Arthashastra"),
    (11, "Kolu", "కోలు", "Kolu", "Daṇḍa (related)", "Length", 11, "Measuring rod", "≈1.8–2.0 m (regional variation)", "House construction", "Architecture", "Wooden measuring rod used by local builders.", "Medieval", "Andhra Pradesh", "Telugu Building Traditions"),
    (12, "Gajam", "గజం", "Gajam", "Gaja", "Length", 12, "≈2 Hasta", "0.9144 m", "Building construction", "Architecture", "Traditional yard measure still recognised in land and construction.", "Medieval–Modern", "Andhra Pradesh", "Madras Presidency Manual"),
    (13, "Rajju", "రజ్జు", "Rajju", "Rajju", "Length", 13, "Rope measure", "Variable", "Site planning", "Architecture", "Measuring rope used for laying foundations.", "Ancient", "Andhra Pradesh", "Mānasāra"),
    (14, "Pada", "పదం", "Padam", "Pada", "Length", 14, "12 Angula", "≈22.8 cm", "Structural planning", "Architecture", "Quarter-module used in architectural design.", "Ancient", "Andhra Pradesh", "Mayamata"),
    (15, "Kishku Hasta", "కిష్కు హస్తం", "Kishku Hastam", "Kiṣku Hasta", "Length", 15, "Variant of Hasta", "≈41–45 cm", "Residential buildings", "Architecture", "Cubit prescribed for domestic structures.", "Ancient", "Andhra Pradesh", "Mānasāra"),
    (16, "Prajapatya Hasta", "ప్రజాపత్య హస్తం", "Prajapatya Hastam", "Prājāpatya Hasta", "Length", 16, "Variant of Hasta", "≈48 cm", "Sacred structures", "Architecture", "Cubit recommended for temples and sacred buildings.", "Ancient", "Andhra Pradesh", "Mayamata"),
    (17, "Dhanus", "ధనుస్సు", "Dhanussu", "Dhanus", "Length", 17, "4 Danda = 1 Dhanus", "≈7.3 m", "Temple complexes", "Architecture", "Large unit used for planning temple precincts.", "Ancient", "Andhra Pradesh", "Arthashastra"),
    (18, "Krosa", "క్రోశం", "Krosam", "Krośa", "Distance", 18, "Larger than Dhanus", "≈3.2 km", "Surveying", "Architecture", "Used for measuring long distances between settlements and temples.", "Ancient", "Andhra Pradesh", "Arthashastra"),
    (19, "Yojana", "యోజనం", "Yojanam", "Yojana", "Distance", 19, "4 Krośa = 1 Yojana", "≈12.8–13 km", "Regional planning", "Architecture", "Large geographical unit used in planning and descriptions.", "Ancient", "Andhra Pradesh", "Purāṇas; Arthashastra"),
    (20, "Ayadi Mana", "ఆయాది మానం", "Ayadi Manam", "Āyādi Māna", "Architectural Calculation", 20, "Calculated using Vastu principles", "Not an SI unit", "Temple planning", "Architecture", "Canonical system for determining auspicious dimensions in temple and house construction.", "Satavahana–Vijayanagara", "Andhra Pradesh", "Mayamata; Mānasāra")
]

med_rows = [
    (1, "Guriginja", "గురిగింజ", "Guriginja", "Guñjā (Raktikā)", "Weight", 1, "Smallest practical weight", "≈0.1215 g", "Herbal medicines", "Medicine (Ayurveda)", "Gunja seed used for weighing medicinal ingredients and minerals.", "Ancient", "Andhra Pradesh", "Charaka Samhita"),
    (2, "Masha", "మాష", "Masha", "Māṣa", "Weight", 2, "8 Ratti = 1 Masha", "≈0.97 g", "Herbal powders", "Medicine (Ayurveda)", "Standard Ayurvedic unit for powders and pills.", "Ancient", "Andhra Pradesh", "Sushruta Samhita"),
    (3, "Karsha", "కర్శ", "Karsha", "Karṣa", "Weight", 3, "12 Masha = 1 Karsha", "≈12 g", "Medicinal preparations", "Medicine (Ayurveda)", "Used for herbs, minerals and medicinal mixtures.", "Ancient", "Andhra Pradesh", "Charaka Samhita"),
    (4, "Pala", "పలం", "Palam", "Pala", "Weight", 4, "4 Karsha = 1 Pala", "≈48 g", "Herbal ingredients", "Medicine (Ayurveda)", "Standard weight for roots, bark and herbal powders.", "Ancient", "Andhra Pradesh", "Aṣṭāṅga Hṛdaya"),
    (5, "Tula", "తులం", "Tulam", "Tulā", "Weight", 5, "Traditional weight unit", "≈11.66 g", "Precious medicinal ingredients", "Medicine (Ayurveda)", "Used for costly herbs and minerals.", "Medieval", "Andhra Pradesh", "Madras Presidency Records"),
    (6, "Prasriti", "ప్రసృతి", "Prasriti", "Prasṛti", "Volume", 6, "2 Pala = 1 Prasriti", "≈96 ml", "Herbal decoctions", "Medicine (Ayurveda)", "Measure used for medicated oils and ghee.", "Ancient", "Andhra Pradesh", "Charaka Samhita"),
    (7, "Kudava", "కుడవ", "Kudava", "Kuḍava", "Capacity", 7, "4 Prasriti = 1 Kudava", "≈192 ml", "Liquid medicines", "Medicine (Ayurveda)", "Capacity measure for herbal decoctions.", "Ancient", "Andhra Pradesh", "Sushruta Samhita"),
    (8, "Prastha", "ప్రస్థం", "Prastham", "Prastha", "Capacity", 8, "4 Kudava = 1 Prastha", "≈768 ml", "Pharmacy preparation", "Medicine (Ayurveda)", "Standard liquid measure for medicinal formulations.", "Ancient", "Andhra Pradesh", "Charaka Samhita"),
    (9, "Adhaka", "ఆధకం", "Adhakam", "Āḍhaka", "Capacity", 9, "4 Prastha = 1 Adhaka", "≈3.07 L", "Bulk preparation", "Medicine (Ayurveda)", "Used for preparing large quantities of herbal decoctions.", "Ancient", "Andhra Pradesh", "Sushruta Samhita"),
    (10, "Drona", "ద్రోణం", "Dronam", "Droṇa", "Capacity", 10, "4 Adhaka = 1 Drona", "≈12.3 L", "Bulk herbal storage", "Medicine (Ayurveda)", "Large vessel measure for pharmacies.", "Ancient", "Andhra Pradesh", "Charaka Samhita"),
    (11, "Bindu", "బిందువు", "Binduvu", "Bindu", "Liquid Measure", 11, "Single drop", "≈0.05 ml (approx.)", "Eye and nasal medicines", "Medicine (Ayurveda)", "Smallest practical liquid dosage.", "Ancient", "Andhra Pradesh", "Sushruta Samhita"),
    (12, "Anjali", "అంజలి", "Anjali", "Añjali", "Volume", 12, "Two cupped palms", "Person-dependent", "Patient dosage", "Medicine (Ayurveda)", "Body-based dosage measurement.", "Ancient", "Andhra Pradesh", "Charaka Samhita"),
    (13, "Mushti", "ముష్టి", "Mushti", "Muṣṭi", "Volume", 13, "One handful", "Person-dependent", "Herbal leaves", "Medicine (Ayurveda)", "Handful measure used for collecting medicinal plants.", "Ancient", "Andhra Pradesh", "Ayurvedic Practice Manuals"),
    (14, "Anguli", "అంగుళి", "Anguli", "Aṅgula", "Length", 14, "Finger width", "≈1.9 cm", "Surgical procedures", "Medicine (Ayurveda)", "Used for measuring wounds and incisions.", "Ancient", "Andhra Pradesh", "Sushruta Samhita"),
    (15, "Hasta", "హస్తం", "Hastam", "Hasta", "Length", 15, "24 Angula = 1 Hasta", "≈45.7 cm", "Therapeutic procedures", "Medicine (Ayurveda)", "Used for body measurements in diagnosis and treatment.", "Ancient", "Andhra Pradesh", "Aṣṭāṅga Hṛdaya"),
    (16, "Ratti", "రత్తి", "Ratti", "Raktikā", "Weight", 16, "Base medicinal unit", "≈0.1215 g", "Precious medicines", "Medicine (Ayurveda)", "Seed-based standard weight for potent medicines.", "Ancient", "Andhra Pradesh", "Ayurvedic Classics"),
    (17, "Yava", "యవం", "Yavam", "Yava", "Length", 17, "Grain-based unit", "≈2.4 mm", "Surgical measurement", "Medicine (Ayurveda)", "Used for measuring the thickness of medicinal applications.", "Ancient", "Andhra Pradesh", "Sushruta Samhita"),
    (18, "Shana", "శానం", "Shanam", "Śāṇa", "Weight", 18, "Traditional medicinal unit", "≈3–4 g (regional variation)", "Herbal formulations", "Medicine (Ayurveda)", "Used in preparing traditional medicines.", "Medieval", "Andhra Pradesh", "Telugu Ayurvedic Manuscripts"),
    (19, "Tolam", "తులం", "Tolam", "Tulā", "Weight", 19, "Traditional weight", "≈11.66 g", "Mineral medicines", "Medicine (Ayurveda)", "Used by Ayurvedic practitioners for weighing ingredients.", "Medieval–Colonial", "Andhra Pradesh", "Traditional Pharmacy Records"),
    (20, "Patra", "పాత్ర", "Patra", "Pātra", "Vessel Measure", 20, "Container measure", "Variable", "Medicine preparation", "Medicine (Ayurveda)", "Standard vessel used for preparing and storing herbal medicines.", "Ancient–Modern", "Andhra Pradesh", "Telugu Ayurvedic Texts")
]

textile_rows = [
    (1, "Yava", "యవం", "Yavam", "Yava", "Length", 1, "8 Yava = 1 Angula", "≈2.4 mm", "Fine embroidery", "Textile & Handloom", "Used for measuring intricate weaving and embroidery work.", "Ancient", "Andhra Pradesh", "Mānasāra"),
    (2, "Angula", "అంగుళం", "Angulam", "Aṅgula", "Length", 2, "8 Yava = 1 Angula", "≈1.9 cm", "Cloth measurement", "Textile & Handloom", "Finger-width measure used by traditional weavers.", "Ancient", "Andhra Pradesh", "Mayamata"),
    (3, "Velu", "వేలు", "Velu", "Aṅgula (related)", "Length", 3, "Equivalent to finger width", "≈1.9 cm", "Yarn measurement", "Textile & Handloom", "Telugu traditional finger-width measurement.", "Medieval", "Andhra Pradesh", "Telugu Lexicon"),
    (4, "Vitasti", "వితస్తి", "Vitasti", "Vitasti", "Length", 4, "12 Angula = 1 Vitasti", "≈22.8 cm", "Cloth measurement", "Textile & Handloom", "Palm-span measure used during weaving.", "Ancient", "Andhra Pradesh", "Mānasāra"),
    (5, "Hasta", "హస్తం", "Hastam", "Hasta", "Length", 5, "24 Angula = 1 Hasta", "≈45.7 cm", "Silk weaving", "Textile & Handloom", "Cubit used for measuring woven cloth.", "Ancient–Medieval", "Andhra Pradesh", "Śilpa Śāstra"),
    (6, "Gajam", "గజం", "Gajam", "Gaja", "Length", 6, "≈2 Hasta", "0.9144 m", "Cloth trade", "Textile & Handloom", "Traditional yard measure used by cloth merchants.", "Medieval–Modern", "Andhra Pradesh", "Madras Presidency Manual"),
    (7, "Kolu", "కోలు", "Kolu", "Daṇḍa (related)", "Length", 7, "Measuring rod", "≈1.8–2.0 m (regional variation)", "Loom setup", "Textile & Handloom", "Wooden rod used to measure warp length.", "Medieval", "Andhra Pradesh", "Telugu Weaving Traditions"),
    (8, "Noolu", "నూలు", "Noolu", "Sūtra", "Yarn Measure", 8, "Single thread", "—", "Yarn preparation", "Textile & Handloom", "Basic thread used in cotton and silk weaving.", "Ancient", "Andhra Pradesh", "Telugu Lexicon"),
    (9, "Tantu", "తంతు", "Tantu", "Tantu", "Yarn Measure", 9, "Single fibre", "—", "Yarn spinning", "Textile & Handloom", "Individual fibre before spinning into yarn.", "Ancient", "Andhra Pradesh", "Śilpa Śāstra"),
    (10, "Hanku", "హంకు", "Hanku", "—", "Yarn Measure", 10, "Bundle of yarn", "Regional variation", "Silk weaving", "Textile & Handloom", "Standard hank of silk or cotton yarn.", "Medieval–Modern", "Dharmavaram, Uppada", "Textile Department Records"),
    (11, "Noolu Kattu", "నూలు కట్టు", "Noolu Kattu", "—", "Yarn Bundle", 11, "Bundle of threads", "Regional variation", "Loom preparation", "Textile & Handloom", "Bundle of yarn prepared before weaving.", "Traditional", "Andhra Pradesh", "Village Weaving Traditions"),
    (12, "Saram", "సరం", "Saram", "Sara", "Warp Measure", 12, "Set of warp threads", "Variable", "Loom preparation", "Textile & Handloom", "Collection of warp threads mounted on the loom.", "Traditional", "Andhra Pradesh", "Traditional Weaving Manuals"),
    (13, "Paavu", "పావు", "Paavu", "—", "Warp Measure", 13, "Warp section", "Regional variation", "Saree weaving", "Textile & Handloom", "Section of warp prepared for weaving sarees.", "Traditional", "Uppada & Venkatagiri", "Weaving Traditions"),
    (14, "Maggam Vedalpu", "మగ్గం వెడల్పు", "Maggam Vedalpu", "—", "Width Measure", 14, "Based on loom width", "Variable", "Fabric weaving", "Textile & Handloom", "Width of fabric determined by the loom.", "Traditional", "Andhra Pradesh", "Handloom Department Records"),
    (15, "Cheera Podavu", "చీర పొడవు", "Cheera Podavu", "—", "Cloth Length", 15, "Standard saree length", "≈5–9 m", "Saree weaving", "Textile & Handloom", "Traditional measurement for weaving sarees.", "Medieval–Modern", "Andhra Pradesh", "Andhra Handloom Records"),
    (16, "Panche Podavu", "పంచె పొడవు", "Panche Podavu", "—", "Cloth Length", 16, "Standard dhoti length", "≈4–5 m", "Dhoti weaving", "Textile & Handloom", "Traditional measurement used for weaving dhotis.", "Medieval–Modern", "Andhra Pradesh", "Telugu Textile Traditions"),
    (17, "Gudda Mukka", "గుడ్డ ముక్క", "Gudda Mukka", "—", "Cloth Measure", 17, "Cloth piece", "Commodity dependent", "Retail cloth trade", "Textile & Handloom", "Individual cut piece of woven fabric.", "Traditional", "Andhra Pradesh", "Textile Trade Records"),
    (18, "Kattu", "కట్టు", "Kattu", "—", "Bundle Measure", 18, "Bundle of cloth", "Commodity dependent", "Cloth transport", "Textile & Handloom", "Bundle of finished textiles transported for trade.", "Colonial", "Andhra Pradesh", "Madras Trade Records"),
    (19, "Bale", "బేల్", "Bale", "—", "Bulk Textile Measure", 19, "Multiple bundles", "Commodity dependent", "Textile export", "Textile & Handloom", "Standard bale of cloth prepared for wholesale trade.", "Colonial", "Andhra Pradesh", "East India Company Records"),
    (20, "Pattu Kattu", "పట్టు కట్టు", "Pattu Kattu", "—", "Silk Bundle", 20, "Bundle of silk cloth", "Commodity dependent", "Silk trade", "Textile & Handloom", "Bundle of finished silk fabric supplied to merchants.", "Medieval–Modern", "Dharmavaram, Venkatagiri", "Andhra Pradesh Handloom Development Corporation")
]

curr_rows = [
    (1, "Kasu", "కాసు", "Kasu", "Kāsa", "Coin Value", 1, "Small copper coin", "Variable metal weight", "Daily market transactions", "Currency & Money", "Smallest commonly used copper coin in village markets.", "Satavahana–Colonial", "Andhra Pradesh", "Telugu Inscriptions"),
    (2, "Panam", "పణం", "Panam", "Paṇa", "Coin Value", 2, "Multiple Kasu", "Regional variation", "Commercial payments", "Currency & Money", "Widely used monetary unit in medieval Andhra.", "Eastern Chalukya–Vijayanagara", "Andhra Pradesh", "Epigraphia Indica"),
    (3, "Fanam", "ఫణం", "Fanam", "Paṇa (related)", "Gold/Silver Coin", 3, "Fraction of Varaha", "≈0.35–0.40 g (regional variation)", "Merchant trade", "Currency & Money", "Small denomination used in local and coastal trade.", "Vijayanagara–Colonial", "Coastal Andhra", "East India Company Records"),
    (4, "Guriginja", "గురిగింజ", "Guriginja", "Guñjā (Raktikā)", "Weight", 4, "Seed weight", "≈0.1215 g", "Gold weighing", "Currency & Money", "Gunja seed used by jewellers for weighing precious metals.", "Ancient", "Andhra Pradesh", "Charaka Samhita"),
    (5, "Masha", "మాష", "Masha", "Māṣa", "Weight", 5, "8 Ratti = 1 Masha", "≈0.97 g", "Gold and silver", "Currency & Money", "Standard weight for precious metals.", "Ancient", "Andhra Pradesh", "Arthashastra"),
    (6, "Tula", "తులం", "Tulam", "Tulā", "Weight", 6, "Traditional weight unit", "≈11.66 g", "Jewellery trade", "Currency & Money", "Standard unit used by goldsmiths and merchants.", "Medieval", "Andhra Pradesh", "Madras Presidency Records"),
    (7, "Pala", "పలం", "Palam", "Pala", "Weight", 7, "4 Karsha = 1 Pala", "≈48 g", "Precious metal trade", "Currency & Money", "Used for weighing gold, silver and valuable goods.", "Ancient", "Andhra Pradesh", "Charaka Samhita"),
    (8, "Varaha", "వరహం", "Varaham", "Varāha", "Gold Coin", 8, "Gold coin denomination", "≈3.4–3.9 g gold (variation)", "Royal payments", "Currency & Money", "Principal gold coin during the Vijayanagara Empire.", "Vijayanagara", "Andhra Pradesh", "Vijayanagara Coinage"),
    (9, "Gadyana", "గద్యణం", "Gadyanam", "Gadyāṇa", "Gold Coin", 9, "High-value gold coin", "Regional variation", "Temple donations", "Currency & Money", "Gold coin frequently mentioned in Telugu inscriptions.", "Chalukya–Kakatiya", "Andhra Pradesh", "South Indian Inscriptions"),
    (10, "Honnu", "హొన్ను", "Honnu", "Suvarṇa", "Gold Coin", 10, "Equivalent to a gold coin", "Regional variation", "Royal trade", "Currency & Money", "Gold coin circulated during Vijayanagara rule.", "Vijayanagara", "Rayalaseema", "Epigraphia Indica"),
    (11, "Pagoda", "పగోడా", "Pagoda", "—", "Gold Coin", 11, "Regional gold coin", "≈3.41 g gold", "International trade", "Currency & Money", "Gold coin widely used in South Indian maritime trade.", "16th–19th Century", "Coastal Andhra", "Madras Presidency Gazetteer"),
    (12, "Rupee", "రూపాయి", "Rupayi", "Rūpya", "Silver Coin", 12, "16 Anna = 1 Rupee", "≈11.66 g silver (historic)", "General commerce", "Currency & Money", "Standard currency during the British period.", "Colonial", "Andhra Pradesh", "British Indian Currency Records"),
    (13, "Anna", "ఆణా", "Anna", "—", "Coin Value", 13, "16 Anna = 1 Rupee", "1/16 Rupee", "Daily transactions", "Currency & Money", "Small denomination used in retail markets.", "Colonial", "Andhra Pradesh", "Madras Presidency Records"),
    (14, "Paisa", "పైసా", "Paisa", "—", "Coin Value", 14, "64 Paisa = 1 Rupee (old system)", "1/64 Rupee", "Everyday purchases", "Currency & Money", "Used for low-value commercial transactions.", "Colonial", "Andhra Pradesh", "Indian Currency Records"),
    (15, "Dam", "దాం", "Dam", "Dāma", "Copper Coin", 15, "Fractional coin", "Regional variation", "Local trade", "Currency & Money", "Copper coin circulated during Mughal and Deccan rule.", "Mughal–Qutb Shahi", "Andhra Pradesh", "Mughal Coin Catalogues"),
    (16, "Mohur", "మొహర్", "Mohur", "Mohura", "Gold Coin", 16, "High-value gold coin", "≈10.9–11 g gold", "High-value trade", "Currency & Money", "Gold coin used for major commercial and royal transactions.", "Mughal–Colonial", "Andhra Pradesh", "Indian Numismatic Studies"),
    (17, "Kanuka", "కానుక", "Kanuka", "Dāna", "Payment Unit", 17, "Gift/payment", "Not fixed", "Temple offerings", "Currency & Money", "Traditional monetary or material offering made to temples.", "Ancient–Modern", "Andhra Pradesh", "Temple Records"),
    (18, "Dakshina", "దక్షిణ", "Dakshina", "Dakṣiṇā", "Payment Unit", 18, "Honorarium", "Not fixed", "Religious payments", "Currency & Money", "Payment given to priests, scholars and teachers.", "Ancient", "Andhra Pradesh", "Dharmaśāstra Texts"),
    (19, "Vari", "వరి", "Vari", "Kara", "Tax Unit", 19, "Revenue assessment", "Not fixed", "Land taxation", "Currency & Money", "Monetary assessment collected as tax by rulers.", "Kakatiya–Vijayanagara", "Andhra Pradesh", "Revenue Inscriptions"),
    (20, "Madras Pagoda", "మద్రాస్ పగోడా", "Madras Pagoda", "—", "Gold Coin", 20, "Colonial gold coin", "≈3.47 g gold", "Overseas trade", "Currency & Money", "Gold coin used extensively in the Madras Presidency, including Andhra districts.", "17th–19th Century", "Andhra Pradesh", "Madras Presidency Gazetteer")
]

hh_rows = [
    (1, "Bindu", "బిందువు", "Binduvu", "Bindu", "Liquid Measure", 1, "Single drop", "≈0.05 ml (approx.)", "Oils and medicines", "Household", "Smallest liquid measure used in homes.", "Ancient", "Andhra Pradesh", "Charaka Samhita"),
    (2, "Guriginja", "గురిగింజ", "Guriginja", "Guñjā", "Weight", 2, "Seed weight", "≈0.1215 g", "Spices and medicines", "Household", "Seed-based weight for precious household ingredients.", "Ancient", "Andhra Pradesh", "Ayurvedic Texts"),
    (3, "Tula", "తులం", "Tulam", "Tulā", "Weight", 3, "Traditional weight unit", "≈11.66 g", "Spices and condiments", "Household", "Used for weighing costly spices and herbs.", "Ancient", "Andhra Pradesh", "Madras Presidency Records"),
    (4, "Pala", "పలం", "Palam", "Pala", "Weight", 4, "4 Karsha = 1 Pala", "≈48 g", "Cooking ingredients", "Household", "Used for jaggery, spices and food ingredients.", "Ancient", "Andhra Pradesh", "Charaka Samhita"),
    (5, "Sola", "సోల", "Sola", "—", "Capacity", 5, "Small grain measure", "≈180–200 ml (regional variation)", "Rice and pulses", "Household", "Small domestic measure for grains.", "Medieval", "Coastal Andhra", "Telugu Village Traditions"),
    (6, "Kuncham", "కుంచం", "Kuncham", "Kuñcaka", "Capacity", 6, "Multiple Sola", "≈0.7–0.8 L", "Rice measurement", "Household", "Common household grain measure.", "Medieval", "Andhra Pradesh", "Andhra Gazetteers"),
    (7, "Maanika", "మానిక", "Maanika", "Mānikā", "Capacity", 7, "Multiple Kuncham", "≈1.4–1.6 L", "Grain storage", "Household", "Standard vessel used in homes for measuring grains.", "Medieval", "Andhra Pradesh", "Telugu Inscriptions"),
    (8, "Adda", "అడ్డ", "Adda", "—", "Capacity", 8, "2 Maanika", "Regional variation", "Grain storage", "Household", "Medium-sized household grain measure.", "Medieval", "Andhra Pradesh", "Revenue Records"),
    (9, "Maraka", "మరక", "Maraka", "—", "Capacity", 9, "Multiple Adda", "≈10–12 L", "Rice storage", "Household", "Widely used for storing paddy and cereals.", "Medieval", "Andhra Pradesh", "Andhra Revenue Records"),
    (10, "Tumu", "తూము", "Tumu", "Droṇa (related)", "Capacity", 10, "8 Maraka = 1 Tumu (regional variation)", "≈80–100 L", "Bulk grain storage", "Household", "Large household storage measure.", "Medieval", "Andhra Pradesh", "Andhra Agricultural Records"),
    (11, "Garise", "గరిసె", "Garise", "—", "Storage Measure", 11, "Basket measure", "Regional variation", "Grain storage", "Household", "Bamboo basket used to store grains.", "Traditional", "Andhra Pradesh", "Telugu Rural Traditions"),
    (12, "Gampa", "గంప", "Gampa", "—", "Storage Measure", 12, "Basket measure", "Regional variation", "Vegetable storage", "Household", "Large bamboo basket used for vegetables, fruits and grains.", "Traditional", "Andhra Pradesh", "Telugu Lexicon"),
    (13, "Ginne", "గిన్నె", "Ginne", "Pātra", "Vessel Measure", 13, "Bowl measure", "≈250–500 ml (varies)", "Cooking", "Household", "Metal bowl used for measuring and serving food.", "Ancient–Modern", "Andhra Pradesh", "Telugu Household Traditions"),
    (14, "Chembu", "చెంబు", "Chembu", "Kalaśa (related)", "Liquid Measure", 14, "Pot measure", "≈1–2 L (regional variation)", "Water and milk", "Household", "Brass or copper vessel used in kitchens.", "Medieval–Modern", "Andhra Pradesh", "Telugu Folk Traditions"),
    (15, "Kunda", "కుండ", "Kunda", "Ghaṭa", "Storage Vessel", 15, "Earthen pot", "≈10–20 L (varies)", "Water storage", "Household", "Clay pot used for storing drinking water.", "Ancient–Modern", "Andhra Pradesh", "Village Household Practices"),
    (16, "Binde", "బిందె", "Binde", "—", "Storage Vessel", 16, "Large water pot", "≈15–20 L (regional variation)", "Water storage", "Household", "Traditional metal vessel for storing water.", "Medieval–Modern", "Andhra Pradesh", "Telugu Lexicon"),
    (17, "Dabba", "డబ్బా", "Dabba", "—", "Storage Container", 17, "Container measure", "Variable", "Grain and spice storage", "Household", "Metal container used for storing food grains and spices.", "Colonial–Modern", "Andhra Pradesh", "Household Records"),
    (18, "Moota", "మూట", "Moota", "—", "Bundle Measure", 18, "Bundle of goods", "Commodity dependent", "Domestic storage", "Household", "Cloth bundle used for storing household items.", "Traditional", "Andhra Pradesh", "Telugu Rural Traditions"),
    (19, "Basta", "బస్తా", "Basta", "—", "Sack Measure", 19, "Sack measure", "Commodity dependent", "Grain storage", "Household", "Jute sack used for storing rice and cereals.", "Colonial", "Andhra Pradesh", "Agricultural Market Records"),
    (20, "Gade", "గాదె", "Gade", "Koṣṭha", "Granary", 20, "Largest storage structure", "Variable", "Long-term grain storage", "Household", "Traditional household granary for preserving harvested grains.", "Medieval–Modern", "Andhra Pradesh", "Andhra Rural Architecture")
]

storage_rows = [
    (1, "Sola", "సోల", "Sola", "—", "Capacity", 1, "Small grain measure", "≈180–200 ml (regional variation)", "Seed storage", "Storage & Transportation", "Small vessel used for measuring grains before storage.", "Medieval", "Coastal Andhra", "Telugu Village Traditions"),
    (2, "Kuncham", "కుంచం", "Kuncham", "Kuñcaka", "Capacity", 2, "Multiple Sola", "≈0.7–0.8 L", "Grain storage", "Storage & Transportation", "Small grain measure used in homes and village markets.", "Medieval", "Andhra Pradesh", "Andhra Gazetteers"),
    (3, "Maanika", "మానిక", "Maanika", "Mānikā", "Capacity", 3, "Multiple Kuncham", "≈1.4–1.6 L", "Grain transport", "Storage & Transportation", "Standard vessel for measuring paddy and cereals.", "Medieval", "Andhra Pradesh", "Telugu Inscriptions"),
    (4, "Adda", "అడ్డ", "Adda", "—", "Capacity", 4, "2 Maanika", "Regional variation", "Paddy storage", "Storage & Transportation", "Medium-sized grain measuring unit.", "Medieval", "Andhra Pradesh", "Revenue Records"),
    (5, "Maraka", "మరక", "Maraka", "—", "Capacity", 5, "Multiple Adda", "≈10–12 L", "Grain storage", "Storage & Transportation", "Widely used measure for storing harvested crops.", "Medieval", "Andhra Pradesh", "Andhra Revenue Records"),
    (6, "Tumu", "తూము", "Tumu", "Droṇa (related)", "Capacity", 6, "8 Maraka = 1 Tumu (regional variation)", "≈80–100 L", "Bulk grain storage", "Storage & Transportation", "Large storage measure for paddy and cereals.", "Medieval", "Andhra Pradesh", "Andhra Agricultural Records"),
    (7, "Putti", "పుట్టి", "Putti", "Pūti", "Capacity", 7, "Multiple Tumu", "Regional variation", "Wholesale grain storage", "Storage & Transportation", "Large storage and commercial grain unit.", "Medieval", "Andhra Pradesh", "Andhra Gazetteers"),
    (8, "Garise", "గరిసె", "Garise", "—", "Basket Measure", 8, "Basket measure", "Regional variation", "Grain storage", "Storage & Transportation", "Bamboo basket used for measuring and carrying grain.", "Traditional", "Andhra Pradesh", "Telugu Rural Traditions"),
    (9, "Gampa", "గంప", "Gampa", "—", "Basket Measure", 9, "Large basket", "Regional variation", "Agricultural transport", "Storage & Transportation", "Bamboo basket used to carry vegetables, fruits and grains.", "Traditional", "Andhra Pradesh", "Telugu Lexicon"),
    (10, "Moota", "మూట", "Moota", "—", "Bundle Measure", 10, "Bundle of goods", "Commodity dependent", "Farm transport", "Storage & Transportation", "Bundle of harvested crops or merchandise.", "Traditional", "Andhra Pradesh", "Village Agricultural Practices"),
    (11, "Katta", "కట్ట", "Katta", "—", "Bundle Measure", 11, "Bundle of stalks", "Commodity dependent", "Harvest transport", "Storage & Transportation", "Bundle of harvested paddy or crop stalks.", "Traditional", "Andhra Pradesh", "Telugu Agricultural Customs"),
    (12, "Basta", "బస్తా", "Basta", "—", "Sack Measure", 12, "Sack measure", "Commodity dependent", "Grain storage", "Storage & Transportation", "Traditional jute sack for rice and agricultural produce.", "Colonial", "Andhra Pradesh", "Agricultural Market Records"),
    (13, "Dabba", "డబ్బా", "Dabba", "—", "Storage Container", 13, "Metal container", "Variable", "Food storage", "Storage & Transportation", "Metal storage container for grains and groceries.", "Colonial–Modern", "Andhra Pradesh", "Household Records"),
    (14, "Chembu", "చెంబు", "Chembu", "Kalaśa (related)", "Liquid Storage", 14, "Pot measure", "≈1–2 L (regional variation)", "Water transport", "Storage & Transportation", "Brass or copper vessel used for carrying liquids.", "Medieval–Modern", "Andhra Pradesh", "Telugu Folk Traditions"),
    (15, "Kunda", "కుండ", "Kunda", "Ghaṭa", "Storage Vessel", 15, "Earthen pot", "≈10–20 L (varies)", "Water storage", "Storage & Transportation", "Clay pot used for storing drinking water and grains.", "Ancient–Modern", "Andhra Pradesh", "Village Household Practices"),
    (16, "Binde", "బిందె", "Binde", "—", "Water Vessel", 16, "Large pot", "≈15–20 L (regional variation)", "Water transport", "Storage & Transportation", "Traditional metal vessel for carrying water.", "Medieval–Modern", "Andhra Pradesh", "Telugu Lexicon"),
    (17, "Gade", "గాదె", "Gade", "Koṣṭha", "Granary", 17, "Permanent grain storage", "Variable", "Long-term storage", "Storage & Transportation", "Traditional granary used to preserve harvested grain.", "Medieval–Modern", "Andhra Pradesh", "Andhra Rural Architecture"),
    (18, "Edla Bandi Suma", "ఎడ్ల బండి సుమ", "Edla Bandi Suma", "—", "Cart Load", 18, "Bullock-cart load", "Regional variation", "Agricultural transport", "Storage & Transportation", "Quantity carried by a traditional bullock cart.", "Medieval–Modern", "Andhra Pradesh", "Andhra Rural Transport Records"),
    (19, "Padava Suma", "పడవ సుమ", "Padava Suma", "—", "Boat Load", 19, "Boat capacity", "Regional variation", "River transport", "Storage & Transportation", "Load transported by traditional boats on the Krishna and Godavari rivers.", "Ancient–Colonial", "Coastal Andhra", "Maritime Trade Records"),
    (20, "Nauka Bharam", "నౌక భారం", "Nauka Bharam", "Nau Bhāra", "Maritime Cargo", 20, "Ship cargo capacity", "Regional variation", "Overseas trade", "Storage & Transportation", "Cargo capacity of traditional ships used in maritime trade.", "Satavahana–Colonial", "Coastal Andhra", "South Indian Maritime History")
]

land_rows = [
    (1, "Ankanam", "అంకణం", "Ankanam", "—", "Area Measurement", 1, "Base residential land unit", "≈72 sq ft = 6.69 m² (Nellore standard); regional variation exists", "House sites, village plots", "Land Measurement", "Traditional plot measurement based on pillar spacing/space", "Medieval–Present", "Nellore, Tirupati, Rayalaseema areas", "Regional land records (Land Records)"),
    (2, "Gajam", "గజం", "Gajam (Square Yard)", "Gaja", "Area Measurement", 2, "1 Gajam = 1 square yard", "≈0.836 m²", "House plots and urban land", "Land Measurement", "Common Telugu land unit", "Medieval–Present", "Entire Andhra Pradesh", "Regional revenue records"),
    (3, "Cent", "సెంట్", "Cent", "—", "Area Measurement", 3, "100 Cent = 1 Acre", "≈40.47 m²", "Small agricultural plots and property transactions", "Land Measurement", "1/100 part of an acre", "British–Present", "Coastal Andhra, Rayalaseema", "Madras Presidency records"),
    (4, "Guntha / Kunta", "గుంట / కుంట", "Guntha", "—", "Area Measurement", 4, "40 Gunthas = 1 Acre", "≈101.17 m²", "Agricultural fields", "Land Measurement", "Traditional farming land unit", "British–Present", "Andhra regions adjoining Deccan system", "Revenue records (Bhumi Calculator)"),
    (5, "Acre", "ఎకరం", "Acre", "—", "Area Measurement", 5, "40 Gunthas = 1 Acre; 100 Cents = 1 Acre", "4046.86 m²", "Land survey and registration", "Land Measurement", "British standard land unit", "British–Present", "Entire Andhra Pradesh", "Madras Revenue Manuals"),
    (6, "Kani / Cawnie", "కాణి", "Kani (Cawnie)", "—", "Area Measurement", 6, "Regional Madras system relationship varies", "≈0.57 hectare (traditional Madras value)", "Agricultural revenue measurement", "Land Measurement", "Large cultivation unit", "British Period", "Coastal Andhra districts", "Madras Presidency Records"),
    (7, "Hectare", "హెక్టారు", "Hectare", "—", "Area Measurement", 7, "1 hectare = 2.471 acres", "10,000 m²", "Government agricultural statistics and records", "Land Measurement", "Modern metric land unit", "1958–Present", "Entire Andhra Pradesh", "Government Land Records")
]

trans_rows = [
    (1, "Angula", "అంగుళం", "Angula", "अङ्गुल (Aṅgula)", "Length", 1, "Base length unit", "≈1.9 cm", "Measuring small transport objects, wheels, tools", "Transportation & Distance", "Smallest traditional length unit", "Ancient–Present", "Entire Andhra Pradesh", "Arthashastra; Mayamata"),
    (2, "Vitasti", "వితస్తి", "Vitasti", "वितस्ति", "Length", 2, "12 Angulas = 1 Vitasti", "≈22.8 cm", "Measuring cart parts, ropes and wooden components", "Transportation & Distance", "Hand-span measurement", "Ancient–Medieval", "Entire Andhra Pradesh", "Manusmriti; Sanskrit texts"),
    (3, "Hasta", "హస్తం", "Hasta", "हस्त", "Length", 3, "24 Angulas = 1 Hasta", "≈45.6 cm", "Measuring carts, boats, construction of transport structures", "Transportation & Distance", "Cubit measurement", "Ancient–Present", "Entire Andhra Pradesh", "Mayamata"),
    (4, "Danda", "దండం", "Danda", "दण्ड", "Length", 4, "4 Hastas = 1 Danda", "≈1.82 m", "Road measurement, bridge and pathway construction", "Transportation & Distance", "Standard measuring rod", "Ancient–Medieval", "Entire Andhra Pradesh", "Arthashastra"),
    (5, "Rajju", "రజ్జు", "Rajju", "रज्जु", "Length", 5, "Rope measurement (variable)", "Variable", "Surveying roads, canals and transport routes", "Transportation & Distance", "Measuring rope", "Ancient–British", "Entire Andhra Pradesh", "Sthapatya texts"),
    (6, "Gavyuti", "గవ్యుతి", "Gavyuti", "गव्यूति", "Distance", 6, "4 Krosha = 1 Gavyuti (traditional)", "≈12–13 km (approx.)", "Travel distance in rural routes", "Transportation & Distance", "Distance related to cattle movement", "Ancient", "Deccan region", "Puranic literature"),
    (7, "Krosha / Kos", "క్రోశం / కోసు", "Krosha (Kos)", "क्रोश", "Distance", 7, "2000 Danda = 1 Krosha (classical)", "≈3.2 km", "Distance between villages, markets and resting places", "Transportation & Distance", "Common travel distance unit", "Ancient–British", "Entire Andhra Pradesh", "Arthashastra"),
    (8, "Yojana", "యోజనం", "Yojana", "योजन", "Distance", 8, "4 Krosha = 1 Yojana", "≈12–13 km", "Long-distance travel, kingdoms, pilgrimage routes", "Transportation & Distance", "Largest classical distance unit", "Ancient–Medieval", "Entire Andhra Pradesh", "Arthashastra; Puranas"),
    (9, "Krosha Patha / Kosu", "కోసు", "Kosu", "—", "Distance", 9, "Regional usage of Kos", "≈3 km (variation)", "Road-side distance marking during later periods", "Transportation & Distance", "Village travel measure", "Medieval–British", "Rayalaseema & Coastal Andhra", "Madras Gazetteers")
]

dairy_rows = [
    (1, "Ratti", "రత్తి", "Ratti", "रक्तिका (Raktikā)", "Weight", 1, "Base unit", "≈121.5 mg", "Veterinary medicines and herbal preparations for cattle", "Livestock & Dairy", "Smallest traditional weight unit", "Ancient–Present", "Entire Andhra Pradesh", "Charaka Samhita"),
    (2, "Masha", "మాష", "Masha", "माष", "Weight", 2, "8 Ratti = 1 Masha", "≈0.972 g", "Medicinal preparations for animals", "Livestock & Dairy", "Small medicinal weight", "Ancient–Present", "Entire Andhra Pradesh", "Sushruta Samhita"),
    (3, "Tola", "తులం", "Tola", "तुला", "Weight", 3, "12 Masha = 1 Tola", "≈11.66 g", "Measuring ghee, medicinal ingredients and valuable dairy products", "Livestock & Dairy", "Small commercial weight", "Medieval–Present", "Entire Andhra Pradesh", "British India Standards"),
    (4, "Chhatak", "ఛటాక్", "Chhatak", "—", "Weight", 4, "5 Tola = 1 Chhatak", "≈58.3 g", "Butter, ghee and milk products", "Livestock & Dairy", "Small dairy measure", "Mughal–1958", "Coastal Andhra", "Madras Presidency Records"),
    (5, "Pav / Pao", "పావు", "Pav", "—", "Weight / Volume", 5, "4 Chhatak = 1 Pav", "≈233 g / ≈250 ml", "Milk, curd and buttermilk sales", "Livestock & Dairy", "Quarter Seer measure", "Mughal–1958", "Entire Andhra Pradesh", "Madras Gazetteers"),
    (6, "Seer / Sher", "సేరు", "Seer", "—", "Weight / Volume", 6, "4 Pav = 1 Seer", "≈0.933 kg / ≈0.93 L", "Milk, curd, ghee and butter measurement", "Livestock & Dairy", "Most common traditional dairy unit", "Medieval–1958", "Entire Andhra Pradesh", "Madras Presidency Standards"),
    (7, "Padi", "పడి", "Padi", "—", "Volume", 7, "Regional; used as vessel measure", "≈1.6–1.8 L (regional)", "Milk, grain and household liquids", "Livestock & Dairy", "Traditional South Indian volume measure", "Medieval–Present", "Coastal Andhra influence areas", "South Indian traditional measures"),
    (8, "Marakkal", "மரக்கால் / మరక్కాల్", "Marakkal", "—", "Volume", 8, "8 Padi = 1 Marakkal (Tamil-influenced system)", "≈10–12 L (regional)", "Large quantity milk and agricultural produce", "Livestock & Dairy", "Large vessel measure", "Medieval–British", "Southern Andhra regions", "Madras Presidency Records"),
    (9, "Maund (Man)", "మణుగు / మణం", "Maund (Man)", "मान", "Bulk Weight", 9, "40 Seers = 1 Maund", "≈37.324 kg", "Bulk dairy products, cattle feed, fodder", "Livestock & Dairy", "Large trade unit", "Mughal–1958", "Entire Andhra Pradesh", "Imperial Gazetteer of India")
]

gold_rows = [
    (1, "Ratti", "రత్తి", "Ratti", "रक्तिका (Raktikā)", "Precious Metal Weight", 1, "Base unit", "≈121.5 mg", "Measuring gemstones, pearls and small gold quantities", "Gold & Jewellery", "Smallest jeweller weight unit", "Ancient–Present", "Entire Andhra Pradesh", "Arthashastra; Ratna Pariksha texts"),
    (2, "Masha", "మాష", "Masha", "माष", "Precious Metal Weight", 2, "8 Ratti = 1 Masha", "≈0.972 g", "Small gold ornaments and precious stones", "Gold & Jewellery", "Small gold measurement unit", "Ancient–Present", "Entire Andhra Pradesh", "Sanskrit weight system"),
    (3, "Tola", "తులం", "Tola", "तुला", "Precious Metal Weight", 3, "12 Masha = 1 Tola", "≈11.66 g", "Gold jewellery trade and valuation", "Gold & Jewellery", "Most widely used traditional gold unit", "Medieval–Modern", "Entire Andhra Pradesh", "British India Standards"),
    (4, "Suvarna", "సువర్ణం", "Suvarna", "सुवर्ण", "Gold Weight", 4, "16 Masha = 1 Suvarna (classical)", "≈15.5 g", "Gold coins, temple donations and ornaments", "Gold & Jewellery", "Classical gold weight unit", "Ancient–Medieval", "Entire Andhra Pradesh", "Arthashastra"),
    (5, "Varaha (Pagoda)", "వరాహం", "Varaha / Pagoda", "वराह", "Gold Coin Weight", 5, "Regional coin standard", "≈3.4–3.5 g gold coin", "Vijayanagara gold coins and trade", "Gold & Jewellery", "Important South Indian gold coin", "Medieval Period", "Rayalaseema, Vijayanagara regions", "Vijayanagara coin records"),
    (6, "Karsha", "కర్ష", "Karsha", "कर्ष", "Precious Metal Weight", 6, "4 Masha = 1 Karsha (classical)", "≈3.9 g", "Ancient metal and jewellery calculations", "Gold & Jewellery", "Sanskrit weight unit", "Ancient–Medieval", "Entire Andhra Pradesh", "Charaka Samhita; Arthashastra"),
    (7, "Pala", "పల", "Pala", "पल", "Precious Metal Weight", 7, "4 Karsha = 1 Pala", "≈46.7 g", "Large quantity gold and metal weighing", "Gold & Jewellery", "Bulk precious metal unit", "Ancient–Medieval", "Entire Andhra Pradesh", "Ayurvedic texts")
]

sector_specs = [
    ("agriculture", "agri", agri_rows),
    ("trade-commerce", "trade", trade_rows),
    ("architecture", "arch", arch_rows),
    ("medicine", "med", med_rows),
    ("textile-handloom", "textile", textile_rows),
    ("currency-money", "curr", curr_rows),
    ("household", "hh", hh_rows),
    ("storage-transport", "storage", storage_rows),
    ("land-measurement", "land", land_rows),
    ("transportation-distance", "trans", trans_rows),
    ("livestock-dairy", "dairy", dairy_rows),
    ("gold-jewellery", "gold", gold_rows),
]

def clean_slug(text):
    return re.sub(r'[^a-zA-Z0-9]+', '-', text.lower()).strip('-')

def map_category(cat_str):
    t = cat_str.lower()
    if "precious metal" in t or "gold weight" in t:
        return "weight"
    if "weight" in t:
        if "coin" in t:
            return "currency"
        return "weight"
    if "length" in t or "distance" in t or "survey" in t:
        return "length"
    if "volume" in t or "capacity" in t or "sack" in t or "basket" in t or "load" in t or "cart" in t or "heap" in t or "granary" in t or "vessel" in t or "drop" in t or "liquid" in t or "container" in t or "yarn" in t or "bundle" in t or "bolt" in t:
        return "volume"
    if "area" in t:
        return "area"
    if "currency" in t or "coin" in t or "financial" in t or "monetary" in t or "wage" in t or "revenue" in t or "treasury" in t or "tax" in t or "payment" in t:
        return "currency"
    if "time" in t:
        return "time"
    if "seed" in t:
        return "other"
    return "other"

entries = []
for sector_slug, sector_code, rows in sector_specs:
    for r in rows:
        sno, unit_name, telugu_name, eng_trans, sanskrit, category_str, order, relation, approx_eq, hist_usage, sector_name, desc, hist_period, region_of_ap, reference = r
        
        item_id = f"ap-{sector_code}-{sno}"
        slug = f"{clean_slug(unit_name)}-{sector_code}-ap-{sno}"
        category = map_category(category_str)
        
        entry = {
            "id": item_id,
            "slug": slug,
            "name_english": unit_name,
            "name_hindi": eng_trans,
            "name_telugu": telugu_name,
            "category": category,
            "sector": sector_slug,
            "origin": "Andhra Pradesh",
            "states": ["Andhra Pradesh"],
            "local_names": [telugu_name],
            "meaning": desc,
            "used_in": [hist_usage] if hist_usage else [desc],
            "historical_period": hist_period,
            "region_applicable": region_of_ap,
            "measurement_type": category_str,
            "references": [reference] if reference else [],
            "tags": [
                "andhra-pradesh",
                "traditional-units",
                sector_slug,
                clean_slug(unit_name),
                category
            ],
            "created_at": "2024-01-01"
        }
        if sanskrit and sanskrit != "—":
            entry["name_sanskrit"] = sanskrit
        if approx_eq and approx_eq != "—":
            entry["modern_equivalent"] = approx_eq
        if relation and relation != "—":
            entry["conversion_formula"] = relation
            
        entries.append(entry)

print(f"Total generated Andhra Pradesh entries: {len(entries)}")
assert len(entries) == 192, f"Expected 192, got {len(entries)}"

ts_content = '''import { Measurement } from "@/types";

export const AP_MEASUREMENTS: Measurement[] = ''' + json.dumps(entries, ensure_ascii=False, indent=2) + ";\n"

with open("lib/apData.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print("Successfully written all 192 measurements to lib/apData.ts!")
