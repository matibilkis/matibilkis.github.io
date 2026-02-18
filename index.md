---
layout: default
usehighlight: true
usemathjax: true
supported_languages: [en, es]
---

<link rel="stylesheet" href="{{ '/assets/css/design-system.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/assets/css/styles.css' | relative_url }}">

<section class="hero-section">
  <div class="hero-background"></div>
  <div class="hero-container">
    <div class="hero-content">
      <div class="hero-photos">
        <div class="photo-wrapper main-photo">
          <img src="{{ '/assets/images/foto_lead.png' | relative_url }}" alt="Matías Bilkis" class="hero-photo" />
          <div class="photo-overlay"></div>
        </div>
        <div class="photo-wrapper secondary-photo">
          <img src="{{ '/assets/images/foto_engineer.png' | relative_url }}" alt="Matías Bilkis speaking" class="hero-photo" />
        </div>
      </div>
      <div class="hero-text">
        <h1 class="hero-name">
          <span class="name-main">Matías Bilkis</span>
          <span class="name-title">PhD</span>
        </h1>
        <p class="hero-tagline">Quantum Scientist · Artivist · Entrepreneur</p>
        <p class="hero-bio">
          Professor at UAI, CEO of QutSur, co-founder of QML-CVC. 
          Leading quantum tech innovation through research, business, and creative expression.
        </p>
        <div class="hero-actions">
          <a href="/contact/" class="btn btn-primary">Get in Touch</a>
          <a href="/research/" class="btn btn-secondary">View Research</a>
          <a href="/projects/" class="btn btn-secondary">Portfolio</a>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="profiles-grid">
  <!-- Academic Profile -->
  <div class="profile-card academic">
    <div class="profile-card-header">
      <h2 class="profile-card-title">🎓 Academic</h2>
      <a href="/research/" class="profile-card-link">View Research →</a>
    </div>
    <div class="profile-card-content">
      <p><strong>Professor Titular</strong> at Universidad Abierta Interamericana</p>
      <p><strong>Co-founder & Director</strong> of <a href="https://qml.cvc.uab.es/" target="_blank">QML-CVC</a> (Quantum Machine Learning Group)</p>
      <p><strong>PhD in Physics</strong> from GIQ-UAB (Grup d'Informació Quàntica, Universitat Autònoma de Barcelona)</p>
      <ul class="profile-highlights">
        <li>9+ research publications</li>
        <li>Speaker at QTML, IEEE Quantum Week</li>
        <li>Interdisciplinary research: quantum physics, AI, social innovation</li>
      </ul>
    </div>
  </div>

  <!-- Business Profile -->
  <div class="profile-card business">
    <div class="profile-card-header">
      <h2 class="profile-card-title">💼 Business</h2>
      <a href="/qutsur/" class="profile-card-link">Learn More →</a>
    </div>
    <div class="profile-card-content">
      <p><strong>CEO of QutSur</strong> - Quantum Technology Consultancy (LLC)</p>
      <p>Bridging quantum technology and Latin America through:</p>
      <ul class="profile-highlights">
        <li><strong>Education:</strong> Courses and training programs</li>
        <li><strong>Consultancy:</strong> Strategic quantum technology consulting</li>
      </ul>
      <p><a href="https://www.qutsur.com" target="_blank">qutsur.com</a></p>
    </div>
  </div>

  <!-- Developer Profile -->
  <div class="profile-card developer">
    <div class="profile-card-header">
      <h2 class="profile-card-title">💻 Developer</h2>
      <a href="/projects/" class="profile-card-link">View Portfolio →</a>
    </div>
    <div class="profile-card-content">
      <p>Research-focused, deployment-ready projects:</p>
      <ul class="profile-highlights">
        <li>Quantum & classical machine learning</li>
        <li>HPC infrastructure expertise</li>
        <li>Open-source contributions</li>
        <li>Production-ready implementations</li>
      </ul>
      <p><a href="https://github.com/matibilkis" target="_blank">GitHub →</a></p>
    </div>
  </div>

  <!-- Speaker & Outreach -->
  <div class="profile-card speaker">
    <div class="profile-card-header">
      <h2 class="profile-card-title">🎤 Speaker & Outreach</h2>
      <a href="/talks/" class="profile-card-link">View Talks →</a>
    </div>
    <div class="profile-card-content">
      <p>Engaging diverse audiences through:</p>
      <ul class="profile-highlights">
        <li>Technical scientific talks (QTML, IEEE Quantum Week)</li>
        <li>Artistic interventions & panels</li>
        <li>Public outreach & education</li>
        <li>Event organization & coordination</li>
      </ul>
      <p><a href="/activities/">View all activities →</a></p>
    </div>
  </div>
</div>

<div class="featured-section">
  <div class="featured-header">
    <h2>Featured now</h2>
    <p>Current initiatives I am leading or building.</p>
  </div>
  <div class="featured-grid">
    {% assign featured = site.data.featured | sort:"order" %}
    {% for item in featured %}
    <article class="featured-card">
      <div class="featured-meta">
        <span class="featured-status">{{ item.status }}</span>
      </div>
      <h3 class="featured-title">{{ item.title }}</h3>
      <p class="featured-description">{{ item.description }}</p>
      {% if item.tags %}
      <div class="featured-tags">
        {% for tag in item.tags %}
        <span class="featured-tag">{{ tag }}</span>
        {% endfor %}
      </div>
      {% endif %}
      <div class="featured-links">
        {% if item.links %}
          {% for link in item.links %}
          <a href="{{ link.url }}" target="_blank">{{ link.name }} →</a>
          {% endfor %}
        {% endif %}
        {% if item.cta_url %}
          <a href="{{ item.cta_url }}" class="featured-cta" {% if item.cta_url contains 'http' %}target="_blank"{% endif %}>{{ item.cta_text | default: 'Learn more' }} →</a>
        {% endif %}
      </div>
    </article>
    {% endfor %}
  </div>
</div>

<div class="quick-links">
  <h2 class="quick-links-title">Quick Links</h2>
  <div class="quick-links-grid">
    <a href="/research/" class="quick-link">Research & Publications</a>
    <a href="/projects/" class="quick-link">Code Development</a>
    <a href="/qutsur/" class="quick-link">QutSur Business</a>
    <a href="/talks/" class="quick-link">Talks & Presentations</a>
    <a href="/activities/" class="quick-link">Activities & Events</a>
    <a href="/contact/" class="quick-link">Contact</a>
  </div>
</div>

<style>
/* Hero Section - Creative Hybrid Design */
.hero-section {
  position: relative;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-4xl) var(--spacing-lg) var(--spacing-3xl);
  margin: 0 calc(-1 * var(--spacing-lg)) var(--spacing-3xl);
  overflow: hidden;
  background: var(--gradient-hero);
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(13, 71, 161, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(156, 39, 176, 0.1) 0%, transparent 50%);
  z-index: 0;
}

