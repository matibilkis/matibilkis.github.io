---
title: activities list
layout: default
permalink: /activities/
---
<div class="activities-list">
{% assign sorted_activities = site.data.activities | sort:"year" | reverse %}
{% for activity in sorted_activities %}
  <div class="activity-card{% if activity.type == 'leader' %} leader{% endif %}">
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
      <button class="dropdown-btn" onclick="toggleDescription(this)">more ▼</button>
      <div class="activity-description" style="display:none;">
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
  } else {
    desc.style.display = "none";
    btn.textContent = "more ▼";
  }
}
</script>

<style>
body { background: #f6f7fa; }

.section-title {
  font-size: 2rem;
  color: #223568;
  margin-top: 24px;
  margin-bottom: 36px;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: center;
}

.activities-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 780px;
  margin: 0 auto 40px auto;
}

.activity-card {
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 3px 20px rgba(20,30,60,0.07);
  padding: 26px 28px 18px 28px;
  border: 1.5px solid #e8eaef;
  transition: box-shadow 0.2s, border 0.2s;
  position: relative;
}
.activity-card.leader {
  border-left: 5px solid #ffd700;
  background: #fffbe6;
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
