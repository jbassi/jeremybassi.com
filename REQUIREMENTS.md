# Jeremy Bassi Personal Website - Requirements

## Project Overview
A simple, elegant personal website for jeremybassi.com featuring large typography and minimal design. The site will be a single-page application showcasing personal information, work experience, and contact details.

## Design Inspiration
Based on the provided screenshots, the design should feature:
- Large, bold typography as the primary design element
- Minimal color palette with strategic use of accent colors for links
- Clean, text-focused layout with generous whitespace
- Single-page scrollable design
- Different colored links to highlight important information

## Tech Stack
- **Runtime**: Bun (JavaScript runtime and package manager)
- **Styling**: TailwindCSS (Utility-first CSS framework)
- **Language**: TypeScript (for type safety)

## Core Features

### 1. Single Page Layout
- One-page website with smooth scrolling
- No navigation menu needed
- Content organized in logical sections

### 2. Content Sections
- **Hero/Introduction**: Brief personal introduction
- **About**: Background, experience, and personal story
- **Work**: Professional experience and projects
- **Contact**: Contact information and social links

### 3. Typography & Design
- Large, readable fonts (likely 24px+ for body text)
- Hierarchy using font sizes and weights
- Strategic use of color for links and emphasis
- Responsive design for mobile and desktop
- Generous line spacing and margins

### 4. Interactive Elements
- Colored links that stand out from body text
- Hover effects on interactive elements
- Smooth scrolling behavior
- Mobile-responsive touch targets

## Technical Requirements

### Dependencies
- TailwindCSS 3+
- TypeScript 5+
- PostCSS (for TailwindCSS)
- Autoprefixer (CSS vendor prefixes)

### Development Dependencies
- ESLint (code linting)
- Prettier (code formatting)
- @types packages for TypeScript support

### Build & Deployment
- Static site generation for easy deployment
- Modern browser support (ES6+)
- Mobile-first responsive design

## Content Strategy
- Personal, conversational tone
- Focus on professional experience and skills
- Include links to work samples and social profiles
- Keep content concise but engaging
- Highlight key achievements and experiences

## Performance Goals
- Fast loading times (< 2 seconds)
- Lightweight bundle size
- Optimized images and assets
- Good Core Web Vitals scores
- Accessible design (WCAG guidelines)

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design for all screen sizes
- Progressive enhancement approach

## Development Workflow
1. Set up development environment with Bun
2. Configure build tools (TailwindCSS)
3. Create component structure
4. Implement responsive design
5. Add content and styling
6. Test across devices and browsers
7. Optimize for production deployment

## Future Enhancements (Optional)
- Dark mode toggle
- Animation effects
- Blog section
- Portfolio gallery
- Contact form functionality
- Analytics integration
