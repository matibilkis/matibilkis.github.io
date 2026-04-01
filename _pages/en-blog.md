---
layout: default
title: Blog
lang: en
permalink: /en/blog
description: "Notes and essays by Matias Bilkis on quantum technologies, AI, and social impact."
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
      <a class="blog-read-more" href="{{ post.url | relative_url }}">read</a>
    </article>
    {% endfor %}
  </div>
  {% else %}
  <p class="blog-intro">No posts yet. Add your first one in <code>_posts</code>.</p>
  {% endif %}
</div>
