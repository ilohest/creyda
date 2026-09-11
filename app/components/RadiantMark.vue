<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'classic' | 'dense' | 'airy'
  tone?: 'green' | 'light'
}>(), {
  variant: 'classic',
  tone: 'green'
})

const mark = ref<HTMLElement | null>(null)
let animationFrame = 0
let lastFrame = 0
let lastScrollY = 0
let angle = 0
let scrollBoost = 0

function handleScroll() {
  const delta = window.scrollY - lastScrollY
  lastScrollY = window.scrollY
  angle += delta * 0.035
  scrollBoost = Math.min(1, scrollBoost + Math.abs(delta) / 320)
}

function animate(time: number) {
  if (!lastFrame) lastFrame = time
  const elapsed = Math.min(time - lastFrame, 40)
  lastFrame = time
  angle += elapsed * (0.0018 + scrollBoost * 0.018)
  scrollBoost *= Math.pow(0.965, elapsed / 16.67)

  const scale = 1 + Math.sin(time / 1400) * 0.018
  if (mark.value) mark.value.style.transform = `rotate(${angle}deg) scale(${scale})`
  animationFrame = window.requestAnimationFrame(animate)
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  lastScrollY = window.scrollY
  window.addEventListener('scroll', handleScroll, { passive: true })
  animationFrame = window.requestAnimationFrame(animate)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.cancelAnimationFrame(animationFrame)
})
</script>

<template>
  <span
    ref="mark"
    class="radiant-mark"
    :class="[`radiant-mark--${variant}`, `radiant-mark--${tone}`]"
    aria-hidden="true"
  />
</template>
