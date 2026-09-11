<template>
  <footer class="site-footer">
    <div class="footer-head">
      <NuxtLink to="/" class="footer-wordmark" aria-label="Creyda Yoga — accueil">
        <img src="/images/logo-creyda.png" alt="" width="36" height="36">
        <strong>CREYDA</strong>
      </NuxtLink>
      <p>Centre de relaxation et d’étude du yoga, au cœur d’Ixelles.</p>
    </div>

    <div class="footer-directory">
      <div>
        <span class="footer-label">Nous trouver</span>
        <address><a href="https://www.google.com/maps/place/Centre+Yoga+Ixelles+:+Yoga+Bruxelles+Creyda+Sport/@50.8143634,4.3867333,17.42z/data=!4m6!3m5!1s0x47c3c4c27e6be593:0x24a3ce06f25c7f71!8m2!3d50.8143222!4d4.3885429!16s%2Fg%2F11bzx3d847?entry=ttu&amp;g_ep=EgoyMDI2MDkwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">106 avenue Général Médecin Derache<br>1050 Ixelles · Bruxelles<span class="sr-only"> (nouvel onglet)</span></a></address>
      </div>
      <div>
        <span class="footer-label">Nous écrire</span>
        <a href="mailto:contact@creyda-yoga.be">contact@creyda-yoga.be</a>
        <a href="tel:+32474971657">+32 474 97 16 57</a>
      </div>
      <div class="footer-return">
        <span class="footer-label">Retour</span>
        <a href="#top">Haut de page <span>↑</span></a>
      </div>
    </div>

    <div class="footer-bottom">
      <span>© {{ new Date().getFullYear() }} CREYDA ASBL</span>
      <NuxtLink to="/accessibilite">Accessibilité</NuxtLink>
      <NuxtLink to="/politique-de-confidentialite">Politique de confidentialité</NuxtLink>
      <a class="footer-credit" href="https://isaure-lohest.com/" target="_blank" rel="noopener noreferrer">WEBSITE BY ISAURE<span class="sr-only"> (nouvel onglet)</span></a>
    </div>
  </footer>
</template>
