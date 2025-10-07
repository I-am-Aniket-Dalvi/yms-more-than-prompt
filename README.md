# YMS Consulting Engineers - Modern React Application

## Project Overview
This is a complete modern redesign of the YMS Consulting Engineers website built with React, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🎨 UI/UX Enhancements

### Design System
- **Color Palette**: Maroon (#800000) primary color with professional dark grays
- **Typography**: Inter font family for modern, clean readability
- **Spacing**: Generous white space for premium feel
- **Animations**: Smooth scroll-based reveals, hover micro-interactions, parallax effects

### Key Features Implemented

#### 1. **Sticky Navigation**
- Fixed header that becomes translucent on scroll
- Mobile-responsive hamburger menu
- Smooth transitions and backdrop blur effect

#### 2. **Hero Section**
- Full-screen parallax background carousel
- Ken Burns animation effect on images
- Gradient overlay for text readability
- Animated scroll indicator

#### 3. **Scroll Animations**
- Intersection Observer-based reveal animations
- Staggered entrance animations for cards
- Respects `prefers-reduced-motion` accessibility

#### 4. **Interactive Cards**
- Hover lift effects on service cards
- Smooth color transitions
- Scale animations on team member images

#### 5. **Responsive Design**
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Fluid typography and spacing

### Pages Implemented

1. **Home** (`/`)
   - Hero carousel with parallax
   - About preview section
   - Services grid
   - Contact section

2. **About** (`/about`)
   - Full about page with detailed content
   - Image with hover effects
   - Same content as provided

3. **Team** (`/team`)
   - Top 2 leaders (Yogesh Sankhe & Sallem Bootwala) prominently displayed
   - 8 key team members in grid layout
   - Modal dialogs for detailed bios
   - Hover effects on cards

4. **Services** (`/services`) - Routes to home services section
5. **Clients** (`/clients`) - Placeholder
6. **Projects** (`/projects`) - Placeholder  
7. **Contact** (`/contact`) - Routes to home contact section
8. **Careers** (`/careers`) - Placeholder

### Technical Implementation

#### Performance Optimizations
- Lazy loading for images with `loading="lazy"`
- Intersection Observer for scroll animations
- CSS transitions over JavaScript animations
- Optimized bundle with Vite

#### Accessibility
- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Reduced motion media queries
- Focus states on interactive elements

#### SEO
- Proper meta tags and Open Graph data
- Semantic heading hierarchy (h1, h2, h3, h4)
- Descriptive alt text on images
- Clean URL structure

### Files Modified

#### Core Files
- `index.html` - Updated meta tags, added Inter font
- `src/index.css` - Complete design system overhaul with HSL color tokens
- `tailwind.config.ts` - Extended with Inter font family and custom colors
- `src/App.tsx` - Router setup with Navbar and Footer layout

#### New Components Created
- `src/components/Navbar.tsx` - Sticky navigation with mobile menu
- `src/components/Hero.tsx` - Parallax hero carousel
- `src/components/About.tsx` - About section component
- `src/components/Services.tsx` - Services grid component
- `src/components/Contact.tsx` - Contact information and map
- `src/components/Footer.tsx` - Footer component
- `src/hooks/useScrollAnimation.tsx` - Intersection Observer hook

#### New Pages Created
- `src/pages/Home.tsx` - Home page composition
- `src/pages/AboutPage.tsx` - Full about page
- `src/pages/TeamPage.tsx` - Team page with modal dialogs

### Content Preservation
✅ All text content kept exactly as provided
✅ All image paths unchanged (referenced from original locations)
✅ Color palette maintained (#800000 maroon, #333 dark)
✅ Team member order preserved (2 bosses first, then key members)

### Browser Support
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Next Steps
To complete the full website, implement:
- Services detail page with sidebar navigation
- Clients page with filterable gallery
- Projects page with category filters and modals
- Contact form with validation
- Careers page with job listings
- Testimonials carousel
- Policies section

## Credits
Design and development by Lovable AI
Content provided by YMS Consulting Engineers
