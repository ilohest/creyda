<template>
  <footer class="site-footer">
    <div class="footer-brand">
      <img src="/images/logo-creyda.png" alt="" width="54" height="54">
      <div><strong>CREYDA Yoga</strong><span>Centre de relaxation et d’étude du yoga</span></div>
    </div>
    <div>
      <p>106 avenue Général Médecin Derache<br>1050 Ixelles, Bruxelles</p>
    </div>
    <div>
      <a href="tel:+32474971657">0474 97 16 57</a><br>
      <a href="mailto:contact@creyda-yoga.be">contact@creyda-yoga.be</a>
    </div>
    <div class="footer-bottom">
      <span>© {{ new Date().getFullYear() }} CREYDA ASBL</span>
      <NuxtLink to="/politique-de-confidentialite">Politique de confidentialité</NuxtLink>
    </div>
  </footer>
</template>
