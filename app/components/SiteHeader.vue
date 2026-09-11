<script setup lang="ts">
const route = useRoute()
const open = ref(false)
watch(() => route.fullPath, () => { open.value = false })

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/yoga', label: 'Le yoga' },
  { to: '/bien-etre', label: 'Bien-être' },
  { to: '/methode-res', label: 'Méthode R.E.S.' },
  { to: '/tarifs', label: 'Tarifs' },
  { to: '/galerie', label: 'Galerie' }
]
</script>

<template>
  <header class="site-header">
    <NuxtLink to="/" class="brand" aria-label="Creyda Yoga — accueil">
      <img src="/images/logo-creyda.png" alt="" width="48" height="48">
      <span><strong>CREYDA</strong><small>Yoga intégral · Bruxelles</small></span>
    </NuxtLink>
    <button class="menu-button" type="button" :aria-expanded="open" aria-controls="main-navigation" @click="open = !open">
      <span class="sr-only">Ouvrir le menu</span>
      <span /><span />
    </button>
    <nav id="main-navigation" :class="{ open }" aria-label="Navigation principale">
      <NuxtLink v-for="link in links" :key="link.to" :to="link.to">{{ link.label }}</NuxtLink>
      <NuxtLink to="/contact" class="nav-cta">Nous contacter</NuxtLink>
    </nav>
  </header>
</template>
