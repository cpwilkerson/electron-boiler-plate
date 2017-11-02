import {UPDATE_USER_NAME, WEATHER_RESULT, 
        GETTING_WEATHER, WEATHER_ERROR} from './app-actions'

const initialState = {}

export function appReducer(state = initialState, action) {
  if (action) {
    switch (action.type) {
      case UPDATE_USER_NAME: 
        return Object.assign({}, {userName: action.userName})
      case WEATHER_RESULT: 
        return Object.assign({}, {
          gettingWeather: false,
          weather: action.weather
        })
      case WEATHER_ERROR: 
        return Object.assign({}, {
          gettingWeather: false,
          error: action.err
        })  
      case GETTING_WEATHER:
        return Object.assign({}, {gettingWeather: true})
      default:
        return state
    }
  }
  return state
}