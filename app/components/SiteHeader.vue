<script setup lang="ts">
const route = useRoute()
const open = ref(false)
const scrolled = ref(false)
watch(() => route.fullPath, () => { open.value = false })

const closeMenu = () => {
  open.value = false
}

const handleEscape = (event: KeyboardEvent) => {
  if (event.key !== 'Escape' || !open.value) return
  closeMenu()
  document.querySelector<HTMLElement>('.menu-button')?.focus()
}

const updateScrollState = () => {
  scrolled.value = window.scrollY > 8
}

onMounted(() => {
  updateScrollState()
  window.addEventListener('scroll', updateScrollState, { passive: true })
  window.addEventListener('keydown', handleEscape)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScrollState)
  window.removeEventListener('keydown', handleEscape)
})

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/yoga', label: 'Le yoga' },
  { to: '/bien-etre', label: 'Bien-être' },
  { to: '/methode-res', label: 'Méthode R.E.S.' },
  { to: '/tarifs', label: 'Tarifs' },
  { to: '/galerie', label: 'Galerie' },
  { to: '/articles', label: 'Articles' }
]
</script>

<template>
  <header class="site-header" :class="{ 'is-scrolled': scrolled, 'menu-open': open }">
    <NuxtLink to="/" class="brand" aria-label="Creyda Yoga — accueil">
      <img src="/images/logo-creyda.png" alt="" width="48" height="48">
      <span><strong>CREYDA</strong><small>Yoga intégral · Bruxelles</small></span>
    </NuxtLink>
    <button class="menu-button" type="button" :aria-expanded="open" :aria-label="open ? 'Fermer le menu' : 'Ouvrir le menu'" aria-controls="main-navigation" @click="open = !open">
      <span /><span />
    </button>
    <nav id="main-navigation" :class="{ open }" aria-label="Navigation principale">
      <NuxtLink v-for="link in links" :key="link.to" :to="link.to">{{ link.label }}</NuxtLink>
      <NuxtLink to="/contact" class="nav-cta">Nous contacter</NuxtLink>
    </nav>
  </header>
</template>
