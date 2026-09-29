import json
import re

# 4 sectors from the uploaded Excel sheets (20 units each = 80 units total)

trade_rows = [
    (1, "Gunja", "गुंज", "Gunja", "Guñjā (Raktikā)", "Weight", 1, "Seed weight", "≈0.1215 g", "Gold and gem trade", "Trade & Commerce", "Gunja seed used as a standard for weighing precious commodities.", "Ancient", "Maharashtra", "Charaka Samhita"),
    (2, "Masha", "माष", "Masha", "Māṣa", "Weight", 2, "8 Gunja = 1 Masha", "≈0.97 g", "Spice trade", "Trade & Commerce", "Used for weighing medicines, spices and valuable goods.", "Ancient", "Maharashtra", "Arthashastra"),
    (3, "Karsha", "कर्ष", "Karsha", "Karṣa", "Weight", 3, "12 Masha = 1 Karsha", "≈12 g", "Merchant weighing", "Trade & Commerce", "Standard commercial weight in ancient markets.", "Ancient", "Maharashtra", "Charaka Samhita"),
    (4, "Tola", "तोळा", "Tola", "Tulā", "Weight", 4, "Traditional weight unit", "≈11.66 g", "Gold and silver trade", "Trade & Commerce", "Standard unit used by jewellers and merchants.", "Medieval", "Maharashtra", "Bombay Presidency Records"),
    (5, "Chhatak", "छटाक", "Chhatak", "—", "Weight", 5, "16 Chhatak = 1 Sher", "≈58 g", "Grocery trade", "Trade & Commerce", "Used for grains, jaggery and spices.", "Maratha–Colonial", "Maharashtra", "Bombay Presidency Manual"),
    (6, "Pala", "पळ", "Pala", "Pala", "Weight", 6, "4 Karsha = 1 Pala", "≈48 g", "Commodity trade", "Trade & Commerce", "Used for weighing agricultural produce.", "Ancient", "Maharashtra", "Charaka Samhita"),
    (7, "Sher", "शेर", "Sher", "Śēr", "Weight/Capacity", 7, "Standard market measure", "≈0.93 kg", "Grain markets", "Trade & Commerce", "Common market measure for cereals and pulses.", "Maratha–Colonial", "Maharashtra", "Bombay Gazetteer"),
    (8, "Man", "मण", "Man", "Maund (related)", "Weight", 8, "40 Sher = 1 Man", "≈37.3 kg", "Wholesale trade", "Trade & Commerce", "Bulk trading unit for grain, cotton and salt.", "Maratha–Colonial", "Maharashtra", "Bombay Presidency Gazetteer"),
    (9, "Khandi", "खंडी", "Khandi", "Khaṇḍī", "Bulk Weight", 9, "20 Man = 1 Khandi (regional variation)", "≈746 kg (regional variation)", "Bulk commercial trade", "Trade & Commerce", "Used for wholesale trade of grain, cotton and sugar.", "Maratha", "Maharashtra", "Maratha Revenue Records"),
    (10, "Paili", "पायली", "Paili", "Prastha (related)", "Capacity", 10, "Traditional grain measure", "≈3–4 L (regional variation)", "Grain markets", "Trade & Commerce", "Capacity measure used by merchants.", "Medieval", "Maharashtra", "Rural Market Records"),
    (11, "Adholi", "अढोली", "Adholi", "—", "Capacity", 11, "2 Paili = 1 Adholi", "Regional variation", "Grain trade", "Trade & Commerce", "Medium-sized grain measure in village markets.", "Medieval", "Maharashtra", "Village Revenue Records"),
    (12, "Goni", "गोणी", "Goni", "—", "Sack Measure", 12, "Sack measure", "Commodity dependent", "Commodity transport", "Trade & Commerce", "Jute sack used for transporting grain and cotton.", "Colonial", "Maharashtra", "Bombay Market Records"),
    (13, "Pote", "पोते", "Pote", "—", "Storage Measure", 13, "Large sack", "Commodity dependent", "Wholesale trade", "Trade & Commerce", "Standard sack used in commercial grain markets.", "Colonial", "Maharashtra", "Agricultural Trade Records"),
    (14, "Oze", "ओझे", "Oze", "Bhāra", "Load Measure", 14, "One head-load", "≈20–30 kg (regional variation)", "Local transport", "Trade & Commerce", "Load carried by workers in markets.", "Traditional", "Maharashtra", "Marathi Folk Traditions"),
    (15, "Bailgadi Bhar", "बैलगाडी भार", "Bailgadi Bhar", "—", "Cart Load", 15, "Bullock-cart load", "Regional variation", "Inland transport", "Trade & Commerce", "Quantity transported using traditional bullock carts.", "Maratha–Modern", "Maharashtra", "Rural Transport Records"),
    (16, "Candy", "कॅन्डी", "Candy", "Khaṇḍī (related)", "Bulk Weight", 16, "Multiple Man", "≈227 kg (regional variation)", "Export trade", "Trade & Commerce", "Used for cotton, sugar and spice exports.", "Colonial", "Maharashtra", "East India Company Records"),
    (17, "Bale", "बेल", "Bale", "—", "Textile Bundle", 17, "Bundle of cloth/cotton", "Commodity dependent", "Cotton trade", "Trade & Commerce", "Standard bale prepared for textile exports.", "Colonial", "Maharashtra", "Bombay Trade Records"),
    (18, "Mohur", "मोहर", "Mohar", "Mohura", "Gold Coin", 18, "High-value coin", "≈10.9–11 g gold", "High-value trade", "Trade & Commerce", "Gold coin used in major commercial transactions.", "Mughal–Maratha", "Maharashtra", "Indian Numismatic Studies"),
    (19, "Rupaya", "रुपया", "Rupaya", "Rūpya", "Currency", 19, "16 Anna = 1 Rupaya", "Historic silver standard", "General commerce", "Trade & Commerce", "Standard monetary unit used in trade.", "Maratha–Colonial", "Maharashtra", "Bombay Presidency Records"),
    (20, "Hundi", "हुंडी", "Hundi", "Huṇḍikā", "Financial Instrument", 20, "Merchant credit note", "Not applicable", "Long-distance trade", "Trade & Commerce", "Traditional bill of exchange used by merchants for secure commercial transactions.", "Medieval–Colonial", "Maharashtra", "Maratha Commercial Records")
]

