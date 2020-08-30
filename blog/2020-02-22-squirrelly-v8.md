---
slug: squirrelly-version-8
title: Introducing Squirrelly Version 8!
author: Ben Gubler
author_title: Squirrelly Creator, Maintainer
author_url: https://github.com/nebrelbug
author_image_url: https://avatars2.githubusercontent.com/u/25597854?s=460&v=4
tags: [dev, v8]
---

Squirrelly version 8 is stable -- read more about new features and changes!

<!--truncate-->

_Note: I'll update this blog post as Squirrelly v8 changes_

## Why a new version of Squirrelly?

In my work on Squirrelly v7, I found several issues which I could not resolve without a major rewrite.

**A few of the issues**

- Inconsistent capitalization (ex. `Render` with an uppercase `R` but `renderFile` with a lowercase `R`)
- Data references had to be prefixed with `options.` unless they were the first item in a global reference (ex. `{{val1 + options.val2}}`)
- Synchronous file loading, rather than async
- Strings weren't parsed correctly (ex. `{{ val1 + "closing tag is }}, right"}}` would fail)
  - This was because templates were parsed with one huge RegExp. DoT and EJS still have this problem.

Additionally, I wanted to add new features that would require major code changes.

**A few new features**

- Written in Typescript
- Code coverage
- Better error reporting
- Allow filters to accept parameters
- Explicit helper references (see [#120](https://github.com/squirrellyjs/squirrelly/issues/120))
- Template inheritance
- Include partial files

## Version 8: What's changed

The majority of my time working on v8 was spent creating a new parser. The parser had to be reliable, lightweight, flexible, and incredibly fast. After [more than 30 different versions](https://gist.github.com/nebrelbug/34c3bba19b54c4ba7973b1337a884449) and many hours spent researching and benchmarking, I was finally able to create a parser that fulfilled the qualifications.

I then used a Typescript library boilerplate to set up a new, best-practices-following repository. Squirrelly uses Rollup to build, Terser to minify, and Jest for tests and coverage.

Finally, I've spent the last several months building out the library itself. It had to be small (Squirrelly will never exceed 10KB minified -- right now it weighs 7.5KB minified and 3.3KB minzipped), well-designed, and written to support both old and modern environments. As of right now, the API is mostly standardized (theoretically). Compilation and caching were also written with performance in mind: [performance benchmarks](https://ghcdn.rawgit.org/squirrellyjs/squirrelly/master/browser-tests/benchmark.html) show that Squirrelly beats essentially every other template engine in terms of performance.

## The Big List of New Things (in progress)

- Template inheritance
- Partials support
  - Users can now include files with `{{@includeFile("./file.sqrl") /}}`
- Delimeters can no longer be changed mid-template
- Async support
  - We're still working on supporting async helpers and filters in environments not supporting the `await` keyword
- Better error reporting
- Better caching
- Filters can accept parameters
- Explicit helper references (see [#120](https://github.com/squirrellyjs/squirrelly/issues/120))
- Typescript types
- Added benchmarks webpage to repository, so devs can benchmark while developing (https://ghcdn.rawgit.org/squirrellyjs/squirrelly/master/browser-tests/benchmark.html)
