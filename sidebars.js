/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// sidebars.js
module.exports = {
  // docs: {
  //   "Get Started": [
  //     'install',
  //     {
  //       type: 'category',
  //       label: 'Docs',
  //       items: ['install', 'sidebar'],
  //     },
  //   ],
  // },
  docs: {
    'Get Started': ['v8/install', 'v8/overview']
  },
  about: {
    About: ['v8/introduction', 'v8/performance', 'v8/FAQ'],
    'Behind the Scenes': ['v8/how-squirrelly-works']
  },
  learn: {
    Guides: ['v8/first-template'] //,
    // Resources: ['v8/how-squirrelly-works']
  },
  docs: {
    'Get Started': ['v7/overview', 'v7/install'],
    'Template Syntax': [
      'v7/syntax-overview',
      'v7/cheatsheet',
      'v7/global-refs',
      'v7/helper-refs',
      'v7/filters',
      'v7/helpers',
      'v7/partials',
      'v7/custom-tags',
      'v7/builtin-helpers'
    ],
    API: [
      'v7/auto-escaping',
      'v7/compile',
      'v7/default-tags',
      'v7/define-filter',
      'v7/define-helper',
      'v7/define-native-helper',
      'v7/define-partial',
      'v7/load',
      'v7/render',
      'v7/render-file',
      'v7/set-default-filters'
    ]
  },
  about: {
    About: [
      'v7/introduction',
      'v7/why-squirrelly',
      'v7/performance',
      'v7/FAQ',
      'v7/contributors'
    ],
    'Behind the Scenes': ['v7/how-squirrelly-works']
  },
  learn: {
    Guides: ['v7/first-template', 'v7/caching', 'v7/runtime'],
    Resources: ['v7/how-squirrelly-works']
  }
}
