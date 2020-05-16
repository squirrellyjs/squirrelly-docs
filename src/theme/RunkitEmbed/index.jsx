import React from 'react'
// import { Helmet } from 'react-helmet'
import BrowserOnly from '@docusaurus/BrowserOnly'

// import '../../../static/scripts/react-runkit' // eslint-disable-line
import CodeSnippet from '@site/src/theme/CodeSnippet'

import Embed from 'react-runkit'

export default function Runkit(props) {
  return (
    <BrowserOnly
      fallback={<CodeSnippet lang='javascript' snippet={props.source} />}
    >
      {() => (
        <>
          <Embed source={props.source} />
        </>
      )}
    </BrowserOnly>
  )
}

// class EmbedWrapper extends React.Component {
//   constructor() {
//     super()
//     this.state = { scriptLoaded: true }
//   }

//   scriptCheck() {
//     setInterval(function () {
//       if (window.RunKit) {
//       }
//     }, 300)
//   }

//   componentDidMount() {
//     let timeLeftVar = this.secondsToTime(this.state.seconds)
//     this.setState({ time: timeLeftVar })
//   }

//   startTimer() {
//     if (this.timer == 0 && this.state.seconds > 0) {
//       this.timer = setInterval(this.countDown, 1000)
//     }
//   }

//   countDown() {
//     // Remove one second, set state so a re-render happens.
//     let seconds = this.state.seconds - 1
//     this.setState({
//       time: this.secondsToTime(seconds),
//       seconds: seconds,
//     })

//     // Check if we're at zero.
//     if (seconds == 0) {
//       clearInterval(this.timer)
//     }
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.startTimer}>Start</button>
//         m: {this.state.time.m} s: {this.state.time.s}
//       </div>
//     )
//   }
// }
