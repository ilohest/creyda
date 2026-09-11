<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant?: 'classic' | 'dense' | 'airy'
  tone?: 'green' | 'light'
}>(), {
  variant: 'classic',
  tone: 'green'
})

const rayCount = computed(() => ({ classic: 38, dense: 54, airy: 26 })[props.variant])

const rays = computed(() => Array.from({ length: rayCount.value }, (_, index) => {
  const angle = (Math.PI * 2 * index) / rayCount.value - Math.PI / 2
  const curve = Math.sin(index * 1.7) * .085 + (index % 2 ? .035 : -.035)
  const innerRadius = props.variant === 'dense' ? 31 : props.variant === 'airy' ? 39 : 35
  const outerRadius = 86 + Math.sin(index * 2.35) * 4
  const controlRadius = (innerRadius + outerRadius) * .54
  const endAngle = angle + curve
  const controlAngle = angle + curve * 1.8
  const point = (radius: number, pointAngle: number) => ({
    x: 100 + Math.cos(pointAngle) * radius,
    y: 100 + Math.sin(pointAngle) * radius
  })
  const start = point(innerRadius, angle)
  const control = point(controlRadius, controlAngle)
  const end = point(outerRadius, endAngle)

  return {
    d: `M ${start.x.toFixed(2)} ${start.y.toFixed(2)} Q ${control.x.toFixed(2)} ${control.y.toFixed(2)} ${end.x.toFixed(2)} ${end.y.toFixed(2)}`,
    style: {
      '--ray-delay': `${index * 18}ms`,
      '--ray-turn': `${((index % 3) - 1) * .6}deg`,
      '--ray-turn-reverse': `${((index % 3) - 1) * -.6}deg`
    }
  }
}))
</script>

<template>
  <svg
    class="radiant-mark"
    :class="[`radiant-mark--${variant}`, `radiant-mark--${tone}`]"
    viewBox="0 0 200 200"
    fill="none"
    aria-hidden="true"
  >
    <g class="radiant-mark__orbit">
      <path
        v-for="(ray, index) in rays"
        :key="index"
        class="radiant-mark__ray"
        :d="ray.d"
        :style="ray.style"
        pathLength="1"
        vector-effect="non-scaling-stroke"
      />
    </g>
  </svg>
</template>
