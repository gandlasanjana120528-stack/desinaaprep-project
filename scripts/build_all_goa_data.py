import json
import re

# Load the existing 100 rows or rebuild cleanly with all 10 sectors

agriculture_rows = [
    (1, "Yava", "यव", "Yava", "Yava", "Length/Seed", 1, "Grain-based unit", "<2.4 mm", "Seed reference", "Agriculture", "Barley grain used as the smallest reference unit in traditional measurement systems.", "Ancient", "Goa", "Arthashastra, Manusmriti"),
    (2, "Gunja", "गुंज", "Gunja", "Guñjā (raktikā)", "Weight", 2, "Seed weight", "≈0.1215 g", "Seed weighing", "Agriculture", "Gunja seed used for weighing seeds, herbs, and spices.", "Ancient", "Goa", "Charaka Samhita"),
    (3, "Masha", "माश", "Masha", "Māṣa", "Weight", 3, "8 Gunja = 1 Masha", "≈0.97 g", "Seed measurement", "Agriculture", "Used for measuring valuable agricultural seeds and medicinal plants.", "Ancient", "Goa", "Sushruta Samhita"),
    (4, "Tola", "तोळा", "Tola", "Tolā", "Weight", 4, "Tradition of weight unit", "≈11.66 g", "Spice trade", "Agriculture", "Used for weighing pepper, cardamom and other valuable crops.", "Medieval-Modern", "Goa", "Portuguese Goa Trade Records"),
    (5, "Pala", "पळ", "Pala", "Pala", "Weight", 5, "4 Karsha = 1 Pala", "≈48 g", "Grain weighing", "Agriculture", "Traditional weight for grains and agricultural produce.", "Ancient", "Goa", "Charaka Samhita"),
    (6, "Chhatak", "छटाक", "Chhatak", "—", "Weight", 6, "16 Chhatak = 1 Sher", "≈58 g", "Paddy markets", "Agriculture", "Used for measure in pulses, and spices in local markets.", "Portuguese Period", "Goa", "Goa Revenue Manuals"),
    (7, "Sher", "शेर", "Sher", "Śēr", "Weight/Capacity", 7, "Standard market measure", "≈0.93 kg", "Rice trade", "Agriculture", "Standard measure for paddy, rice and pulses.", "Medieval-Colonial", "Goa", "Bombay Presidency Gazetteer"),
    (8, "Padi", "पडडी", "Padi", "Prastha (relevant)", "Capacity", 8, "Tradition of grain measure", "≈3–4 L (regional variation)", "Seed measurement", "Agriculture", "Vessel used for measuring paddy seed before sowing.", "Traditional", "Goa", "Goan Rural Traditions"),
    (9, "Adholi", "अढोली", "Adholi", "—", "Capacity", 9, "2 Padi = 1 Adholi", "Regional variation", "Grain storage", "Agriculture", "Medium-sized grain measure used in villages.", "Traditional", "Goa", "Village Revenue Records"),
    (10, "Man", "मण", "Man", "Maṇa (relevant)", "Weight", 10, "40 Sher = 1 Man", "≈37.3 kg", "Bulk grain trade", "Agriculture", "Wholesale measure for rice, coconuts and arecanuts.", "Colonial", "Goa", "Portuguese Administrative Records"),
    (11, "Goni", "गोणी", "Goni", "—", "Sack Measure", 11, "Grain sack", "Commodity dependent", "Paddy storage", "Agriculture", "Traditional sack used for storing harvested rice and commodities.", "Traditional", "Goa", "Agricultural Market Records"),
    (12, "Tooli", "टोळी", "Tooli", "—", "Basket Measure", 12, "Basket measure", "Regional variation", "Harvest estimation", "Agriculture", "Bamboo basket used for fruits, vegetables and paddy.", "Traditional", "Goa", "Goan Folk Traditions"),
    (13, "Pothi", "पोथी", "Pothi", "—", "Bundle Measure", 13, "Cloth bundle", "Commodity dependent", "Seed storage", "Agriculture", "Cloth bundle used to preserve seeds and spices.", "Traditional", "Goa", "Village Customs"),
    (14, "Bhar", "भार", "Bhar", "Bhāra", "Load Measure", 14, "One head-load", "≈20–30 kg (regional variation)", "Farm transport", "Agriculture", "Standard manual load carried from field to storage.", "Traditional", "Goa", "Rural Labour Practices"),
    (15, "Bailgadi Bhar", "बैलगाडी भार", "Bailgadi Bhar", "—", "Cart Load", 15, "Bullock-cart load", "Regional variation", "Agricultural transport", "Agriculture", "Quantity transported in one bullock cart load.", "Medieval-Modern", "Goa", "Rural Transport Records"),
    (16, "Naral Goni", "नारळ गोणी", "Naral Goni", "—", "Coconut Sack", 16, "Sack of coconuts", "Commodity dependent", "Coconut trade", "Agriculture", "Standard sack used to transport coconuts from plantations.", "Portuguese Period", "Goa", "Coconut Trade Records"),
    (17, "Supari Goni", "सुपारी गोणी", "Supari Goni", "—", "Arecanut Sack", 17, "Sack of arecanuts", "Commodity dependent", "Arecanut trade", "Agriculture", "Traditional sack used in arecanut cultivation and trade.", "Portuguese Period", "Goa", "Arecanut Trade Records"),
    (18, "Kudov", "कुडोव", "Kudov", "Kuḍava (relevant)", "Granary", 18, "Grain storage structure", "Variable", "Grain preservation", "Agriculture", "Traditional granary used to store harvested paddy.", "Ancient-Modern", "Goa", "Rural Architecture Studies"),
    (19, "Dhorvo/ Rashi", "ढोर्वो / राशी", "Dhorvo / Rashi", "Dhārva / Rāśi", "Heap Measure", 19, "Heap of harvested grain", "Variable", "Yield estimation", "Agriculture", "Heap of paddy used to estimate agricultural production.", "Traditional", "Goa", "Village Revenue Practices"),
    (20, "Rajju", "रज्जु", "Rajju", "Rajju", "Survey Measure", 20, "Measurement rope", "Variable", "Field measurement", "Agriculture", "Rope used to measure paddy fields and coconut plantations.", "Ancient-Modern", "Goa", "Arthashastra, Goa Land Records")
]

