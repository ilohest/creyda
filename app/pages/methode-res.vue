<script setup lang="ts">
const title = 'Méthode R.E.S. — Rythme, Équilibre, Synchronicité'
const description = 'Découvrez la méthode R.E.S. créée par Patrick Noblet à Bruxelles : un parcours de développement personnel en cinq étapes et sa formation.'
useSeoMeta({ title, description, ogTitle: title, ogDescription: description, twitterTitle: title, twitterDescription: description })

const steps = [
  {
    title: 'Le Coq',
    text: 'Étape de base, le Coq travaille — à l’aide du qi gong, du yoga et de la méditation — sur la stabilité psychique et invite à une introspection en profondeur.',
    quote: 'Il n’y a qu’en touchant à la corde sensible qu’il peut y avoir changement efficace.'
  },
  {
    title: 'Le Tigre',
    text: 'Le Tigre vise la stabilité physique et la puissance grâce à certaines postures toniques de yoga et à des exercices d’isométrie, un travail corporel notamment utilisé par Bruce Lee pour se muscler sans appareil.'
  },
  {
    title: 'Le Dragon',
    text: 'Le Dragon exerce l’élasticité et la souplesse, notamment celles de la colonne vertébrale, par les étirements du yoga : ce qui est souple dans le corps est souple dans la vie.'
  },
  {
    title: 'L’Aigle',
    text: 'L’Aigle travaille sur le déplacement. Par des principes de kung-fu, cette étape invite à prendre conscience de l’espace, à se déplacer sans entraves et à ne plus s’imposer de limites restrictives.'
  },
  {
    title: 'Le Singe',
    text: 'Ultime étape, le Singe globalise la démarche. C’est l’observateur : postures et relaxations spécifiques invitent à prendre de la hauteur et à comprendre que gestes, agissements, pensées et mots sont tous sources d’effets.'
  }
]

const program = [
  {
    number: '01',
    title: 'Yoga thérapeutique',
    text: 'Une étude approfondie pour mieux comprendre le fonctionnement de l’être humain et la manière dont son état physique et psychique s’est construit. La pratique apprend à écouter les messages du corps — rythme cardiaque et respiratoire, moiteur, système endocrinien — puis à agir par les postures, la respiration et une autre manière d’appréhender les situations du quotidien.'
  },
  {
    number: '02',
    title: 'Acupressure',
    text: 'L’apprentissage de différentes techniques, à pratiquer sur soi-même ou sur son entourage, pour libérer les énergies stagnantes dans certaines zones du corps ou les recharger afin de revitaliser l’ensemble du corps.'
  },
  {
    number: '03',
    title: 'Méthode métamorphique',
    text: 'Une pratique qui relève davantage de l’art du toucher que du massage. Elle agit principalement sur la psyché, tout en produisant un effet profondément relaxant.'
  },
  {
    number: '04',
    title: 'Énergies & radiesthésie',
    text: 'L’apprentissage de techniques d’imposition des mains — magnétisme et magnétisme spirituel — ainsi que de la radiesthésie, afin d’aborder le domaine des énergies ou de l’approfondir.'
  }
]

const laws = [
  'La loi des semblables, ou loi de l’attraction, et son contraire : la loi de la répulsion.',
  'La loi de la gravitation et son contraire : celle de l’élévation.',
  'La loi de la rétroaction : involution et évolution.'
]

const activeStep = ref(0)

const stepOffset = (index: number) => {
  const count = steps.length
  const forward = (index - activeStep.value + count) % count
  return forward > Math.floor(count / 2) ? forward - count : forward
}

const stepClass = (index: number) => {
  const offset = stepOffset(index)
  if (offset === 0) return 'is-active'
  if (offset === -1) return 'is-previous'
  if (offset === 1) return 'is-next'
  return 'is-hidden'
}

const changeStep = (direction: number) => {
  activeStep.value = (activeStep.value + direction + steps.length) % steps.length
}
</script>

