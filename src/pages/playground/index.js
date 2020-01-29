import React from 'react'
import Layout from '@theme/Layout'
import styles from './styles.module.css'
import * as Sqrl from 'squirrelly'

Sqrl.defineFilter('reverse', function (str) {
  var out = ''
  for (var i = str.length - 1; i >= 0; i--) {
    out += String(str).charAt(i)
  }
  return out || str
})

Sqrl.defineHelper('customhelper', function (args, content, blocks, options) {
  var returnStr = 'Custom Helper speaking! \n'
  for (var key in blocks) {
    if (typeof blocks[key] === 'function') {
      returnStr += 'Block found named ' + key + ', with value: ' + blocks[key]()
    }
  }
  return returnStr
})

Sqrl.definePartial('mypartial', 'Partial content: the value of arr is {{arr}}')

var initialTemplate = `Hi
{{log("Hope you like Squirrelly!")/}}
{{ htmlstuff }}
{{ foreach(options.obj) }}

Reversed value: {{@this|reverse}}, Key: {{@key}}
{{if(@key==="thirdchild")}}
{{each(options.obj[@key])}}

Salutations! Index: {{@index}}, old key: {{@../key}}
{{/each}}
{{/if}}
{{/foreach}}

{{ customhelper() }}
{{#cabbage}}
Cabbages taste good
{{#pineapple}}
As do pineapples
{{/customhelper}}

This is a partial: {{include("mypartial")/}}
{{tags(--,--)/}}

Custom delimeters!
--arr--
`

var initialData = `"htmlstuff": "<script>alert('hey')</script><p>alert('hey')</p><p>alert('hey')</p><p>alert('hey')</p>",
"arr": ["Hey", "<p>Malicious XSS</p>", "Hey", 3, 12],
"obj": {
  "firstchild": "HI",
  "secondchild": "HEY",
  "thirdchild": [3, 6, 3, 2, 5, 4]
}`

function TemplateEditor (props) {
  return (
    <div className={styles.templategroup}>
      <h4>Template</h4>
      <textarea
        autoComplete='off'
        onChange={props.onChange}
        defaultValue={initialTemplate}
      />
    </div>
  )
}

function FunctionDisplay (props) {
  return (
    <div className={styles.functiongroup}>
      <h4>Sqrl.Compile()</h4>
      <div className={styles.function}>{props.result}</div>
    </div>
  )
}

function DataEditor (props) {
  return (
    <div className={styles.datagroup}>
      <h4>Data</h4>
      <textarea
        autoComplete='off'
        onChange={props.onChange}
        defaultValue={initialData}
      />
    </div>
  )
}

function ResultDisplay (props) {
  return (
    <div className={styles.resultgroup}>
      <h4>Result</h4>
      <div className={styles.result}>{props.result}</div>
    </div>
  )
}

class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError () {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch (error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log('Squirrelly had an error: ', error, errorInfo)
  }

  render () {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}

class Playground extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      template: initialTemplate,
      data: JSON.parse('{' + initialData + '}'),
      functionString: Sqrl.Compile(initialTemplate).toString(),
      templateResult: Sqrl.Render(
        initialTemplate,
        JSON.parse('{' + initialData + '}')
      )
    }
    this.handleDataChange = this.handleDataChange.bind(this)
    this.handleTemplateChange = this.handleTemplateChange.bind(this)
  }

  handleDataChange (event) {
    if (
      event.target.value &&
      JSON.parse('{' + (event.target.value || '') + '}')
    ) {
      var data = JSON.parse('{' + (event.target.value || '') + '}')
      this.setState({
        data: data || {}
      })
    }
    this.updateSqrlResults()
  }

  handleTemplateChange (event) {
    this.setState({
      template: event.target.value || ''
    })
    this.updateSqrlResults()
  }

  updateSqrlResults () {
    var functionString
    var templateResult

    try {
      functionString = Sqrl.Compile(this.state.template).toString()
      this.setState({
        functionString: functionString
      })
    } catch (ex) {}

    try {
      templateResult = Sqrl.Render(this.state.template, this.state.data)
      this.setState({
        templateResult: templateResult
      })
    } catch (ex) {}
  }

  render () {
    return (
      <div className={styles.playground}>
        <span>
          {'  '}Based on the excellent
          <a href='http://olado.github.io/doT/index.html'> DoT.js</a> website
        </span>
        <div className={styles.samples}>
          {/* <ul className={styles['sampletabs']}>
              <li id="xinterpolation" className="">
                interpolation
              </li>
              <li id="xevaluation" className="">
                evaluation
              </li>
              <li id="xpartials" className="">
                partials
              </li>
              <li id="xconditionals" className="">
                conditionals
              </li>
              <li id="xarrays" className="active">
                arrays
              </li>
              <li id="xencode">encode</li>
            </ul> */}
          {/* <!--Keeping this just in case I implement a similar tabs feature--> */}
          {/* <div class="stripgroup">
              <input id="strip" type="checkbox" checked="checked" />
              <label for="strip">Strip whitespaces</label>
            </div> */}
          <div style={{ clear: 'both', height: '10px' }} />
          <TemplateEditor onChange={this.handleTemplateChange} />
          <FunctionDisplay result={this.state.functionString} />
          <div style={{ clear: 'both' }} />
          <DataEditor onChange={this.handleDataChange} />
          <ResultDisplay result={this.state.templateResult || ''} />
        </div>
      </div>
    )
  }
}

class ErrorHandlingPlayground extends React.Component {
  render () {
    return (
      <Layout
        title='SquirrellyJS Playground'
        description='Test out the Squirrelly template engine in your browser'
      >
        <ErrorBoundary>
          <Playground />
        </ErrorBoundary>
      </Layout>
    )
  }
}

export default ErrorHandlingPlayground