trade_rows = [
    (1, "Gunja", "गुंज", "Gunja", "Guñjā (raktikā)", "Weight", 1, "Seed weight", "≈0.1215 g", "Gold & jewel trade", "Trade & Commerce", "Gunja seed used by jewellers and merchants for weighing precious metals and gemstones.", "Ancient", "Goa", "Charaka Samhita"),
    (2, "Masha", "माश", "Masha", "Māṣa", "Weight", 2, "8 Gunja = 1 Masha", "≈0.97 g", "Spice trade", "Trade & Commerce", "Used for weighing spices, medicines and valuable commodities.", "Ancient", "Goa", "Arthashastra"),
    (3, "Karsha", "कर्ष", "Karsha", "Karṣa", "Weight", 3, "12 Masha = 1 Karsha", "≈12 g", "Merchant weighing", "Trade & Commerce", "Commercial weight used for valuable goods.", "Ancient", "Goa", "Charaka Samhita"),
    (4, "Tola", "तोळा", "Tola", "Tolā", "Weight", 4, "Traditional weight unit", "≈11.66 g", "Bullion trade", "Trade & Commerce", "Standard unit used by jewellers and bullion merchants.", "Medieval-Modern", "Goa", "Portuguese Goa Trade Records"),
    (5, "Chhatak", "छटाक", "Chhatak", "—", "Weight", 5, "16 Chhatak = 1 Sher", "≈58 g", "Grocery trade", "Trade & Commerce", "Used for spices, sugar, pulses and ghee in markets.", "Portuguese Period", "Goa", "Goa Revenue Manuals"),
    (6, "Pala", "पळ", "Pala", "Pala", "Weight", 6, "4 Karsha = 1 Pala", "≈48 g", "Commodity trade", "Trade & Commerce", "Standard weight used in commercial transactions.", "Ancient", "Goa", "Charaka Samhita"),
    (7, "Sher", "शेर", "Sher", "Śēr", "Weight/Capacity", 7, "Standard market measure", "≈0.93 kg", "Rice & spice trade", "Trade & Commerce", "Common market unit for grains, spices, oils and coconuts.", "Medieval-Colonial", "Goa", "Bombay Presidency Gazetteer"),
    (8, "Man", "मण", "Man", "Maṇa (relevant)", "Weight", 8, "40 Sher = 1 Man", "≈37.3 kg", "Wholesale trade", "Trade & Commerce", "Bulk trading unit for rice, coconuts and arecanuts.", "Colonial", "Goa", "Portuguese Administrative Records"),
    (9, "Padi", "पडडी", "Padi", "Prastha (relevant)", "Capacity", 9, "Tradition of grain measure", "≈3–4 L (regional variation)", "Grain markets", "Trade & Commerce", "Capacity measure used for rice and pulses in village markets.", "Traditional", "Goa", "Goan Rural Traditions"),
    (10, "Adholi", "अढोली", "Adholi", "—", "Capacity", 10, "2 Padi = 1 Adholi", "Regional variation", "Grain trade", "Trade & Commerce", "Medium-sized grain measure used in commercial transactions.", "Traditional", "Goa", "Village Revenue Records"),
    (11, "Goni", "गोणी", "Goni", "—", "Sack Measure", 11, "Grain sack", "Commodity dependent", "Commodity transport", "Trade & Commerce", "Traditional sack used for rice, coconuts and spices.", "Traditional", "Goa", "Agricultural Market Records"),
    (12, "Tooli", "टोळी", "Tooli", "—", "Basket Measure", 12, "Basket measure", "Regional variation", "Market transactions", "Trade & Commerce", "Bamboo basket used for fruits, vegetables and spices.", "Traditional", "Goa", "Goan Folk Traditions"),
    (13, "Bhar", "भार", "Bhar", "Bhāra", "Load Measure", 13, "One head-load", "≈20–30 kg (regional variation)", "Local transport", "Trade & Commerce", "Standard manual load carried by labourers in local markets.", "Traditional", "Goa", "Rural Labour Practices"),
    (14, "Bailgadi Bhar", "बैलगाडी भार", "Bailgadi Bhar", "—", "Cart Load", 14, "Bullock-cart load", "Regional variation", "Inland trade", "Trade & Commerce", "Quantity transported in one bullock cart.", "Medieval-Modern", "Goa", "Rural Transport Records"),
    (15, "Naral Goni", "नारळ गोणी", "Naral Goni", "—", "Coconut Sack", 15, "Sack of coconuts", "Commodity dependent", "Coconut trade", "Trade & Commerce", "Standard sack used in the coconut trade.", "Portuguese Period", "Goa", "Coconut Trade Records"),
    (16, "Supari Goni", "सुपारी गोणी", "Supari Goni", "—", "Arecanut Sack", 16, "Sack of arecanuts", "Commodity dependent", "Arecanut trade", "Trade & Commerce", "Traditional sack used in the arecanut trade.", "Portuguese Period", "Goa", "Arecanut Trade Records"),
    (17, "Pardau", "पर्दाव", "Pardau", "—", "Silver Coin", 17, "Portuguese coin", "Regional variation", "Commercial transaction", "Trade & Commerce", "Silver coin widely circulated in Portuguese Goa.", "Portuguese Period", "Goa", "Portuguese India Coinage"),
    (18, "Xerafim", "झेराफिम", "Xerafim", "—", "Silver Coin", 18, "Higher denomination coin", "Regional variation", "Overseas trade", "Trade & Commerce", "Silver coin circulated in Indo-Portuguese trade.", "Portuguese Period", "Goa", "Goa Numismatic Studies"),
    (19, "Rupaya", "रुपया", "Rupaya", "Rūpya", "Currency", 19, "Standard silver currency", "Historic silver standard", "Domestic commerce", "Trade & Commerce", "Principal currency used alongside Portuguese coinage during later periods.", "Colonial", "Goa", "Bombay Presidency Records"),
    (20, "Hundi", "हुंडी", "Hundi", "Huṇḍikā", "Financial Instrument", 20, "Merchant bill of exchange", "Not applicable", "Long-distance trade", "Trade & Commerce", "Credit instrument used by merchants for commercial transactions without transporting cash.", "Medieval-Colonial", "Goa", "Indian Merchant Records, Portuguese Trade Archives")
]

architecture_rows = [
    (1, "Paramanu", "परमाणु", "Paramanu", "Paramāṇu", "Length", 1, "Smallest theoretical unit", "Theoretical", "Temple planning", "Architecture", "Smallest conceptual unit used in traditional architectural calculations.", "Ancient", "Goa", "Mānasāra"),
    (2, "Raji", "राजी", "Raji", "Rajī", "Length", 2, "Larger than Paramanu", "Theoretical", "Architectural calculations", "Architecture", "Minute unit used in proportional architectural design.", "Ancient", "Goa", "Mayamata"),
    (3, "Yava", "यव", "Yava", "Yava", "Length", 3, "8 Yava = 1 Angula", "≈2.4 mm", "Stone carving", "Architecture", "Barley grain used as the smallest practical unit in carving and layout.", "Ancient", "Goa", "Mānasāra"),
    (4, "Angula", "अंगुळ", "Angula", "Aṅgula", "Length", 4, "8 Yava = 1 Angula", "≈1.9 cm", "Building construction", "Architecture", "Basic unit used for temples, churches and traditional houses.", "Ancient-Colonial", "Goa", "Mayamata"),
    (5, "Vitasti", "वितस्ती", "Vitasti", "Vitasti", "Length", 5, "12 Angula = 1 Vitasti", "≈22.8 cm", "Building layout", "Architecture", "Palm-span measurement used in structural planning.", "Ancient", "Goa", "Mānasāra"),
    (6, "Hasta", "हात", "Hasta", "Hasta", "Length", 6, "24 Angula = 1 Hasta", "≈45.7 cm", "Temple construction", "Architecture", "Cubit widely used by masons and carpenters.", "Ancient-Colonial", "Goa", "Śilpa Śāstra"),
    (7, "Aratni", "अरत्नी", "Aratni", "Aratni", "Length", 7, "Elbow to finger tip", "≈41 cm", "Sculpture", "Architecture", "Cubit variation used for sculptures and wooden structures.", "Ancient", "Goa", "Mayamata"),
    (8, "Tala", "ताल", "Tala", "Tāla", "Proportional Measure", 8, "Basic proportion unit", "Variable", "Idol construction", "Architecture", "Canonical measure for icons, temple idols and carvings.", "Ancient", "Goa", "Śilpa Śāstra"),
    (9, "Danda", "दांड", "Danda", "Daṇḍa", "Length", 9, "4 Hasta = 1 Danda", "≈1.83 m", "Site measurement", "Architecture", "Measurement rod used for boundaries and building layouts.", "Ancient", "Goa", "Arthashastra"),
    (10, "Kathi", "काठी", "Kathi", "Daṇḍa (related)", "Length", 10, "Measuring pole", "≈2–3 m (regional variation)", "Land & construction", "Architecture", "Wooden measure pole used by builders.", "Medieval", "Goa", "Goa Revenue Records"),
    (11, "Gaz", "गज", "Gaz", "Gaja", "Length", 11, "Traditional yard", "≈0.9144 m", "House construction", "Architecture", "Standard yard used in Portuguese and later periods.", "Portuguese Period", "Goa", "Portuguese Engineering Records"),
    (12, "Rajju", "रज्जु", "Rajju", "Rajju", "Length", 12, "Rope measure", "Variable", "Foundation layout", "Architecture", "Measurement rope used to mark boundaries and used also constr.", "Ancient-Modern", "Goa", "Mānasāra"),
    (13, "Pada", "पद", "Pada", "Pada", "Length", 13, "12 Angula", "≈22.8 cm", "Structural planning", "Architecture", "Footstep module used in architectural planning.", "Ancient", "Goa", "Mayamata"),
    (14, "Kishku Hasta", "किष्कू हात", "Kishku Hasta", "Kiṣku Hasta", "Length", 14, "Variant of Hasta", "≈41–45 cm", "Residential buildings", "Architecture", "Cubit measure used for residential construction.", "Ancient", "Goa", "Mānasāra"),
    (15, "Prajapatya Hasta", "प्रजापत्य हात", "Prajapatya Hasta", "Prājāpatya Hasta", "Length", 15, "Variant of Hasta", "≈48 cm", "Sacred architecture", "Architecture", "Cubit prescribed for temples and sacred structures.", "Ancient", "Goa", "Mayamata"),
    (16, "Dhanus", "धनुष", "Dhanus", "Dhanus", "Length", 16, "4 Danda = 1 Dhanus", "≈7.3 m", "Town planning", "Architecture", "Used in planning forts, settlements and public roads.", "Ancient", "Goa", "Arthashastra"),
    (17, "Krosa", "क्रोश", "Krosa", "Krośa", "Distance", 17, "Larger than Dhanus", "≈3.2 km", "Regional planning", "Architecture", "Used for measuring distances between villages and forts.", "Ancient", "Goa", "Arthashastra"),
    (18, "Yojana", "योजना", "Yojana", "Yojana", "Distance", 18, "4 Krosa = 1 Yojana", "≈12.8–13 km", "Regional planning", "Architecture", "Large geographical unit used in planning roads and territories.", "Ancient", "Goa", "Puranas, Arthashastra"),
    (19, "Ayadi Mana", "आयादी मान", "Ayadi Mana", "Āyādi Māna", "Architectural Calculation", 19, "Vastu calculation", "Not in SI units", "Temple architecture", "Architecture", "Traditional Vāstu calculation used to determine proportions, building dimensions.", "Ancient-Medieval", "Goa", "Mayamata"),
    (20, "Sutra", "सुत्र", "Sutra", "Sūtra", "Survey Measure", 20, "Measuring cord", "Variable", "Construction alignment", "Architecture", "Measurement cord used by builders for accurate alignment during construction.", "Ancient-Colonial", "Goa", "Samarāṅgaṇa Sūtradhāra")
]

