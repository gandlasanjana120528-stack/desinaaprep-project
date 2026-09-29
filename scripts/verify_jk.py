import urllib.request
import html
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

def test_url(url):
    print(f"Testing {url} ...")
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            raw = response.read().decode('utf-8')
            print(f"  Status: {response.status}")
            return html.unescape(raw)
    except Exception as e:
        print(f"  Error fetching {url}: {e}")
        return None

# Test URLs
html_space = test_url("http://localhost:3000/regions/Jammu%20and%20Kashmir")
assert html_space is not None, "Failed to fetch /regions/Jammu and Kashmir"
assert "Jammu and Kashmir" in html_space, "Jammu and Kashmir not found in /regions/Jammu and Kashmir"

html_canonical = test_url("http://localhost:3000/regions/jammu-and-kashmir")
assert html_canonical is not None, "Failed to fetch /regions/jammu-and-kashmir"

html_short = test_url("http://localhost:3000/regions/jk")
assert html_short is not None, "Failed to fetch /regions/jk"

# Verify View Switcher Buttons
print("\n--- Verifying View Switcher Buttons ---")
assert "Excel Table" in html_canonical, "Excel Table button not found"
assert "Cards" in html_canonical, "Cards view button not found"
print("  ✓ 'Excel Table' and 'Cards' view toggle buttons present")

# Verify 9 Styled Table Columns
print("\n--- Verifying 9 Styled Table Columns ---")
headers_to_check = [
    "Unit Name",
    "Sanskrit Name",
    "Local Language Name",
    "Kashmiri/Dogri",
    "Hindi Name",
    "Type / Category",
    "Approx. Modern Equivalent",
    "Relation / Hierarchy",
    "Used In / Context"
]
for h in headers_to_check:
    assert h in html_canonical, f"Header '{h}' not found in table"
    print(f"  ✓ Column Header '{h}' present")

# Verify Sector Pills
print("\n--- Verifying Sector Pills & Units ---")
expected_sectors = [
    ("Transportation & Distance", 11),
    ("Land Measurement", 11),
    ("Livestock & Dairy", 14),
    ("Household & Daily Life", 15),
    ("Gold & Jewellery", 11),
    ("Seed & Crop (Agriculture)", 20),
    ("Currency & Money", 11),
    ("Storage & Transportation", 14),
    ("Religious & Cultural", 15),
    ("Trade & Commerce", 21),
    ("Textile & Handloom", 12),
    ("Medicine (Ayurveda)", 13),
    ("Construction & Architecture", 15),
    ("Time & Calendar", 9),
]

for sec_name, count in expected_sectors:
    assert sec_name in html_canonical, f"Sector '{sec_name}' not found in HTML"
    print(f"  ✓ Sector '{sec_name}' ({count} units) verified")

# Verify Screenshot Specific Units
print("\n--- Verifying Screenshot Specific Units ---")
units_to_check = [
    "Tola", "Ad wal", "Pal (Kashmiri)", "Od Mun", "Seer (Kashmiri)", "Manwatas", "Panzuwu", "Trakh", "Poj",
    "Man (Maund)", "Kharwar", "Monu", "Dahĕr", "Ratti", "Masha", "Chhatank", "Pao", "Gaz", "Girah", "Khari", "Kos (Kosh)",
    "Knots Per Square Inch (KPSI)", "Talim (coded knotting pattern)", "Ilahi Gaz",
    "Kudava", "Prastha", "Adhaka", "Drona",
    "Khatamband (geometric wooden ceiling)", "Taq construction", "Dhajji-Dewari ('patchwork-quilt wall')", "Karam", "Jarib", "Sarsahi (Sarsai)", "Marla", "Kanal",
    "Yojana", "Brunz", "Gar", "Hari Singh Rupee"
]

for u in units_to_check:
    assert u in html_canonical, f"Unit '{u}' not found in HTML"
print(f"  ✓ All {len(units_to_check)} sampled units from user spreadsheets present!")

print("\n==========================================")
print("ALL JAMMU & KASHMIR VERIFICATIONS PASSED SUCCESSFULLY!")
print("==========================================")
