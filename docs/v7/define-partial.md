---
id: define-partial
title: definePartial
---

## Example

```js
Sqrl.definePartial(
  'mypartial',
  `
This is a partial.
It can be called with the data of the template it's in. {{name}}
`
)
```

Then to use the partial in your template:

```sqrl
{{include("mypartial")/}}
OR
{{include(mypartial)/}}
OR
{{include('mypartial')/}}
```
