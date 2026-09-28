import re
import html as html_module
import urllib.request
from collections import Counter

with open('lib/apData.ts', 'r', encoding='utf-8') as f:
    code = f.read()

sectors = re.findall(r'["\']?sector["\']?:\s*"([^"]+)"', code)
c = Counter(sectors)
print('Total Andhra Pradesh measurements in lib/apData.ts:', len(sectors))
for k, v in c.items():
    print(f'  {k}: {v}')

test_urls = [
    'http://localhost:3000/regions/andhra-pradesh',
    'http://localhost:3000/regions/Andhra%20pradesh'
]

for url in test_urls:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as resp:
            raw_html = resp.read().decode('utf-8')
        print(f'\n=== Server HTML Verification for {url} ===')
        print('HTTP Status: 200 OK')
        print('Contains "Andhra Pradesh":', 'Andhra Pradesh' in raw_html)
        print('Contains "192":', '192' in raw_html)

        # Strip comments and tags
        text = re.sub(r'<!--.*?-->', '', raw_html)
        text = re.sub(r'<[^>]+>', ' ', text)
        text = html_module.unescape(text)
        text = ' '.join(text.split())

        pills = [
            "All Sectors (192)",
            "Transportation & Distance (9)",
            "Land Measurement (7)",
            "Livestock & Dairy (9)",
            "Household & Daily Life (20)",
            "Gold & Jewellery (7)",
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
            "Telugu Name",
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

        # Sample units verification across new and old sectors
        sample_units = [
            "Gavyuti", "Krosha / Kos", "Krosha Patha / Kosu",
            "Chhatak", "Pav / Pao", "Seer / Sher", "Padi", "Marakkal",
            "Suvarna", "Varaha (Pagoda)",
            "Ankanam", "Gajam", "Cent", "Guntha", "Acre", "Hectare",
            "Yava", "Angula", "Kasu", "Panam", "Varaha", "Bindu",
            "Kuncham", "Maanika", "Basta", "Gade", "Nauka Bharam"
        ]
        print('\nChecking Sample Units:')
        for u in sample_units:
            found = u in text
            print(f'  [{"PASS" if found else "FAIL"}] {u}')

    except Exception as e:
        print(f'HTTP Check Error for {url}:', e)