architecture_rows = [
    (1, "Paramanu", "परमाणू", "Paramanu", "Paramāṇu", "Length", 1, "Smallest theoretical unit", "Theoretical", "Temple planning", "Architecture", "Smallest conceptual unit mentioned in ancient architectural treatises.", "Ancient", "Maharashtra", "Mānasāra"),
    (2, "Raji", "रजी", "Raji", "Rajī", "Length", 2, "Larger than Paramanu", "Theoretical", "Architectural calculations", "Architecture", "Minute unit used in proportional calculations.", "Ancient", "Maharashtra", "Mayamata"),
    (3, "Yava", "यव", "Yava", "Yava", "Length", 3, "8 Yava = 1 Angula", "≈2.4 mm", "Stone carving", "Architecture", "Barley grain used as a base measurement.", "Ancient", "Maharashtra", "Mānasāra"),
    (4, "Angula", "अंगुळ", "Angula", "Aṅgula", "Length", 4, "8 Yava = 1 Angula", "≈1.9 cm", "Building construction", "Architecture", "Finger-width measurement used in architecture and sculpture.", "Ancient", "Maharashtra", "Mayamata"),
    (5, "Vitasti", "वितस्ती", "Vitasti", "Vitasti", "Length", 5, "12 Angula = 1 Vitasti", "≈22.8 cm", "Building layout", "Architecture", "Palm-span measurement used in planning walls and rooms.", "Ancient", "Maharashtra", "Mānasāra"),
    (6, "Hasta", "हस्त", "Hasta", "Hasta", "Length", 6, "24 Angula = 1 Hasta", "≈45.7 cm", "Temple and fort construction", "Architecture", "Cubit used extensively in Maratha and earlier architecture.", "Ancient–Maratha", "Maharashtra", "Śilpa Śāstra"),
    (7, "Aratni", "अरत्नी", "Aratni", "Aratni", "Length", 7, "Elbow to fingertip", "≈41 cm", "Sculpture", "Architecture", "Cubit variation used for carving idols and pillars.", "Ancient", "Maharashtra", "Mayamata"),
    (8, "Tala", "ताल", "Tala", "Tāla", "Proportional Measure", 8, "Body proportion unit", "Variable", "Idol construction", "Architecture", "Canonical proportion used for sculpting deities.", "Ancient", "Maharashtra", "Śilpa Śāstra"),
    (9, "Danda", "दंड", "Danda", "Daṇḍa", "Length", 9, "4 Hasta = 1 Danda", "≈1.83 m", "Site measurement", "Architecture", "Measuring rod used for laying foundations.", "Ancient", "Maharashtra", "Arthashastra"),
    (10, "Kathi", "काठी", "Kathi", "Daṇḍa (related)", "Length", 10, "Measuring pole", "≈2–3 m (regional variation)", "Land and construction", "Architecture", "Wooden measuring pole used by builders and surveyors.", "Medieval", "Maharashtra", "Maharashtra Revenue Records"),
    (11, "Gaz", "गज", "Gaz", "Gaja", "Length", 11, "Traditional yard", "≈0.9144 m", "House construction", "Architecture", "Yard measure used in building construction and cloth measurement.", "Medieval–Colonial", "Maharashtra", "Bombay Presidency Manual"),
    (12, "Rajju", "रज्जू", "Rajju", "Rajju", "Length", 12, "Rope measure", "Variable", "Foundation layout", "Architecture", "Measuring rope used for marking building sites.", "Ancient", "Maharashtra", "Mānasāra"),
    (13, "Pada", "पद", "Pada", "Pada", "Length", 13, "12 Angula", "≈22.8 cm", "Structural design", "Architecture", "Quarter-module used in architectural planning.", "Ancient", "Maharashtra", "Mayamata"),
    (14, "Kishku Hasta", "किष्कु हस्त", "Kishku Hasta", "Kiṣku Hasta", "Length", 14, "Variant of Hasta", "≈41–45 cm", "Residential buildings", "Architecture", "Cubit prescribed for domestic architecture.", "Ancient", "Maharashtra", "Mānasāra"),
    (15, "Prajapatya Hasta", "प्रजापत्य हस्त", "Prajapatya Hasta", "Prājāpatya Hasta", "Length", 15, "Variant of Hasta", "≈48 cm", "Sacred architecture", "Architecture", "Cubit recommended for temples and sacred structures.", "Ancient", "Maharashtra", "Mayamata"),
    (16, "Dhanus", "धनुष", "Dhanus", "Dhanus", "Length", 16, "4 Danda = 1 Dhanus", "≈7.3 m", "Fort planning", "Architecture", "Used for planning forts, roads and temple complexes.", "Ancient", "Maharashtra", "Arthashastra"),
    (17, "Krosa", "क्रोश", "Krosa", "Krośa", "Distance", 17, "Larger than Dhanus", "≈3.2 km", "Town planning", "Architecture", "Used in planning roads and distances between settlements.", "Ancient", "Maharashtra", "Arthashastra"),
    (18, "Yojana", "योजना", "Yojana", "Yojana", "Distance", 18, "4 Krosa = 1 Yojana", "≈12.8–13 km", "Regional planning", "Architecture", "Large geographical measurement for planning routes and regions.", "Ancient", "Maharashtra", "Puranas; Arthashastra"),
    (19, "Ayadi Mana", "आयादी मान", "Ayadi Mana", "Āyādi Māna", "Architectural Calculation", 19, "Vāstu calculation", "Not an SI unit", "Temple construction", "Architecture", "Traditional system for determining auspicious building dimensions.", "Ancient–Medieval", "Maharashtra", "Mayamata"),
    (20, "Sutra", "सूत्र", "Sutra", "Sūtra", "Survey Measure", 20, "Measuring cord", "Variable", "Construction layout", "Architecture", "Measuring cord used for alignment and layout in temple and fort construction.", "Ancient–Maratha", "Maharashtra", "Samarāṅgaṇa Sūtradhāra")
]

