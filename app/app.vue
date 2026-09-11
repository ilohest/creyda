<template>
  <div id="top">
    <CursorHalo />
    <SiteHeader />
    <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
    <SiteFooter />
  </div>
</template>
