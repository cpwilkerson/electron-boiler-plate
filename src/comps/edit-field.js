import React from 'react'
import {PropTypes} from 'prop-types'
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
  labelText: PropTypes.string.isRequired,
  onTextChange: PropTypes.func.isRequired
}

export default EditField
export { EditField }