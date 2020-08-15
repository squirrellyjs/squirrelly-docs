import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import CodeSnippet from '@site/src/theme/CodeSnippet'
import RunKit from '@site/src/theme/RunkitEmbed'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

const snippets = [
  {
    label: 'Example 1',
    config: `Hi {{it.user}}!

<ul>
{{@each(it.user.friends) => friend}}
  <li>{{friend.first | capitalize}} {{friend.last}}</li>
{{/each}}
</ul>

Here are your badges:
{{it.badges | join(", ") | capitalize}}
`,
  },
  {
    label: 'Layouts',
    config: `{{@extends('layout1', it)}}
This is the content of the page
{{#title}}
Custom Title
{{#description}}
{{it.name}}'s cool site
{{/extends}}
`,
  },
  {
    label: 'Example 3',
    config: `{{! /* Embedded JS templates mean that you can
  write any valid JS expression inside interpolate tags: */ }}

{{ 2 + 4 }}`,
  },
  {
    label: 'Partials',
    config: `{{@include("mypartial") /}}

{{@includeFile('./navbar', {pages: [
  'home',
  'about',
  'users'
]}) /}}`,
  },
]

function Snippet({ label, config }) {
  return <CodeSnippet className={styles.configSnippet} snippet={config} />
}

const features = [
  {
    title: <>Fantastic Performance</>,
    imageUrl: 'img/undraw/outer_space.svg',
    description: (
      <>
        Squirrelly has best-in-class performance, and beats other JS template
        engines in almost all benchmarks! Read more{' '}
        <a href='docs/about/performance'>here</a>
      </>
    ),
  },
  {
    title: <>Powerful Syntax</>,
    imageUrl: 'img/undraw/coding.svg',
    description: (
      <>
        Squirrelly's template syntax takes inspiration from Nunjucks,
        Handlebars, Django, and Swig.
      </>
    ),
  },
  {
    title: <>Powerful and Lightweight</>,
    imageUrl: 'img/undraw/collecting.svg',
    description: (
      <>
        Squirrelly weighs less than 4 KB gzipped, despite supporting helpers,
        filters, partials, template inheritance, and asynchronous templates.
      </>
    ),
  },
  {
    title: <>Configurable and pluggable</>,
    imageUrl: 'img/undraw/software_engineer.svg',
    description: (
      <>
        Squirrelly has many configuration options. You can control whitespace
        trimming, use custom delimiters, add plugins, or toggle caching --
        without any convoluted external APIs. Squirrelly also supports plugins,
        which can be chained together Gulp-style to modify template syntax,
        minify HTML, or do pretty much anything else!
      </>
    ),
  },
]

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={clsx('col col--6', styles.feature)}>
      {imgUrl && (
        <div className='text--center'>
          <img
            className={clsx('padding-vert--md', styles.featureImage)}
            src={imgUrl}
            alt={title}
          />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title={`${siteConfig.title}`}
      description='Lighweight, powerful, blazing fast JS template engine'
      keywords={[
        'template engine',
        'fastest template engine',
        'best js template engine',
        'handlebars',
        'squirrelly',
      ]}
    >
      <header className={clsx('hero', styles.heroBanner)}>
        <div className='container'>
          <div className='row'>
            <div className={clsx('col col--5 col--offset-1')}>
              <h1 className='hero__title'>{siteConfig.title}</h1>
              <p className='hero__subtitle'>
                Powerful, lightweight, pluggable JS template engine
              </p>
              <p style={{ fontStyle: 'italic' }}>
                Written in TypeScript. Supports helpers, partials, filters,
                template inheritance, and async templates.
              </p>
              <div className={styles.buttons + ' ' + styles.buttonDiv}>
                <Link
                  className={clsx(
                    'button button--outline button--secondary button--lg',
                    styles.getStarted
                  )}
                  to={useBaseUrl('docs/get-started/overview')}
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className={clsx('col col--5')}>
              <img
                alt='Squirrel'
                className={styles['heroImg']}
                src={useBaseUrl('img/logo/fit-acorn.svg')}
              />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className='container'>
          <div className='row'>
            <div className={clsx('col col--6')}>
              {snippets && snippets.length && (
                <section className={styles.configSnippets}>
                  <Tabs
                    defaultValue={snippets[0].label}
                    values={snippets.map((props, idx) => {
                      return { label: props.label, value: props.label }
                    })}
                  >
                    {snippets.map((props, idx) => (
                      <TabItem key={idx} value={props.label}>
                        <Snippet {...props} />
                      </TabItem>
                    ))}
                  </Tabs>
                </section>
              )}
              <h3>Interactive Playground</h3>
              <RunKit
                source={`var Sqrl = require("squirrelly")

Sqrl.render("Hi {{it.user}}", {user: "Ada Lovelace"})
`}
              />
            </div>

            <div className={clsx(`${styles.pitch} col col--6`)}>
              <h2>JavaScript Templating: Reimagined</h2>
              <p style={{ paddingTop: '0.5rem' }}>
                We drew inspiration from template engines like Nunjucks,
                Handlebars, EJS, and Pug to create a template engine with the
                best parts of each.
              </p>
              <p>
                Squirrelly is what we like to call a <em>semi-embedded</em>{' '}
                template engine. It has a rich syntax, but allows you to use
                valid JavaScript syntax inside of your templates. All Squirrelly
                templates compile into plain, understandable JavaScript.
              </p>
              <b>A Few Features</b>
              <ul>
                <li>Lightweight size: only 4KB gzipped</li>
                <li>
                  Very fast parsing and compilation. Check out{' '}
                  <a href='https://ghcdn.rawgit.org/squirrellyjs/squirrelly/master/browser-tests/benchmark.html'>
                    these benchmarks
                  </a>
                </li>
                <li>Template inheritance (kinda Nunjucks-style?)</li>
                <li>
                  Fantastic partial, layout, and file handling support, based
                  off EJS'
                </li>
                <li>Express.js support with high performance</li>
                <li>Async support</li>

                <li>TypeScript types and UMD build</li>
                <li>Custom delimiters</li>
                <li>Whitespace control, EJS-style</li>
                <li>
                  Custom tag-type prefixes.{' '}
                  <i>
                    Example: you could change helpers to begin with{' '}
                    <code>{'~'}</code> instead of <code>{'@'}</code>
                  </i>
                </li>
                <li>
                  Beautiful informative errors.{' '}
                  <i>
                    If you accidentally leave a tag, string, or multiline
                    comment unclosed, Squirrelly will tell you where and what
                    the problem is
                  </i>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {features && features.length && (
          <section className={styles.features}>
            <div className='container margin-vert--md'>
              <div className='row'>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}

export default Home
