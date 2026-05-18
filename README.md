# Portfolio Website

A modern, responsive, and fully interactive developer portfolio built with Next.js App Router, TailwindCSS, and Nodemailer.

This project serves as:

* A professional portfolio showcase
* A demonstration of modern frontend/backend architecture
* A functional contact and networking platform

---

# Features

## Modern UI/UX

* Responsive mobile-first design
* Dark/Light mode toggle with persistence
* Framer Motion animations and transitions
* Reusable component architecture

## Portfolio Showcase

* Dynamic project cards
* Technology stack display
* GitHub and live demo links
* Project filtering system

## About Section

* Developer biography
* Skills matrix
* Technical timeline

## Contact System

* Functional contact form
* API route handling with Next.js
* Email integration using Nodemailer
* Loading, success, and error states

---

# Tech Stack

## Frontend

* Next.js (App Router)
* React
* TailwindCSS
* Framer Motion

## Backend

* Next.js API Routes
* Nodemailer

## Deployment

* Vercel

---

# Folder Structure

```bash
app/
├─ about/
├─ contact/
├─ projects/
├─ api/
│  └─ contact/
│     └─ route.js

components/
├─ client/
├─ server/
└─ ui/

data/
lib/
public/
```

---

# Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/your-repository.git
```

Navigate into the project:

```bash
cd your-repository
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

# Environment Variables

Create a `.env.local` file in the root directory:

```env
EMAIL_USER=your_email
EMAIL_PASS=your_password
```

---

# Contact Form Setup

The contact form uses:

* Next.js API Routes
* Nodemailer
* SMTP email authentication

Messages are sent directly to the configured inbox.

---

# Accessibility & Performance

This project focuses on:

* Semantic HTML
* Responsive layouts
* Keyboard accessibility
* Optimized image handling
* Lighthouse performance standards

---

# Future Improvements

* Blog section
* Resume PDF generator
* CMS integration
* Advanced animations
* Database integration

---

# Live Demo

Add your deployed Vercel link here.

---

# Author

Karam Abbas

GitHub:
https://github.com/Karam-08
