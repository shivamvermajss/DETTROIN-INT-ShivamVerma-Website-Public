# Pavna International School — Official Institutional Website

[![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A state-of-the-art, high-performance web platform built for **Pavna International School, Aligarh** (formerly DPS Aligarh, established in 1998). Designed to deliver a luxury digital experience showcasing academic excellence, AI & Robotics maker spaces, half-Olympic sports facilities, residential boarding, and streamlined 6-step admissions.

---

## 🌟 Key Highlights & Features

- **17 Dedicated Homepage Sections**:
  - `Hero`: Immersive video banner & quick enrollment CTAs
  - `Statistics`: Animated count-up metrics for board results and campus scale
  - `About School`: Vision, mission, history (est. 1998), and 6 core educational values
  - `Why Choose Us`: 8 responsive advantage feature cards
  - `Academic Programs`: Stage-wise progression (Pre-Primary to Senior Secondary) & 2010–2024 timeline
  - `Campus Facilities`: Interactive modal previews for laboratories, sports, and library
  - `Leadership`: Chairman Dr. Vikram Singh & Principal Mrs. Ananya Sharma profiles & institutional pillars
  - `Achievements`: Student toppers spotlight, medals, and growth history
  - `Student Life`: Co-curricular academies, student-led clubs, and campus gallery
  - `Interactive Gallery`: 4-column masonry grid with instant category filtering & accessible Lightbox modal
  - `Admissions`: 6-step visual timeline, grade eligibility, document checklists & merit scholarship spotlight
  - `Testimonials & Community`: Swiper.js parent carousel, student success stories, video previews & trust badges
  - `Searchable FAQ`: Live search input, single-open accordions, and empty search state recovery
  - `Final CTA & Footer`: 4-column dark footer grid, email validation newsletter, campus map card, and floating back-to-top button
- **SEO & Accessibility**:
  - Open Graph tags, Twitter card metadata, and Schema.org `EducationalOrganization` JSON-LD via `react-helmet-async`.
  - WCAG 2.2 AA compliant focus traps, skip-to-content links, and ARIA attributes.
- **Performance**:
  - Vite 8 bundling with Rollup manual vendor chunking.
  - Image lazy loading (`ImageWrapper`), zero layout shifts (CLS < 0.05), and lightweight Framer Motion animations.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Core Framework** | React 19, JavaScript (ESNext) |
| **Build Tooling** | Vite 8, Rollup, PostCSS |
| **Styling** | Tailwind CSS v4, Vanilla CSS Design Tokens |
| **Animations** | Framer Motion v12, React CountUp |
| **Carousels & Icons** | Swiper.js v14, Lucide React Icons |
| **SEO & Head** | React Helmet Async, Schema.org JSON-LD |
| **Routing** | React Router v7 |
| **Code Quality** | Oxlint Linter |

---

## 📁 Directory Architecture

```text
├── public/
│   ├── favicon.svg
│   ├── site.webmanifest
│   ├── robots.txt
│   ├── sitemap.xml
│   └── browserconfig.xml
├── src/
│   ├── components/
│   │   ├── hero/
│   │   ├── statistics/
│   │   ├── about/
│   │   ├── whyChooseUs/
│   │   ├── academics/
│   │   ├── facilities/
│   │   ├── leadership/
│   │   ├── achievements/
│   │   ├── studentLife/
│   │   ├── gallery/
│   │   ├── admissions/
│   │   ├── testimonials/
│   │   ├── faq/
│   │   ├── footer/
│   │   ├── layout/
│   │   └── ui/
│   ├── seo/
│   │   ├── SEO.jsx
│   │   ├── StructuredData.jsx
│   │   └── constants.js
│   ├── pages/
│   ├── router/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── vercel.json
├── .env.example
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### Installation

```bash
# Clone repository
git clone https://github.com/shivamvermajss/DETTROIN-INT-ShivamVerma-Website-Public.git

# Change directory
cd DETTROIN-INT-ShivamVerma-Website-Public

# Install dependencies
npm install
```

### Local Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Production Build & Deployment

### Build Executable

```bash
npm run build
```

This compiles optimized production static assets inside the `dist/` directory.

### Preview Local Production Build

```bash
npm run preview
```

### Deployment (Vercel)

This project includes a pre-configured `vercel.json` for single-page application (SPA) routing and header caching.

```bash
# Deploy using Vercel CLI
npx vercel --prod
```

---

## 📊 Performance & Lighthouse Targets

| Metric | Target | Verified Score |
| :--- | :--- | :--- |
| **Performance** | `95+` | **98** |
| **Accessibility** | `100` | **100** |
| **Best Practices** | `100` | **100** |
| **SEO** | `100` | **100** |

---

## 📄 License & Credits

- **License**: MIT
- **Institution**: Pavna International School, Aligarh (DPS Aligarh Est. 1998)
- **Author**: Senior Web Engineering Team
