# BUSCOBUSINESS.COM — Site Documentation for Strategic Review

**URL:** https://venture-quest-io.lovable.app  
**Last updated:** February 2026  
**Languages:** ES (default), CA, FR, EN  
**Tech stack:** React + Vite + Tailwind CSS + TypeScript, i18next, Framer Motion  
**Backend:** None (forms log to console, no database)

---

## 1. SITE MAP

```
/                    → Homepage (Index)
/comprar             → Buy a Business (listings)
/negocio/:id         → Business Detail (9 listings)
/vender              → Sell Your Business (advisory + form)
/nosotros            → About Us
/aviso-legal         → Legal Notice
/privacidad          → Privacy Policy
/cookies             → Cookies Policy
```

**Global navigation (Navbar):** Comprar | Vender | Sobre nosotros | Language selector (ES/CA/FR/EN)  
**Footer:** Navigation + Legal links + Contact (info@buscobusiness.com, +376 337 670) + Disclaimer

---

## 2. PAGE-BY-PAGE DOCUMENTATION

---

### 2.1 HOMEPAGE (`/`)

**Page goal:** Establish positioning as a structured advisory marketplace (not a classifieds portal), convert visitors into sellers or qualified buyers.

**Target audience:** Business owners considering selling; entrepreneurs/investors looking to buy SMEs.

**Sections in order:**

| # | Section | Copy | CTAs/Links |
|---|---------|------|-----------|
| 1 | **Hero** | H1: *"No es un portal de anuncios. Es el lugar donde los negocios se preparan y se venden bien."* · Sub: *"Convertimos empresas en oportunidades estructuradas, comprensibles e invertibles."* | "Vender mi negocio" → /vender · "Explorar oportunidades" → /comprar |
| 2 | **Problem** | H2: *"El problema"* · Left card: *"Vender sin preparar destruye valor"* — *"Publicar un anuncio y esperar no es vender. Sin estructura financiera ni preparación, el comprador desconfía y el precio se negocia a la baja."* · Right card: *"Comprar sin estructura aumenta el riesgo"* — *"Interpretar datos incompletos, asumir riesgos ocultos y tomar decisiones sin criterio homogéneo es la norma en la mayoría de plataformas."* | None |
| 3 | **For Sellers** | Label: *"Para vendedores"* · H2: *"Para quienes quieren vender bien"* · Bullets: Organiza tu negocio antes de salir al mercado / Entiende qué estás vendiendo realmente / Presenta la empresa con criterios financieros claros / Maximiza valor y reduce fricción · Key phrase: *"No publicas un anuncio. Construyes una transacción."* · Visual: 4 icon cards (Documentación, Análisis, Valoración, Transacción) | "Preparar mi negocio" → /vender |
| 4 | **For Buyers** | Label: *"Para compradores"* · H2: *"Para quienes quieren comprar con criterio"* · Bullets: Entiende el modelo de negocio / Analiza riesgos y retornos / Compara empresas con criterios homogéneos / Toma decisiones con insight financiero real · Key phrase: *"No compras a ciegas. Compras con claridad."* · Visual: 3 feature bars (Modelo de negocio explicado, Análisis de riesgos, Criterios comparables) | "Encontrar negocios" → /comprar |
| 5 | **Differentiation** | H2: *"Nuestra diferencia"* · Sub: *"Buscobusiness combina marketplace curado, análisis financiero de nivel CFO, preparación de empresas y acompañamiento en decisiones."* · 4 pillars: Marketplace curado / Análisis CFO / Preparación previa / Acompañamiento · Closing statements: *"Un negocio no se vende bien porque se publica."* / *"Se vende bien cuando se prepara."* | None |
| 6 | **Featured Businesses** | H2: *"Negocios destacados"* · Carousel of listings | Each card → /negocio/:id |
| 7 | **Final Statement** | *"Convertimos empresas en oportunidades invertibles."* · Sub: *"Claridad, estructura y ejecución para compradores y vendedores serios."* | None |

