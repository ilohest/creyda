<script setup lang="ts">
import type { Map as LeafletMap } from 'leaflet'
import 'leaflet/dist/leaflet.css'

const canvas = ref<HTMLElement | null>(null)
let map: LeafletMap | undefined
let resizeObserver: ResizeObserver | undefined
let disposed = false
let framingOffset = 0

function updateFraming() {
  if (!map || !canvas.value) return
  map.invalidateSize({ pan: false })
  const card = canvas.value.parentElement?.querySelector<HTMLElement>('.contact-map__card')
  const nextOffset = window.matchMedia('(min-width: 901px)').matches && card
    ? (card.getBoundingClientRect().width + 48) / 2
    : 0
  if (nextOffset !== framingOffset) {
    map.panBy([framingOffset - nextOffset, 0], { animate: false })
    framingOffset = nextOffset
  }
}

onMounted(async () => {
  const L = await import('leaflet')
  if (disposed || !canvas.value) return
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  map = L.map(canvas.value, {
    center: [50.8143222, 4.3885429], zoom: 16,
    scrollWheelZoom: false, dragging: true, touchZoom: true,
    zoomControl: false, zoomAnimation: !reduceMotion, fadeAnimation: !reduceMotion,
    markerZoomAnimation: !reduceMotion
  })
  L.control.zoom({ position: 'topright', zoomInTitle: 'Zoomer', zoomOutTitle: 'Dézoomer' }).addTo(map)
  map.attributionControl.setPrefix(false)
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap contributors</a>'
  }).addTo(map)
  L.marker([50.8143222, 4.3885429], {
    title: 'Centre Creyda — 106 avenue Général Médecin Derache',
    icon: L.divIcon({
      className: 'contact-map__marker', iconSize: [100, 100], iconAnchor: [50, 50],
      html: '<svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="35" fill="none" stroke="currentColor"/><path d="M50 0V100M0 50H100" fill="none" stroke="currentColor"/><circle cx="50" cy="50" r="4" fill="currentColor"/></svg>'
    })
  }).addTo(map)
  updateFraming()
  resizeObserver = new ResizeObserver(updateFraming)
  resizeObserver.observe(canvas.value)
})

onBeforeUnmount(() => {
  disposed = true
  resizeObserver?.disconnect()
  map?.remove()
})
</script>

<template>
  <div ref="canvas" class="contact-map__canvas" role="region" aria-label="Carte interactive du centre Creyda. Déplacez la carte au doigt ou à la souris, utilisez les boutons pour zoomer." />
</template>
