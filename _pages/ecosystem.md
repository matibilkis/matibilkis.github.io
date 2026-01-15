---
title: Ecosystem Building
layout: default
permalink: /ecosystem/
---

<link rel="stylesheet" href="{{ '/assets/css/styles.css' | relative_url }}">

<h1 class="section-title">Ecosystem Building Initiatives</h1>

<div class="research-intro">
  Building connections and partnerships across the quantum technology ecosystem, connecting academia, industry, and government to advance quantum technologies globally and in Latin America.
</div>

<div class="ecosystem-list">
{% assign sorted_ecosystem = site.data.ecosystem | sort:"order" %}
{% for item in sorted_ecosystem %}
  <div class="ecosystem-card">
    <div class="ecosystem-header">
      <h3 class="ecosystem-title">{{ item.title }}</h3>
      {% if item.year %}
      <span class="ecosystem-year">{{ item.year }}</span>
      {% endif %}
    </div>
    <div class="ecosystem-meta">
      {% if item.role %}
      <span class="ecosystem-role"><strong>Role:</strong> {{ item.role }}</span>
      {% endif %}
      {% if item.organization %}
      <span class="ecosystem-org"><strong>Organization:</strong> {{ item.organization }}</span>
      {% endif %}
      {% if item.location %}
      <span class="ecosystem-location"><strong>Location:</strong> {{ item.location }}</span>
      {% endif %}
    </div>
    <p class="ecosystem-description">{{ item.description }}</p>
    {% if item.links and item.links.size > 0 %}
    <div class="ecosystem-links">
      {% for link in item.links %}
        <a href="{{ link.url }}" target="_blank" class="ecosystem-link">{{ link.name }} →</a>
      {% endfor %}
    </div>
    {% endif %}
  </div>
{% endfor %}
</div>

<div class="ecosystem-highlight">
  <h2>Edge City Esmeralda - Quantum Residency</h2>
  <p>Leading the quantum residency program at Edge City Esmeralda, an incubator program in California during June. This initiative brings together quantum researchers, developers, and entrepreneurs to advance quantum technologies in a collaborative environment.</p>
  <p><strong>Edge City Esmeralda</strong> is a spin-off of the Ethereum Foundation, focusing on cutting-edge technology development and ecosystem building.</p>
</div>

<style>
.ecosystem-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.ecosystem-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(20,30,60,0.08);
  padding: 1.5rem 2rem;
  border: 1.5px solid #e8eaef;
  border-left: 4px solid #9c27b0;
  transition: box-shadow 0.2s, transform 0.2s;
}

.ecosystem-card:hover {
  box-shadow: 0 6px 20px rgba(20,30,60,0.12);
  transform: translateY(-2px);
}

.ecosystem-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #e8eaef;
}

.ecosystem-title {
  color: #223568;
  font-size: 1.3em;
  font-weight: 600;
  margin: 0;
  flex: 1;
}

.ecosystem-year {
  background: #f3e5f5;
  color: #7b1fa2;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.9em;
  font-weight: 500;
}

.ecosystem-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  color: #4a5568;
  font-size: 0.95em;
}

.ecosystem-role,
.ecosystem-org,
.ecosystem-location {
  display: flex;
  align-items: center;
}

.ecosystem-description {
  color: #3d4257;
  line-height: 1.7;
  margin: 1rem 0;
  font-size: 1.05em;
}

.ecosystem-links {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.ecosystem-link {
  color: #9c27b0;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.ecosystem-link:hover {
  color: #7b1fa2;
  text-decoration: underline;
}

.ecosystem-highlight {
  background: #f3e5f5;
  border-left: 5px solid #9c27b0;
  padding: 1.5rem 2rem;
  margin: 3rem auto;
  border-radius: 0 8px 8px 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  max-width: 900px;
}

.ecosystem-highlight h2 {
  color: #223568;
  font-size: 1.5em;
  margin-bottom: 1rem;
}

.ecosystem-highlight p {
  color: #3d4257;
  line-height: 1.7;
  margin: 0.75rem 0;
  font-size: 1.05em;
}

@media (max-width: 768px) {
  .ecosystem-list,
  .ecosystem-highlight {
    padding: 0 1rem;
  }
  
  .ecosystem-card {
    padding: 1rem 1.5rem;
  }
  
  .ecosystem-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .ecosystem-meta {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>

