//TODO:
// Here's what we'll be doing now:
// - Adding items
// - Displaying items
// - Removing items

import React, { Component } from 'react';
import TodoList from './TodoList';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {text:'', key:''},
    }
  }

  handleInput = e => {
    console.log('Hello input')
    const itemText= e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }

  addItem = (e) => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if( newItem.text !== '') {
      console.log(`Add new task: ${newItem}`)
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: ''},
      })
    } else {
      console.log('input empty')
    }
  }

  render() {
    return (
      <div className="App">
        <TodoList 
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem} 
          />
      </div>
    )
  }
}

export default App