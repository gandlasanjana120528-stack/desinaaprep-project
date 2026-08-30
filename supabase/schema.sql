-- ─── DESINAAP Database Schema ──────────────────────────────────────────────────

-- Measurements
CREATE TABLE IF NOT EXISTS measurements (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name_english TEXT NOT NULL,
  name_sanskrit TEXT,
  name_telugu TEXT,
  name_hindi TEXT,
  local_names TEXT[],
  meaning TEXT,
  category TEXT NOT NULL CHECK (category IN ('length','weight','volume','area','time','currency','count','temperature','other')),
  sector TEXT NOT NULL,
  origin TEXT,
  historical_context TEXT,
  modern_equivalent TEXT,
  conversion_formula TEXT,
  states TEXT[],
  districts TEXT[],
  used_in TEXT[],
  tags TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- States
CREATE TABLE IF NOT EXISTS states (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  capital TEXT,
  region TEXT,
  language TEXT,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Districts
CREATE TABLE IF NOT EXISTS districts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  state_id UUID REFERENCES states(id) ON DELETE CASCADE,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Sectors
CREATE TABLE IF NOT EXISTS sectors (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  icon TEXT,
  description TEXT,
  overview TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Infographics
CREATE TABLE IF NOT EXISTS infographics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT,
  image_url TEXT,
  sector TEXT,
  state TEXT,
  tags TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- References
CREATE TABLE IF NOT EXISTS references (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  author TEXT,
  type TEXT NOT NULL CHECK (type IN ('book','research_paper','ancient_text','government_source','journal','website','other')),
  year INTEGER,
  publisher TEXT,
  url TEXT,
  description TEXT,
  tags TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Measurement Hierarchy
CREATE TABLE IF NOT EXISTS measurement_hierarchy (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  measurement_id UUID REFERENCES measurements(id) ON DELETE CASCADE,
  related_name TEXT NOT NULL,
  relation TEXT NOT NULL CHECK (relation IN ('smaller','larger','equal')),
  value NUMERIC,
  unit TEXT
);

-- RLS Policies
ALTER TABLE measurements ENABLE ROW LEVEL SECURITY;
ALTER TABLE states ENABLE ROW LEVEL SECURITY;
ALTER TABLE districts ENABLE ROW LEVEL SECURITY;
ALTER TABLE sectors ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access" ON measurements FOR SELECT USING (true);
CREATE POLICY "Public read access" ON states FOR SELECT USING (true);
CREATE POLICY "Public read access" ON districts FOR SELECT USING (true);
CREATE POLICY "Public read access" ON sectors FOR SELECT USING (true);
