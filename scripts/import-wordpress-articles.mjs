import { readFileSync, writeFileSync } from 'node:fs'

const sourcePath = process.argv[2]

if (!sourcePath) {
  throw new Error('Usage: node scripts/import-wordpress-articles.mjs /path/to/parsed-posts.json')
}

const source = JSON.parse(readFileSync(sourcePath, 'utf8'))

const articleDetails = {
  108: {
    image: '/images/articles/art-infini.jpg',
    imageAlt: 'L’Infini, œuvre de Louis Cattiaux',
    excerpt: 'Une rencontre avec Louis Cattiaux, son œuvre picturale et la dimension spirituelle de l’art.',
  },
  6872: {
    image: '/images/articles/mutus/01.jpg',
    imageAlt: 'Planche de couverture du Mutus Liber',
    excerpt: 'Les quinze planches en couleur du Mutus Liber, célèbre livre muet de la philosophie hermétique.',
    gallery: Array.from({ length: 15 }, (_, index) => `/images/articles/mutus/${String(index + 1).padStart(2, '0')}.jpg`),
  },
  6746: {
    image: '/images/articles/van-lysebeth.jpg',
    imageAlt: 'Pratique collective du yoga',
    excerpt: 'Un atelier-conférence consacré à l’homme, au chercheur et à l’enseignement d’André Van Lysebeth.',
  },
  106: {
    image: '/images/articles/covid.jpg',
    imageAlt: 'Femme en méditation face à la mer',
    excerpt: 'Une lecture philosophique et métaphysique de la période covid et des enseignements qu’elle révèle.',
  },
  107: {
    image: '/images/articles/accompagnement.jpg',
    imageAlt: 'Femme dans une posture de yoga face à la mer',
    excerpt: 'Un mémoire sur les apports du yoga dans l’accompagnement social de femmes victimes de violences conjugales.',
    download: '/files/memoire-2022-prof-de-yoga.pdf',
  },
}

const imageMap = new Map([
  ['011-La-pierre-philosophale-60x925-LQ-1.jpg', '/images/articles/art-pierre-philosophale.jpg'],
  ['054-La-Venus-celeste-_Patrick-Noblet.jpg', '/images/articles/art-venus-celeste.jpg'],
  ['009-Maria-paritura-ou-la-Vierge-a-linfini-100x73-LQ.jpg', '/images/articles/art-maria-paritura.jpg'],
  ['023-Le-magicien-et-les-golems-415x33-RA.jpg', '/images/articles/art-magicien-golems.jpg'],
  ['057-La-belle-au-bois-dormant-ou-lalchimie-reposant-735x100-RdO.jpg', '/images/articles/art-belle-au-bois.jpg'],
])

const safeLink = (href = '') => {
  if (href.includes('Memoire-2022-prof-de-yoga.pdf')) return '/files/memoire-2022-prof-de-yoga.pdf'
  if (/^https?:\/\//i.test(href)) return href.replaceAll('&amp;', '&')
  return href.startsWith('/') || href.startsWith('#') ? href : ''
}

const localImage = (src = '') => src.startsWith('/images/articles/')
  ? src
  : imageMap.get(src.split('/').pop() || '') || ''

function sanitizeWordPressHtml(input) {
  let html = input
    .replace(/<!--([\s\S]*?)-->/g, '')
    .replace(/<(script|style|iframe|object|embed|form|button|input)[^>]*>[\s\S]*?<\/\1>/gi, '')
    .replace(/\[caption[^\]]*\]([\s\S]*?)\[\/caption\]/gi, (_, inner) => {
      const src = inner.match(/src=["']([^"']+)["']/i)?.[1] || ''
      const alt = inner.match(/alt=["']([^"']*)["']/i)?.[1] || ''
      const caption = inner.replace(/<img[^>]*>/gi, '').replace(/<[^>]+>/g, '').trim()
      const image = localImage(src)
      return image ? `<figure><img src="${image}" alt="${alt.replaceAll('"', '&quot;')}" loading="lazy"><figcaption>${caption}</figcaption></figure>` : ''
    })
    .replace(/\[(?:\/?vc_[^\]]+|\/?caption[^\]]*)\]/gi, '')
    .replace(/\[\/?[^\]]+\]/g, '')

  const allowed = new Set(['p', 'h2', 'h3', 'h4', 'h5', 'strong', 'em', 'ul', 'ol', 'li', 'blockquote', 'a', 'figure', 'img', 'figcaption', 'br'])

  html = html.replace(/<\/?([a-z0-9]+)([^>]*)>/gi, (tag, rawName, attrs) => {
    let name = rawName.toLowerCase()
    const closing = tag.startsWith('</')
    if (!allowed.has(name)) return ''
    if (name === 'h5') name = 'h3'
    if (closing) return `</${name}>`
    if (name === 'a') {
      const href = safeLink(attrs.match(/href=["']([^"']+)["']/i)?.[1] || '')
      return href ? `<a href="${href}"${href.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : ''}>` : ''
    }
    if (name === 'img') {
      const src = localImage(attrs.match(/src=["']([^"']+)["']/i)?.[1] || '')
      const alt = attrs.match(/alt=["']([^"']*)["']/i)?.[1] || ''
      return src ? `<img src="${src}" alt="${alt.replaceAll('"', '&quot;')}" loading="lazy">` : ''
    }
    return name === 'br' ? '<br>' : `<${name}>`
  })

  return html
    .replace(/<a>([\s\S]*?)<\/a>/gi, '$1')
    .replace(/<p>\s*(?:&nbsp;|<br>)*\s*<\/p>/gi, '')
    .replace(/(?:&nbsp;\s*)+/g, ' ')
    .trim()
}

const articles = source.posts
  .filter((post) => articleDetails[post.id])
  .map((post) => ({
    id: post.id,
    slug: post.slug,
    title: post.title,
    date: post.date.slice(0, 10),
    ...articleDetails[post.id],
    content: post.id === 6872
      ? '<p>Vous trouverez dans cette rubrique une galerie d’images provenant du <em>Mutus Liber</em>, ou Livre Muet en couleur. Célèbre ouvrage de la philosophie hermétique qui enseigne en images.</p>'
      : sanitizeWordPressHtml(post.content),
  }))

writeFileSync(new URL('../app/data/articles.json', import.meta.url), `${JSON.stringify(articles, null, 2)}\n`)

console.log(`Imported ${articles.length} articles.`)
