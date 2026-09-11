<script setup lang="ts">
useSeoMeta({
  title: 'Séances de bien-être',
  description: 'Séances individuelles de relaxation à Ixelles et conseils pour vivre sa journée avec davantage de détente et de conscience.'
})

const daySteps = [
  {
    number: '01',
    title: 'Introduction',
    paragraphs: [
      'Une journée peut être considérée comme une initiation. Même lorsqu’elle ressemble à la précédente, elle reste une expérience différente : nous ne vivons jamais deux fois exactement la même situation.',
      'Chaque expérience peut nous apprendre quelque chose. L’idée est donc de remplacer la force de l’habitude par un rituel conscient : choisir un chemin pour la journée et les moyens de le parcourir avec plus de présence.'
    ],
    points: [
      'Reconnaître ce qui rend chaque journée singulière.',
      'Observer ce que les expériences nous apprennent.',
      'Définir consciemment un rituel, un chemin et une manière de l’emprunter.'
    ]
  },
  {
    number: '02',
    title: 'Au réveil',
    paragraphs: [
      'Lorsque le réveil sonne, ne vous levez pas immédiatement. Accordez-vous environ un quart d’heure pour passer doucement du monde des rêves à celui de la réalité et préparer la journée.'
    ],
    points: [
      'Étirez les jambes, les bras et la colonne vertébrale, lentement, comme le ferait un chat.',
      'Allongé sur le dos, pratiquez quelques respirations profondes, sans rétention d’air.',
      'Visualisez précisément le déroulement de la journée, du lever au coucher.',
      'Levez-vous de façon décidée, mais jamais brusque.'
    ]
  },
  {
    number: '03',
    title: 'Le début de la journée',
    paragraphs: [
      'Prenez le petit déjeuner sans précipitation. Portez l’attention sur les goûts, les odeurs et les sensations. Si une pensée parasite apparaît, accueillez-la puis laissez-la passer, sans vous y attacher.',
      'Rangez ensuite la table et accomplissez votre toilette en restant conscient de chaque geste, du contact de l’eau et de la respiration. Avant de partir, pratiquez votre séance de yoga selon le temps dont vous disposez.'
    ],
    points: [
      'Si le temps manque, asseyez-vous sans vous appuyer, le dos et la tête droits.',
      'Posez les pieds à plat au sol et les mains sur les cuisses, paumes vers le bas.',
      'Respirez profondément, lentement et doucement pendant une dizaine de minutes.',
      'Écoutez vos sensations et faites naître intérieurement un sentiment de bien-être.'
    ]
  },
  {
    number: '04',
    title: 'Le trajet',
    paragraphs: [
      'Marchez tranquillement, d’un pas rythmé, en pratiquant une respiration consciente. Revenez régulièrement à ce que vous voyez, à ce que vous êtes et à ce que vous ressentez ici et maintenant.',
      'Cette attention évite de nourrir les pensées négatives et aide à prendre du recul face aux petites contrariétés du trajet.'
    ]
  },
  {
    number: '05',
    title: 'L’arrivée à destination',
    paragraphs: [
      'Avant d’entrer, prenez un instant pour regarder l’ensemble de la pièce. Ce simple arrêt permet de prendre la mesure de ce qui vous attend sans vous laisser immédiatement absorber.',
      'Saluez les personnes présentes, rangez vos affaires, changez-vous si nécessaire, puis faites une respiration profonde avant de commencer vos occupations.'
    ]
  },
  {
    number: '06',
    title: 'La période de travail',
    paragraphs: [
      'Gardez une vision d’ensemble afin de prendre de la hauteur et de ne pas accorder aux événements ou aux remarques plus d’importance qu’ils n’en ont.',
      'Dès que cela est possible, asseyez-vous quelques instants pour une relaxation éclair. Avant de partir, regardez une dernière fois la pièce avec le sentiment du devoir accompli, respirez profondément, puis quittez-la.'
    ],
    points: [
      'Marquez parfois un temps d’arrêt pour observer le lieu où vous travaillez.',
      'Lorsqu’une personne vous parle, interrompez votre tâche : ne faites pas deux choses à la fois.',
      'Tournez-vous vers elle, regardez-la et prenez le temps de répondre avec calme.'
    ]
  },
  {
    number: '07',
    title: 'De retour à la maison',
    paragraphs: [
      'Une fois la porte refermée, laissez la journée derrière vous et n’anticipez pas encore la suivante. En vous déchaussant, imaginez que vous déposez aussi vos soucis.',
      'Après une respiration profonde, installez-vous quelques instants sur une chaise ou un tapis. Créez une atmosphère propice — musique, lumière douce ou parfum agréable — puis retrouvez vos occupations en pleine conscience. Se sentir bien, c’est déjà être bien.'
    ]
  },
  {
    number: '08',
    title: 'Au coucher',
    paragraphs: [
      'Avant de vous coucher, pratiquez une courte méditation pour relâcher les tensions. Allongé sur le dos, passez la journée en revue et faites-en calmement le bilan.',
      'Posez les mains sur l’abdomen, revenez à la respiration et laissez venir le sommeil avec des pensées apaisantes : elles participent à la qualité de la nuit.'
    ],
    points: [
      'Avez-vous suivi le programme imaginé au réveil ?',
      'Face aux situations rencontrées, qu’avez-vous bien fait et que pourriez-vous ajuster demain ?'
    ]
  }
]

