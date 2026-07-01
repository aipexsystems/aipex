# AIPEX Component Inventory

Version: 1.0
Status: Approved

---

# Purpose

Establish a reusable component system that prioritizes:

- Consistency
- Accessibility
- Performance
- Maintainability
- Future scalability

Rule:

Every component should solve a recurring problem.

No one-off UI implementations.

---

# Global Layout Components

## AppShell

Purpose:

Defines global page structure.

Contains:

- Navigation
- Main content area
- Footer

Usage:

Every page.

---

## Container

Variants:

- narrow (768px)
- standard (1280px)
- wide (1440px)

Purpose:

Maintain readable content widths.

---

## Section

Properties:

- background
- spacing
- id
- divider

Purpose:

Standardize vertical rhythm.

---

# Navigation Components

## Navbar

Contains:

- Logo
- Primary navigation
- CTA button
- Mobile menu

Pages:

- Home
- Services
- Industries
- Case Studies
- About
- Contact

---

## MobileMenu

Features:

- Slide-out drawer
- Accessible keyboard controls
- Focus trapping

---

## Footer

Contains:

- Company information
- Navigation links
- Social links
- Legal links
- Contact information

---

# Hero Components

## HeroSection

Props:

- headline
- subheadline
- primaryCTA
- secondaryCTA
- backgroundVariant

Usage:

All major pages.

---

## CredibilityBar

Displays:

- Industries served
- Trust indicators
- Metrics
- Certifications

---

# Service Components

## ServiceCard

Displays:

- Service name
- Description
- Outcomes
- Investment range
- CTA

---

## ServiceLadder

Visual Flow:

Digital Foundation
↓
Growth Operations
↓
Enterprise Transformation
↓
Managed Services

---

## PricingTier

Contains:

- Name
- Price range
- Deliverables
- Outcomes
- CTA

---

# Industry Components

## IndustryCard

Displays:

- Industry name
- Challenges
- Outcomes
- CTA

---

## ChallengeList

Purpose:

Highlight operational pain points.

---

## OutcomeGrid

Purpose:

Display measurable business improvements.

---

# Content Components

## SectionHeader

Props:

- eyebrow
- title
- description

---

## QuoteBlock

Purpose:

Testimonials and key statements.

---

## MetricCard

Displays:

- Value
- Label
- Supporting context

Examples:

- Hours saved
- Revenue growth
- Customer satisfaction

---

## Timeline

Used for:

- Process explanations
- Implementation roadmaps
- Transformation journeys

---

# Process Components

## ProcessFlow

Steps:

Discover
↓
Design
↓
Build
↓
Optimize

---

## StepCard

Displays:

- Step number
- Title
- Description

---

# Case Study Components

## CaseStudyCard

Contains:

- Industry
- Challenge
- Solution
- Results

---

## ResultsGrid

Displays:

- Metrics
- Business outcomes
- Improvements

---

# Contact Components

## ContactForm

Fields:

- Name
- Company
- Role
- Email
- Phone
- Industry
- Challenges
- Desired outcomes

Requirements:

- Server-side validation
- Accessible labels
- Error handling
- Spam protection

---

## DiscoveryChecklist

Purpose:

Help prospects determine fit.

---

# Call-To-Action Components

## CTASection

Variants:

- light
- dark
- accent

Contains:

- Headline
- Description
- Primary button
- Secondary button

---

## InlineCTA

Used inside content sections.

---

# Design System Components

## Button

Variants:

- primary
- secondary
- ghost
- outline
- danger

Sizes:

- small
- medium
- large

---

## Card

Variants:

- default
- elevated
- bordered

---

## Badge

Variants:

- success
- warning
- neutral
- accent

---

## Input

Requirements:

- Accessible labels
- Validation states
- Helper text
- Error messages

---

## Select

Requirements:

- Keyboard accessibility
- Mobile support

---

## TextArea

Requirements:

- Character limits
- Validation support

---

# Motion Standards

Allowed:

✓ Fade-in transitions

✓ Hover states

✓ Subtle transforms

✓ Micro-interactions

Forbidden:

✗ Auto-playing animations

✗ Parallax effects

✗ Heavy motion

✗ Decorative complexity

---

# Accessibility Standards

Every component must support:

✓ Keyboard navigation

✓ Screen readers

✓ Visible focus states

✓ Reduced motion preferences

✓ WCAG AA compliance

---

# Performance Standards

Rules:

- Lazy-load non-critical content.
- Optimize images.
- Minimize JavaScript.
- Prefer server components.
- Avoid unnecessary client state.

---

# Future Components

Potential additions:

- TestimonialCarousel
- DashboardPreview
- ComparisonTable
- ResourceLibrary
- FAQAccordion
- NewsletterSignup
- PlatformShowcase

Only add after genuine business need exists.

---

# Component Doctrine

If a pattern appears twice,
it becomes a component.

If a component appears across services,
it becomes part of the design system.

If a design system creates leverage,
it becomes a product asset.
