---
id: custom-tags
title: Custom Tags / Delimeters
---

The preferred and most performant method of using custom delimeters (i.e. `<% myref %>` instead of `{{ myref}}`) is to set [default tags](default-tags).

If for some reason this isn't available, however, you can set them in-template.

## Basic Syntax

```sqrl
{{tags([tagStart],[tagEnd])/}}
```

## Example

```sqrl
{{tags(--,--)/}}

--somereference--
```