const path = require("path");

// Mock data
// Usually we'd import this but ts-node on raw ts files might complain with Next.js aliases
// For simplicity we use the existing SAMPLE_MEASUREMENTS by copying them or just using raw array
// Let's use TS Node for execution: npx ts-node scripts/seed-firebase.ts
import { SAMPLE_MEASUREMENTS, SECTORS, INDIAN_STATES, SAMPLE_REFERENCES, SAMPLE_INFOGRAPHICS } from "../lib/data";

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
    await setDoc(doc(db, "measurements", m.slug), m);
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
  for (const i of SAMPLE_INFOGRAPHICS) {
    await setDoc(doc(db, "infographics", i.id), i);
    console.log(`Added infographic: ${i.title}`);
  }

  console.log("Seeding complete!");
}

seed().catch(console.error);
