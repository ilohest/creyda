<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'classic' | 'dense' | 'airy'
  tone?: 'green' | 'light'
}>(), {
  variant: 'classic',
  tone: 'green'
})
</script>

<template>
  <span
    class="radiant-mark"
    :class="[`radiant-mark--${variant}`, `radiant-mark--${tone}`]"
    aria-hidden="true"
  />
</template>
