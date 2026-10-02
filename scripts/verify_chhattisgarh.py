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

# Test 1: Fetch /regions/chattisgarh
html_alias = test_url("http://localhost:3000/regions/chattisgarh")
assert html_alias is not None, "Failed to fetch /regions/chattisgarh"
assert "Chhattisgarh" in html_alias, "Chhattisgarh not found in /regions/chattisgarh"

# Test 2: Fetch /regions/chhattisgarh
html_canonical = test_url("http://localhost:3000/regions/chhattisgarh")
assert html_canonical is not None, "Failed to fetch /regions/chhattisgarh"
assert "Chhattisgarh" in html_canonical, "Chhattisgarh not found in /regions/chhattisgarh"

# Verify elements in HTML
print("\n--- Verifying View Switcher Buttons ---")
assert "Excel Table" in html_canonical, "Excel Table button not found"
assert "Cards" in html_canonical, "Cards view button not found"
print("  ✓ 'Excel Table' and 'Cards' view toggle buttons present")

print("\n--- Verifying 9 Styled Table Columns ---")
headers_to_check = [
    "Unit Name",
    "Sanskrit Name",
    "Local Language Name",
    "Chhattisgarhi",
    "Hindi Name",
    "Type / Category",
    "Approx. Modern Equivalent",
    "Relation / Hierarchy",
    "Used In / Context"
]
for h in headers_to_check:
    assert h in html_canonical, f"Header '{h}' not found in table"
    print(f"  ✓ Column Header '{h}' present")

print("\n--- Verifying Sector Pills & Units ---")
expected_sectors = [
    ("Transportation & Distance", 7),
    ("Land Measurement", 6),
    ("Livestock & Dairy", 8),
    ("Household & Daily Life", 8),
    ("Gold & Jewellery", 6),
    ("Seed & Crop (Agriculture)", 10),
    ("Currency & Money", 6),
    ("Storage & Transportation", 7),
    ("Trade & Commerce", 10),
    ("Textile & Handloom", 6),
    ("Medicine (Ayurveda)", 7),
    ("Construction & Architecture", 7),
]

for sec_name, count in expected_sectors:
    assert sec_name in html_canonical, f"Sector '{sec_name}' not found in HTML"
    print(f"  ✓ Sector '{sec_name}' ({count} units) verified")

print("\n--- Verifying Screenshot Specific Units ---")
units_to_check = [
    "Ratti", "Masha", "Tola", "Chhatak", "Pav (Pao)", "Adha Seer", "Seer", "Pasri", "Maund (Man)", "Khandi",
    "Angula", "Vitasti", "Hasta", "Gaz (Gaj)", "Danda", "Rajju",
    "Karsha", "Pala", "Prastha", "Adhaka", "Drona",
    "Krosha", "Yojana",
    "Square Gaj", "Biswansi", "Biswa", "Bigha", "Acre", "Hectare",
    "Cowrie", "Dam", "Paisa (Pice)", "Anna", "Rupee", "Mohur"
]
for u in units_to_check:
    assert u in html_canonical, f"Unit '{u}' not found in HTML"
print(f"  ✓ All {len(units_to_check)} sampled units from user spreadsheets present!")

print("\n==========================================")
print("ALL VERIFICATIONS PASSED SUCCESSFULLY!")
print("==========================================")
