<template>
  <div>
    <SiteHeader />
    <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
    <SiteFooter />
  </div>
</template>
