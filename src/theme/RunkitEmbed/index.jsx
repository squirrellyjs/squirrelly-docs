import React from 'react'
import BrowserOnly from '@docusaurus/BrowserOnly'

// import '../../../static/scripts/react-runkit' // eslint-disable-line
import CodeSnippet from '@site/src/theme/CodeSnippet'

import Embed from 'react-runkit'

export default function Runkit(props) {
  return (
    <BrowserOnly
      fallback={<CodeSnippet lang='javascript' snippet={props.source} />}
    >
      {() => <Embed source={props.source} />}
    </BrowserOnly>
  )
}
