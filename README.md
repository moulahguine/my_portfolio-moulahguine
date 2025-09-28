# Mohamed Oulahguine - Frontend Developer Portfolio

This is my personal portfolio website where I showcase my projects, skills, and experience as a frontend developer. It’s built with React, SCSS, and Framer Motion to highlight both my technical abilities and design approach, while giving visitors a clear view of the kind of work I can create.

## Live Demo

[View Live Portfolio](https://mohamedoulahguine.com)

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Sections Overview](#sections-overview)
- [Technical Implementation](#technical-implementation)
- [Performance Optimizations](#performance-optimizations)
- [Accessibility Features](#accessibility-features)
- [Responsive Design](#responsive-design)
- [Setup Instructions](#setup-instructions)
- [Deployment](#deployment)
- [Future Features](#future-features)
- [About Me](#about-me)

## Overview

This portfolio is designed to showcase my frontend development expertise through a clean, modern interface that demonstrates both technical skills and attention to user experience. The site features smooth animations, responsive design, and optimized performance across all devices.

## Tech Stack

- **Frontend Framework**: React 18 with Hooks
- **Styling**: SCSS with CSS Modules
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **Icons**: React Icons (Font Awesome)
- **Image Optimization**: WebP format with srcSet
- **Deployment**: Netlify

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Background/      # Animated background effects
│   ├── Button/          # Custom button component
│   ├── Header/          # Navigation header
│   ├── Footer/          # Site footer
│   ├── InteractiveText/ # Hover preview component
│   ├── ImageModal/      # Image lightbox modal
│   ├── Location/        # Interactive map component
│   ├── Logo/            # Brand logo component
│   ├── Menu/            # Mobile navigation menu
│   ├── MouseFollower/   # Custom cursor effect
│   ├── Navigation/      # Desktop navigation
│   └── SocialLinks/     # Social media links
├── sections/            # Main page sections
│   ├── Hero/            # Landing section
│   ├── About/           # About me section
│   ├── Skills/           # Skills showcase
│   ├── Projects/        # Portfolio projects
│   └── Contact/         # Contact form
├── pages/               # Route components
│   ├── Home/            # Home page (all sections)
│   ├── Contact/         # Contact page
│   └── NotFound/        # 404 error page
├── hooks/               # Custom React hooks
│   └── useScrollManager.js
├── assets/              # Static assets
│   ├── images/          # Optimized images
│   └── styles/          # Global styles and variables
└── App.jsx              # Main application component
```

## Sections Overview

### Header

**Purpose**: Primary navigation and branding
**Value**: Provides clear navigation and establishes professional identity
**Implementation**:

- Fixed position with scroll-based styling changes
- Responsive design with mobile hamburger menu
- Logo with smooth scroll to hero section
- Desktop navigation with active state management
- Social links integration

**Technical Details**:

- Uses `useScrollManager` hook for scroll detection
- Framer Motion for smooth header animations
- Mobile-first responsive design
- Touch gesture support for mobile menu
- Accessibility features (ARIA labels, keyboard navigation)

### Hero Section

**Purpose**: First impression and introduction
**Value**: Immediately communicates who I am and what I do
**Implementation**:

- Large hero image with overlay text
- Animated typing effect for job title
- Call-to-action buttons
- Background animations

**Technical Details**:

- WebP images with srcSet for responsive optimization
- Framer Motion for entrance animations
- Interactive elements with hover effects
- Performance-optimized image loading

### About Section

**Purpose**: Personal story and professional background
**Value**: Builds trust and shows personality beyond technical skills
**Implementation**:

- Professional headshot with hover effects
- Interactive text elements with project previews
- Animated statistics/facts
- Personal narrative with engaging copy

**Technical Details**:

- `InteractiveText` component for hover previews
- Responsive image optimization
- Smooth scroll animations
- Touch-friendly mobile interactions

### Skills Section

**Purpose**: Technical expertise showcase
**Value**: Demonstrates proficiency in relevant technologies
**Implementation**:

- Categorized skill groups (Frontend, Tools, etc.)
- Animated skill bars or icons
- Progressive reveal on scroll
- Clean, scannable layout

**Technical Details**:

- Intersection Observer for scroll animations
- CSS animations for skill reveals
- Responsive grid layout
- Performance-optimized rendering

### Projects Section

**Purpose**: Portfolio showcase with detailed case studies
**Value**: Proves ability to deliver real-world solutions
**Implementation**:

- Project cards with hover effects
- Image modals for detailed views
- Technology tags and live links
- Responsive grid layout

**Technical Details**:

- `ImageModal` component with smooth transitions
- WebP images with multiple resolutions
- Lazy loading for performance
- Touch gesture support for mobile

### Facts Section

**Purpose**: Quantifiable achievements and statistics
**Value**: Provides concrete evidence of experience and impact
**Implementation**:

- Animated counters
- Visual icons and metrics
- Smooth reveal animations
- Mobile-optimized layout

**Technical Details**:

- Counter animation with Framer Motion
- Intersection Observer for trigger points
- Responsive typography scaling
- Performance-optimized animations

### Location Section

**Purpose**: Geographic context and local presence
**Value**: Shows location for potential local opportunities
**Implementation**:

- Interactive map component
- Location details and contact info
- Smooth animations and transitions
- Mobile-responsive design

**Technical Details**:

- Custom `InteractiveMap` component
- Responsive map integration
- Touch-friendly interactions
- Performance-optimized rendering

### Contact Section

**Purpose**: Direct communication channel
**Value**: Makes it easy for potential employers/clients to reach out
**Implementation**:

- Contact form with validation
- Multiple contact methods
- Social media integration
- Professional presentation

**Technical Details**:

- Form validation and error handling
- Responsive form layout
- Accessibility features
- Integration with contact services

### Footer

**Purpose**: Site closure and additional links
**Value**: Provides secondary navigation and professional links
**Implementation**:

- Social media links
- Copyright information
- Additional navigation
- Clean, minimal design

**Technical Details**:

- Responsive layout
- Social media integration
- Accessibility features
- Performance optimization

## Technical Implementation

### Why Framer Motion?

- **Smooth Animations**: Provides hardware-accelerated animations
- **Declarative API**: Easy to implement complex animations
- **Performance**: Optimized for React rendering cycles
- **Accessibility**: Built-in support for reduced motion preferences

### Why SCSS?

- **Maintainability**: Variables, mixins, and nesting for organized styles
- **Performance**: Compiled to optimized CSS
- **Flexibility**: Easy to customize and extend
- **Developer Experience**: Better tooling and debugging

### Why WebP Images?

- **Performance**: 25-35% smaller file sizes than JPEG
- **Quality**: Better compression with maintained quality
- **Browser Support**: Widely supported with fallbacks
- **SEO**: Faster loading improves search rankings

## Performance Optimizations

### Image Optimization

- **WebP Format**: Modern image format for better compression
- **srcSet Implementation**: Responsive images for different screen sizes
- **Lazy Loading**: Images load only when needed
- **Multiple Resolutions**: Optimized for different device pixel ratios

### Code Splitting

- **Route-based Splitting**: Each page loads only necessary code
- **Component Lazy Loading**: Heavy components load on demand
- **Bundle Optimization**: Tree-shaking removes unused code

### Animation Performance

- **Hardware Acceleration**: CSS transforms and opacity for smooth animations
- **Reduced Motion Support**: Respects user accessibility preferences
- **Throttled Scroll Events**: Optimized scroll handling
- **Intersection Observer**: Efficient scroll-based animations

## Accessibility Features

### Navigation

- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **ARIA Labels**: Screen reader friendly labels and descriptions
- **Focus Management**: Clear focus indicators and logical tab order
- **Skip Links**: Quick navigation for screen readers

### Content

- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Alt Text**: Descriptive alternative text for all images
- **Color Contrast**: WCAG AA compliant color combinations
- **Text Scaling**: Responsive typography that scales with user preferences

### Interactions

- **Touch Targets**: Minimum 44px touch targets for mobile
- **Reduced Motion**: Respects `prefers-reduced-motion` setting
- **Error Handling**: Clear error messages and validation feedback
- **Loading States**: Clear indication of loading and processing states

## Responsive Design

### Breakpoints

- **Mobile**: 320px - 778px
- **Tablet**: 779px - 1024px
- **Desktop**: 1025px+

### Mobile-First Approach

- **Progressive Enhancement**: Start with mobile, enhance for larger screens
- **Touch-Friendly**: Optimized touch targets and gestures
- **Performance**: Optimized for mobile network conditions
- **Usability**: Simplified navigation and interactions

### Responsive Images

- **srcSet**: Multiple image resolutions for different screens
- **sizes**: Proper sizing hints for optimal loading
- **WebP**: Modern format with JPEG fallbacks
- **Lazy Loading**: Performance optimization for mobile

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/moulahguine/my_portfolio-moulahguine.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm start
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Deployment

### Netlify Deployment

1. **Connect Repository**
   - Link your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`

2. **Environment Variables**
   - Add any required environment variables in Netlify dashboard

3. **Custom Domain** (Optional)
   - Configure custom domain in Netlify settings

### React Router Fix

The `public/_redirects` file ensures proper routing on Netlify:

```
/*    /index.html   200
```

This rule redirects all routes to `index.html` with a 200 status, allowing React Router to handle client-side routing.

## Future Features

### Planned Enhancements

- **Dark/Light Mode Toggle**
  - Theme switching with system preference detection
  - Smooth transitions between themes
  - Persistent theme selection

- **Blog Integration**
  - Technical blog posts and tutorials
  - Markdown-based content management
  - Search and filtering capabilities

- **Analytics Dashboard**
  - Visitor analytics and engagement metrics
  - Performance monitoring
  - A/B testing capabilities

- **Backend Integration**
  - Contact form backend processing
  - Email notifications
  - Form validation and spam protection

- **Performance Improvements**
  - Service worker implementation
  - Offline functionality
  - Advanced caching strategies

- **UI/UX Enhancements**
  - More interactive animations
  - Advanced micro-interactions
  - Improved accessibility features

- **PWA Features**
  - Progressive Web App capabilities
  - Offline functionality
  - App-like experience

## About Me

### My Journey

As a frontend developer with 3+ years of experience, I've dedicated myself to creating exceptional user experiences through clean, efficient code. This portfolio represents not just my technical skills, but my passion for modern web development and attention to detail.

### What This Portfolio Demonstrates

- **Technical Proficiency**: Modern React patterns, performance optimization, and responsive design
- **User Experience Focus**: Smooth animations, accessibility, and intuitive navigation
- **Code Quality**: Clean, maintainable code with proper documentation
- **Performance Awareness**: Optimized images, lazy loading, and efficient rendering
- **Professional Presentation**: Clear communication of skills and experience

### Skills Highlighted

- **Frontend Technologies**: React, JavaScript (ES6+), HTML5, CSS3/SCSS
- **Tools & Libraries**: Vite, Framer Motion, React Router, React Icons
- **Design Principles**: Responsive design, accessibility, performance optimization
- **Development Practices**: Component-based architecture, custom hooks, modern JavaScript

### Contact

I'm always interested in discussing new opportunities and collaborations. Feel free to reach out through any of the contact methods provided on the site.

---

_Built with React, SCSS, and Framer Motion_
