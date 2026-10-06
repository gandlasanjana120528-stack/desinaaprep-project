# DESINAAP – change log (October 2026)

## Round 8
- New photos from IMAGES.docx: Adhaka, Drona, Kudava, Prastha, Bre and Quintal (used for the same unit in every sector, including the Vedic ones).

## Round 7
- Tanka: the team's silver tanka coin photo for every Tanka.
- "Hat (Hasta/Cubit)" now shows the Hasta (elbow-to-fingertip) photo.
- Gaz outside Textile and every Kos / Krosha unit: photos removed.
- Karam (cloth-trade reference) in Textile: saree photo removed, no photo.
- Photos are never cropped: cards show the whole photo, and the unit page shows it large above the description (click to open full size).

## Round 6 – real photos only
- All generated drawings (tape, weighing dial, jug, plot grid, clock) removed; units without a real photo show none. Masha illustration kept.
- Gaz: the cloth-and-tape photo is now used only in Textile; Gaz in Land/Architecture shows the historical yard standard (Wikipedia).
- Kos / Krosha: the tower photo replaced with an old Indian milestone (Wikimedia Commons, CC BY-SA 4.0).
- Chhatak: the team's photo of an old iron shop weight, for every Chhatak/Chattak/Chittak.
- No photo is shared by two different units (Killa no longer reuses the Acre photo; Bhori/Tolam now use the Tola photo).

## Round 5 – more photos
- 14 new photos: 10 land plots (Veli, Ropani, Ground, Murabba, Cent, Square Gaj, Dhur, Marla, Kuli, Decimal), Adugu, and the copper Kudam.
- The body-measure infographic is cut into 5 photos (Angula, Vitasti, Hasta, Danda, Rajju) and "Plate I" into 8 drawings
  (Tala, Gokarna, Pradesa, Aratni, Pada, Prakrama, Vyayama, Purusha-Vyama) – each unit gets only its own part.
- Checklist document 4: Vedic time photos for Ayana, Masa, Paksha, Samvatsara and Ritu.
- 158 team photos in total; 1,569 units now show a team photo.

## Round 4 – team photos
- 128 real photos from the two "Real Image Checklist" documents added in `public/images/units/<sector>/`.
- Each photo is linked to its unit in its own sector, and to the same unit (same name or "also called" name)
  in every other sector and state, when it measures the same kind of thing. 1,379 units now show a team photo.
- Team photos replace any earlier image (Wikipedia photo, older photo or drawing) for those units.
- Mapping lives in `lib/unitPhotos.ts`; rebuild it with `npx tsx scripts/build-unit-photos.ts` after editing `scripts/unit-photos.json`.

## Round 3
- Chatbot bubble moved above the mascot and is always visible while the chat is closed; the × buttons are removed (the mascot can no longer be hidden).
- Sectors reduced to **8 major sectors** + the Vedic collection. Merged: Gold & Jewellery → Trade & Commerce, Livestock & Dairy → Agriculture & Livestock,
  Transportation & Distance → Land & Distance, Religious & Cultural → Household & Daily Life. Old sector URLs redirect. Exact duplicates created by the merge are removed.
- Many more images: units without a photo now get a drawing made from their own value – weighing dial, measuring jug, plot grid or clock dial (plus the existing tape).
  About 2,000 of the 2,777 units now have a picture; the rest have no reliable value to draw and stay without one.
- "3000+" is now one setting (`MEASUREMENT_HEADLINE` in `lib/data.ts`).


## Requested changes
1. "500+" → "3000+" on the home page, sector pages and links. (Real count after removals: 2,986.)
2. Home page label now reads "Indian Knowledge Systems Initiative · MoE"; footer says "IKS Internship Project, Ministry of Education".
3. Storage & Transportation removed completely: 304 units, the sector, menus, filters, counts and state descriptions (`REMOVED_SECTORS` in `lib/data.ts`).
4. Chatbot shows a "How can I help you?" bubble beside the mascot (click to open, × to hide).
5. State pages open in **Cards** view by default; "All Sectors" sits beside the "Sectors in <State>" heading.
6. Ratti (and Gunja / Guriginja, the same seed) removed from Agriculture in every state.
7. Excel "Type / Category" column uses plain generic labels (`displayMeasurementType` in `lib/format.ts`).
8. Images: no shared "representative" images. Ratti → seed photo, Paramanu → dust photo, Masha → 8-seed drawing,
   Tola/Tulam → silver rupee coin, length units → their own measuring-tape scale, other units → their own Wikipedia photo or none
   (`lib/measurementImages.ts`, `components/measurements/LengthScale.tsx`).
9. Back button returns to the previous page with the same view and filters (view/sector/search kept in the URL).
10. 13 new verified references with working links; References page shows links and a "Website" filter.
11. Admin login lives in Firebase Authentication (see README → "Admin login").
12. New pages: `/about` (IKS project 2025) and `/members` (edit `lib/team.ts` to add LinkedIn links and PI details).

## Fixes
- `/measurements?q=…` search links now work; measurements filters, view and page are kept in the URL.
- Chatbot remembers the conversation (quiz answers work) and shows bold text and bullet lists properly.
- Admin area uses its own sidebar with Firebase sign-out; public header/footer/chatbot hidden there.
- All measurement counts (states, districts, sectors, dashboard) are calculated from the data.
- State links like "Jammu & Kashmir" / "Himachal Pradesh" fixed; duplicate "Trade & Commerce (1)" pill fixed.
- Web links that were stored as "historical context" now show under References on the unit page.
- Navbar lists every sector; home page shows the interactive map; map only links documented states.
- Auth redirect routes no longer hard-code localhost; Supabase schema fixed (`"references"` is a reserved word).
- README: correct AI model (Llama 3.3 70B via Groq), sectors, image rules, admin login help.