medicine_rows = [
    (1, "Gunja", "गुंज", "Gunja", "Guñjā (raktikā)", "Weight", 1, "Smallest practical weight", "≈0.1215 g", "Herbal medicines", "Medicine (Ayurveda)", "Gunja seed used for weighing herbs, minerals and medicinal ingredients.", "Ancient", "Goa", "Charaka Samhita"),
    (2, "Ratti", "रत्ती", "Ratti", "Raktikā", "Weight", 2, "Equivalent to Gunja seed", "≈0.1215 g", "Metallic medicines", "Medicine (Ayurveda)", "Standard seed weight used in Ayurvedic and Rasashastra preparations.", "Ancient", "Goa", "Sushruta Samhita"),
    (3, "Masha", "माश", "Masha", "Māṣa", "Weight", 3, "8 Ratti = 1 Masha", "≈0.97 g", "Herbal powders", "Medicine (Ayurveda)", "Used for measuring herbal powders, tablets and medicinal pills.", "Ancient", "Goa", "Charaka Samhita"),
    (4, "Karsha", "कर्ष", "Karsha", "Karṣa", "Weight", 4, "12 Masha = 1 Karsha", "≈12 g", "Medicinal preparations", "Medicine (Ayurveda)", "Standard weight for herbs, roots and mineral ingredients.", "Ancient", "Goa", "Charaka Samhita"),
    (5, "Tola", "तोळा", "Tola", "Tolā", "Weight", 5, "Traditional weight unit", "≈11.66 g", "Precious medicines", "Medicine (Ayurveda)", "Used for weighing costly herbs, metals and medicine compounds.", "Medieval-Modern", "Goa", "Portuguese Goa Pharmacopoeia Records"),
    (6, "Pala", "पळ", "Pala", "Pala", "Weight", 6, "4 Karsha = 1 Pala", "≈48 g", "Herbal decoctions", "Medicine (Ayurveda)", "Standard unit for preparing herbal medicines and decoctions.", "Ancient", "Goa", "Ashtanga Hridaya"),
    (7, "Prasuti", "प्रसुती", "Prasuti", "Prasṛti", "Volume", 7, "2 Pala = 1 Prasṛti", "≈96 ml", "Herbal decoctions", "Medicine (Ayurveda)", "Used for medicinal oils, ghee and liquid medicine.", "Ancient", "Goa", "Charaka Samhita"),
    (8, "Kudava", "कुडव", "Kudava", "Kuḍava", "Capacity", 8, "2 Prasṛti = 1 Kuḍava", "≈192 ml", "Liquid medicines", "Medicine (Ayurveda)", "Canonical measure used in Ayurvedic pharmacies.", "Ancient", "Goa", "Sushruta Samhita"),
    (9, "Prastha", "प्रस्थ", "Prastha", "Prastha", "Capacity", 9, "4 Kudava = 1 Prastha", "≈768 ml", "Pharmacy preparation", "Medicine (Ayurveda)", "Standard liquid measure used for oils, decoctions, panakas.", "Ancient", "Goa", "Charaka Samhita"),
    (10, "Adhaka", "आढक", "Adhaka", "Āḍhaka", "Capacity", 10, "4 Prastha = 1 Āḍhaka", "≈3.07 L", "Bulk preparation", "Medicine (Ayurveda)", "Used for preparing large batches of herbal decoctions.", "Ancient", "Goa", "Sushruta Samhita"),
    (11, "Drona", "द्रोण", "Drona", "Droṇa", "Capacity", 11, "4 Adhaka = 1 Droṇa", "≈12.3 L", "Bulk fermentation", "Medicine (Ayurveda)", "Large canonical unit for asavas, arishtas, liquids.", "Ancient", "Goa", "Charaka Samhita"),
    (12, "Bindu", "बिंदू", "Bindu", "Bindu", "Liquid Measure", 12, "Single drop", "≈0.05 ml (approx.)", "Eye & nasal medicines", "Medicine (Ayurveda)", "Smallest liquid unit (drop) used in Ayurveda.", "Ancient", "Goa", "Sushruta Samhita"),
    (13, "Anjali", "अंजली", "Anjali", "Añjali", "Volume", 13, "Two cupped palms", "Person dependent", "Patient dosage", "Medicine (Ayurveda)", "Traditional body-based measure for dosage, syrups.", "Ancient", "Goa", "Charaka Samhita"),
    (14, "Mushti", "मुष्टी", "Mushti", "Muṣṭi", "Volume", 14, "One handful", "Person dependent", "Herbal collection", "Medicine (Ayurveda)", "Handful measure used for gathering fresh medicinal herbs.", "Ancient", "Goa", "Ayurvedic Pharmacopoeia Manuals"),
    (15, "Angula", "अंगुळ", "Angula", "Aṅgula", "Length", 15, "Finger-width", "≈1.9 cm", "Surgical procedures", "Medicine (Ayurveda)", "Used to measure wounds, incisions and bandages.", "Ancient", "Goa", "Sushruta Samhita"),
    (16, "Hasta", "हात", "Hasta", "Hasta", "Length", 16, "24 Angula = 1 Hasta", "≈45.7 cm", "Measurement procedures", "Medicine (Ayurveda)", "Used for body measurements in diagnosis and treatment.", "Ancient", "Goa", "Ashtanga Hridaya"),
    (17, "Yava", "यव", "Yava", "Yava", "Length", 17, "Grain-based unit", "≈2.4 mm", "Surgical measurement", "Medicine (Ayurveda)", "Used in surgical measurements and measurement of instruments.", "Ancient", "Goa", "Sushruta Samhita"),
    (18, "Shana", "शाण", "Shana", "Śāṇa", "Weight", 18, "Traditional medicinal unit", "≈1.5–3 g (regional variation)", "Herbal formulation", "Medicine (Ayurveda)", "Used for herbal powders and medicine compounds.", "Medieval", "Goa", "Rasashastra Texts"),
    (19, "Patra", "पात्र", "Patra", "Pātra", "Vessel Measure", 19, "Medicine container", "Variable", "Medicine preparation", "Medicine (Ayurveda)", "Vessel used for preparing, boiling, medicinal mixtures.", "Ancient-Modern", "Goa", "Traditional Ayurvedic Pharmacy Records"),
    (20, "Kalasha", "कळश", "Kalasha", "Kalaśa", "Storage Vessel", 20, "Large storage vessel", "Variable", "Medicine storage", "Medicine (Ayurveda)", "Large earthen or metal vessel used for storing medicated oils and decoctions.", "Ancient-Modern", "Goa", "Traditional Goan Vaidya Practices")
]

