---
title: research
layout: default
permalink: /research/
---
<head>
  <link rel="stylesheet" href="{{ '/assets/css/styles.css' | relative_url }}">
</head>
<h1 class="section-title">Papers, Reports & Projects</h1>

<div class="research-intro">
  For a full and updated list of publications, check out my
  <a href="https://scholar.google.com/citations?user=bFFWTIEAAAAJ&hl=en">Google Scholar</a>
  and <a href="https://qml.cvc.uab.es/">my group's website</a>. Also check out <a href="https://github.com/matibilkis">my GitHub</a>.
  Our weekly QML-CVC seminars are also of particular interest. If you'd like to join, <a href="/contact/">reach out!</a>
</div>


<div class="publications-list">
{% assign sorted_activities = site.data.publications | sort:"order" %}
{% for activity in sorted_activities %}
  <div class="publication-card">
    <h3 class="publication-title">{{ activity.title }}</h3>
    {% if activity.authors or activity.year %}
    <div class="publication-meta">
      {% if activity.authors %}<span class="publication-authors">{{ activity.authors }}</span>{% endif %}
      {% if activity.year %}<span class="publication-year">{{ activity.year }}</span>{% endif %}
    </div>
    {% endif %}
    <div class="dropdown-tabs">
      <button class="tab-btn active" onclick="showTab(this, 'abstract-{{forloop.index}}')">Abstract</button>
      <button class="tab-btn" onclick="showTab(this, 'pdf-{{forloop.index}}')">PDF</button>
    </div>
    <div class="tab-content" id="abstract-{{forloop.index}}">
      {{ activity.description }}
    </div>
    <div class="tab-content" id="pdf-{{forloop.index}}" style="display:none;">
      <iframe src="{{activity.url}}"
        style="width:100%;height:60vh;border:2px solid #d5d8df;border-radius:8px;box-shadow:0 2px 12px #14203c10;background:#f7fafd;"
        allowfullscreen
        loading="lazy"
        title="PDF preview of {{ activity.title }}"></iframe>
    </div>
  </div>
{% endfor %}
</div>

<script>
function showTab(btn, tabId) {
  var container = btn.closest('.publication-card');
  var tabs = container.querySelectorAll('.tab-content');
  var buttons = container.querySelectorAll('.tab-btn');
  tabs.forEach(function(tab){ tab.style.display = 'none'; });
  buttons.forEach(function(b){ b.classList.remove('active'); });
  container.querySelector('#' + tabId).style.display = 'block';
  btn.classList.add('active');
}
</script>
