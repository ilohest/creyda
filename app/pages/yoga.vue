<script setup lang="ts">
const title = 'Yoga traditionnel et intégral à Ixelles'
const description = 'Pratiquez le Hatha Yoga, le Prânayâma et la méditation Dhyâna chez Creyda à Ixelles, dans des groupes de dix personnes maximum.'
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, twitterTitle: title, twitterDescription: description })
const pillars = [
  { number: '01', title: 'Hatha Yoga', text: 'Les postures sont abordées progressivement, sans aide ni instrument pour en faciliter la prise ou le maintien. Taille, morphologie et souplesse importent peu : comme le rappelait André Van Lysebeth, « la souplesse est un moyen et non une fin ».' },
  { number: '02', title: 'Prânayâma', text: 'Cette dynamique du souffle favorise la circulation de l’énergie, nourrit les cellules et contribue à la régulation du métabolisme. Pratiquée régulièrement, elle installe progressivement un mieux-être profond.' },
  { number: '03', title: 'Méditation Dhyâna', text: 'Elle donne davantage de profondeur au Hatha Yoga et au Prânayâma. Elle développe la connaissance et la maîtrise de soi, ainsi qu’une plus grande sérénité ; ses effets font l’objet de nombreux travaux consacrés à la méditation.' }
]
</script>

<template>
  <main>
    <PageIntro eyebrow="Notre enseignement" title="Un yoga traditionnel et intégral." text="Dans la lignée d’André Van Lysebeth, trois pratiques sont étudiées avec précision, puis se superposent et s’interpénètrent dans une expérience cohérente du corps et de l’esprit." />
    <section class="editorial-image wrap"><img src="/images/pratique-yoga.jpg" alt="Cours de yoga au centre Creyda"></section>
    <section class="pillar-grid wrap">
      <article v-for="pillar in pillars" :key="pillar.number">
        <span>{{ pillar.number }}</span><h2>{{ pillar.title }}</h2><p>{{ pillar.text }}</p>
      </article>
    </section>
    <section class="split-copy wrap">
      <h2>Une place pour chaque personne.</h2>
      <div>
        <p>Le yoga est enseigné dans un cadre convivial, en groupes limités à dix participants. Cette taille permet à l’enseignant de rester disponible à chaque instant et d’adapter son attention à chacun.</p>
        <p>Le travail ne se limite pas à la mécanique du mouvement : il porte une attention particulière aux fonctions autonomes de l’organisme — respiration, rythme cardiaque, tension et production hormonale.</p>
        <p>Les cours sont ouverts à tous les niveaux, des personnes débutantes aux pratiquants avancés. Aucune disposition physique particulière n’est requise : la patience, le courage, la volonté et l’écoute priment.</p>
        <p>Chaque séance dure au minimum 90 minutes. Les membres bénéficient d’une assurance responsabilité civile auprès de la Fédération Belge d’Hébertisme et de Yoga.</p>
      </div>
    </section>
    <section class="cta-panel wrap">
      <p class="eyebrow light">Première séance</p><h2>Venez ressentir la pratique.</h2><p>Un cours d’essai permet de découvrir l’approche et de rencontrer l’enseignant.</p><NuxtLink to="/contact" class="button button-light">Nous contacter</NuxtLink>
    </section>
  </main>
</template>
