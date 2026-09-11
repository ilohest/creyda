<script setup lang="ts">
const title = 'Tarifs des cours de yoga et formations'
const description = 'Consultez les tarifs Creyda : cours d’essai, séances de yoga à Ixelles, forfaits, bien-être et formation à la méthode R.E.S.'
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, twitterTitle: title, twitterDescription: description })

const yoga = [
  { title: 'Cours d’essai', price: '10 €', unit: 'la séance', details: ['Un cours d’essai par personne'] },
  { title: 'Cours de yoga', price: '18 €', unit: 'la séance', details: [] },
  { title: 'Carte de 10 séances', price: '150 €', unit: 'valable 6 mois', details: [] },
  { title: 'Stage de yoga thérapeutique', price: '150 €', unit: 'le stage', details: ['2 séances', '2h30 par séance', 'Samedi et dimanche · 14h00–16h30', 'Groupe de 10 personnes maximum'] },
  { title: 'Forfait mensuel', price: '65 €', unit: 'par mois', details: ['1 séance par semaine'] },
  { title: 'Forfait annuel', price: '750 €', unit: 'par an', details: ['1 séance par semaine'] },
  { title: 'Forfait mensuel illimité', price: '85 €', unit: 'par mois', details: ['Nombre de séances illimité par mois'] },
  { title: 'Forfait annuel illimité', price: '930 €', unit: 'par an', details: ['Nombre de séances illimité par an'] }
]

const formations = [
  { title: 'Connais-toi toi-même', price: '120 €', unit: '', details: ['« Comment se construire un corps de conscience »', '2 séances · samedi et dimanche', '2h00 par séance', '10h00–12h00 et 14h00–16h30', 'Groupe de 5 personnes minimum'] },
  { title: 'Méditation, techniques thérapeutiques et philosophie', price: '30 €', unit: '', details: ['Méditation en trois phases : concentration / rappel de soi, contemplation / raison, absorption / identification', 'Techniques thérapeutiques pour améliorer son bien-être et celui de son entourage', 'Présentation et réflexion autour d’un thème philosophique', 'Chaque 4e samedi du mois', '09h30–12h00 et 13h30–16h00', 'Réservation au minimum 8 jours avant'] }
]

const wellbeing = [
  { title: 'Séance bien-être', price: '50 €', unit: 'la séance', details: [] },
  { title: 'Forfait de 10 séances bien-être', price: '400 €', unit: 'les 10 séances', details: [] }
]

const res = [
  { title: 'Méthode R.E.S. · année 1', price: '1 630 €', unit: 'par an', details: [] },
  { title: 'Méthode R.E.S. · année 2', price: '1 630 €', unit: 'par an', details: ['Deuxième année facultative'] }
]
</script>

