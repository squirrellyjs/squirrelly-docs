// From DoT.js
// To add, someday

;(function() {
  var encodeHTML = window._encodeHTML || doT.encodeHTMLSource(),
    samples = {
      interpolation: {
        template: "<div>Hi {{=it.name}}!</div>\n<div>{{=it.age || ''}}</div>",
        data: { name: 'Jake', age: 31 }
      },
      evaluation: {
        template: '{{ for(var prop in it) { }}\n<div>{{=prop}}</div>\n{{ } }}',
        data: {
          name: 'Jake',
          age: 31,
          mother: 'Kate',
          father: 'John',
          interests: ['basketball', 'hockey', 'photography'],
          contact: { email: 'jake@xyz.com', phone: '999999999' }
        }
      },
      partials: {
        template:
          '{{##def.snippet:\n<div>{{=it.name}}</div>{{#def.joke}}\n#}}\n\n{{#def.snippet}}',
        data: { name: 'Jake', age: 31 },
        def: { joke: '<div>{{=it.name}} who?</div>' }
      },
      conditionals: {
        template:
          "{{? it.name }}\n<div>Oh, I love your name, {{=it.name}}!</div>\n{{?? it.age === 0}}\n<div>Guess nobody named you yet!</div>\n{{??}}\nYou are {{=it.age}} and still don't have a name?\n{{?}}",
        data: { name: 'Jake', age: 31 }
      },
      arrays: {
        template: '{{~it.array :value:index}}\n<div>{{=value}}!</div>\n{{~}}',
        data: { array: ['banana', 'apple', 'orange'] }
      },
      encode: {
        template: 'Visit {{!it.uri}}',
        data: { uri: 'https://github.com/olado/doT' }
      }
    }
  var br = $('#samples .result'),
    bf = $('#samples .function'),
    bdef = $('#samples .defines'),
    tg = $('.templategroup'),
    bt = $('#samples .template'),
    bd = $('#samples .data'),
    bs = $('#sampletabs'),
    data = {},
    def,
    fn
  function onTemplate(tmpl) {
    var text, error
    try {
      var tmpdef = $.extend({}, def)
      fn = text = doT.template(tmpl, undefined, tmpdef)
    } catch (e) {
      fn = undefined
      error = text = 'Template has an error: ' + e
    }
    bf.html(encodeHTML(text))
    br.html(
      error ? 'Fix the template' : encodeHTML(fn(data)).replace(/\n/g, '<br/>')
    )
  }
  function newSample(s) {
    $('ul .active').removeClass('active')
    $('#x' + s).addClass('active')
    var sample = samples[s]
    data = $.extend({}, sample.data)
    def = sample.def ? $.extend({}, sample.def) : undefined
    if (def) {
      bdef.val(JSON.stringify(def))
      tg.addClass('withdefs')
    } else {
      tg.removeClass('withdefs')
      bdef.val('')
    }
    bt.val(sample.template)
    bd.val(JSON.stringify(sample.data))
    onTemplate(sample.template)
  }
  bt.keyup(function() {
    onTemplate(this.value)
  })
  bdef.keyup(function() {
    var error
    try {
      eval('def=(' + this.value + ')')
    } catch (e) {
      def = undefined
      error = 'Defs error: ' + e
    }
    onTemplate(bt.val())
  })
  bd.keyup(function() {
    var error
    try {
      eval('data=(' + this.value + ')')
    } catch (e) {
      data = {}
      error = 'Data error: ' + e
    }
    br.html(
      error ? 'Fix the template' : encodeHTML(fn(data)).replace(/\n/g, '<br/>')
    )
  })
  $('#strip').change(function() {
    doT.templateSettings.strip = this.checked
    onTemplate(bt.val())
  })
  bs.click(function(event) {
    newSample(event.target.id.substring(1))
  })
  var tmp = ''
  for (var s in samples) {
    if (samples.hasOwnProperty(s)) {
      tmp += "<li id='x" + s + "'>" + s + '</li>'
    }
  }
  bs.html(tmp)
  newSample('interpolation')
})()
