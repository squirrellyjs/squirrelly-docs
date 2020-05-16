// const versions = require('./versions.json')

module.exports = {
  title: 'SquirrellyJS',
  tagline: 'Lightweight, Blazing-Fast, and Powerful Template Engine',
  url: 'https://squirrelly.js.org',
  baseUrl: '/',
  favicon: 'icons/favicon.ico',
  organizationName: 'squirrellyjs', // Usually your GitHub org/user name.
  projectName: 'squirrelly-docs', // Usually your repo name.
  scripts: [
    // String format.
    // 'https://docusaurus.io/script.js',
    // Object format.
    {
      src: 'https://embed.runkit.com/',
      async: false,
    },
  ],
  themeConfig: {
    announcementBar: {
      id: 'v8-beta',
      content:
        '<a target="_blank" rel="noopener noreferrer" href="https://github.com/squirrellyjs/squirrelly">Squirrelly version 8 beta</a> has been released!',
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
      links: [
        // {
        //   to: 'versions',
        //   label: versions[0],
        //   position: 'left',
        //   style: {
        //     whiteSpace: 'nowrap',
        //     padding: '0.25rem 0.5rem 0.2rem 0.25rem',
        //     fontSize: 'calc(0.9 * var(--ifm-font-size-base))',
        //     textDecoration: 'underline'
        //   }
        // },
        {
          label: 'Docs',
          to: 'docs/introduction', // "fake" link
          position: 'left',
          activeBasePath: 'docs',
          items: [
            {
              label: 'Version 8 (NEW)',
              to: 'docs/get-started/overview',
            },

            {
              label: 'Version 7',
              to: 'docs/v7/install',
              activeBasePath: 'docs/v7',
            },
          ],
        },

        { to: 'blog', label: 'Blog', position: 'left' },
        { to: 'playground', label: 'Playground', position: 'left' },

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
              to: 'docs/install',
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
      copyright: `Copyright © ${new Date().getFullYear()} SquirrellyJS. Built with Docusaurus 2.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/squirrellyjs/squirrelly-docs/edit/master/website/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
