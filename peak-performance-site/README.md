# Peak Performance Jetski Rentals — Website

## Structure
```
index.html        Main page
css/styles.css    All styles (design tokens at the top)
js/main.js        Nav, pricing toggle, scroll reveal, video, booking form
images/           Logo + optimized photos
```

## Before going live — checklist
1. **Phone number** — search `index.html` for `TODO: add phone number` and replace `(XXX) XXX-XXXX` and the `tel:` link.
2. **Ride video** — already included at `images/ride.mp4` (28s highlight reel, muted).
3. **FormSubmit activation** — after hosting, submit the booking form once yourself. FormSubmit emails peakrentalswa@gmail.com a one-time confirm link. Click it and all future inquiries arrive automatically.
4. **Domain** — once you have your real domain, update the `canonical` link and `og:image` URL in the `<head>`.

## Hosting (free)
- **GitHub Pages**: push this folder to a repo → Settings → Pages → deploy from main branch.
- Or drag the folder into **Netlify Drop** (app.netlify.com/drop) — instant.
- Custom domain (~$10/yr from Cloudflare/Namecheap) recommended for the Instagram bio + local SEO.
