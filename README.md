# CV Creator

A modern web and PDF CV generator built with React, TypeScript, and Vite.

## Features
- **1-page and 2-page CV layouts** (toggle between them)
- **Customizable data** for personal info, skills, experience, education, volunteering, and references
- **PDF export** with layouts matching the web view
- **Responsive design** for web
- **Modern, clean UI** with color accents

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:5174](http://localhost:5174) in your browser.

### Build for Production
```bash
npm run build
```

### Linting
```bash
npm run lint
```

## Project Structure
- `src/data/1-page-cv.ts` — Condensed 1-page CV data
- `src/data/2-page-cv.ts` — Detailed 2-page CV data
- `src/components/layouts/` — Layout components for each CV version
- `src/components/generators/PdfGenerator.tsx` — PDF export logic
- `src/styles/web.css` — Web styles

## Customization
- Edit the data files in `src/data/` to update your CV content.
- Adjust styles in `src/styles/web.css` or PDF styles in `PdfGenerator.tsx`.

## License
MIT

---

> Project by [UnoRing](https://github.com/UnoRing/cv-creator) 