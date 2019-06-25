//TODO:
// Here's what we'll be doing now:
// - Adding items
// - Displaying items
// - Removing items

import React, { Component } from 'react';
import TodoList from './TodoList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    )
  }
}

export default App