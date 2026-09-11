<script setup lang="ts">
import articles from '~/data/articles.json'

const title = 'Articles sur le yoga et la philosophie'
const description = 'Lisez les articles et recherches du centre Creyda autour du yoga, de la philosophie, des symboles et de la vie spirituelle.'
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, twitterTitle: title, twitterDescription: description })
</script>

<template>
  <main class="articles-page">
    <header class="articles-intro wrap">
      <p class="eyebrow">Textes & archives</p>
      <h1>Articles.</h1>
      <p>Yoga, philosophie, symboles et expériences de terrain&nbsp;: les textes du centre réunis dans un espace de lecture.</p>
    </header>

    <section class="articles-grid wrap" aria-label="Tous les articles">
      <article v-for="(article, index) in articles" :key="article.slug" class="article-card">
        <NuxtLink :to="`/articles/${article.slug}`">
          <div class="article-card__image">
            <img
              :src="article.image"
              :alt="article.imageAlt"
              :loading="index < 3 ? 'eager' : 'lazy'"
              width="900"
              height="1125"
            >
            <span aria-hidden="true">Lire&nbsp;→</span>
          </div>
          <h2>{{ article.title }}</h2>
        </NuxtLink>
      </article>
    </section>
  </main>
</template>
