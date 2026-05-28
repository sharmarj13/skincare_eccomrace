# 📁 Images Folder Guide

Yahan apni images rakhein. Har folder ka alag kaam hai:

## Folder Structure

| Folder | Kya Rakhein | URL Example |
|--------|-------------|-------------|
| `brand/` | Logo, watermark, brand icon | `/images/brand/logo.png` |
| `hero/` | Homepage hero/banner images | `/images/hero/banner.jpg` |
| `products/` | Product photos | `/images/products/serum.jpg` |
| `testimonials/` | Customer photos | `/images/testimonials/user1.jpg` |
| `common/` | Icons, backgrounds, misc | `/images/common/pattern.svg` |

## Code Mein Kaise Use Karein

```jsx
// Simple image
<img src="/images/brand/logo.png" alt="SOL Logo" />

// Next.js / React
import logo from '/images/brand/logo.png'
```

## Supported Formats
✅ `.jpg` / `.jpeg` — Photos ke liye  
✅ `.png` — Transparent background ke liye  
✅ `.svg` — Logo/icons ke liye (best quality)  
✅ `.webp` — Fast loading ke liye  
