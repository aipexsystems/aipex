# ADR-002: Website Technology Stack

Status: Accepted

Date: 2026-07-02

## Context

The AIPEX website must optimize for:

- Performance
- Accessibility
- Maintainability
- SEO
- Reusability
- Low operational complexity

## Decision

Adopt:

- Next.js 15 (App Router)
- TypeScript (strict mode)
- TailwindCSS v4
- Lucide Icons
- Resend for forms
- Plausible Analytics
- Cloudflare Pages

## Consequences

Positive:

- Excellent performance
- Strong developer experience
- Simple deployments
- Reusable component system
- Long-term maintainability

Negative:

- Requires TypeScript discipline
- Initial setup complexity

## Alternatives Considered

- Astro
- WordPress
- Webflow
- Pure static HTML

Rejected because they either reduced flexibility or increased operational burden.