<template>
  <main class="pricing-page">
    <RadiantMark variant="dense" class="pricing-burst" />
    <PageIntro class="pricing-intro" eyebrow="Cours · Formations · Bien-être" title="Choisir le rythme qui vous convient." text="Cours ponctuels, forfaits et formations : chaque formule accompagne une pratique régulière, à votre mesure." />

    <section class="pricing-section wrap">
      <header class="pricing-heading">
        <div><p class="eyebrow">01 · Yoga</p><h2>Cours & forfaits</h2></div>
        <p>Séances de 90 minutes en groupe de 10 personnes maximum. Vêtements souples conseillés ; vestiaire et commodités sur place.</p>
      </header>
      <div class="ticket-grid">
        <article v-for="item in yoga" :key="item.title" class="price-ticket">
          <h3>{{ item.title }}</h3>
          <div class="ticket-price"><strong>{{ item.price }}</strong><span v-if="item.unit">{{ item.unit }}</span></div>
          <ul v-if="item.details.length"><li v-for="detail in item.details" :key="detail">{{ detail }}</li></ul>
        </article>
      </div>
      <NuxtLink to="/yoga" class="text-link section-link">En savoir plus sur le yoga <span>→</span></NuxtLink>
    </section>

    <section class="pricing-section wrap">
      <header class="pricing-heading">
        <div><p class="eyebrow">02 · Formations</p><h2>Approfondir</h2></div>
        <p>Des rendez-vous thématiques pour explorer la connaissance de soi, la méditation et les techniques thérapeutiques.</p>
      </header>
      <div class="ticket-grid ticket-grid--two">
        <article v-for="item in formations" :key="item.title" class="price-ticket">
          <h3>{{ item.title }}</h3>
          <div class="ticket-price"><strong>{{ item.price }}</strong><span v-if="item.unit">{{ item.unit }}</span></div>
          <ul><li v-for="detail in item.details" :key="detail">{{ detail }}</li></ul>
        </article>
      </div>
    </section>

    <section class="pricing-section wrap">
      <header class="pricing-heading">
        <div><p class="eyebrow">03 · Bien-être</p><h2>Séances individuelles</h2></div>
        <p>Séances d’une heure, en individuel. Vêtements souples conseillés ; vestiaire et commodités sur place.</p>
      </header>
      <div class="ticket-grid ticket-grid--two">
        <article v-for="item in wellbeing" :key="item.title" class="price-ticket">
          <h3>{{ item.title }}</h3>
          <div class="ticket-price"><strong>{{ item.price }}</strong><span v-if="item.unit">{{ item.unit }}</span></div>
        </article>
      </div>
      <NuxtLink to="/bien-etre" class="text-link section-link">Découvrir les séances de bien-être <span>→</span></NuxtLink>
    </section>

    <section class="pricing-section wrap">
      <header class="pricing-heading">
        <div><p class="eyebrow">04 · Méthode R.E.S.</p><h2>Le parcours</h2></div>
        <p>Formation en groupe de 10 personnes maximum. Chaque année comprend le forfait annuel Yoga illimité et un enseignement complémentaire propre à la méthode, dont la fréquence est définie selon les disponibilités.</p>
      </header>
      <div class="ticket-grid ticket-grid--two">
        <article v-for="item in res" :key="item.title" class="price-ticket">
          <h3>{{ item.title }}</h3>
          <div class="ticket-price"><strong>{{ item.price }}</strong><span v-if="item.unit">{{ item.unit }}</span></div>
          <ul v-if="item.details.length"><li v-for="detail in item.details" :key="detail">{{ detail }}</li></ul>
        </article>
      </div>
      <NuxtLink to="/methode-res" class="text-link section-link">Découvrir la méthode R.E.S. <span>→</span></NuxtLink>
    </section>

    <section class="pricing-philosophy wrap" aria-labelledby="pricing-philosophy-title">
      <header class="pricing-philosophy__heading">
        <p class="eyebrow">La philosophie du centre</p>
        <h2 id="pricing-philosophy-title">Pratiquer dans un cadre attentif.</h2>
      </header>

      <div class="pricing-philosophy__cards">
        <article>
          <h3>Convivialité</h3>
          <p>Ce terme indique que vous trouverez dans notre centre de bien-être et de relaxation une ambiance chaleureuse, à tous les niveaux. Dans les faits, cela se traduit par :</p>
          <ul>
            <li>Le partage de points de vue, d’expériences et de sensations.</li>
            <li>Un suivi téléphonique : l’enseignant se tient toujours à votre écoute pour ce qui pourrait concerner vos questions ou vos préoccupations. Son rôle sera alors de trouver, avec vous, une réponse adéquate et de vous rassurer. Les problèmes attendent que nous perdions pied pour s’imposer à nous et nous étouffer.</li>
            <li>Chaque membre reçoit également la revue <cite>Les chemins du Yoga</cite>, diffusée par la Fédération Belge d’Hébertisme et de Yoga.</li>
            <li>Le centre fonctionne six jours sur sept, toute l’année. Dès lors qu’un membre s’est acquitté de sa cotisation mensuelle, il a la possibilité de rattraper les cours manqués le mois suivant.</li>
          </ul>
        </article>

        <article>
          <h3>Obligations</h3>
          <p>Les seules obligations que chaque membre du centre doit impérativement respecter sont :</p>
          <ul>
            <li>Le respect du lieu dans lequel il se trouve.</li>
            <li>Le respect de l’enseignant ainsi que des autres participants. Cela implique d’être à l’écoute de l’autre et de faire preuve d’une grande tolérance : nous pouvons tous « être dans un mauvais jour ».</li>
            <li>L’interdiction d’utiliser un GSM pendant les séances.</li>
            <li>L’interdiction de fumer, de se présenter à une séance en état d’ébriété ou de se trouver sous l’emprise d’une drogue.</li>
            <li>Le paiement de la cotisation mensuelle lors du premier cours de chaque mois.</li>
            <li>Le paiement de l’assurance annuelle au moment de l’inscription au centre, puis au début de chaque mois de septembre.</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="pricing-conditions wrap">
      <div><p class="eyebrow">Réservation</p><h2>Prêt·e à commencer ?</h2></div>
      <div>
        <p><strong>La réservation par téléphone ou par e-mail est obligatoire.</strong></p>
        <p>En cas de cessation des activités par le bénéficiaire avant la date d’échéance, aucun remboursement ne pourra être demandé.</p>
        <NuxtLink to="/contact" class="button button-dark">Nous contacter</NuxtLink>
      </div>
    </section>
  </main>
</template>
