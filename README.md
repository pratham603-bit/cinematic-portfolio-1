# Cinematic Portfolio

A high-performance, immersive personal portfolio built with **Next.js 16**, **GSAP**, **Three.js**, and **CSS Modules**. This project features smooth cinematic transitions, 3D particle animations, and snap-scrolling to showcase developer talent in a visual, interactive format.

**GitHub:** [pratham603-bit/cinematic-portfolio-1](https://github.com/pratham603-bit/cinematic-portfolio-1)

---

## 🚀 The Tech Stack

| Layer | Technology |
| --- | --- |
| **Framework** | Next.js 16.2 (App Router, React Compiler) |
| **3D Engine** | Three.js (WebGL, Custom Shaders & Particles) |
| **Animations** | GSAP 3 (ScrollTrigger, Tween Engines, Timelines) |
| **Styling** | CSS Modules + Tailwind CSS v4 (Tokens & Utilities) |
| **Icons** | React Icons (`react-icons`) |
| **Fonts** | Geist, Baloo 2, Dancing Script (via `next/font`) |

---

## 📸 Core Features

- **Interactive 3D Environments**: Live WebGL particle systems (`HeroBackground`, `WorkExpParticles`, and `CinematicLayer`) that react to cursor movements and scroll indices.
- **Cinematic Snap-Scrolling**: Custom-built inertia-free scroll management using GSAP to slide smoothly through sections.
- **Preloader & Video Intro**: Immersive preloading loader (`ScreenLoader`) that transitions seamlessly into a full-screen background video (`VideoIntro`).
- **Data-Driven Architecture**: The entire website's content, work history, projects, stats, and socials are loaded directly from local JSON files for simple updates.

---

## 🛠️ Making It Yours

All personal configurations live in `data/profile.json`. Modify this file to personalize the portfolio:

| Key | Description |
| --- | --- |
| `name` | Your name details (first, last, full) |
| `email` | Contact email address used for CTA actions |
| `tagline` | Primary hero header summary |
| `description` | Short SEO and meta description |
| `roles` | Key tags (e.g., *Full-Stack Engineer*, *NLP Architect*) |
| `bio` | Main long-form description in the **About** section |
| `skills` | Array of text strings for the scrolling marquee |
| `experience` | Your academic and work history blocks |
| `projects` | Interactive cards containing titles, descriptions, links, and tags |
| `publications` | Medium/Blog posts or research articles |
| `socials` | Action links for GitHub, LinkedIn, etc. |

*General website copy (non-personal text) resides in `data/content.json`.*

### Assets (`public/assets/`)
To replace media files:
- `about-me.mp4`: The primary intro video.
- `hero.png`: The foreground portrait image for the Hero section.
- `about.webp`: Primary photo used in the About section (and fallback OG image).
- `work-experience.webp`: Background imagery for the Experience section.
- `footer-video.mp4`: Looping background video for the desktop footer.
- `project-*.png`: Visual mockups/thumbnails for each project listed in `profile.json`.

---

## ⚡ Getting Started

Run the development server locally:

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Build for Production:

```bash
# Build the Next.js bundle
npm run build

# Start the production server
npm run start
```

---

## 📖 Featured Content & Projects

### Projects
- **NexusNLP**: High-performance text analytics & sentiment orchestrator. Uses a FastAPI backend deployed serverless on AWS Lambda with a real-time dashboard.
- **CloudData Sync**: High-throughput MySQL to Firebase Realtime Database bridge. Built with a Node.js/Python core pipeline, optimized with a C++ parsing module for binary logs.

### Written Publications
- *Mastering Data Structures in C++: Algorithmic Efficiency for Modern Apps*
- *Deploying Serverless NLP Models on AWS: A Step-by-Step Guide*
- *Real-Time Sync Pipelines: Bridge MySQL with Firebase Realtime Database*

