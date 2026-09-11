<script setup lang="ts">
const title = 'Yoga traditionnel et intégral à Ixelles'
const description = 'Pratiquez le Hatha Yoga, le Prânayâma et la méditation Dhyâna chez Creyda à Ixelles, dans des groupes de dix personnes maximum.'
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, twitterTitle: title, twitterDescription: description })
const pillars = [
  { number: '01', title: 'Hatha Yoga', text: 'Composé de postures accessibles progressivement. La souplesse est un moyen, jamais une fin.' },
  { number: '02', title: 'Prânayâma', text: 'Le travail du souffle favorise la circulation de l’énergie, l’attention et une régulation profonde.' },
  { number: '03', title: 'Méditation Dhyâna', text: 'Elle approfondit la pratique, développe la connaissance de soi et installe davantage de sérénité.' }
]
</script>

<template>
  <main>
    <PageIntro eyebrow="Notre enseignement" title="Un yoga traditionnel et intégral." text="Trois pratiques étudiées avec précision, puis réunies dans une expérience cohérente du corps et de l’esprit." />
    <section class="editorial-image wrap"><img src="/images/pratique-yoga.jpg" alt="Cours de yoga au centre Creyda"></section>
    <section class="pillar-grid wrap">
      <article v-for="pillar in pillars" :key="pillar.number">
        <span>{{ pillar.number }}</span><h2>{{ pillar.title }}</h2><p>{{ pillar.text }}</p>
      </article>
    </section>
    <section class="split-copy wrap">
      <h2>Une place pour chaque personne.</h2>
      <div><p>Les groupes sont limités à dix participants. Cette taille permet à l’enseignant de rester disponible et d’adapter son attention à chacun.</p><p>Les cours sont ouverts à tous les niveaux. Aucune disposition physique particulière n’est requise : la patience, la régularité et l’écoute priment.</p><p>Les membres bénéficient d’une assurance responsabilité civile auprès de la Fédération Belge d’Hébertisme et de Yoga.</p></div>
    </section>
    <section class="cta-panel wrap">
      <p class="eyebrow light">Première séance</p><h2>Venez ressentir la pratique.</h2><p>Un cours d’essai permet de découvrir l’approche et de rencontrer l’enseignant.</p><NuxtLink to="/contact" class="button button-light">Nous contacter</NuxtLink>
    </section>
  </main>
</template>
