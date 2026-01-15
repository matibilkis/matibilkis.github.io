---
layout: default
title: Inicio (ES)
permalink: /es/
---

<link rel="stylesheet" href="{{ '/assets/css/styles.css' | relative_url }}">

<div class="homepage-hero">
  <div class="profile-header">
    <div class="profile-photos">
      <img src="{{ '/assets/images/foto_lead.png' | relative_url }}" alt="Matías Bilkis" class="profile-photo main" />
      <img src="{{ '/assets/images/foto_engineer.png' | relative_url }}" alt="Matías Bilkis hablando" class="profile-photo secondary" />
    </div>
    <div class="profile-info">
      <h1 class="profile-name">Matías Bilkis, PhD</h1>
      <div class="profile-title">Científico cuántico · Emprendedor · Desarrollador · Constructor de ecosistemas</div>
      <div class="profile-bio-short">
        Profesor titular en UAI, CEO de QutSur, cofundador de QML-CVC. Lidero innovación en tecnologías cuánticas mediante investigación, negocio y comunidad.
      </div>
    </div>
  </div>
</div>

<div class="profiles-grid">
  <div class="profile-card academic">
    <div class="profile-card-header">
      <h2 class="profile-card-title">🎓 Académico</h2>
      <a href="/research/" class="profile-card-link">Ver investigación →</a>
    </div>
    <div class="profile-card-content">
      <p><strong>Profesor titular</strong> en UAI</p>
      <p><strong>Cofundador y director</strong> de <a href="https://qml.cvc.uab.es/" target="_blank">QML-CVC</a></p>
      <p><strong>PhD en Física</strong> (GIQ-UAB)</p>
      <ul class="profile-highlights">
        <li>9+ publicaciones</li>
        <li>Conferencista en QTML, IEEE Quantum Week</li>
        <li>Investigación interdisciplinaria: física cuántica, IA e innovación social</li>
      </ul>
    </div>
  </div>

  <div class="profile-card business">
    <div class="profile-card-header">
      <h2 class="profile-card-title">💼 Negocio</h2>
      <a href="/qutsur/" class="profile-card-link">Sobre QutSur →</a>
    </div>
    <div class="profile-card-content">
      <p><strong>CEO de QutSur</strong> - consultora de tecnología cuántica (LLC)</p>
      <p>Conectando tecnología cuántica y Latinoamérica a través de:</p>
      <ul class="profile-highlights">
        <li><strong>Educación:</strong> cursos y programas de formación</li>
        <li><strong>Ecosistema:</strong> construcción de alianzas e infraestructura</li>
        <li><strong>Consultoría:</strong> consultoría estratégica en tecnología cuántica</li>
      </ul>
      <p><a href="https://www.qutsur.com" target="_blank">qutsur.com</a></p>
    </div>
  </div>

  <div class="profile-card developer">
    <div class="profile-card-header">
      <h2 class="profile-card-title">💻 Desarrollador</h2>
      <a href="/projects/" class="profile-card-link">Portafolio →</a>
    </div>
    <div class="profile-card-content">
      <p>Proyectos listos para despliegue:</p>
      <ul class="profile-highlights">
        <li>ML cuántico y clásico</li>
        <li>Experiencia en HPC</li>
        <li>Open source y producción</li>
      </ul>
      <p><a href="https://github.com/matibilkis" target="_blank">GitHub →</a></p>
    </div>
  </div>

  <div class="profile-card ecosystem">
    <div class="profile-card-header">
      <h2 class="profile-card-title">🌐 Ecosistema</h2>
      <a href="/ecosystem/" class="profile-card-link">Ver iniciativas →</a>
    </div>
    <div class="profile-card-content">
      <p><strong>Líder de la residencia cuántica</strong> en Edge City Esmeralda</p>
      <ul class="profile-highlights">
        <li>Residencia en California</li>
        <li>Alianzas NVIDIA para supercómputo</li>
        <li>Construcción del ecosistema cuántico en Argentina</li>
      </ul>
    </div>
  </div>

  <div class="profile-card speaker">
    <div class="profile-card-header">
      <h2 class="profile-card-title">🎤 Speaker & Outreach</h2>
      <a href="/talks/" class="profile-card-link">Charlas →</a>
    </div>
    <div class="profile-card-content">
      <p>Divulgación y eventos:</p>
      <ul class="profile-highlights">
        <li>Charlas técnicas y paneles</li>
        <li>Intervenciones artísticas</li>
        <li>Organización de eventos</li>
      </ul>
      <p><a href="/activities/">Ver actividades →</a></p>
    </div>
  </div>
</div>

<div class="featured-section">
  <div class="featured-header">
    <h2>Destacados (ahora)</h2>
    <p>Iniciativas en curso o próximas.</p>
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
          <a href="{{ item.cta_url }}" class="featured-cta" {% if item.cta_url contains 'http' %}target="_blank"{% endif %}>{{ item.cta_text | default: 'Más info' }} →</a>
        {% endif %}
      </div>
    </article>
    {% endfor %}
  </div>
</div>

<div class="quick-links">
  <h2 class="quick-links-title">Accesos rápidos</h2>
  <div class="quick-links-grid">
    <a href="/research/" class="quick-link">Investigación</a>
    <a href="/projects/" class="quick-link">Proyectos</a>
    <a href="/qutsur/" class="quick-link">QutSur</a>
    <a href="/ecosystem/" class="quick-link">Ecosistema</a>
    <a href="/talks/" class="quick-link">Charlas</a>
    <a href="/activities/" class="quick-link">Actividades</a>
    <a href="/contact/" class="quick-link">Contacto</a>
  </div>
</div>

