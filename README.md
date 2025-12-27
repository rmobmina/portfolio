# Professional Portfolio Website

A modern, visually striking portfolio website built with React, Vite, and Tailwind CSS. Features sophisticated animations, dark mode, contact form with validation, and recruiter-optimized layout for maximum impact.

## ✨ Key Features

### Core Features
- **Animated Hero Section** - Word-by-word text reveal with highlighted key phrases
- **🌓 Dark Mode Toggle** - Smooth theme switching with animated toggle button
- **📊 Recruiter Quick Summary** - Sticky summary bar with key stats for fast scanning
- **📬 Contact Form** - Full validation with real-time error feedback
- **Scroll-Triggered Animations** - Smooth fade-in effects using Intersection Observer
- **Interactive Project Cards** - Hover effects with elevation and glow accents
- **Timeline Experience Section** - Clean, professional layout for work history
- **Categorized Skills Display** - Pill-style tags organized by technology category
- **Subtle Background Motion** - Floating gradient shapes for visual depth
- **Animated Dividers** - Elegant section separators with reveal animations
- **Social Media Integration** - GitHub and LinkedIn with hover animations
- **Fully Responsive** - Optimized for all device sizes

### Recruiter-Optimized
- Sticky quick summary bar with essential information
- 6-8 second scan pattern optimization
- Clear visual hierarchy
- Easy-to-find contact information
- Download resume with one click

## Tech Stack

- **React 18** - Modern UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library
- **Lucide React** - Beautiful, consistent icon set

## Color Palette

