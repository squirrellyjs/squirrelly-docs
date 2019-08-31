---
id: install
title: Install
sidebar_label: Install
---

## Node

```sh
npm install squirrelly
```

### Importing / Requiring

Sqrl is packaged as a UMD module, so you can require with CommonJS, import using ES Modules, or use AMD.

```js
import * as Sqrl from 'squirrelly'
// or
var Sqrl = require('squirrelly')
```
## Browser

```html
<script src="https://unpkg.com/squirrelly@latest/dist/squirrelly.min.js"></script>
```

This makes Squirrelly available through the `Sqrl` variable.