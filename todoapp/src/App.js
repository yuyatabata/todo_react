import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos:[],
      newTodo:''
    };
  }

  handleChange(e) {
    this.setState({newTodo:e.target.value});
  }

  addTodo(){
    if(this.state.newTodo === '') return;
    const todos = this.state.todos;
    todos.push(this.state.newTodo);
    this.setState({todos: todos});
    this.setState({newTodo: ''});
  }

  deleteTodo(i){
    const todos = this.state.todo;
    todos.splice(i,1);
    this.setState({todos: todos});
  }

  
}
