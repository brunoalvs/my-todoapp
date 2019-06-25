import React, { Component } from 'react'

class TodoList extends Component {
    render() {
        return(
            <main className="todoListMain">
                <header className="header">
                    <form>
                        <input placeholder="Task" />
                        <button type="submit">Add Task</button>
                    </form>

                </header>
            </main>
        )
    }
}

export default TodoList