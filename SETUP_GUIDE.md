# DESINAAP — Complete Setup Guide

## Step 1: Create a Supabase Project

1. Go to **https://supabase.com** and sign up (free)
2. Click **"New Project"**
3. Fill in:
   - **Project name:** desinaap
   - **Database password:** choose a strong password (save it!)
   - **Region:** pick closest to India (e.g. Singapore)
4. Click **"Create new project"** — wait ~2 minutes for it to provision

---

## Step 2: Get Your API Keys

Once your project is ready:

1. In the left sidebar click **Settings → API**
2. Copy these two values:

```
Project URL:   https://xxxxxxxxxxxx.supabase.co
Anon Key:      eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## Step 3: Configure Your .env.local

Open the file `.env.local` in the desinaap folder and replace the placeholders:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

The service role key is also on the same Settings → API page (scroll down to "service_role").

> ⚠️ Never commit .env.local to Git. It's already in .gitignore.

---

## Step 4: Create the Database Tables

1. In your Supabase dashboard, click **SQL Editor** in the left sidebar
2. Click **"New query"**
3. Copy the entire contents of `supabase/schema.sql` and paste it
4. Click **"Run"** (or press Ctrl+Enter)

You should see: `Success. No rows returned`

---

## Step 5: Create Your Admin Account

You need to create an admin user in Supabase Auth:

### Option A — Supabase Dashboard (easiest)

1. Go to **Authentication → Users** in the left sidebar
2. Click **"Add user" → "Create new user"**
3. Enter:
   - **Email:** admin@yourdomain.com  ← use any email you want
   - **Password:** choose a strong password
4. Click **"Create user"**

### Option B — SQL (for multiple admins)

Run this in the SQL Editor:

```sql
-- This is handled by Supabase Auth UI above.
-- For production, use the dashboard or invite flow.
```

---

## Step 6: Configure Supabase Auth Settings

1. Go to **Authentication → URL Configuration**
2. Set **Site URL** to:
   - Development: `http://localhost:3000`
   - Production: `https://yourdomain.com`
3. Add to **Redirect URLs**:
   - `http://localhost:3000/auth/callback`
   - `https://yourdomain.com/auth/callback`
4. Click **Save**

---

## Step 7: Run the Project

```bash
# Install dependencies (if not done)
npm install

# Start development server
npm run dev
```

Open **http://localhost:3000** — the public site loads without any login.

Open **http://localhost:3000/admin/login** — you'll see the admin login page.

Sign in with the email and password you created in Step 5.

---

## How It Works

| Who | What they can do |
|-----|-----------------|
| **Public users** | Browse measurements, regions, sectors, infographics, references — no login needed |
| **Admin** | Access `/admin/*` — requires Supabase Auth login |

The middleware (`middleware.ts`) automatically:
- Redirects any `/admin/*` request to `/admin/login` if not signed in
- Redirects to `/admin/dashboard` if already signed in and trying to access login

---

## Step 8: Deploy to Vercel (Optional)

1. Push your code to a GitHub repository
2. Go to **https://vercel.com** → New Project → Import your repo
3. In **Environment Variables**, add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
4. Click **Deploy**
5. Go back to Supabase → Authentication → URL Configuration and add your Vercel domain to Redirect URLs

---

## Troubleshooting

**"Invalid login credentials"**
→ Double-check the email/password in Supabase Auth → Users

**Admin page redirects to login even after signing in**
→ Check that `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are correct in `.env.local`
→ Restart the dev server after changing `.env.local`

**"supabaseUrl is required"**
→ Your `.env.local` file is missing or not in the right folder (must be inside `desinaap/`, next to `package.json`)

**Tables don't appear in Supabase**
→ Make sure you ran the full contents of `supabase/schema.sql` in the SQL Editor

---

## File Reference

```
desinaap/
├── .env.local              ← put your Supabase keys here
├── middleware.ts            ← protects /admin routes
├── supabase/
│   ├── client.ts           ← browser Supabase client
│   ├── server.ts           ← server Supabase client
│   └── schema.sql          ← run this in Supabase SQL Editor
└── app/
    ├── admin/
    │   └── login/page.tsx  ← admin login page
    └── auth/
        ├── callback/       ← handles Supabase email links
        └── signout/        ← handles logout
```
