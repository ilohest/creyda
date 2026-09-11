<template>
  <div id="top">
    <SiteHeader />
    <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
    <SiteFooter />
  </div>
</template>
