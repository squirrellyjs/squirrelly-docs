/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import Head from '@docusaurus/Head'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'

import ThemeProvider from '@theme/ThemeProvider'
import Navbar from '@theme/Navbar'
import Footer from '@theme/Footer'

import './styles.css'

function Layout (props) {
  const { siteConfig = {} } = useDocusaurusContext()
  const {
    favicon,
    title: siteTitle,
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
    permalink,
    version
  } = props
  const metaTitle = title ? `${title} | ${siteTitle}` : siteTitle
  const metaImage = image || defaultImage
  const metaImageUrl = siteUrl + useBaseUrl(metaImage)
  const faviconUrl = useBaseUrl(favicon)

  return (
    <ThemeProvider>
      <Head>
        {/* TODO: Do not assume that it is in english language */}
        <html lang='en' />

        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        {metaTitle && <title>{metaTitle}</title>}
        {metaTitle && <meta property='og:title' content={metaTitle} />}
        {favicon && <link rel='shortcut icon' href={faviconUrl} />}
        {description && <meta name='description' content={description} />}
        {description && (
          <meta property='og:description' content={description} />
        )}
        {version && <meta name='docsearch:version' content={version} />}
        {keywords && keywords.length && (
          <meta name='keywords' content={keywords.join(',')} />
        )}
        {metaImage && <meta property='og:image' content={metaImageUrl} />}
        {metaImage && <meta property='twitter:image' content={metaImageUrl} />}
        {metaImage && (
          <meta name='twitter:image:alt' content={`Image for ${metaTitle}`} />
        )}
        {permalink && <meta property='og:url' content={siteUrl + permalink} />}
        <meta name='twitter:card' content='summary' />
        {/* Starting to change */}

        {permalink === '/' && (
          <meta
            name='google-site-verification'
            content='OpVsG-FgMcjd1s4b7eo1r5os_cVgR1HT65uSZFnYP0o'
          />
        )}

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/icons/apple-touch-icon.png?v=47B8Wg0G2j'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/icons/favicon-32x32.png?v=47B8Wg0G2j'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/icons/favicon-16x16.png?v=47B8Wg0G2j'
        />
        <link rel='manifest' href='/icons/site.webmanifest?v=47B8Wg0G2j' />
        <link
          rel='mask-icon'
          href='/icons/safari-pinned-tab.svg?v=47B8Wg0G2j'
          color='#a4683b'
        />
        <meta name='msapplication-TileColor' content='#2b5797' />
        <meta
          name='msapplication-config'
          content='/icons/browserconfig.xml?v=47B8Wg0G2j'
        />
        <meta name='theme-color' content='#ffffff' />
        {/* End Changes */}
      </Head>
      <Navbar />
      <div className='main-wrapper'>{children}</div>
      {!noFooter && <Footer />}
    </ThemeProvider>
  )
}

export default Layout