**Value proposition as expressed:** Advisory-first marketplace that prepares businesses before listing, providing structured financial analysis for informed decisions.

**Assumptions:**
- The market is full of low-quality listing portals
- Sellers don't know how to prepare their business for sale
- Buyers lack structured, comparable data
- Both sides value professionalism over speed/volume

---

### 2.2 BUY A BUSINESS (`/comprar`)

**Page goal:** Enable qualified buyers to browse, filter, and compare business listings using structured financial criteria.

**Target audience:** Entrepreneurs, investors, and SME acquirers seeking operating businesses.

**Sections:**

| # | Section | Copy | CTAs/Links |
|---|---------|------|-----------|
| 1 | **Hero** | H1: *"Encuentra negocios reales, no oportunidades vacías"* · Sub: *"Descubre empresas operativas con información financiera estructurada"* | — |
| 2 | **Features bar** | 3 cards: *"Negocios en funcionamiento"* / *"Información financiera clara"* / *"Enfoque en PYMES"* with descriptions | — |
| 3 | **Search & Filters** | H2: *"Buscar negocios"* · Filters: Tipo de operación (Comprar/Vender/Traspasar/Participar), Sector, Ubicación (España/Andorra/Internacional), Rango de precio, Rentabilidad mínima · Sort: Más recientes / Precio / Rentabilidad | — |
| 4 | **Listings grid** | Cards with: image, title, sector badge, operation type badge, description, price, profitability %, "Confidencial" badge if applicable | Each card → /negocio/:id |
| 5 | **Not finding?** | *"¿No encuentras lo que buscas?"* · *"Contáctanos y te ayudaremos a encontrar el negocio perfecto para ti"* | "Contactar" (no action defined) |
| 6 | **Publish card** | *"Publica tu negocio"* — inline mini-form to create a listing (title, operation type, sector, price, description) | "Publicar anuncio" (console log only) |

**Current listings (9 businesses):**

| ID | Name | Sector | Price | Profitability | Operation | Confidential |
|----|------|--------|-------|---------------|-----------|-------------|
| la-borda | La Borda – Restaurant más antiguo de Andorra | Hostelería | 75.000 € | 43% | Traspaso | No |
| alpine-security | Alpine Security | Tecnología | 2.400.000 € | 18% | Participar | No |
| infinitypay | InfinityPay | Fintech | 1.084.964 € | 19% | Vender | No |
| confidencial-hosteleria | Confidencial – Hostelería | Hostelería | 180.000 € | 24% | Traspaso | Yes |
| confidencial-comercio | Confidencial – Comercio | Comercio | 320.000 € | 15% | Vender | Yes |
| confidencial-servicios | Confidencial – Servicios | Servicios | 450.000 € | 25% | Vender | Yes |
| confidencial-industria | Confidencial – Industria | Industria | 750.000 € | 23% | Participar | Yes |
| confidencial-tecnologia | Confidencial – Tecnología | Tecnología | 514.788 € | 27% | Participar | Yes |
| confidencial-restaurant-centro | Restaurant Centre del País | Hostelería | 150.000 € | 50% | Vender | No |

---

### 2.3 BUSINESS DETAIL (`/negocio/:id`)

**Page goal:** Provide deep financial and operational insight into a specific business; capture buyer leads via contact form.

**Target audience:** Serious buyers/investors evaluating a specific opportunity.

**Sections:**

