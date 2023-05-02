import {Component} from 'react'
import './index.css'

class EditableInput extends Component {
  state = {text: '', isEditable: true}

  inputText = e => {
    this.setState({text: e.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({
      isEditable: !prevState.isEditable,
    }))
  }

  render() {
    const {text, isEditable} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <h1>Editable Text Input</h1>
          <div>
            {isEditable ? (
              <input
                type="text"
                value={text}
                onChange={this.inputText}
                className="input"
              />
            ) : (
              <p className="para">{text}</p>
            )}
            {isEditable ? (
              <button type="button" onClick={this.onClickButton}>
                Save
              </button>
            ) : (
              <button type="button" onClick={this.onClickButton}>
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default EditableInput
