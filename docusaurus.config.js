module.exports = {
  title: 'SquirrellyJS',
  tagline: 'Lightweight, Blazing-Fast, and Powerful Template Engine',
  url: 'https://squirrelly.js.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'icons/favicon.ico',
  organizationName: 'squirrellyjs', // Usually your GitHub org/user name.
  projectName: 'squirrelly-docs', // Usually your repo name.
  scripts: [
    // String format.
    // 'https://docusaurus.io/script.js',
    // Object format.
    {
      src: 'https://embed.runkit.com/',
      // async: true,
      // defer: true, // this seems to create problems when deployed
    },
  ],
  themeConfig: {
    announcementBar: {
      id: 'v8-stable',
      content:
        '<a target="_blank" rel="noopener noreferrer" href="https://github.com/squirrellyjs/squirrelly">Squirrelly version 8</a> has been released!',
      backgroundColor: 'var(--ifm-color-primary)',
      textColor: 'var(--docsearch-text-color)',
    },
    prism: {
      additionalLanguages: ['ejs'],
      theme: require('prism-react-renderer/themes/vsDark'),
    },
    googleAnalytics: {
      trackingID: 'UA-122013092-2',
    },
    algolia: {
      apiKey: '9f59e33223929116fc07fce007dd6d2f',
      appId: 'BH4D9OD16A',
      indexName: 'squirrelly',
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
    navbar: {
      title: 'Squirrelly',
      logo: {
        alt: 'Squirrelly Logo',
        src: 'img/logo/fit-noacorn.svg',
      },
      items: [
        {
          label: 'Docs (v8)',
          to: 'docs',
          position: 'left',
          activeBasePath: 'docs',
        },
        {
          to: 'docs/about/introduction',
          label: 'About',
          position: 'left',
          activeBasePath: 'docs/about',
        },
        {
          to: 'docs/learn/async',
          label: 'Learn',
          position: 'left',
          activeBasePath: 'docs/learn', // TODO: use activeBaseTest once merged
        },
        { to: 'playground', label: 'REPL', position: 'left' },
        { to: 'blog', label: 'Blog', position: 'right' },
        {
          href: 'https://v7--squirrellyjs.netlify.app',
          label: 'Docs (v7)',
          position: 'right',
        },
        {
          href: 'https://gitter.im/squirrellyjs/Lobby',
          label: 'Community',
          position: 'right',
        },
        {
          href: 'https://github.com/squirrellyjs/squirrelly',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Squirrelly Logo',
        src: 'img/logo/fit-acorn.svg',
      },
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Gitter',
              href: 'https://gitter.im/squirrellyjs/Lobby',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Facebook',
              to: 'https://www.facebook.com/squirrellyjs/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SquirrellyJS. Built with Docusaurus. Theme inspired by <a href="https://www.benthos.dev">benthos.dev</a>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/squirrellyjs/squirrelly-docs/edit/master/website/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/squirrellyjs/squirrelly-docs/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
