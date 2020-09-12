---
id: runtime
title: Using the Runtime Version
---

## Why?

The majority of Squirrelly's code is meant to deal with compiling a template. If you [precompile your templates](precompile), you only need the code that deals with defining helpers, filters, partials, etc.

The runtime version is only really relevant in the browser, where load times are very important.

## How?

Instead of including the full Squirrelly JS file, include:

```html
<script src="https://unpkg.com/squirrelly@7/dist/squirrelly.runtime.min.js"></script>
```