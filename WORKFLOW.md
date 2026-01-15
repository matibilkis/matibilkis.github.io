# Website Rebuild Workflow

## 🎯 Goal
Build a minimalistic, dark aesthetic personal brand website for Matías Bilkis with Miró-inspired color palette, subtle animations, and compelling visual storytelling.

**Brand message**: "This guy is cool, I want to email him" (not CV-heavy, personality-driven)

---

## 🎨 Brand Identity Components

### Visual Aesthetic
- **Theme**: Dark minimalist with playful Miró palette
- **Background**: Deep charcoal/near-black (#0B0F19 or #0f0f0f). Include blinking small stars animated super cute.
- **Accents**: Miró primary colors (red #FF3B30, blue #0A84FF, yellow #FFD60A, green #30D158) used sparingly
- **Typography**: 
  - Bold sans for name (personality)
  - Clean serif or mono for body (readability)
  - Generous whitespace
- **Animations**: Subtle constellation shifts, floating abstract shapes on scroll
- **No gradients**: Flat, modern, research-tech aesthetic

### Contact Information
- Email: matias@qutsur.com
- LinkedIn: https://www.linkedin.com/in/matias-bilkis-8667501bb/

---

## 📁 Site Structure

### Homepage (`index.html`)
**Sections (in order):**
1. **Hero Section**
   - Name: "Matías Bilkis"
   - Tagline: "Building quantum tech at the edge of art and science" (or similar punchy 1-liner)
   - Visual: Animated constellation with 3 planets representing three worlds:
     - 🎸🎤 Planet: "Talks & Things" (creative/public-facing)
     - 🔬 Planet: "Portfolio" (technical work)
     - 🚀 Planet: "Ongoing Projects" (current ventures)
   - Each planet is clickable/hoverable with subtle animation
   
2. **Quick Contact**
   - Email + LinkedIn (clean, not a form)
   - "Let's build something together" CTA

### Subpage 1: Talks & Things (`talks.html`)
**Content:**
- Speaking engagements.
- Events organized/coordinated
- Media appearances
- Artistic interventions/panels


**Format:**
- Timeline or cards (not text-heavy)
- Each entry: title, venue, date, 1-2 sentence description, link if available
- Visual icons for type (talk, event, media, art)

### Subpage 2: Portfolio (`portfolio.html`)
**Content (from GitHub):**
- Hero projects (3-5 featured at top):
  - qvans (60+ citations)
  - quantum-self-tuning (30+ citations, 6+ talks)
  - board-tex (full-stack LaTeX tool)
  - hackaton_AI_music (Sónar winner)
  - qmonsprt (Quantum 2024 paper)

- All projects organized by category with filter tags:
  - Quantum ML
  - Reinforcement Learning
  - Production Tools
  - Creative/Art-Tech
  - Educational

**Format:**
- Project cards with different shapes (circles, rounded squares, hexagons)
- Each card:
  - Title
  - 1-sentence description
  - Tech stack pills (e.g., "Python", "TensorFlow", "PennyLane")
  - Key metrics (citations, stars, talks)
  - GitHub link icon
- Hoverable with animation
- Filterable by tag

### Subpage 3: Ongoing Projects (`projects.html`)
**Content:**
1. **QutSur** - Quantum Technology Consultancy
   - Tagline: "Bridging quantum tech and Latin America"
   - Description: Strategic consulting, education, ecosystem building
   - Link: www.qutsur.com
   - Visual: Professional but approachable

2. **Quantum Residency at Edge**
   - Tagline: "Leading a quantum residency at Edge City Esmeralda"
   - Description: one-month social incubator, California, June 2026
   - Link: [www.edgeesmeralda.com](https://www.edgeesmeralda.com/)
   - Visual: Forward-looking, exciting

3. **Teaching Quantum**
   - Components:
     - QML-CVC Seminar Series (monthly international researchers)
     - QML Industry Seminar Series (Practia 2025, 3-part corporate)
     - Building Quantum computing master in Argentina
     - Profesor Titular at Universidad Abierta Interamericana
   - Visual: Community-building, impactful

**Format:**
- Visual timeline or large cards
- Each project has logo/icon, tagline, description (2-3 sentences), CTA link
- Not text-heavy but visually rich

---

## 🛠️ Implementation Phases

### Phase 1: Setup & Brand Foundation (30 min)
**Tasks:**
1. Archive current `index.html` → `archive/old_index.html`
2. Create color palette variables (Miró colors + dark background)
3. Set up typography (test Google Fonts combinations)
4. Create reusable CSS components (buttons, cards, animations)
5. Build base layout structure (header, footer, navigation)

**Deliverables:**
- Clean CSS architecture with CSS variables
- Typography tested and locked in
- Navigation structure defined

---

### Phase 2: Homepage Hero & Constellation (1 hour)
**Tasks:**
1. Build hero section (name + tagline)
2. Create SVG constellation with 3 planets:
   - Each planet has distinct shape/icon (guitar+mic, microscope, rocket)
   - Connecting lines between planets (subtle, dotted/dashed)
   - Stars scattered in background (small, subtle)
3. Add subtle animations:
   - Planets pulse/glow on hover
   - Constellation slowly rotates or shifts
   - Stars twinkle randomly
4. Link planets to subpages
5. Add quick contact section below

**Deliverables:**
- Fully functional homepage with visual hierarchy
- Clickable constellation navigation
- Responsive on mobile

---

### Phase 3: Subpage 1 - Talks & Things (45 min)
**Tasks:**
1. Extract content from current website + GitHub portfolio
2. Design timeline or card layout
3. Add icons for different types (talk, event, media, art)
4. Implement each entry with title, venue, date, description
5. Ensure visual consistency with homepage

**Deliverables:**
- Talks & Things subpage live
- Content organized chronologically or by type
- Visually light but not empty

---

### Phase 4: Subpage 2 - Portfolio (1.5 hours)
**Tasks:**
1. Extract all project data from GitHub portfolio README
2. Create hero projects section (3-5 featured)
3. Build project card components with different shapes
4. Add tech stack pills and metrics (citations, stars)
5. Implement filter/tag system (optional for v1)
6. Add GitHub link icons
7. Ensure hover animations work smoothly

**Deliverables:**
- Portfolio subpage with all projects visible
- Hero projects prominently featured
- Cards with varied shapes, visually appealing
- Filterable/sortable (optional)

---

### Phase 5: Subpage 3 - Ongoing Projects (45 min)
**Tasks:**
1. Create visual timeline or large card layout
2. Design logos/icons for each project:
   - QutSur (professional)
   - Edge residency (futuristic)
   - Teaching (community)
3. Write 2-3 sentence descriptions for each
4. Add CTA links (external)
5. Ensure visual balance (not too text-heavy)

**Deliverables:**
- Ongoing Projects subpage live
- Each project has visual identity
- CTAs clear and functional

---

### Phase 6: Polish & Animations (1 hour)
**Tasks:**
1. Refine animations (constellation, hover states, scroll effects)
2. Add micro-interactions (button hovers, link underlines)
3. Test responsive behavior (mobile, tablet, desktop)
4. Optimize load time (minimize CSS, lazy-load images if any)
5. Add subtle stars/floating shapes throughout site
6. Final typography/spacing adjustments

**Deliverables:**
- Smooth animations across site
- Fully responsive
- Fast loading
- Polished visual details

---

### Phase 7: Testing & Deployment (30 min)
**Tasks:**
1. Test all links (internal navigation, external CTAs)
2. Test on different browsers (Chrome, Firefox, Safari)
3. Test mobile experience
4. Run accessibility checks (contrast, keyboard nav)
5. Commit to git
6. Push to GitHub Pages
7. Verify live site matches local

**Deliverables:**
- Fully functional site on https://matibilkis.github.io/
- No broken links
- Mobile-friendly
- Accessible

---

## 📋 Checklist Before Launch

- [ ] All colors follow Miró palette on dark background
- [ ] Typography is readable and on-brand
- [ ] Constellation animation works smoothly
- [ ] All 3 subpages are complete
- [ ] Contact info correct (matias@qutsur.com, LinkedIn)
- [ ] No broken links
- [ ] Mobile responsive
- [ ] Load time < 2 seconds
- [ ] "Cool guy I want to email" vibe achieved
- [ ] Site is honest and personality-driven (not CV-heavy)

---

## 🎯 Success Metrics

**Visual:**
- Dark aesthetic with playful Miró colors
- Subtle animations that don't distract
- Clear visual hierarchy
- Unique constellation navigation

**Content:**
- Personality shines through
- Not CV-heavy, story-driven
- Quick to scan, easy to navigate
- Clear CTAs

**Technical:**
- Fast load time
- Smooth animations
- Mobile-friendly
- GitHub Pages deployable

---

## 🚀 Post-Launch Iterations (Optional)

**v1.1 - Enhancements:**
- Add photography (speaking, working, Sónar)
- Blog/updates section
- Dark/light mode toggle
- Language toggle (EN/ES)

**v1.2 - Interactive:**
- Filter system on portfolio
- Animated project previews
- More complex constellation interactions

**v2.0 - Advanced:**
- Custom domain
- Analytics
- Contact form
- Newsletter signup

---

## 📝 Notes

- **Design inspiration:** Miró's playful abstraction + modern dark UI
- **Target audience:** Researchers, tech companies, quantum enthusiasts, potential collaborators
- **Tone:** Professional but approachable, creative but credible
- **Key differentiator:** Intersection of quantum + art + business (artivist)

---

## 🔗 Resources

**Typography:**
- Fontjoy: https://fontjoy.com/
- Google Fonts: https://fonts.google.com/

**Visual identity:**
- Coolors (palette generator): https://coolors.co/
- Figma (mockups): https://www.figma.com/

**SVG/icons:**
- Inkscape: https://inkscape.org/
- SVG animations: CSS + JS

**Deployment:**
- GitHub Pages: https://pages.github.com/

