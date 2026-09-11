<script setup lang="ts">
useSeoMeta({ title: 'Centre de yoga intégral à Ixelles' })
</script>

<template>
  <main>
    <section class="hero">
      <p class="hero-kicker">Centre de yoga intégral · Bruxelles</p>
      <h1>Yoga<br>avec Creyda</h1>
      <div class="hero-intro">
        <p>Une pratique traditionnelle pour retrouver le mouvement juste, le souffle et l’attention.</p>
        <NuxtLink to="/contact" class="text-link">Réserver un cours <span>↘</span></NuxtLink>
      </div>
    </section>

    <section class="opening wrap">
      <aside>
        <p>Des cours accessibles à tous,<br>au cœur d’Ixelles.</p>
        <NuxtLink to="/contact" class="text-link">Cours d’essai <span>↘</span></NuxtLink>
        <RadiantMark class="sun-mark" />
      </aside>
      <div class="opening-main">
        <h2>Quand une sagesse ancienne rencontre votre quotidien.</h2>
        <img src="/images/pratique-yoga.jpg" alt="Pratique attentive du yoga au centre Creyda">
        <p class="opening-statement">Hatha Yoga, Prânayâma et méditation Dhyâna réunis dans une expérience cohérente du corps et de l’esprit.</p>
      </div>
    </section>

    <section class="practice-band">
      <div class="practice-image"><img src="/images/cours-groupe.jpg" alt="Pratique collective de yoga au centre Creyda"></div>
      <div class="practice-copy">
        <p class="eyebrow">Une approche intégrale</p>
        <h2>Une pratique attentive, loin de la performance.</h2>
        <div class="practice-list">
          <div><span>01</span><h3>Hatha Yoga</h3><p>Des postures tenues avec patience, sans rechercher la performance.</p></div>
          <div><span>02</span><h3>Prânayâma</h3><p>Une dynamique du souffle qui nourrit et régule l’ensemble de l’être.</p></div>
          <div><span>03</span><h3>Dhyâna</h3><p>La méditation pour mieux se connaître et cultiver la sérénité.</p></div>
        </div>
      </div>
    </section>

    <section id="horaires" class="schedule wrap">
      <div>
        <p class="eyebrow">Horaires</p>
        <h2>Pratiquer au fil de la semaine.</h2>
        <p>Les cours durent au minimum 90 minutes. Ils sont ouverts aux personnes débutantes comme avancées.</p>
      </div>
      <div class="schedule-cards">
        <article><p>Matin</p><strong>10h30 — 12h00</strong><span>Du mardi au vendredi</span></article>
        <article><p>Fin de journée</p><strong>17h30 — 19h00</strong><span>Du dimanche au vendredi</span></article>
        <p class="schedule-note">Les séances de bien-être sont proposées sur réservation téléphonique.</p>
      </div>
    </section>

    <section class="res-teaser">
      <div class="res-mark">R.E.S.</div>
      <div>
        <p class="eyebrow">Rythme · Équilibre · Synchronicité</p>
        <h2>« Toute évolution commence par soi. »</h2>
        <p>Une méthode de développement personnel créée par Patrick Noblet, nourrie par le yoga, la méditation, le qi gong et un parcours de vie singulier.</p>
        <NuxtLink to="/methode-res" class="text-link">Explorer la méthode <span>→</span></NuxtLink>
      </div>
    </section>

    <section class="visit wrap">
      <div><img src="/images/centre-creyda.jpg" alt="Façade du centre Creyda au 106 avenue Général Médecin Derache"></div>
      <div class="visit-copy">
        <p class="eyebrow">Nous trouver</p>
        <h2>Un centre de proximité à Ixelles.</h2>
        <p>106 avenue Général Médecin Derache<br>1050 Ixelles, Bruxelles</p>
        <p><strong>Bus</strong> 71, 72, 95, N09 — arrêt Cimetière d’Ixelles<br><strong>Tram</strong> 8, 25 — arrêt ULB</p>
        <NuxtLink to="/contact" class="text-link">Préparer votre visite <span>→</span></NuxtLink>
      </div>
    </section>
  </main>
</template>
