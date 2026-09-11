<script setup lang="ts">
const halo = ref<HTMLElement | null>(null)
const visible = ref(false)

let frame = 0
let enabled = false
let initialized = false
let targetX = 0
let targetY = 0
let currentX = 0
let currentY = 0

const render = () => {
  if (!halo.value) return

  currentX += (targetX - currentX) * .13
  currentY += (targetY - currentY) * .13
  halo.value.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`

  const moving = Math.abs(targetX - currentX) > .1 || Math.abs(targetY - currentY) > .1
  frame = moving ? window.requestAnimationFrame(render) : 0
}

const handlePointerMove = (event: PointerEvent) => {
  if (!enabled) return

  targetX = event.clientX
  targetY = event.clientY

  if (!initialized) {
    currentX = targetX
    currentY = targetY
    initialized = true
  }

  visible.value = true
  if (!frame) frame = window.requestAnimationFrame(render)
}

const hideHalo = () => {
  visible.value = false
}

onMounted(() => {
  enabled = window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!enabled) return

  window.addEventListener('pointermove', handlePointerMove, { passive: true })
  window.addEventListener('pointerleave', hideHalo)
  window.addEventListener('blur', hideHalo)
})

onBeforeUnmount(() => {
  window.cancelAnimationFrame(frame)
  window.removeEventListener('pointermove', handlePointerMove)
  window.removeEventListener('pointerleave', hideHalo)
  window.removeEventListener('blur', hideHalo)
})
</script>

<template>
  <div ref="halo" class="cursor-halo" :class="{ 'is-visible': visible }" aria-hidden="true" />
</template>

<style scoped>
.cursor-halo {
  width: clamp(430px, 42vw, 680px);
  aspect-ratio: 1;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(30, 119, 76, .105) 0, rgba(116, 168, 141, .055) 38%, rgba(244, 255, 239, 0) 72%);
  opacity: 0;
  filter: blur(24px);
  mix-blend-mode: multiply;
  pointer-events: none;
  will-change: transform, opacity;
  transition: opacity .5s ease;
}

.cursor-halo.is-visible {
  opacity: 1;
}

@media (pointer: coarse), (prefers-reduced-motion: reduce) {
  .cursor-halo { display: none; }
}
</style>
