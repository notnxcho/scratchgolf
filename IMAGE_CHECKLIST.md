# Image Checklist for Scratch Lab Golf Website

## Required Images to Produce

### 1. Favicon & App Icons
**Location:** `/public/` folder

- [ ] **favicon.ico** (16x16, 32x32, 48x48 multi-size ICO file)
  - Format: ICO (multi-resolution)
  - Purpose: Browser tab icon
  - Design: Use Scratch Lab logo/icon, should be recognizable at small sizes

- [ ] **favicon-16x16.png** (16x16 PNG)
  - Format: PNG
  - Purpose: Fallback favicon

- [ ] **favicon-32x32.png** (32x32 PNG)
  - Format: PNG
  - Purpose: Browser favicon, bookmarks

- [ ] **apple-touch-icon.png** (180x180 PNG)
  - Format: PNG, square
  - Purpose: iOS home screen icon
  - Note: iOS will add rounded corners automatically

- [ ] **icon-192x192.png** (192x192 PNG)
  - Format: PNG, square
  - Purpose: Android home screen, PWA icon
  - Design: Should work on both light and dark backgrounds

- [ ] **icon-512x512.png** (512x512 PNG)
  - Format: PNG, square
  - Purpose: Android splash screen, PWA icon
  - Design: High resolution version of icon

### 2. Open Graph (OG) Images
**Location:** `/public/` folder (served at root URL)

- [ ] **og-image-home.jpg** (1200x630 JPG)
  - Format: JPG (optimized, < 300KB)
  - Aspect Ratio: 1.91:1 (1200x630 is standard)
  - Purpose: Default OG image for homepage and general sharing
  - Design: Should include:
    - Scratch Lab Golf branding/logo
    - Compelling visual (golf simulator, Trackman tech, or facility)
    - Text overlay: "Scratch Lab Golf - Indoor Golf Simulator & Training"
    - Location: "Walnut Creek, CA"
  - Usage: Homepage, general pages

- [ ] **og-image-book.jpg** (1200x630 JPG)
  - Format: JPG (optimized, < 300KB)
  - Aspect Ratio: 1.91:1
  - Purpose: OG image for booking/reservation pages
  - Design: Should include:
    - Scratch Lab Golf branding
    - Visual related to booking (calendar, simulator bay, etc.)
    - Text: "Book Your Golf Session - Scratch Lab Golf"

- [ ] **og-image-legal.jpg** (1200x630 JPG)
  - Format: JPG (optimized, < 300KB)
  - Aspect Ratio: 1.91:1
  - Purpose: OG image for legal pages (privacy, terms, liability)
  - Design: Professional, minimal design with branding

### 3. Twitter Card Images
**Note:** Can reuse OG images, but Twitter prefers 1200x600 for summary_large_image

- [ ] **twitter-card.jpg** (1200x600 JPG) - Optional, can use og-image-home.jpg
  - Format: JPG
  - Aspect Ratio: 2:1 (1200x600)
  - Purpose: Twitter sharing (if different from OG image)

### 4. PWA & Mobile App Icons
**Location:** `/public/` folder

- [ ] **mask-icon.svg** (SVG, single color)
  - Format: SVG
  - Purpose: Safari pinned tab icon
  - Design: Single color logo/icon (Safari will apply color)
  - Color: Should work with theme color (#047857 or brand green)

### 5. Windows Tile Icons
**Location:** `/public/` folder

- [ ] **mstile-150x150.png** (150x150 PNG)
  - Format: PNG, square
  - Purpose: Windows 8/10 tile icon

### 6. Additional Recommended Images

- [ ] **browserconfig.xml** (XML file)
  - Purpose: Windows tile configuration
  - Note: This is a file, not an image - will be created in code

---

## Image Specifications Summary

| Image | Size | Format | Purpose |
|-------|------|--------|---------|
| favicon.ico | 16x16, 32x32, 48x48 | ICO | Browser tab |
| favicon-16x16.png | 16x16 | PNG | Browser favicon |
| favicon-32x32.png | 32x32 | PNG | Browser favicon |
| apple-touch-icon.png | 180x180 | PNG | iOS home screen |
| icon-192x192.png | 192x192 | PNG | Android/PWA icon |
| icon-512x512.png | 512x512 | PNG | Android/PWA splash |
| og-image-home.jpg | 1200x630 | JPG | Homepage OG image |
| og-image-book.jpg | 1200x630 | JPG | Booking pages OG |
| og-image-legal.jpg | 1200x630 | JPG | Legal pages OG |
| mask-icon.svg | SVG | SVG | Safari pinned tab |
| mstile-150x150.png | 150x150 | PNG | Windows tile |

---

## Design Guidelines

1. **Brand Colors:**
   - Primary Green: #047857 (from SEO component)
   - Theme Color: #12AF9A (from index.html)
   - Use brand colors consistently

2. **Logo Usage:**
   - Available logos: `svg-iso-color.svg`, `svg-iso-white.svg`, `svg-iso-black.svg`
   - Use appropriate logo variant based on background
   - Ensure logo is clearly visible at all sizes

3. **OG Images:**
   - Keep text minimal and readable
   - Use high-quality images of your facility/simulators
   - Ensure branding is prominent but not overwhelming
   - Test readability at small sizes (thumbnails)

4. **Icons:**
   - Should be recognizable at 16x16 pixels
   - Use simple, bold designs
   - Avoid fine details that disappear at small sizes
   - Consider both light and dark backgrounds

---

## Priority Order

1. **High Priority (Essential):**
   - favicon.ico
   - apple-touch-icon.png
   - icon-192x192.png
   - icon-512x512.png
   - og-image-home.jpg

2. **Medium Priority (Recommended):**
   - favicon-16x16.png, favicon-32x32.png
   - og-image-book.jpg
   - mask-icon.svg

3. **Low Priority (Nice to Have):**
   - og-image-legal.jpg
   - twitter-card.jpg
   - mstile-150x150.png

---

## Notes

- All images should be optimized for web (compressed but high quality)
- OG images should be under 300KB for fast loading
- Icons should use PNG format with transparency where needed
- Consider creating a design system/guide for consistent branding across all images
- Test all images in their intended contexts (browser tabs, social media previews, mobile home screens)

