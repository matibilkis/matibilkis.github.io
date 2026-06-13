---
layout: default
title: Blog
permalink: /blog
lang: es
description: "Notas y ensayos de Matias Bilkis sobre tecnologías cuánticas, IA e impacto social."
---

<div class="page-content blog-page">
  <h1 class="page-title">Blog</h1>

  {% if site.posts.size > 0 %}
  <div class="blog-list">
    {% for post in site.posts %}
    <article class="blog-item">
      <div class="blog-item-meta">{{ post.date | date: "%b %-d, %Y" }}</div>
      <h2 class="blog-item-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      {% if post.summary %}
      <p class="blog-item-summary">{{ post.summary }}</p>
      {% elsif post.excerpt %}
      <p class="blog-item-summary">{{ post.excerpt | strip_html | truncate: 180 }}</p>
      {% endif %}
      <a class="blog-read-more" href="{{ post.url | relative_url }}">leer</a>
    </article>
    {% endfor %}
  </div>
  {% else %}
  <p class="blog-intro">Todavía no hay posts. Agregá el primero en <code>_posts</code>.</p>
  {% endif %}
</div>