.hero-background::before {
  content: '';
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  background: 
    repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(13, 71, 161, 0.03) 2px, rgba(13, 71, 161, 0.03) 4px);
  animation: pulse 20s ease-in-out infinite;
}

.hero-container {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-content {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--spacing-2xl);
  align-items: center;
  animation: fadeIn 0.8s ease-out;
}

.hero-photos {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 0;
  flex-shrink: 0;
}

.photo-wrapper {
  position: relative;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  box-shadow: var(--shadow-2xl);
  transition: transform var(--transition-base);
}

.photo-wrapper:hover {
  transform: scale(1.05) rotate(2deg);
}

.photo-wrapper.main-photo {
  width: 280px;
  height: 280px;
  border: 4px solid var(--color-bg-primary);
}

.photo-wrapper.secondary-photo {
  width: 140px;
  height: 140px;
  border: 3px solid var(--color-bg-primary);
  margin-left: calc(-1 * var(--spacing-lg));
  margin-top: var(--spacing-xl);
  position: relative;
  z-index: 1;
}

.hero-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.photo-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--gradient-primary);
  opacity: 0.1;
  mix-blend-mode: overlay;
  pointer-events: none;
}

.hero-text {
  max-width: 600px;
  padding-left: var(--spacing-md);
}

.hero-name {
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  margin-bottom: var(--spacing-md);
  display: flex;
  align-items: baseline;
  gap: var(--spacing-sm);
}