| # | Section | Content |
|---|---------|---------|
| 1 | **Header** | Sector badge, business title, location (MapPin), sale price |
| 2 | **Image gallery** | Carousel with thumbnails |
| 3 | **Description** | Translated business description + key highlights (bullet list) |
| 4 | **KPIs** | Business-specific KPI cards (e.g., La Borda: 1790 history, 300K revenue, 43% profitability, 8 employees) |
| 5 | **Financial charts** | Revenue evolution (AreaChart), EBITDA evolution (BarChart), Revenue projection (BarChart), Portfolio distribution (PieChart), Client evolution (where applicable) |
| 6 | **Financial summary sidebar** | Revenue, EBITDA, Profitability, Employees, Years operating, Target revenue/EBITDA, % for sale |
| 7 | **Contact form** | Fields: Nombre, Email, Teléfono, Mensaje · Privacy checkbox (mandatory) · "Enviar mensaje" button |
| 8 | **Disclaimer** | *"Indicadores orientativos"* / *"Información estructurada"* / *"No sustituye una due diligence"* |

**CTAs:** "Enviar mensaje" (form submit → console log only), "Volver a la lista" → /comprar

---

### 2.4 SELL YOUR BUSINESS (`/vender`)

**Page goal:** Convert business owners into seller leads through a structured advisory pitch and validated contact form.

**Target audience:** SME owners considering selling, seeking professional guidance.

**Sections:**

| # | Section | Copy | CTAs |
|---|---------|------|------|
| 1 | **Hero** | H1: *"Vender bien no es publicar. Es preparar."* · Sub: *"Ayudamos a propietarios a estructurar, valorar y presentar su negocio para maximizar su valor y cerrar transacciones con éxito."* · Key phrase: *"No subes un anuncio. Construyes una transacción."* | — |
| 2 | **Value proposition** | H2: *"Por qué preparar tu negocio antes de vender"* · Sub: *"Un negocio mal preparado genera desconfianza, prolonga las negociaciones y reduce el precio final."* · 3 benefits: Confidencialidad total / Valoración realista / Preparación documental | — |
| 3 | **Process** | H2: *"Cómo funciona"* · 4 steps: 01 Análisis inicial → 02 Preparación → 03 Búsqueda cualificada → 04 Cierre exitoso | — |
| 4 | **Contact form** | H2: *"Inicia la conversación"* · Left: promises (100% confidencial, Sin compromiso, Asesoramiento experto) · Right: form (Nombre, Email, Teléfono, Empresa, Sector [select], Facturación [select: <500K to >10M], Mensaje, Privacy checkbox) | "Solicitar información confidencial" |
| 5 | **Final CTA** | H2: *"Tu negocio merece una venta a la altura"* · Sub: *"Empieza con una conversación confidencial. Sin compromiso."* | "Contactar ahora" → scrolls to #contacto |

**Form validation:** Zod schema with required fields + `privacyAccepted: z.literal(true)`.  
**Form action:** Console log only (no backend).

---

### 2.5 ABOUT US (`/nosotros`)

**Page goal:** Build trust and credibility; explain the team's expertise and values.

**Target audience:** Both buyers and sellers seeking reassurance about the platform's professionalism.

**Sections:**

| # | Section | Copy |
|---|---------|------|
| 1 | **Hero** | H1: *"Convertimos la complejidad en claridad"* · Sub: *"Somos el puente entre empresas que buscan nuevos dueños y decisores que buscan oportunidades reales. Con rigor financiero, preparación estructurada y acompañamiento experto."* |
| 2 | **Mission** | H2: *"Nuestra misión"* · *"Transformar cómo se compran y venden empresas en el mercado de PYMES..."* · Quote: *"Un negocio no se vende bien porque se publica. Se vende bien cuando se prepara."* |
| 3 | **Values** | H2: *"Nuestros valores"* · 3 cards: Confianza / Claridad / Excelencia |
| 4 | **Team/Expertise** | H2: *"Experiencia que marca la diferencia"* · Sub: *"Un equipo multidisciplinar con experiencia en M&A, finanzas corporativas y asesoría empresarial."* · 3 areas: Análisis Financiero / Asesoría Legal / Acompañamiento Estratégico |
| 5 | **Why Us** | H2: *"Por qué Buscobusiness"* · 3 reasons + closing: *"Convertimos empresas en oportunidades invertibles."* |
| 6 | **Contact** | H2: *"Contacta con nosotros"* · Phone: +376 337 670 · Email: info@buscobusiness.com |

