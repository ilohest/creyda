<template>
  <div id="top">
    <a class="skip-link" href="#main-content">Aller au contenu principal</a>
    <CursorHalo />
    <SiteHeader />
    <div id="main-content" tabindex="-1">
      <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
    </div>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

watch(() => route.path, async () => {
  await nextTick()
  const heading = document.querySelector<HTMLElement>('#main-content h1')
  if (!heading) return
  heading.setAttribute('tabindex', '-1')
  heading.focus({ preventScroll: true })
})
</script>
