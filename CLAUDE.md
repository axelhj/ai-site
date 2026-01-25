# Phimes AI Site

## Project Overview
Swedish-language landing page for Phimes AI automation services.

## Tech Stack
- Pure HTML/CSS/JS (no frameworks)
- Static site

## Design System

### Colors (CSS Variables)
```css
/* Base colors */
--bg-dark: #031B43      /* Primary background */
--bg-darker: #020F28    /* Darker sections */
--purple: #311843       /* Accent purple */
--accent: #489EC7       /* Primary accent (blue) */
--accent-glow: #5DB4DD  /* Glow effects */
--accent-dark: #3A7FA3  /* Darker accent */
--text: #f0f8ff         /* Primary text */
--text-muted: #a8c4e0   /* Secondary text */

/* RGB values for semi-transparent backgrounds */
--bg-dark-rgb: 3, 27, 67
--bg-darker-rgb: 2, 15, 40
--purple-rgb: 49, 24, 67
/* Usage: background: rgba(var(--bg-dark-rgb), 0.92) */

/* Components */
--glass: rgba(var(--purple-rgb), 0.35)
--glass-border: rgba(72, 158, 199, 0.25)
```

### Typography
- Font: 'Segoe UI', system-ui, sans-serif
- h1: clamp(3.6rem, 9vw, 7.2rem) - gradient text with shine animation
- h2: clamp(3.2rem, 7vw, 5.5rem) - gradient text
- h2.section-title-sm: clamp(1.8rem, 4vw, 2.5rem) - muted color

### Key Effects
- **slideGrid**: Animated grid background (40px cells), `position: fixed` on `body::before` - appears underneath all sections consistently regardless of scroll position
- **textShine**: Gradient text animation on h1
- **Glass cards**: backdrop-filter blur with purple glass effect
- **Hover lifts**: translateY(-6px to -8px) with enhanced shadows
- **Dropdown menu**: CSS-only hover dropdown with smooth fade/slide transition

### Layout
- Max container width: 1240px (1400px for hero)
- Side padding: 5vw
- Section padding: clamp(80px, 10vw, 120px)
- Section backgrounds: Semi-transparent (rgba) to allow grid to show through

## File Structure
```
/
├── index.html      # Main landing page
├── us.html         # About us page (Om oss)
├── styles.css      # Shared styles
├── script.js       # Typing animation, interactions
├── CLAUDE.md       # This file (project context for Claude Code)
├── image/          # Photos (ceo.jpg)
└── svg/            # Logo assets
```

## Page Sections
1. **Top Bar** - Fixed nav with logo + dropdown menu
2. **Hero** - Two-column: tagline + preview window
3. **Ticker** - Scrolling client logos
4. **Services** - 3 compact service cards
5. **Pricing** - 3 pricing tiers (€2k, €5k, €10k)
6. **CTA** - Call to action with gradient bg
7. **Footer** - Logo + links

## Pricing Tiers
| Tier | Price | Key Features |
|------|-------|--------------|
| Start | €2,000 | 1 agent, 2 weeks, 30 days support |
| Tillväxt | €5,000 | 3 agents, 4 weeks, 90 days support |
| Enterprise | €10,000 | Unlimited, dedicated team, 12 months |

## Component Patterns

### Buttons
```css
.btn - Primary gradient button with glow
```

### Cards
```css
.card - Large glass card with hover effect
.service-card - Compact service card
.pricing-card - Pricing tier card
.pricing-card.featured - Highlighted tier
```

### Navigation
```css
.top-bar           /* Fixed header with glassmorphism */
.nav-dropdown      /* Dropdown wrapper (position: relative) */
.dropdown-content  /* Dropdown panel - hidden by default, shown on hover */
.dropdown-item     /* Individual dropdown link with title + price + desc */
```

### CSS Architecture
- Section 1: Variables
- Section 2: Reset & Base (includes fixed grid on body::before)
- Section 3: Layout (container, sections)
- Section 4: Typography (h1, h2, lead)
- Section 5: Navigation (top-bar, dropdown)
- Section 6: Hero
- Section 7: Buttons
- Section 8: Cards (card, service-card)
- Section 9: Pricing
- Section 10: Ticker
- Section 11: Footer
- Section 12: Responsive

## Notes for Development
- All text in Swedish (lang="sv")
- Mobile-first responsive breakpoints: 600px, 768px, 900px, 1024px
- Prefer CSS variables for all colors
- Keep z-index layering: grid(-1) < content(auto) < nav(1000)
- SVG checkmarks use stroke="#489EC7" (accent color)
