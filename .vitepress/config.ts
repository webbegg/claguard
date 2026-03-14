import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ClaGuard',
  description: 'Claude is powerful. Your budget has limits.',
  lang: 'en-US',
  appearance: 'dark',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#00d4b4' }],
    ['meta', { property: 'og:type',        content: 'website' }],
    ['meta', { property: 'og:title',       content: 'ClaGuard' }],
    ['meta', { property: 'og:description', content: 'Claude is powerful. Your budget has limits.' }],
    ['meta', { property: 'og:url',         content: 'https://claguard.com' }],
    ['meta', { name: 'twitter:card',       content: 'summary_large_image' }],
    ['script', { async: '', defer: '', src: 'https://buttons.github.io/buttons.js' }],
  ],

  themeConfig: {
    siteTitle: false,
    logo: '/favicon.svg',

    nav: [
      { text: 'Docs',   link: '/guide/getting-started' },
      { text: 'GitHub', link: 'https://github.com/webbegg/claguard' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started',    link: '/guide/getting-started' },
            { text: 'How Limits Work',    link: '/guide/limits' },
            { text: 'Tray Icon Reference', link: '/guide/tray' },
            { text: 'FAQ',                link: '/guide/faq' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/webbegg/claguard' },
    ],

    search: {
      provider: 'local',
    },
  },
})
