# 🔮 Gene Anthony Ray Petition — Agent Memory

> **Last Updated:** 2026-04-22 13:21:00
> **Purpose:** Civic petition site to co-name 153rd Street in Harlem as "Gene Anthony Ray Way"
> **Domain:** https://geneanthonyray.com

---

## 🔥 Hot Context (Check First)
- **Active:** Petition site live at geneanthonyray.com with SQLite signature collection
- **Blocker:** None
- **Last Deploy:** 2026-04-22 (tag: `deploy-20260422-1314`)
- **Experiments:** Progress bar threshold set to 0 (show always); bump to 10 once real signatures arrive

---

## 📜 Memory Stream

### 📅 April 22: SQLite DB, Custom Domain & CB9 Integration ✅
- **Database Live:** `better-sqlite3` with WAL mode, persistent via Docker volume mount at `/apps/gene-anthony-ray/data/petition.db`.
- **Custom Domain:** `geneanthonyray.com` live with SSL. Redirects from `re-app.space` and `www` via 302.
- **CB9 Research:** Confirmed Manhattan Community Board 9 is correct. 60% of block residents required for formal petition.
- **Form Upgraded:** Added street address + phone fields per CB9 requirements.
- **Footer Credit:** "Built by Ra Thriva" linking to rathriva.com.
  - *Citation:* [[Session: SQLite/Domain/CB9]](sessions/2026-04-22_13-21-00_sqlite-domain-cb9-integration.md)

### 📅 April 20: Initial Build & VPS Deployment ✅
- **Site Built:** Next.js 16 (App Router) petition page with cinematic hero, biography sections, AI-generated imagery.
- **VPS Deployed:** Docker container on Coolify network with Traefik SSL.
- **Text Fixes:** Resolved spacing issues in biography text.
  - *Citation:* [[Session: Initial Build]](sessions/) *(pre-memory-system)*

### 📅 April 18: Design & Content Creation ✅
- **Content Written:** Full biography, petition copy, "The Ask" section.
- **Images:** AI-generated hero backgrounds and section imagery.
  - *Citation:* *(pre-memory-system)*

---

## ⚠️ Gotchas (Hard-Won Knowledge)

### Native Node Modules in Next.js Standalone
- **better-sqlite3 breaks standalone builds:** Must add to `serverExternalPackages` in `next.config.ts` AND explicitly COPY the native bindings in the Dockerfile (bindings, file-uri-to-path, prebuild-install).
- **Alpine needs build tools:** `apk add python3 make g++` required in builder stage for compiling native addons.

### Docker Volume Permissions
- **Bind mounts create dirs as root:** When Docker creates a bind mount directory on the host, it's owned by `root`. The `nextjs` user (UID 1001) can't write to it. Fix: `chown -R 1001:1001 /apps/<project>/data` on the host.

### Domain Redirects
- **Never use 301 for uncertain redirects:** 301s are cached aggressively by browsers. If you make a typo, users get stuck. Use 302 (temporary) unless you're 100% certain the destination is permanent and correct.

### CB9 Street Co-Naming
- **It's a percentage, not a number:** CB9 requires 60% of residents AND businesses on the specific block, not a generic signature count.
- **Formal petition needs:** Names, addresses, phone numbers, emails — plus total count of units/businesses on the block.

---

## Quick Reference

| Item | Value |
|------|-------|
| **VPS IP** | `31.220.21.69` |
| **Container** | `gene-anthony-ray` |
| **Network** | `coolify` |
| **Port** | `3000` |
| **DB Path (VPS)** | `/apps/gene-anthony-ray/data/petition.db` |
| **Volume Mount** | `-v /apps/gene-anthony-ray/data:/app/data` |
| **GitHub** | `ra3va/gene-anthony-ray` |
| **Primary Domain** | `geneanthonyray.com` |
| **Fallback Domain** | `gene-anthony-ray.re-app.space` |
| **CB9 Office** | (212) 864-6200 / cb9m.org |
| **Council District** | 9 (Yusef Salaam) |

### Docker Run Command
```bash
docker run -d --name gene-anthony-ray --restart unless-stopped --network coolify \
  -v /apps/gene-anthony-ray/data:/app/data \
  -l 'traefik.enable=true' \
  -l 'traefik.http.routers.gene-anthony-ray.rule=Host(`geneanthonyray.com`) || Host(`www.geneanthonyray.com`) || Host(`gene-anthony-ray.re-app.space`)' \
  -l 'traefik.http.routers.gene-anthony-ray.entrypoints=https' \
  -l 'traefik.http.routers.gene-anthony-ray.tls.certresolver=letsencrypt' \
  -l 'traefik.http.services.gene-anthony-ray.loadbalancer.server.port=3000' \
  gene-anthony-ray
```

---

## Project Status

### Working Features
- ✅ Cinematic petition landing page (hero, bio, legacy, map, petition form)
- ✅ SQLite signature database with persistent Docker volume
- ✅ Server Actions for form submission (no API routes needed)
- ✅ Live signature counter + gold progress bar in hero
- ✅ Privacy-first display (First Name, Last Initial only)
- ✅ Custom domain with SSL (geneanthonyray.com)
- ✅ 302 redirects from re-app.space and www
- ✅ Scroll-triggered animations
- ✅ Mobile-responsive design
- ✅ Ra Thriva footer credit

### Known Issues
- Progress bar threshold set to 0 (should be 10 for production)
- No admin dashboard for viewing full signature data
- Browser cache from brief 301 typo (self-resolves in hours)

---

## Session Logs
- [2026-04-22: SQLite/Domain/CB9 Integration](sessions/2026-04-22_13-21-00_sqlite-domain-cb9-integration.md)

---

## Next Session Priorities
1. Test end-to-end petition submission on live domain
2. Bump progress bar threshold to 10 once signatures start coming in
3. Consider admin route (`/admin`) for viewing full signature data
4. SEO optimization (meta tags, Open Graph for social sharing)
5. Possibly add a "Share this petition" section with pre-written social copy
