<script setup lang="ts">
const title = 'Centre de yoga intégral à Ixelles'
const description = 'Cours de Hatha Yoga, Prânayâma et méditation en petits groupes à Ixelles. Découvrez Creyda, la méthode R.E.S. et les séances de bien-être.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description
})

useHead({
  script: [{
    key: 'local-business-schema',
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'SportsActivityLocation'],
      '@id': 'https://creyda-yoga.be/#organization',
      name: 'Creyda Yoga',
      legalName: 'CREYDA ASBL',
      description,
      url: 'https://creyda-yoga.be/',
      logo: 'https://creyda-yoga.be/images/logo-creyda.png',
      image: 'https://creyda-yoga.be/og.png',
      telephone: '+32474971657',
      email: 'contact@creyda-yoga.be',
      priceRange: '€€',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '106 avenue Général Médecin Derache',
        postalCode: '1050',
        addressLocality: 'Ixelles',
        addressRegion: 'Bruxelles-Capitale',
        addressCountry: 'BE'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 50.8143222,
        longitude: 4.3885429
      },
      areaServed: ['Ixelles', 'Bruxelles'],
      founder: { '@type': 'Person', name: 'Patrick Noblet' },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '10:30',
          closes: '12:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '17:30',
          closes: '19:00'
        }
      ]
    })
  }]
})
</script>

<template>
  <main>
    <section class="hero">
      <HeroAmbient />
      <p class="hero-kicker">Centre de yoga intégral · Bruxelles</p>
      <h1>Yoga<br>avec Creyda</h1>
      <div class="hero-intro">
        <p>Une pratique traditionnelle pour retrouver le mouvement juste, le souffle et l’attention.</p>
        <NuxtLink to="/contact" class="text-link">Réserver un cours <span>→</span></NuxtLink>
      </div>
    </section>

    <section class="opening wrap">
      <aside>
        <p>Des cours accessibles à tous,<br>au cœur d’Ixelles.</p>
        <NuxtLink to="/contact" class="text-link">Cours d’essai <span>→</span></NuxtLink>
        <RadiantMark class="sun-mark" />
      </aside>
      <div class="opening-main">
        <h2>Quand une sagesse ancienne rencontre votre quotidien.</h2>
        <div class="opening-gallery">
          <figure>
            <img src="/images/gallery/pratique-01.jpg" alt="Pratique au sol pendant un cours de yoga au centre Creyda">
          </figure>
          <figure>
            <img src="/images/gallery/pratique-06.jpg" alt="Moment de méditation pendant une séance au centre Creyda">
          </figure>
          <figure>
            <img src="/images/gallery/pratique-09.jpg" alt="Posture d’équilibre pratiquée au centre Creyda">
          </figure>
        </div>
        <p class="opening-statement">Hatha Yoga, Prânayâma et méditation Dhyâna réunis dans une expérience cohérente du corps et de l’esprit.</p>
      </div>
    </section>

    <section class="practice-band">
      <div class="practice-image"><img src="/images/gallery/pratique-04.jpg" alt="Deux participantes dans une posture d’ouverture au centre Creyda"></div>
      <div class="practice-copy">
        <h2>Une pratique attentive, loin de la performance.</h2>
        <div class="practice-list">
          <div><span>01</span><h3>Hatha Yoga</h3><p>Des postures tenues avec patience, sans rechercher la performance.</p></div>
          <div><span>02</span><h3>Prânayâma</h3><p>Une dynamique du souffle qui nourrit et régule l’ensemble de l’être.</p></div>
          <div><span>03</span><h3>Dhyâna</h3><p>La méditation pour mieux se connaître et cultiver la sérénité.</p></div>
        </div>
      </div>
    </section>

    <section id="horaires" class="schedule wrap">
      <div>
        <p class="eyebrow">Horaires</p>
        <h2>Pratiquer au fil de la semaine.</h2>
        <p>Les cours durent au minimum 90 minutes. Ils sont ouverts aux personnes débutantes comme avancées.</p>
        <p class="schedule-note">Les séances de bien-être sont proposées sur réservation téléphonique.</p>
        <NuxtLink to="/tarifs" class="text-link schedule-link">Voir les tarifs <span>→</span></NuxtLink>
      </div>
      <div class="schedule-cards">
        <article><p>Matin</p><strong>10h30 — 12h00</strong><span>Du mardi au vendredi</span></article>
        <article><p>Fin de journée</p><strong>17h30 — 19h00</strong><span>Du dimanche au vendredi</span></article>
      </div>
    </section>

    <section class="res-teaser">
      <div class="res-identity">
        <div class="res-mark">R. E. S.</div>
        <p class="eyebrow">Rythme · Équilibre · Synchronicité</p>
      </div>
      <div>
        <h2><span class="no-break">« Toute</span> évolution commence par <span class="no-break">soi.&nbsp;»</span></h2>
        <p>Une méthode de développement personnel créée par Patrick Noblet, nourrie par le yoga, la méditation, le qi gong et un parcours de vie singulier.</p>
        <NuxtLink to="/methode-res" class="text-link">Explorer la méthode <span>→</span></NuxtLink>
      </div>
    </section>

    <section class="visit wrap">
      <header class="visit-heading">
        <p class="eyebrow">Nous trouver</p>
        <h2>Un centre de proximité à Ixelles.</h2>
      </header>
      <div class="visit-details">
        <p><a href="https://www.google.com/maps/place/Centre+Yoga+Ixelles+:+Yoga+Bruxelles+Creyda+Sport/@50.8143634,4.3867333,17.42z/data=!4m6!3m5!1s0x47c3c4c27e6be593:0x24a3ce06f25c7f71!8m2!3d50.8143222!4d4.3885429!16s%2Fg%2F11bzx3d847?entry=ttu&amp;g_ep=EgoyMDI2MDkwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">106 avenue Général Médecin Derache<br>1050 Ixelles, Bruxelles<span class="sr-only"> (nouvel onglet)</span></a></p>
        <p><strong>Bus</strong> 71, 72, 95, N09 — arrêt Cimetière d’Ixelles<br><strong>Tram</strong> 8, 25 — arrêt ULB</p>
        <NuxtLink to="/contact" class="text-link">Préparer votre visite <span>→</span></NuxtLink>
      </div>
    </section>
  </main>
</template>
