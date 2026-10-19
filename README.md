# Beniting's Portfolio

A personal portfolio showcasing my work and experience as a full-stack developer. The site brings together selected projects, technical skills, qualifications, certifications, and ways to get in touch.

## Highlights

- Responsive portfolio with About, Projects, Qualifications, Certifications, and Contact sections
- Interactive project details and links to live projects
- Animated page content and a light/dark theme toggle that remembers your preference
- Downloadable resume
- Contact form powered by EmailJS

## Built with

- React 19
- Vite
- Bootstrap
- Framer Motion
- React Icons
- React Typed
- EmailJS

## Run locally

### Requirements

- Node.js (LTS recommended)
- npm

### Setup

```bash
git clone https://github.com/Beniting/Personal-Portfolio.git
cd Personal-Portfolio
npm install
npm run dev
```

Open the local URL printed by Vite in your terminal.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

To build and preview the site:

```bash
npm run build
npm run preview
```

## Project structure

```text
public/              Static files, including the resume and profile images
src/
  components/        Portfolio sections and navigation
  App.jsx            Page composition and theme state
  App.css            Portfolio styles
  main.jsx           Application entry point
index.html           Vite HTML entry point
```

## Updating portfolio content

- Update the project list in `src/components/Projects.jsx`.
- Edit the About section and skills in `src/components/About.jsx`.
- Update qualifications and certifications in their respective files under `src/components/`.
- Replace the resume at `public/resume.pdf` to update the downloadable PDF.
- The contact form uses EmailJS; check `src/components/Contact.jsx` when changing its integration.

## Deployment

Build the site with `npm run build` and publish the generated `dist/` directory to a static hosting provider that supports Vite builds.
