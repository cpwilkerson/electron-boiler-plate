import {Weather} from '../../src/comps/weather'
import React from 'react'
import {mount} from 'enzyme'

describe('Weather component tests', () => {
  it('should render Weather component', () => {
    const weather = mount(<Weather />)
    expect(weather.find('.weather-comp').length).to.equal(1)
  })
})