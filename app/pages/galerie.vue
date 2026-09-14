<script setup lang="ts">
const title = 'Galerie du centre de yoga Creyda'
const description = 'Découvrez en images les cours de yoga, la méditation et l’accompagnement proposés au centre Creyda à Ixelles, Bruxelles.'
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, twitterTitle: title, twitterDescription: description })

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
const lightbox = ref<HTMLElement | null>(null)
const closeButton = ref<HTMLButtonElement | null>(null)
let opener: HTMLElement | null = null

async function openGallery(index: number, event: MouseEvent) {
  opener = event.currentTarget as HTMLElement
  activeIndex.value = index
  await nextTick()
  closeButton.value?.focus()
}

function closeGallery() {
  activeIndex.value = null
  nextTick(() => opener?.focus())
}

function showPrevious() {
  if (activeIndex.value !== null) activeIndex.value = (activeIndex.value - 1 + photos.length) % photos.length
}

function showNext() {
  if (activeIndex.value !== null) activeIndex.value = (activeIndex.value + 1) % photos.length
}

function handleKeydown(event: KeyboardEvent) {
  if (activeIndex.value === null) return
  if (event.key === 'Escape') {
    event.preventDefault()
    closeGallery()
  }
  if (event.key === 'ArrowLeft') {
    event.preventDefault()
    showPrevious()
  }
  if (event.key === 'ArrowRight') {
    event.preventDefault()
    showNext()
  }
  if (event.key !== 'Tab' || !lightbox.value) return

  const controls = [...lightbox.value.querySelectorAll<HTMLElement>('button')]
  const first = controls[0]
  const last = controls[controls.length - 1]
  if (!first || !last) return

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown))
</script>

<template>
  <main class="gallery-page">
    <PageIntro
      eyebrow="La vie du centre"
      title="Le yoga, en mouvement."
      text="Des gestes, des souffles et des moments partagés au centre Creyda."
    />

    <section class="gallery-editorial wrap" aria-label="Galerie de la pratique au centre Creyda">
      <header class="gallery-editorial__head">
        <p>Archives Creyda</p>
        <span>Ixelles · Bruxelles</span>
      </header>

      <div class="gallery-grid">
        <figure v-for="(photo, index) in photos" :key="photo.src" class="gallery-item" :class="`gallery-item--${photo.shape}`">
          <button type="button" aria-haspopup="dialog" :aria-label="`Agrandir l’image : ${photo.caption}`" @click="openGallery(index, $event)">
            <img :src="photo.src" :alt="photo.alt" :loading="index < 2 ? 'eager' : 'lazy'" decoding="async" width="1920" height="1920">
          </button>
          <figcaption>{{ photo.caption }}</figcaption>
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
        <div v-if="activePhoto" ref="lightbox" class="gallery-lightbox" role="dialog" aria-modal="true" aria-labelledby="gallery-dialog-title" aria-describedby="gallery-dialog-help" @click.self="closeGallery">
          <p id="gallery-dialog-help" class="sr-only">Utilisez les boutons précédent et suivant, les flèches du clavier, ou Échap pour fermer.</p>
          <button ref="closeButton" class="gallery-lightbox__close" type="button" aria-label="Fermer la galerie" @click="closeGallery">Fermer <span aria-hidden="true">×</span></button>
          <button class="gallery-lightbox__nav gallery-lightbox__nav--previous" type="button" aria-label="Image précédente" @click="showPrevious">←</button>
          <figure>
            <img :src="activePhoto.src" :alt="activePhoto.alt">
            <figcaption id="gallery-dialog-title">{{ activePhoto.caption }}</figcaption>
          </figure>
          <button class="gallery-lightbox__nav gallery-lightbox__nav--next" type="button" aria-label="Image suivante" @click="showNext">→</button>
        </div>
      </Transition>
    </Teleport>
  </main>
</template>
