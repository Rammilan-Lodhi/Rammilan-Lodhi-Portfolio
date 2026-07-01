# Rammilan Lodhi — Portfolio Website

Modern, premium full-stack portfolio built with React + Node.js.

## 🚀 Live Demo

- **Portfolio:** https://rammilan-lodhi-portfolio.vercel.app
- **Backend API:** https://personal-portfolio-website-7wsx.onrender.com

---

## Tech Stack

| Layer      | Tech                                     |
| ---------- | ---------------------------------------- |
| Frontend   | React, Vite, Tailwind CSS, Framer Motion |
| Backend    | Node.js, Express.js                      |
| Database   | MongoDB (Mongoose) with fallback data    |
| Animation  | Framer Motion, react-type-animation      |
| UI         | Tailwind CSS, React Icons, Glassmorphism |
| Notify     | React Hot Toast                          |
| Deployment | Vercel (frontend), Render (backend)      |

---

## API Endpoints

| Method | Endpoint                       | Description          |
| ------ | ------------------------------ | -------------------- |
| GET    | `/api/health`                  | Health check         |
| GET    | `/api/profile`                 | Profile info         |
| GET    | `/api/profile/skills`          | Skills list          |
| GET    | `/api/profile/experience`      | Work experience      |
| GET    | `/api/profile/achievements`    | Achievements         |
| GET    | `/api/projects`                | All projects         |
| GET    | `/api/projects/:id`            | Single project       |
| POST   | `/api/contact`                 | Send contact message |
| GET    | `/api/resume`                  | Resume info          |
| GET    | `/api/resume/download`         | Download resume PDF  |
| GET    | `/api/certificates`            | All certificates     |
| GET    | `/api/certificates/file/:name` | Serve certificate    |

---

## Deployment

### Frontend → Vercel

1. Push `frontend/` folder to a GitHub repo
2. Import in [vercel.com](https://vercel.com)
3. Set env var: `VITE_BACKEND_URL=https://your-backend.onrender.com`

### Backend → Render

1. Push `backend/` folder to a GitHub repo
2. Create Web Service in [render.com](https://render.com)
3. Build: `npm install` | Start: `npm start`
4. Set env vars: `MONGO_URI`, `JWT_SECRET`, `CONTACT_EMAIL`, `GMAIL_PASS`

---

## Customization

All personal content is in ONE file:

```
frontend/src/config/siteConfig.js
```

Edit your name, roles, education, projects, skills, social links, and coding profiles here. No component files need to be touched.

---

## Features

- Dark / Light mode toggle
- Loading screen animation
- Typing animation for roles (Framer Motion + TypeAnimation)
- Floating glassmorphism cards with blur backgrounds
- Project modal with image gallery / slider
- Certificate preview (PDF + image) and download
- Animated stat counters (scroll-triggered)
- GitHub contribution graph + streak stats
- Working contact form with validation and toast notifications
- Resume download via frontend + backend API
- Scroll-to-top button
- Rate limiting on API (100 req/15min)
- Fallback data when MongoDB is not connected
- SEO: meta tags, robots.txt, sitemap.xml
- Fully responsive (mobile, tablet, desktop)
