import React, { Component } from 'react';

import './itemAddForm.css'

export default class ItemAddForm extends Component {

  state = {
    addText : ''
  }

  onInputChange = (evt) => {
    const value = evt.target.value
    this.setState({addText: value})
  }
  onFormSubmit = (evt) => {
    evt.preventDefault()
    const {addText} = this.state;
    if (addText) {
      this.props.addItem(addText)
      this.setState(({addText: ''}))
    }
  }

  render() {
    const {addText} = this.state;
    return (
      <form 
        className="d-flex item-add-form"
        onSubmit={this.onFormSubmit}>
        <input type="text" 
               placeholder="write your task" 
               className="form-control add-input"
               onChange={this.onInputChange}
               value={addText}/>
        <button type="submit" 
                className="btn btn-info">
                  Add</button>
      </form>
    )
  }
}