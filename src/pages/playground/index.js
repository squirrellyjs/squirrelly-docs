import React from 'react'
import Layout from '@theme/Layout'
import styles from './styles.module.css'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
import CodeBlock from '@theme/CodeBlock'

import * as Sqrl7 from 'squirrelly-7'
import * as Sqrl8 from 'squirrelly'

Sqrl7.defineFilter('reverse', function (str) {
  var out = ''
  for (var i = str.length - 1; i >= 0; i--) {
    out += String(str).charAt(i)
  }
  return out || str
})

Sqrl8.filters.define('reverse', function (str) {
  var out = ''
  for (var i = str.length - 1; i >= 0; i--) {
    out += String(str).charAt(i)
  }
  return out || str
})

Sqrl7.defineHelper('customhelper', function (args, content, blocks, options) {
  var returnStr = 'Custom Helper speaking! \n'
  for (var key in blocks) {
    if (typeof blocks[key] === 'function') {
      returnStr += 'Block found named ' + key + ', with value: ' + blocks[key]()
    }
  }
  return returnStr
})

Sqrl8.helpers.define('customhelper', function (content, blocks, options) {
  var returnStr = 'Custom Helper speaking! \n'
  for (var i = 0; i < blocks.length; i++) {
    var currentBlock = blocks[i]
    returnStr +=
      'Block found named ' +
      currentBlock.name +
      ', with value: ' +
      currentBlock.exec()
  }
  return returnStr
})

Sqrl7.definePartial('mypartial', 'Partial content: the value of arr is {{arr}}')

Sqrl8.templates.define(
  'mypartial',
  Sqrl8.compile('Partial content: the value of `num` is {{it.num}}')
)

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

var initialTemplate8 = `Hi
{{!console.log("Hope you like Squirrelly!")}}
{{it.htmlstuff}}

{{@foreach(it.obj) => key, val}}
Reversed value: {{val|reverse}}, Key: {{key}}

{{@if(key==="thirdchild")}}
{{@each(it.obj[key]) => val, index}}
    Salutations! Index: {{index}}, val: {{val}}

{{/each}}
{{/if}}
{{/foreach}}

{{@customhelper()}}
{{#cabbage}}
Cabbages taste good
{{!console.log("Hi from inside a template")}}
{{#pineapple}}
As do pineapples
{{/customhelper}}

This is a partial: {{@include("mypartial", {num: 3})/}}
`

var initialData = `"htmlstuff": "<script>alert('hey')</script><p>alert('hey')</p><p>alert('hey')</p><p>alert('hey')</p>",
"arr": ["Hey", "<p>Malicious XSS</p>", "Hey", 3, 12],
"obj": {
  "firstchild": "HI",
  "secondchild": "HEY",
  "thirdchild": [3, 6, 3, 2, 5, 4]
}`

function TemplateEditor(props) {
  return (
    <div className={styles.templategroup}>
      <h4>Template</h4>
      <textarea
        autoComplete='off'
        onChange={props.onChange}
        defaultValue={props.content}
      />
    </div>
  )
}

function FunctionDisplay(props) {
  return (
    <div className={styles.functiongroup}>
      <h4>Compile</h4>
      {/* <div className={styles.function}>{props.result}</div> */}
      <CodeBlock className='javascript'>{props.result}</CodeBlock>
    </div>
  )
}

function DataEditor(props) {
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

function ResultDisplay(props) {
  return (
    <div className={styles.resultgroup}>
      <h4>Result</h4>
      <div className={styles.result}>{props.result}</div>
    </div>
  )
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log('Squirrelly had an error: ', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}

class Playground extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      template: props.v8 ? initialTemplate8 : initialTemplate,
      data: JSON.parse('{' + initialData + '}'),
      functionString: (props.v8
        ? Sqrl8.compile(initialTemplate8)
        : Sqrl7.Compile(initialTemplate)
      ).toString(),
      templateResult: props.v8
        ? Sqrl8.render(initialTemplate8, JSON.parse('{' + initialData + '}'))
        : Sqrl7.Render(initialTemplate, JSON.parse('{' + initialData + '}')),
    }
    this.handleDataChange = this.handleDataChange.bind(this)
    this.handleTemplateChange = this.handleTemplateChange.bind(this)
  }

  handleDataChange(event) {
    if (
      event.target.value &&
      JSON.parse('{' + (event.target.value || '') + '}')
    ) {
      var data = JSON.parse('{' + (event.target.value || '') + '}')
      this.setState(
        {
          data: data || {},
        },
        this.updateSqrlResults
      )
    }
  }

  handleTemplateChange(event) {
    this.setState(
      {
        template: event.target.value || '',
      },
      this.updateSqrlResults
    )
  }

  updateSqrlResults() {
    var functionString
    var templateResult

    try {
      functionString = (this.props.v8
        ? Sqrl8.compile(this.state.template)
        : Sqrl7.Compile(this.state.template)
      ).toString()
      this.setState({
        functionString: functionString,
      })
    } catch (ex) {}

    try {
      templateResult = (this.props.v8 ? Sqrl8.render : Sqrl7.Render)(
        this.state.template,
        this.state.data
      )
      this.setState({
        templateResult: templateResult,
      })
    } catch (ex) {}
  }

  render() {
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
          <TemplateEditor
            onChange={this.handleTemplateChange}
            content={this.state.template}
          />
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
  render() {
    return (
      <Layout
        title='SquirrellyJS Playground'
        description='Test out the Squirrelly template engine in your browser'
      >
        <Tabs
          defaultValue='v8'
          values={[
            { label: 'Version 8', value: 'v8' },
            { label: 'Version 7', value: 'v7' },
          ]}
          style={{ textAlign: 'center' }}
        >
          <TabItem value='v8'>
            <ErrorBoundary>
              <Playground v8 />
            </ErrorBoundary>
          </TabItem>
          <TabItem value='v7'>
            <ErrorBoundary>
              <Playground />
            </ErrorBoundary>
          </TabItem>
        </Tabs>
      </Layout>
    )
  }
}

export default ErrorHandlingPlayground
