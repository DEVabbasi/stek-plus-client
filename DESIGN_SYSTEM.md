# Stek+ Design System

## Brand Colors

### Primary Gradient
- **Value**: `linear-gradient(271.53deg, #88C8F7 5.9%, #1072B7 77.5%)`
- **Tailwind Class**: `bg-brand`
- **CSS Variable**: `--bg-brand`

### Solid Colors
- **Brand Blue**: `rgba(16, 114, 183, 1)` | `#1072B7`
- **Brand Light Blue**: `rgba(136, 200, 247, 1)` | `#88C8F7`
- **Background Light**: `#f5f7fa`
- **Card Background**: `#f2f2f2`
- **Text Dark**: `#111111`
- **Text Muted**: `#5f5f5f`

---

## Typography

### Headers (H1, H2, H3)
- **Font-Weight**: Extrabold / Bold
- **Color**: Brand Blue or Text Dark
- **Style**: Dynamic sizing (e.g., H1 can be `text-4xl` to `text-6xl`)

### Paragraphs
- **Font**: Geist Sans (Variable)
- **Color**: Text Muted or Text Gray
- **Size**: `text-sm` (Mobile) to `text-base` (Desktop)

---

## Components & UI Rules

### Form Elements (Inputs, Selects, Buttons)
- **Border Radius**: `rounded-none` (Sharp Edges)
- **Height**: `h-12` (standard)
- **Border**: `border-gray-300`
- **Focus State**: `ring-1 ring-[var(--brand-blue)]`

### Buttons
- **Standard**: `BrandButton` component
- **Style**: Rounded or Sharp depending on context (Landing page form = Sharp)

### Section Spacing
- **Standard Padding**: `py-16 md:py-24 lg:py-32`
- **Compact Sections**: `py-10 md:py-14`

### Shadows
- **Soft Shadow**: `0px 8px 24px rgba(0,0,0,0.06)`

---

## Vector Design Specs
- **VectorDesign1**: Used for bridging sections (bottom-left or top-left). Overlaps sections with negative positioning (e.g., `-bottom-10`).
- **VectorDesign2**: Used for corner decorations (usually bottom-right).
- **Icons**: Standardized to `28x28px` in grid lists (e.g., Waarom section).
