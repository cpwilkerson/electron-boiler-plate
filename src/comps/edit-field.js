import React from 'react'
import {PropTypes} from 'react-prop-types'
import {connect} from 'react-redux'

class EditField extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.textChangeHandler = this.textChangeHandler.bind(this)
  }

  textChangeHandler(event) {
    this.props.onTextChange(event.target.value)
  }

  render() {
    return (
      <div className="edit-field">
        <label>{this.props.labelText}
        <input className="edit-field-input"
               type="text" 
               onChange={this.textChangeHandler}/>
        </label>
      </div>)
  }
}

EditField.propTypes = {
  labelText: React.PropTypes.string.isRequired,
  onTextChange: React.PropTypes.func.isRequired
}

export default EditField
export { EditField }