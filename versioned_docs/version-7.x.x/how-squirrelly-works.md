---
id: how-squirrelly-works
title: How Squirrelly Works
---

Unlike many pieces of software, we like our users to understand what their programs are doing behind the scenes.

## TL;DR:
Squirrelly uses Regular Expressions to turn a template into a function which can be called with a specific set of options. Since all of the parsing is done beforehand, the function (called a "Precompiled" function) just does string interpolation and is incredibly fast.

## Long Version:

1. Squirrelly uses a big RegExp to loop through each valid tag (ex. `{{...}}`) in the template. It adds each tag, processed, to `functionString` and also adds the plain text in-between each tag.
2. Squirrelly turns `functionString` into a valid JS function using `Function`, and returns the function. (The use of `Function` is why you should never compile user-defined templates).
3. This explanation is really lacking. Just read the source code :)