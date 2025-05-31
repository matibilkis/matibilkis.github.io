---
title: My Activities
layout: default
permalink: /activities/
---

<div class="activities-list">
{% assign sorted_activities = site.data.activities | sort: "date" |  %}
{% for activity in sorted_activities %}
  <div class="activity-item">
    <div class="activity-header">
      <span class="activity-date">{{ activity.date | date: "%b %Y" }}</span>
      <span class="activity-type {{ activity.type }}">
        {% case activity.type %}
          {% when 'talk' %}🎤 Talk
          {% when 'panel' %}💬 Panel
          {% when 'podcast' %}🎙️ Interview
        {% endcase %}
      </span>
    </div>

    <h3 class="activity-title">{{ activity.title }}</h3>

    <div class="activity-meta">
      {{ activity.event }} • {{ activity.location }}
    </div>

    {% if activity.description %}
    <p class="activity-description">
      {{ activity.description }}
    </p>
    {% endif %}

    <div class="activity-links">
      {% for link in activity.links %}
        <a href="{{ link.url }}" target="_blank">{{ link.name }}</a>
        {% unless forloop.last %}  {% endunless %}
      {% endfor %}
    </div>
  </div>
{% endfor %}
</div>

<style>
.activities-list {
  font-family: inherit;
  max-width: 800px;
  margin: 0 auto;
}

.activity-item {
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0,0,0,0.1);
}

.activity-header {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #555;
}

.activity-date {
  font-weight: 500;
}

.activity-type {
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  background: #f5f5f5;
}

.activity-title {
  margin: 0.2rem 0 0.5rem;
  font-size: 1.2rem;
}

.activity-meta {
  color: #666;
  margin-bottom: 0.8rem;
  font-size: 0.95rem;
}

.activity-links a {
  margin-right: 0.8rem;
  font-size: 0.9rem;
}
</style>
