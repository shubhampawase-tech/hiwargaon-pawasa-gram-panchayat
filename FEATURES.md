# Feature implementation map

## Ready in demo mode
Responsive multilingual shell, accessibility controls, dark mode, PWA, citizen/admin demo sessions, service catalogue, application submission and tracking, complaint submission, bill list and demo payment, citizen dashboard, admin overview, application status update, schemes, notices, development works, emergency click-to-call, AI chat UI with voice output, certificate print/QR preview, GitHub Pages workflow, photo gallery grid, Government Leadership directory (real national/state office-holders, sourced and dated), Funding & Development dashboard with year selector and bar/line/pie charts (sample GPDP-shaped data), Latest News page (attempts a live public RSS feed in the browser, falls back to labeled sample data if offline or blocked).

## Activates after Supabase setup
Cloud authentication, profiles, citizen records, role-based access, all relational tables, RLS, private file uploads, public media, application documents/history, properties and annual bills, water connections/readings/bills, payment records/receipts/webhooks, complaints/attachments/history, Gram Sabha, public documents, galleries, notifications, audit logs, settings, translations, government_officials, funding_records and budgets tables.

## Activates after provider keys/onboarding
Razorpay UPI/cards/netbanking/wallet settlement, live weather, AI responses, email, SMS, WhatsApp, browser push, live news via a paid/production news API (NEWS_API_KEY), and Meri Panchayat / eGramSwaraj / GPDP funding import once the Panchayat's official LGD code is entered (PANCHAYAT_LGD_CODE). Provider approval and verified templates may be required.

## Images
Village, gallery and development-work photos use picsum.photos (real, freely hotlinkable stock photography) as clearly-generic placeholders — swap these for the Panchayat's own photos via the admin Gallery/Home manager. Government official avatars use generated initials (ui-avatars.com) rather than any real photo, in line with the "never use random or unverified photos" requirement; admins can upload the office-holder's official photo per person.
