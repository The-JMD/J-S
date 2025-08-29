# J & S FIRM platform
Of course. Here is a comprehensive `README.md` file for your project. It explains the project's purpose, the technology stack, the folder structure, and provides clear, step-by-step instructions on how to set it up and run it correctly, addressing the issues you were facing.

You can copy and paste the following content directly into your `README.md` file.

---

# J & S FIRM - Corporate Landing Page

![J&S FIRM Logo](./public/js-firm-logo.png)

Welcome to the official repository for the J & S FIRM corporate website. This is a modern, fully-responsive, single-page landing site designed to showcase the company's HR consulting and business solutions. Built with Next.js and styled with Tailwind CSS, it features a sleek glassmorphism design, fluid animations powered by Framer Motion, and a professional aesthetic.

**[Live Demo Link](https://your-deployment-url.com)** &mdash; *(Replace with your actual deployment URL)*

## Table of Contents

- [About The Project](#about-the-project)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation & Setup](#installation--setup)
- [Available Scripts](#available-scripts)
- [API Endpoints](#api-endpoints)
- [Styling and Theming](#styling-and-theming)
- [Deployment](#deployment)

## About The Project

This project serves as the digital storefront for J & S FIRM, an HR consulting company dedicated to shaping the future of work. The goal was to create a visually stunning and performant web experience that reflects the firm's innovative and client-centric approach. The site is designed with a "2026 UX" feel, incorporating modern design trends like glassmorphism, parallax scrolling, and subtle micro-interactions to engage users.

## Key Features

-   **Stunning Visuals**: Elegant and professional design with a teal-based color palette derived from the company logo.
-   **Glassmorphism UI**: A modern "frosted glass" effect is used throughout the UI for cards, inputs, and navigation.
-   **Fluid Animations**: Smooth page transitions, scroll-based animations, and interactive hover effects powered by Framer Motion.
-   **Fully Responsive**: A seamless experience across all devices, from mobile phones to desktop monitors.
-   **Single-Page Architecture**: All essential information is accessible on a single, smoothly scrolling page.
-   **Interactive Sections**: Includes a Hero section with a typewriter effect, About, Services, Approach, Impact (with animated counters), and a functional Contact section.
-   **API-Powered Contact Form**: A client-side form that sends submission data to a Next.js API route for processing.
-   **Optimized Performance**: Built with Next.js for fast page loads, server-side rendering, and a great user experience.

## Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/) 15 (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) 4 with PostCSS
-   **Animation**: [Framer Motion](https://www.framer.com/motion/)
-   **UI Components**: [Shadcn/UI](https://ui.shadcn.com/) (using Radix UI primitives)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
-   **Package Manager**: [pnpm](https://pnpm.io/)

## Project Structure

The project follows a standard Next.js App Router structure:

```
.
├── api/                # API routes
│   └── contact/
│       └── route.ts    # Endpoint for the contact form
├── app/                # Main application folder (App Router)
│   ├── globals.css     # Global styles and custom CSS variables
│   ├── layout.tsx      # Root layout for the application
│   └── page.tsx        # The main entry point/page for the root URL
├── components/         # Reusable React components
│   ├── ui/             # UI primitives (Button, Input, etc.) from Shadcn/UI
│   ├── about-section.tsx
│   ├── hero-section.tsx
│   └── ... (other section components)
├── lib/                # Utility functions
│   └── utils.ts        # Helper functions (e.g., cn for classnames)
├── public/             # Static assets (images, logos, fonts)
├── package.json        # Project dependencies and scripts
├── pnpm-lock.yaml      # pnpm lockfile for deterministic installs
└── ...                 # Configuration files (Next.js, Tailwind, etc.)
```

## Getting Started

Follow these instructions to get a local copy of the project up and running for development and testing purposes.

### Prerequisites

You will need the following software installed on your machine:
-   [Node.js](https://nodejs.org/) (v20.x or higher is recommended)
-   [pnpm](https://pnpm.io/installation) (This project uses `pnpm` as its package manager)

**Important**: This project uses `pnpm` and includes a `pnpm-lock.yaml` file. You **must** use `pnpm` to install dependencies to avoid conflicts and ensure the `node_modules` structure is correct. If you try to use `npm install` or `yarn install`, the scripts may fail.

If you don't have `pnpm` installed, you can install it globally via `npm`:
```bash
npm install -g pnpm
```

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/The-JMD/J-S.git
    cd J-S
    ```

2.  **Install dependencies using pnpm:**
    ```bash
    pnpm install
    ```
    This command will read the `pnpm-lock.yaml` file and install the exact versions of the dependencies the project was built with.

3.  **Run the development server:**
    ```bash
    pnpm run dev
    ```

4.  **Open the application:**
    Open your browser and navigate to [http://localhost:3000](http://localhost:3000). You should see the website running.

## Available Scripts

In the project directory, you can run the following commands:

-   `pnpm run dev`: Starts the development server with hot-reloading.
-   `pnpm run build`: Builds the application for production.
-   `pnpm run start`: Starts the production server (requires a build first).
-   `pnpm run lint`: Runs the Next.js linter to check for code quality issues.

## API Endpoints

### Contact Form

-   **Endpoint**: `POST /api/contact`
-   **Description**: Handles submissions from the contact form.
-   **Payload (Body)**: The endpoint expects a JSON object with the following structure:
    ```json
    {
      "name": "string",
      "email": "string",
      "company": "string (optional)",
      "message": "string"
    }
    ```
-   **Note**: In its current state, this endpoint only logs the form data to the server console. For a production environment, you would integrate an email service like Resend, SendGrid, or Nodemailer here.

## Styling and Theming

The project uses a highly customized theme built on top of Tailwind CSS.

-   **Global Styles**: All custom styles, animations, and CSS variables are defined in `app/globals.css`.
-   **Theming**: The site uses CSS variables for colors, allowing for easy theming (light/dark mode). The color palette is based on the teal brand colors from the J & S FIRM logo.
-   **Glassmorphism**: Custom utility classes `.glass` and `.glass-strong` are available to apply the frosted glass effect to any element.
-   **Animations**: Custom keyframe animations like `float` and `glow` are defined globally and can be applied using `animate-float` and `animate-glow` classes.

## Deployment

The easiest way to deploy this Next.js application is with [Vercel](https://vercel.com/), the creators of Next.js.

1.  Push your code to a Git repository (e.g., GitHub, GitLab).
2.  Sign up for a free account on Vercel and connect your Git account.
3.  Import the project repository into Vercel.
4.  Vercel will automatically detect that it's a Next.js project, configure the build settings, and deploy it.

The project should deploy without any additional configuration. For a production-ready contact form, you would need to add environment variables for your email service provider in the Vercel project settings.
