---
title: talks & more
layout: default
permalink: /talks/
---

<section class="talks-intro">
  <h1>Talks, panels and live demos</h1>
  <div class="research-intro">
  <p>Browse a curated selection of talks, lectures, and live demonstrations. Each session brings together cutting-edge research, creative experimentation, and real-time engagement across science & arts.</p>
  </div>


</section>

<div class="vertical-talks-section">
  {% assign talks = site.data.talks %}
  {% for talk in talks %}
    <article class="talk-card">
      <div class="talk-header">
        <h2 class="talk-title">{{ talk.title }}</h2>
        {% if talk.date or talk.event %}
          <div class="talk-meta">
            {% if talk.event %}
              <span class="talk-event">{{ talk.event }}</span>
            {% endif %}
            {% if talk.date %}
              <span class="talk-date">{{ talk.date }}</span>
            {% endif %}
          </div>
        {% endif %}
      </div>
      <div class="talk-video-container">
        {% if talk.url contains "youtube" %}
          <div class="video-responsive">
            <iframe src="{{ talk.url }}" title="{{ talk.title }}"
              frameborder="0" allowfullscreen></iframe>
          </div>
        {% else %}
        <div class="talk-video-container">
        <a href="{{ talk.url }}">
          <img src="{{ talk.url }}" alt="{{ talk.title }}" style="width:100%;height:100%;object-fit:cover;">
        </a>
      </div>
        {% endif %}
      </div>
      <p class="talk-description">
        {{ talk.description }}
      </p>
      {% if talk.tags %}
        <ul class="talk-tags">
          {% for tag in talk.tags %}
            <li>{{ tag }}</li>
          {% endfor %}
        </ul>
      {% endif %}
    </article>
  {% endfor %}
</div>

<style>
.talks-intro {
  max-width: 700px;
  margin: -2rem auto -2.5rem auto; /* Reduce bottom margin */
  text-align: justify;
  color: #253264;
}
.talks-intro h1 {
  font-size: 2.5rem;
  margin-bottom: .15rem; /* Even smaller gap */
  font-weight: 700;
}
.talks-intro p {
  font-size: 0.8rem;
  color: #555d77;
  margin: 0 auto 0.0rem auto; /* Add slight bottom margin for separation, or set to 0 */
}

.vertical-talks-section {
  display: flex;
  flex-direction: column;
  gap: 0.8rem; /* Minimum vertical spacing between cards */
  align-items: center;
  width: 100%;
  max-width: 900px;
  margin: auto;
  padding: 1.2rem 0 0 0; /* Top padding small; no bottom padding */
}
.talk-card {
  background: #f8fafd;
  border-radius: 14px;
  box-shadow: 0 2px 24px rgba(22,48,95,.08);
  padding: 1.6rem 2rem 1.5rem 2rem;
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: box-shadow 0.13s, transform 0.13s;
}
.talk-card:hover {
  box-shadow: 0 8px 32px rgba(22,48,95,.13);
  transform: translateY(-2px) scale(1.01);
}
.talk-header {
  width: 100%;
  margin-bottom: .8rem;
}
.talk-title {
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: .2rem;
  color: #27326d;
}
.talk-meta {
  color: #6b728e;
  font-size: .97rem;
  margin-bottom: 1rem;
}
.talk-meta span {
  margin-right: 0.9em;
}
.talk-video-container {
  width: 100%;
  margin: 0.5rem 0 0.8rem 0;
}
.video-responsive {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
}
.video-responsive iframe {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  border: 0;
}
.talk-description {
  margin-top: .08rem;
  margin-bottom: 0.2rem;
  font-size: 1.08rem;
  color: #444;
}
.talk-tags {
  list-style: none;
  margin: 0; padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: .6em;
}
.talk-tags li {
  background: #dde8ff;
  color: #2746a6;
  padding: .24em .7em;
  border-radius: 10px;
  font-size: .94em;
  font-weight: 500;
}

/* Mobile styling */
@media (max-width: 900px) {
  .vertical-talks-section, .talk-card, .talks-intro {
    max-width: 99vw;
    padding: 1rem;
  }
}
@media (max-width: 600px) {
  .talk-card {
    padding: 1rem .5rem;
  }
}
@media (max-width: 900px) {
  .vertical-talks-section, .talk-card, .talks-intro {
    max-width: 100vw;
    width: 100vw;
    padding: 0;
    margin: 0 auto;
  }
  .talk-card iframe,
  .video-responsive iframe {
    width: 100vw !important;
    max-width: 100vw !important;
    height: 250px;
  }
}
body, html {
  overflow-x: hidden;
}
</style>
