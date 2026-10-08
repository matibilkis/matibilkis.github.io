---
title: Matías Bilkis
description: "Página web personal de Matías Bilkis."
permalink: /
---

<section class="hero">
  <div>
    <h1><span class="eyebrow">Página web personal de</span><span>Matías</span><span>Bilkis</span></h1>
    <p class="lede">Bienvenidx a mi página web personal, y muchas gracias por tu interés. Mi intención con la página web es poder plasmar algunas de las cosas que estoy orgulloso tanto profesionales, de hobbies, y todas las combinaciones que se me ocurran entre medio.</p>
  </div>
  <img class="hero-photo" src="{{ '/assets/img/foto_web.jpg' | relative_url }}" alt="Matías Bilkis" width="900" height="1060" fetchpriority="high">
</section>

<nav class="index" aria-label="Índice de secciones">
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

Soy Matías Bilkis, oriundo de la ciudad de La Plata, Argentina. Me formé en diferentes lugares, tanto en la UNLP, como en el [Max Nordau](https://www.maxnordau.com.ar/).

Estudié Licenciatura en Física entre 2013 y 2023, e hice [una tesis](https://sedici.unlp.edu.ar/handle/10915/67996) dirigida por el Dr. Rossignoli y la Dra. Canosa, sobre teoría de la información y física cuántica.
{: data-when="2013 – 2023"}

Entre 2018 y 2023 hice mi doctorado en física, en el [giq-UAB](https://webs.uab.cat/giq/) Universidad Autónoma de Barcelona, <em lang="ca">i he apregut a parlar una mica de catalá!</em> Mi tesis doctoral, dirigida por el Dr. Calsamiglia Costa, se titula ["Toma de decisiones en entornos cuánticos"](https://www.tdx.cat/handle/10803/690744#page=1).
{: data-when="2018 – 2023"}

Entre 2023 y 2025 estuve apoyando la creación de un grupo de investigación en el [Centro de Visión por Computador](https://www.cvc.uab.es/), junto al Dr. Vilariño, donde co-dirigimos el ["Quantum Machine Learning group"](https://qml.cvc.uab.es/). Entre las actividades académicas del grupo, está reflejada una fuerte componente interdisciplinar, en fuerte colaboración con grupos de artistas y entidades de gobernanza, como por ejemplo Fundación Épica Fura dels Baus.
{: data-when="2023 – 2025"}

Durante 2025 me radiqué nuevamente en Argentina, e intento apoyar la creación de un ecosistema local de tecnologías cuánticas e IA a través de mi empresa [QutSur](https://qutsur.com/). Además, he creado una [diplomatura en Tecnologías Cuánticas y sus aplicaciones](https://noticias.uai.edu.ar/facultades/tecnolog%C3%ADa-inform%C3%A1tica/2026/ia-y-computaci%C3%B3n-cu%C3%A1ntica-la-convergencia-tecnol%C3%B3gica-que-comienza-a-redefinir-la-industria/) en la Universidad Abierta Interamericana, donde actualmente me desempeño como profesor titular. Asimismo soy profesor visitante en Exactas-UBA, donde dicto la materia optativa ["Introducción teórico-práctica al Aprendizaje por Refuerzo"](https://www.dc.uba.ar/profesores-visitantes/) y donde colaboro estrechamente con el [Laboratorio de Inteligencia Artificial Aplicada](https://www.liaa.dc.uba.ar/personas-que-hacen-posible-el-liaa/) (LIAA). También soy miembro del [Departamento de Física de la Universidad Nacional de La Plata](https://www.fisica.unlp.edu.ar/).
{: data-when="Desde 2025"}

Seguramente me dejo cosas en el tintero: si estás interesadx en mi recorrido profesional, este es mi [CV resumido](https://drive.google.com/drive/u/0/folders/1I2b9ReY_RXwT3RSx2ZiNq_Mbb-X6O6rk) y [CV extendido](https://drive.google.com/drive/u/0/folders/1I2b9ReY_RXwT3RSx2ZiNq_Mbb-X6O6rk).

Tengo una fuerte convicción de que el futuro tanto académico, negocios, industrial, social, y por sobre todo político estará escrito por equipos que logren articular saberes y prácticas genuinamente interdisciplinares. Es de mi interés fomentar, pensar y ayudar a direccionar esta clase de colaboraciones, tanto a nivel regional (Buenos Aires, Argentina, Sudamérica), como global (en colaboración con equipos de trabajo, empresas, organismos de gobierno y amigos del resto del mundo). En particular, me interesa disponer de los avances tecnológicos (en una obviamente ebullición constante) al apoyo de la resolución de problemas complejos de índole política y social.
{: .statement}

</section>

<section class="section" id="contacto">
  <h2>Contacto</h2>
  <div class="contact-grid">
    <div>
      <p>Si querés contactarme, <span class="mail">matiasbilkis[at]gmail.com</span> es la casilla que reviso usualmente.</p>
      <p class="label">Otros correos institucionales</p>
      <ul class="mails">
        <li>matias[at]qutsur.com</li>
        <li>matias.bilkis[at]fisica.unlp.edu.ar</li>
        <li>matias.bilkis[at]uab.edu.ar</li>
        <li>mbilkis[at]liaa.dc.edu.ar</li>
      </ul>
    </div>
    <div>
      <p>También podés escribir acá (re cool)</p>
      <!-- Sin backend todavía: al enviar se abre el cliente de correo con el mensaje armado. -->
      <form class="form" id="form-contacto">
        <label>Nombre <input type="text" name="nombre" autocomplete="name" required></label>
        <label>Email <input type="email" name="email" autocomplete="email" required></label>
        <label>Mensaje <textarea name="mensaje" rows="5" required></textarea></label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  </div>
</section>

<script>
  document.getElementById('form-contacto').addEventListener('submit', function (event) {
    event.preventDefault();
    var data = new FormData(event.target);
    var to = ['matiasbilkis', 'gmail.com'].join('@');
    var subject = 'Contacto desde la web: ' + data.get('nombre');
    var body = data.get('mensaje') + '\n\n' + data.get('nombre') + ' <' + data.get('email') + '>';
    window.location.href = 'mailto:' + to + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });
</script>
