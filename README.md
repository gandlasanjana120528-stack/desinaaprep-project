# DESINAAP – Traditional Measurements Re-Coded

> **DESINAAP** is an educational web application developed as part of the **Indian Knowledge Systems (IKS) Internship** to document, preserve, and explore India's traditional measurement systems.

The platform brings together traditional measurements from different Indian regions and presents their names, meanings, historical context, modern equivalents, sectors of use, references, and visual resources in an interactive and searchable interface.

---

## ✨ Features

- 📏 **Traditional Measurements** – Explore traditional Indian units with names, categories, conversions, history, and regional usage.
- 🗺️ **Regions & Districts** – Browse measurement information by Indian state and district.
- 📏 **3000+ Units** – traditional units from 29 states (headline set in `MEASUREMENT_HEADLINE`, `lib/data.ts`).
- 🏛️ **8 Major Sectors** – Agriculture & Livestock, Trade & Commerce, Construction & Architecture, Medicine (Ayurveda), Textile & Handloom, Currency & Money, Household & Daily Life, and Land & Distance – plus a separate **Vedic Measurements** collection. Smaller source sectors are folded in via `SECTOR_ALIASES` in `lib/data.ts`.
- 👥 **About & Members pages** – the IKS 2025 project story and the team (edit `lib/team.ts` to add LinkedIn links).
- 🔎 **Global Search** – Quickly find measurements using fuzzy search with Fuse.js.
- 📊 **Infographics** – Explore visual explanations, measurement relationships, and educational resources.
- 📚 **References** – Browse academic, historical, government, and web references.
- 🤖 **AI Assistant** – Ask questions about traditional measurements through the DESINAAP chatbot.
- 🧠 **Quiz Mode** – Learn traditional units through interactive questions.
- 🔐 **Admin Dashboard** – Manage measurements, regions, districts, sectors, infographics, references, users, and settings.
- 🖼️ **Measurement Images** – Uses curated Wikimedia/Wikipedia images with attribution and supports custom project images.

---

## 🛠️ Tech Stack

### Frontend
- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Radix UI
- Lucide React

### Backend & Data
- Supabase
- PostgreSQL
- Firebase Authentication
- Firebase Admin SDK
- Firebase Firestore

### Search & AI
- Fuse.js
- Groq API
- Llama 3.3 70B (`llama-3.3-70b-versatile`)

### Deployment
- Vercel

---

## 📂 Project Structure

```text
desinaap/
├── app/
│   ├── admin/              # Admin dashboard and management pages
│   ├── api/chat/           # AI chatbot API
│   ├── auth/               # Authentication routes
│   ├── infographics/       # Infographic gallery
│   ├── measurements/       # Measurement catalogue and details
│   ├── regions/            # State and district pages
│   ├── references/         # Reference archive
│   ├── sectors/            # Sector pages
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx            # Homepage
│
├── components/             # Reusable UI components
├── lib/                    # Data, utilities, images, Firebase, etc.
├── public/                 # Static assets and images
├── supabase/               # Supabase client and database schema
├── types/                  # TypeScript types
├── scripts/                # Project scripts
├── package.json
├── next.config.ts
└── README.md
```

---

## 🌐 Main Routes

| Route | Description |
|---|---|
| `/` | Homepage |
| `/measurements` | Complete measurement catalogue |
| `/measurements/[id]` | Measurement details |
| `/regions` | Indian states and regional information |
| `/regions/[state]` | State-level measurements |
| `/regions/[state]/[district]` | District-level information |
| `/sectors` | Traditional occupational sectors |
| `/sectors/[slug]` | Sector details |
| `/infographics` | Infographic gallery |
| `/references` | Academic and historical references |
| `/about` | About the project (IKS 2025) |
| `/members` | Interns and Principal Investigator |
| `/admin/login` | Admin login |
| `/admin/dashboard` | Admin dashboard |
| `/api/chat` | DESINAAP AI Assistant API |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- Node.js (LTS recommended)
- npm
- A Supabase project
- A Firebase project
- A Groq API key for the AI Assistant

Check your versions:

```bash
node -v
npm -v
```

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd desinaap
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the project root.

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id

