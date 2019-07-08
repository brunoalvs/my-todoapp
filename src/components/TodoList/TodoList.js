import React, { Component } from 'react'
import './TodoList.scss'

class TodoList extends Component {
  render() {
    return(
      <section className="todoListMain">
        <header className="header">
          <form onSubmit={this.props.addItem}>
            <input 
              placeholder="Task"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}  
            />
            <button type="submit">Add Task</button>
          </form>
        </header>
      </section>
    )
  }
}

export default TodoList