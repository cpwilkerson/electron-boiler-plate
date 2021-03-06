import AppView from '../src/app-view'
import React from 'react'
import {default as Enzyme, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {appReducer} from '../src/app-reducers'

const store = createStore(appReducer)
Enzyme.configure({ adapter: new Adapter() })

describe('AppView Tests', () => {
  let appview
  before(() => {
    appview = mount(
      <Provider store={store}>
        <AppView />
      </Provider>
    )
  })

  after(() => {
    appview.unmount()
  })

  it('should test AppView renders', () => {
    expect(appview.find('.app-view').length).to.equal(1)
  })

  it('should change the user name', () => {
    appview.find('.edit-field-input').simulate('change', {
      target: {
        id: 'userName',
        value: 'Ben Kenobi'
      }
    })
    const value = appview.find('.userNameValue').text()
    expect(value).to.equal('User Name: Ben Kenobi')
  })
})