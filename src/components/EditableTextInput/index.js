import {Component} from 'react'
import './index.css'

// Replace your code here
class EditableTextInput extends Component {
  state = {textValue: '', todoEdit: true}

  onChangeText = event => {
    this.setState({textValue: event.target.value})
  }

  onClickSave = () => {
    this.setState({todoEdit: false})
  }

  onClickEdit = () => {
    this.setState({todoEdit: true})
  }

  render() {
    const {textValue, todoEdit} = this.state
    return (
      <div className="bg-container">
        <div className="editable-text-container">
          <h1 className="heading">Editable Text Input</h1>
          {todoEdit ? (
            <div className="editable-container">
              <input
                className="input-console"
                type="text"
                value={textValue}
                onChange={this.onChangeText}
              />
              <button
                className="save-btn"
                type="button"
                onClick={this.onClickSave}
              >
                Save
              </button>
            </div>
          ) : (
            <div className="editable-container">
              <p className="text-value">{textValue}</p>
              <button
                className="save-btn"
                type="button"
                onClick={this.onClickEdit}
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default EditableTextInput