medicine_rows = [
    (1, "Gunja", "गुंज", "Gunja", "Guñjā (Raktikā)", "Weight", 1, "Smallest practical weight", "≈0.1215 g", "Herbal medicines", "Medicine (Ayurveda)", "Gunja seed used for weighing medicinal herbs and minerals.", "Ancient", "Maharashtra", "Charaka Samhita"),
    (2, "Masha", "माष", "Masha", "Māṣa", "Weight", 2, "8 Gunja = 1 Masha", "≈0.97 g", "Herbal powders", "Medicine (Ayurveda)", "Standard Ayurvedic unit for powders and pills.", "Ancient", "Maharashtra", "Sushruta Samhita"),
    (3, "Karsha", "कर्ष", "Karsha", "Karṣa", "Weight", 3, "12 Masha = 1 Karsha", "≈12 g", "Medicinal preparations", "Medicine (Ayurveda)", "Used for herbs, minerals and medicinal mixtures.", "Ancient", "Maharashtra", "Charaka Samhita"),
    (4, "Tola", "तोळा", "Tola", "Tulā", "Weight", 4, "Traditional weight unit", "≈11.66 g", "Precious medicinal ingredients", "Medicine (Ayurveda)", "Used for costly herbs and metallic preparations.", "Medieval", "Maharashtra", "Bombay Presidency Records"),
    (5, "Pala", "पळ", "Pala", "Pala", "Weight", 5, "4 Karsha = 1 Pala", "≈48 g", "Herbal ingredients", "Medicine (Ayurveda)", "Standard weight for roots, bark and herbal powders.", "Ancient", "Maharashtra", "Aṣṭāṅga Hṛdaya"),
    (6, "Prasriti", "प्रसृती", "Prasriti", "Prasṛti", "Volume", 6, "2 Pala = 1 Prasriti", "≈96 ml", "Herbal decoctions", "Medicine (Ayurveda)", "Used for medicated oils, ghee and decoctions.", "Ancient", "Maharashtra", "Charaka Samhita"),
    (7, "Kudava", "कुडव", "Kudava", "Kuḍava", "Capacity", 7, "4 Prasriti = 1 Kudava", "≈192 ml", "Liquid medicines", "Medicine (Ayurveda)", "Capacity measure for medicinal liquids.", "Ancient", "Maharashtra", "Sushruta Samhita"),
    (8, "Prastha", "प्रस्थ", "Prastha", "Prastha", "Capacity", 8, "4 Kudava = 1 Prastha", "≈768 ml", "Pharmacy preparation", "Medicine (Ayurveda)", "Standard liquid measure used in Ayurvedic pharmacies.", "Ancient", "Maharashtra", "Charaka Samhita"),
    (9, "Adhaka", "आढक", "Adhaka", "Āḍhaka", "Capacity", 9, "4 Prastha = 1 Adhaka", "≈3.07 L", "Bulk preparation", "Medicine (Ayurveda)", "Used for preparing large quantities of herbal medicines.", "Ancient", "Maharashtra", "Sushruta Samhita"),
    (10, "Drona", "द्रोण", "Drona", "Droṇa", "Capacity", 10, "4 Adhaka = 1 Drona", "≈12.3 L", "Bulk storage", "Medicine (Ayurveda)", "Large capacity unit for storing medicinal preparations.", "Ancient", "Maharashtra", "Charaka Samhita"),
    (11, "Bindu", "बिंदू", "Bindu", "Bindu", "Liquid Measure", 11, "Single drop", "≈0.05 ml (approx.)", "Eye and nasal medicines", "Medicine (Ayurveda)", "Smallest practical liquid dosage in Ayurveda.", "Ancient", "Maharashtra", "Sushruta Samhita"),
    (12, "Anjali", "अंजली", "Anjali", "Añjali", "Volume", 12, "Two cupped palms", "Person-dependent", "Patient dosage", "Medicine (Ayurveda)", "Body-based dosage measurement used by Vaidyas.", "Ancient", "Maharashtra", "Charaka Samhita"),
    (13, "Mushti", "मुष्टी", "Mushti", "Muṣṭi", "Volume", 13, "One handful", "Person-dependent", "Herbal leaves", "Medicine (Ayurveda)", "Handful measure used for collecting medicinal herbs.", "Ancient", "Maharashtra", "Ayurvedic Practice Manuals"),
    (14, "Angula", "अंगुळ", "Angula", "Aṅgula", "Length", 14, "Finger width", "≈1.9 cm", "Surgical procedures", "Medicine (Ayurveda)", "Used for measuring wounds and incisions.", "Ancient", "Maharashtra", "Sushruta Samhita"),
    (15, "Hasta", "हस्त", "Hasta", "Hasta", "Length", 15, "24 Angula = 1 Hasta", "≈45.7 cm", "Therapeutic procedures", "Medicine (Ayurveda)", "Used for body measurements in diagnosis and treatment.", "Ancient", "Maharashtra", "Aṣṭāṅga Hṛdaya"),
    (16, "Ratti", "रत्ती", "Ratti", "Raktikā", "Weight", 16, "Base medicinal unit", "≈0.1215 g", "Precious medicines", "Medicine (Ayurveda)", "Seed-based standard weight for potent medicines.", "Ancient", "Maharashtra", "Ayurvedic Classics"),
    (17, "Yava", "यव", "Yava", "Yava", "Length", 17, "Grain-based unit", "≈2.4 mm", "Surgical measurement", "Medicine (Ayurveda)", "Used for measuring medicinal applications and surgical dimensions.", "Ancient", "Maharashtra", "Sushruta Samhita"),
    (18, "Shana", "शाण", "Shana", "Śāṇa", "Weight", 18, "Traditional medicinal unit", "≈3–4 g (regional variation)", "Herbal formulations", "Medicine (Ayurveda)", "Used in preparing herbal powders and medicines.", "Medieval", "Maharashtra", "Marathi Ayurvedic Manuscripts"),
    (19, "Patra", "पात्र", "Patra", "Pātra", "Vessel Measure", 19, "Container measure", "Variable", "Medicine preparation", "Medicine (Ayurveda)", "Standard vessel used for preparing and storing medicines.", "Ancient–Modern", "Maharashtra", "Marathi Ayurvedic Texts"),
    (20, "Kalasha", "कलश", "Kalasha", "Kalaśa", "Storage Vessel", 20, "Large storage vessel", "Variable", "Medicine storage", "Medicine (Ayurveda)", "Earthen or metal vessel used to preserve oils, decoctions and medicinal liquids.", "Medieval–Modern", "Maharashtra", "Traditional Vaidya Practices")
]

textile_rows = [
    (1, "Yava", "यव", "Yava", "Yava", "Length", 1, "8 Yava = 1 Angula", "≈2.4 mm", "Fine weaving", "Textile & Handloom", "Barley grain used as the smallest linear reference for intricate textile work.", "Ancient", "Maharashtra", "Mānasāra"),
    (2, "Angula", "अंगुळ", "Angula", "Aṅgula", "Length", 2, "8 Yava = 1 Angula", "≈1.9 cm", "Cloth measurement", "Textile & Handloom", "Finger-width measure used by traditional weavers.", "Ancient", "Maharashtra", "Mayamata"),
    (3, "Vitasti", "वितस्ती", "Vitasti", "Vitasti", "Length", 3, "12 Angula = 1 Vitasti", "≈22.8 cm", "Loom setup", "Textile & Handloom", "Palm-span measure for warp and loom alignment.", "Ancient", "Maharashtra", "Mānasāra"),
    (4, "Hasta", "हस्त", "Hasta", "Hasta", "Length", 4, "24 Angula = 1 Hasta", "≈45.7 cm", "Cloth weaving", "Textile & Handloom", "Cubit used for measuring woven fabric.", "Ancient–Medieval", "Maharashtra", "Śilpa Śāstra"),
    (5, "Gaz", "गज", "Gaz", "Gaja", "Length", 5, "Traditional yard", "≈0.9144 m", "Textile trade", "Textile & Handloom", "Standard yard used for measuring cloth in markets.", "Medieval–Colonial", "Maharashtra", "Bombay Presidency Manual"),
    (6, "Kathi", "काठी", "Kathi", "Daṇḍa (related)", "Length", 6, "Measuring rod", "≈2–3 m (regional variation)", "Warp measurement", "Textile & Handloom", "Wooden rod used for measuring warp length before weaving.", "Medieval", "Maharashtra", "Marathi Weaving Traditions"),
    (7, "Sut", "सूत", "Sut", "Sūtra", "Yarn Measure", 7, "Single thread", "—", "Yarn preparation", "Textile & Handloom", "Basic spun thread used in cotton and silk weaving.", "Ancient", "Maharashtra", "Marathi Textile Records"),
    (8, "Tantu", "तंतू", "Tantu", "Tantu", "Yarn Measure", 8, "Single fibre", "—", "Yarn spinning", "Textile & Handloom", "Individual fibre before spinning into yarn.", "Ancient", "Maharashtra", "Śilpa Śāstra"),
    (9, "Hank", "हँक", "Hank", "—", "Yarn Measure", 9, "Standard textile bundle", "Standard textile bundle", "Yarn trade", "Textile & Handloom", "Standard hank used for cotton and silk yarn.", "Colonial", "Maharashtra", "Bombay Textile Records"),
    (10, "Sutachi Gundi", "सुताची गुंडी", "Sutachi Gundi", "—", "Yarn Bundle", 10, "Bundle of thread", "Regional variation", "Loom preparation", "Textile & Handloom", "Bundle of yarn prepared before weaving.", "Traditional", "Maharashtra", "Marathi Weaving Practices"),
    (11, "Tana", "ताणा", "Tana", "Tantra (related)", "Warp Measure", 11, "Warp threads", "Variable", "Loom preparation", "Textile & Handloom", "Set of longitudinal threads arranged on the loom.", "Traditional", "Maharashtra", "Handloom Traditions"),
    (12, "Bana", "बाणा", "Bana", "Vāṇa (related)", "Weft Measure", 12, "Cross threads", "Variable", "Fabric weaving", "Textile & Handloom", "Crosswise threads woven through the warp.", "Traditional", "Maharashtra", "Paithani Weaving Manuals"),
    (13, "Magga Rundi", "मागाची रुंदी", "Magga Rundi", "—", "Width Measure", 13, "Loom width", "Variable", "Cloth production", "Textile & Handloom", "Width of cloth determined by the loom.", "Traditional", "Maharashtra", "Solapur Handloom Records"),
    (14, "Sadi Lambi", "साडी लांबी", "Sadi Lambi", "—", "Cloth Length", 14, "Standard saree length", "≈5–9 m", "Saree weaving", "Textile & Handloom", "Traditional measurement for weaving Paithani and other sarees.", "Medieval–Modern", "Maharashtra", "Paithani Textile Traditions"),
    (15, "Dhotar Lambi", "धोतर लांबी", "Dhotar Lambi", "—", "Cloth Length", 15, "Standard dhoti length", "≈4–5 m", "Dhoti weaving", "Textile & Handloom", "Traditional length used for weaving dhotis.", "Medieval–Modern", "Maharashtra", "Marathi Textile Traditions"),
    (16, "Kapad Tukda", "कापड तुकडा", "Kapad Tukda", "—", "Cloth Measure", 16, "Cloth piece", "Commodity dependent", "Retail trade", "Textile & Handloom", "Individual cut piece of woven fabric.", "Traditional", "Maharashtra", "Village Market Records"),
    (17, "Gaththa", "गठ्ठा", "Gaththa", "—", "Bundle Measure", 17, "Bundle of cloth", "Commodity dependent", "Textile transport", "Textile & Handloom", "Bundle of finished cloth prepared for transport.", "Medieval", "Maharashtra", "Bombay Trade Records"),
    (18, "Goni", "गोणी", "Goni", "—", "Sack Measure", 18, "Textile sack", "Commodity dependent", "Yarn transport", "Textile & Handloom", "Sack used for transporting yarn and cloth.", "Colonial", "Maharashtra", "Bombay Textile Trade Records"),
    (19, "Bale", "बेल", "Bale", "—", "Bulk Textile Measure", 19, "Multiple bundles", "Commodity dependent", "Cotton export", "Textile & Handloom", "Standard bale of cotton or woven cloth for wholesale trade.", "Colonial", "Maharashtra", "East India Company Records"),
    (20, "Paithani Gaththa", "पैठणी गठ्ठा", "Paithani Gaththa", "—", "Silk Bundle", 20, "Bundle of silk sarees", "Commodity dependent", "Silk trade", "Textile & Handloom", "Bundle of finished Paithani silk sarees prepared for merchants and export.", "Medieval–Modern", "Paithan, Yeola", "Maharashtra Handloom Development Corporation")
]

