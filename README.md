# Design Vision Constructions & Interiors

A production-ready, multi-page interior design website built with Next.js 14, React, and Tailwind CSS.

## Features

- **Premium Design**: Elegant, minimal, luxury interior design aesthetic
- **Responsive**: Mobile-first approach for all device sizes
- **SEO Optimized**: Metadata, Open Graph tags, semantic HTML, breadcrumbs
- **Performance**: Static Site Generation (SSG) for fast loading
- **Forms**: Contact and Quote forms with validation
- **Components**: Reusable, modular component architecture

## Tech Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- TypeScript
- Lucide React (Icons)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
```bash
cd design-vision
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog listing and posts
│   ├── contact/           # Contact page
│   ├── faq/               # FAQ page
│   ├── portfolio/         # Portfolio listing and details
│   ├── quote/             # Request a Quote page
│   ├── services/          # Services listing and child pages
│   ├── testimonials/      # Testimonials page
│   ├── terms/             # Terms & Conditions
│   ├── privacy/           # Privacy Policy
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── common/            # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── SectionWrapper.tsx
│   │   ├── Breadcrumbs.tsx
│   │   ├── Accordion.tsx
│   │   └── Carousel.tsx
│   ├── layout/            # Layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/          # Page section components
│       ├── Hero.tsx
│       ├── ServicesGrid.tsx
│       ├── PortfolioPreview.tsx
│       ├── AboutPreview.tsx
│       ├── Testimonials.tsx
│       ├── TrustBadges.tsx
│       ├── ContactForm.tsx
│       └── QuoteForm.tsx
├── lib/
│   ├── constants.ts       # Site-wide constants
│   ├── utils.ts           # Utility functions
│   └── data/              # Mock data for SSG
│       ├── services.ts
│       ├── projects.ts
│       └── blog.ts
└── public/                # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Pages

1. **Home** (`/`) - Hero, services overview, portfolio preview, about, testimonials
2. **About** (`/about`) - Company story, values, team
3. **Services** (`/services`) - Overview of all services
4. **Service Details** (`/services/[slug]`) - Individual service pages
5. **Portfolio** (`/portfolio`) - Project gallery
6. **Portfolio Detail** (`/portfolio/[slug]`) - Individual project pages
7. **Blog** (`/blog`) - Articles listing
8. **Blog Post** (`/blog/[slug]`) - Individual articles
9. **Testimonials** (`/testimonials`) - Client reviews
10. **FAQ** (`/faq`) - Common questions
11. **Contact** (`/contact`) - Contact form and information
12. **Request Quote** (`/quote`) - Quote request form
13. **Terms** (`/terms`) - Terms & Conditions
14. **Privacy** (`/privacy`) - Privacy Policy

## Design System

### Colors
- Primary: `#C5A47E` (Muted Gold)
- Neutral: `#1A1A1A` (Charcoal) to `#FAFAFA` (Off-white)

### Typography
- Headings: Playfair Display (Serif)
- Body: Inter (Sans-serif)

### Components
All components use Tailwind CSS with custom classes defined in `globals.css`.

## Deployment

The site is optimized for deployment on Vercel or any Next.js-compatible hosting platform.

```bash
npm run build
```

This will create a `.next` directory with the production build.

## License

© 2024 Design Vision Constructions & Interiors. All rights reserved.
