import React, { Component } from 'react'

export default class CodeFund extends Component {
  constructor (props) {
    super(props)
    this.elmnt = React.createRef()
  }

  componentDidMount () {
    const script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.setAttribute(
      'src',
      'https://codefund.io/properties/190/funder.js?theme=light'
    )

    // Originally `https://codefund.io/properties/190/funder.js?template=vertical&theme=light`

    script.setAttribute('async', 'async')
    this.elmnt.current.appendChild(script)

    // setTimeout(() => this.updateContent(), 2000)
  }

  render () {
    // console.log('Ad being served...')
    return (
      <div className='codefund'>
        <div ref={this.elmnt} id='codefund' />
      </div>
    )
  }
}
