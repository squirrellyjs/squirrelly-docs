---
id: partials
title: Partials
---

## Basic Syntax
Partials are implemented behind-the-scenes as [native helpers](../api/native-helper-api), and the syntax is the same as a [self-closing helper](helpers#self-closing-helpers).

```
{{~include("mypartial")/}}
OR
{{~include('mypartial')/}}
```

## Example

```
{{~include('mypartial')/}}
```