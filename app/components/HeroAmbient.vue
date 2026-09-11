<script setup lang="ts">
type Rgb = [number, number, number]

interface Haze {
  baseX: number
  baseY: number
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: Rgb
  phase: number
  speed: number
  driftX: number
  driftY: number
}

const canvas = ref<HTMLCanvasElement | null>(null)
const colors: Rgb[] = [
  [30, 119, 76],
  [116, 168, 141],
  [198, 221, 205],
  [232, 231, 226]
]

const pointer = { active: false, x: 0, y: 0 }
let context: CanvasRenderingContext2D | null = null
let frame = 0
let observer: ResizeObserver | null = null
let width = 0
let height = 0
let ratio = 1
let hazes: Haze[] = []
let reducedMotion = false

const seededRandom = (seed: number) => {
  const value = Math.sin(seed * 12.9898) * 43758.5453
  return value - Math.floor(value)
}

function createHazes() {
  const count = width < 700 ? 5 : 8
  hazes = Array.from({ length: count }, (_, index) => {
    const baseX = (seededRandom(index + 2) * 1.12 - .06) * width
    const baseY = (.12 + seededRandom(index + 23) * .76) * height
    return {
      baseX,
      baseY,
      x: baseX,
      y: baseY,
      vx: 0,
      vy: 0,
      radius: Math.min(width < 700 ? 230 : 350, 170 + seededRandom(index + 41) * 220),
      color: colors[index % colors.length],
      phase: seededRandom(index + 59) * Math.PI * 2,
      speed: .00018 + seededRandom(index + 77) * .0002,
      driftX: 35 + seededRandom(index + 91) * 70,
      driftY: 28 + seededRandom(index + 109) * 58
    }
  })
}

function resize() {
  if (!canvas.value) return
  const bounds = canvas.value.getBoundingClientRect()
  width = bounds.width
  height = bounds.height
  ratio = Math.min(window.devicePixelRatio || 1, 1.25)
  canvas.value.width = Math.round(width * ratio)
  canvas.value.height = Math.round(height * ratio)
  context = canvas.value.getContext('2d', { alpha: true })
  context?.setTransform(ratio, 0, 0, ratio, 0, 0)
  createHazes()
  draw(performance.now(), false)
}

function update(haze: Haze, time: number) {
  let targetX = haze.baseX + Math.sin(time * haze.speed + haze.phase) * haze.driftX
  let targetY = haze.baseY + Math.cos(time * haze.speed * .78 + haze.phase) * haze.driftY

  if (pointer.active) {
    const dx = haze.x - pointer.x
    const dy = haze.y - pointer.y
    const distance = Math.hypot(dx, dy) || 1
    const radius = Math.min(430, width * .34)
    if (distance < radius) {
      const force = Math.pow((radius - distance) / radius, 2)
      targetX += (dx / distance) * force * 90
      targetY += (dy / distance) * force * 90
    }
  }

  haze.vx = (haze.vx + (targetX - haze.x) * .008) * .92
  haze.vy = (haze.vy + (targetY - haze.y) * .008) * .92
  haze.x += haze.vx
  haze.y += haze.vy
}

function paint(haze: Haze) {
  if (!context) return
  const [r, g, b] = haze.color
  const gradient = context.createRadialGradient(haze.x, haze.y, 0, haze.x, haze.y, haze.radius)
  gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, .28)`)
  gradient.addColorStop(.42, `rgba(${r}, ${g}, ${b}, .16)`)
  gradient.addColorStop(.78, `rgba(${r}, ${g}, ${b}, .05)`)
  gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`)
  context.fillStyle = gradient
  context.beginPath()
  context.arc(haze.x, haze.y, haze.radius, 0, Math.PI * 2)
  context.fill()
}

function draw(time = 0, schedule = true) {
  if (!context) return
  context.clearRect(0, 0, width, height)
  context.globalCompositeOperation = 'multiply'
  hazes.forEach((haze) => {
    if (!reducedMotion) update(haze, time)
    paint(haze)
  })
  context.globalCompositeOperation = 'source-over'
  if (schedule && !reducedMotion) frame = window.requestAnimationFrame(draw)
}

function handlePointerMove(event: PointerEvent) {
  if (!canvas.value) return
  const bounds = canvas.value.getBoundingClientRect()
  pointer.active = event.clientX >= bounds.left && event.clientX <= bounds.right && event.clientY >= bounds.top && event.clientY <= bounds.bottom
  pointer.x = event.clientX - bounds.left
  pointer.y = event.clientY - bounds.top
}

function handlePointerLeave() {
  pointer.active = false
}

onMounted(() => {
  reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  resize()
  if (canvas.value) {
    observer = new ResizeObserver(resize)
    observer.observe(canvas.value)
  }
  window.addEventListener('pointermove', handlePointerMove, { passive: true })
  window.addEventListener('pointerleave', handlePointerLeave)
  if (!reducedMotion) frame = window.requestAnimationFrame(draw)
})

onBeforeUnmount(() => {
  window.cancelAnimationFrame(frame)
  observer?.disconnect()
  window.removeEventListener('pointermove', handlePointerMove)
  window.removeEventListener('pointerleave', handlePointerLeave)
})
</script>

<template>
  <canvas ref="canvas" class="hero-ambient" aria-hidden="true" />
</template>

<style scoped>
.hero-ambient {
  width: 120%;
  height: 120%;
  position: absolute;
  inset: -10%;
  z-index: 0;
  opacity: .92;
  filter: blur(34px) saturate(.92);
  pointer-events: none;
  transform: translateZ(0);
}
</style>
