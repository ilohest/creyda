<script setup lang="ts">
useSeoMeta({ title: 'Méthode R.E.S.' })
const steps = [
  ['Le Coq', 'Stabilité psychique et introspection par le qi gong, le yoga et la méditation.'],
  ['Le Tigre', 'Stabilité physique et puissance grâce aux postures toniques et à l’isométrie.'],
  ['Le Dragon', 'Élasticité, souplesse et liberté de la colonne vertébrale.'],
  ['L’Aigle', 'Conscience de l’espace et déplacement sans entraves.'],
  ['Le Singe', 'Prise de hauteur et compréhension globale des gestes, pensées et paroles.']
]
</script>

<template>
  <main>
    <PageIntro eyebrow="Rythme · Équilibre · Synchronicité" title="Une méthode pour vivre autrement." text="Patrick Noblet a conçu la méthode R.E.S. à partir de son expérience, du yoga, de la méditation et des arts martiaux." />
    <section class="quote-section wrap"><blockquote>« Vous devriez être le changement que vous souhaitez voir dans le monde. »</blockquote><cite>— Gandhi</cite></section>
    <section class="split-copy wrap">
      <h2>Revenir à l’essentiel.</h2>
      <div><p>La méthode R.E.S. est une démarche corporelle, personnelle et philosophique. Elle invite chacun à retrouver un rythme naturel, à prendre ses responsabilités et à construire un équilibre durable.</p><p>Plus qu’une somme d’exercices, elle relie yoga, relaxation, visualisation, méditation, massages et réflexion pour accompagner un changement structurel.</p></div>
    </section>
    <section class="steps wrap">
      <p class="eyebrow">Le parcours</p><h2>Un changement en cinq étapes.</h2>
      <ol><li v-for="(step, index) in steps" :key="step[0]"><span>0{{ index + 1 }}</span><div><h3>{{ step[0] }}</h3><p>{{ step[1] }}</p></div></li></ol>
    </section>
    <section class="res-photo wrap"><img src="/images/accompagnement.jpg" alt="Patrick Noblet accompagnant une posture de yoga"><div><p class="eyebrow light">Formation</p><h2>Approfondir puis transmettre.</h2><p>L’apprentissage se déroule sur une première année d’au moins 200 heures. Une seconde année permet d’approfondir les connaissances et de préparer un mémoire.</p><NuxtLink to="/contact" class="button button-light">Demander le programme</NuxtLink></div></section>
  </main>
</template>
