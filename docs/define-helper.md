---
id: define-helper
title: defineHelper
---

## Syntax

```js
Sqrl.defineHelper('helperName', function(args, content, blocks) {
  //Do whatever you want here with the arguments, blocks, and content, then return a string
  return ''
})
```

## Example

```js
Sqrl.defineHelper('hello', function(args, content, blocks) {
  return 'Hello, ' + blocks.name()
})
```

Your template:

```sqrl
{{hello()}}
This is a user.
{{#name}}
Ada Lovelace
{{/hello}}
```

### Parameters

`args`: contains the arguments passed to the function.

`content`: is a function that can be called \(optionally, by passing in helper references\) and that returns the default content.

`blocks`: an object that contains each of the helper blocks, which are functions \(like `content` and are sorted by key.
