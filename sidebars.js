/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  docs: {
    Squirrelly: [
      {
        type: 'category',
        label: 'About',
        items: [
          'about/introduction',
          'about/why-squirrelly',
          'about/performance',
          'about/FAQ',
          'about/how-squirrelly-works'
        ]
      },
      {
        type: 'category',
        label: 'Learn',
        items: ['learn/async'] // TODO: add tutorials on plugins, etc.
      },
      {
        type: 'category',
        label: 'Resources',
        items: ['resources/integrations']
      },
      'get-started/overview',
      'get-started/install',
      'get-started/security',
      'get-started/first-template'
    ],
    'Template Syntax': [
      'syntax/overview',
      'syntax/cheatsheet',
      'syntax/interpolate',
      'syntax/filters',
      'syntax/helpers',
      'syntax/partials',
      'syntax/builtin-helpers',
      'syntax/whitespace-control',
      'syntax/auto-escaping'
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
      'api/templates-partials-layouts'
    ]

    // add custom tags, how-to caching, etc.
  }
}
