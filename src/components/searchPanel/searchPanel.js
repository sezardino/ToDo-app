import React, { Component } from 'react';

import './searchPanel.css';

export default class SearchPanel extends Component{
  
  state = {
    searchText: ''
  }
  
  onSearchInpitChange = (evt) => {
    const searchText = evt.target.value;
    this.setState({searchText});
    this.props.onSearchInpitChange(searchText);
  }


  render() {
    const {searchText} = this.state;

    return <input 
    placeholder='Put something to search' 
    className="form-control search-input"
    onChange={this.onSearchInpitChange}
    value={searchText}/>
  }
  
};