import Weather from '../../src/comps/weather'
import {appReducer} from '../../src/app-reducers'
import {getCurrentWeather} from '../../src/app-actions'
import React from 'react'
import {default as Enzyme, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import fetch from 'isomorphic-fetch'

const sinon = global.sinon
Enzyme.configure({ adapter: new Adapter() })

const store = createStore(appReducer, applyMiddleware(thunk))

describe('Weather component tests', (done) => {
  var weather
  before(() => {
    weather = mount(
      <Provider store={store}>
        <Weather />
      </Provider>
    )

    sinon.stub(global, 'fetch').callsFake((apiCall, params) => {
      var res = {}
      if (apiCall.indexOf('Corona+CA') > 0) {
        res.status = 200
        res.json = () => ({
          'data': {
            'temperature': 10,
            'location': 'Corona, CA',
            'humidity': 11,
            'wind': '12 km/h',
            'skytext': 'clear'
          }
        })
  
        return Promise.resolve(Object.assign({}, res))
      } else {
        res.status = 500
        res.json = () => ({'data': {}})
        return Promise.reject(Object.assign({}, res))
      }

    })
  })

  after(() => {
    global.fetch.restore()
    weather.unmount()
  })

  it('should render Weather component', () => {
    expect(weather.find('.weather-comp').length).to.equal(1)
  })

  it('should get fake weather for Corona, CA', (done) => {
    const location = weather.find('.weather-location')
    const button = weather.find('.btn-get-weather')

    location.simulate('change', {
      target: {
        'id': 'location',
        'value': 'Corona, CA'
      }
    })
    button.simulate('click', {
      target: {}
    })
    
    setTimeout(() => {
      expect(weather.find('.humidity').text()).to.equal('11')
      done()
    }, 10)
  })

  it('should get fail weather for Nowhere', (done) => {
    const location = weather.find('.weather-location')
    const button = weather.find('.btn-get-weather')

    location.simulate('change', {
      target: {
        'id': 'location',
        'value': 'Nowhere'
      }
    })
    button.simulate('click', {
      target: {}
    })
    
    setTimeout(() => {
      expect(weather.find('.humidity').text()).to.equal('')
      done()
    }, 10)
  })
})