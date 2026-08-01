# ग्रामपंचायत हिवरगाव पावसा

Production-oriented React + Supabase Citizen Service Portal. The app runs immediately in **demo mode** using browser storage. Real authentication, cloud CRUD, uploads, payments, webhooks, weather, AI, notifications and PDF storage activate after configuring external accounts and secrets.

## Included modules

Public website, three-language foundation, accessibility controls, PWA, citizen registration/login, citizen dashboard, service applications, uploads architecture, public tracking, property tax, water billing, Razorpay flow templates, complaints, Gram Sabha, schemes, farmer services, emergency contacts, village information, development tracker, transparency documents, notices/news/events, gallery, notifications, global search, role-based admin dashboard, certificate/QR verification, reports/export architecture, audit logs, complete relational schema, storage buckets and RLS.

## Local setup

```bash
npm install
cp .env.example .env
npm run dev
```

Demo buttons work without Supabase. Do not use demo mode for real citizen data.

## Supabase setup

1. Create a Supabase project.
2. Open SQL Editor and run `supabase/schema.sql`, then `supabase/storage.sql`.
3. Copy project URL and anon key to `.env`.
4. Install Supabase CLI and link the project.
5. Deploy functions:

```bash
supabase functions deploy ai-chat
supabase functions deploy create-razorpay-order
supabase functions deploy verify-razorpay-payment
supabase functions deploy razorpay-webhook
supabase functions deploy weather
supabase functions deploy certificate-verify
supabase functions deploy notify
```

6. Add server secrets with `supabase secrets set`. Never prefix secret keys with `VITE_`.
7. Create the first normal user, then change its `profiles.role` to `super_admin` directly in Supabase SQL Editor.

## Razorpay

Use test keys first. Configure the webhook URL as the deployed `razorpay-webhook` Edge Function. Enable payment events. Server verification is mandatory; the frontend result alone never marks a bill paid.

## GitHub Pages

1. Create a GitHub repository named `gram-panchayat-hiwargaon-pawasa`.
2. Add repository secrets: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, `VITE_RAZORPAY_KEY_ID`.
3. Push to `main`.
4. In Settings → Pages, select **GitHub Actions**.
5. The workflow builds and deploys automatically.

## Production checklist

Use a custom domain and HTTPS; verify official content; configure backups; sign DPAs with providers; complete legal/payment onboarding; validate Marathi/Hindi translations; configure SMS/WhatsApp templates; create real staff accounts; test RLS with every role; run security and accessibility testing; never store full Aadhaar; use only approved government data sources.

## Reality note

No downloaded ZIP can contain active OTP, real UPI settlement, live AI, weather, SMS, WhatsApp or official government feeds without valid provider accounts, keys, verified templates and Panchayat-authorized data. This repository includes the required code, schema and secure integration points; those services become live after configuration.
