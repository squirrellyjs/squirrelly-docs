/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'

import Layout from '@theme/Layout'

import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'

import versions from '../../versions.json'

function Version () {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  const latestVersion = versions[0]
  const pastVersions = versions.filter(version => version !== latestVersion)
  const repoUrl = `https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}`
  return (
    <Layout
      permalink='/versions'
      description='Squirrelly Versions page listing all documented site versions'
    >
      <div className='container margin-vert--xl'>
        <h1>Squirrelly versions</h1>
        <div className='margin-bottom--lg'>
          <h3 id='latest'>Squirrelly v8</h3>
          <p>
            Here you can find the documentation for the latest release of
            Squirrelly v8.
          </p>
          <table>
            <tbody>
              <tr>
                <th>{latestVersion}</th>
                <td>
                  <Link to={useBaseUrl('/docs/introduction')}>
                    Documentation
                  </Link>
                </td>
                <td>
                  <a href={`${repoUrl}/releases/tag/v${latestVersion}`}>
                    Release Notes
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='margin-bottom--lg'>
          <h3 id='next'>Squirrelly v7</h3>
          <p>Here you can find the documentation for Squirrelly 7.x.x.</p>
          <table>
            <tbody>
              <tr>
                <th>7.x.x</th>
                <td>
                  <Link to={useBaseUrl('/docs/7.x.x/introduction')}>
                    Documentation
                  </Link>
                </td>
                <td>
                  <a href={repoUrl}>Source Code</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='margin-bottom--lg'>
          <h3 id='next'>In-progress documentation</h3>
          <table>
            <tbody>
              <tr>
                <th>master</th>
                <td>
                  <Link to={useBaseUrl('/docs/next/introduction')}>
                    Documentation
                  </Link>
                </td>
                <td>
                  <a href={repoUrl}>Source Code</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {pastVersions.length > 0 && (
          <div className='margin-bottom--lg'>
            <h3 id='archive'>Past Versions</h3>
            <p>
              Here you can find documentation for previous versions of
              Squirrelly.
            </p>
            <table>
              <tbody>
                {pastVersions.map(version => (
                  <tr key={version}>
                    <th>{version}</th>
                    <td>
                      <Link to={useBaseUrl(`/docs/${version}/introduction`)}>
                        Documentation
                      </Link>
                    </td>
                    <td>
                      <a href={`${repoUrl}/releases/tag/v${version}`}>
                        Release Notes
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Version
