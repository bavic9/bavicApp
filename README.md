# Adeyeye Adebayo — Portfolio

A redesigned React/Vite portfolio with a cleaner professional visual system, responsive navigation, project filtering, improved project cards, skills/toolbox section, contact form states, social links, accessibility labels and a back-to-top interaction.

## Run locally

```bash
npm install
npm run dev
```

## EmailJS

The contact form uses the existing EmailJS integration. Add these variables to `.env`:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

The form intentionally does not hard-code a recipient email. Configure the recipient in your EmailJS template.

## Main changes

- Modern portfolio layout with a more professional visual hierarchy
- Hero CTA and availability badge
- Responsive mobile navigation
- Smooth anchor scrolling
- About section with capability cards and quick stats
- Project filtering by stack/category
- Project cards with live/source links
- Dedicated technology/toolbox section
- Contact form success/error/configuration states
- Better SEO metadata
- Accessible labels for icon-only links
- Reduced-motion support
- Back-to-top control
- Existing 3D computer scene retained on large screens
