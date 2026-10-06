<div align="center">

# 🎓 Mentora

### *The first platform giving every student a real chance at admission.*

**A mentorship & admission-guidance platform that connects students with verified university seniors,
alumni networks, community Q&A, admission news and achievement stories — all in one place.**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Auth_%26_DB-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![Express](https://img.shields.io/badge/Express-5-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Node.js](https://img.shields.io/badge/Node.js-20-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

[**Overview**](#-overview) •
[**Features**](#-features) •
[**Tech Stack**](#-tech-stack) •
[**Getting Started**](#-getting-started) •
[**Environment Variables**](#-environment-variables) •
[**Database**](#-database-schema) •
[**Roadmap**](#-roadmap)

</div>

---

## 📖 Overview

**Mentora** exists for one reason: *admission guidance should not depend on who you already know.*

Students preparing for university admission are usually left guessing — which university, which
department, which subject combination, what score is "enough". Mentora closes that gap by putting
**verified current university students and alumni** one click away, backed by a community Q&A board,
a live admission-news feed, and a wall of real achievements that prove what's possible.

The product is a **two-app monorepo**:

| | App | Role |
|---|---|---|
| 🎨 | `Front_end/` | React SPA — the entire user-facing product (marketing, community, profiles, onboarding) |
| ⚙️ | `Back_end/` | Express API — sessions, auth guards, OTP email delivery, static uploads, Rollbar monitoring |

Today the SPA talks to **Supabase** (Postgres + Google OAuth) directly for auth, onboarding and
profiles, while the Express service powers the server-side concerns (mail, sessions, uploads,
error reporting).

---

## ✨ Features

### 🏠 Home — a storybook landing experience
- Typewriter hero: *"Welcome to Mentora!"* with hand-drawn SVG highlights and floating science doodles
- "What Mentora gives you" — 5 alternating feature rows animated on scroll
- Hanging-card **News** and timeline **Achievements** teasers
- Hub-and-spoke **mentor connect** diagram with SVG lines that draw themselves in
- **Top Mentors** grid with hover-to-connect cards

### ❓ FAQs — community question board
- Notebook-styled "Ask · Learn · Decide" composer
- 9 category pills (`Admission`, `Scholarship`, `Hostel`, `Department`…) with instant client-side filtering
- Threaded, recursively nested answer threads with mentor badges and vote controls

### 📰 News — admission circulars & deadlines
- Pin-and-paper card grid with expand/collapse animation
- Category filters: `Admission`, `University`, `Scholarship`, `Academic`, `Circular`, `Exam Result`

### 🎓 Alumni — "Find your Alumni"
- Polaroid-style profile cards with tape, initials avatars and year badges
- Network diagram hero whose connection lines are measured and animated at runtime
- Search + filter by **University / School / College / Area**

### 🏆 Achievements — celebrate the wins
- Full-screen "your story matters" hero with a taped photo wall
- University → Department **cascading filters**
- Expanding achievement cards with tape, folded corners and images

### 👤 Auth, Onboarding & Profile — powered by Supabase
- **Google-only sign-in** via Supabase OAuth, with a live session listener
- **Guided 2-step onboarding** (`Welcome to Mentora ✈️`) with an animated progress path:
  - *Role selection* → **Candidate** (school, college, class level, group, HSC year) or
    **Mentor** (university, department, admission year, current year)
- **Typeahead institution picker** — debounced fuzzy search across schools/colleges/universities and
  departments, with a *"+ Add … (pending admin review)"* crowd-sourcing option
- **ID-card style profile** with role chip, stats, dotted-leader detail rows and social links
- Smart redirect: users missing their role-specific record are routed straight to `/onboarding`

---

## 🛠️ Tech Stack

**Frontend**

| Layer | Choice |
|---|---|
| Framework | React 18 + JSX |
| Build tool | Vite 7 |
| Routing | React Router v7 (`createBrowserRouter`) |
| Styling | Tailwind CSS v4 (Vite plugin) + custom design tokens in `App.css` |
| Animation | Framer Motion (`whileInView`, `AnimatePresence`) + hand-written CSS keyframes & IntersectionObserver hooks |
| Typography | Google Fonts — *Caveat*, *Patrick Hand*, *Gloria Hallelujah*, *Dosis* & friends (notebook/hand-drawn look) |
| Icons | lucide-react |
| Backend client | `@supabase/supabase-js` |

**Backend**

| Layer | Choice |
|---|---|
| Runtime | Node.js + Express 5 |
| Sessions | `express-session` + `express-mysql-session` |
| Auth guards | `requireAuth` / `requireAdmin` middlewares, Passport + `passport-google-oauth20` |
| Database driver | `mysql2` (+ `ioredis` for caching/sessions) |
| Email | Nodemailer (Gmail app password) → styled HTML OTP mails |
| Uploads | Multer, served from `/uploads` |
| Security | Helmet, CORS allow-list, `express-validator` |
| Monitoring | Rollbar error reporting |

**Services** — Supabase (Postgres, Auth, RLS-ready), Google OAuth, Rollbar

---

## 📁 Project Structure

```
Mentora/
├── Front_end/                     # React SPA
│   ├── public/                    # static images (mentors, achievements, FAQ art)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home/              # Hero, Intro, News, Achievements, MentorConnect, TopMentors
│   │   │   ├── FAQs/              # header, composer, question cards, answer threads
│   │   │   ├── News/              # header, grid, expandable cards
│   │   │   ├── Alumni/            # header diagram, grid, polaroid cards, filters
│   │   │   ├── Achievements/      # header, cascading filters, cards
│   │   │   ├── Onboarding/        # wizard, progress path, role/details steps
│   │   │   ├── Profile/           # ID-card header, stats, details
│   │   │   ├── Nav/               # sticky nav + auth actions
│   │   │   ├── common/            # Sticker, InstitutionSelect, CategoryFilter
│   │   │   └── ui/                # shared primitives
│   │   ├── context/AuthContext.jsx  # session, profile, onboarding gate
│   │   ├── lib/supabaseClient.js    # env-driven Supabase client
│   │   ├── App.jsx                  # layout + onboarding redirect
│   │   └── main.jsx                 # router table
│   ├── .env.example
│   └── .gitignore
│
├── Back_end/                      # Express API
│   ├── router/  controller/  model/  DataBase/   # ⏳ in progress
│   ├── services/email.js          # OTP mail templates
│   ├── main.js                    # app bootstrap (port 5007)
│   ├── requireAuth.js  requireAdmin.js
│   ├── rollbar.js  test_rollbar.js
│   ├── uploads/                   # user uploads (git-ignored)
│   └── .env.example
│
├── .gitignore                     # secrets, node_modules, logs, build output
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js 18+** (20 LTS recommended) and npm
- A free **[Supabase](https://supabase.com)** project
- A **Google Cloud OAuth client** (for Google sign-in)
- *(Backend only)* MySQL database + a Gmail app password

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/Mentora.git
cd Mentora
```

### 2. Run the frontend

```bash
cd Front_end
npm install
cp .env.example .env      # then fill in your Supabase values
npm run dev               # → http://localhost:5173
```

Other scripts: `npm run build` · `npm run preview` · `npm run lint`

### 3. Run the backend

```bash
cd Back_end
npm install
cp .env.example .env      # then fill in your values
npm start                 # → http://localhost:5007 (nodemon)
```

### 4. Configure Supabase

1. Create a project, then copy the **Project URL** and **anon key** into `Front_end/.env`.
2. In **Authentication → Providers → Google**, paste your Google client ID/secret and set the
   redirect URL to your Supabase auth callback (e.g. `https://<project-ref>.supabase.co/auth/v1/callback`).
3. Create the tables listed in [Database Schema](#-database-schema) and enable RLS policies
   that let authenticated users read/write their own rows.

### 5. Security note 🔐

All secrets live in `.env` files that are **git-ignored**. Never commit
`.env`, `client_secret*.json` or `*apps.googleusercontent.com.json`.
Use the `.env.example` templates as your reference.

---

## 🔐 Environment Variables

### `Front_end/.env`

| Key | Description |
|---|---|
| `VITE_SUPABASE_URL` | Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Supabase public anon key (safe for the browser) |

### `Back_end/.env`

| Key | Description |
|---|---|
| `ROLLBAR_ACCESS_TOKEN` | Rollbar client access token |
| `ROLLBAR_ENVIRONMENT` | e.g. `production` |
| `DATABASE_PASSWORD` | MySQL password |
| `CORS_ORIGINS` | Comma-separated allowed origins |
| `CORS_METHODS` | Allowed HTTP methods |
| `CORS_CREDENTIALS` | `true` to allow cookies |
| `SESSION_SECRET` | Signing secret for express-session |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret |
| `GOOGLE_CALLBACK_URL` | OAuth callback, e.g. `http://localhost:5007/auth/google/callback` |
| `FRONTEND_URL` | Frontend origin for redirects |
| `EMAIL_USER` | Gmail address used to send OTPs |
| `EMAIL_PASS` | Gmail **app password** |

---

## 🗄️ Database Schema

Tables consumed by the application today:

| Table | Purpose | Key columns |
|---|---|---|
| `profiles` | One row per user | `id`, `role` (`candidate` / `mentor` / `admin`), `full_name`, `username`, `bio`, `profile_image_url`, `mentor_points`, `facebook_url`, `linkedin_url`, `instagram_url`, `whatsapp_number`, `created_at` |
| `candidate_profiles` | Student-side details | `user_id`, `school_id`, `college_id`, `class_level`, `group_name`, `hsc_year` |
| `mentor_profiles` | Mentor-side details | `user_id`, `university_id`, `department_id`, `admission_year`, `current_year`, `verification_status` |
| `institutions` | Crowd-sourced directory | `id`, `name`, `type` (`school` / `college` / `university`), `status`, `submitted_by` |
| `departments` | University departments | `id`, `name`, `university_id`, `status`, `submitted_by` |

**Auth flow**

```
Google button  →  supabase.auth.signInWithOAuth({ provider: 'google' })
              →  onAuthStateChange sets session
              →  profiles row fetched
              →  role row missing?  →  forced redirect to /onboarding
              →  otherwise          →  /profile (ID-card view)
```

---

## 🗺️ Roadmap

**✅ Done**
- Full design system: notebook/hand-drawn UI across 7 routes
- Google OAuth + session handling via Supabase
- Role-aware onboarding wizard with typeahead institution directory
- Profile view resolving institutions & departments
- Express skeleton with CORS, security headers, session/auth guards, OTP email templates, uploads, Rollbar

**🚧 In progress**
- `Back_end` routers, controllers, models and DB layer
- Wiring the static content (news, FAQs, alumni, achievements, mentors) to the database

**🔮 Planned**
- Mentor verification workflow + admin dashboard
- Working ask/answer, voting and achievement-submission forms
- Real-time notifications and search
- Deployment (Vercel + Render/Railway)

> **Note:** Home, FAQs, News, Alumni and Achievements currently render a curated demo dataset so the
> UI can be reviewed end-to-end; Auth, Onboarding and Profile are fully wired to Supabase.

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

```bash
git checkout -b feature/amazing-feature
npm run lint          # from Front_end/
git commit -m "feat: add amazing feature"
git push origin feature/amazing-feature
```

Please open a PR describing your changes and keep secrets out of the diff.

---

## 📜 License

All rights reserved — © `Mentora`. Contact the maintainer for licensing questions.

---

<div align="center">

**Built with ❤️ for students who deserve a real chance.**

⭐ *If Mentora inspired you, give the repo a star!* ⭐

</div>
