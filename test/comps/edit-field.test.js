import {EditField} from '../../src/comps/edit-field'
import React from 'react'
import {mount} from 'enzyme'

describe('EditField Tests', () => {
  let editfield
  before(() => {
    editfield = mount(
      <EditField id="test"
                 labelText="test text"
                 onTextChange={textChangeHandler}  />
    )
  })

  after(() => {
    editfield.unmount()
  })

  function textChangeHandler(value) {
    console.log('handling text change')
  }

  it('should test EditField renders', () => {
    expect(editfield.find('.edit-field').length).to.equal(1)
  })

  it('should call textChangeHandler', () => {
    editfield.simulate('change', {
      target: {
        id: "test",
        value: "Princess Leia"
      }
    })
  })
})