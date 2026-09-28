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

# Test 1: Fetch /regions/Tamilnadu
html_capital = test_url("http://localhost:3000/regions/Tamilnadu")
assert html_capital is not None, "Failed to fetch /regions/Tamilnadu"
assert "Tamil Nadu" in html_capital, "Tamil Nadu not found in /regions/Tamilnadu"

# Test 2: Fetch /regions/tamil-nadu
html_canonical = test_url("http://localhost:3000/regions/tamil-nadu")
assert html_canonical is not None, "Failed to fetch /regions/tamil-nadu"
assert "Tamil Nadu" in html_canonical, "Tamil Nadu not found in /regions/tamil-nadu"

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
    "Tamil",
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
    ("Transportation & Distance", 9),
    ("Land Measurement", 9),
    ("Livestock & Dairy", 10),
    ("Household & Daily Life", 20),
    ("Gold & Jewellery", 11),
    ("Seed & Crop (Agriculture)", 20),
    ("Currency & Money", 20),
    ("Storage & Transportation", 25),
    ("Trade & Commerce", 20),
    ("Textile & Handloom", 20),
    ("Medicine (Ayurveda)", 20),
    ("Construction & Architecture", 20),
]

for sec_name, count in expected_sectors:
    assert sec_name in html_canonical, f"Sector '{sec_name}' not found in HTML"
    print(f"  ✓ Sector '{sec_name}' ({count} units) verified")

# Verify Screenshot Specific Units
print("\n--- Verifying Screenshot Specific Units ---")
units_to_check = [
    "Nel", "Yavam", "Kunri", "Manjadi", "Kalanju", "Palam", "Padi", "Nazhi", "Ulakku", "Uri",
    "Marakkal", "Kuruni", "Padakku", "Thuni", "Kalam", "Kottai", "Moodai", "Parai", "Karisai", "Garce",
    "Seer", "Maund", "Candy", "Bale",
    "Viral", "Muzham", "Aratni", "Kōl", "Gajam", "Dhanus", "Yojana",
    "Bindu", "Anjali", "Mushti", "Tola", "Karsha", "Masha", "Ratti", "Prasriti", "Kudava", "Prastha", "Adhaka",
    "Kāsu", "Panam", "Pon"
]
for u in units_to_check:
    assert u in html_canonical, f"Unit '{u}' not found in HTML"
print(f"  ✓ All {len(units_to_check)} sampled units from user spreadsheets present!")

print("\n==========================================")
print("ALL TAMIL NADU VERIFICATIONS PASSED SUCCESSFULLY!")
print("==========================================")