<template>
  <main class="res-page">
    <PageIntro eyebrow="Rythme · Équilibre · Synchronicité" title="Méthode R.E.S." text="Créée par Patrick Noblet, la méthode R.E.S. relie travail corporel, développement personnel et réflexion philosophique pour accompagner un changement global." />

    <section class="quote-section wrap">
      <blockquote>« Vous devriez être le changement que vous souhaitez voir dans le monde. »</blockquote>
      <cite>— Gandhi</cite>
    </section>

    <section class="res-story wrap">
      <header><p class="eyebrow">Origine</p><h2>Toute (r)évolution commence par soi.</h2></header>
      <div class="res-story__copy">
        <p>Incarnant cette citation de Gandhi, Patrick Noblet s’est appuyé sur son expérience de vie atypique et ses multiples acquis pour élaborer puis transmettre une méthode de développement personnel. Son parcours, entre hauts et bas, s’ouvre sur une renaissance et un changement de vie radical. Cette trajectoire est fondatrice de la méthode et de son envie de la transmettre.</p>
        <h3>Rebonds</h3>
        <p>Patrick Noblet souffre de cécité — « heureusement pas totale », précise-t-il. Son handicap l’amène à développer finement son ressenti intérieur et son sens kinesthésique. Adolescent, soucieux de canaliser une énergie débordante doublée de frustrations, il se tourne vers les arts martiaux — karaté et kung-fu —, le qi gong et le yoga.</p>
        <blockquote>« Ce qui était un handicap, au départ, est devenu un atout. »</blockquote>
        <p>Il vit cet apprentissage sur les plans physique et philosophique. Cette réflexion fait partie intégrante de sa démarche et de la méthode R.E.S. — Rythme, Équilibre, Synchronicité — qui se veut à la fois théorique et pratique, interconnectée et personnelle, corporelle et spirituelle.</p>
        <p>Son handicap éclaire aussi sa première vocation professionnelle, tournée vers la justice : après des études de droit, il devient notamment consultant en mobilité et accessibilité auprès de la Ville de Paris, de la SNCF et de la RATP. Il réussit ensuite dans l’immobilier avant de s’abîmer, au propre comme au figuré. L’abondance de tout lui fait oublier le « Tout » entrevu, puis il perd tout.</p>
        <blockquote>« J’étais passé d’une recherche corporelle et spirituelle aux plaisirs immédiats du corps. Quand l’argent est présent, l’âme reste derrière. »</blockquote>
      </div>
    </section>

    <figure class="res-editorial-image wrap">
      <img src="/images/accompagnement.jpg" alt="Patrick Noblet accompagnant une posture de yoga" loading="lazy" decoding="async" width="1600" height="1540">
    </figure>

    <section class="res-rebirth">
      <div class="wrap res-rebirth__grid">
        <div><p class="eyebrow light">Rythme · Équilibre · Synchronicité</p><h2>Vivre autrement.</h2></div>
        <div>
          <p>C’est à Bruxelles, à l’hôpital, que Patrick se « réveille » et décide de changer de vie. Il se rappelle ce que le yoga lui avait apporté plus jeune : il abandonne le monde des affaires pour revenir à l’essentiel, transmettre ses acquis et ses expériences, et redonner confiance à d’autres.</p>
          <p>La méthode R.E.S. naît de ce tournant. Elle s’appuie sur le yoga, la relaxation, la visualisation, la méditation, les massages et les automassages, mais va au-delà d’une somme d’exercices pratiques : c’est une méthode globale qui invite à un changement structurel.</p>
          <blockquote>« Dans cette société qui finit par nous faire oublier nos valeurs intrinsèques, il est possible de vivre autre chose, autrement. »</blockquote>
          <p><em>« Aujourd’hui, regrette Patrick Noblet, nos existences ne sont plus rythmées que par des situations sources de tensions et d’angoisses : précarité, compétition, stress, embouteillages, factures… Cet enchaînement de contraintes — sorte de danse macabre — crée chez chacun un déséquilibre, lui-même étant la cause de l’instabilité générale et réciproquement. »</em></p>
          <p>Active et évolutive, elle invite chacun à prendre ses responsabilités plutôt qu’à rejeter la cause de ses maux sur les autres ou sur la société. Vivre autrement implique un choix : le chemin emprunté dépend du libre arbitre et de la volonté de chacun.</p>
          <p>La méthode vise ainsi à retrouver un rythme naturel de vie face aux tensions, à la compétition, au stress et aux contraintes qui créent le déséquilibre individuel autant que collectif.</p>
        </div>
      </div>
    </section>

    <section class="steps wrap">
      <header class="steps-heading">
        <p class="eyebrow">Le parcours</p>
        <div class="steps-heading__row">
          <h2 id="res-steps-title">Un changement en cinq étapes.</h2>
          <div class="steps-heading__copy">
            <p class="steps-intro">Ouverte à tous et étalée sur un minimum de 200 heures, cette méthode de transformation suit les cinq animaux du kung-fu. L’équilibre retrouvé est l’aboutissement d’un travail personnel.</p>
            <p class="res-signature">Patrick Noblet, auteur de la méthode R.E.S.</p>
          </div>
        </div>
      </header>
      <div
        class="steps-carousel"
        role="region"
        aria-roledescription="carrousel"
        aria-labelledby="res-steps-title"
        aria-describedby="res-carousel-help"
        tabindex="0"
        @keydown.left.prevent="changeStep(-1)"
        @keydown.right.prevent="changeStep(1)"
      >
        <p id="res-carousel-help" class="sr-only">Utilisez les boutons précédent et suivant, ou les flèches gauche et droite du clavier, pour parcourir les cinq étapes.</p>
        <div id="res-steps-track" class="steps-carousel__track" aria-live="polite" aria-atomic="false">
          <div
            v-for="(step, index) in steps"
            :key="step.title"
            class="steps-card"
            :class="stepClass(index)"
            :aria-hidden="index !== activeStep"
            role="group"
            aria-roledescription="étape"
            :aria-label="`${index + 1} sur ${steps.length} : ${step.title}`"
          >
            <span>0{{ index + 1 }}</span>
            <div>
              <h3>{{ step.title }}</h3>
              <p>{{ step.text }}</p>
              <blockquote v-if="step.quote">« {{ step.quote }} »</blockquote>
            </div>
          </div>
        </div>
        <div class="steps-carousel__controls">
          <button type="button" aria-label="Afficher l’étape précédente" aria-controls="res-steps-track" @click="changeStep(-1)">←</button>
          <p aria-hidden="true"><span>0{{ activeStep + 1 }}</span> / 05</p>
          <button type="button" aria-label="Afficher l’étape suivante" aria-controls="res-steps-track" @click="changeStep(1)">→</button>
        </div>
      </div>
    </section>

    <section class="res-manifesto wrap">
      <RadiantMark variant="round" class="manifesto-burst" />
      <p>« Une réconciliation avec soi-même, les autres et tout ce qui nous entoure. »</p>
      <NuxtLink to="/tarifs" class="text-link">Découvrir les tarifs <span>→</span></NuxtLink>
    </section>

    <section class="res-training wrap">
      <header class="res-training__heading">
        <div><p class="eyebrow">La formation</p><h2>Deux années pour apprendre puis transmettre.</h2></div>
        <div class="res-training__intro"><p>Depuis la parution d’un premier article dans la revue <em>Bio-info</em>, avant 2010, la méthode R.E.S. n’a cessé d’évoluer et de se transformer jusqu’à sa forme actuelle.</p></div>
      </header>
      <div class="res-years">
        <article>
          <span>Année 01</span><h3>Apprentissage</h3>
          <p>De début septembre à fin juillet, l’apprentissage représente au minimum 200 heures. Chaque participant peut augmenter ce volume selon son intérêt et le but qu’il s’est fixé.</p>
          <p>À l’issue de l’année, un premier certificat atteste l’assiduité, le travail accompli et le nombre d’heures consacré à l’apprentissage.</p>
        </article>
        <article>
          <span>Année 02 · facultative</span><h3>Approfondissement</h3>
          <p>La seconde année permet de parfaire ses connaissances et de rédiger un mémoire sur un sujet libre, à remettre au plus tard le 31 juillet de l’année civile en cours.</p>
          <p>Le second certificat donne la qualité d’enseignant de la méthode R.E.S. Son détenteur peut l’enseigner librement, sans franchise, après signature d’une charte qui protège l’esprit dans lequel elle a été créée, développée et enseignée.</p>
        </article>
      </div>
      <p class="res-training__purpose">L’objectif est d’offrir à chacun un développement personnel aussi complet que possible, sur le chemin d’un épanouissement éclairé. Le nom R.E.S. étant déposé, toute personne qui représente la méthode s’engage à respecter les valeurs de son concepteur et du Centre.</p>
    </section>

    <section class="res-program">
      <div class="wrap">
        <header class="res-section-heading res-section-heading--compact"><p class="eyebrow">Le programme</p><h2>Une approche globale.</h2></header>
        <div class="res-program__grid">
          <article v-for="item in program" :key="item.number"><span>{{ item.number }}</span><h3>{{ item.title }}</h3><p>{{ item.text }}</p></article>
        </div>
      </div>
    </section>

    <section class="res-philosophy wrap">
      <div><p class="eyebrow">De savoir à Connaissance</p><h2>Une philosophie pratique.</h2></div>
      <div>
        <p>L’ensemble de la formation est accompagné de conversations philosophiques et de l’étude des lois universelles :</p>
        <ul><li v-for="law in laws" :key="law">{{ law }}</li></ul>
        <p>Le but est de se forger une philosophie pratique : le savoir devient Connaissance. Cette exploration fait notamment appel à des notions de Kabbale et d’alchimie.</p>
        <p>Tout le travail tend à faire de chacun un être vivant dans l’Harmonie, sur les plans physique et psychique et, pour celles et ceux qui le désirent, sur le plan spirituel.</p>
        <p class="res-signature"><strong>Patrick Noblet</strong><br>Auteur de la méthode R.E.S. · Marque déposée à l’I.N.P.I.</p>
      </div>
    </section>

    <section class="res-practical wrap">
      <div><p class="eyebrow light">En pratique</p><h2>S’engager pleinement.</h2></div>
      <div class="res-practical__items">
        <p>Pour que cette année soit pleinement profitable, chacun doit être prêt à rendre sacrés du temps et de l’argent. Une personne qui décide de se lancer dans cet apprentissage doit préserver du temps dans son agenda. La somme versée lors de l’inscription n’est pas remboursable.</p>
        <p>Le nombre de participants annoncé pour ce parcours est compris entre 10 et 20 personnes.</p>
        <p>Une réunion d’information est organisée au préalable pour toutes les personnes qui souhaitent en savoir plus avant de prendre une décision ferme et définitive. Une participation forfaitaire de 30 € est demandée pour cette soirée.</p>
        <NuxtLink to="/contact" class="button button-light">Demander les prochaines dates</NuxtLink>
      </div>
    </section>
  </main>
</template>
