export default defineNuxtPlugin((nuxtApp) => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  document.documentElement.classList.add('has-reveal')

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return

      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    })
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -7%'
  })

  const preparePage = () => {
    const elements = document.querySelectorAll<HTMLElement>(
      'main h2, main h3, main .lead, main p, main blockquote, main cite, main li'
    )

    elements.forEach((element, index) => {
      if (element.dataset.revealReady) return

      element.dataset.revealReady = 'true'
      element.classList.add('reveal-text')
      element.style.setProperty('--reveal-delay', `${(index % 4) * 45}ms`)
      observer.observe(element)
    })
  }

  nuxtApp.hook('app:mounted', preparePage)
  nuxtApp.hook('page:finish', () => requestAnimationFrame(preparePage))
})