.name-main {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.name-title {
  font-size: var(--font-size-2xl);
  color: var(--color-text-muted);
  font-weight: var(--font-weight-normal);
}

.hero-tagline {
  font-size: var(--font-size-xl);
  color: var(--color-accent);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--spacing-lg);
  letter-spacing: 0.5px;
}

.hero-bio {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xl);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  align-items: center;
}

@media (max-width: 968px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: var(--spacing-xl);
  }
  
  .hero-photos {
    justify-content: center;
    align-items: center;
  }
  
  .hero-text {
    padding-left: 0;
  }
  
  .photo-wrapper.secondary-photo {
    margin-left: calc(-1 * var(--spacing-lg));
    margin-top: var(--spacing-lg);
  }
  
  .hero-name {
    font-size: var(--font-size-4xl);
    justify-content: center;
  }
  
  .hero-actions {
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .hero-section {
    min-height: auto;
    padding: var(--spacing-2xl) var(--spacing-md);
  }
  
  .photo-wrapper.main-photo {
    width: 200px;
    height: 200px;
  }
  
  .photo-wrapper.secondary-photo {
    width: 100px;
    height: 100px;
  }
  
  .hero-name {
    font-size: var(--font-size-3xl);
    flex-direction: column;
    align-items: center;
  }
  
  .hero-tagline {
    font-size: var(--font-size-lg);
  }
  
  .hero-bio {
    font-size: var(--font-size-base);
  }
  
  .hero-actions {
    flex-direction: column;
    width: 100%;
  }
  
  .hero-actions .btn {
    width: 100%;
  }
}

/* Profile Cards Section */
.profiles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-xl);
  margin: var(--spacing-3xl) auto;
  max-width: 1200px;
  padding: 0 var(--spacing-lg);
}

.profile-card {
  background: var(--color-bg-primary);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-lg);
  border: 2px solid var(--color-neutral-100);
  transition: all var(--transition-base);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  animation: fadeIn 0.6s ease-out backwards;
}

.profile-card:nth-child(1) { animation-delay: 0.1s; }
.profile-card:nth-child(2) { animation-delay: 0.2s; }
.profile-card:nth-child(3) { animation-delay: 0.3s; }
.profile-card:nth-child(4) { animation-delay: 0.4s; }

.profile-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient-primary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--transition-base);
}

.profile-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: var(--shadow-2xl);
  border-color: transparent;
}

.profile-card:hover::before {
  transform: scaleX(1);
}

.profile-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--spacing-lg);
  padding-bottom: var(--spacing-md);
  border-bottom: 2px solid var(--color-neutral-100);
}

.profile-card-title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  margin: 0;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.profile-card-link {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-sm);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  white-space: nowrap;
}

.profile-card-link:hover {
  background: var(--color-primary);
  color: white;
  text-decoration: none;
  transform: translateX(4px);
}

.profile-card-content {
  flex: 1;
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
}

.profile-card-content p {
  margin: var(--spacing-sm) 0;
  font-size: var(--font-size-base);
}

.profile-card-content p strong {
  color: var(--color-text-primary);
  font-weight: var(--font-weight-semibold);
}

.profile-highlights {
  list-style: none;
  padding: 0;
  margin: var(--spacing-md) 0;
}

.profile-highlights li {
  padding: var(--spacing-xs) 0;
  padding-left: var(--spacing-lg);
  position: relative;
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  transition: color var(--transition-fast);
}

.profile-card:hover .profile-highlights li {
  color: var(--color-text-primary);
}

.profile-highlights li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--color-accent);
  font-weight: var(--font-weight-bold);
  transition: transform var(--transition-fast);
}

.profile-card:hover .profile-highlights li::before {
  transform: translateX(4px);
}

/* Profile Card Color Accents */
.profile-card.academic {
  border-top: 4px solid var(--color-primary);
}

