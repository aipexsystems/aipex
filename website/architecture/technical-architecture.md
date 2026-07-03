# AIPEX Website Technical Architecture

Version: 1.0
Status: Approved

---

# Purpose

The AIPEX website is a business asset designed to:

- Generate qualified discovery conversations
- Establish trust and authority
- Demonstrate industry specialization
- Create reusable marketing infrastructure

The website is a product, not a brochure.

---

# Technology Stack

Framework:
Next.js 15 (App Router)

Language:
TypeScript (Strict Mode)

Styling:
TailwindCSS v4

Icons:
Lucide

Forms:
Server Actions + Resend

Analytics:
Plausible

Deployment:
Cloudflare Pages

CI/CD:
GitHub Actions

---

# Application Architecture

website/app/

src/
├── app/
├── components/
├── lib/
├── content/
├── styles/
└── types/

---

# Route Structure

/

/services

/industries

/case-studies

/about

/contact

---

# Component Organization

components/

layout/
- Navbar
- Footer
- Container
- Section

marketing/
- HeroSection
- ServiceCard
- IndustryCard
- CTASection
- ProcessFlow

forms/
- ContactForm
- DiscoveryChecklist

ui/
- Button
- Card
- Badge
- Input
- Select
- TextArea

---

# Rendering Strategy

Use Server Components by default.

Only use Client Components when required for:

- Forms
- Interactive menus
- Animations
- Browser APIs

Principle:

Ship less JavaScript.

---

# Content Strategy

All marketing copy should live in:

src/content/

Benefits:

- Version control
- Easy reuse
- Better testing
- Future CMS migration

---

# Validation Standards

Use:

Zod

Validation layers:

- Client-side UX validation
- Server-side authoritative validation

---

# Security Standards

Requirements:

- CSP headers
- HTTPS only
- Secure form handling
- Environment variable isolation
- Rate limiting
- Spam protection

Security is a feature.

---

# Performance Philosophy

Target:

Lighthouse:

Performance: 100

Accessibility: 100

SEO: 100

Best Practices: 100

---

# Engineering Doctrine

Prefer:

- Simplicity
- Reusability
- Documentation
- Server rendering
- Accessibility

Avoid:

- Premature abstraction
- Heavy client state
- Complex animations
- Unnecessary dependencies

---

# AIPEX Doctrine

Beautiful software should solve real business problems.

Documentation compounds.

Projects become platforms.

Platforms become products.
