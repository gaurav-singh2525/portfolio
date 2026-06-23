# Gaurav Singh — Portfolio

A premium glassmorphism portfolio for Gaurav Singh — 3rd-year IIT Jodhpur student and aspiring SDE focused on backend systems and systems programming.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** JavaScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles & Tailwind
│   ├── layout.js            # Root layout, fonts, SEO metadata
│   └── page.js              # Main landing page
├── components/
│   ├── sections/            # Page sections (Hero, About, Projects, etc.)
│   └── ui/                  # Reusable UI components
├── lib/
│   ├── data.js              # Site content & configuration
│   └── utils.js             # Utility functions
├── public/
│   ├── favicon.svg
│   └── resume.pdf           # Add your resume here
└── tailwind.config.js
```

## Customization

Edit `lib/data.js` to update:

- Personal info, email, and social links
- Projects and tech stack
- Achievements and timeline
- Navigation links

Place your resume PDF at `public/resume.pdf` for the download button to work.

## Deploy to Vercel

1. Push the repository to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **Add New Project** → Import your repository
4. Vercel auto-detects Next.js — no extra config needed
5. Click **Deploy**

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## License

Private — All rights reserved.