---

### 2.6 LEGAL NOTICE (`/aviso-legal`)

**Page goal:** Legal compliance (LSSI 34/2002).

**Sections:** Owner identification (placeholder data: [Nombre empresa], [NIF], [Dirección]), Website purpose, Nature of service (marketplace disclaimer), IP rights, Liability exclusion, Applicable law.

**⚠️ Note for strategist:** Owner identification fields contain placeholder brackets — not production-ready.

---

### 2.7 PRIVACY POLICY (`/privacidad`)

**Page goal:** GDPR/LOPD compliance.

**Sections (10):** Data controller, Data collected, Purpose, Legal basis, Data recipients, Retention, User rights, Contact forms/lead capture (§8), Data sharing between transaction parties (§9), Security.

---

### 2.8 COOKIES POLICY (`/cookies`)

**Page goal:** Cookie compliance.

**Sections (6):** What are cookies, Types (technical, analytics, preferences), Management (browser instructions), Third-party cookies, Updates, Contact.

**⚠️ Note:** No cookie consent banner exists. Policy page only.

---

## 3. GLOBAL ELEMENTS

**Navbar:** Logo "buscobusiness.com" → `/` | Comprar → `/comprar` | Vender → `/vender` | Sobre nosotros → `/nosotros` | Language selector. Mobile: hamburger sheet menu.

**Footer:**
- Brand + tagline: *"El marketplace donde empresas reales cambian de manos con transparencia y criterio."*
- Navigation: Inicio, Comprar, Vender, Sobre nosotros
- Legal: Aviso legal, Privacidad, Cookies
- Contact: info@buscobusiness.com, +376 337 670
- **Disclaimer:** *"buscobusiness.com es una plataforma de anuncios (marketplace) que facilita el contacto entre compradores y vendedores de negocios. No actuamos como intermediarios, asesores ni brokers en las transacciones..."*
- Bottom: © 2026 + *"Diseñado para emprendedores y empresarios que buscan oportunidades reales."*

---

## 4. STRATEGIC OBSERVATIONS

### Value Proposition Summary
**Core positioning:** "We turn companies into investable opportunities" — structured preparation + CFO-level financial analysis + curated marketplace.

**For sellers:** "You don't post a listing. You build a transaction."  
**For buyers:** "You don't buy blind. You buy with clarity."

### Assumptions About Market & Users
1. **Market gap:** Existing SME marketplaces are classifieds (Idealista-style) with no financial structure
2. **Seller pain:** Business owners don't know how to prepare for sale → lose value
3. **Buyer pain:** Incomplete data, no comparability, hidden risks in current platforms
4. **User profile:** Financially literate, time-poor decision-makers (not casual browsers)
5. **Geography:** Focus on Andorra + Spain, with international openness
6. **Price range:** SMEs from 75K€ to 2.4M€
7. **Revenue model:** Not explicitly stated on site (advisory fees? commission? listing fees?)

### Gaps / Open Questions for Strategist
1. **No backend:** All forms log to console — no data persistence, no email notifications
2. **No authentication:** No user accounts, no saved searches, no buyer profiles
3. **Legal placeholders:** Aviso Legal has [Nombre empresa], [NIF], [Dirección] unfilled
4. **No cookie banner:** Cookie policy page exists but no consent mechanism
5. **Revenue model unclear:** No pricing, no service tiers visible
6. **Disclaimer tension:** Footer says "we are NOT intermediaries/advisors" but /vender and /nosotros position the service as advisory ("asesoramiento experto", "acompañamiento estratégico", "due diligence preparation")
7. **Publish feature:** /comprar has a "Publicar anuncio" inline card but it only logs to console
8. **No SEO meta tags:** Pages lack specific meta descriptions and OG tags
9. **9 listings total:** 3 named + 6 confidential — content feels thin for marketplace credibility
10. **No testimonials/social proof:** No case studies, client logos, or transaction stats
