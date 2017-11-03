// Actions generally return objects only
// If they return a function, then they are considered a thunk

export const UPDATE_USER_NAME = 'UPDATE_USER_NAME'
export const GET_CURRENT_WEATHER = 'GET_CURRENT_WEATHER'
export const GETTING_WEATHER = 'GETTING_WEATHER'
export const WEATHER_RESULT = 'WEATHER_RESULT'
export const WEATHER_ERROR = 'WEATHER_ERROR'

export function updateUserName (value) {
  return {
    type: UPDATE_USER_NAME,
    userName: value
  }
}

export function gettingWeather(location) {
  return {
    type: GETTING_WEATHER,
    location: location
  }
}

export function weatherResult(weather) {
  return {
    type: WEATHER_RESULT,
    weather
  }
}

export function weatherError(err) {
  return {
    type: WEATHER_ERROR,
    err
  }
}

const WEATHERS_URI = 'http://weathers.co/api.php?city='
export function getCurrentWeather(dispatch, location) {
  let fetchURI = WEATHERS_URI + location
  dispatch(gettingWeather(fetchURI))

  return () => {
    fetch(fetchURI, {
      method: 'GET',
      body: {},
      headers: {
        accept: 'application/json',
        'content-type': 'application/json'
      }
    }).
    then((response) => {
          if (response.status === 404) {
            dispatch(weatherError(`404 ${response.statusText} - ${response.url}` ))
            return
          }
          return response.json().then((data) => {
            dispatch(weatherResult(data.data))
          })
      },
        (error) => {}).catch((err) => {
      // console.error('Get weather error', {err: err})
    })
  }
}