currency_rows = [
    (1, "Gunja", "गुंज", "Gunja", "Guñjā (Raktikā)", "Weight", 1, "Seed weight", "≈0.1215 g", "Gold weighing", "Currency & Money", "Gunja seed used by goldsmiths for weighing gold and gemstones.", "Ancient", "Maharashtra", "Charaka Samhita"),
    (2, "Ratti", "रत्ती", "Ratti", "Raktikā", "Weight", 2, "Equivalent to Gunja seed", "≈0.1215 g", "Precious metals", "Currency & Money", "Standard jeweller's weight for gold and gems.", "Ancient", "Maharashtra", "Arthashastra"),
    (3, "Masha", "माष", "Masha", "Māṣa", "Weight", 3, "8 Ratti = 1 Masha", "≈0.97 g", "Gold and silver", "Currency & Money", "Used for weighing bullion and precious metals.", "Ancient", "Maharashtra", "Sushruta Samhita"),
    (4, "Karsha", "कर्ष", "Karsha", "Karṣa", "Weight", 4, "12 Masha = 1 Karsha", "≈12 g", "Bullion trade", "Currency & Money", "Commercial weight for valuable commodities.", "Ancient", "Maharashtra", "Charaka Samhita"),
    (5, "Tola", "तोळा", "Tola", "Tulā", "Weight", 5, "Traditional weight unit", "≈11.66 g", "Jewellery trade", "Currency & Money", "Standard unit used by jewellers and merchants.", "Medieval–Modern", "Maharashtra", "Bombay Presidency Records"),
    (6, "Pala", "पळ", "Pala", "Pala", "Weight", 6, "4 Karsha = 1 Pala", "≈48 g", "Bullion weighing", "Currency & Money", "Larger weight for silver and gold transactions.", "Ancient", "Maharashtra", "Ayurvedic Texts"),
    (7, "Dam", "दाम", "Dam", "Dāma", "Coin", 7, "Copper coin", "Regional variation", "Retail transactions", "Currency & Money", "Small copper coin used in local markets.", "Medieval", "Maharashtra", "Mughal Coin Records"),
    (8, "Paisa", "पैसा", "Paisa", "Padika", "Coin Value", 8, "Fraction of Anna", "Historic fractional value", "Everyday purchases", "Currency & Money", "Small denomination coin used in village markets.", "Colonial", "Maharashtra", "Bombay Presidency Manual"),
    (9, "Anna", "आणा", "Anna", "—", "Coin Value", 9, "16 Anna = 1 Rupee", "1/16 Rupee", "Daily commerce", "Currency & Money", "Standard subdivision of the Rupee.", "Colonial", "Maharashtra", "British Indian Currency Records"),
    (10, "Fanam", "फणम", "Fanam", "Paṇa (related)", "Gold Coin", 10, "Fraction of larger gold coins", "≈0.35–0.40 g (regional variation)", "Merchant trade", "Currency & Money", "Small gold coin used in Deccan trade.", "Medieval", "Maharashtra", "Deccan Coin Catalogues"),
    (11, "Panam", "पणम", "Panam", "Paṇa", "Coin", 11, "Traditional denomination", "Regional variation", "Regional trade", "Currency & Money", "Coin mentioned in medieval commercial records.", "Medieval", "Maharashtra", "Epigraphia Indica"),
    (12, "Shivrai", "शिवराई", "Shivrai", "—", "Copper Coin", 12, "Maratha copper coin", "Regional variation", "Local commerce", "Currency & Money", "Copper coin issued under Chhatrapati Shivaji Maharaj and later Marathas.", "Maratha", "Maharashtra", "Maratha Numismatic Studies"),
    (13, "Hon", "होन", "Hon", "Honnu (related)", "Gold Coin", 13, "High-value gold coin", "Regional variation", "Royal payments", "Currency & Money", "Gold coin circulated during the Maratha period.", "Maratha", "Maharashtra", "Maratha Coinage Records"),
    (14, "Mohur", "मोहर", "Mohur", "Mohura", "Gold Coin", 14, "High-value coin", "≈10.9–11 g gold", "Large commercial transactions", "Currency & Money", "Gold coin used by Mughal and Maratha administrations.", "Mughal–Maratha", "Maharashtra", "Indian Numismatic Society"),
    (15, "Rupaya", "रुपया", "Rupaya", "Rūpya", "Silver Coin", 15, "16 Anna = 1 Rupaya", "Historic silver standard", "General trade", "Currency & Money", "Principal silver coin used throughout Maharashtra.", "Mughal–Colonial", "Maharashtra", "Bombay Presidency Gazetteer"),
    (16, "Ashrafi", "अश्रफी", "Ashrafi", "Asrafi", "Gold Coin", 16, "Premium gold coin", "Regional variation", "International trade", "Currency & Money", "High-value gold coin used by wealthy merchants and rulers.", "Mughal", "Maharashtra", "Mughal Coin Catalogues"),
    (17, "Hundi", "हुंडी", "Hundi", "Huṇḍikā", "Financial Instrument", 17, "Merchant credit note", "Not applicable", "Long-distance trade", "Currency & Money", "Bill of exchange used for safe transfer of money between merchants.", "Medieval–Colonial", "Maharashtra", "Maratha Commercial Records"),
    (18, "Dakshina", "दक्षिणा", "Dakshina", "Dakṣiṇā", "Monetary Offering", 18, "Honorarium", "Not fixed", "Religious payments", "Currency & Money", "Traditional payment made to priests and scholars.", "Ancient–Modern", "Maharashtra", "Dharmaśāstra Texts"),
    (19, "Nazarana", "नजराणा", "Nazarana", "Nazarāṇā", "Tribute Payment", 19, "Royal gift/payment", "Not fixed", "Court administration", "Currency & Money", "Tribute or ceremonial payment presented to rulers.", "Medieval–Maratha", "Maharashtra", "Peshwa Administrative Records"),
    (20, "Khajina", "खजिना", "Khajina", "Kośa (related)", "Treasury Unit", 20, "Treasury accounting", "Not applicable", "State finance", "Currency & Money", "Royal treasury and accounting term used for managing state revenue and currency.", "Maratha–Colonial", "Maharashtra", "Peshwa Daftar; Bombay Presidency Records")
]

