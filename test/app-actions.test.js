import {updateUserName, gettingWeather, 
        weatherResult, getCurrentWeather,
        WEATHER_RESULT} from '../src/app-actions.js'

describe('App Actions testing', () => {
  it('Should test updateUserName', () => {
    const userName = updateUserName('Lt. Worf')
    expect(userName.userName).to.equal('Lt. Worf')
  })

  it('Should test gettingWeather', () => {
    const location = gettingWeather('Riverside, CA')
    expect(location.location).to.equal('Riverside, CA')
  })

  it('Should test weatherResult', () => {
    const weather = weatherResult({})
    expect(weather.type).to.equal(WEATHER_RESULT)
  })

  it('Should test getCurrentWeather', () => {
    
  })
})