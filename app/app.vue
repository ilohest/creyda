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
const siteUrl = 'https://creyda-yoga.be'
const canonicalUrl = computed(() => new URL(route.path, siteUrl).toString())

useSeoMeta({
  ogUrl: canonicalUrl,
  ogLocale: 'fr_BE',
  ogSiteName: 'Creyda Yoga',
  twitterCard: 'summary_large_image',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
})

useHead(() => ({
  link: [{ rel: 'canonical', href: canonicalUrl.value }],
  script: [{
    key: 'website-schema',
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${siteUrl}/#website`,
          url: siteUrl,
          name: 'Creyda Yoga',
          alternateName: 'CREYDA ASBL',
          inLanguage: 'fr-BE',
          publisher: { '@id': `${siteUrl}/#organization` }
        },
        {
          '@type': 'Organization',
          '@id': `${siteUrl}/#organization`,
          name: 'Creyda Yoga',
          legalName: 'CREYDA ASBL',
          url: siteUrl,
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/images/logo-creyda.png`
          },
          email: 'contact@creyda-yoga.be',
          telephone: '+32474971657'
        }
      ]
    })
  }]
}))

watch(() => route.path, async () => {
  await nextTick()
  const heading = document.querySelector<HTMLElement>('#main-content h1')
  if (!heading) return
  heading.setAttribute('tabindex', '-1')
  heading.focus({ preventScroll: true })
})
</script>
