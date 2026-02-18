   ---
title: Code Development
layout: default
permalink: /projects/
---

<link rel="stylesheet" href="{{ '/assets/css/styles.css' | relative_url }}">

<h1 class="section-title">Code Development</h1>

<div class="research-intro">
  Research-focused, deployment-ready projects in quantum and classical machine learning. 
  Heavy usage of HPC infrastructure. Check out my <a href="https://github.com/matibilkis" target="_blank">GitHub profile</a> for more projects and contributions.
</div>

<div class="projects-list">
{% assign sorted_projects = site.data.projects | sort:"order" %}
{% for project in sorted_projects %}
  <div class="project-card">
    <div class="project-header">
      <h3 class="project-title">{{ project.title }}</h3>
      {% if project.category %}
      <span class="project-category">{{ project.category }}</span>
      {% endif %}
    </div>
    <p class="project-description">{{ project.description }}</p>
    {% if project.tech and project.tech.size > 0 %}
    <div class="project-tech">
      <strong>Technologies:</strong>
      <div class="tech-tags">
        {% for tech in project.tech %}
        <span class="tech-tag">{{ tech }}</span>
        {% endfor %}
      </div>
    </div>
    {% endif %}
    <div class="project-links">
      {% if project.github %}
        {% if project.github contains '/' %}
          <a href="https://github.com/{{ project.github }}" target="_blank" class="project-link">GitHub Repository →</a>
        {% else %}
          <a href="https://github.com/{{ project.github }}" target="_blank" class="project-link">GitHub Profile →</a>
        {% endif %}
      {% endif %}
      {% if project.url %}
      <a href="{{ project.url }}" target="_blank" class="project-link">Live Demo →</a>
      {% endif %}
    </div>
  </div>
{% endfor %}
</div>

<style>
.projects-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.project-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(20,30,60,0.08);
  padding: 1.5rem 2rem;
  border: 1.5px solid #e8eaef;
  border-left: 4px solid #ff9800;
  transition: box-shadow 0.2s, transform 0.2s;
}

.project-card:hover {
  box-shadow: 0 6px 20px rgba(20,30,60,0.12);
  transform: translateY(-2px);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.project-title {
  color: #223568;
  font-size: 1.3em;
  font-weight: 600;
  margin: 0;
}

.project-category {
  background: #fff3e0;
  color: #e65100;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.85em;
  font-weight: 500;
}

.project-description {
  color: #3d4257;
  line-height: 1.7;
  margin: 0.75rem 0;
  font-size: 1.05em;
}

.project-tech {
  margin: 1rem 0;
  color: #4a5568;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.tech-tag {
  background: #e3f2fd;
  color: #1976d2;
  padding: 0.3rem 0.8rem;
  border-radius: 6px;
  font-size: 0.9em;
  font-weight: 500;
}

.project-links {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.project-link {
  color: #1976d2;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.project-link:hover {
  color: #0d47a1;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .projects-list {
    padding: 0 1rem;
  }
  
  .project-card {
    padding: 1rem 1.5rem;
  }
  
  .project-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>

