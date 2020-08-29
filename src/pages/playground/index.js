import React from 'react'
import Layout from '@theme/Layout'
import styles from './index.module.css'
import datStyles from './dat-gui.module.css'

// Below so it doesn't err on build
const Editor = (props) => {
  if (typeof window !== 'undefined') {
    const Ace = require('react-ace').default

    require('ace-builds/src-noconflict/mode-handlebars')
    require('ace-builds/src-noconflict/theme-monokai')

    return <Ace {...props} />
  }

  return null
}

class AceEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = { mounted: false }
  }

  componentDidMount() {
    this.setState({ mounted: true })
  }

  render() {
    return this.state.mounted ? <Editor {...this.props} /> : null
  }
}

import * as Sqrl from 'squirrelly'

import DatGui, { DatBoolean, DatSelect, DatString } from 'react-dat-gui'

import 'react-dat-gui/dist/index.css'

Sqrl.templates.define(
  'mypartial',
  Sqrl.compile('Partial content: the value of `num` is {{ it.num }}')
)

Sqrl.filters.define('reverse', function (str) {
  return str.split('').reverse().join('')
})

Sqrl.filters.define('capitalize', function (str) {
  return str.toUpperCase()
})

Sqrl.filters.define('join', function (val, separator) {
  return val.join(separator)
})

Sqrl.defaultConfig.autoTrim = ['nl', 'nl']

var initialTemplate = `Have fun playing with Squirrelly! :D
------------------------------------

{{! /* Welcome to the playground!
See the comment at the bottom for more info */}}

These fruits are amazing:

{{@each(it.fruits) => fruit}}

- {{fruit | reverse | capitalize}}

{{/each}}


You can put any JS inside tags:
-------------------------------
2+4 = {{2 + 4}}


Call functions
--------------
5 = {{it.five()}}


Display arrays
--------------

{{it.arr.join()}}


{{it.fruits | join(" + ")}}


Include partials
----------------
This is a partial: {{@include("mypartial", {num: 3})/}}


And more! Have fun!

{{! /*
  A few quick notes:
- You can edit the Squirrelly config using the menu in the bottom right
- This playground is using Ace's syntax highlighting for Handlebars, so it may not be super accurate
- One partial ("mypartial") and several filters ("reverse", "capitalize") are pre-defined
- Sqrl.defaultConfig.autoTrim is set to ['nl', 'nl'], so it trims leading and trailing newlines.
- The template data is pre-defined!

It looks like this:
------
{
  number: 78,
  five: function() {
    return 5
  },
  arr: ['one', 'two', 'three', 'four'],
  obj: {
    key1: 'val1',
    key2: 'val2',
    key3: 'val3'
  },
  users: [
    { name: 'Ben', job: 'Maintainer' },
    { name: 'Joe', job: 'Maintainer' }
  ]
}
------
*/}}
`

var renderData = {
  number: 78,
  five: function () {
    return 5
  },
  arr: ['one', 'two', 'three', 'four'],
  obj: {
    key1: 'val1',
    key2: 'val2',
    key3: 'val3',
  },
  users: [
    { name: 'Ben', job: 'Maintainer' },
    { name: 'Joe', job: 'Maintainer' },
  ],
  fruits: ['Apple', 'Pear', 'Orange', 'Lemon'],
}

class Playground extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      template: initialTemplate,
      functionString: Sqrl.compile(initialTemplate).toString(),
      templateResult: Sqrl.render(initialTemplate, renderData),
      config: {
        autoEscape: true,
        tagOpen: '{{',
        tagClose: '}}',
        display: 'result',
      },
      err: false,
    }
    this.handleTemplateChange = this.handleTemplateChange.bind(this)
    this.handleConfigUpdate = this.handleConfigUpdate.bind(this)
  }

  handleTemplateChange(newvalue) {
    // console.log('newvalue\n============')
    // console.log(newvalue)
    this.setState(
      {
        template: newvalue,
      },
      function () {
        var functionString = ''
        var templateResult = ''
        var err = false
        var customConfig = {
          autoEscape: this.state.config.autoEscape,
          tags: [this.state.config.tagOpen, this.state.config.tagClose],
        }
        // console.log(customConfig)
        try {
          functionString = Sqrl.compile(
            this.state.template,
            customConfig
          ).toString()
          // console.log(functionString)

          templateResult = Sqrl.render(
            this.state.template,
            renderData,
            customConfig
          )
          // console.log(templateResult)
        } catch (ex) {
          console.log('Err!')
          console.log(ex.stack)
          err = ex.stack
        }

        this.setState({
          functionString: functionString,
          templateResult: templateResult,
          err: err,
        })
      }
    )
  }

  handleConfigUpdate(newData) {
    this.setState(
      (prevState) => ({
        config: { ...prevState.config, ...newData },
      }),
      () => {
        this.handleTemplateChange(this.state.template)
      }
    )
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.state.template === nextState.template &&
      this.state.functionString === nextState.functionString &&
      this.state.err === nextState.err &&
      this.state.templateResult === nextState.templateResult &&
      this.state.config === nextState.config
    ) {
      return false
    } else {
      return true
    }
  }

  render() {
    return (
      <div className={styles.playground}>
        <DatGui
          data={this.state.config}
          onUpdate={this.handleConfigUpdate}
          className={datStyles['react-dat-gui']}
        >
          <DatBoolean path='autoEscape' label='autoEscape' />
          <DatString path='tagOpen' label='tagOpen' />
          <DatString path='tagClose' label='tagClose' />
          <DatSelect
            path='display'
            options={['function', 'result']}
            label='Display'
          />
        </DatGui>
        <div className={styles['row']}>
          <div className={styles['col']}>
            {
              <AceEditor
                mode='handlebars'
                theme='monokai'
                onChange={(value) => this.handleTemplateChange(value)}
                name='UNIQUE_ID_OF_DIV'
                className={styles['ace-editor']}
                value={this.state.template}
                editorProps={{ $blockScrolling: true }}
              />
            }{' '}
          </div>
          <div
            className={styles['col'] + ' ' + styles['col-result']}
            style={{ background: this.state.err ? '#c0392b' : '#27ae60' }}
          >
            <pre className={styles['result']}>
              {this.state.err
                ? this.state.err
                : this.state.config.display === 'function'
                ? this.state.functionString
                : this.state.templateResult}
            </pre>
          </div>
        </div>
        <div className={styles['footer']}>
          <p style={{ margin: 0, padding: 0 }}>
            <span className={'octicon octicon-repo-forked'}></span> from
            <a href='https://github.com/IonicaBizau'> @IonicaBizau</a>'s EJS
            playground
          </p>
        </div>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <Layout
        title='Squirrelly Playground'
        description='Test out the Squirrelly template engine in your browser'
      >
        <Playground />
      </Layout>
    )
  }
}

export default App
