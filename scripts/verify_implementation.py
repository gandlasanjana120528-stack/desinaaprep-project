import urllib.request
import re

def test_page(url, expected_title, expected_lang, expected_count, sample_units):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8')
        assert resp.status == 200, f"Expected 200 for {url}, got {resp.status}"
        print(f"\n[OK] {url} loaded successfully (Status 200, HTML length {len(html)} bytes)")
        
        # Check title
        assert expected_title in html, f"Missing title {expected_title}"
        print(f"  [OK] Found state title: '{expected_title}'")
        
        # Check language subtitle
        assert expected_lang in html, f"Missing language subtitle: '{expected_lang}'"
        print(f"  [OK] Found language header subtitle: '{expected_lang}'")
        
        # Check documented count
        assert f"{expected_count}" in html, f"Missing count {expected_count}"
        print(f"  [OK] Found measurement count: {expected_count}")
        
        # Check sample units
        for unit in sample_units:
            assert unit in html, f"Missing unit: {unit}"
            print(f"  [OK] Found unit in page: '{unit}'")

print("--- Testing Himachal Pradesh ---")
test_page(
    'http://localhost:3001/regions/himachal-pradesh',
    'Himachal Pradesh',
    'Pahari/Kangri/Kinnauri',
    73,
    ['Ratti', 'Masha', 'Tola', 'Kath-Kuni', 'Kullu / Kinnauri Shawl', 'Srang (Tibetan)', 'Biswansi', 'Doko']
)

print("\n--- Testing URL with spaces: /regions/Himachal pradesh ---")
test_page(
    'http://localhost:3001/regions/Himachal%20pradesh',
    'Himachal Pradesh',
    'Pahari/Kangri/Kinnauri',
    73,
    ['Ratti', 'Masha', 'Tola', 'Kath-Kuni']
)

print("\n--- Testing Jharkhand ---")
test_page(
    'http://localhost:3001/regions/jharkhand',
    'Jharkhand',
    'Nagpuri/Sadri',
    100,
    ['Ratti', 'Maas (Masha)']
)

print("\nALL AUTOMATED VERIFICATION CHECKS PASSED SUCCESSFULLY!")
