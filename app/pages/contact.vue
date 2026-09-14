<script setup lang="ts">
const title = 'Contact et accès au centre Creyda'
const description = 'Contactez Patrick Noblet et préparez votre venue au centre Creyda, 106 avenue Général Médecin Derache à Ixelles, près de l’ULB.'
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, twitterTitle: title, twitterDescription: description })

const directionsUrl = 'https://www.google.com/maps/place/Centre+Yoga+Ixelles+:+Yoga+Bruxelles+Creyda+Sport/@50.8143634,4.3867333,17.42z/data=!4m6!3m5!1s0x47c3c4c27e6be593:0x24a3ce06f25c7f71!8m2!3d50.8143222!4d4.3885429!16s%2Fg%2F11bzx3d847?entry=ttu&g_ep=EgoyMDI2MDkwOC4wIKXMDSoASAFQAw%3D%3D'
const mapUrl = 'https://www.openstreetmap.org/export/embed.html?bbox=4.3778%2C50.8102%2C4.3941%2C50.8184&layer=mapnik&marker=50.8143222%2C4.3885429'
</script>

<template>
  <main class="contact-page">
    <PageIntro
      eyebrow="Nous joindre"
      title="Faisons connaissance."
      text="Pour une première séance, une formation ou une question, contactez directement Patrick Noblet."
    />

    <section class="contact-grid wrap">
      <article class="contact-card contact-card--primary">
        <p class="eyebrow">Patrick Noblet</p>
        <a href="tel:+32474971657">0474 97 16 57</a>
        <a href="mailto:contact@creyda-yoga.be">contact@creyda-yoga.be</a>
        <div class="contact-primary__note">
          <p>Privilégiez le téléphone : Patrick ne peut pas toujours répondre rapidement aux messages écrits.</p>
          <p>S’il est indisponible, réessayez plus tard ou laissez-lui le temps de vous rappeler. Les appels en numéro masqué ne peuvent pas être rappelés.</p>
        </div>
      </article>

      <article class="contact-card">
        <div>
          <span>Horaires du centre</span>
          <p>Du mardi au vendredi<br><strong>10h30 — 12h00</strong></p>
          <p>Du dimanche au vendredi<br><strong>17h30 — 19h00</strong></p>
        </div>
        <div class="contact-card__secondary">
          <span>Séances de bien-être</span>
          <p>Horaires ouverts et flexibles, uniquement sur réservation par téléphone.</p>
        </div>
      </article>

      <article class="contact-card">
        <span>Administration</span>
        <p>Laurent Locqueneux<br><a href="tel:+32474985159">0474 98 51 59</a></p>
      </article>
    </section>

    <section class="contact-place wrap">
      <div class="contact-place__copy">
        <p class="eyebrow">Venir au centre</p>
        <h2>À Ixelles,<br>près de l’ULB.</h2>
        <div class="contact-place__facts">
          <div>
            <span>Adresse</span>
            <p><a :href="directionsUrl" target="_blank" rel="noopener noreferrer">106 avenue Général Médecin Derache<br>1050 Ixelles, Bruxelles<span class="sr-only"> (nouvel onglet)</span></a></p>
          </div>
          <div>
            <span>Transports</span>
            <p>Bus 71, 72, 95 et N09 — arrêt Cimetière d’Ixelles<br>Trams 8 et 25 — arrêt ULB</p>
          </div>
          <div>
            <span>À prévoir</span>
            <p>Une tenue souple et confortable. Le centre dispose d’un vestiaire.</p>
          </div>
        </div>
        <a class="button" :href="directionsUrl" target="_blank" rel="noopener noreferrer">Voir l’itinéraire<span class="sr-only"> (nouvel onglet)</span></a>
      </div>
      <div class="contact-image">
        <img src="/images/centre-creyda.jpg" alt="Entrée du centre Creyda à Ixelles" loading="lazy" decoding="async" width="2200" height="1503">
      </div>
    </section>

    <section class="contact-map wrap" aria-labelledby="contact-map-title">
      <iframe
        :src="mapUrl"
        title="Carte du quartier autour du centre Creyda à Ixelles"
        loading="lazy"
        tabindex="-1"
        referrerpolicy="no-referrer"
      />
      <div class="contact-map__scroll-shield" aria-hidden="true" />
      <div class="contact-map__card">
        <p class="eyebrow light">50.8143° N · 4.3885° E</p>
        <h2 id="contact-map-title">CREYDA<br>Ixelles</h2>
        <p><a :href="directionsUrl" target="_blank" rel="noopener noreferrer">106 avenue Général Médecin Derache<br>1050 Bruxelles<span class="sr-only"> (nouvel onglet)</span></a></p>
        <a class="button contact-map__button" :href="directionsUrl" target="_blank" rel="noopener noreferrer">Ouvrir l’itinéraire<span class="sr-only"> (nouvel onglet)</span></a>
      </div>
    </section>

    <section class="contact-support wrap">
      <header>
        <p class="eyebrow">Facturation & soutien</p>
        <h2>Deux comptes,<br>deux destinations.</h2>
        <p>Pour régler un abonnement ou soutenir l’action du centre sans participer aux cours, contactez-nous d’abord par e-mail afin de confirmer le compte à utiliser.</p>
        <a class="text-link" href="mailto:contact@creyda-yoga.be">Écrire au centre <span>→</span></a>
      </header>

      <div class="account-grid">
        <article class="account-card">
          <p class="eyebrow light">Centre de relaxation</p>
          <p class="account-card__iban">BE59 9796<br>3088 0426</p>
        </article>
        <article class="account-card">
          <p class="eyebrow light">Fondation A. Van Lysebeth</p>
          <p class="account-card__iban">BE79 9733<br>5587 3533</p>
        </article>
        <blockquote><span>«&nbsp;Plus on est de fous,</span><span>plus il y a de yogis&nbsp;!&nbsp;»</span></blockquote>
      </div>
    </section>
  </main>
</template>
