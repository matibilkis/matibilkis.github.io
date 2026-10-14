---
title: Matías Bilkis
description: "Personal website of Matías Bilkis."
permalink: /
---

<section class="hero">
  <div>
    <h1><span class="eyebrow">Personal website of</span><span>Matías</span><span>Bilkis</span></h1>
    <p class="lede">Welcome to my personal website, and thanks for your interest. My intention with this website is to put together some of the things I'm proud of — professional, hobbies, and every combination of the two I can think of.</p>
  </div>
  <img class="hero-photo" src="{{ '/assets/img/foto_web.jpg' | relative_url }}" alt="Matías Bilkis" width="900" height="1060" fetchpriority="high">
</section>

<nav class="index" aria-label="Section index">
  <ol>
    {%- for item in site.data.nav -%}
    {%- unless item.url contains '#' %}
    <li><a href="{{ item.url | relative_url }}">{{ item.title }}</a></li>
    {%- endunless -%}
    {%- endfor %}
  </ol>
</nav>

<section class="section bio" id="who" markdown="1">

## ¿Who am ai??

I'm Matías Bilkis, originally from the city of La Plata, Argentina. I trained in a number of places, including the UNLP.

I studied a Licenciatura in Physics between 2013 and 2023, and wrote [a thesis](https://sedici.unlp.edu.ar/handle/10915/67996) supervised by Dr. Rossignoli and Dr. Canosa, on information theory and quantum physics.
{: data-when="2013 – 2023"}

Between 2018 and 2023 I did my PhD in physics at [giq-UAB](https://webs.uab.cat/giq/), Universitat Autònoma de Barcelona, <em lang="ca">i he apregut a parlar una mica de catalá!</em> My doctoral thesis, supervised by Dr. Calsamiglia Costa, is titled ["Decision-making in quantum environments"](https://www.tdx.cat/handle/10803/690744#page=1).
{: data-when="2018 – 2023"}

Between 2023 and 2025 I helped set up a research group at the [Computer Vision Center](https://www.cvc.uab.es/), together with Dr. Vilariño, where we co-directed the ["Quantum Machine Learning group"](https://qml.cvc.uab.es/). The group's academic activities reflect a strong interdisciplinary streak, with close collaboration with groups of artists and governance bodies, such as Fundació Épica Fura dels Baus.
{: data-when="2023 – 2025"}

During 2025 I moved back to Argentina, where I'm trying to help build a local ecosystem for quantum technologies and AI through my company [QutSur](https://qutsur.com/). I've also created a [diploma program in Quantum Technologies and their applications](https://noticias.uai.edu.ar/facultades/tecnolog%C3%ADa-inform%C3%A1tica/2026/ia-y-computaci%C3%B3n-cu%C3%A1ntica-la-convergencia-tecnol%C3%B3gica-que-comienza-a-redefinir-la-industria/) at Universidad Abierta Interamericana, where I currently work as a part-time professor. I'm also a visiting professor at Exactas-UBA, where I teach the elective course ["Introduction to Reinforcement Learning: Theory and Practice"](https://www.dc.uba.ar/profesores-visitantes/) and work closely with the [Applied Artificial Intelligence Laboratory](https://www.liaa.dc.uba.ar/personas-que-hacen-posible-el-liaa/) (LIAA). I'm also a member of the [Physics Department of the Universidad Nacional de La Plata](https://www.fisica.unlp.edu.ar/).
{: data-when="Since 2025"}

I'm sure I'm leaving things out: if you're interested in my professional background, here's my [short CV](https://drive.google.com/drive/u/0/folders/1I2b9ReY_RXwT3RSx2ZiNq_Mbb-X6O6rk) and [extended CV](https://drive.google.com/drive/u/0/folders/1I2b9ReY_RXwT3RSx2ZiNq_Mbb-X6O6rk).

I have a strong conviction that the future — academic, business, industrial, social, and above all political — will be written by teams that manage to bring together genuinely interdisciplinary knowledge and practice. I'm interested in fostering, thinking through, and helping steer this kind of collaboration, both regionally (Buenos Aires, Argentina, South America) and globally (working with teams, companies, government bodies, and friends from the rest of the world). In particular, I'm interested in putting technological advances — which are obviously in constant flux — to work on complex problems of a political and social nature.
{: .statement}

</section>

<section class="section" id="contact">
  <h2>Contact</h2>
  <div class="contact-grid">
    <div>
      <p>If you'd like to get in touch, <span class="mail">matiasbilkis[at]gmail.com</span> is the inbox I check most often.</p>
      <p class="label">Other institutional emails</p>
      <ul class="mails">
        <li>matias[at]qutsur.com</li>
        <li>matias.bilkis[at]fisica.unlp.edu.ar</li>
        <li>matias.bilkis[at]uab.edu.ar</li>
        <li>mbilkis[at]liaa.dc.edu.ar</li>
      </ul>
    </div>
    <div>
      <p>You can also write here (pretty cool)</p>
      <!-- No backend yet: submitting opens the user's email client with the message drafted. -->
      <form class="form" id="form-contacto">
        <label>Name <input type="text" name="nombre" autocomplete="name" required></label>
        <label>Email <input type="email" name="email" autocomplete="email" required></label>
        <label>Message <textarea name="mensaje" rows="5" required></textarea></label>
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
</section>

<script>
  document.getElementById('form-contacto').addEventListener('submit', function (event) {
    event.preventDefault();
    var data = new FormData(event.target);
    var to = ['matiasbilkis', 'gmail.com'].join('@');
    var subject = 'Contact from the website: ' + data.get('nombre');
    var body = data.get('mensaje') + '\n\n' + data.get('nombre') + ' <' + data.get('email') + '>';
    window.location.href = 'mailto:' + to + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });
</script>
