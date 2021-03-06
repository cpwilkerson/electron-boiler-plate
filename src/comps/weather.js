import React from 'react'
import {PropTypes} from 'prop-types'
import {connect} from 'react-redux'
import {getCurrentWeather} from '../app-actions'

class Weather extends React.Component {
  constructor(state, props) {
    super(state, props)

    this.handleGetWeatherClick = this.handleGetWeatherClick.bind(this)
    this.handleWeatherLocationChange = this.handleWeatherLocationChange.bind(this)
    this.convertCelsiusToFarenheit = this.convertCelsiusToFarenheit.bind(this)
  }

  handleGetWeatherClick(event) {
    event.preventDefault()
    var location = this.state.location.replace( /\,\s+|\s/g, '+') 
    this.props.getWeather(location)
  }

  handleWeatherLocationChange(event) {
    this.setState({location: event.target.value})
  }

  convertCelsiusToFarenheit(value) {
    const f = value * 9 / 5 + 32
    if (isNaN(f)) {
      return ''
    }
    return f
  }

  render() {
    const getting = this.props.gettingWeather ? 'Getting weather...' : 'Get Weather'
    var weatherError = ''
    if (this.props.error) {
      weatherError = `Error: ${this.props.error}`
    }
    
    return (
      <div className="weather-comp">
        Weather Component 
        <div>
          {weatherError}
        </div>
        <div>
          <input type="text"
                placeholder="Weather Location"
                className="weather-location"
                onChange={this.handleWeatherLocationChange} />
        </div>
        <button onClick={this.handleGetWeatherClick}
                className="btn-get-weather">
          {getting}
        </button>
        <div>
          UserName: {this.props.userName}
        </div>
        <div>
          Weather location: {this.props.weather.location}
        </div>
        <div>
          <ul>Current temp: 
            <li>{this.convertCelsiusToFarenheit(this.props.weather.temperature)} f</li>
            <li>{this.props.weather.temperature} c</li>
            <li>humidity: <span className="humidity">{this.props.weather.humidity}</span></li>
          </ul>
        </div>
        <div>
          Wind: {this.props.weather.wind}
        </div>
        <div>
          Sky: {this.props.weather.skytext}
        </div>
      </div>
    )
  }
}

Weather.propTypes = {
  userName: PropTypes.string,
  weather: PropTypes.object,
  error: PropTypes.string,
  gettingWeather: PropTypes.bool,
  getWeather: PropTypes.func.isRequired
}

Weather.defaultProps = {
  gettingWeather: false,
  weather: {
    location: 'Anywhere,USA'
  }
}

function mapStateToProps(state, props) {
  return {
    userName: state.userName,
    weather: state.weather,
    gettingWeather: state.gettingWeather,
    error: state.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getWeather: (location) => dispatch(getCurrentWeather(dispatch, location))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)
export {Weather}