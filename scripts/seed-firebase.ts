// Uploads the built-in data to Firestore. Run from the project root:
//   npx tsx --env-file=.env.local scripts/seed-firebase.ts
// SAMPLE_MEASUREMENTS is already cleaned (no Storage & Transportation sector, no
// Ratti in Agriculture). If you seeded an older version, delete the old
// "measurements" collection in the Firebase console first – the site also hides
// removed records, but a fresh seed keeps the admin list tidy.
import { SAMPLE_MEASUREMENTS, SECTORS, INDIAN_STATES, SAMPLE_REFERENCES } from "../lib/data";
import { INFOGRAPHICS_DATA } from "../lib/infographicsData";

import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function seed() {
  console.log("Seeding Database...");
  
  // Measurements
  for (const m of SAMPLE_MEASUREMENTS) {
    await setDoc(doc(db, "measurements", m.slug), JSON.parse(JSON.stringify(m))); // drops undefined fields
    console.log(`Added measurement: ${m.name_english}`);
  }
  
  // Sectors
  for (const s of SECTORS) {
    await setDoc(doc(db, "sectors", s.slug), s);
    console.log(`Added sector: ${s.name}`);
  }
  
  // States
  for (const st of INDIAN_STATES) {
    await setDoc(doc(db, "states", st.slug), st);
    console.log(`Added state: ${st.name}`);
  }
  
  // References
  for (const r of SAMPLE_REFERENCES) {
    await setDoc(doc(db, "references", r.id), r);
    console.log(`Added reference: ${r.title}`);
  }
  
  // Infographics
  for (const i of INFOGRAPHICS_DATA) {
    await setDoc(doc(db, "infographics", i.id), i);
    console.log(`Added infographic: ${i.title}`);
  }

  console.log("Seeding complete!");
}

seed().catch(console.error);