textile_rows = [
    (1, "Yava", "यव", "Yava", "Yava", "Length", 1, "8 Yava = 1 Angula", "≈2.4 mm", "Fine weaving", "Textile & Handloom", "Barley grain used as the smallest reference unit in textile measurements.", "Ancient", "Goa", "Mānasāra"),
    (2, "Angula", "अंगुळ", "Angula", "Aṅgula", "Length", 2, "8 Yava = 1 Angula", "≈1.9 cm", "Cloth measurement", "Textile & Handloom", "Finger-width measure used by weavers and tailors.", "Ancient", "Goa", "Mayamata"),
    (3, "Vitasti", "वितस्ती", "Vitasti", "Vitasti", "Length", 3, "12 Angula = 1 Vitasti", "≈22.8 cm", "Loom setup", "Textile & Handloom", "Palm-span measure used for loom preparation and cloth width.", "Ancient", "Goa", "Mānasāra"),
    (4, "Hasta", "हात", "Hasta", "Hasta", "Length", 4, "24 Angula = 1 Hasta", "≈45.7 cm", "Cloth weaving", "Textile & Handloom", "Cubit used for measuring cotton and handwoven cloth.", "Ancient-Colonial", "Goa", "Śilpa Śāstra"),
    (5, "Gaz", "गज", "Gaz", "Gaja", "Length", 5, "Traditional yard", "≈0.9144 m", "Textile trade", "Textile & Handloom", "Standard yard used in cloth markets during the Portuguese period.", "Portuguese Period", "Goa", "Portuguese Trade Records"),
    (6, "Kathi", "काठी", "Kathi", "Daṇḍa (related)", "Length", 6, "Measuring rod", "≈2–3 m (regional variation)", "Warp measurement", "Textile & Handloom", "Wooden rod used for measuring warp length before weaving.", "Medieval", "Goa", "Goan Weaving Traditions"),
    (7, "Sut", "सुत", "Sut", "Sūtra", "Yarn Measure", 7, "Single thread", "—", "Yarn preparation", "Textile & Handloom", "Individual thread used for weaving cotton fabrics.", "Ancient", "Goa", "Tradition of Weaving Manuals"),
    (8, "Tantu", "तंतू", "Tantu", "Tantu", "Yarn Measure", 8, "Single fibre", "—", "Yarn spinning", "Textile & Handloom", "Individual fibre before spinning into thread.", "Ancient", "Goa", "Śilpa Śāstra"),
    (9, "Hank", "हँक", "Hank", "—", "Yarn Bundle", 9, "Bundle of yarn", "Standard textile bundle", "Yarn trade", "Textile & Handloom", "Standard bundle used in cotton spinning and weaving.", "Colonial", "Goa", "Bombay Presidency Textile Records"),
    (10, "Sutachi Gunch", "सुताची गुंच", "Sutachi Gunch", "—", "Yarn Bundle", 10, "Bundle of thread", "Regional variation", "Loom preparation", "Textile & Handloom", "Bundle of yarn thread prepared before weaving.", "Traditional", "Goa", "Goan Handloom Traditions"),
    (11, "Tano", "ताणो", "Tano", "Tantu (related)", "Warp Measure", 11, "Warp threads", "Variable", "Loom preparation", "Textile & Handloom", "Longitudinal threads stretched across the loom.", "Traditional", "Goa", "Tradition of Weaving Records"),
    (12, "Bano", "बाणो", "Bano", "Vāṇa (related)", "Weft Measure", 12, "Weft threads", "Variable", "Fabric weaving", "Textile & Handloom", "Crosswise threads woven through the warp.", "Traditional", "Goa", "Goan Textile Records"),
    (13, "Magga Rundai", "माग रुंदाय", "Magga Rundai", "—", "Loom Width", 13, "Loom width", "Variable", "Cloth production", "Textile & Handloom", "Width of cloth determined by the traditional loom.", "Traditional", "Goa", "Rural Weaving Practices"),
    (14, "Sadi Lambai", "साडी लांबाय", "Sadi Lambai", "—", "Cloth Length", 14, "Standard saree length", "≈5–6 m", "Saree weaving", "Textile & Handloom", "Traditional length used for weaving Goan sarees.", "Medieval-Modern", "Goa", "Goan Textile Traditions"),
    (15, "Dhoti Lambai", "धोती लांबाय", "Dhoti Lambai", "—", "Cloth Length", 15, "Standard dhoti length", "≈4–5 m", "Dhoti weaving", "Textile & Handloom", "Traditional length used for weaving dhotis.", "Medieval-Modern", "Goa", "Village Textile Records"),
    (16, "Kapad Tukdo", "कापड तुकडो", "Kapad Tukdo", "—", "Cloth Measure", 16, "Cloth piece", "Commodity dependent", "Retail trade", "Textile & Handloom", "Individual cut piece of cloth sold in local markets.", "Traditional", "Goa", "Market Records"),
    (17, "Gatho", "गाठो", "Gatho", "—", "Cloth Bundle", 17, "Bundle of cloths", "Commodity dependent", "Textile transport", "Textile & Handloom", "Bundle of woven cloth prepared for merchants.", "Traditional", "Goa", "Portuguese Textile Archives"),
    (18, "Goni", "गोणी", "Goni", "—", "Sack Measure", 18, "Textile sack", "Commodity dependent", "Yarn transport", "Textile & Handloom", "Traditional sack used for transporting yarn and woven cloth.", "Traditional", "Goa", "Textile Trade Records"),
    (19, "Bale", "बेल", "Bale", "—", "Bulk Textile Measure", 19, "Multiple bundles", "Commodity dependent", "Cotton export", "Textile & Handloom", "Compressed bale of cotton or cloth for export through Goan ports.", "Colonial", "Goa", "Portuguese Shipping Records"),
    (20, "Coir Bundle", "नारळ दोर गट्ठा", "Coir Bundle", "Rajju (related)", "Fibre Bundle", 20, "Bundle of coir fibre", "Commodity dependent", "Coir industry", "Textile & Handloom", "Bundle of coconut fibre used for rope making, mats and export trade.", "Medieval-Modern", "Goa", "Goan Coir Industry Records")
]

# NEW SECTORS FROM THE USER'S LATEST UPLOADS:

