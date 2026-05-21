# Mundo Mágico — SEO, GEO & AI Search Strategy
## Executive Summary
Mundo Mágico is an esoteric shop and spiritual services brand based in Aveiro, Portugal, operating at [mundo-magico-theta.vercel.app](https://mundo-magico-theta.vercel.app). The site sells ritual candles, crystals, herbs, amulets, and offers services including Tarot de Marseille readings, astrological charts, spiritual cleansings, and multi-night binding rituals. As of May 2026, the site is hosted on a Vercel subdomain — a signal of either a development/staging phase or a lean infrastructure setup.

The brand has a well-defined mystical tone and a clear product/service offering, but the current digital presence lacks the **page depth, topical authority, and technical SEO structure** needed to compete in Portugal's growing esoteric search landscape. This report provides a full keyword strategy, competitor overview, page architecture, GEO/AI citation recommendations, content briefs, and a phased execution plan.

**Fastest wins:**
- A dedicated local page for "Tarot em Aveiro"
- A service page for "Limpeza Espiritual Portugal"
- Product category pages for "Velas Rituais" and "Velas Esotéricas"
- A Google Business Profile (local SEO anchor)
- Adding structured data: `LocalBusiness`, `FAQPage`, `Article`

***
## Site Audit
### Current Strengths
- Clear brand positioning around ancestral tradition and anti-scam credibility
- Strong service offer across Tarot, cleansing, ritual products, and consultations
- Multi-channel social presence (Facebook, Instagram, TikTok) linking to the site
- Direct WhatsApp conversion funnel, which suits the Portuguese market
### Current Weaknesses
- **Hosted on a Vercel subdomain**: `mundo-magico-theta.vercel.app` — this staging URL will not rank well; the business needs a dedicated `.pt` or `.com` domain for SEO authority
- **No evidence of a blog or content hub**: no educational articles, how-to guides, or FAQ sections that are critical for AI citation and long-tail ranking
- **No visible structured data**: no `LocalBusiness`, `FAQPage`, `Product`, or `Organization` schema markup detected
- **No author or practitioner credibility page**: Google and AI systems evaluate who wrote content and why they are qualified (E-E-A-T)
- **Content is short and promotional**: paragraphs describe products but don't answer real customer questions in enough depth for AI citation eligibility
- **Internal linking absent**: no clear hierarchy between homepage, service pages, and product categories
- **No `robots.txt` or `llms.txt`**: AI crawlers (GPTBot, ClaudeBot, PerplexityBot) need guidance on what to crawl and cite

***
## Competitor Review
| Competitor | Strengths | Keyword focus | What to learn |
|---|---|---|---|
| **lojadasvelas.pt** | Broad product catalog, clear category URLs, multiple location pages | Velas, defumadores, cristais, tarots, artigos cemitério | Category structure, URL taxonomy, product naming |
| **Espiral de Vida (Aveiro)** | Dominant for local Tarot in Aveiro, dedicated service pages, cleaner URL structure | Leitura de cartas Aveiro, consulta tarot Aveiro | Local page depth, service-focused copy |
| **Universo com Alma** | Rich service page copy, emotional narrative, practitioner story | Limpeza energética espiritual | Long-form service descriptions, testimonial signals |
| **Ordem dos Magos** | Dedicated educational content for banhos de limpeza, internal blog with how-to guides | Banhos de limpeza espiritual, rituais | Content hub model, informational intent |
| **Loja Estrela** | FAQ section on homepage, clear product categories, international shipping info | Produtos esotéricos, defumadores, velas | FAQ schema opportunity, category labeling |
| **Mercadinho Mágico** | Dedicated product page for banho limpeza espiritual with descriptions | Banho limpeza espiritual | Product + informational hybrid page format |

The key gap for Mundo Mágico is the **combination of local Aveiro authority + national product/service topical depth + educational content**. No single competitor holds all three.

***
## Keyword Strategy
### How Keywords Were Scored
Keywords were assessed using evidence from current organic search results in Portugal, mapped to search intent categories, and scored based on: (1) business priority (1–5), (2) relative difficulty based on current organic competition, and (3) a composite opportunity index.

**41 keywords across 12 clusters** were identified — see the downloadable master sheet below.
### Top Priority Keywords by Cluster
| Keyword | Cluster | Intent | Priority | Difficulty | Opportunity |
|---|---|---|---|---|---:|
| consulta tarot aveiro | Tarot Local | Local service | 5 | Low | 75 |
| tarot aveiro | Tarot Local | Local service | 5 | Low-Medium | 70 |
| limpeza espiritual portugal | Limpeza Espiritual | Service/info | 5 | Low-Medium | 70 |
| loja esotérica aveiro | Loja Esotérica | Local/commercial | 5 | Low-Medium | 70 |
| banho limpeza espiritual | Banhos de Ervas | Informational/product | 5 | Low-Medium | 70 |
| velas rituais portugal | Velas Rituais | Product category | 5 | Medium | 65 |
| velas esotéricas portugal | Velas Rituais | Product category | 5 | Medium | 65 |
| limpeza espiritual aveiro | Limpeza Espiritual | Local service | 4 | Low | 65 |
| ervas e defumadores portugal | Ervas & Defumadores | Product category | 4 | Low | 65 |
| banho de ervas espiritual | Banhos de Ervas | Informational | 4 | Low-Medium | 60 |
### Difficulty Landscape
78% of the identified keywords sit in the **Low** or **Low-Medium** difficulty range, meaning early-mover advantage is still available in this niche in Portugal. The highest-difficulty cluster is "Loja Esotérica Portugal" (broad national commercial), which should be targeted long-term via brand-building and domain authority, not immediately.

***
## Recommended Site Architecture
A clean, crawlable URL structure that maps one page per keyword cluster, enabling Google to understand topical authority across the site.

```
/ (Homepage)
  ├── /consulta-tarot-aveiro
  ├── /consulta-tarot-online
  ├── /limpeza-espiritual
  ├── /mapa-astrologico
  ├── /velas-rituais
  │     ├── /velas-rituais/amor
  │     ├── /velas-rituais/protecao
  │     └── /velas-rituais/vela-7-dias
  ├── /velas-esotericas
  ├── /ervas-e-defumadores
  │     ├── /ervas-e-defumadores/pau-santo
  │     └── /ervas-e-defumadores/arruda
  ├── /cristais
  │     ├── /cristais/protecao
  │     └── /cristais/ametista
  ├── /amuletos-protecao
  ├── /loja-esoterica-aveiro
  ├── /sobre-nos
  ├── /testemunhos
  └── /blog
        ├── /blog/como-fazer-limpeza-espiritual-em-casa
        ├── /blog/banho-limpeza-espiritual
        ├── /blog/banho-de-ervas-espiritual
        ├── /blog/ervas-para-banho-espiritual
        ├── /blog/para-que-servem-velas-rituais
        ├── /blog/como-escolher-velas-rituais
        ├── /blog/defumacao-espiritual
        ├── /blog/simpatia-para-amor
        ├── /blog/ritual-para-protecao-espiritual
        ├── /blog/como-usar-cristais-espirituais
        └── /blog/o-que-e-limpeza-espiritual
```

***
## 12 Priority Content Briefs
### 1. Consulta de Tarot em Aveiro (Service Page)
- **Primary keyword:** consulta tarot aveiro / tarot aveiro
- **Secondary:** leitura de cartas aveiro, taróloga aveiro
- **Intent:** Local service, transactional
- **Audience need:** Find a trusted tarot reader in Aveiro for an in-person consultation
- **Angle:** Only practitioner in Aveiro combining Tarot de Marseille with ancestral tradition — in-person and online
- **Outline:** H1 intro → What to expect in a session → Types of reading (love, career, spiritual path) → Duration and pricing → How to book (WhatsApp + calendar) → FAQ (How long? Online? Do I need to prepare?) → Testimonials
- **Trust elements:** Practitioner bio, certification/experience, specific methodology named
- **Internal links to/from:** Homepage, Limpeza Espiritual page, About page
- **CTA:** "Marcar Consulta via WhatsApp"
### 2. Limpeza Espiritual (Service Page)
- **Primary keyword:** limpeza espiritual portugal / limpeza espiritual aveiro
- **Secondary:** limpeza energética espiritual, como funciona limpeza espiritual
- **Intent:** Service / informational hybrid
- **Audience need:** Understand what spiritual cleansing is and how to book a session
- **Angle:** Ancestral ritual with herbs and smoke — not a wellness gimmick
- **Outline:** H1 intro → What is spiritual cleansing → When to seek it (signs of energetic blockage) → The ritual process → Duration, pricing, preparation → FAQ → Book a session
- **Trust elements:** Named tradition, practitioner credentials, before/after narrative from a real case
- **Internal links:** Ervas e Defumadores, Banho Limpeza Espiritual blog, Testimonials
- **CTA:** "Agendar Limpeza via WhatsApp"
### 3. Velas Rituais — Category Page
- **Primary keyword:** velas rituais portugal / velas esotéricas portugal
- **Secondary:** vela ritual amor, vela 7 dias, vela para proteção
- **Intent:** Commercial / product discovery
- **Audience need:** Browse and buy ritual candles for specific intentions
- **Angle:** Each candle is a tool with a specific ancestral purpose — not decoration
- **Outline:** Category intro (2-3 sentences) → Filter by intention (amor, proteção, prosperidade, saúde) → Product cards with name, intention, price → How to use ritual candles (brief) → FAQ (How long should I burn? Can I combine intentions?) → CTA to each product page
- **Trust elements:** Explain what makes a ritual candle different from a regular one
- **Internal links:** Velas individuais, Ervas e Defumadores, Blog "Para Que Servem"
- **CTA:** "Comprar Vela Ritual"
### 4. Banho de Limpeza Espiritual (Blog + Collection)
- **Primary keyword:** banho limpeza espiritual
- **Secondary:** banho de ervas espiritual, como fazer banho espiritual, ervas para banho espiritual
- **Intent:** Informational with strong product adjacency
- **Audience need:** Learn how to prepare a spiritual bath at home
- **Angle:** Step-by-step ritual guide from an ancestral tradition practitioner with product links for herbs
- **Outline:** What is a spiritual bath → Why use it → Types (protection, love, prosperity, cleansing) → Step-by-step guide → What herbs to use → Common mistakes → FAQ (Can I do it every day? At night or morning?) → Shop the herbs
- **Trust elements:** Practitioner voice, named tradition, herb sourcing information
- **Internal links:** Ervas e Defumadores, Limpeza Espiritual service page, Cristais
- **CTA:** "Ver Ervas para Banho Espiritual"
### 5. Ervas e Defumadores — Category Page
- **Primary keyword:** ervas e defumadores portugal
- **Secondary:** pau santo portugal, arruda espiritual, defumação espiritual
- **Intent:** Product category
- **Audience need:** Buy authentic ritual herbs and defumadores
- **Angle:** Curated selection of ancestral herbs — each with a specific energetic purpose
- **Outline:** Category intro → Subcategory navigation (Ervas, Defumadores, Incensos) → Product cards → Brief guide on how to choose herbs for your intention → FAQ → Internal links
- **Trust elements:** Sourcing story, traditional use context per herb
- **Internal links:** Banho Limpeza Espiritual blog, Limpeza Espiritual service page
- **CTA:** "Comprar Ervas e Defumadores"
### 6. Mapa Astral / Astrologia (Service Page)
- **Primary keyword:** mapa astral aveiro / astrologia portugal
- **Secondary:** leitura mapa natal, mapa astral online portugal
- **Intent:** Local and national service
- **Audience need:** Get a professional astrological chart reading
- **Outline:** What is a natal chart → What it reveals → Session format (online/in-person) → Price and duration → Book via WhatsApp → FAQ
- **Trust elements:** Practitioner methodology, example of what the reading covers
- **Internal links:** Tarot service page, About, Testimonials
- **CTA:** "Solicitar Leitura de Mapa Astral"
### 7. Para Que Servem as Velas Rituais (Blog)
- **Primary keyword:** para que servem as velas rituais
- **Secondary:** como usar velas rituais, cores das velas rituais
- **Intent:** Informational, pre-purchase
- **Audience need:** Understand ritual candle purposes before buying
- **Outline:** Introduction → History and tradition → Meaning of each color → How to choose for your intention → How to burn correctly → FAQ → Product links
- **Trust elements:** Named tradition, practitioner voice throughout
- **Internal links:** Velas Rituais category, Velas specific product pages
- **CTA:** "Ver a Nossa Coleção de Velas Rituais"
### 8. Como Fazer Limpeza Espiritual em Casa (Blog)
- **Primary keyword:** como fazer limpeza espiritual em casa
- **Secondary:** limpeza energética casa, defumação em casa
- **Intent:** Informational / how-to
- **Audience need:** DIY spiritual cleansing guide
- **Outline:** What you need → Step by step (open windows → light herbs → walk the space → close with intention) → Best days/times → What to avoid → When to call a professional → FAQ → Product links
- **Trust elements:** Named ancestral techniques, practitioner guidance
- **Internal links:** Limpeza Espiritual service page, Ervas e Defumadores, Defumação article
- **CTA:** "Explorar Kit de Limpeza Espiritual"
### 9. Defumação Espiritual — O Que É e Como Fazer (Blog)
- **Primary keyword:** defumação espiritual
- **Secondary:** como defumar casa, defumação com ervas, defumação com pau santo
- **Intent:** Informational / product adjacency
- **Audience need:** Learn the ritual of defumação — how and why
- **Outline:** History of defumação → Types (herbs, resins, defumadores) → How to defumar a space step by step → Choosing the right herbs by intention → FAQ
- **Trust elements:** Named traditions (African diaspora, indigenous, pagan)
- **Internal links:** Pau Santo product page, Ervas category, Limpeza Espiritual service
- **CTA:** "Comprar Defumadores e Ervas"
### 10. Sobre Nós — Practitioner + Brand Story (About Page)
- **Primary keyword:** sobre rituais esotéricos tradição / mundo mágico aveiro
- **Intent:** Trust / E-E-A-T signal
- **Audience need:** Understand who is behind Mundo Mágico and why to trust them
- **Outline:** Origin story → Practitioner background and training → Philosophy (no shortcuts, ancestral tradition) → How the shop started in Aveiro → Mission and values → Contact and booking
- **Trust elements:** Real name, practitioner photo, years of experience, specific lineages or training
- **Internal links:** Homepage, Tarot service, Limpeza service, Testimonials
- **CTA:** "Marcar Consulta"
### 11. Testemunhos (Social Proof Page)
- **Primary keyword:** testemunhos limpeza espiritual / avaliações mundo mágico
- **Intent:** Commercial / trust
- **Audience need:** Read real customer experiences before booking
- **Outline:** Introduction → Testimonials by service type (Tarot, Limpeza, Rituais) → Star ratings where applicable → CTA
- **Trust elements:** Real names (with permission), specific service referenced, outcome described
- **Internal links:** Each service page, About
- **CTA:** "Marcar a Tua Consulta"
### 12. Loja Esotérica em Aveiro (Local Landing Page)
- **Primary keyword:** loja esotérica aveiro
- **Secondary:** produtos esotéricos aveiro, cristais aveiro, velas rituais aveiro
- **Intent:** Local commercial
- **Audience need:** Find an esoteric shop in or near Aveiro
- **Outline:** Opening statement → Location (Santa Joana, Aveiro) → What the shop offers → Services and products → Opening hours / contact → Google Maps embed → Link to Google Business Profile → FAQ (Do you offer online? Do you ship?)
- **Trust elements:** Physical address, opening hours, local photos
- **Internal links:** All product categories, all service pages, About
- **CTA:** "Visitar a Loja / Contactar via WhatsApp"

***
## GEO & AI Search Optimization
Google's guidance confirms there are **no special technical requirements for AI Overview citation** — pages must simply be indexed and snippet-eligible in standard Search. However, content structure and entity clarity significantly influence AI citation probability.
### Answer-First Writing (Atomic Answers Format)
AI engines extract information from the first third of articles 44.2% of the time. Every page should begin with a **40–55 word direct answer** to the primary question before expanding into context. Every H2 heading should double as a standalone statement or question that an AI could surface as a citation.
### Structured Data Stack
The minimum viable schema stack for AI citation eligibility is:
- `LocalBusiness` on homepage and local landing page (with `@id`, `name`, `address`, `openingHours`, `telephone`)
- `FAQPage` on all service pages and blog posts
- `Article` or `BlogPosting` on all blog content
- `Person` schema for the practitioner (linked to About page)
- `Organization` for the brand entity
- `Product` schema on all product pages
### `llms.txt` File
Create a `/llms.txt` file at the site root listing the site's most important pages with short descriptions. This guides AI crawlers (GPTBot, ClaudeBot, PerplexityBot) to the highest-value content first. Include only pages with 500+ words and direct, answer-dense content. Update quarterly.
### E-E-A-T Signals
Google and AI systems evaluate Experience, Expertise, Authoritativeness, and Trustworthiness. For Mundo Mágico this means:
- Named practitioner with photo, credentials, and experience on the About page
- Consistent brand name across all social profiles and directories
- Links from Portuguese spiritual directories, local business directories, and press
- Real customer testimonials with specifics (service, outcome, name)
- Clear "last updated" timestamps on all articles
### Crawler Accessibility
Ensure `robots.txt` does **not** block `Googlebot`, `Googlebot-Extended`, `GPTBot`, `ClaudeBot`, or `PerplexityBot`. Google is explicit: if its crawler cannot crawl, render, and index a page, that page cannot appear in AI Overviews regardless of content quality.
### Freshness
Refresh cornerstone content every 60 days with updated data, new insights, and a visible "Last updated" timestamp. 88% of Google AI Overviews cite three or more sources — this means content that is comprehensive, specific, and factual is statistically more likely to be pulled.
### FAQ & Comparison Pages
AI engines rely heavily on clear Q&A pairs when building responses. Every service page should have a structured FAQ section with at least 5 genuine customer questions. Comparison pages ("Tarot vs Astrologia — Qual Escolher?") also perform well in AI summaries.

***
## Technical Fixes Checklist
| Priority | Fix | Why |
|---|---|---|
| 🔴 Critical | Move to a custom domain (`.pt` or `.com`) | Subdomain blocks SEO authority |
| 🔴 Critical | Submit `sitemap.xml` to Google Search Console | Required for indexation discovery |
| 🔴 Critical | Add `LocalBusiness` JSON-LD schema to homepage | AI and local search eligibility |
| 🔴 Critical | Verify `robots.txt` allows all major crawlers | AI citation blocked if crawlers are blocked |
| 🟠 High | Add `FAQPage` schema to service pages | Rich results + AI Overview eligibility |
| 🟠 High | Add `Article` schema to all blog posts | AI citation eligibility |
| 🟠 High | Add `Person` schema to About page | E-E-A-T and Knowledge Graph signals |
| 🟠 High | Create `/llms.txt` | AI crawler guidance |
| 🟡 Medium | Optimize Core Web Vitals (LCP, INP, CLS) | Pages that take 5s+ to load won't appear in AI Overviews |
| 🟡 Medium | Add `alt` text to all product and service images | Crawlability and accessibility |
| 🟡 Medium | Add canonical URLs across all pages | Prevent duplicate content dilution |
| 🟡 Medium | Create and verify Google Business Profile | Local SEO anchor for Aveiro |

***
## 30-Day Execution Plan
### Week 1 — Foundation
- Register a custom domain and migrate the site from Vercel subdomain
- Set up Google Search Console + Google Analytics 4
- Create and submit `sitemap.xml`
- Write and verify `robots.txt` allowing all crawlers
- Create Google Business Profile for Mundo Mágico in Aveiro
### Week 2 — Core Pages
- Build `/consulta-tarot-aveiro` service page using Brief #1 above
- Build `/limpeza-espiritual` service page using Brief #2
- Add `LocalBusiness`, `FAQPage`, and `Person` JSON-LD to homepage and About page
- Rewrite homepage title tag, H1, and meta description for "Loja Esotérica Aveiro"
### Week 3 — Products + Blog
- Build `/velas-rituais` and `/ervas-e-defumadores` category pages
- Publish first 2 blog articles: Banho Limpeza Espiritual + Para Que Servem as Velas Rituais
- Add `Article` and `FAQPage` schema to blog posts
- Create `/llms.txt` listing top 8–10 priority pages
### Week 4 — Authority + Links
- Build `/sobre-nos` with full practitioner bio and `Person` schema
- Build `/testemunhos` page with real client testimonials
- Publish 2 more blog articles: Defumação Espiritual + Como Fazer Limpeza Espiritual em Casa
- Submit listing to Portuguese business directories (SAPO, Bing Places, Fixando)
- Share all new content across Instagram, TikTok, and Facebook

***
## 90-Day Roadmap
### Month 1 (Days 1–30)
Core domain, technical foundation, top 4 service/category pages, first 4 blog articles, local SEO setup — as above.
### Month 2 (Days 31–60)
- Complete all 12 content briefs from this report
- Build full product pages for top products (Vela Ritual Amor, Vela 7 Dias, Ametista, Pau Santo)
- Add `Product` schema to all individual product pages
- Build topic cluster internal linking: each blog article links to 2+ service/category pages
- Pursue 5+ backlinks from Portuguese spiritual, wellness, and local directories
- Begin Google AI Overview monitoring: test target queries in Google and track which pages appear
- Refresh the 4 articles from Month 1 with new data or expanded FAQ sections
### Month 3 (Days 61–90)
- Publish 6 additional secondary blog articles (ervas para banho, cristais proteção, ritual para amor, etc.)
- Build `/cristais` category and key product pages
- Launch comparison content: "Tarot vs Astrologia", "Limpeza Espiritual vs Banho de Ervas"
- Pursue Wikipedia, Wikidata, or structured knowledge-base mentions for brand entity clarity
- Analyze Search Console data: identify pages with impressions but low CTR and optimize title tags
- Track AI citation frequency across Google AI Overviews, Perplexity, and ChatGPT for top keywords
- Update `llms.txt` with newly published high-quality pages

***
## Key Success Metrics to Track
| Metric | Tool | Target at 90 days |
|---|---|---|
| Indexed pages | Google Search Console | 20+ pages indexed |
| Local visibility | Google Business Profile | Appearing in "Tarot Aveiro" local pack |
| AI citation frequency | Manual testing (Perplexity, ChatGPT, Google AI Overviews) | Cited for 3+ target queries |
| Organic impressions | Search Console | 500+ monthly impressions |
| CTR on top pages | Search Console | 3%+ average on commercial pages |
| WhatsApp contacts from organic | GA4 + UTM tags | Measurable increase vs. baseline |
| Blog content published | Internal tracking | 12 articles live |