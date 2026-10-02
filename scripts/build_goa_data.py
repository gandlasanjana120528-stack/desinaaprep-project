import json
import re

# Exact data transcribed from the 5 uploaded images

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
    (19, "Rupaya", "र रुपया", "Rupaya", "Rūpya", "Currency", 19, "Standard silver currency", "Historic silver standard", "Domestic commerce", "Trade & Commerce", "Principal currency used alongside Portuguese coinage during later periods.", "Colonial", "Goa", "Bombay Presidency Records"),
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

sector_specs = [
    ("agriculture", "agri", agriculture_rows),
    ("trade-commerce", "trade", trade_rows),
    ("architecture", "arch", architecture_rows),
    ("medicine", "med", medicine_rows),
    ("textile-handloom", "textile", textile_rows),
]

def clean_slug(text):
    return re.sub(r'[^a-zA-Z0-9]+', '-', text.lower()).strip('-')

def map_category(cat_str):
    t = cat_str.lower()
    if "weight" in t:
        return "weight"
    if "length" in t or "distance" in t or "survey" in t:
        return "length"
    if "volume" in t or "capacity" in t or "sack" in t or "basket" in t or "load" in t or "cart" in t or "heap" in t or "granary" in t or "vessel" in t or "drop" in t or "liquid" in t:
        return "volume"
    if "area" in t:
        return "area"
    if "currency" in t or "coin" in t or "financial" in t:
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
        
        # Local name formatted with Devanagari Konkani name and transliteration
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

print(f"Total generated entries: {len(entries)}")
assert len(entries) == 100, f"Expected 100, got {len(entries)}"

ts_content = '''import { Measurement } from "@/types";

export const GOA_MEASUREMENTS: Measurement[] = ''' + json.dumps(entries, ensure_ascii=False, indent=2) + ";\n"

with open("lib/goaData.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print("Successfully written to lib/goaData.ts!")
