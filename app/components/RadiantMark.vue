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
let scrollDirection = 1
let scrollVelocity = 0

function handleScroll() {
  const delta = window.scrollY - lastScrollY
  lastScrollY = window.scrollY
  if (Math.abs(delta) < 0.5) return

  scrollDirection = delta > 0 ? 1 : -1
  scrollVelocity = scrollDirection * Math.min(0.06, 0.012 + Math.abs(delta) * 0.0012)
}

function animate(time: number) {
  if (!lastFrame) lastFrame = time
  const elapsed = Math.min(time - lastFrame, 40)
  lastFrame = time
  angle += elapsed * (scrollDirection * 0.0018 + scrollVelocity)
  scrollVelocity *= Math.pow(0.9, elapsed / 16.67)

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
