# VenMax Car Rental & Tours — Website

Plain HTML/CSS/JS, no build step, no framework, no paid tools required.

## What's in here
- `index.html` — the whole site (single page, anchor-linked sections)
- `assets/css/styles.css` — all styling
- `assets/js/main.js` — mobile nav, fleet filters, FAQ accordion, WhatsApp form handoff
- `assets/img/` — logo + real client photos + placeholder graphics for vehicles without photos yet

## Deploy for free: GitHub → Cloudflare Pages

1. **Create a new GitHub repo** (e.g. `venmax-car-rental`), and push this folder to it:
   ```
   git init
   git add .
   git commit -m "VenMax site v1"
   git branch -M main
   git remote add origin https://github.com/<your-username>/venmax-car-rental.git
   git push -u origin main
   ```

2. **Connect it to Cloudflare Pages:**
   - Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git
   - Select the repo
   - Build settings: **Framework preset: None**, **Build command: (leave blank)**, **Output directory: `/`**
   - Deploy — you'll get a free `*.pages.dev` URL immediately

3. **Connect VenMax's existing domain (www.venmax.co.zw):**
   - In the Pages project → Custom domains → Add a domain → enter `www.venmax.co.zw`
   - Cloudflare will show the DNS record to add (or add it automatically if the domain's nameservers are already on Cloudflare)
   - If someone else manages the domain/DNS, send them the CNAME record Cloudflare shows — they don't lose control of the domain, they're just pointing it at this site

Every future `git push` auto-redeploys. No hosting bill, no build minutes cost on the free tier.

## Updating vehicle photos
Real photos are still needed for these vehicles:
**Nissan Note, Toyota Aqua, Honda Fit, Nissan X-Trail, Toyota D4D, Toyota Prado, Range Rover Sport, Toyota Land Cruiser.**

To swap a placeholder for a real photo:
1. Add the new photo to `assets/img/` (keep it under ~300KB — resize to ~1400px wide first)
2. In `index.html`, find that vehicle's `<img src="assets/img/ph-....jpg">` and change the `src` to the new filename
3. Delete the `<span class="car-tag soon">Photo coming soon</span>` line right after it
4. Commit and push — Cloudflare redeploys automatically

## Adding real Google reviews
Open `index.html`, find the `<!-- TODO (content owner) -->` comment in the Reviews section, and paste in 2–3 selected quotes (reviewer names replaced with "Verified Customer" per the signed agreement).

## Notes
- No backend, no database, no admin login — by design, to keep this inside the agreed $100 scope. Content updates are direct file edits + git push.
- All WhatsApp buttons deep-link to `+263 71 422 5314` with a pre-filled message per vehicle.
- Colours and fleet data pulled directly from what VenMax confirmed — see the signed agreement for the source of truth on pricing.