currency_rows = [
    (1, "Gunja", "गुंज", "Gunja", "Guñjā (raktikā)", "Weight", 1, "Seed weight", "≈0.1215 g", "Gold weighing", "Currency & Money", "Gunja seed used by jewellers and merchants for weighing precious metals and gemstones.", "Ancient", "Goa", "Charaka Samhita"),
    (2, "Ratti", "रत्ती", "Ratti", "Raktikā", "Weight", 2, "Equivalent to Gunja seed", "≈0.1215 g", "Bullion trade", "Currency & Money", "Standard seed weight used for precious metals.", "Ancient", "Goa", "Arthashastra"),
    (3, "Masha", "माश", "Masha", "Māṣa", "Weight", 3, "8 Ratti = 1 Masha", "≈0.97 g", "Monetary weight", "Currency & Money", "Used in precious metals and monetary standards.", "Ancient", "Goa", "Arthashastra"),
    (4, "Karsha", "कर्ष", "Karsha", "Karṣa", "Weight", 4, "12 Masha = 1 Karsha", "≈12 g", "Monetary standard", "Currency & Money", "Standard weight used for coins and precious metals.", "Ancient", "Goa", "Charaka Samhita"),
    (5, "Tola", "तोळा", "Tola", "Tolā", "Weight", 5, "Traditional weight unit", "≈11.66 g", "Bullion trade", "Currency & Money", "Standard bullion weight used for precious metals.", "Medieval-Modern", "Goa", "Portuguese Goa Trade Records"),
    (6, "Pala", "पळ", "Pala", "Pala", "Weight", 6, "4 Karsha = 1 Pala", "≈48 g", "Bullion weighing", "Currency & Money", "Larger weight used in commercial transactions involving precious metals.", "Ancient", "Goa", "Ayurvedic Texts"),
    (7, "Paisa", "पैसा", "Paisa", "Paisa", "Coin", 7, "Fractional coin", "Historical copper value", "Daily market use", "Currency & Money", "Copper denomination widely used in Goan markets.", "Colonial", "Goa", "British Indian Coinage Records"),
    (8, "Anna", "आणा", "Anna", "—", "Coin", 8, "16 Anna = 1 Rupaya", "1/16 of Rupee", "Market currency", "Currency & Money", "Standard unit widely used during British colonial period in Goa.", "Colonial", "Goa", "British India Coinage"),
    (9, "Rupaya", "रुपया", "Rupaya", "Rūpya", "Standard Coin", 9, "16 Anna = 1 Rupaya", "Historic silver standard", "Principal currency", "Currency & Money", "Principal currency used alongside Portuguese coinage during later period.", "Colonial", "Goa", "Bombay Presidency Records"),
    (10, "Pardau", "पर्दाव", "Pardau", "—", "Silver Coin", 10, "Portuguese silver coin", "Regional variation", "Commercial transaction", "Currency & Money", "Indo-Portuguese silver coin widely circulated in Portuguese Goa.", "Portuguese Period", "Goa", "Portuguese India Coinage"),
    (11, "Xerafim", "झेराफिम", "Xerafim", "—", "Silver Coin", 11, "Higher denomination silver coin", "Regional variation", "Overseas trade", "Currency & Money", "Silver coin circulated extensively in Indo-Portuguese trade.", "Portuguese Period", "Goa", "Goa Numismatic Studies"),
    (12, "Tanga", "टांगा", "Tanga", "—", "Coin", 12, "Fractional Portuguese coin", "Regional variation", "Small transactions", "Currency & Money", "Indo-Portuguese coin used for local market trade.", "Portuguese Period", "Goa", "Portuguese Trade Records"),
    (13, "Real", "रेआल", "Real", "—", "Accounting Unit", 13, "Basic Portuguese monetary unit", "Theoretical accounting value", "Financial calculation", "Currency & Money", "Official Portuguese monetary and accounting unit in Goa.", "Portuguese Period", "Goa", "Portuguese Revenue Archives"),
    (14, "Bazaruco", "बाझारुको", "Bazaruco", "Bazaruco", "Low-Value Coin", 14, "Small denomination bronze/copper coin", "Very small fractional value", "Petty market transactions", "Currency & Money", "Very low denomination coin made for small local purchases in markets.", "Portuguese Period", "Goa", "Indo-Portuguese Coinage Records"),
    (15, "S. Tome / San Tome", "सां तोमे", "S. Tome / San Tome", "San Thome", "Gold Coin", 15, "Portuguese gold coin", "≈3.4 g gold", "High-value trade", "Currency & Money", "Gold coin used for luxury trade and large commercial transactions.", "Portuguese Period", "Goa", "Indo-Portuguese Archives"),
    (16, "Ashrafi", "अश्रफी", "Ashrafi", "Ashrafī", "Gold Coin", 16, "High denomination gold coin", "≈10.8 g gold", "Investment and high commerce", "Currency & Money", "Gold coin used in large commercial and treasury transactions.", "Mughal-Portuguese Period", "Goa", "Southern Trade Records"),
    (17, "Damani", "दमडी", "Damani", "Dām (related)", "Fractional Coin", 17, "Copper fractional coin", "Very small fractional value", "Small transactions", "Currency & Money", "Low value copper coin used for local trade and market buying.", "Medieval-Colonial", "Goa", "Indian Coinage Manuals"),
    (18, "Hundi", "हुंडी", "Hundi", "Huṇḍikā", "Financial Instrument", 18, "Merchant bill of exchange", "Not applicable", "Long-distance trade", "Currency & Money", "Credit note used by merchants for trading without transporting cash.", "Medieval-Colonial", "Goa", "Maritime Merchant Records"),
    (19, "Dakhina", "दक्षिणा", "Dakhina", "Dakṣiṇā", "Monetary Offering", 19, "Traditional religious monetary unit", "Variable", "Religious offerings", "Currency & Money", "Traditional monetary gift paid for ritual services and priestly duties.", "Ancient-Modern", "Goa", "Dharmashastra Texts"),
    (20, "Rozgar / Vetan", "रोजगार / वेतन", "Rozgar / Vetan", "Rozgar", "Allowance / Wage", 20, "Daily wage / allowance unit", "Variable", "Wage payment", "Currency & Money", "Standard payment measured in coin or currency for daily labour.", "Medieval-Colonial", "Goa", "Administrative Records")
]

