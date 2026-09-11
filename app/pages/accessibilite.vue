<script setup lang="ts">
useSeoMeta({
  title: 'Accessibilité',
  description: 'Engagement et fonctionnalités d’accessibilité du site Creyda Yoga.'
})
</script>

<template>
  <main>
    <PageIntro
      eyebrow="Notre engagement"
      title="Un site ouvert à toutes et tous."
      text="L’accessibilité fait partie intégrante de la conception du site Creyda, de sa structure à ses interactions."
    />

    <section class="legal wrap">
      <h2>Notre référence</h2>
      <p>Ce site a été conçu en prenant comme référence les Règles pour l’accessibilité des contenus Web, WCAG 2.2, au niveau AA. Nous cherchons à proposer une expérience robuste avec un lecteur d’écran, au clavier, avec un fort agrandissement ou lorsque les animations sont réduites.</p>

      <h2>Fonctionnalités disponibles</h2>
      <ul>
        <li>Un lien permet d’aller directement au contenu principal.</li>
        <li>Les pages suivent une structure de titres et de régions cohérente.</li>
        <li>Les images porteuses de sens disposent d’une description textuelle.</li>
        <li>Le menu, les accordéons, la galerie et le carrousel sont utilisables au clavier.</li>
        <li>Le focus clavier est fortement visible et n’est pas indiqué par la couleur seule.</li>
        <li>Les préférences système de réduction des animations et de contraste renforcé sont respectées.</li>
        <li>Les liens qui ouvrent une nouvelle fenêtre ou un nouvel onglet sont annoncés.</li>
      </ul>

      <h2>Signaler une difficulté</h2>
      <p>Si un contenu ou une fonction vous pose problème, indiquez-nous si possible la page concernée, l’action que vous souhaitiez réaliser et la technologie d’assistance utilisée. Nous chercherons une solution accessible.</p>
      <p>Écrivez à <a href="mailto:contact@creyda-yoga.be">contact@creyda-yoga.be</a> ou appelez le <a href="tel:+32474971657">0474 97 16 57</a>.</p>
    </section>
  </main>
</template>
