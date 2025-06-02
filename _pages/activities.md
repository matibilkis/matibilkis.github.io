---
title: My Activities
layout: default
permalink: /activities/
---

<div class="activities-list">
{% assign sorted_activities = site.data.activities | sort:"day" | sort: "month"| sort: "year" | reverse  %}
{% for activity in sorted_activities %}
  <div class="activity-item">
    <p class="activity-title {{ activity.type }}">
      {% case activity.type %}
        {% when 'talk' %}🎤
        {% when 'panel' %}💬
        {% when 'podcast' %}🎙️
        {% when 'poster' %} 🪧
      {% endcase %}
      <b>{{ activity.title }}</b> <br>
    {{ activity.day}}/{{ activity.month}}/{{ activity.year}} • {{ activity.location }}
<br>
      {% for link in activity.links %}
        <a href="{{ link.url }}" target="_blank">{{ link.name }}</a>
        {% unless forloop.last %} || {% endunless %}
      {% endfor %}
    </p>        
      <hr>
{% endfor %}
</div>


<!-- <div class="activity-header">
  <span class="activity-date">{{ activity.date | date: "%b %Y" }}</span>
</div>

{% if activity.description %}
<p class="activity-description">
  {{ activity.description }}
</p>
{% endif %} -->




<style>
.activities-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  justify-content: flex-start;
  font-size: 0.93rem; /* Smaller base font size */
}
.activity-card {
  background: #f8fafd;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  padding: 1.1rem 1.2rem 1rem 1.2rem;
  min-width: 290px;
  max-width: 355px;
  flex: 1 1 320px;
  margin-bottom: 0.5rem;
  border-left: 4px solid #b3c6ff;
  transition: box-shadow 0.2s;
}
.activity-card.leader {
  border-left: 4px solid #ffd700;
  background: #fffbe6;
}
.activity-card-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.05rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
}
.activity-type {
  font-size: 0.7rem;
}

.activity-date, .activity-location {
  color: #888;
  font-size: 0.93rem;
  margin-left: 0.4rem;
}
.activity-meta {
  color: #4d5c7d;
  font-size: 0.97rem;
  margin-bottom: 0.38rem;
}
.activity-description {
  font-size: 0.6rem;
  color: #444;
  margin-bottom: 0.28rem;
}
.activity-links a {
    font-weight: bold;
  margin-right: 0.7rem;
  font-size: 0.93rem;
  color: #3562a8;
  text-decoration: underline;
}
</style>
