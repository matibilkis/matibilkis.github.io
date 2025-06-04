---
title: Talks
layout: default
permalink: /talks/
---

<div class="vertical-talks-section">
  <div class="talk-card">
    <div class="talk-header">
      <h2 class="talk-title">Tres problemas cuánticos, QML-CVC y muchos desafíos</h2>
    </div>
    <div class="talk-video-container">
      <iframe src="https://www.youtube.com/embed/ajyC4ASmHdg" title="Tres problemas cuánticos, QML CVC y muchos desafíos"
        frameborder="0" allowfullscreen></iframe>
    </div>
    <p class="talk-description">
      Empezaremos esta charla revisando tres escenarios diferentes en donde el machine learning logra un punto de encuentro con las tecnologías cuánticas. Cada uno de estos «use-cases» nos servirá como excusa para explicar distintas características de los sistemas cuánticos y las dificultades que se aparecen a la hora de intentar manipularlos.<br><br>
      Continuaremos presentando nuestro grupo emergente (QML-CVC), haciendo un raconto de nuestra experiencia y exponiendo nuestras líneas de investigación. Concluiremos compartiendo una serie de retos y desafíos que nuestro grupo se propone afrontar en la proximidad, y que en el contexto de esta charla han de ser considerados como una invitación a pensar y colaborar en el desarrollo del «aprendizaje automático cuantico».
    </p>
  </div>


  <div class="talk-card">
    <div class="talk-header">
      <h2 class="talk-title">La belleza del error: la creatividad en la física, en la IA y en la música</h2>
    </div>
    <div class="talk-video-container">
      <iframe src="https://www.youtube.com/embed/Y1urPDJekxY?start=1460" title="Mestizajes - Día 3"
        frameborder="0" allowfullscreen></iframe>
    </div>
    <p class="talk-description">
      <i>How much do we assert by denying? Does beauty emerge from symmetry, or rather from the lack of it? Where is the frontier between casuality and causality? What are the limits of our creation? What are the limits of our creativity?</i><br><br>
      This talk takes place between these questions and the lack of their answer. With the intention of making room for debate on what it means to do science and/or art, we will perform a little experiment where Artificial Intelligence (AI) agents interact with musicians in real-time.
      The question on how creation, beauty, mistakes and the lack of answers relate with each other will guide us along this journey.
    </p>
  </div>

  <div class="talk-card">
    <div class="talk-header">
      <h2 class="talk-title">My Quantum machine learning journey</h2>
    </div>
    <div class="talk-video-container">
      <iframe src="https://www.youtube.com/embed/87bYG1jj308?start=2180" title="A Quantum Machine Learning journey"
        frameborder="0" allowfullscreen></iframe>
    </div>
    <p class="talk-description">
      The Quantum Machine Learning seminar was held at CVC on October 20. It started with a presentation and debate with Dr. Artur García, from the Barcelona Supercomputing Center and founder of Qilimanjaro, who provided a general approach to the current challenges in the field; followed by an introductory talk by Dr. Matías Bilkis, Research Fellow at CVC's Quantum Machine Learning Group.
    </p>
  </div>

  <!-- <div class="talk-card">
    <div class="talk-header">
      <h2 class="talk-title" href="https://www.youtube.com/watch?v=qciOSnGgIEk&t=6s">Tecnologías  Cuánticas: Oportunidades de cooperación entre el sector privado y el sistema público de CyT en Argentin</h2>
    </div>
    <div class="talk-video-container">
      <iframe src="https://www.youtube.com/watch?v=qciOSnGgIEk&t=6s" title="T"
        frameborder="0" allowfullscreen></iframe>
    </div>
    <p class="talk-description">
      It is a delicate moment for Science and Technology in Argentina, while there is an AI advent globally. Quantum technology beyond computing: i) sensing, ii)comms, iii) computing, iv) simulation. Which role do we want the public STEM R&D fabric to occupy in Argentina? Which tools do we have available to revert brain trips? (fuga de cerebros) Does it make sense to impulse a quantum ecosystem in latin america?
    </p>
  </div> -->

</div>

<style>
.talks-title {
  text-align: center;
  margin-top: 22px;
  margin-bottom: 44px;
  color: #1a296d;
  font-size: 2.2rem;
  letter-spacing: 0.6px;
  font-weight: 700;
}
.vertical-talks-section {
  display: flex;
  flex-direction: column;
  gap: 2.7rem;
  align-items: center;
  width: 100%;
  max-width: 950px;
  margin: auto;
  padding: 0 0 32px 0;
}
.talk-card {
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 6px 36px rgba(36, 52, 84, 0.09);
  padding: 2.2rem 2rem 1.3rem 2rem;
  width: 100%;
  max-width: 750px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-left: 5px solid #1976d2;
}
.talk-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.4rem;
  gap: 16px;
}
.talk-title {
  font-size: 1.27rem;
  font-weight: 600;
  color: #223568;
  margin: 0;
}
.talk-badge {
  background: #e7f3ff;
  color: #1976d2;
  font-size: 0.96em;
  font-weight: 500;
  border-radius: 5px;
  padding: 4px 13px;
  margin-left: 12px;
  letter-spacing: 0.04em;
  border: 1px solid #b7dafb;
}
.talk-video-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1.3rem;
}
.talk-video-container iframe {
  width: 98%;
  max-width: 630px;
  height: 340px;
  border-radius: 8px;
  box-shadow: 0 2px 16px #bccbe347;
  border: none;
}
.talk-description {
  font-size: 1.07em;
  line-height: 1.8;
  color: #3d4257;
  margin-top: 0.5em;
}
@media (max-width: 800px) {
  .vertical-talks-section, .talk-card {
    max-width: 99vw;
    padding-left: 3vw;
    padding-right: 3vw;
  }
  .talk-video-container iframe {
    width: 97vw;
    max-width: 98vw;
    height: 230px;
  }
}
</style>
