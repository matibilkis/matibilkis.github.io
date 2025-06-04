---
layout: default
title: Academic Journey
---

<div class="bio-timeline">
  <h1 class="bio-title">Academic & Research Milestones</h1>

  <div class="bio-card">
    <div class="bio-card-title">Licenciate Thesis</div>
    <div class="bio-card-desc">
      <span class="bio-card-subtitle"><i><a href="http://sedici.unlp.edu.ar/handle/10915/67996">Entropía Condicional y correlaciones cuánticas</a></i></span><br>
      Supervised by <b>Raúl Rossignonli</b> &amp; <b>Norma Canosa</b> at UNLP.
    </div>
  </div>

  <div class="bio-card">
    <div class="bio-card-title">PhD Thesis</div>
    <div class="bio-card-desc">
      <span class="bio-card-subtitle"><a href="https://drive.google.com/file/d/1se8t7J-68Yr_K-4lq_TZO94QsO3_eEjR/view">Decision making in quantum environments"</a></span><br>
      Directed by <b>John Calsamiglia</b> at <i>Grup d'Informació Quàntica</i>,
      Autonomous University of Barcelona.
    </div>
  </div>

  <div class="bio-card">
    <div class="bio-card-title">Quantum machine learning Group </div>
    <div class="bio-card-desc">
      Originally founded as a postdoc project, <a href="https://qml.cvc.uab.es">QML-CVC</a> swiftly grew into a full research group at the Computer Vision Center, Barcelona.<br>
      <span style="font-size:0.97em;">This remarkable adventure wouldn't have been possible without <b>Fernando Vilariño</b>.</span>
    </div>
  </div>
</div>


<style>
.bio-timeline {
  width: 100%;
  max-width: none;
  margin: 8px 0 20px 0;     /* Reduced top margin (was 40px) */
  padding: 0 0;              /* Edge-to-edge layout */
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.bio-title {
  font-size: 2.1em;
  font-weight: 700;
  color: #223568;
  letter-spacing: 0.6px;
  margin: 12px 0 18px 0;     /* Small top and bottom margin for the title */
  text-align: center;
}

.bio-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(40,45,64,0.09);
  padding: 22px 38px 17px 38px;   /* More internal width */
  border-left: 5px solid #1976d2;
  margin-bottom: 0;
  transition: box-shadow 0.18s;
  width: 96%;
  align-self: center;
}

.bio-card-title {
  font-size: 1.15em;
  font-weight: 600;
  color: #1a4187;
  margin-bottom: 2px;
}
.bio-card-desc {
  color: #3d4257;
  font-size: 1.07em;
}
.bio-card-subtitle {
  color: #596098;
  font-size: 1.02em;
}
@media (max-width: 700px) {
  .bio-timeline { padding: 0 2vw; }
  .bio-card { padding: 12px 2vw; width: 98%; }
  .bio-title { font-size: 1.14em; }
}
</style>
