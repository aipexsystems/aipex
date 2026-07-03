# AIPEX Deployment Strategy

Hosting:

Cloudflare Pages

Source Control:

GitHub

Branching:

main
develop
feature/*

---

Pipeline:

Developer
↓

Pull Request
↓

GitHub Actions

↓

Preview Deployment

↓

Review

↓

Merge to Main

↓

Production Deployment

---

Domains:

Production:

aipexsystems.org

Staging:

staging.aipexsystems.org

Development:

localhost:3000

---

Backups:

- GitHub repository
- Cloudflare configuration exports
- Environment variable documentation

---

Monitoring:

- Plausible Analytics
- Cloudflare Analytics
- Uptime monitoring

---

Rollback Strategy:

Every deployment must be reversible.

Never deploy without a known-good state.
