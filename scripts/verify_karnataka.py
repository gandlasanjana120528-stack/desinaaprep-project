import urllib.request
import re

def test_page(url, expected_title, expected_lang, expected_count, sample_units, expected_pills):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8')
        # Strip React SSR comment markers <!-- -->
        clean_html = re.sub(r'<!--.*?-->', '', html)
        assert resp.status == 200, f"Expected 200 for {url}, got {resp.status}"
        print(f"\n[OK] {url} loaded successfully (Status 200, HTML length {len(html)} bytes)")
        
        # Check title
        assert expected_title in clean_html, f"Missing title '{expected_title}'"
        print(f"  [OK] Found state title: '{expected_title}'")
        
        # Check language
        assert expected_lang in clean_html, f"Missing language: '{expected_lang}'"
        print(f"  [OK] Found language: '{expected_lang}'")
        
        # Check count
        assert f"{expected_count}" in clean_html, f"Missing count '{expected_count}'"
        print(f"  [OK] Found measurement count: {expected_count}")
        
        # Check sector pills
        for pill in expected_pills:
            assert pill in clean_html, f"Missing sector pill: '{pill}'"
            print(f"  [OK] Found sector pill: '{pill}'")
            
        # Check sample units
        for unit in sample_units:
            assert unit in clean_html, f"Missing unit: '{unit}'"
            print(f"  [OK] Found unit in page: '{unit}'")
            
        # Check 9 table columns
        cols = [
            "#",
            "Traditional Unit Name",
            "Sanskrit Name",
            "Kannada Name",
            "English Transliteration",
            "Measurement Category",
            "Modern SI Equivalent",
            "Relationship Between Units",
            "Description &amp; Historical Usage"
        ]
        for col in cols:
            assert col in clean_html, f"Missing column header: '{col}'"
            print(f"  [OK] Found column header: '{col}'")
            
        # Check view switcher
        assert "Excel Table" in clean_html, "Missing 'Excel Table' toggle button"
        assert "Cards" in clean_html, "Missing 'Cards' toggle button"
        print("  [OK] Found Excel Table / Cards View switcher")

expected_pills = [
    "All Sectors (245)",
    "Transportation &amp; Distance (8)",
    "Land Measurement (10)",
    "Livestock &amp; Dairy (8)",
    "Household &amp; Daily Life (30)",
    "Gold &amp; Jewellery (9)",
    "Seed &amp; Crop (Agriculture) (15)",
    "Currency &amp; Money (30)",
    "Storage &amp; Transportation (30)",
    "Trade &amp; Commerce (15)",
    "Textile &amp; Handloom (30)",
    "Medicine (Ayurveda) (30)",
    "Construction &amp; Architecture (30)"
]

sample_units = [
    "Ratti",
    "Masha",
    "Karsha",
    "Pala",
    "Kudava",
    "Prastha",
    "Drona",
    "Kolaga",
    "Khanduga",
    "Suvarna",
    "Tola",
    "Gunja"
]

print("--- Testing /regions/Karnataka ---")
test_page(
    'http://localhost:3000/regions/Karnataka',
    'Karnataka',
    'Kannada',
    245,
    sample_units,
    expected_pills
)

print("\n--- Testing lowercase /regions/karnataka ---")
test_page(
    'http://localhost:3000/regions/karnataka',
    'Karnataka',
    'Kannada',
    245,
    sample_units,
    expected_pills
)

print("\n--- Testing state alias /regions/ka ---")
test_page(
    'http://localhost:3000/regions/ka',
    'Karnataka',
    'Kannada',
    245,
    sample_units,
    expected_pills
)

print("\nALL AUTOMATED VERIFICATION CHECKS PASSED PERFECTLY!")
