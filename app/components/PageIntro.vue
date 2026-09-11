<script setup lang="ts">
defineProps<{ eyebrow?: string; title: string; text: string }>()
</script>

<template>
  <section class="page-intro wrap">
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <h1>{{ title }}</h1>
    <p class="lead">{{ text }}</p>
  </section>
</template>