# Groq AI
GROQ_API_KEY=your_groq_api_key
```

> Keep `.env.local` private. Never commit API keys or Firebase private credentials to GitHub.

---

## 🗄️ Supabase Setup

The database schema is available at:

```text
supabase/schema.sql
```

To configure Supabase:

1. Create a project in Supabase.
2. Open **SQL Editor**.
3. Run `supabase/schema.sql`.
4. Copy the Supabase project URL and anon key into `.env.local`.

The database supports data such as:

- Measurements
- States
- Districts
- Sectors
- Infographics
- References
- Measurement hierarchies

---

## 🔥 Firebase Setup

Firebase is used for the application's authentication and supporting data functionality.

1. Create a Firebase project.
2. Enable Firebase Authentication.
3. Create a Firebase web application.
4. Add the Firebase configuration values to `.env.local`.
5. Configure Firebase Admin credentials when server-side Firebase functionality is required.

---

## 🤖 AI Assistant

DESINAAP includes an AI-powered learning assistant available through:

```text
POST /api/chat
```

The assistant uses the project's measurement information as context and can answer questions about traditional Indian measurement systems.

The AI integration uses:

```text
User Question
      ↓
DESINAAP Measurement Data
      ↓
Relevant Context
      ↓
Groq API
      ↓
Llama 3.3 70B
      ↓
AI Response
```

The chatbot supports educational conversations around traditional measurements and includes a quiz mode for learning.

---

## 🔎 Search

The application uses **Fuse.js** for fuzzy searching.

Users can search and explore measurements using information such as:

- Measurement name
- Local names
- Category
- Sector
- Region
- Related terms

---

## 🖼️ Measurement Images

Measurement images are managed through:

```text
lib/measurementImages.ts
```

Image selection follows this approach:

1. The team's real photo for that unit (`lib/unitPhotos.ts`, files in `public/images/units/`).
1. Custom measurement image (`image_url`), when available.
2. A fixed photo for that exact unit (project photos in `public/images/local/`, verified Commons files).
3. Tola / Tulam: the silver one-rupee coin.
4. The lead photo of the Wikipedia article about that exact unit.
No generated drawings are used – only real photos (the one exception is the Masha illustration of 8 Ratti seeds).

There are no shared "representative" images – a unit with no fitting picture shows none.

Third-party images are displayed with appropriate attribution where applicable.

To add a custom image:

```text
public/images/
```

Then register the image in:

```text
lib/measurementImages.ts
```

---

## ▶️ Run Locally

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

For the admin dashboard:

```text
http://localhost:3000/admin/login
```

---

## 🏗️ Production Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

## ☁️ Deployment

DESINAAP can be deployed on **Vercel**.

### Deployment Steps

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add the required environment variables.
4. Deploy the application.

Make sure the following services are configured before deployment:

- Supabase
- Firebase
- Groq API
- Required environment variables

---

## 🔑 Admin login

Admin accounts are **Firebase Authentication users** – they are not stored in this code.
If you forget the password: Firebase Console → **Authentication → Users** → reset the password for the admin email, or **Add user** to create a new admin.

---

## 🔐 Security

- Never commit `.env.local`.
- Never expose Firebase private keys.
- Store API keys only in environment variables.
- Review Supabase Row Level Security policies before production deployment.
- Restrict administrative access to authorized users.

---

## 🎓 IKS Internship Project

**DESINAAP – Traditional Measurements Re-Coded** was developed as part of the **Indian Knowledge Systems (IKS) Internship**.

The project aims to digitally preserve traditional Indian measurement knowledge and make it accessible to students, researchers, educators, and the general public.

### Key Objectives

- Preserve traditional measurement knowledge digitally.
- Document regional variations across India.
- Connect traditional units with modern equivalents.
- Provide educational visualizations and references.
- Make traditional knowledge searchable and easy to explore.
- Use AI to support interactive learning.

---

## 🙏 Acknowledgements

- Indian Knowledge Systems (IKS)
- Wikimedia Commons contributors
- Wikipedia contributors
- Supabase
- Firebase
- Vercel
- Groq
- Open-source Next.js and React community

---

## 📌 Project Status

DESINAAP is an actively developed educational platform. Measurement datasets, regional information, AI features, and administrative functionality may continue to evolve as the project progresses.

