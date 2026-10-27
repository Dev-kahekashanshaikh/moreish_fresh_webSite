# MOREISH FRESH — Premium Fresh Food Retail Website

> **"From Farm to Your Table"**  
> *Good Food Builds Brighter Tomorrows.*

A production-quality, responsive website built for **MOREISH FRESH**, specializing in fresh broiler chicken, with planned expansion into seafood and specialty poultry.

---

## 🌟 Key Highlights & Features

1. **Brand-Focused Aesthetic**:
   - Palette: Primary Red (`#C62828`), Deep Red (`#A61E22`), Warm Neutral (`#FAF8F5`), Fresh White (`#FFFFFF`), and Charcoal (`#242424`).
   - Clean, editorial typography pairing **Poppins** (headings) and **Inter** (body), plus **Noto Sans Kannada** for authentic Kannada script rendering.
   - High-resolution, authentic food photography loaded locally from `/public/images/` with fallback error handlers.

2. **Complete Bilingual Experience (English + Kannada)**:
   - Full localization of every section, navigation item, status badge, form field, and footer element.
   - Seamless toggling between **English** and **ಕನ್ನಡ** via the header and mobile navigation drawer.
   - Dynamic `document.documentElement.lang` and title synchronization.

3. **Responsive Architecture**:
   - Tested across mobile (320px, 360px, 375px, 390px, 430px), tablet (768px), laptop (1024px, 1280px), and large screens (1440px+).
   - Zero horizontal overflow, fluid `clamp()` typography, comfortable touch targets, and sticky navigation with anchor offset correction.

4. **Sections Built**:
   - **Hero Section**: Editorial two-column layout with brand promise tags (*Freshness • Hygiene • Quality • Trust*), CTAs, and a floating trust badge.
   - **About Moreish Fresh**: Farm-to-customer business narrative and retail counter photography.
   - **Our Journey (5 Steps)**: 
     1. Poultry Farms
     2. Transportation
     3. Retail Store Operations
     4. Hygienic Processing & Packaging
     5. Serving Our Customers
   - **Our Products**:
     - *Broiler Chicken* (Main Product — Configurable status)
     - *Seafood* (Planned expansion)
     - *Quail Bird* (Specialty poultry)
     - *Pheasant* (Specialty poultry)
     - *Layer Chicken* (Layer bird meat)
   - **Hygienic Packaging**: Food-grade packaging features, clean handling, neat presentation, customer convenience.
   - **Our Commitment**: 5 icon-led cards (*Hygiene First, Careful Transportation, Quality Mindset, Thoughtful Packaging, Customer Satisfaction*).
   - **Our Vision**: Brand future roadmap and closing motto (*"Good Food Builds Brighter Tomorrows"*).
   - **Contact Us**: Configurable business details (address, phone, email, hours) and an interactive contact enquiry form with validation.
   - **Footer**: Brand statement, quick links, product categories, copyright, and back-to-top button.
   - **Floating Actions**: WhatsApp click-to-chat button (activated once business phone is configured) and smooth scroll-to-top button.

---

## 🛠️ Tech Stack

- **Framework**: React.js (Functional components & hooks)
- **Tooling**: Vite (ES6+ JavaScript)
- **Icons**: Lucide React
- **Styling**: Modular Plain CSS & CSS Custom Properties (Variables)
  - `src/styles/variables.css`
  - `src/styles/global.css`
  - `src/styles/components.css`
  - `src/styles/sections.css`
  - `src/styles/responsive.css`

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18+ recommended)
- npm (v9+)

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
The site runs at `http://127.0.0.1:3000/`.

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle is generated in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ Configuration & Maintenance Guide

### 1. Updating Business Contact Information
Open [`src/data/config.js`](file:///d:/Tekisky/Farm-website-client/src/data/config.js):
```javascript
export const brandConfig = {
  brandName: 'MOREISH FRESH',
  tagline: 'From Farm to Your Table',
  contact: {
    address: 'Your Physical Store Address, Bangalore, Karnataka',
    phone: '+91 98765 43210',
    email: 'contact@moreishfresh.com',
    businessHours: 'Mon - Sun: 7:00 AM - 9:00 PM',
    // WhatsApp configuration (Digits only, international format)
    whatsappNumber: '919876543210',
    whatsappDefaultMessage: 'Hello Moreish Fresh, I would like to know more about your products.'
  }
};
```
*Note: The floating WhatsApp button will automatically appear once a valid `whatsappNumber` is added.*

---

### 2. Managing Product Availability
Open [`src/data/products.js`](file:///d:/Tekisky/Farm-website-client/src/data/products.js):
To change product status, simply update the `status` field:
- `'available'`: Displays **"Available Now"** (Green badge)
- `'pending_confirmation'`: Displays **"Availability to Be Confirmed"** (Orange badge)
- `'coming_soon'`: Displays **"Coming Soon"** (Charcoal badge)

Example:
```javascript
{
  id: 'broiler-chicken',
  status: 'available', // Change here
  titleKey: 'products.broiler.title',
  ...
}
```

---

### 3. Editing Translations (English & Kannada)
Open [`src/data/translations.js`](file:///d:/Tekisky/Farm-website-client/src/data/translations.js):
- English strings are under `translations.en`.
- Kannada strings are under `translations.kn`.

All keys are structured hierarchically (e.g., `hero.headline`, `about.heading`, `products.broiler.description`).

---

### 4. Replacing Images
All image files are stored in the [`public/images/`](file:///d:/Tekisky/Farm-website-client/public/images/) directory:
- `hero-chicken.jpg`: Fresh raw chicken presentation
- `about-retail.jpg`: Clean retail store environment
- `journey-farm.jpg`: Poultry farm
- `journey-transport.jpg`: Poultry transport logistics
- `journey-retail.jpg`: Retail store operations
- `journey-packaging.jpg`: Hygienic packaging process
- `journey-customer.jpg`: Customer service
- `product-broiler.jpg`: Broiler chicken product photo
- `product-seafood.jpg`: Fresh seafood photo
- `product-quail.jpg`: Quail bird photo
- `product-pheasant.jpg`: Pheasant bird photo
- `product-layer.jpg`: Layer hen photo
- `packaging-showcase.jpg`: Sealed food-grade packaging
- `vision-farm.jpg`: Farm landscape

To replace an image, simply overwrite the corresponding file in `public/images/` or change the filename in `src/data/products.js` or the respective section component.

---

## 📄 License & Attribution
© Moreish Fresh. All Rights Reserved.
