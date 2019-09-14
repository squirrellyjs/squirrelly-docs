---
id: first-template
title: Your First Template
---

## [Install](install) Squirrelly

In this guide, we'll assume that Squirrelly is stored in a variable called `Sqrl`.

## Create a Template

This is just a regular string.

```js
var myTemplate = 'My favorite template engine is {{favorite}}.'
```

## Define Data

```js
var data = {
  favorite: 'Squirrelly'
}
```

## Render!

```js
var result = Sqrl.Render(myTemplate, data)
// My favorite template engine is Squirrelly.
```

## Try Different Data

```js
var result2 = Sqrl.Render(myTemplate, {
  favorite: 'Squirrelly, definitely'
})
// My favorite template engine is Squirrelly, definitely.
```

## Full Code

```js
var myTemplate = 'My favorite template engine is {{favorite}}.'

var result = Sqrl.Render(myTemplate, {
  favorite: 'Squirrelly, definitely'
})
```
