<template>
  <footer class="site-footer">
    <div class="footer-head">
      <NuxtLink to="/" class="footer-wordmark" aria-label="Creyda Yoga — accueil">
        <strong>CREYDA</strong>
        <span>Yoga</span>
      </NuxtLink>
      <p>Centre de relaxation et d’étude du yoga, au cœur d’Ixelles.</p>
    </div>

    <div class="footer-directory">
      <div>
        <span class="footer-label">Nous trouver</span>
        <address>106 avenue Général Médecin Derache<br>1050 Ixelles · Bruxelles</address>
      </div>
      <div>
        <span class="footer-label">Nous écrire</span>
        <a href="mailto:contact@creyda-yoga.be">contact@creyda-yoga.be</a>
        <a href="tel:+32474971657">+32 474 97 16 57</a>
      </div>
      <nav aria-label="Navigation de pied de page">
        <span class="footer-label">Explorer</span>
        <NuxtLink to="/yoga">Le yoga</NuxtLink>
        <NuxtLink to="/bien-etre">Bien-être</NuxtLink>
        <NuxtLink to="/methode-res">Méthode R.E.S.</NuxtLink>
        <NuxtLink to="/tarifs">Tarifs</NuxtLink>
        <NuxtLink to="/galerie">Galerie</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </nav>
      <div class="footer-return">
        <span class="footer-label">Retour</span>
        <a href="#top">Haut de page <span>↑</span></a>
      </div>
    </div>

    <div class="footer-bottom">
      <span>© {{ new Date().getFullYear() }} CREYDA ASBL</span>
      <span>Yoga intégral · Bruxelles</span>
      <NuxtLink to="/politique-de-confidentialite">Politique de confidentialité</NuxtLink>
    </div>
  </footer>
</template>
