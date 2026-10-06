# DESINAAP — Setup Guide

## What you need
- Node.js 20 or newer (check with `node -v`)
- A free Firebase account (admin login + Firestore database)
- A free Groq account (AI chatbot)
- Supabase is optional (only used by the admin sidebar)

---

## 1. Install dependencies
Open a terminal in the project folder (the one with `package.json`):

```bash
npm install
```

---

## 2. Create a Firebase project
1. Go to https://console.firebase.google.com and click **Add project**.
2. Name it `desinaap` and finish the wizard.

### Enable Authentication
1. Go to **Build → Authentication → Get started**.
2. Open the **Sign-in method** tab and enable **Email/Password**.
3. Open the **Users** tab, click **Add user**, and enter an email and password.
   This is your admin login.

### Enable Firestore
1. Go to **Build → Firestore Database → Create database**.
2. Choose a region near you and start in **test mode** for development.

### Get your web app keys
1. Go to **Project settings (gear icon) → General**.
2. Under "Your apps", click the **</>** (Web) icon and register an app.
3. Copy the `firebaseConfig` values. You will paste them in step 4.

### Get Admin SDK credentials (only for server-side Firebase)
1. Go to **Project settings → Service accounts → Generate new private key**.
2. From the downloaded JSON you need `client_email` and `private_key`.

---

## 3. Get a Groq API key (AI chatbot)
1. Go to https://console.groq.com and sign up.
2. Open **API Keys → Create API Key** and copy it.

The chatbot uses the model `llama-3.3-70b-versatile`.

---

## 4. Create `.env.local`
Create a file named `.env.local` in the project root, next to `package.json`:

```env
# Firebase (web app config)
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Firebase Admin (optional, server-side only)
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxx@your_project.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nXXXX\n-----END PRIVATE KEY-----\n"

# Groq (AI assistant)
GROQ_API_KEY=your_groq_api_key

# Supabase (optional)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Notes:
- Keep the quotes around `FIREBASE_PRIVATE_KEY` and keep the `\n` characters as they are.
- Never commit `.env.local` to GitHub.

---

## 5. Load the data into Firestore (one time)
The measurements pages and admin panel read from Firestore. This script uploads the built-in data:

```bash
npx tsx --env-file=.env.local scripts/seed-firebase.ts
```

You should see lines like `Added measurement: ...`.
If you get a permission error, your Firestore rules are blocking writes. Use test mode while seeding.

---

## 6. Run the project
```bash
npm run dev
```

- Public site: http://localhost:3000
- Admin login: http://localhost:3000/admin/login

Log in with the email and password you created in Firebase Authentication.

---

## 7. (Optional) Supabase
Only needed if you want the Supabase features.
1. Create a project at https://supabase.com.
2. Open **SQL Editor → New query**, paste the contents of `supabase/schema.sql`, and click **Run**.
3. Copy the Project URL and anon key (**Settings → API**) into `.env.local`.

---

## 8. Production build
```bash
npm run build
npm start
```

## 9. Deploy to Vercel
1. Push the code to GitHub.
2. Go to https://vercel.com → **New Project** → import the repo.
3. Add every variable from `.env.local` under **Environment Variables**.
4. Click **Deploy**.
5. In Firebase → **Authentication → Settings → Authorized domains**, add your Vercel domain.
6. Before going live, replace Firestore test-mode rules with rules that allow public reads but only signed-in admins to write:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Forgot the admin password | Firebase Console → Authentication → Users → reset the password, or Add user |
| `Invalid email or password` on admin login | Check the user exists in Firebase → Authentication → Users and that Email/Password sign-in is enabled |
| Admin login does nothing / auth errors | Firebase keys in `.env.local` are wrong or missing. Restart `npm run dev` after editing |
| Measurements page is empty | You haven't run the seed script (step 5), or Firestore rules block reads |
| Chatbot gives errors | `GROQ_API_KEY` is missing or invalid |
| `Missing permissions` when seeding | Firestore is not in test mode |
| Changes to `.env.local` not working | Stop the server (Ctrl+C) and run `npm run dev` again |
| Port 3000 already in use | Run `npm run dev -- -p 3001` |
