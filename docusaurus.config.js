/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'SquirrellyJS',
  tagline: 'Lightweight, Blazing-Fast, and Powerful Template Engine',
  url: 'https://squirrelly.js.org',
  baseUrl: '/',
  favicon: '/favicon.ico',
  organizationName: 'squirrellyjs', // Usually your GitHub org/user name.
  projectName: 'squirrelly-docs', // Usually your repo name.
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-122013092-2'
    },
    navbar: {
      title: 'Squirrelly',
      logo: {
        alt: 'Squirrel Logo',
        src: 'img/logo/fit-noacorn.svg'
      },
      links: [
        { to: 'docs/v7/install', label: 'Docs', position: 'left' },
        { to: 'docs/v7/introduction', label: 'About', position: 'left' },
        { to: 'docs/v7/first-template', label: 'Learn', position: 'left' },
        { to: 'blog', label: 'Blog', position: 'left' },
        { to: 'playground', label: 'Playground', position: 'left' },
        {
          href: 'https://gitter.im/squirrellyjs/Lobby',
          label: 'Community',
          position: 'right'
        },
        {
          to: 'feedback',
          label: 'Feedback',
          position: 'right'
        },
        {
          href: 'https://github.com/squirrellyjs/squirrelly',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: 'docs/install'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Gitter',
              href: 'https://gitter.im/squirrellyjs/Lobby'
            }
          ]
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog'
            },
            {
              label: 'Facebook',
              to: 'https://www.facebook.com/squirrellyjs/'
            }
          ]
        }
      ],
      logo: {
        alt: 'Squirrelly Logo',
        src: 'img/logo/fit.svg'
      },
      copyright: `Copyright © ${new Date().getFullYear()} SquirrellyJS. Built with Docusaurus.`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