.profile-card.academic:hover {
  box-shadow: var(--shadow-colored);
}

.profile-card.business {
  border-top: 4px solid var(--color-highlight);
}

.profile-card.business:hover {
  box-shadow: 0 20px 40px -10px rgba(255, 179, 0, 0.3);
}

.profile-card.developer {
  border-top: 4px solid var(--color-accent);
}

.profile-card.developer:hover {
  box-shadow: var(--shadow-colored-accent);
}

.profile-card.speaker {
  border-top: 4px solid #e91e63;
}

.profile-card.speaker:hover {
  box-shadow: 0 20px 40px -10px rgba(233, 30, 99, 0.3);
}

/* Quick Links Section */
.quick-links {
  margin: var(--spacing-3xl) auto;
  max-width: 1200px;
  padding: 0 var(--spacing-lg);
}

.quick-links-title {
  font-size: var(--font-size-3xl);
  color: var(--color-text-primary);
  text-align: center;
  margin-bottom: var(--spacing-xl);
  font-weight: var(--font-weight-bold);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.quick-links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: var(--spacing-md);
}

.quick-link {
  background: var(--color-bg-primary);
  border: 2px solid var(--color-neutral-200);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  text-align: center;
  text-decoration: none;
  color: var(--color-text-primary);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-sm);
  transition: all var(--transition-base);
  position: relative;
  overflow: hidden;
}

.quick-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--gradient-primary);
  transition: left var(--transition-base);
  z-index: 0;
}

.quick-link span {
  position: relative;
  z-index: 1;
}

.quick-link:hover {
  color: white;
  border-color: transparent;
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.quick-link:hover::before {
  left: 0;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .profiles-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  .quick-links-grid {
    grid-template-columns: 1fr;
  }
  
  .featured-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-actions {
    flex-direction: column;
  }
  
  .hero-actions .btn {
    width: 100%;
  }
}

/* Featured Section */
.featured-section {
  max-width: 1200px;
  margin: var(--spacing-3xl) auto;
  padding: 0 var(--spacing-lg);
}

.featured-header {
  text-align: center;
  margin-bottom: var(--spacing-2xl);
}

.featured-header h2 {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  margin: var(--spacing-sm) 0;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.featured-header p {
  color: var(--color-text-secondary);
  font-size: var(--font-size-lg);
  margin: 0;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-lg);
}

.featured-card {
  background: var(--color-bg-primary);
  border: 2px solid var(--color-neutral-100);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
  position: relative;
  overflow: hidden;
}

.featured-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient-primary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--transition-base);
}

.featured-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-xl);
  border-color: var(--color-primary-light);
}

.featured-card:hover::after {
  transform: scaleX(1);
}

.featured-meta {
  display: flex;
  justify-content: flex-end;
  margin-bottom: var(--spacing-sm);
}

.featured-status {
  background: var(--color-primary);
  color: white;
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.featured-title {
  margin: var(--spacing-md) 0 var(--spacing-sm);
  color: var(--color-text-primary);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
}

.featured-description {
  color: var(--color-text-secondary);
  margin: 0 0 var(--spacing-md) 0;
  line-height: var(--line-height-relaxed);
  font-size: var(--font-size-sm);
}

.featured-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-md);
}

.featured-tag {
  background: var(--color-neutral-50);
  color: var(--color-primary);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-md);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  border: 1px solid var(--color-neutral-200);
}

.featured-links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  align-items: center;
  margin-top: var(--spacing-md);
}

.featured-links a {
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
  text-decoration: none;
  font-size: var(--font-size-sm);
  transition: color var(--transition-fast);
}

.featured-links a:hover {
  color: var(--color-accent);
  text-decoration: underline;
}

.featured-cta {
  background: var(--gradient-primary);
  color: white !important;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
}

.featured-cta:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  text-decoration: none;
}

@media (max-width: 768px) {
  .profile-photo.secondary {
    position: static;
    margin-left: 0.75rem;
  }
  .featured-grid {
    grid-template-columns: 1fr;
  }
}
</style>