```css
Cotton Rose: #ebbab9  /* Emphasis and accents */
Dust Grey:   #c9c5ba  /* Neutral backgrounds */
Muted Teal:  #97b1a6  /* Secondary accents */
Air Force:   #698996  /* Hover states */
Stormy Teal: #407076  /* Primary headers and CTAs */
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone or download this project**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Customization Guide

### 1. Personal Information

#### Hero Section (`src/components/Hero.jsx`)

Update your name and identity:
```javascript
const nameWords = "Your Full Name".split(" ");
```

Update social media links (lines 147-168):
```javascript
<a href="https://github.com/yourusername" ...>
<a href="https://linkedin.com/in/yourusername" ...>
```

#### Footer (`src/components/Footer.jsx`)

Update social links (lines 31-57):
```javascript
<a href="https://github.com/yourusername" ...>
<a href="https://linkedin.com/in/yourusername" ...>
<a href="mailto:your.email@example.com" ...>
```

### 2. About Section (`src/components/About.jsx`)

Modify the about text (lines 39-63) to reflect your own background and interests.

### 3. Projects (`src/components/Projects.jsx`)

Update the `projects` array (lines 6-39) with your own projects:

```javascript
const projects = [
  {
    title: "Project Name",
    description: "Brief description of what this project does",
    tech: ["React", "Node.js", "MongoDB"], // Tech stack
    github: "https://github.com/yourusername/project-name",
    demo: "https://project-demo.com", // or null if no demo
  },
  // Add more projects...
];
```

### 4. Experience (`src/components/Experience.jsx`)

Update the `experiences` array (lines 6-42) with your work history:

```javascript
const experiences = [
  {
    role: "Your Job Title",
    organization: "Company Name",
    period: "Jan 2024 - Present",
    description: [
      "Achievement or responsibility 1",
      "Achievement or responsibility 2",
      "Achievement or responsibility 3"
    ]
  },
  // Add more experiences...
];
```

### 5. Skills (`src/components/Skills.jsx`)

Update the `skillsData` object (lines 6-45) with your skills:

```javascript
const skillsData = {
  "Languages": ["JavaScript", "Python", "Java"],
  "Frontend": ["React", "Vue.js", "Angular"],
  "Backend": ["Node.js", "Django", "Spring"],
  // Add or modify categories...
};
```

### 6. Resume/CV

Replace the placeholder file at `public/resume.pdf` with your actual resume PDF.

### 7. Contact Form (`src/components/Contact.jsx`)

Update the email address for direct contact (line 282):
```javascript
<a href="mailto:your.email@example.com">
```

To connect the form to a backend:
- Replace the simulated API call on line 75
- Add your backend endpoint URL
- Handle form submission with your API

Example:
```javascript
const response = await fetch('https://your-api.com/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

### 8. Quick Summary Bar (`src/components/QuickSummary.jsx`)

Update key information for recruiter scanning:
- Education
- Experience level
- Tech stack
- Specialization
- Location
- Availability status

### 9. Dark Mode

The dark mode toggle is automatic! It:
- Remembers user preference in localStorage
- Respects system theme preference
- Smoothly animates between themes
- Works across all components

No customization needed - it just works!

## Project Structure

```
website/
├── public/
│   └── resume.pdf              # Your resume PDF (replace this!)
├── src/
│   ├── components/
│   │   ├── Hero.jsx           # Hero section with animated text
│   │   ├── ThemeToggle.jsx    # 🌓 Dark mode toggle button
│   │   ├── QuickSummary.jsx   # 📊 Recruiter quick stats bar
│   │   ├── About.jsx          # About section
│   │   ├── Projects.jsx       # Projects showcase
│   │   ├── Experience.jsx     # Work experience timeline
│   │   ├── Skills.jsx         # Skills display
│   │   ├── Resume.jsx         # Resume download section
│   │   ├── Contact.jsx        # 📬 Contact form with validation
│   │   └── Footer.jsx         # Footer with social links
│   ├── context/
│   │   └── ThemeContext.jsx   # Dark mode context provider
│   ├── hooks/
│   │   └── useScrollReveal.js # Custom hook for scroll animations
│   ├── utils/
│   │   └── animations.js      # Reusable Framer Motion variants
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # React entry point
│   └── index.css              # Global styles with dark mode
├── index.html
├── package.json
├── tailwind.config.js         # Tailwind config with dark mode
├── vite.config.js             # Vite configuration
└── README.md
```

## Animation Features Implemented

1. ✅ **Animated Hero Text** - Word-by-word reveal with smooth easing
2. ✅ **Scroll-Triggered Section Reveals** - Fade + translate on scroll
3. ✅ **Highlighted Key Phrases** - Animated underlines and color accents
4. ✅ **Project Card Micro-Interactions** - Hover elevation, glow, and borders
5. ✅ **Animated Dividers** - Section separators that animate on scroll
6. ✅ **Subtle Background Motion** - Floating gradient shapes

## Key Files for Customization

| File | What to Update |
|------|----------------|
| `src/components/Hero.jsx` | Name, social links, hero text |
| `src/components/QuickSummary.jsx` | 📊 Education, location, availability |
| `src/components/About.jsx` | Personal bio and background |
| `src/components/Projects.jsx` | Project details and links |
| `src/components/Experience.jsx` | Work history |
| `src/components/Skills.jsx` | Technical skills |
| `src/components/Contact.jsx` | 📬 Email address, form backend |
| `src/components/Footer.jsx` | Contact info and social links |
| `public/resume.pdf` | Your actual resume |

## Tips for Customization

- **Colors**: Modify `tailwind.config.js` to change the color scheme
- **Fonts**: Update the Google Fonts import in `index.html` and `tailwind.config.js`
- **Animations**: Adjust timing and easing in `src/utils/animations.js`
- **Sections**: Add/remove sections by editing `src/App.jsx`

## Performance Optimization

- All animations use CSS transforms and opacity for GPU acceleration
- Intersection Observer ensures animations only trigger when visible
- Images and assets are optimized during build
- Code is automatically split for optimal loading

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

This site can be deployed to:
- **Vercel** (recommended for Vite projects)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**
- Any static hosting service

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Upload the 'dist' folder to Netlify
```

## License

This project is open source and available for personal and commercial use.

## Support

If you encounter any issues or have questions:
1. Check that all dependencies are installed: `npm install`
2. Ensure you're using Node.js v18 or higher
3. Clear your cache and rebuild: `rm -rf node_modules dist && npm install && npm run build`

---

**Built with precision and attention to detail. Good luck with your portfolio!**