household_rows = [
    (1, "Bindu", "बिंदू", "Bindu", "Bindu", "Liquid Measure", 1, "Single drop", "≈0.05 ml (approx.)", "Oils and medicines", "Household", "Smallest liquid measure used in homes for oils, medicines and rituals.", "Ancient", "Maharashtra", "Charaka Samhita"),
    (2, "Gunja", "गुंज", "Gunja", "Guñjā", "Weight", 2, "Seed weight", "≈0.1215 g", "Spices", "Household", "Seed used for weighing valuable spices and herbs.", "Ancient", "Maharashtra", "Charaka Samhita"),
    (3, "Masha", "माष", "Masha", "Māṣa", "Weight", 3, "8 Gunja = 1 Masha", "≈0.97 g", "Medicines and spices", "Household", "Used for weighing spices, herbs and medicinal ingredients.", "Ancient", "Maharashtra", "Sushruta Samhita"),
    (4, "Tola", "तोळा", "Tola", "Tulā", "Weight", 4, "Traditional weight", "≈11.66 g", "Kitchen ingredients", "Household", "Used for measuring costly spices, ghee and jaggery.", "Medieval–Modern", "Maharashtra", "Bombay Presidency Records"),
    (5, "Chhatak", "छटाक", "Chhatak", "—", "Weight", 5, "16 Chhatak = 1 Sher", "≈58 g", "Grocery measurement", "Household", "Used in homes for pulses, sugar and flour.", "Maratha–Colonial", "Maharashtra", "Bombay Presidency Manual"),
    (6, "Pala", "पळ", "Pala", "Pala", "Weight", 6, "4 Karsha = 1 Pala", "≈48 g", "Food ingredients", "Household", "Traditional weight for grains and cooking materials.", "Ancient", "Maharashtra", "Ayurvedic Texts"),
    (7, "Sher", "शेर", "Sher", "Śēr", "Weight/Capacity", 7, "Standard measure", "≈0.93 kg", "Grain storage", "Household", "Common household measure for cereals and pulses.", "Maratha–Colonial", "Maharashtra", "Bombay Gazetteer"),
    (8, "Paili", "पायली", "Paili", "Prastha (related)", "Capacity", 8, "Traditional grain measure", "≈3–4 L (regional variation)", "Rice and wheat", "Household", "Used to measure grains in village homes.", "Medieval", "Maharashtra", "Maharashtra Rural Traditions"),
    (9, "Adholi", "अढोली", "Adholi", "—", "Capacity", 9, "2 Paili = 1 Adholi", "Regional variation", "Grain storage", "Household", "Medium household grain measuring vessel.", "Medieval", "Maharashtra", "Village Revenue Records"),
    (10, "Man", "मण", "Man", "Maund (related)", "Bulk Capacity", 10, "40 Sher = 1 Man", "≈37.3 kg", "Bulk grain storage", "Household", "Used for storing harvested grain in households.", "Maratha–Colonial", "Maharashtra", "Bombay Presidency Gazetteer"),
    (11, "Kanagi", "कणगी", "Kanagi", "—", "Basket Measure", 11, "Basket measure", "Regional variation", "Grain handling", "Household", "Bamboo basket for storing and carrying grains.", "Traditional", "Maharashtra", "Marathi Folk Traditions"),
    (12, "Goni", "गोणी", "Goni", "—", "Sack Measure", 12, "Sack measure", "Commodity dependent", "Grain storage", "Household", "Traditional jute sack for cereals and pulses.", "Colonial", "Maharashtra", "Agricultural Market Records"),
    (13, "Pote", "पोते", "Pote", "—", "Storage Measure", 13, "Large sack", "Commodity dependent", "Household storage", "Household", "Large cloth or jute sack used for food grains.", "Colonial", "Maharashtra", "Bombay Market Records"),
    (14, "Handi", "हंडी", "Handi", "Haṇḍī", "Vessel Measure", 14, "Cooking pot", "≈2–6 L (varies)", "Cooking", "Household", "Earthen or metal pot used for cooking rice and curries.", "Ancient–Modern", "Maharashtra", "Marathi Household Traditions"),
    (15, "Ghagar", "घागर", "Ghagar", "Ghaṭa (related)", "Water Vessel", 15, "Water pot", "≈10–15 L (regional variation)", "Water storage", "Household", "Traditional brass or copper vessel for storing drinking water.", "Medieval–Modern", "Maharashtra", "Marathi Rural Customs"),
    (16, "Kalash", "कलश", "Kalash", "Kalaśa", "Storage Vessel", 16, "Ritual/storage vessel", "≈5–10 L (varies)", "Water and rituals", "Household", "Metal vessel used for domestic storage and religious purposes.", "Ancient–Modern", "Maharashtra", "Dharmaśāstra Texts"),
    (17, "Dabba", "डबा", "Dabba", "—", "Storage Container", 17, "Metal container", "Variable", "Food storage", "Household", "Used for storing flour, spices and grains.", "Colonial–Modern", "Maharashtra", "Household Records"),
    (18, "Oze", "ओझे", "Oze", "Bhāra", "Load Measure", 18, "Head-load", "≈20–30 kg (regional variation)", "Household transport", "Household", "Load carried manually from fields or markets to the home.", "Traditional", "Maharashtra", "Marathi Rural Traditions"),
    (19, "Kothi", "कोठी", "Kothi", "Koṣṭha", "Granary", 19, "Household grain storage", "Variable", "Long-term grain preservation", "Household", "Traditional wooden or mud granary used in village homes.", "Medieval–Modern", "Maharashtra", "Rural Architecture Records"),
    (20, "Dhanya Kothar", "धान्य कोठार", "Dhanya Kothar", "Dhānya Koṣṭha", "Granary", 20, "Largest storage structure", "Variable", "Community grain storage", "Household", "Large granary used for preserving harvested grain for extended periods.", "Medieval–Modern", "Maharashtra", "Maratha Administrative Records")
]

