# Swaroop A.S - Personal Portfolio 💻

A stunning, modern portfolio website featuring animated code background, glass morphism effects, and smooth transitions. Built with Gatsby, React 18, and Framer Motion.

**Live Site:** [https://swaroop325.web.app/](https://swaroop325.web.app/)

## ✨ Design Features

### Developer-Themed Aesthetics
- **Animated Code Background** - Matrix-style floating code snippets symbolizing developer identity
- **Glass Morphism Navigation** - Modern frosted glass effect with smooth scrolling
- **Gradient Accents** - Eye-catching cyan (#00d4ff) and green (#00ff88) gradients throughout
- **Smooth Animations** - Framer Motion powered transitions, hover effects, and scroll animations
- **Dark Theme** - Professional dark theme (#0a0a19) optimized for readability
- **Scroll Progress Indicator** - Gradient progress bar at the top

### Modern UI/UX
- **Hero Section** - Large, impactful introduction with floating emoji decorations
- **Card-Based Layouts** - Beautiful gradient-bordered cards for all content
- **Skill Bars** - Animated progress bars showing proficiency levels
- **Responsive Grid** - Mobile-first design with auto-fitting grids
- **Hover Interactions** - Subtle scale and lift effects on interactive elements
- **Smooth Scroll** - Section-based navigation with active state indicators

## Tech Stack

- **Framework:** Gatsby 5.13
- **UI Library:** React 18.2
- **Animation:** Framer Motion 11.0
- **Styling:** SCSS/Sass
- **Analytics:** Google Analytics 4 (via gatsby-plugin-google-gtag)
- **Hosting:** Firebase Hosting
- **CI/CD:** GitHub Actions

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/swaroop325/swaroop_portfolio.git
cd swaroop_portfolio
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Configure Google Analytics:
   - Open `gatsby-config.js`
   - Replace `G-XXXXXXXXXX` with your Google Analytics Measurement ID

4. Start the development server:
```bash
npm run develop
```

The site will be available at `http://localhost:8000`

### Building for Production

```bash
npm run build
```

The production build will be generated in the `public/` directory.

## Deployment

### GitHub Actions (Automated)

This project is configured with GitHub Actions for automatic deployment to Firebase Hosting:

1. **Set up Firebase Service Account:**
   - Go to Firebase Console → Project Settings → Service Accounts
   - Generate a new private key
   - In your GitHub repository, go to Settings → Secrets and Variables → Actions
   - Create a new secret named `FIREBASE_SERVICE_ACCOUNT_SWAROOP325`
   - Paste the entire JSON content of the service account key

2. **Deployment triggers:**
   - **Push to `master` branch:** Deploys to production
   - **Pull requests:** Creates preview deployments

### Manual Deployment

```bash
npm run build
firebase deploy
```

## Project Structure

```
swaroop_portfolio/
├── .github/
│   └── workflows/
│       └── firebase-deploy.yml    # GitHub Actions workflow
├── src/
│   ├── components/
│   │   ├── About.js              # About section with skills
│   │   ├── Certifications.js     # Certifications showcase
│   │   ├── Contact.js            # Contact links and social media
│   │   ├── Header.js             # Header with navigation
│   │   ├── Intro.js              # Introduction section
│   │   ├── Main.js               # Main container component
│   │   ├── Projects.js           # Projects showcase
│   │   ├── Work.js               # Work experience timeline
│   │   └── layout.js             # Layout wrapper
│   ├── images/                   # Image assets
│   ├── assets/
│   │   └── scss/                 # SCSS stylesheets
│   └── pages/
│       ├── index.js              # Home page
│       ├── page-2.js             # Secondary page
│       └── 404.js                # Error page
├── gatsby-config.js              # Gatsby configuration
├── firebase.json                 # Firebase hosting config
└── package.json                  # Dependencies and scripts
```

## Available Scripts

- `npm run develop` - Start development server
- `npm run build` - Build for production
- `npm run format` - Format code with Prettier

## Content Updates

All content is sourced from [LinkedIn profile](https://www.linkedin.com/in/swaroop-as) and includes:

- Current position at Activate Interactive, Singapore
- Previous experience at Infosys, Craftveda Technology, and GoFrugal Technologies
- 10+ professional certifications
- Projects including MyTutor (AWS AI Agent Hackathon)
- Research publications

## License

MIT License - See LICENSE file for details

## Contact

- **LinkedIn:** [linkedin.com/in/swaroop-as](https://www.linkedin.com/in/swaroop-as)
- **GitHub:** [github.com/swaroop325](https://github.com/swaroop325)
- **Email:** Contact via LinkedIn

---

Built with passion using modern web technologies.
