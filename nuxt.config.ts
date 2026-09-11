export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  devtools: { enabled: false },
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      titleTemplate: '%s · Creyda Yoga',
      meta: [
        { name: 'description', content: 'Centre de yoga traditionnel et intégral à Ixelles, Bruxelles. Cours en petits groupes, méthode R.E.S. et séances de bien-être.' },
        { name: 'theme-color', content: '#1e774c' },
        { property: 'og:title', content: 'Creyda Yoga — Yoga intégral à Ixelles' },
        { property: 'og:description', content: 'Cours de yoga traditionnel en petits groupes, méthode R.E.S. et séances de bien-être à Ixelles, Bruxelles.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://creyda-yoga.be/og.png' },
        { property: 'og:image:alt', content: 'Creyda Yoga, centre de yoga intégral à Ixelles' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Creyda Yoga — Yoga intégral à Ixelles' },
        { name: 'twitter:description', content: 'Cours de yoga traditionnel en petits groupes, méthode R.E.S. et séances de bien-être à Ixelles, Bruxelles.' },
        { name: 'twitter:image', content: 'https://creyda-yoga.be/og.png' },
        { name: 'twitter:image:alt', content: 'Creyda Yoga, centre de yoga intégral à Ixelles' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/logo-creyda.png' }
      ]
    }
  },
  nitro: { preset: 'static', prerender: { crawlLinks: true } }
})