storage_rows = [
    (1, "Paili", "पायली", "Paili", "Prastha (related)", "Capacity", 1, "Basic grain measure", "≈3–4 L (regional variation)", "Grain storage", "Storage & Transportation", "Small vessel used for measuring grain before storage or transport.", "Medieval", "Maharashtra", "Bombay Presidency Gazetteer"),
    (2, "Adholi", "अढोली", "Adholi", "—", "Capacity", 2, "2 Paili = 1 Adholi", "Regional variation", "Grain trade", "Storage & Transportation", "Medium-sized grain measure used by merchants and farmers.", "Maratha", "Maharashtra", "Village Revenue Records"),
    (3, "Sher", "शेर", "Sher", "Śēr", "Weight/Capacity", 3, "Standard market measure", "≈0.93 kg", "Market transactions", "Storage & Transportation", "Used for weighing grain before loading and transport.", "Maratha–Colonial", "Maharashtra", "Bombay Presidency Manual"),
    (4, "Man", "मण", "Man", "Maund (related)", "Weight", 4, "40 Sher = 1 Man", "≈37.3 kg", "Bulk storage", "Storage & Transportation", "Standard unit for storing and transporting agricultural produce.", "Maratha–Colonial", "Maharashtra", "Bombay Presidency Gazetteer"),
    (5, "Khandi", "खंडी", "Khandi", "Khaṇḍī", "Bulk Weight", 5, "20 Man = 1 Khandi (regional variation)", "≈746 kg (regional variation)", "Wholesale grain trade", "Storage & Transportation", "Large bulk unit for grain, cotton and sugar storage.", "Maratha", "Maharashtra", "Maratha Revenue Records"),
    (6, "Goni", "गोणी", "Goni", "—", "Sack Measure", 6, "Sack measure", "Commodity dependent", "Grain transport", "Storage & Transportation", "Traditional jute sack used to transport grain, cotton and pulses.", "Colonial", "Maharashtra", "Bombay Market Records"),
    (7, "Pote", "पोते", "Pote", "—", "Sack Measure", 7, "Large sack", "Commodity dependent", "Warehouse storage", "Storage & Transportation", "Large cloth or jute sack for storing agricultural produce.", "Colonial", "Maharashtra", "Agricultural Trade Records"),
    (8, "Kanagi", "कणगी", "Kanagi", "—", "Basket Measure", 8, "Basket measure", "Regional variation", "Farm transport", "Storage & Transportation", "Bamboo basket used for carrying harvested crops.", "Traditional", "Maharashtra", "Marathi Rural Traditions"),
    (9, "Topti", "टोपली", "Topti", "—", "Basket Measure", 9, "Small basket", "Regional variation", "Vegetable transport", "Storage & Transportation", "Woven basket used for carrying fruits, vegetables and flowers.", "Traditional", "Maharashtra", "Marathi Folk Traditions"),
    (10, "Oze", "ओझे", "Oze", "Bhāra", "Load Measure", 10, "One head-load", "≈20–30 kg (regional variation)", "Manual transport", "Storage & Transportation", "Standard load carried by a person from field to market.", "Traditional", "Maharashtra", "Rural Labour Practices"),
    (11, "Bailgadi Bhar", "बैलगाडी भार", "Bailgadi Bhar", "—", "Cart Load", 11, "Bullock-cart load", "Regional variation", "Inland transport", "Storage & Transportation", "Quantity transported in one traditional bullock-cart trip.", "Maratha–Modern", "Maharashtra", "Rural Transport Records"),
    (12, "Gadi Bhar", "गाडी भार", "Gadi Bhar", "—", "Cart Capacity", 12, "Cart capacity", "Regional variation", "Agricultural logistics", "Storage & Transportation", "Full load carried by a traditional transport cart.", "Medieval–Modern", "Maharashtra", "Bombay Presidency Records"),
    (13, "Kothi", "कोठी", "Kothi", "Koṣṭha", "Granary", 13, "Storage structure", "Variable", "Household storage", "Storage & Transportation", "Traditional mud or wooden grain storage structure.", "Medieval", "Maharashtra", "Rural Architecture Records"),
    (14, "Dhanya Kothar", "धान्य कोठार", "Dhanya Kothar", "Dhānya Koṣṭha", "Granary", 14, "Community granary", "Variable", "Village grain reserve", "Storage & Transportation", "Large storage building for preserving harvested grain.", "Maratha", "Maharashtra", "Maratha Administrative Records"),
    (15, "Dabba", "डबा", "Dabba", "—", "Storage Container", 15, "Metal container", "Variable", "Food storage", "Storage & Transportation", "Metal container used for grains, flour and spices.", "Colonial–Modern", "Maharashtra", "Household Records"),
    (16, "Handi", "हंडी", "Handi", "Haṇḍī", "Storage Vessel", 16, "Earthen pot", "≈2–6 L (varies)", "Liquid transport", "Storage & Transportation", "Pot used to store and carry water, milk and oils.", "Ancient–Modern", "Maharashtra", "Marathi Household Traditions"),
    (17, "Ghagar", "घागर", "Ghagar", "Ghaṭa (related)", "Water Vessel", 17, "Water pot", "≈10–15 L (regional variation)", "Water transport", "Storage & Transportation", "Brass or copper vessel used for carrying drinking water.", "Medieval–Modern", "Maharashtra", "Marathi Rural Customs"),
    (18, "Kalash", "कलश", "Kalash", "Kalaśa", "Storage Vessel", 18, "Ritual/storage vessel", "≈5–10 L (varies)", "Water and grain storage", "Storage & Transportation", "Vessel used for storing water and ceremonial purposes.", "Ancient–Modern", "Maharashtra", "Dharmaśāstra Texts"),
    (19, "Hodi Bhar", "होडी भार", "Hodi Bhar", "Nau Bhāra (related)", "Boat Load", 19, "Boat cargo capacity", "Regional variation", "River transport", "Storage & Transportation", "Load carried by traditional boats on the Godavari, Krishna and coastal waterways.", "Medieval–Colonial", "Konkan & River Basins", "Maritime Trade Records"),
    (20, "Godown", "गोदाम", "Godown", "Koṣṭhāgāra (related)", "Warehouse Capacity", 20, "Largest storage facility", "Variable", "Commercial warehousing", "Storage & Transportation", "Warehouse used for storing grain, cotton and other commodities before trade and export.", "Colonial", "Maharashtra", "Bombay Presidency Gazetteer")
]

