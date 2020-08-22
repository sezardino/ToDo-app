import React, { Component } from 'react';

import './app.css'

import AppHeader from '../appHeader';
import SearchPanel from '../searchPanel';
import TodoList from '../todoList';
import ItemStatusFilter from '../itemStatusFilter';
import ItemAddForm from '../itemAddForm';
import {toggleProperty} from '../../services'

export default class App extends Component {

  state = { 
    data:[
      {label: 'Drink Coffee', important: false, done: true, id: 1},
      {label: 'Create React App', important: true, done: false, id: 2},
      {label: 'Need a break...', important: false, done: false, id: 3}
    ],
    id: 3,
    searchText: '',
    filter: 'all'
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex((item) => item.id === id);
      const newArr = [...data.slice(0, index), ...data.slice(index + 1)]
      return {data: newArr}
    })
  }

  onToggleImportant = (id) => {
    this.setState(({data}) => {
      return {
        data: toggleProperty(data, id, 'important')
      }
    })
  }
  onToggleDone = (id) => {
    this.setState(({data}) => {
      return {
        data: toggleProperty(data, id, 'done')
      }
    })
  }

  addItem = (body) => {
    this.setState(({data, id}) => {
      const newId = id + 1
      const newEll = {label: body, important: false, like: false, id: newId};
      const newArr = [...data, newEll];
      return {data: newArr, id: newId};
    })
  }

  searchItem = (searchText) => {
    this.setState({searchText});
  }

  chengeFilter = (filter) => {
    this.setState({filter});
  }

  search = (items, searchText) => {
    if (searchText.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }

  filter = (items, filter) => {
    switch(filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done)
      default :
        return items;
    }
  }

  render() {
    const {data, searchText, filter} = this.state;
    console.log(searchText)

    const todoCount = (data.filter((item) => item.done === false)).length;
    const doneCount = (data.filter((item) => item.done === true)).length;

    let visibleItems = this.filter(this.search(data, searchText), filter)
    return (
      <div className="todo-app">
        <AppHeader todo={todoCount} done={doneCount}/>
        <div className="top-panel d-flex">
          <SearchPanel 
          onSearchInpitChange={this.searchItem}/>
          <ItemStatusFilter 
          filterChange={this.chengeFilter}
          activeFilter={this.state.filter}
          />
        </div>
        <TodoList todos={visibleItems}
                  onDelete={this.deleteItem}
                  onToggleDone={this.onToggleDone}
                  onToggleImportant={this.onToggleImportant}/>
        <ItemAddForm addItem={this.addItem}/>
      </div>
    )
  }
};