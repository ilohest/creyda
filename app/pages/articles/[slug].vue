<script setup lang="ts">
import articles from '~/data/articles.json'

const route = useRoute()
const articleIndex = computed(() => articles.findIndex((item) => item.slug === route.params.slug))
const article = computed(() => articles[articleIndex.value])

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article introuvable' })
}

const previousArticle = computed(() => articleIndex.value > 0 ? articles[articleIndex.value - 1] : null)
const nextArticle = computed(() => articleIndex.value < articles.length - 1 ? articles[articleIndex.value + 1] : null)

useSeoMeta({
  title: () => article.value.title,
  description: () => article.value.excerpt,
  ogTitle: () => article.value.title,
  ogDescription: () => article.value.excerpt,
  ogImage: () => article.value.image
})
</script>

<template>
  <main v-if="article" class="article-page">
    <header class="article-hero wrap">
      <NuxtLink to="/articles" class="article-back">←&nbsp;&nbsp;Tous les articles</NuxtLink>
      <p class="eyebrow">Carnet Creyda</p>
      <h1>{{ article.title }}</h1>
      <p>{{ article.excerpt }}</p>
    </header>

    <figure class="article-cover wrap">
      <img :src="article.image" :alt="article.imageAlt" width="1600" height="1000">
    </figure>

    <article class="article-body wrap" v-html="article.content" />

    <section v-if="article.gallery?.length" class="article-plate-gallery wrap" aria-label="Planches du Mutus Liber">
      <figure v-for="(image, index) in article.gallery" :key="image">
        <img :src="image" :alt="`Mutus Liber — planche ${index + 1}`" loading="lazy" width="683" height="1024">
        <figcaption>Planche {{ String(index + 1).padStart(2, '0') }}</figcaption>
      </figure>
    </section>

    <section v-if="article.download" class="article-download wrap">
      <p class="eyebrow">Document complet</p>
      <h2>Lire le mémoire.</h2>
      <p>Le travail intégral est disponible au format PDF.</p>
      <a class="button button-light" :href="article.download" target="_blank" rel="noopener noreferrer">Ouvrir le PDF</a>
    </section>

    <nav class="article-pagination wrap" aria-label="Navigation entre les articles">
      <NuxtLink v-if="previousArticle" :to="`/articles/${previousArticle.slug}`">
        <span>← Article précédent</span>
        <strong>{{ previousArticle.title }}</strong>
      </NuxtLink>
      <span v-else />
      <NuxtLink v-if="nextArticle" :to="`/articles/${nextArticle.slug}`" class="article-pagination__next">
        <span>Article suivant →</span>
        <strong>{{ nextArticle.title }}</strong>
      </NuxtLink>
    </nav>
  </main>
</template>
