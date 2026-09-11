<script setup lang="ts">
useSeoMeta({ title: 'Tarifs' })
const yoga = [
  ['Cours d’essai', '10 €', 'la séance'], ['Cours à l’unité', '18 €', 'la séance'], ['Carte de 10 séances', '150 €', 'valable 6 mois'],
  ['Forfait mensuel', '65 €', '1 séance par semaine'], ['Forfait mensuel illimité', '85 €', 'accès illimité'], ['Forfait annuel', '750 €', '1 séance par semaine']
]
const other = [
  ['Connais-toi toi-même', '120 €'], ['Méditation, techniques thérapeutiques et philosophie', '30 €'], ['Séance bien-être', '50 €'], ['10 séances bien-être', '400 €'], ['Formation R.E.S. — année 1', '1 630 €'], ['Formation R.E.S. — année 2', '1 630 €']
]
</script>

<template>
  <main>
    <PageIntro eyebrow="Offres" title="Choisir le rythme qui vous convient." text="Cours ponctuels, abonnements ou formations : les groupes restent volontairement limités." />
    <section class="pricing wrap"><p class="eyebrow">Yoga · séances de 90 minutes</p><div class="price-grid"><article v-for="item in yoga" :key="item[0]"><h2>{{ item[0] }}</h2><strong>{{ item[1] }}</strong><span>{{ item[2] }}</span></article></div></section>
    <section class="pricing pricing-alt wrap"><p class="eyebrow">Bien-être et formations</p><div class="line-prices"><div v-for="item in other" :key="item[0]"><span>{{ item[0] }}</span><strong>{{ item[1] }}</strong></div></div></section>
    <section class="pricing-note wrap"><p>Ces tarifs proviennent de la dernière version enregistrée du site. Contactez-nous pour confirmer la disponibilité, les horaires et les conditions d’inscription.</p><NuxtLink to="/contact" class="button button-dark">Poser une question</NuxtLink></section>
  </main>
</template>