household_rows = [
    (1, "Bindu", "बिंदू", "Bindu", "Bindu", "Liquid Measure", 1, "Single drop", "≈0.05 ml (approx.)", "Oils & medicines", "Household", "Smallest liquid measure used for oil, medicine and ritual purposes.", "Ancient", "Goa", "Charaka Samhita"),
    (2, "Gunja", "गुंज", "Gunja", "Guñjā", "Weight", 2, "Seed weight", "≈0.1215 g", "Spices", "Household", "Seed weight used for saffron, pepper and medicinal herbs.", "Ancient", "Goa", "Charaka Samhita"),
    (3, "Masha", "माश", "Masha", "Māṣa", "Weight", 3, "8 Gunja = 1 Masha", "≈0.97 g", "Medicines & spices", "Household", "Used for weighing spices and herbal ingredients.", "Ancient", "Goa", "Sushruta Samhita"),
    (4, "Tola", "तोळा", "Tola", "Tolā", "Weight", 4, "Traditional weight", "≈11.66 g", "Kitchen ingredients", "Household", "Used for ghee, jaggery, spices and precious ingredients.", "Medieval-Modern", "Goa", "Portuguese Trade Records"),
    (5, "Chhatak", "छटाक", "Chhatak", "—", "Weight", 5, "16 Chhatak = 1 Sher", "≈58 g", "Grocery measurement", "Household", "Used for rice, sugar, pulses, flour and spices.", "Portuguese Period", "Goa", "Goa Revenue Manuals"),
    (6, "Pala", "पळ", "Pala", "Pala", "Weight", 6, "4 Karsha = 1 Pala", "≈48 g", "Food ingredients", "Household", "Traditional unit for grains and cooking ingredients.", "Ancient", "Goa", "Ayurvedic Texts"),
    (7, "Sher", "शेर", "Sher", "Śēr", "Weight/Capacity", 7, "Standard market measure", "≈0.93 kg", "Grain measure", "Household", "Common household measure for flour, wheat and pulses.", "Medieval-Colonial", "Goa", "Bombay Presidency Gazetteer"),
    (8, "Padi", "पडडी", "Padi", "Prastha (relevant)", "Capacity", 8, "Tradition of grain measure", "≈3–4 L (regional variation)", "Grain measure", "Household", "Measure used for portioning rice and cereals.", "Traditional", "Goa", "Goan Rural Traditions"),
    (9, "Adholi", "अढोली", "Adholi", "—", "Capacity", 9, "2 Padi = 1 Adholi", "Regional variation", "Grain storage", "Household", "Medium-sized household grain measure.", "Traditional", "Goa", "Village Revenue Records"),
    (10, "Man", "मण", "Man", "Maṇa (relevant)", "Bulk Capacity", 10, "40 Sher = 1 Man", "≈37.3 kg", "Bulk grain storage", "Household", "Used for storing rice, coconuts and arecanuts.", "Colonial", "Goa", "Portuguese Administrative Records"),
    (11, "Tooli", "टोळी", "Tooli", "—", "Basket Measure", 11, "Basket measure", "Regional variation", "Vegetables & fruits", "Household", "Bamboo basket used for vegetables, coconuts and fruits.", "Traditional", "Goa", "Goan Folk Traditions"),
    (12, "Goni", "गोणी", "Goni", "—", "Sack Measure", 12, "Sack measure", "Commodity dependent", "Grain storage", "Household", "Traditional sack used for rice, coconuts and spices.", "Traditional", "Goa", "Agricultural Market Records"),
    (13, "Pothi", "पोथी", "Pothi", "—", "Cloth Bundle", 13, "Cloth bundle", "Commodity dependent", "Food storage", "Household", "Cloth bundle used to store spices, grains and household goods.", "Traditional", "Goa", "Village Customs"),
    (14, "Handi", "हंडी", "Handi", "Hāṇḍī", "Vessel Measure", 14, "Cooking pot", "≈2–5 L (varies)", "Cooking", "Household", "Earthen or brass cooking vessel used in traditional Goan homes.", "Ancient-Modern", "Goa", "Goan Household Traditions"),
    (15, "Ghado", "घडो", "Ghado", "Ghaṭa", "Water Vessel", 15, "Water pot", "≈10–15 L (regional variation)", "Water storage", "Household", "Earthen pot used for storing drinking water.", "Medieval-Modern", "Goa", "Rural Customs"),
    (16, "Kalash", "कळश", "Kalash", "Kalaśa", "Storage Vessel", 16, "Metal/brass vessel", "≈5–10 L (varies)", "Water & rituals", "Household", "Metal vessel used for water storage and religious ceremonies.", "Ancient-Modern", "Goa", "Dharmashastra Texts"),
    (17, "Dabba", "डब्बा", "Dabba", "—", "Storage Container", 17, "Metal container", "Variable", "Food storage", "Household", "Metal container used for storing flour, spices and grains.", "Colonial-Modern", "Goa", "Household Records"),
    (18, "Bhar", "भार", "Bhar", "Bhāra", "Load Measure", 18, "One head-load", "≈20–30 kg (regional variation)", "Household transport", "Household", "Standard load carried manually from market or farm to home.", "Traditional", "Goa", "Rural Labour Practices"),
    (19, "Kothar", "कोठार", "Kothar", "Koṣṭhāgāra", "Granary", 19, "Household grain storage", "Variable", "Long-term grain preservation", "Household", "Traditional wooden or mud granary used for storing rice.", "Ancient-Modern", "Goa", "Rural Architecture Studies"),
    (20, "Dhanya Kothar", "धान्या कोठार", "Dhanya Kothar", "Dhānya Koṣṭhāgāra", "Granary", 20, "Large grain storage structure", "Variable", "Community grain reserve", "Household", "Large granary used for preserving harvested grain for extended periods.", "Medieval-Modern", "Goa", "Goa Revenue Records")
]

storage_rows = [
    (1, "Padi", "पडडी", "Padi", "Prastha (relevant)", "Capacity", 1, "Basic grain measure", "≈3–4 L (regional variation)", "Grain storage", "Storage & Transportation", "Base measure used for grain storage and local transport.", "Traditional", "Goa", "Goan Village Customs"),
    (2, "Adholi", "अढोली", "Adholi", "—", "Capacity", 2, "2 Padi = 1 Adholi", "Regional variation", "Grain storage", "Storage & Transportation", "Medium-sized grain measure used for local transport and storage.", "Traditional", "Goa", "Goan Revenue Manuals"),
    (3, "Sher", "शेर", "Sher", "Śēr", "Weight/Capacity", 3, "Standard market measure", "≈0.93 kg", "Grain transport & storage", "Storage & Transportation", "Standard market measure used in storage and transport of rice and pulses.", "Medieval-Colonial", "Goa", "Bombay Presidency Gazetteer"),
    (4, "Man", "मण", "Man", "Maṇa (relevant)", "Weight", 4, "40 Sher = 1 Man", "≈37.3 kg", "Wholesale transport", "Storage & Transportation", "Bulk unit used for wholesale transport of commodities.", "Colonial", "Goa", "Portuguese Administrative Records"),
    (5, "Khandi", "खंडी", "Khandi", "Khaṇḍī", "Bulk Weight", 5, "20 Man = 1 Khandi (regional variation)", "≈746 kg (regional variation)", "Bulk storage", "Storage & Transportation", "Large wholesale and export measurement unit for bulk goods.", "Medieval-Colonial", "Goa", "Goa Port Records"),
    (6, "Goni", "गोणी", "Goni", "—", "Sack Measure", 6, "Sack measure", "Commodity dependent", "Commodity transport", "Storage & Transportation", "Traditional sack used for shipping and transporting commodities.", "Traditional", "Goa", "Agricultural Market Records"),
    (7, "Pothi", "पोथी", "Pothi", "—", "Bundle Measure", 7, "Cloth bundle", "Commodity dependent", "Commodity transport", "Storage & Transportation", "Cloth bundle used for transport of spices and precious seeds.", "Traditional", "Goa", "Village Customs"),
    (8, "Tooli", "टोळी", "Tooli", "—", "Basket Measure", 8, "Basket measure", "Regional variation", "Farm transport", "Storage & Transportation", "Bamboo basket used for transport of vegetables and fruits.", "Traditional", "Goa", "Goan Folk Traditions"),
    (9, "Bhar", "भार", "Bhar", "Bhāra", "Load Measure", 9, "One head-load", "≈20–30 kg (regional variation)", "Manual transport", "Storage & Transportation", "Standard load carried by manual labourers in markets and docks.", "Traditional", "Goa", "Rural Labour Practices"),
    (10, "Bailgadi Bhar", "बैलगाडी भार", "Bailgadi Bhar", "—", "Cart Load", 10, "Bullock-cart load", "Regional variation", "Inland transport", "Storage & Transportation", "Bulk quantity transported by bullock cart across Goan villages and towns.", "Medieval-Modern", "Goa", "Rural Transport Records"),
    (11, "Hoda / Vodde", "होडा / वोडे", "Hoda / Vodde", "Nau (relevant)", "Boat Load", 11, "River cargo boat load", "Regional variation", "River & coastal transport", "Storage & Transportation", "Cargo capacity of traditional Goan river boats used for transporting rice and spices.", "Medieval-Colonial", "Goa", "Maritime Trade Records"),
    (12, "Naral Goni", "नारळ गोणी", "Naral Goni", "—", "Coconut Sack", 12, "Sack of coconuts", "Commodity dependent", "Coconut trade", "Storage & Transportation", "Standard sack used in transport of coconuts from plantations to ports.", "Portuguese Period", "Goa", "Coconut Trade Records"),
    (13, "Supari Goni", "सुपारी गोणी", "Supari Goni", "—", "Arecanut Sack", 13, "Sack of arecanuts", "Commodity dependent", "Arecanut trade", "Storage & Transportation", "Sack used for transport of arecanuts from plantations to ports.", "Portuguese Period", "Goa", "Arecanut Trade Records"),
    (14, "Kothar", "कोठार", "Kothar", "Koṣṭhāgāra", "Granary", 14, "Grain storage structure", "Variable", "Grain preservation", "Storage & Transportation", "Traditional granary used for long-term storage of agricultural produce.", "Ancient-Modern", "Goa", "Rural Architecture Studies"),
    (15, "Dhanya Kothar", "धान्या कोठार", "Dhanya Kothar", "Dhānya Koṣṭhāgāra", "Communal Granary", 15, "Communal granary storage", "Variable", "Village reserve", "Storage & Transportation", "Large granary used by the Comunidade or village for emergency reserves.", "Medieval-Modern", "Goa", "Comunidade Revenue Records"),
    (16, "Dabba", "डब्बा", "Dabba", "—", "Storage Container", 16, "Metal container", "Variable", "Food storage", "Storage & Transportation", "Metal container used for storing and shipping dry goods.", "Colonial-Modern", "Goa", "Household Records"),
    (17, "Handi", "हंडी", "Handi", "Hāṇḍī", "Storage Vessel", 17, "Earthen pot", "≈2–5 L (varies)", "Liquid storage", "Storage & Transportation", "Earthen vessel used for transport and storage of oil and liquids.", "Ancient-Modern", "Goa", "Goan Household Traditions"),
    (18, "Ghado", "घडो", "Ghado", "Ghaṭa", "Water Vessel", 18, "Water pot", "≈10–15 L (regional variation)", "Water transport", "Storage & Transportation", "Earthen pot used for transporting and storing drinking water.", "Medieval-Modern", "Goa", "Rural Customs"),
    (19, "Bale", "बेल", "Bale", "—", "Bulk Cargo", 19, "Compressed bale of goods", "Commodity dependent", "Export transport", "Storage & Transportation", "Compressed cotton or textile bale prepared for maritime export through Goan ports.", "Colonial", "Goa", "Portuguese Shipping Records"),
    (20, "Godown / Pakko", "गोडावून / पाक्को", "Godown / Pakko", "Bhandagara (relevant)", "Warehouse Capacity", 20, "Commercial warehouse facility", "Variable", "Commercial storage & distribution", "Storage & Transportation", "Commercial warehouse used to store spices and commodities before shipping and export.", "Portuguese Period - Modern", "Goa", "Portuguese Customs Records")
]