const activeDayStep = ref<number | null>(0)

function handleStepToggle(index: number, event: Event) {
  const details = event.currentTarget as HTMLDetailsElement

  if (details.open) {
    activeDayStep.value = index
  } else if (activeDayStep.value === index) {
    activeDayStep.value = null
  }
}
</script>

<template>
  <main class="wellbeing-page">
    <PageIntro
      eyebrow="Séances individuelles"
      title="Retrouver un espace de calme."
      text="Décompresser, écouter ce qui se passe en soi et retrouver un état de relaxation, dans un accompagnement entièrement individuel."
    />

    <section class="wellbeing-opening wrap">
      <div class="wellbeing-opening__image">
        <img src="/images/accompagnement.jpg" alt="Accompagnement individuel au centre Creyda">
      </div>
      <div class="wellbeing-opening__copy">
        <p class="eyebrow">Faire connaissance</p>
        <h2>Une séance centrée sur vous.</h2>
        <p>Ce temps s’adresse à celles et ceux qui souhaitent relâcher les tensions, faire le point et retrouver un équilibre plus serein, sur les plans physique et intérieur.</p>
        <p>L’accompagnement associe différentes techniques : acupressure, étirements, relaxation, imposition des mains et Reiki. La parole tient une place essentielle : vos remarques, vos sensations et votre vécu sont écoutés avec attention.</p>
        <p>La séance est toujours individuelle. Les horaires sont ouverts et flexibles, sur rendez-vous pris uniquement par téléphone.</p>
        <div class="wellbeing-facts">
          <div><span>Durée</span><strong>1 heure</strong></div>
          <div><span>Tarif</span><strong>50 €</strong></div>
        </div>
        <p class="wellbeing-disclaimer">Cet accompagnement vise la détente et le bien-être. Il ne remplace pas un diagnostic, un traitement ni un suivi médical.</p>
        <NuxtLink to="/contact" class="button">Réserver par téléphone</NuxtLink>
      </div>
    </section>

    <section class="wellbeing-quote">
      <RadiantMark variant="airy" tone="light" class="wellbeing-quote__mark" />
      <blockquote>Regarder, respirer, toucher avec légèreté&nbsp;: revenir à des gestes simples.</blockquote>
      <p>Une approche inspirée notamment de l’enseignement de Mikao Usui, fondateur du Reiki.</p>
    </section>

    <section class="conscious-day wrap">
      <header class="conscious-day__head">
        <p class="eyebrow">Une journée en conscience</p>
        <h2>Du réveil<br>au coucher.</h2>
        <p>Un parcours proposé par Patrick Noblet pour vivre les gestes ordinaires avec davantage de détente, de joie et de présence.</p>
      </header>

      <div class="conscious-day__steps">
        <details
          v-for="(step, index) in daySteps"
          :key="step.number"
          :open="activeDayStep === index"
          @toggle="handleStepToggle(index, $event)"
        >
          <summary>
            <span>{{ step.number }}</span>
            <h3>{{ step.title }}</h3>
            <i aria-hidden="true">+</i>
          </summary>
          <div class="conscious-day__content">
            <p v-for="paragraph in step.paragraphs" :key="paragraph">{{ paragraph }}</p>
            <ul v-if="step.points">
              <li v-for="point in step.points" :key="point">{{ point }}</li>
            </ul>
          </div>
        </details>
      </div>
    </section>

    <section class="wellbeing-cta wrap">
      <div>
        <p class="eyebrow light">Prendre rendez-vous</p>
        <h2>Offrez-vous un temps d’écoute.</h2>
      </div>
      <div>
        <p>Les séances de bien-être sont proposées sur réservation téléphonique, selon des horaires flexibles.</p>
        <NuxtLink to="/contact" class="button button-light">Contacter Patrick</NuxtLink>
        <NuxtLink to="/tarifs" class="text-link wellbeing-cta__link">Voir tous les tarifs <span>→</span></NuxtLink>
      </div>
    </section>
  </main>
</template>
