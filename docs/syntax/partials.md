---
id: partials
title: Partials
---

## Basic Syntax
Partials are implemented behind-the-scenes as [native helpers](define-native-helper), and the syntax is the same as a [self-closing helper](helpers).

```
{{@include("mypartial")/}}
OR
{{@include('mypartial')/}}
```

## Example

```
{{@include('mypartial')/}}
```