land_rows = [
    (1, "Vaar / Var", "वार", "Vaar", "—", "Area Measurement", 1, "Small plot measurement", "Regional variation", "Used for small house plots", "Land Measurement", "Traditional Goan land measurement unit", "Portuguese period onwards", "Coastal Goa", "Goan land practices"),
    (2, "Square Gaj", "चौक गज", "Square Gaj", "Gaja", "Area Measurement", 2, "1 Square Gaj = 9 sq.ft", "0.836 sq.m", "Used for residential plots", "Land Measurement", "Yard-based plot measurement", "Medieval–Modern period", "Urban Goa", "Traditional Indian land measures"),
    (3, "Kuli / Kuzhi", "कुळी", "Kuli", "—", "Area Measurement", 3, "Regional relation varies", "≈13.37 sq.m (Tamil influence areas)", "Used for agricultural plots", "Land Measurement", "Small traditional land unit", "Historical period", "Border regions", "South Indian influence"),
    (4, "Guntha", "गुंठा", "Guntha", "—", "Area Measurement", 4, "40 Guntha = 1 Acre", "1,089 sq.ft", "Used for agricultural land", "Land Measurement", "Common Deccan land unit", "Medieval period onwards", "Goa villages", "Revenue records"),
    (5, "Acre", "एकर", "Acre", "—", "Area Measurement", 5, "1 Acre = 40 Guntha", "43,560 sq.ft", "Used for farms and property records", "Land Measurement", "Standard agricultural unit", "Colonial period onwards", "Entire Goa", "Government records"),
    (6, "Hectare", "हेक्टर", "Hectare", "—", "Area Measurement", 6, "1 Hectare = 2.471 Acres", "10,000 sq.m", "Modern official measurement", "Land Measurement", "SI land unit", "Modern period", "Entire Goa", "Land records")
]

transportation_rows = [
    (1, "Angul", "अंगुळ", "Angul / Angula", "अङ्गुल (Aṅgula)", "Length Measurement", 1, "Basic finger-width measurement", "≈1.9 cm", "Used for small measurements in construction and crafts", "Transportation & Distance", "Smallest traditional length unit", "Ancient period", "Goa and Konkan region", "Indian traditional measurement system"),
    (2, "Vitasti", "वितस्ति", "Vitasti", "वितस्ति (Vitasti)", "Length Measurement", 2, "12 Angula = 1 Vitasti", "≈22–24 cm", "Used for short measurements", "Transportation & Distance", "Hand-span measurement from thumb to little finger", "Ancient period", "Goa and western India", "Sanskrit measurement texts"),
    (3, "Hasta", "हात", "Hasta", "हस्त (Hasta)", "Length Measurement", 3, "2 Vitasti = 1 Hasta", "≈45–48 cm", "Used in building, temple architecture and surveying", "Transportation & Distance", "Traditional arm-length measurement", "Ancient–Medieval period", "Entire Goa", "Vastu and architectural traditions"),
    (4, "Gaj", "गज", "Gaj / Gaja", "गज (Gaja)", "Length Measurement", 4, "1 Gaj = 2 Hasta", "≈0.91 m", "Used for land boundaries and route measurement", "Transportation & Distance", "Yard-based measurement unit", "Medieval period onwards", "Goa villages and towns", "Indian land measurement practices"),
    (5, "Danda", "दंड", "Danda", "दण्ड (Daṇḍa)", "Length Measurement", 5, "1 Danda = 4 Hasta", "≈1.8–2 m", "Used in surveying roads, fields and boundaries", "Transportation & Distance", "Rod-based distance unit", "Ancient–Medieval period", "Konkan region including Goa", "Arthashastra references"),
    (6, "Kathi", "काठी", "Kathi", "—", "Length Measurement", 6, "Measuring stick/rod unit", "≈1.5–2 m (varies)", "Used by village surveyors", "Transportation & Distance", "Traditional measuring rod used for fields and paths", "Medieval period onwards", "Rural Goa", "Local survey traditions"),
    (7, "Kos / Krosa", "कोस", "Kos / Krosa", "क्रोश (Krośa)", "Long Distance Measurement", 7, "Traditional multiple of Danda", "≈2–3 km (varies)", "Used for travel distances between villages", "Transportation & Distance", "Ancient travel-distance unit", "Ancient–Medieval period", "Western India including Goa", "Classical Indian texts"),
    (8, "Yojana", "योजन", "Yojana", "योजन (Yojana)", "Long Distance Measurement", 8, "1 Yojana = 4 Kos (traditional relation)", "≈12–15 km (varies)", "Used for describing long journeys and geographical distances", "Transportation & Distance", "Largest classical Indian distance unit", "Ancient period", "Indian subcontinent including Goa", "Puranic and classical literature")
]

livestock_rows = [
    (1, "Ratti", "रत्ती", "Ratti", "Raktika (रक्तिका)", "Weight Measurement", 1, "Basic seed-based weight unit", "≈0.1215 g", "Used for measuring medicinal ingredients and valuable substances used in animal care", "Livestock & Dairy", "Traditional small weight unit based on Gunja seed", "Ancient period onwards", "Goa and Konkan region", "Indian traditional weight systems"),
    (2, "Masha", "माष", "Masha", "Māṣa (माष)", "Weight Measurement", 2, "8 Ratti = 1 Masha", "≈0.97 g", "Used for herbal medicines and veterinary preparations", "Livestock & Dairy", "Small traditional weight measure", "Ancient–Medieval period", "Goa villages", "Sanskrit measurement traditions"),
    (3, "Tola", "तोळा", "Tola", "Tola (तोल)", "Weight Measurement", 3, "12 Masha = 1 Tola", "≈11.66 g", "Used for trade materials, medicines and dairy-related ingredients", "Livestock & Dairy", "Traditional market weight unit", "Medieval period onwards", "Entire Goa", "Traditional Indian weights"),
    (4, "Seer / Ser", "शेर", "Seer", "Śēr", "Weight / Volume Measurement", 4, "Regional multiples of Tola", "≈0.93 kg (varies)", "Used for measuring milk, curd, butter and grains", "Livestock & Dairy", "Common household and market dairy measure", "Medieval–Modern period", "Goa villages and markets", "Konkan measurement traditions"),
    (5, "Pao / Pav", "पाव", "Pau", "—", "Weight / Volume Measurement", 5, "4 Pao = 1 Seer (traditional relation)", "≈230 g", "Used for small quantities of milk products and food items", "Livestock & Dairy", "Quarter measure used in daily trade", "Colonial period onwards", "Goa markets", "Western Indian measurement practices"),
    (6, "Paili", "पायली", "Paili", "—", "Volume Measurement", 6, "Vessel-based measure", "≈1.5–2 litres (regional variation)", "Used for milk, grains and household liquids", "Livestock & Dairy", "Traditional vessel measure used in Konkan region", "Traditional period", "Goa and Konkan", "Local household measures"),
    (7, "Adoli", "अडोळी", "Adoli", "—", "Volume Measurement", 7, "Multiple Paili make larger measures", "Regional variation", "Used for agricultural produce and dairy exchange", "Livestock & Dairy", "Traditional larger vessel measure", "Historical period", "Rural Goa", "Konkan agricultural practices"),
    (8, "Kudav / Kudam", "कुडव / कुडं", "Kudav / Kudam", "Kuḍava", "Volume Measurement", 8, "Vessel-based liquid measure", "≈1–2 litres (varies)", "Used for milk, curd and water storage", "Livestock & Dairy", "Traditional pot measurement", "Ancient–Modern period", "Entire Goa", "Indian vessel measurement traditions"),
    (9, "Ghada", "घडा", "Ghada", "Ghaṭa", "Volume Measurement", 9, "Larger container measure", "≈5–10 litres (varies)", "Used for storing milk and water", "Livestock & Dairy", "Earthen pot-based volume measure", "Traditional period", "Rural Goa", "Village practices"),
    (10, "Handi", "हंडी", "Handi", "—", "Volume Measurement", 10, "Large vessel measure", "Regional variation", "Used for storing large quantities of milk, curd and dairy products", "Livestock & Dairy", "Large household vessel measurement", "Traditional period", "Rural Goa", "Local dairy traditions")
]

