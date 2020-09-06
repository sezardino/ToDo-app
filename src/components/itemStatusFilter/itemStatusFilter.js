import React, { Component } from 'react';

import './itemStatusFilter.css';

export default class ItemStatusFilter extends Component {

  buttons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'}
  ]

  render() {
    const {filterChange, activeFilter} = this.props

    const button = this.buttons.map(({label, name}) => {
      const activeBtnClass = activeFilter === name ? 'btn-info' : 'btn-outline-secondary'
      return (<button 
                    key = {name}
                    type="button" 
                    onClick={() => filterChange(name)}
                    className={`btn ${activeBtnClass}`}>
                      {label}
              </button>)
    })

    return (
      <div className="btn-group">
        {button}
      </div>
    );
  }
}