<script setup lang="ts">
useSeoMeta({
  title: 'Galerie',
  description: 'Quelques instants de pratique, de respiration et d’accompagnement au centre Creyda à Ixelles.'
})

const photos = [
  { src: '/images/gallery/pratique-01.jpg', alt: 'Professeur de yoga assis sur un tapis pendant une séance', caption: 'Présence', shape: 'wide' },
  { src: '/images/gallery/pratique-02.jpg', alt: 'Participante en posture douce au sol', caption: 'Respiration', shape: 'portrait' },
  { src: '/images/gallery/pratique-03.jpg', alt: 'Posture d’ouverture du corps accompagnée avec précision', caption: 'Ouverture', shape: 'square' },
  { src: '/images/gallery/pratique-04.jpg', alt: 'Deux personnes pratiquant une posture à genoux', caption: 'Élan', shape: 'tall' },
  { src: '/images/gallery/pratique-05.jpg', alt: 'Deux participantes dans une flexion assise', caption: 'Écoute', shape: 'wide' },
  { src: '/images/gallery/pratique-06.jpg', alt: 'Participante assise les yeux fermés en méditation', caption: 'Intériorité', shape: 'portrait' },
  { src: '/images/gallery/pratique-07.jpg', alt: 'Groupe pratiquant une posture au sol dans la lumière', caption: 'Rythme', shape: 'square' },
  { src: '/images/gallery/pratique-08.jpg', alt: 'Professeur accompagnant deux participantes pendant un exercice', caption: 'Accompagnement', shape: 'tall' },
  { src: '/images/gallery/pratique-09.jpg', alt: 'Pratique d’une posture latérale jambe levée', caption: 'Équilibre', shape: 'wide' },
  { src: '/images/gallery/pratique-10.jpg', alt: 'Deux participantes allongées, une jambe levée', caption: 'Synchronie', shape: 'square' },
  { src: '/images/gallery/pratique-11.jpg', alt: 'Participante au repos dans la posture de l’enfant', caption: 'Relâchement', shape: 'portrait' },
  { src: '/images/gallery/pratique-12.jpg', alt: 'Participante souriante dans une posture assise', caption: 'Joie', shape: 'wide' }
]

const activeIndex = ref<number | null>(null)
const activePhoto = computed(() => activeIndex.value === null ? null : photos[activeIndex.value])

function closeGallery() {
  activeIndex.value = null
}

function showPrevious() {
  if (activeIndex.value !== null) activeIndex.value = (activeIndex.value - 1 + photos.length) % photos.length
}

function showNext() {
  if (activeIndex.value !== null) activeIndex.value = (activeIndex.value + 1) % photos.length
}

function handleKeydown(event: KeyboardEvent) {
  if (activeIndex.value === null) return
  if (event.key === 'Escape') closeGallery()
  if (event.key === 'ArrowLeft') showPrevious()
  if (event.key === 'ArrowRight') showNext()
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown))
</script>

<template>
  <main class="gallery-page">
    <PageIntro
      eyebrow="La vie du centre"
      title="Le yoga, en mouvement."
      text="Des gestes, des souffles et des moments partagés au centre Creyda. Cliquez sur une image pour la découvrir en grand."
    />

    <section class="gallery-editorial wrap" aria-label="Galerie de la pratique au centre Creyda">
      <header class="gallery-editorial__head">
        <p>Archives Creyda</p>
        <span>Ixelles · Bruxelles</span>
      </header>

      <div class="gallery-grid">
        <figure v-for="(photo, index) in photos" :key="photo.src" class="gallery-item" :class="`gallery-item--${photo.shape}`">
          <button type="button" :aria-label="`Agrandir l’image : ${photo.caption}`" @click="activeIndex = index">
            <img :src="photo.src" :alt="photo.alt" :loading="index < 2 ? 'eager' : 'lazy'" width="1920" height="1920">
            <span aria-hidden="true">+</span>
          </button>
          <figcaption><span>{{ String(index + 1).padStart(2, '0') }}</span>{{ photo.caption }}</figcaption>
        </figure>
      </div>
    </section>

    <section class="gallery-closing wrap">
      <RadiantMark variant="airy" class="gallery-closing__mark" />
      <div>
        <h2>Et si la prochaine image était la vôtre&nbsp;?</h2>
        <NuxtLink class="button gallery-closing__button" to="/contact">Prendre contact</NuxtLink>
      </div>
    </section>

    <Teleport to="body">
      <Transition name="gallery-lightbox">
        <div v-if="activePhoto" class="gallery-lightbox" role="dialog" aria-modal="true" :aria-label="activePhoto.caption" @click.self="closeGallery">
          <button class="gallery-lightbox__close" type="button" aria-label="Fermer" @click="closeGallery">Fermer <span>×</span></button>
          <button class="gallery-lightbox__nav gallery-lightbox__nav--previous" type="button" aria-label="Image précédente" @click="showPrevious">←</button>
          <figure>
            <img :src="activePhoto.src" :alt="activePhoto.alt">
            <figcaption>{{ activePhoto.caption }}</figcaption>
          </figure>
          <button class="gallery-lightbox__nav gallery-lightbox__nav--next" type="button" aria-label="Image suivante" @click="showNext">→</button>
        </div>
      </Transition>
    </Teleport>
  </main>
</template>
