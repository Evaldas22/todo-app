import React, { Component } from 'react';
import './style/App.css';
import TodoList from './TodoList';

const todoList = [
  'Wash dishes',
  'Shop for groceries',
  'Wash clothes'
];


class App extends Component {
  render() {
    return (
      <div className='App'>
        <TodoList todoList={todoList} />
      </div>
    );
  }
}

export default App;
