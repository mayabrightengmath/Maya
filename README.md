# Bright ENGMATH — Shopify Theme

**Version:** 1.0.0  
**Author:** Bright ENGMATH  
**Framework:** Shopify Online Store 2.0

---

## 📁 File Structure

```
shopify-theme/
├── layout/
│   └── theme.liquid              ← Main layout (header/footer on every page)
├── templates/
│   ├── index.json                ← Homepage
│   ├── product.json              ← Product page
│   ├── collection.json           ← Shop / Collection page
│   ├── page.json                 ← Generic page
│   ├── page.contact.json         ← Contact page
│   ├── page.faq.json             ← FAQ page
│   └── page.free-samples.json   ← Free Samples page
├── sections/
│   ├── announcement-bar.liquid   ← Top announcement banner
│   ├── header.liquid             ← Sticky navigation header
│   ├── footer.liquid             ← Site footer
│   ├── hero.liquid               ← Homepage hero section
│   ├── stats-bar.liquid          ← Stats (1000+ customers etc.)
│   ├── category-cards.liquid     ← Browse by category
│   ├── featured-products.liquid  ← Best sellers grid
│   ├── how-it-works.liquid       ← 3-step process
│   ├── trust-bar.liquid          ← Why choose us (dark bg)
│   ├── free-samples-cta.liquid   ← Free samples CTA section
│   ├── reviews.liquid            ← Customer testimonials
│   ├── faq.liquid                ← Accordion FAQ (homepage)
│   ├── product-template.liquid   ← Full product page
│   ├── collection-template.liquid← Shop with filters + grid
│   ├── main-page.liquid          ← Generic page content
│   ├── page-contact.liquid       ← Contact page with form
│   ├── page-faq.liquid           ← Full FAQ page
│   └── page-free-samples.liquid  ← Free samples download page
├── snippets/
│   ├── product-card.liquid       ← Reusable product card component
│   ├── icon.liquid               ← SVG icon renderer (22 icons)
│   └── trust-badges.liquid       ← 4 trust badges (used on product page)
├── assets/
│   ├── theme.css                 ← All styles (BEM + CSS variables)
│   └── theme.js                  ← All JS (menu, FAQ, cart, tabs)
└── config/
    ├── settings_schema.json      ← Theme Editor settings definition
    └── settings_data.json        ← Default settings values
```

---

## 🚀 How to Upload to Shopify

### Method 1: GitHub (Recommended)
1. Create a new GitHub repository
2. Push this entire `shopify-theme` folder as the repo root
3. In Shopify Admin → **Online Store → Themes → Add Theme → Connect from GitHub**
4. Select your repo → Deploy

### Method 2: ZIP Upload
1. ZIP the entire `shopify-theme` folder
2. In Shopify Admin → **Online Store → Themes → Add Theme → Upload ZIP**
3. Wait for upload → Preview → Publish

---

## ⚙️ Theme Editor Settings

After installing, go to **Online Store → Themes → Customize** to edit:

| Setting | Where |
|---|---|
| Brand colors (orange, ivory, dark) | Theme Settings → Colors |
| Social media links | Theme Settings → Social Media |
| Contact info (email, LINE) | Theme Settings → Contact |
| Announcement bar text | Header section |
| Nav menu | Header → Select menu |
| Footer menus | Footer → Select menus |
| Hero headline & buttons | Sections → Hero |
| Featured products | Sections → Featured Products |
| Reviews | Sections → Reviews (add/edit blocks) |
| FAQ | Sections → FAQ (add/edit blocks) |

---

## 🏷️ Product Metafields Setup

Go to **Settings → Custom Data → Products** and add these metafields:

| Namespace.Key | Type | Label |
|---|---|---|
| `custom.subject` | Single-line text | Subject (e.g. Math, English) |
| `custom.grade_level` | Single-line text | Grade Level (e.g. Grade 1–3) |
| `custom.file_type` | Single-line text | File Type (e.g. PDF (A4)) |
| `custom.page_count` | Single-line text | Number of Pages (e.g. 50 pages) |
| `custom.included_items` | Multi-line text | Included items (separated by \|) |
| `custom.review_count` | Integer | Number of reviews |

---

## 📱 Digital Downloads Setup

Install **Sky Pilot** or **SendOwl** from the Shopify App Store to automatically deliver PDF files after purchase.

---

## 💳 Thai Payment Methods

Install **Omise** or **2C2P** from the Shopify App Store for:
- PromptPay QR Code
- Thai bank transfer
- Credit/Debit cards (Visa, Mastercard)
- TrueMoney Wallet

---

## 📄 Pages to Create in Shopify Admin

Go to **Online Store → Pages** and create:

| Page Title | Template |
|---|---|
| Contact | page.contact |
| FAQ | page.faq |
| Free Samples | page.free-samples |
| About Us | page (default — add content in editor) |
| How to Order | page (default — add content in editor) |
| Terms of Use | page (default — add content in editor) |

---

## 🔗 Menus to Create

Go to **Online Store → Navigation** and create:

- **main-menu** — Home, Shop, Math, English, E-books, Freebies, How to Order, Contact
- **footer-shop** — Shop All, Math Worksheets, English Worksheets, Exam Prep, E-books, Free Samples
- **footer-info** — About Us, How to Order, FAQ, Contact, Terms of Use
- **footer-legal** — Terms of Use, Privacy Policy, Refund Policy

---

*Built for Shopify OS 2.0 | Bright ENGMATH © 2024*