agriculture_rows = [
    (1, "Yava", "यव", "Yava", "Yava", "Length/Seed", 1, "Grain-based unit", "≈2.4 mm", "Seed reference", "Agriculture", "Barley grain used as the smallest traditional measurement.", "Ancient", "Maharashtra", "Arthashastra; Mānasāra"),
    (2, "Gunja", "गुंज", "Gunja", "Guñjā (Raktikā)", "Weight", 2, "Seed weight", "≈0.1215 g", "Seed weighing", "Agriculture", "Gunja seed used for weighing seeds and valuable produce.", "Ancient", "Maharashtra", "Charaka Samhita"),
    (3, "Masha", "माष", "Masha", "Māṣa", "Weight", 3, "8 Gunja = 1 Masha", "≈0.97 g", "Seed and spice weighing", "Agriculture", "Traditional weight used for agricultural produce.", "Ancient", "Maharashtra", "Sushruta Samhita"),
    (4, "Tola", "तोळा", "Tola", "Tulā", "Weight", 4, "Traditional weight", "≈11.66 g", "Seeds and spices", "Agriculture", "Used in agricultural and market transactions.", "Medieval", "Maharashtra", "Bombay Presidency Records"),
    (5, "Pala", "पळ", "Pala", "Pala", "Weight", 5, "4 Karsha = 1 Pala", "≈48 g", "Produce weighing", "Agriculture", "Standard weight for grains and agricultural products.", "Ancient", "Maharashtra", "Charaka Samhita"),
    (6, "Sher", "शेर", "Sher", "Śēr", "Weight/Capacity", 6, "Regional standard", "≈0.93 kg", "Grain measurement", "Agriculture", "Common village measure for grain.", "Maratha–Colonial", "Maharashtra", "Bombay Gazetteer"),
    (7, "Chhatak", "छटाक", "Chhatak", "—", "Weight", 7, "16 Chhatak = 1 Sher", "≈58 g", "Seeds and pulses", "Agriculture", "Small market measure for grains.", "Maratha–Colonial", "Maharashtra", "Bombay Presidency Manual"),
    (8, "Paili", "पायली", "Paili", "Prastha (related)", "Capacity", 8, "Traditional grain measure", "≈3–4 L (regional variation)", "Seed measurement", "Agriculture", "Used by farmers for measuring paddy and pulses.", "Medieval", "Maharashtra", "Maharashtra Rural Traditions"),
    (9, "Adholi", "अढोली", "Adholi", "—", "Capacity", 9, "2 Paili = 1 Adholi", "Regional variation", "Grain trade", "Agriculture", "Medium grain measuring vessel.", "Maratha Period", "Maharashtra", "Village Revenue Records"),
    (10, "Man", "मण", "Man", "Maund (related)", "Weight", 10, "40 Sher = 1 Man", "≈37.3 kg", "Bulk grain trade", "Agriculture", "Standard bulk measure for agricultural produce.", "Maratha–Colonial", "Maharashtra", "Bombay Presidency Gazetteer"),
    (11, "Khandi", "खंडी", "Khandi", "Khaṇḍī", "Bulk Weight", 11, "20 Man = 1 Khandi (regional variation)", "≈746 kg (regional variation)", "Wholesale grain storage", "Agriculture", "Large agricultural storage and trade unit.", "Maratha Period", "Maharashtra", "Revenue Records"),
    (12, "Kothi", "कोठी", "Kothi", "Koṣṭha", "Storage Structure", 12, "Granary", "Variable", "Grain preservation", "Agriculture", "Traditional household or village granary.", "Medieval–Modern", "Maharashtra", "Rural Architecture Records"),
    (13, "Kanagi", "कणगी", "Kanagi", "—", "Basket Measure", 13, "Basket measure", "Regional variation", "Grain handling", "Agriculture", "Bamboo basket used for measuring and carrying grain.", "Traditional", "Maharashtra", "Marathi Folk Traditions"),
    (14, "Pote", "पोते", "Pote", "—", "Sack Measure", 14, "Sack measure", "Commodity dependent", "Grain storage", "Agriculture", "Jute sack used for storing harvested crops.", "Colonial", "Maharashtra", "Agricultural Market Records"),
    (15, "Oze", "ओझे", "Oze", "Bhāra (related)", "Load Measure", 15, "One head-load", "≈20–30 kg (regional variation)", "Harvest transport", "Agriculture", "Load carried manually from field to storage.", "Traditional", "Maharashtra", "Marathi Rural Traditions"),
    (16, "Bailgadi Bhar", "बैलगाडी भार", "Bailgadi Bhar", "—", "Cart Load", 16, "Bullock-cart load", "Regional variation", "Agricultural transport", "Agriculture", "Quantity transported by a traditional bullock cart.", "Maratha–Modern", "Maharashtra", "Rural Transport Records"),
    (17, "Goni", "गोणी", "Goni", "—", "Sack Measure", 17, "Large sack", "Commodity dependent", "Grain storage", "Agriculture", "Traditional grain sack used in village markets.", "Colonial", "Maharashtra", "Bombay Market Records"),
    (18, "Dhanya Kothar", "धान्य कोठार", "Dhanya Kothar", "Dhānya Koṣṭha", "Granary", 18, "Permanent grain storage", "Variable", "Community storage", "Agriculture", "Large storage structure for preserving grain after harvest.", "Maratha", "Maharashtra", "Maratha Administrative Records"),
    (19, "Rashi", "राशी", "Rashi", "Rāśi", "Heap Measure", 19, "Heap of grain", "Variable", "Harvest estimation", "Agriculture", "Grain heap used for estimating agricultural yield.", "Traditional", "Maharashtra", "Village Revenue Practices"),
    (20, "Khale", "खळे", "Khale", "Khala", "Threshing Measure", 20, "Harvest processing area", "Variable", "Post-harvest operations", "Agriculture", "Open threshing floor where grain was separated and measured before storage.", "Ancient–Modern", "Maharashtra", "Maharashtra Agricultural Traditions")
]

land_rows = [
    (1, "Square Kathi", "चौ. काठी", "Square Kathi", "—", "Land Area", 1, "Base Unit", "≈8.36 m² (regional)", "Measuring house sites and small plots", "Land Measurement", "Smallest traditional land unit", "Maratha–British", "Western Maharashtra", "Bombay Presidency Revenue Records"),
    (2, "Guntha", "गुंठा", "Guntha", "—", "Land Area", 2, "40 Square Kathis = 1 Guntha", "≈101.17 m²", "Agricultural fields and land records", "Land Measurement", "Most common traditional land unit", "Maratha–Present", "Entire Maharashtra", "Maharashtra Land Revenue Manual"),
    (3, "Bigha", "बिघा", "Bigha", "—", "Land Area", 3, "Regional variation", "≈0.25–0.67 hectare (varies by region)", "Agricultural land measurement", "Land Measurement", "Traditional revenue unit", "Medieval–British", "Vidarbha, Khandesh", "Bombay Gazetteers"),
    (4, "Acre", "एकर", "Acre", "—", "Land Area", 4, "40 Gunthas = 1 Acre", "4046.86 m²", "Land survey and revenue", "Land Measurement", "British standard land unit", "British–Present", "Entire Maharashtra", "British India Survey Records"),
    (5, "Chavar (Chahur)", "चाहूर", "Chavar (Chahur)", "—", "Large Land Area", 5, "120 Bighas = 1 Chavar (historically documented; regional)", "Variable", "Large agricultural estates and revenue records", "Land Measurement", "Large traditional estate unit", "Maratha Period", "Western Maharashtra", "Maharashtra State Gazetteers"),
    (6, "Hectare", "हेक्टर", "Hectare", "—", "Land Area", 6, "1 Hectare = 2.471 Acres", "10,000 m²", "Modern government land records", "Land Measurement", "Official metric land unit", "1958–Present", "Entire Maharashtra", "Government of Maharashtra")
]

transportation_rows = [
    (1, "Angul", "अंगुळ", "Angul", "अङ्गुल", "Length", 1, "Base Unit", "≈1.9 cm", "Measuring carts, tools and equipment", "Transportation & Distance", "Smallest traditional length", "Ancient–Present", "Entire Maharashtra", "Arthashastra"),
    (2, "Vitasti", "वितस्ती", "Vitasti", "वितस्ति", "Length", 2, "12 Angul = 1 Vitasti", "≈22.8 cm", "Measuring wooden cart components", "Transportation & Distance", "Span measurement", "Ancient–Medieval", "Entire Maharashtra", "Manusmriti"),
    (3, "Hasta", "हस्त", "Hasta", "हस्त", "Length", 3, "24 Angul = 1 Hasta", "≈45.6 cm", "Measuring carts, boats and road structures", "Transportation & Distance", "Cubit", "Ancient–Present", "Entire Maharashtra", "Mayamata"),
    (4, "Danda", "दंड", "Danda", "दण्ड", "Length", 4, "4 Hasta = 1 Danda", "≈1.82 m", "Road surveying and construction", "Transportation & Distance", "Measuring rod", "Ancient–Present", "Entire Maharashtra", "Arthashastra"),
    (5, "Kos (Krosha)", "कोस", "Kos (Krosha)", "क्रोश", "Distance", 5, "2000 Danda = 1 Kos", "≈3.2 km", "Measuring distances between villages and towns", "Transportation & Distance", "Standard travel distance", "Ancient–British", "Entire Maharashtra", "Arthashastra; Bombay Gazetteers"),
    (6, "Yojana", "योजना", "Yojana", "योजन", "Distance", 6, "4 Kos = 1 Yojana", "≈12.8 km", "Long-distance trade routes and military campaigns", "Transportation & Distance", "Largest traditional distance unit", "Ancient", "Entire Maharashtra", "Puranas; Arthashastra"),
]

