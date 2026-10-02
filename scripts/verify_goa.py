import re
import html as html_module
import urllib.request
from collections import Counter

with open('lib/goaData.ts', 'r', encoding='utf-8') as f:
    code = f.read()

sectors = re.findall(r'["\']?sector["\']?:\s*"([^"]+)"', code)
c = Counter(sectors)
print('Total Goa measurements in lib/goaData.ts:', len(sectors))
for k, v in c.items():
    print(f'  {k}: {v}')

try:
    with urllib.request.urlopen('http://localhost:3000/regions/goa') as resp:
        raw_html = resp.read().decode('utf-8')
    print('\n=== Server HTML Verification ===')
    print('HTTP Status: 200 OK')
    print('Contains "Goa":', 'Goa' in raw_html)
    print('Contains "194":', '194' in raw_html)

    # Strip comments and tags
    text = re.sub(r'<!--.*?-->', '', raw_html)
    text = re.sub(r'<[^>]+>', ' ', text)
    text = html_module.unescape(text)
    text = ' '.join(text.split())

    pills = [
        "All Sectors (194)",
        "Transportation & Distance (8)",
        "Land Measurement (6)",
        "Livestock & Dairy (10)",
        "Household & Daily Life (20)",
        "Gold & Jewellery (10)",
        "Seed & Crop (Agriculture) (20)",
        "Currency & Money (20)",
        "Storage & Transportation (20)",
        "Trade & Commerce (20)",
        "Textile & Handloom (20)",
        "Medicine (Ayurveda) (20)",
        "Construction & Architecture (20)"
    ]
    print('\nChecking Sector Pills:')
    for p in pills:
        found = p in text
        print(f'  [{"PASS" if found else "FAIL"}] {p}')

    headers = [
        "Traditional Unit Name",
        "Sanskrit Name",
        "Konkani Name",
        "English Transliteration",
        "Measurement Category",
        "Modern SI Equivalent",
        "Relationship Between Units",
        "Description & Historical Usage"
    ]
    print('\nChecking Table Headers:')
    for h in headers:
        found = h in text
        print(f'  [{"PASS" if found else "FAIL"}] {h}')

except Exception as e:
    print('HTTP Check Error:', e)
