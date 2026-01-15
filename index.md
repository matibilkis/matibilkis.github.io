---
layout: default
usehighlight: true
usemathjax: true
supported_languages: [en, es]
---

<link rel="stylesheet" href="{{ '/assets/css/styles.css' | relative_url }}">

<div class="homepage-hero">
  <div class="profile-header">
    <div class="profile-photos">
      <img src="{{ '/assets/images/foto_lead.png' | relative_url }}" alt="Matías Bilkis" class="profile-photo main" />
      <img src="{{ '/assets/images/foto_engineer.png' | relative_url }}" alt="Matías Bilkis speaking" class="profile-photo secondary" />
    </div>
    <div class="profile-info">
      <h1 class="profile-name">Matías Bilkis, PhD</h1>
      <div class="profile-title">Quantum Scientist · Entrepreneur · Developer</div>
      <div class="profile-bio-short">
        Professor at UAI, CEO of QutSur, co-founder of QML-CVC. Leading quantum tech innovation through research and business.
      </div>
    </div>
  </div>
</div>

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
    <a href="/projects/" class="quick-link">Developer Projects</a>
    <a href="/qutsur/" class="quick-link">QutSur Business</a>
    <a href="/talks/" class="quick-link">Talks & Presentations</a>
    <a href="/activities/" class="quick-link">Activities & Events</a>
    <a href="/contact/" class="quick-link">Contact</a>
  </div>
</div>

<style>
.homepage-hero {
  background: linear-gradient(135deg, #f8fafd 0%, #e8f0f8 100%);
  padding: 2rem 1rem;
  margin: -2rem -1rem 2rem -1rem;
  border-radius: 0 0 16px 16px;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem;
}

.profile-photo {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 12px;
  border: 3px solid #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  flex-shrink: 0;
}

.profile-info {
  flex: 1;
}

.profile-name {
  color: #223568;
  font-size: 2.5em;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  letter-spacing: 0.5px;
}

.profile-title {
  font-size: 1.2em;
  color: #1976d2;
  font-weight: 500;
  margin-bottom: 1rem;
}

.profile-bio-short {
  font-size: 1.05em;
  color: #3d4257;
  line-height: 1.6;
}

.profiles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.profile-card {
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 12px rgba(20,30,60,0.08);
  border: 1.5px solid #e8eaef;
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
}

.profile-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(20,30,60,0.12);
}

.profile-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #e8eaef;
}

.profile-card-title {
  font-size: 1.4em;
  font-weight: 600;
  color: #223568;
  margin: 0;
}

.profile-card-link {
  color: #1976d2;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95em;
  transition: color 0.2s;
}

.profile-card-link:hover {
  color: #0d47a1;
  text-decoration: underline;
}

.profile-card-content {
  flex: 1;
  color: #3d4257;
  line-height: 1.7;
}

.profile-card-content p {
  margin: 0.5rem 0;
}

.profile-highlights {
  list-style: none;
  padding: 0;
  margin: 0.75rem 0;
}

.profile-highlights li {
  padding: 0.4rem 0;
  padding-left: 1.2rem;
  position: relative;
  color: #4a5568;
}

.profile-highlights li:before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #1976d2;
  font-weight: bold;
}

.profile-card.academic {
  border-left: 4px solid #1976d2;
}

.profile-card.business {
  border-left: 4px solid #4caf50;
}

.profile-card.developer {
  border-left: 4px solid #ff9800;
}

.profile-card.speaker {
  border-left: 4px solid #f44336;
}

.quick-links {
  margin: 3rem 0;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.quick-links-title {
  font-size: 1.8em;
  color: #223568;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.quick-links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.quick-link {
  background: #f8fafd;
  border: 2px solid #e8eaef;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  color: #223568;
  font-weight: 500;
  transition: all 0.2s;
}

.quick-link:hover {
  background: #1976d2;
  color: #fff;
  border-color: #1976d2;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .profile-header {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .profile-photo {
    width: 120px;
    height: 120px;
  }

  .profile-name {
    font-size: 2em;
  }

  .profiles-grid {
    grid-template-columns: 1fr;
  }

  .quick-links-grid {
    grid-template-columns: 1fr;
  }
}

/* Profile photos stacked */
.profile-photos {
  position: relative;
  display: inline-flex;
}
.profile-photo.main {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 14px;
  border: 3px solid #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.profile-photo.secondary {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 12px;
  border: 2px solid #fff;
  box-shadow: 0 3px 8px rgba(0,0,0,0.08);
  position: absolute;
  bottom: -12px;
  right: -18px;
}

/* Featured section */
.featured-section {
  max-width: 1200px;
  margin: 2.5rem auto 1rem auto;
  padding: 0 1rem;
}
.featured-header {
  text-align: center;
  margin-bottom: 1.5rem;
}
.featured-header h2 {
  color: #223568;
  font-size: 1.9em;
  margin: 0.2rem 0;
}
.featured-header p {
  color: #4a5568;
  margin: 0;
}
.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
}
.featured-card {
  background: #fff;
  border: 1.5px solid #e8eaef;
  border-radius: 12px;
  padding: 1.25rem 1.4rem;
  box-shadow: 0 2px 12px rgba(20,30,60,0.08);
  transition: transform 0.2s, box-shadow 0.2s;
}
.featured-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 22px rgba(20,30,60,0.12);
}
.featured-meta {
  display: flex;
  justify-content: flex-end;
}
.featured-status {
  background: #e3f2fd;
  color: #1976d2;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.85em;
  font-weight: 600;
}
.featured-title {
  margin: 0.6rem 0 0.4rem 0;
  color: #223568;
  font-size: 1.25em;
}
.featured-description {
  color: #3d4257;
  margin: 0 0 0.6rem 0;
  line-height: 1.6;
}
.featured-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.8rem;
}
.featured-tag {
  background: #f0f4ff;
  color: #2746a6;
  padding: 0.25rem 0.6rem;
  border-radius: 8px;
  font-size: 0.85em;
  font-weight: 500;
}
.featured-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  align-items: center;
}
.featured-links a {
  color: #1976d2;
  font-weight: 600;
  text-decoration: none;
}
.featured-links a:hover {
  text-decoration: underline;
}
.featured-cta {
  background: #1976d2;
  color: #fff !important;
  padding: 0.45rem 0.85rem;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(25,118,210,0.25);
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
