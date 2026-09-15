<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant?: 'classic' | 'dense' | 'airy' | 'half' | 'round' | 'inward'
  tone?: 'green' | 'light'
  weight?: number
}>(), { variant: 'classic', tone: 'green', weight: 1 })

// Deterministic contours keep the gentle irregularity consistent during hydration.
const rays = computed(() => {
  const half = props.variant === 'half'
  const count = half ? 21 : props.variant === 'dense' ? 48 : props.variant === 'airy' ? 30 : 40
  const centerY = half ? 164 : 160
  const point = (angle: number, radius: number, offset: number) => {
    const x = 160 + Math.cos(angle) * radius - Math.sin(angle) * offset
    const y = centerY + Math.sin(angle) * radius + Math.cos(angle) * offset
    return `${x.toFixed(2)},${y.toFixed(2)}`
  }
  return Array.from({ length: count }, (_, index) => {
    const angle = half ? Math.PI + index * Math.PI / (count - 1) : index * Math.PI * 2 / count
    if (props.variant === 'classic' || props.variant === 'round' || props.variant === 'inward') {
      const halfWidth = (props.variant === 'round' ? .55 : .7) * props.weight * Math.PI / 180
      const innerRadius = props.variant === 'inward' ? 36 : props.variant === 'round' ? 38 : 68
      const outerRadius = props.variant === 'round' ? 148 : 158
      return `M ${point(angle - halfWidth, innerRadius, 0)} L ${point(angle - halfWidth, outerRadius, 0)} L ${point(angle + halfWidth, outerRadius, 0)} L ${point(angle + halfWidth, innerRadius, 0)} Z`
    }
    const inner = (props.variant === 'dense' ? 34 : props.variant === 'airy' ? 48 : 65) + Math.sin(index * 2.7) * 2
    const outer = props.variant === 'dense'
      ? (index % 2 ? 104 : 149)
      : props.variant === 'airy'
        ? 148
        : 148 + Math.sin(index * 1.9) * 3
    const middle = (inner + outer) / 2
    const width = 1.6 * props.weight
    const bend = props.variant === 'airy' ? 18 : Math.sin(index * 3.1) * .7
    const innerAngle = angle + (props.variant === 'airy' ? .32 : 0)
    return `M ${point(innerAngle, inner, -.25)} Q ${point(angle, middle, bend - width * .55)} ${point(angle, outer, -width)} L ${point(angle, outer - .4, width)} Q ${point(angle, middle, bend + width * .55)} ${point(innerAngle, inner + 1, .25)} Z`
  })
})

const mark = ref<SVGSVGElement | null>(null)
let animationFrame = 0
let lastFrame = 0
let lastScrollY = 0
let angle = 0
let scrollDirection = 1
let scrollVelocity = 0

function handleScroll() {
  const delta = window.scrollY - lastScrollY
  lastScrollY = window.scrollY
  if (Math.abs(delta) < .5) return
  scrollDirection = delta > 0 ? 1 : -1
  scrollVelocity = scrollDirection * Math.min(.06, .012 + Math.abs(delta) * .0012)
}

function animate(time: number) {
  if (!lastFrame) lastFrame = time
  const elapsed = Math.min(time - lastFrame, 40)
  lastFrame = time
  angle += elapsed * (scrollDirection * .0018 + scrollVelocity)
  scrollVelocity *= Math.pow(.9, elapsed / 16.67)
  const scale = 1 + Math.sin(time / 1400) * .018
  const phase = angle * Math.PI / 180
  let transform = `rotate(${angle}deg) scale(${scale})`

  // Each silhouette has its own choreography, driven by the same scroll inertia.
  if (props.variant === 'dense') {
    const expansion = 1 + Math.sin(time / 1100 + phase * 2) * .045
    transform = `rotate(${-angle * .8}deg) scale(${expansion})`
  } else if (props.variant === 'airy') {
    transform = `rotate(${angle * .65}deg) scale(${scale})`
  } else if (props.variant === 'round') {
    transform = `rotate(${angle * .7}deg)`
  } else if (props.variant === 'half') {
    const rock = Math.sin(time / 2100 + phase) * 9
    const rise = Math.sin(time / 2600 + phase * .7) * 6
    transform = `translateY(${rise}px) rotate(${angle * .65 + rock}deg) scale(${scale})`
  }

  if (mark.value) mark.value.style.transform = transform
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
  <svg
    ref="mark"
    class="radiant-mark"
    :class="[`radiant-mark--${variant}`, `radiant-mark--${tone}`]"
    :viewBox="variant === 'half' ? '0 0 320 172' : '0 0 320 320'"
    preserveAspectRatio="xMidYMid meet"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path v-for="(ray, index) in rays" :key="index" :d="ray" />
  </svg>
</template>
