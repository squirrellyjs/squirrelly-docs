---
id: caching
title: Caching
---

Caching allows you to improve performance by avoiding re-compiling the same template. It also means that you can [use the runtime version](runtime) of Squirrelly, which is more lightweight than the full version.

## With Express.js

Squirrelly automatically caches templates rendered with Express. To disable caching, set `$cache` in the data you call the template with to `false`.

## Naming Templates

Squirrelly allows you to give your templates a name to enable automatic caching.

### Example

```js
var templateString = "This is a {{template}}"
var result1 = Sqrl.Render({template: 'Squirrelly Template', $name: 'mytemplate'}, templateString)
var result2 = Sqrl.Render({template: 'Another Thing', $name: 'mytemplate'}, templateString)
// This time, Squirrelly uses the compiled template from the first render and just calls it with new data
```

## Manually

`Sqrl.Compile` returns a function that can be called with `data, Sqrl`. You can save a compiled function, and call that function with whatever data you want.

### Example

```js
var templateString = "This is a {{template}}"
var compiledTemplate = Sqrl.Compile(templateString)
var result1 = compiledTemplate({template: 'Squirrelly Template'}, Sqrl)
var result2 = compiledTemplate({template: 'Something Else'}, Sqrl)
```