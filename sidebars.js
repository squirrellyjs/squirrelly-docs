/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  docs: {
    'Get Started': [
      'get-started/overview',
      'get-started/install',
      'get-started/security',
      'get-started/first-template',
    ],
    'Template Syntax': [
      'syntax/overview',
      'syntax/cheatsheet',
      'syntax/async',
      'syntax/interpolate',
      'syntax/filters',
      'syntax/helpers',
      'syntax/partials',
      'syntax/builtin-helpers',
      'syntax/whitespace-control',
      'syntax/auto-escaping',
    ],
    API: [
      'api/overview',
      'api/rendering',
      'api/compilation',
      'api/configuration',
      'api/file-handling',
      'api/filter-api',
      'api/helper-api',
      'api/native-helper-api',
      'api/parsing',
      'api/templates-partials-layouts',
    ],

    // add custom tags, how-to caching, etc.
  },
  about: [
    'about/introduction',
    'about/why-squirrelly',
    'about/performance',
    'about/FAQ',
    'about/how-squirrelly-works',
  ],

  // add custom tags, how-to caching, etc.
  learn: [
    {
      type: 'category',
      label: 'Learn',
      items: ['learn/async'], // TODO: add tutorials on plugins, etc.
    },
    {
      type: 'category',
      label: 'Resources',
      items: ['resources/integrations'],
    },
  ],

  // add custom tags, how-to caching, etc.

  v7: [
    {
      type: 'category',
      label: 'Get Started',
      items: [
        {
          type: 'doc',
          id: 'v7/overview',
        },
        {
          type: 'doc',
          id: 'v7/install',
        },
        {
          type: 'doc',
          id: 'v7/security',
        },
      ],
    },
    {
      type: 'category',
      label: 'Template Syntax',
      items: [
        {
          type: 'doc',
          id: 'v7/syntax-overview',
        },
        {
          type: 'doc',
          id: 'v7/cheatsheet',
        },
        {
          type: 'doc',
          id: 'v7/global-refs',
        },
        {
          type: 'doc',
          id: 'v7/helper-refs',
        },
        {
          type: 'doc',
          id: 'v7/filters',
        },
        {
          type: 'doc',
          id: 'v7/helpers',
        },
        {
          type: 'doc',
          id: 'v7/partials',
        },
        {
          type: 'doc',
          id: 'v7/custom-tags',
        },
        {
          type: 'doc',
          id: 'v7/builtin-helpers',
        },
      ],
    },
    {
      type: 'category',
      label: 'API',
      items: [
        {
          type: 'doc',
          id: 'v7/auto-escaping',
        },
        {
          type: 'doc',
          id: 'v7/compile',
        },
        {
          type: 'doc',
          id: 'v7/default-tags',
        },
        {
          type: 'doc',
          id: 'v7/define-filter',
        },
        {
          type: 'doc',
          id: 'v7/define-helper',
        },
        {
          type: 'doc',
          id: 'v7/define-native-helper',
        },
        {
          type: 'doc',
          id: 'v7/define-partial',
        },
        {
          type: 'doc',
          id: 'v7/load',
        },
        {
          type: 'doc',
          id: 'v7/render',
        },
        {
          type: 'doc',
          id: 'v7/render-file',
        },
        {
          type: 'doc',
          id: 'v7/set-default-filters',
        },
      ],
    },
    {
      type: 'category',
      label: 'About',
      items: [
        {
          type: 'doc',
          id: 'v7/introduction',
        },
        {
          type: 'doc',
          id: 'v7/why-squirrelly',
        },
        {
          type: 'doc',
          id: 'v7/performance',
        },
        {
          type: 'doc',
          id: 'v7/FAQ',
        },
        {
          type: 'doc',
          id: 'v7/contributors',
        },
      ],
    },
    {
      type: 'category',
      label: 'Behind the Scenes',
      items: [
        {
          type: 'doc',
          id: 'v7/how-squirrelly-works',
        },
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        {
          type: 'doc',
          id: 'v7/first-template',
        },
        {
          type: 'doc',
          id: 'v7/caching',
        },
        {
          type: 'doc',
          id: 'v7/runtime',
        },
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        {
          type: 'doc',
          id: 'v7/how-squirrelly-works',
        },
      ],
    },
  ],
}
