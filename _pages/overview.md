---
layout: default
usehighlight: true
usemathjax: true
supported_languages: [en, es]
---

<h1 style="color: #cc0000;">{% if site.jekyllacademic.homepage_title %}{{ site.jekyllacademic.homepage_title }}{% else %}About{% endif %}</h1>

I studied physics in La Plata, and moved to Barcelona back in 2018 to do a PhD in quantum information science and machine learning. Since 2025 I have settled back in La Plata.

I have co-created and lead the Quantum Machine Learning Group, at the Computer Vision Center of Barcelona (QML-CVC).The QML-CVC is an interdisciplinary research group, working with physicists, computer scientists, artists, psychologists and more! We like to study different frameworks in quantum physics under which the quantum AI symbiosis takes place, with a strong focus on evaluating the social impact of quantum tech.

I am enthusiastic in developing new narratives that help us elucidate interdisciplinary research directions, so as to unveiling its potential in citizen engagement for political causes. As part of this, I collaborate with Cátedra UAB-Cruilla, I strongly participate in outreach activities & talks, and also been teaching "Social Innovation" subject in the AI degree at UAB.

<hr>
<hr>

<!-- <b> Short bio: </b> <i>Matías Bilkis es licenciado en física (UNLP), doctor en física (Grup d'Informació Quàntica - Universitat Autònoma de Barcelona), co-fundador y director del Grupo de Quantum Machine Learning del Centro de Visión por Computador (QML-CVC) y responsable de artes & física cuántica de la Cátedra UAB-Cruilla. Su investigación ocurre en el campo interdisciplinar, en áreas tales como la física cuántica, la inteligencia artificial y la tecnología como elemento de inovación social. </i> -->
<hr>


<b> Short bio: </b> <i>Matías Bilkis holds a degree in physics (UNLP), a PhD in physics (Grup d'Informació Quàntica - Universitat Autònoma de Barcelona), co-founder and director of the Quantum Machine Learning Group at the Center for Computer Vision (QML-CVC), and is responsible for arts & quantum physics at the UAB-Cruilla Chair. His research takes place in interdisciplinary fields, in areas such as quantum physics, artificial intelligence, and technology as an element of social innovation.
<hr>

<!--
<div class="bio-container">
  <div class="language-toggle">
    <button onclick="switchLang('en')" class="active">EN</button>
    <button onclick="switchLang('es')">ES</button>
  </div>

  <div id="bio-content">
    <p class="en">**Quantum Research Leader** | AI Educator | Science Communicator  
    Pioneering quantum machine learning at [QML-CVC](https://qml.cvc.uab.es/) while bridging innovation between Europe and Latin America.</p>

    <p class="es" style="display:none">**Líder en Investigación Cuántica** | Educador en IA | Divulgador Científico  
    Desarrollando aprendizaje automático cuántico en [QML-CVC](https://qml.cvc.uab.es/) mientras conecto innovación entre Europa y Latinoamérica.</p>
  </div>
</div>

<style>
  .language-toggle { margin: 1em 0; }
  .language-toggle button {
    background: none;
    border: 1px solid #2D3748;
    padding: 0.3em 0.8em;
    margin-right: 0.5em;
    cursor: pointer;
    border-radius: 4px;
    font-family: inherit;
  }
  .language-toggle button.active {
    background: #2D3748;
    color: white;
  }
</style>

<script>
  function switchLang(lang) {
    // Toggle content visibility
    document.querySelectorAll('#bio-content p').forEach(p => {
      p.style.display = p.classList.contains(lang) ? 'block' : 'none';
    });

    // Update button states
    document.querySelectorAll('.language-toggle button').forEach(btn => {
      btn.classList.toggle('active', btn.onclick.toString().includes(`'${lang}'`));
    });

    // Update URL without reload
    history.replaceState(null, '', `?lang=${lang}`);
  }

  // Initialize based on URL or browser language
  document.addEventListener('DOMContentLoaded', () => {
    const lang = new URLSearchParams(location.search).get('lang')
               || (navigator.language.startsWith('es') ? 'es' : 'en');
    switchLang(lang);
  });
</script> -->
