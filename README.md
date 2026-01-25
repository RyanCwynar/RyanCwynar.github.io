# RyanCwynar.github.io

Personal landing page and website upgrade service.

**Live:** https://ryancwynar.github.io

## What This Is

A lead generation site for website redesign services. Local businesses with outdated websites can submit their URL and receive a free, fully-working replacement site within 48 hours.

## How It Works

1. Business owner submits their website URL via the form
2. Site is scraped for content and images
3. A new Next.js site is generated with modern design
4. They receive an email with before/after screenshots and a link to their new site
5. If they like it, they pay $200 and we connect their domain

## Tech Stack

- **Frontend:** Next.js 15 + TypeScript + Tailwind CSS
- **Hosting:** GitHub Pages (static export)
- **Backend:** Convex (form submissions, prospect tracking)
- **Payments:** Stripe ($200 one-time)
- **Email:** Custom templates with before/after screenshots

## Project Structure

```
/
├── app/
│   ├── page.tsx          # Main landing page with form
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Tailwind styles
├── public/
│   ├── email-previews/   # Email template previews
│   └── screenshots/      # Before/after images for emails
└── next.config.ts        # Static export config
```

## Related Repos

Individual client sites are deployed as separate repos:
- [walton-dental](https://github.com/RyanCwynar/walton-dental)
- [mockup-moossy-dental](https://github.com/RyanCwynar/mockup-moossy-dental)

## Rate Limits

- 15 submissions per day
- One submission per domain (no duplicates)

## Contact

- Email: ryan@byldr.co
- Website: https://byldr.co
