# 🚦 Auto Escola Neon Cotia — Driver Education Portal

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Zustand](https://img.shields.io/badge/Zustand-5.0.3-black?style=for-the-badge)](https://github.com/pmndrs/zustand)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

A modern, high-performance web application engineered for **Auto Escola Neon Cotia**, one of Cotia's premier driver education and licensing centers. Built with **React 18**, **TypeScript**, and **Tailwind CSS**, this platform delivers a seamless, conversion-focused user journey for prospective drivers seeking CNH issuance (Categories A, B, D, E), license renewals, category additions, and driver rehabilitation programs.

---

## 🌟 Overview & Purpose

The **Auto Escola Neon** web portal bridges the gap between students and driving school operations. The project focuses on clarity, rapid lead acquisition, and customer trust by presenting licensing requirements, branch details, real-time Google Maps integration, customer testimonials, and direct WhatsApp lead dispatchers with pre-configured contextual inquiries.

### Key Objectives:
- **Lead Capture & Direct Dispatch**: Dynamic WhatsApp click-to-chat triggers tailored per license type (Moto, Carro, Ônibus, Carreta, Reabilitação).
- **Service Catalog Transparency**: Detailed breakdown of categories, medical/psychotechnical exam requirements, practical lessons, and timeline expectations.
- **Multibranch Navigation**: Interactive multi-location overview (Cotia Centro, Granja Viana, Caucaia do Alto) with operating hours and contact data.
- **Real-Time Verification & Trust**: Dedicated CNH status inquiry section, official accreditation details, and customer ratings.

---

## 🚀 Core Features

- 🏎️ **Category-Specific Funnels**: Dedicated service cards for Categories A (Motorcycle), B (Passenger Car), D (Bus & Van), and E (Articulated Truck / Semi-Trailer).
- 🔄 **Driver Regularization & Rehabilitation**: Clear step-by-step guidance for suspended/revoked driver licenses with specialized pedagogical support.
- 💬 **Context-Aware WhatsApp Inquiries**: Dynamic WhatsApp messaging schema that automatically fills in license category inquiry details for instant staff quoting.
- 📍 **Multi-Unit Geolocation & Maps**: Branch selector with address data, operational schedules, and integrated Google Maps route planning.
- ⚡ **Lightweight & Blazing Fast**: Built with Vite and Tailwind CSS for instant load times, responsive breakpoints, and smooth UI transitions.
- 🎨 **Adaptive Theme Support**: Integrated theme handling with Zustand for customizable aesthetic preferences.

---

## 🏗️ Architecture & Component Hierarchy

The codebase follows a modular component-driven architecture:

```
autoescolaneon/
├── public/                 # Static assets, logos, and icons
├── src/
│   ├── assets/             # Vector icons and graphics
│   ├── components/         # Reusable UI presentation & business blocks
│   │   ├── Benefits.tsx        # Value proposition grid (0 reproval fees, modern fleet)
│   │   ├── CNHStatus.tsx       # License process verification interface
│   │   ├── Footer.tsx          # Institutional links, copyright, contact details
│   │   ├── GoogleMaps.tsx      # Branch locator & interactive map embed
│   │   ├── Header.tsx          # Responsive navigation bar with mobile toggle
│   │   ├── Hero.tsx            # High-conversion hero section with primary CTA
│   │   ├── Infrastructure.tsx  # Fleet showcase & training grounds breakdown
│   │   ├── Reviews.tsx         # Social proof, Google review score (4.8★), badges
│   │   ├── Services.tsx        # Dynamic license category & add-on services grid
│   │   └── Testimonials.tsx    # Real student feedback & video testaments
│   ├── data/
│   │   └── index.ts        # Single source of truth for categories, branches, FAQs
│   ├── hooks/
│   │   └── useTheme.ts     # Theme state and responsive hooks
│   ├── lib/
│   │   └── utils.ts        # Tailwind class merging (clsx + tailwind-merge)
│   ├── pages/
│   │   └── Home.tsx        # Main composition orchestrator
│   ├── types/
│   │   └── index.ts        # Comprehensive TypeScript definitions
│   ├── App.tsx             # Root router configuration
│   ├── main.tsx            # Vite entrypoint
│   └── index.css           # Tailwind directives and custom animation styles
├── eslint.config.js        # Strict linting specifications
├── index.html              # SEO metadata, OpenGraph tags, font preloads
├── package.json            # Dependencies and npm automation scripts
├── tailwind.config.js      # Custom theme tokens, colors, and shadows
└── vite.config.ts          # Vite build optimizations & path alias resolution
```

---

## 🛠️ Tech Stack

| Domain | Technology | Description |
| :--- | :--- | :--- |
| **Core Framework** | [React 18.3](https://react.dev/) | Component-based UI engine with strict mode rendering |
| **Language** | [TypeScript 5.8](https://www.typescriptlang.org/) | End-to-end type safety for data models and component props |
| **Build & Bundler** | [Vite 6.3](https://vitejs.dev/) | Next-generation frontend tooling with lightning-fast HMR |
| **Styling** | [Tailwind CSS 3.4](https://tailwindcss.com/) | Utility-first CSS framework for rapid, responsive UI development |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, consistent SVG icon set for automotive and UI symbols |
| **State Management**| [Zustand 5.0](https://github.com/pmndrs/zustand) | Minimalist client-side store for application state |
| **Utilities** | `clsx` & `tailwind-merge` | Safe conditional class manipulation without style conflicts |

---

## 💻 Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **Package Manager**: `npm` or `pnpm`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/felipedutrag/autoescolaneon.git
   cd autoescolaneon
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Launch the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Production Build & Type Check:**
   ```bash
   # Type check
   npm run check

   # Build for production
   npm run build

   # Preview production bundle
   npm run preview
   ```

---

## 👨‍💻 Author

**Felipe Dutra**
- **GitHub**: [@felipedutrag](https://github.com/felipedutrag)
- **Email**: [felipedutra@outlook.com](mailto:felipedutra@outlook.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).