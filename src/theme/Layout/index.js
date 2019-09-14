/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import Head from '@docusaurus/Head'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import withBaseUrl from '@docusaurus/withBaseUrl'
import Navbar from '@theme/Navbar'
import Footer from '@theme/Footer'
import 'react-web-tabs/dist/react-web-tabs.css';


import './styles.css'

function Layout(props) {
  const { siteConfig = {} } = useDocusaurusContext()
  const {
    favicon,
    tagline,
    title: defaultTitle,
    themeConfig: { image: defaultImage },
    url: siteUrl
  } = siteConfig
  const {
    children,
    title,
    noFooter,
    description,
    image,
    keywords,
    permalink
  } = props
  const metaTitle = title || `${defaultTitle} · ${tagline}`
  const metaImage = image || defaultImage
  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width" />
        {permalink === '/' && (
          <meta
            name="google-site-verification"
            content="OpVsG-FgMcjd1s4b7eo1r5os_cVgR1HT65uSZFnYP0o"
          />
        )}
        {metaTitle && <title>{metaTitle}</title>}
        {metaTitle && <meta property="og:title" content={metaTitle} />}
        {favicon && <link rel="shortcut icon" href={withBaseUrl(favicon)} />}
        {description && <meta name="description" content={description} />}
        {description && (
          <meta property="og:description" content={description} />
        )}
        {keywords && keywords.length && (
          <meta property="keywords" content={keywords} />
        )}
        {metaImage && (
          <meta
            property="og:image"
            content={siteUrl + withBaseUrl(metaImage)}
          />
        )}
        {metaImage && (
          <meta
            property="twitter:image"
            content={siteUrl + withBaseUrl(metaImage)}
          />
        )}
        {metaImage && (
          <meta name="twitter:image:alt" content={`Image for ${metaTitle}`} />
        )}
        {permalink && <meta property="og:url" content={siteUrl + permalink} />}
        <meta name="twitter:card" content="summary" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png?v=gAeEk9MGmd"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png?v=gAeEk9MGmd"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png?v=gAeEk9MGmd"
        />
        <link rel="manifest" href="/site.webmanifest?v=gAeEk9MGmd" />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg?v=gAeEk9MGmd"
          color="#a4683b"
        />
        <link rel="shortcut icon" href="/favicon.ico?v=gAeEk9MGmd" />
        <meta name="apple-mobile-web-app-title" content="Squirrelly" />
        <meta name="application-name" content="Squirrelly" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Navbar />
      {children}
      {!noFooter && <Footer />}
    </React.Fragment>
  )
}

export default Layout
