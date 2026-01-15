---
title: QutSur
layout: default
permalink: /qutsur/
---

<link rel="stylesheet" href="{{ '/assets/css/styles.css' | relative_url }}">

<h1 class="section-title">QutSur - Quantum Technology Consultancy</h1>

{% assign qutsur = site.data.qutsur %}

<div class="qutsur-intro">
  <p><strong>QutSur</strong> is a quantum technology consultancy group, an LLC focused on bridging quantum tech and Latin America. 
  We operate through three interconnected pillars that support and reinforce each other: <strong>Education</strong>, <strong>Ecosystem</strong>, and <strong>Consultancy</strong>.</p>
  
  <p><a href="{{ qutsur.company.url }}" target="_blank">Visit QutSur.com →</a></p>
</div>

<div class="qutsur-mission">
  <h2>Mission</h2>
  <p>{{ qutsur.mission }}</p>
</div>

<div class="pillars-section">
  <h2 class="pillars-title">Our Three Pillars</h2>
  
  {% for pillar in qutsur.pillars %}
  <div class="pillar-card">
    <h3 class="pillar-name">{{ pillar.name }}</h3>
    <p class="pillar-description">{{ pillar.description }}</p>
    {% if pillar.details %}
    <ul class="pillar-details">
      {% for detail in pillar.details %}
      <li>{{ detail }}</li>
      {% endfor %}
    </ul>
    {% endif %}
  </div>
  {% endfor %}
</div>

<div class="services-section">
  <h2 class="services-title">Services</h2>
  <div class="services-grid">
    {% for service in qutsur.services %}
    <div class="service-card">
      <h4 class="service-name">{{ service.name }}</h4>
      <p class="service-description">{{ service.description }}</p>
    </div>
    {% endfor %}
  </div>
</div>

<div class="qutsur-contact">
  <h2>Get in Touch</h2>
  <p>Interested in working with QutSur? <a href="/contact/">Contact us</a> to discuss how we can help with your quantum technology needs.</p>
</div>

<style>
.qutsur-intro {
  background: #fffbe5;
  border-left: 5px solid #223568;
  padding: 1.5rem 2rem;
  margin-bottom: 2rem;
  border-radius: 0 8px 8px 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.1em;
  line-height: 1.7;
}

.qutsur-intro a {
  color: #1976d2;
  font-weight: 500;
  text-decoration: none;
}

.qutsur-intro a:hover {
  text-decoration: underline;
}

.qutsur-mission {
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 12px rgba(20,30,60,0.08);
  border: 1.5px solid #e8eaef;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.qutsur-mission h2 {
  color: #223568;
  font-size: 1.5em;
  margin-bottom: 0.75rem;
}

.qutsur-mission p {
  color: #3d4257;
  line-height: 1.7;
  font-size: 1.05em;
}

.pillars-section {
  max-width: 900px;
  margin: 2rem auto;
}

.pillars-title {
  font-size: 1.8em;
  color: #223568;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;
}

.pillar-card {
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem 2rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 12px rgba(20,30,60,0.08);
  border: 1.5px solid #e8eaef;
  border-left: 4px solid #4caf50;
  transition: box-shadow 0.2s, transform 0.2s;
}

.pillar-card:hover {
  box-shadow: 0 6px 20px rgba(20,30,60,0.12);
  transform: translateY(-2px);
}

.pillar-name {
  color: #223568;
  font-size: 1.4em;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.pillar-description {
  color: #3d4257;
  line-height: 1.7;
  margin-bottom: 1rem;
  font-size: 1.05em;
}

.pillar-details {
  list-style: none;
  padding: 0;
  margin: 0;
}

.pillar-details li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: #4a5568;
}

.pillar-details li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #4caf50;
  font-weight: bold;
  font-size: 1.1em;
}

.services-section {
  max-width: 900px;
  margin: 3rem auto;
}

.services-title {
  font-size: 1.8em;
  color: #223568;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.service-card {
  background: #f8fafd;
  border-radius: 10px;
  padding: 1.25rem 1.5rem;
  border: 1.5px solid #e8eaef;
  transition: background 0.2s, border-color 0.2s;
}

.service-card:hover {
  background: #fff;
  border-color: #4caf50;
}

.service-name {
  color: #223568;
  font-size: 1.2em;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.service-description {
  color: #4a5568;
  line-height: 1.6;
  margin: 0;
}

.qutsur-contact {
  background: #e3f2fd;
  border-radius: 12px;
  padding: 1.5rem 2rem;
  margin: 3rem auto;
  max-width: 900px;
  text-align: center;
  border: 1.5px solid #90caf9;
}

.qutsur-contact h2 {
  color: #223568;
  font-size: 1.5em;
  margin-bottom: 0.75rem;
}

.qutsur-contact p {
  color: #3d4257;
  line-height: 1.7;
  margin: 0;
}

.qutsur-contact a {
  color: #1976d2;
  font-weight: 500;
  text-decoration: none;
}

.qutsur-contact a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .qutsur-intro,
  .qutsur-mission,
  .pillars-section,
  .services-section,
  .qutsur-contact {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>

