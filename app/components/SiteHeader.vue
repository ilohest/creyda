<script setup lang="ts">
const route = useRoute()
const open = ref(false)
const scrolled = ref(false)
const menuButton = ref<HTMLButtonElement | null>(null)
const navigation = ref<HTMLElement | null>(null)
watch(() => route.fullPath, () => { open.value = false })

watch(open, async (isOpen) => {
  if (!import.meta.client) return
  document.documentElement.classList.toggle('menu-is-open', isOpen)
  if (isOpen) {
    await nextTick()
    navigation.value?.querySelector<HTMLElement>('a')?.focus()
  }
})

const closeMenu = () => {
  open.value = false
}

const handleMenuKeydown = (event: KeyboardEvent) => {
  if (!open.value) return

  if (event.key === 'Escape') {
    closeMenu()
    menuButton.value?.focus()
    return
  }

  if (event.key !== 'Tab') return
  const focusable = [
    menuButton.value,
    ...Array.from(navigation.value?.querySelectorAll<HTMLElement>('a') ?? [])
  ].filter((element): element is HTMLElement => Boolean(element))
  const first = focusable[0]
  const last = focusable.at(-1)

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last?.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first?.focus()
  }
}

const updateScrollState = () => {
  scrolled.value = window.scrollY > 8
}

const handleResize = () => {
  if (window.innerWidth > 900 && open.value) closeMenu()
}

onMounted(() => {
  updateScrollState()
  window.addEventListener('scroll', updateScrollState, { passive: true })
  window.addEventListener('resize', handleResize, { passive: true })
  window.addEventListener('keydown', handleMenuKeydown)
})

onBeforeUnmount(() => {
  document.documentElement.classList.remove('menu-is-open')
  window.removeEventListener('scroll', updateScrollState)
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('keydown', handleMenuKeydown)
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
    <button ref="menuButton" class="menu-button" type="button" :aria-expanded="open" :aria-label="open ? 'Fermer le menu' : 'Ouvrir le menu'" aria-controls="main-navigation" @click="open = !open">
      <span /><span />
    </button>
    <nav id="main-navigation" ref="navigation" :class="{ open }" aria-label="Navigation principale">
      <NuxtLink v-for="link in links" :key="link.to" :to="link.to">{{ link.label }}</NuxtLink>
      <NuxtLink to="/contact" class="nav-cta">Nous contacter</NuxtLink>
    </nav>
  </header>
</template>
