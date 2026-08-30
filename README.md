# DESINAAP – Traditional Measurements Re-Coded

A production-ready full-stack educational web application for documenting, preserving, and exploring India's traditional measurement systems.

## Tech Stack

- **Frontend:** Next.js 15 (App Router), TypeScript, Tailwind CSS
- **Backend:** Supabase (PostgreSQL + Auth + Storage)
- **Search:** Fuse.js
- **Deployment:** Vercel

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Set up Supabase
- Create a project at [supabase.com](https://supabase.com)
- Run `supabase/schema.sql` in the SQL editor
- Copy your project URL and anon key

### 3. Configure environment
```bash
cp .env.local.example .env.local
# Fill in your Supabase credentials
```

### 4. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
desinaap/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── measurements/       # Measurements listing + detail
│   ├── regions/            # States + districts
│   ├── sectors/            # Sectors listing + detail
│   ├── infographics/       # Infographics gallery
│   ├── references/         # References archive
│   └── admin/              # Admin dashboard
├── components/             # Reusable components
│   ├── layout/             # Navbar, Footer
│   ├── measurements/       # MeasurementCard
│   └── search/             # GlobalSearch
├── lib/                    # Data, utilities
├── types/                  # TypeScript interfaces
└── supabase/               # DB client + schema
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, search, region & sector preview |
| `/measurements` | Full catalogue with search, filter, grid/list view |
| `/measurements/[slug]` | Measurement detail with hierarchy, conversion, history |
| `/regions` | All Indian states with map placeholder |
| `/regions/[state]` | State page with districts and measurements |
| `/regions/[state]/[district]` | District page |
| `/sectors` | All 8 occupational sectors |
| `/sectors/[slug]` | Sector detail with overview and measurements |
| `/infographics` | Gallery with category filter and fullscreen preview |
| `/references` | Academic references with type filter |
| `/admin/dashboard` | Admin overview |
| `/admin/measurements` | CRUD for measurements |
| `/admin/regions` | CRUD for states |
| `/admin/districts` | CRUD for districts |
| `/admin/sectors` | CRUD for sectors |
| `/admin/infographics` | CRUD for infographics |
| `/admin/references` | CRUD for references |
| `/admin/users` | User management |
| `/admin/settings` | App configuration |

## Developed as part of the Indian Knowledge Systems (IKS) Internship
