import re
import html as html_module
import urllib.request
from collections import Counter

with open('lib/maharashtraData.ts', 'r', encoding='utf-8') as f:
    code = f.read()

sectors = re.findall(r'["\']?sector["\']?:\s*"([^"]+)"', code)
c = Counter(sectors)
print('Total Maharashtra measurements in lib/maharashtraData.ts:', len(sectors))
for k, v in c.items():
    print(f'  {k}: {v}')

test_urls = [
    'http://localhost:3000/regions/maharashtra',
    'http://localhost:3000/regions/Maharastra'
]

for url in test_urls:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as resp:
            raw_html = resp.read().decode('utf-8')
        print(f'\n=== Server HTML Verification for {url} ===')
        print('HTTP Status: 200 OK')
        print('Contains "Maharashtra":', 'Maharashtra' in raw_html)
        print('Contains "186":', '186' in raw_html)

        # Strip comments and tags
        text = re.sub(r'<!--.*?-->', '', raw_html)
        text = re.sub(r'<[^>]+>', ' ', text)
        text = html_module.unescape(text)
        text = ' '.join(text.split())

        pills = [
            "All Sectors (186)",
            "Transportation & Distance (6)",
            "Land Measurement (6)",
            "Livestock & Dairy (8)",
            "Household & Daily Life (20)",
            "Gold & Jewellery (6)",
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
            "Marathi Name",
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
        print(f'HTTP Check Error for {url}:', e)
