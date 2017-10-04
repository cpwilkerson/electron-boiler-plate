import {appReducer} from '../src/app-reducers'
import {UPDATE_USER_NAME} from '../src/app-actions'

describe('App Reducer tests', () => {
  it('UPDATE_USER_NAME should return new name', () => {
    const userNameTest = appReducer({}, {type: UPDATE_USER_NAME, userName: 'Han Solo'})
    expect(userNameTest.userName).to.equal('Han Solo')
  })

  it('undefined type should return {}', () => {
    const undefinedAction = appReducer({})
    expect(JSON.stringify(undefinedAction)).to.equal(JSON.stringify({}))
  })
})