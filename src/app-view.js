import React from 'react'
import {PropTypes} from 'prop-types'
import {updateUserName, getCurrentWeather} from './app-actions'
import EditField from './comps/edit-field' 
import Weather from './comps/weather'
import {connect} from 'react-redux'

class AppView extends React.Component {
  constructor (state, props) {
    super(state, props)

    this.handleUserNameChange = this.handleUserNameChange.bind(this)
  }
  
  handleUserNameChange(value) {
    this.props.onUserNameChange(value)
  }

  render() {
    return (
      <div className="app-view">
        AppView
        <EditField id="userName"
                   labelText="User Name"
                   onTextChange={this.handleUserNameChange} />
        <div className="userNameValue">
          User Name: {this.props.userName}
        </div>
        <Weather />
      </div>)
  }
}

AppView.propTypes = {
  userName: PropTypes.string,
  onUserNameChange: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    userName: state.userName
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onUserNameChange: (value) => dispatch(updateUserName(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppView)

export { AppView }