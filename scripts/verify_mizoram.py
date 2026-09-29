import urllib.request
import re

def test_page(url, expected_title, expected_lang, expected_count, sample_units, expected_pills):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8')
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
            "Unit Name",
            "Sanskrit Name",
            "Local Language Name",
            "Mizo",
            "Hindi Name",
            "Type / Category",
            "Approx. Modern Equivalent",
            "Relation / Hierarchy",
            "Used In / Context"
        ]
        for col in cols:
            assert col in clean_html, f"Missing column header: '{col}'"
            print(f"  [OK] Found column header element: '{col}'")
            
        # Check view switcher
        assert "Excel Table" in clean_html, "Missing 'Excel Table' toggle button"
        assert "Cards" in clean_html, "Missing 'Cards' toggle button"
        print("  [OK] Found Excel Table / Cards View switcher")

expected_pills = [
    "All Sectors (43)",
    "Transportation &amp; Distance (1)",
    "Land Measurement (4)",
    "Livestock &amp; Dairy (2)",
    "Household &amp; Daily Life (4)",
    "Gold &amp; Jewellery (3)",
    "Seed &amp; Crop (Agriculture) (3)",
    "Currency &amp; Money (4)",
    "Storage &amp; Transportation (4)",
    "Religious &amp; Cultural (6)",
    "Trade &amp; Commerce (4)",
    "Textile &amp; Handloom (4)",
    "Medicine (Ayurveda) (2)",
    "Construction &amp; Architecture (2)"
]

sample_units = [
    "Barter exchange",
    "Sial (Mithun/Gayal)",
    "Tin",
    "Puanbu loin-loom panel width",
    "Puan (standard traditional cloth)",
    "Pawndum (mourning cloth)",
    "Tawlhlohpuan",
    "Jhum plot",
    "Puanchei"
]

print("--- Testing /regions/mizoram ---")
test_page(
    'http://localhost:3000/regions/mizoram',
    'Mizoram',
    'Mizo',
    43,
    sample_units,
    expected_pills
)

print("\n--- Testing uppercase /regions/Mizoram ---")
test_page(
    'http://localhost:3000/regions/Mizoram',
    'Mizoram',
    'Mizo',
    43,
    sample_units,
    expected_pills
)

print("\n--- Testing alias /regions/mz ---")
test_page(
    'http://localhost:3000/regions/mz',
    'Mizoram',
    'Mizo',
    43,
    sample_units,
    expected_pills
)

print("\nALL MIZORAM AUTOMATED VERIFICATION CHECKS PASSED PERFECTLY!")
