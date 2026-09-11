<script setup lang="ts">
useSeoMeta({ title: 'Contact' })

const directionsUrl = 'https://www.google.com/maps/search/?api=1&query=106+Avenue+G%C3%A9n%C3%A9ral+M%C3%A9decin+Derache%2C+1050+Ixelles'
const mapUrl = 'https://www.openstreetmap.org/export/embed.html?bbox=4.3778%2C50.8102%2C4.3941%2C50.8184&layer=mapnik&marker=50.814325%2C4.385968'
</script>

<template>
  <main class="contact-page">
    <PageIntro
      title="Faisons connaissance."
      text="Pour une première séance, une formation ou une question, contactez directement Patrick Noblet."
    />

    <section class="contact-grid wrap">
      <div class="contact-primary">
        <RadiantMark variant="dense" tone="light" class="contact-burst" />
        <p class="eyebrow light">Patrick Noblet</p>
        <a href="tel:+32474971657">0474 97 16 57</a>
        <a href="mailto:contact@creyda-yoga.be">contact@creyda-yoga.be</a>
        <div class="contact-primary__note">
          <p>Privilégiez le téléphone : Patrick ne peut pas toujours répondre rapidement aux messages écrits.</p>
          <p>S’il est indisponible, réessayez plus tard ou laissez-lui le temps de vous rappeler. Les appels en numéro masqué ne peuvent pas être rappelés.</p>
        </div>
      </div>

      <div class="contact-details">
        <article>
          <span>Horaires du centre</span>
          <p>Du mardi au vendredi<br><strong>10h30 — 12h00</strong></p>
          <p>Du dimanche au vendredi<br><strong>17h30 — 19h00</strong></p>
        </article>
        <article>
          <span>Séances de bien-être</span>
          <p>Horaires ouverts et flexibles, uniquement sur réservation par téléphone.</p>
        </article>
        <article>
          <span>Administration</span>
          <p>Laurent Locqueneux<br><a href="tel:+32474985159">0474 98 51 59</a></p>
        </article>
      </div>
    </section>

    <section class="contact-place wrap">
      <div class="contact-place__copy">
        <p class="eyebrow">Venir au centre</p>
        <h2>À Ixelles,<br>près de l’ULB.</h2>
        <div class="contact-place__facts">
          <div>
            <span>Adresse</span>
            <p>106 avenue Général Médecin Derache<br>1050 Ixelles, Bruxelles</p>
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
        <a class="button" :href="directionsUrl" target="_blank" rel="noopener noreferrer">Voir l’itinéraire</a>
      </div>
      <div class="contact-image">
        <img src="/images/centre-creyda.jpg" alt="Entrée du centre Creyda à Ixelles">
      </div>
    </section>

    <section class="contact-map wrap" aria-labelledby="contact-map-title">
      <iframe
        :src="mapUrl"
        title="Carte du quartier autour du centre Creyda à Ixelles"
        loading="lazy"
        referrerpolicy="no-referrer"
      />
      <div class="contact-map__target" aria-hidden="true"><span /></div>
      <div class="contact-map__card">
        <p class="eyebrow light">50.8143° N · 4.3860° E</p>
        <h2 id="contact-map-title">CREYDA<br>Ixelles</h2>
        <p>106 avenue Général Médecin Derache<br>1050 Bruxelles</p>
        <a :href="directionsUrl" target="_blank" rel="noopener noreferrer">Ouvrir l’itinéraire <span>→</span></a>
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
        <article class="account-card account-card--light">
          <p class="eyebrow">Fondation A. Van Lysebeth</p>
          <p class="account-card__iban">BE79 9733<br>5587 3533</p>
        </article>
        <blockquote>« Plus on est de fous,<br>plus il y a de yogis ! »</blockquote>
      </div>
    </section>
  </main>
</template>
