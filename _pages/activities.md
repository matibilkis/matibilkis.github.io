---
title: activities list
layout: default
permalink: /activities/
---

<link rel="stylesheet" href="{{ '/assets/css/design-system.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/assets/css/styles.css' | relative_url }}">

<h1 class="section-title">Activities & Events</h1>

<div class="activities-filters">
  <button class="filter-btn active" data-filter="all">All</button>
  <button class="filter-btn" data-filter="talk">Talks</button>
  <button class="filter-btn" data-filter="panel">Panels</button>
  <button class="filter-btn" data-filter="poster">Posters</button>
  <button class="filter-btn" data-filter="leader">Leadership</button>
</div>

<div class="activities-list" id="activities-list">
{% assign sorted_activities = site.data.activities | sort:"year" | reverse %}
{% for activity in sorted_activities %}
  <div class="activity-card{% if activity.type == 'leader' %} leader{% endif %}" data-type="{{ activity.type | default: 'other' }}">
    <div class="activity-card-header">
      <span class="activity-title"><b>{{ activity.title }}</b></span>
    </div>
    <div class="activity-meta">
      <span class="activity-date">{{ activity.day }}/{{ activity.month }}/{{ activity.year }}</span>
      <span class="activity-location">• {{ activity.location }}</span>
    </div>
    {% if activity.links and activity.links.size > 0 %}
      <div class="activity-links">
        {% for link in activity.links %}
          <a href="{{ link.url }}" target="_blank">{{ link.name }}</a>{% unless forloop.last %} <span class="link-sep">|</span> {% endunless %}
        {% endfor %}
      </div>
    {% endif %}
    {% if activity.description %}
      <button class="dropdown-btn" onclick="toggleDescription(this)" aria-expanded="false" aria-controls="desc-{{ forloop.index }}">more ▼</button>
      <div class="activity-description" id="desc-{{ forloop.index }}" style="display:none;">
        {{ activity.description }}
      </div>
    {% endif %}
  </div>
{% endfor %}
</div>

<script>
function toggleDescription(btn) {
  let desc = btn.nextElementSibling;
  if (!desc || !desc.classList.contains("activity-description")) {
    desc = btn.parentElement.querySelector(".activity-description");
  }
  if (desc.style.display === "none" || desc.style.display === "") {
    desc.style.display = "block";
    btn.textContent = "less ▲";
    btn.setAttribute('aria-expanded', 'true');
  } else {
    desc.style.display = "none";
    btn.textContent = "more ▼";
    btn.setAttribute('aria-expanded', 'false');
  }
}

// Filter functionality
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const activityCards = document.querySelectorAll('.activity-card');
  
  filterButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      // Update active button
      filterButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Filter cards
      activityCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-type') === filter) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(-20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
});
</script>

<style>
.activities-filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--spacing-sm);
  margin: var(--spacing-xl) auto var(--spacing-lg);
  max-width: 900px;
  padding: 0 var(--spacing-lg);
}

.filter-btn {
  padding: var(--spacing-sm) var(--spacing-lg);
  background: var(--color-bg-primary);
  border: 2px solid var(--color-neutral-200);
  border-radius: var(--radius-full);
  color: var(--color-text-primary);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-sm);
  cursor: pointer;
  transition: all var(--transition-fast);
  text-transform: capitalize;
}

.filter-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
  transform: translateY(-2px);
}

.filter-btn.active {
  background: var(--gradient-primary);
  color: white;
  border-color: transparent;
  box-shadow: var(--shadow-md);
}

.activities-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  max-width: 900px;
  margin: 0 auto var(--spacing-3xl);
  padding: 0 var(--spacing-lg);
}

.activity-card {
  background: var(--color-bg-primary);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  padding: var(--spacing-xl);
  border: 2px solid var(--color-neutral-100);
  transition: all var(--transition-base);
  position: relative;
  opacity: 1;
  transform: translateY(0);
}

.activity-card.leader {
  border-left: 5px solid var(--color-highlight);
  background: linear-gradient(135deg, #fffbe5 0%, #fff8dc 100%);
}
.activity-card-header {
  display: flex;
  align-items: center;
  font-size: 1.17em;
  font-weight: 600;
  color: #223568;
  margin-bottom: 3px;
  gap: 12px;
}
.activity-emoji {
  font-size: 1.5em;
  margin-right: 7px;
}

.activity-title {
  font-weight: 600;
  letter-spacing: 0.01em;
  margin-bottom: 0;
}

.activity-meta {
  color: #697191;
  font-size: 1.02em;
  margin-bottom: 7px;
}

.activity-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
}
.activity-links a {
  font-weight: 500;
  margin-right: 0.7rem;
  font-size: 0.99rem;
  color: #2962ad;
  text-decoration: underline;
  border-radius: 2px;
  transition: background 0.13s, color 0.13s;
  padding: 2px 4px;
}
.activity-links a:hover {
  background: #f0f4ff;
  color: #193972;
}
.link-sep {
  color: #b5b5c3;
}

.dropdown-btn {
  background: #e6efff;
  border: none;
  color: #355fa8;
  padding: 6px 14px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 0.97em;
  margin-top: 8px;
  margin-bottom: 0;
  transition: background 0.18s, color 0.18s;
}
.dropdown-btn:hover {
  background: #dde8ff;
  color: #2b455d;
}
.activity-description {
  margin: 0 !important;
  padding: 16px 2px 0 2px !important;
  font-size: 1em;
  color: #3c4558;
  background: #fafbfe;
  border-radius: 0 0 9px 9px;
  border-top: 1px solid #e8eaef;
  transition: all 0.35s;
  display: none;
}
@media (max-width: 900px) {
  .activities-list { padding-left: 2vw; padding-right: 2vw;}
  .activity-card { padding: 15px 7vw; }
  .section-title { font-size: 1.3rem; }
}
.activity-links-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 7px;
}

.activity-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
}
</style>
