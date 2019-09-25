import React from 'react'
import Layout from '@theme/Layout'
import styles from './styles.module.css'

class HelloNext extends React.Component {
  render() {
    return (
      <iframe
        src="https://squirrelly.hellonext.co/features/all"
        style={{ width: '100%', height: '110vh' }}
        width="100%"
        height="100%"
        frameBorder="0"
      />
    )
  }
}

class Feedback extends React.Component {
  render() {
    return (
      <Layout
        title="SquirrellyJS | Feedback"
        description="Give feedback and feature requests to the Squirrelly template engine"
      >
        <HelloNext />
      </Layout>
    )
  }
}

export default Feedback
