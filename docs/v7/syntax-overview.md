---
id: syntax-overview
title: Syntax Overview
---

## Language Items

There are 5 types of language items in Squirrelly:

* [Global References](global-refs) are references to the data passed into the template. <br/> *Example*: `{{someval}}`
* [Helper References](helper-refs) are references that helpers create for your use. <br/> *Example*: `{{@index}}`
* [Helpers](helpers) are for logic in the template. Loops and conditionals are both implemented as native helpers, a special kind of helper that compiles into native JS code before rendering. <br/> *Example*: `{{foreach(options.obj)}} Display something {{/foreach}}`
* [Filters](filters) are for processing references. Escaping and trimming are done with filters, and you can define your own that do anything from capitalizing letters to emojifying strings. <br/> *Example*: `{{someref | capitalize}}`

## Inspiration

Squirrelly takes inspiration from Mustache, Handlebars, Nunjucks, Swig, and many other great template engines.

