import React from 'react';

export default class Todo extends React.Component {
  constructor(){
    super();
    this.state = {
      todos : [
        {id:1, name:'Learn Jsx', isComplete: false},
        {id:2, name:'Learn React', isComplete: false},
        {id:3, name:'Learn Redux', isComplete: false}
      ]
    }
  }

  render () {
    return (
    	<div className="Todo-list">
        <h2>Todo List</h2>
        <ul>
          {this.state.todos.map(todo => <li key={todo.id}><input type="checkbox"/>{todo.name}</li>)}
        </ul>
      </div>
    );
  }
}