livestock_rows = [
    (1, "Ratti", "रत्ती", "Ratti", "रक्तिका (Raktikā)", "Weight", 1, "Base Unit", "≈121.5 mg", "Measuring veterinary medicines and herbal preparations", "Livestock & Dairy", "Smallest traditional weight", "Ancient–Present", "Entire Maharashtra", "Charaka Samhita"),
    (2, "Masha", "माषा", "Masha", "माष", "Weight", 2, "8 Ratti = 1 Masha", "≈0.972 g", "Veterinary medicines", "Livestock & Dairy", "Small medicinal weight", "Ancient–Present", "Entire Maharashtra", "Sushruta Samhita"),
    (3, "Tola", "तोळा", "Tola", "तुला", "Weight", 3, "12 Masha = 1 Tola", "≈11.66 g", "Measuring butter, ghee and medicinal ingredients", "Livestock & Dairy", "Standard small weight", "Mughal–Present", "Entire Maharashtra", "British India Standards"),
    (4, "Chhatak", "छटाक", "Chhatak", "—", "Weight", 4, "5 Tola = 1 Chhatak", "≈58.3 g", "Butter, ghee and dairy products", "Livestock & Dairy", "Small dairy measure", "Mughal–1958", "Entire Maharashtra", "Bombay Presidency Gazetteers"),
    (5, "Pav", "पाव", "Pav", "—", "Weight / Capacity", 5, "4 Chhatak = 1 Pav", "≈233 g (≈250 ml)", "Milk and curd", "Livestock & Dairy", "Quarter Seer", "Mughal–1958", "Entire Maharashtra", "Maharashtra State Gazetteers"),
    (6, "Adha Seer", "अर्धा शेर", "Adha Seer", "—", "Weight / Capacity", 6, "2 Pav = 1 Half Seer", "≈466 g (≈500 ml)", "Milk and buttermilk", "Livestock & Dairy", "Half Seer", "Mughal–1958", "Entire Maharashtra", "Bombay Revenue Records"),
    (7, "Seer (Sher)", "शेर", "Seer (Sher)", "—", "Weight / Capacity", 7, "2 Half Seer = 1 Seer", "≈0.933 kg / ≈0.93 L", "Standard unit for milk, curd and ghee", "Livestock & Dairy", "Principal dairy unit", "Mughal–1958", "Entire Maharashtra", "Bombay Presidency Standards"),
    (8, "Maund (Man)", "मण", "Maund (Man)", "मान", "Bulk Weight", 8, "40 Seers = 1 Maund", "≈37.324 kg", "Bulk fodder, cattle feed and dairy products", "Livestock & Dairy", "Principal bulk unit", "Mughal–1958", "Entire Maharashtra", "Government of Bombay Records"),
]

gold_rows = [
    (1, "Ratti", "रत्ती", "Ratti", "रक्तिका (Raktikā)", "Precious Metal Weight", 1, "Base Unit", "≈121.5 mg", "Measuring gemstones, pearls and small gold quantities", "Gold & Jewellery", "Smallest traditional jewellery weight", "Ancient–Present", "Entire Maharashtra", "Arthashastra; Ratna Pariksha texts"),
    (2, "Masha", "माषा", "Masha", "माष", "Precious Metal Weight", 2, "8 Ratti = 1 Masha", "≈0.972 g", "Measuring small ornaments and gold pieces", "Gold & Jewellery", "Small goldsmith unit", "Ancient–Present", "Entire Maharashtra", "Sanskrit weight systems"),
    (3, "Tola", "तोळा", "Tola", "तुला", "Precious Metal Weight", 3, "12 Masha = 1 Tola", "≈11.66 g", "Main unit for gold and silver trade", "Gold & Jewellery", "Most common jewellery unit", "Medieval–Modern", "Entire Maharashtra", "British India Standards"),
    (4, "Karsha", "कर्ष", "Karsha", "कर्ष", "Precious Metal Weight", 4, "4 Masha = 1 Karsha (classical texts)", "≈3.9 g", "Ancient metal weighing and jewellery preparation", "Gold & Jewellery", "Classical Sanskrit weight", "Ancient–Medieval", "Entire Maharashtra", "Arthashastra; Charaka Samhita"),
    (5, "Suvarna", "सुवर्ण", "Suvarna", "सुवर्ण", "Gold Weight", 5, "16 Masha = 1 Suvarna (classical)", "≈15.5 g", "Gold coins, ornaments and donations", "Gold & Jewellery", "Classical gold unit", "Ancient–Medieval", "Entire Maharashtra", "Arthashastra"),
    (6, "Pala", "पल", "Pala", "पल", "Precious Metal Weight", 6, "4 Karsha = 1 Pala", "≈46.7 g", "Large quantity gold and metal weighing", "Gold & Jewellery", "Bulk weight unit", "Ancient–Medieval", "Entire Maharashtra", "Ayurvedic and metallurgical texts"),
]

sector_specs = [
    ("trade-commerce", "trade", trade_rows),
    ("architecture", "arch", architecture_rows),
    ("medicine", "med", medicine_rows),
    ("textile-handloom", "textile", textile_rows),
    ("currency-money", "curr", currency_rows),
    ("household", "hh", household_rows),
    ("storage-transport", "storage", storage_rows),
    ("agriculture", "agri", agriculture_rows),
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
        sno, unit_name, marathi_name, eng_trans, sanskrit, category_str, order, relation, approx_eq, hist_usage, sector_name, desc, hist_period, region_of_mh, reference = r
        
        item_id = f"mh-{sector_code}-{sno}"
        slug = f"{clean_slug(unit_name)}-{sector_code}-mh-{sno}"
        category = map_category(category_str)
        
        entry = {
            "id": item_id,
            "slug": slug,
            "name_english": unit_name,
            "name_hindi": eng_trans,
            "category": category,
            "sector": sector_slug,
            "origin": "Maharashtra",
            "states": ["Maharashtra"],
            "local_names": [marathi_name],
            "meaning": desc,
            "used_in": [hist_usage] if hist_usage else [desc],
            "historical_period": hist_period,
            "region_applicable": region_of_mh,
            "measurement_type": category_str,
            "references": [reference] if reference else [],
            "tags": [
                "maharashtra",
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

print(f"Total generated Maharashtra entries: {len(entries)}")
assert len(entries) == 186, f"Expected 186, got {len(entries)}"

ts_content = '''import { Measurement } from "@/types";

export const MAHARASHTRA_MEASUREMENTS: Measurement[] = ''' + json.dumps(entries, ensure_ascii=False, indent=2) + ";\n"

with open("lib/maharashtraData.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print("Successfully written all 186 measurements to lib/maharashtraData.ts!")

