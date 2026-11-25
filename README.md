# Indian Wedding Invitation Starter

A mobile-friendly Indian wedding invitation built with Next.js. It includes a royal maroon-and-gold theme, event schedule, live countdown, venue link, and WhatsApp RSVP. No paid domain or database is required.

## 1. Personalize the invitation

Open `lib/site.ts` and edit:
- Couple names and invitation text
- Wedding date and countdown date (`weddingDate` must be ISO 8601)
- Event names, dates, times and locations
- Venue name, address and Google Maps URL
- `whatsappNumber`: your WhatsApp number including country code, digits only (India example: `919876543210`)

Also update the page metadata in `app/layout.tsx`.

The RSVP form opens WhatsApp with a pre-filled message. Guests still need to press Send. This starter does not store RSVP information in a database.

## 2. Run locally

Install Node.js (LTS) from https://nodejs.org/ and Git from https://git-scm.com/.

In this project folder, run:

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser. Stop the server with Ctrl+C.

Test a production build before publishing:

```bash
npm run build
```

## 3. Deploy free on Vercel

1. Create a GitHub account: https://github.com/
2. Create a new repository, for example `indian-wedding-invitation`.
3. Upload/push the contents of this folder to the repository. Do not upload `node_modules` or `.next`.
4. Create/sign in to Vercel: https://vercel.com/
5. Choose **Add New → Project**, import your GitHub repository.
6. Keep the detected Next.js settings and click **Deploy**.
7. Vercel will provide a URL ending in `.vercel.app`. You can rename the project in Vercel project settings to get a nicer available subdomain.
8. Whenever you push changes to the connected GitHub branch, Vercel will deploy an update.

Vercel's Hobby plan is intended for personal, non-commercial use and has usage limits. Check the current plan terms before deployment.

## 4. Before sharing

- Replace all demo names, dates, venue details and WhatsApp number.
- Confirm the date/time timezone in `weddingDate`.
- Test the Maps link on a phone.
- Test RSVP and confirm the WhatsApp message is correct.
- Check the website on both iPhone and Android.
- Avoid putting private guest phone numbers or a public guest list on the website.
- Use photos you have permission to publish.

## Project structure

```text
indian-wedding-invitation/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── countdown.tsx
│   └── rsvp.tsx
├── lib/
│   └── site.ts
├── public/
├── next.config.ts
├── package.json
└── tsconfig.json
```