gold_rows = [
    (1, "Gunja", "गुंजा", "Gunja", "Guñjā (गुञ्जा)", "Precious Metal Weight", 1, "1 Gunja ≈ 1 Ratti", "≈0.12 g", "Used as a natural seed standard for weighing gold and gemstones", "Gold & Jewellery", "Weight based on Abrus precatorius seed", "Ancient period onwards", "Goa and Konkan region", "Ancient Indian weight traditions"),
    (2, "Ratti", "रत्ती", "Ratti", "Raktika (रक्तिका)", "Precious Metal Weight", 2, "8 Ratti = 1 Masha", "≈0.1215 g", "Used by jewellers for gemstones and small gold quantities", "Gold & Jewellery", "One of the oldest Indian jewellery weight units", "Ancient period onwards", "Entire Goa", "Classical Indian measurement system"),
    (3, "Masha", "माष", "Masha", "Māṣa (माष)", "Precious Metal Weight", 3, "1 Masha = 8 Ratti", "≈0.97 g", "Used for measuring small gold and silver quantities", "Gold & Jewellery", "Intermediate traditional gold weight unit", "Ancient–Medieval period", "Goa jewellery traditions", "Sanskrit texts"),
    (4, "Dharana", "धरण", "Dharana", "Dharaṇa (धरण)", "Precious Metal Weight", 4, "Regional relationship with Ratti/Masha", "≈3–4 g (varies)", "Used in ancient metal trade and jewellery calculations", "Gold & Jewellery", "Classical Indian precious metal unit", "Ancient period", "Konkan region", "Traditional Indian weights"),
    (5, "Pao / Pav", "पाव", "Pao / Pav", "—", "Weight Measurement", 5, "4 Pao = 1 Seer (traditional relation)", "≈230 g", "Used for market weighing including precious and household materials", "Gold & Jewellery", "Western Indian trade measure", "Medieval–Modern period", "Goa markets", "Western Indian measurement practices"),
    (6, "Tola", "तोळा", "Tola", "Tola (तोल)", "Precious Metal Weight", 6, "12 Masha = 1 Tola = 96 Ratti", "≈11.66 g", "Used as a standard gold trading unit", "Gold & Jewellery", "Major traditional jeweller unit before grams", "Medieval–Modern period", "Goa jewellery markets", "Indian gold measurement system"),
    (7, "Vori / Bhori", "वोरी", "Vori / Bhori", "—", "Precious Metal Weight", 7, "Generally equal to Tola", "≈11.66 g", "Used by South and West Indian jewellers", "Gold & Jewellery", "Regional name for Tola", "Modern traditional period", "Goa and Konkan jewellery trade", "Regional jeweller practices"),
    (8, "Tulam / Tula", "तोळं", "Tulam / Tula", "Tulā (तुला)", "Precious Metal Weight", 8, "Larger balance-based weight unit", "Regional variation", "Used for larger gold transactions", "Gold & Jewellery", "Derived from balance weighing system", "Ancient–Medieval period", "Goa and Western India", "Indian traditional weight system"),
    (9, "Pala", "पळ", "Pala", "Pala (पल)", "Precious Metal Weight", 9, "Classical larger weight unit", "≈48 g (approx.)", "Used for bulk precious metals", "Gold & Jewellery", "Classical Indian weight measurement", "Ancient period", "Historical Indian trade regions", "Sanskrit measurement texts"),
    (10, "Karsha", "कर्ष", "Karsha", "Karṣa (कर्ष)", "Precious Metal Weight", 10, "1 Karsha = 16 Masha", "≈12 g (approx.)", "Used in ancient metal measurement", "Gold & Jewellery", "Classical weight unit used for metals and medicines", "Ancient period", "Indian regions including Goa", "Classical literature")
]

sector_specs = [
    ("agriculture", "agri", agriculture_rows),
    ("trade-commerce", "trade", trade_rows),
    ("architecture", "arch", architecture_rows),
    ("medicine", "med", medicine_rows),
    ("textile-handloom", "textile", textile_rows),
    ("currency-money", "curr", currency_rows),
    ("household", "hh", household_rows),
    ("storage-transport", "storage", storage_rows),
    ("land-measurement", "land", land_rows),
    ("transportation-distance", "trans", transportation_rows),
    ("livestock-dairy", "dairy", livestock_rows),
    ("gold-jewellery", "gold", gold_rows),
]

def clean_slug(text):
    return re.sub(r'[^a-zA-Z0-9]+', '-', text.lower()).strip('-')

def map_category(cat_str):
    t = cat_str.lower()
    if "weight" in t:
        return "weight"
    if "length" in t or "distance" in t or "survey" in t:
        return "length"
    if "volume" in t or "capacity" in t or "sack" in t or "basket" in t or "load" in t or "cart" in t or "heap" in t or "granary" in t or "vessel" in t or "drop" in t or "liquid" in t or "container" in t:
        return "volume"
    if "area" in t:
        return "area"
    if "currency" in t or "coin" in t or "financial" in t or "monetary" in t or "wage" in t or "revenue" in t:
        return "currency"
    if "time" in t:
        return "time"
    return "other"

entries = []
for sector_slug, sector_code, rows in sector_specs:
    for r in rows:
        sno, unit_name, konkani_name, eng_trans, sanskrit, category_str, order, relation, approx_eq, hist_usage, sector_name, desc, hist_period, region_of_goa, reference = r
        
        item_id = f"ga-{sector_code}-{sno}"
        slug = f"{clean_slug(unit_name)}-{sector_code}-ga-{sno}"
        category = map_category(category_str)
        
        entry = {
            "id": item_id,
            "slug": slug,
            "name_english": unit_name,
            "name_hindi": eng_trans,
            "category": category,
            "sector": sector_slug,
            "origin": "Goa",
            "states": ["Goa"],
            "local_names": [konkani_name],
            "meaning": desc,
            "used_in": [hist_usage] if hist_usage else [desc],
            "historical_period": hist_period,
            "region_applicable": region_of_goa,
            "measurement_type": category_str,
            "references": [reference] if reference else [],
            "tags": [
                "goa",
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

print(f"Total generated Goa entries: {len(entries)}")
assert len(entries) == 194, f"Expected 194, got {len(entries)}"

ts_content = '''import { Measurement } from "@/types";

export const GOA_MEASUREMENTS: Measurement[] = ''' + json.dumps(entries, ensure_ascii=False, indent=2) + ";\n"

with open("lib/goaData.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print("Successfully written all 194 measurements to lib/goaData.ts!")

