# Matías Bilkis - Personal Website

A minimalist dark website with Miró-inspired color palette, featuring constellation navigation and blinking stars.

## 🌐 Live Site
**https://matibilkis.github.io/**

---

## 📁 Structure

```
website/
├── index.html              # Homepage with constellation navigation
├── talks.html              # Talks & Things subpage
├── portfolio.html          # Portfolio subpage
├── projects.html           # Ongoing Projects subpage
├── assets/
│   ├── css/
│   │   ├── main.css        # Main styles (colors, typography, layout)
│   │   └── subpages.css    # Subpage styles (cards, timeline)
│   └── js/
│       └── stars.js        # Blinking stars animation
├── archive/                # Old site backups
├── WORKFLOW.md             # Full project workflow and guidelines
└── .cursorrules            # Cursor AI guidelines
```

---

## 🎨 Easy Content Editing

All content is marked with HTML comments for easy editing:

### Homepage (`index.html`)
```html
<!-- EDIT CONTENT BELOW: -->
<h1>Matías Bilkis</h1>
<p class="tagline">
    Building quantum tech at the edge of art and science
</p>
```

### Talks & Things (`talks.html`)
```html
<div class="card">
    <span class="card-tag" style="--tag-color: var(--miro-blue);">Talk</span>
    <h3>Your Talk Title</h3>
    <p class="card-meta">Venue · Date</p>
    <p>Brief description here</p>
</div>
```

### Portfolio (`portfolio.html`)
```html
<div class="card">
    <span class="card-tag" style="--tag-color: var(--miro-blue);">Category</span>
    <h3>Project Name</h3>
    <p>Project description</p>
    <div class="tech-stack">
        <span class="tech-pill">Python</span>
        <span class="tech-pill">TensorFlow</span>
    </div>
    <a href="https://github.com/..." class="card-link">View on GitHub →</a>
</div>
```

### Projects (`projects.html`)
```html
<div class="timeline-item" style="border-left-color: var(--miro-blue);">
    <span class="timeline-tag">Category</span>
    <h3>Project Title</h3>
    <p class="timeline-description">Description here</p>
    <div class="timeline-links">
        <a href="...">Link text</a>
    </div>
</div>
```

---

## 🎨 Color Palette (Miró Colors)

Edit colors in `assets/css/main.css`:

```css
:root {
  --bg-primary: #0B0F19;      /* Dark background */
  --bg-surface: #111827;      /* Card backgrounds */
  --text-primary: #E5E7EB;    /* Main text */
  --text-muted: #9CA3AF;      /* Secondary text */
  
  /* Miró Accents */
  --miro-red: #FF3B30;
  --miro-blue: #0A84FF;
  --miro-yellow: #FFD60A;
  --miro-green: #30D158;
}
```

---

## 🚀 Local Testing

```bash
# Start local server
python3 -m http.server 8000

# Or Python 2
python -m SimpleHTTPServer 8000

# Then open: http://localhost:8000
```

---

## 📤 Deploy to GitHub Pages

```bash
# Add all changes
git add .

# Commit
git commit -m "Update website content"

# Push to GitHub (deploys automatically)
git push origin main
```

Your site will be live at **https://matibilkis.github.io/** in a few minutes.

---

## ✨ Features

- **Dark minimalist design** with Miró-inspired colors
- **Constellation navigation** with 3 interactive planets
- **Blinking stars animation** (80 randomly positioned stars)
- **Fully responsive** (mobile, tablet, desktop)
- **Fast loading** (no frameworks, pure HTML/CSS/JS)
- **Easy to edit** (all content marked with comments)
- **Accessible** (keyboard navigation, WCAG AA contrast)

---

## 📝 Quick Tips

1. **Add a new talk/project:** Copy an existing `.card` or `.timeline-item` block and edit
2. **Change colors:** Edit CSS variables in `assets/css/main.css`
3. **Adjust stars:** Change `numberOfStars` in `assets/js/stars.js`
4. **Add images:** Place in `assets/` and reference with relative paths
5. **Test locally first:** Always run local server before pushing to GitHub

---

## 🔗 Contact

- **Email:** matias@qutsur.com
- **LinkedIn:** https://www.linkedin.com/in/matias-bilkis-8667501bb/
- **GitHub:** https://github.com/matibilkis

---

## 📚 Documentation

- `WORKFLOW.md` - Complete build workflow and brand guidelines
- `.cursorrules` - Cursor AI code conventions and patterns

---

Built with ❤️ using HTML, CSS, and vanilla JavaScript

