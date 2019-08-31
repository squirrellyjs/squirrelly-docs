/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import withBaseUrl from '@docusaurus/withBaseUrl'
import styles from './styles.module.css'

const features = [
  {
    title: <>Easy to Use</>,
    imageUrl: 'img/mountain.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    )
  },
  {
    title: <>Focus on What Matters</>,
    imageUrl: 'img/tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    )
  },
  {
    title: <>Powered by React</>,
    imageUrl: 'img/react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    )
  }
]

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      permalink={'/'}
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div className={styles['index-hero']}>
        <div className={styles['index-hero-inner']}>
          <img
            alt="Squirrel"
            className={styles['index-hero-logo']}
            src={withBaseUrl('img/logo/fit.svg')}
            style={{ width: '40%' }}
          />
          <h1 className={styles['index-hero-project-tagline']}>
            Squirrelly is a
            <br />{' '}
            <span className={styles['index-hero-project-keywords']}>
              Powerful
            </span>{' '}
            <br />
            <span className={styles['index-hero-project-keywords']}>
              Lightweight
            </span>{' '}
            <br />
            <span className={styles['index-hero-project-keywords']}>
              Blazing-Fast
            </span>{' '}
            <br />
            JS template engine
          </h1>
          <div className={styles['index-ctas']}>
            <Link
              className={styles['index-ctas-get-started-button']}
              to={withBaseUrl('docs/install')}
            >
              Get Started
            </Link>
            <span className={styles['index-ctas-github-button']}>
              <iframe
                src="https://ghbtns.com/github-btn.html?user=squirrellyjs&amp;repo=squirrelly&amp;type=star&amp;count=true&amp;size=large"
                frameBorder={0}
                scrolling={0}
                width={160}
                height={30}
                title="GitHub Stars"
              />
            </span>
          </div>
        </div>
      </div>
      <div className={styles['announcement']}>
        <div className={styles['announcement-inner']}>
          We're working on{' '}
          <a href="https://github.com/facebook/Docusaurus/issues/789">
            Squirrelly v8
          </a>
          {' '}- contribute by suggesting features or giving{' '}
          <Link to={withBaseUrl('/feedback')}>feedback here</Link>!
        </div>
      </div>

      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({ imageUrl, title, description }, idx) => (
                  <div
                    key={idx}
                    className={classnames('col col--4', styles.feature)}
                  >
                    {imageUrl && (
                      <div className="text--center">
                        <img
                          className={styles.featureImage}
                          src={withBaseUrl(imageUrl)}
                          alt={title}
                        />
                      </div>
                    )}
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
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
