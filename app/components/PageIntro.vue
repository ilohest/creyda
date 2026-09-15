<script setup lang="ts">
defineProps<{ eyebrow?: string; title: string; text: string }>()
</script>

<template>
  <header class="page-intro wrap" :class="{ 'page-intro--without-eyebrow': !eyebrow }">
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <h1>{{ title }}</h1>
    <p class="lead">{{ text }}</p>
  </header>
</template>
