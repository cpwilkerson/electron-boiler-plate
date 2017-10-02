console.log('test support env.js')
process.env.NODE_ENV = 'test'

require('ignore-styles')

const {JSDOM} = require('jsdom')

const exposedProperties = ['window', 'navigator', 'document']

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

global.window = window
global.document = window.document
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property)
    global[property] = document.defaultView[property]
  }
})

global.navigator = {
  userAgent: 'node.js'
}
