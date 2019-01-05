import React, { Component } from 'react';
import './App.css';
import TodoList from '../TodoList/TodoList';

let ID_COUNTER = 4;

class App extends Component {
  state = {
    todoList: [
      {
        todoId: 1,
        text: 'Wash dishes',
        checked: false
      },
      {
        todoId: 2,
        text: 'Shop for groceries',
        checked: false
      },
      {
        todoId: 3,
        text: 'Wash clothes',
        checked: false
      }
    ],
    inputValue: '',
    allSelected: false
  }

  // checkIfAllSelected = () =>{
  //   let checkedStatuses = this.state.todoList.map(todo => {
  //     return todo.checked;
  //   });

  //   // if there's at least 1 false, that means all are not selected
  //   return !checkedStatuses.includes(false);
  // }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  }

  handleAddClick = () => {

    const newTodo = {
      todoId: ID_COUNTER++,
      text: this.state.inputValue,
      checked: false
    }

    //const allAreSelected = this.checkIfAllSelected();

    this.setState({
      todoList: this.state.todoList.concat(newTodo),
      inputValue: ''
      //allAreSelected: allAreSelected
    });

  }

  handleRemoveClick = () => {
    const remainingTodos = this.state.todoList.filter( todo => {
      return !todo.checked;
    });

    this.setState({
      todoList: remainingTodos,
      allSelected: false
    })
  }

  handleSelectClick = () => {
    let checked;

    if (this.state.allSelected){
      // unselect all
      checked = false;
    }
    else{
      // select all 
      checked = true;
    }


    // update all todos
    const updatedTodoList = this.state.todoList.map(todo => ({
        ...todo,
        checked: checked
    }));

    const newState = {
      todoList: updatedTodoList,
      allSelected: !this.state.allSelected
    }

    this.setState(newState);
  }

  toggleCheckedStatus = (todoId) => {
    const updatedTodoList = this.state.todoList.map(todo => {
      if(todo.todoId === todoId){
        return {
          ...todo,
          checked: !todo.checked
        }
      }
      else return todo;
    })

    this.setState({
      todoList: updatedTodoList
    });
  }

  render() {
    return (
      <div className='App'>
        <input value={this.state.inputValue} onChange={this.handleChange}></input>
        <button onClick={this.handleAddClick}>Add</button>
        <button onClick={this.handleRemoveClick}>Remove selected</button>
        <button onClick={this.handleSelectClick}>{this.state.allSelected ? 'Unselect all' : 'Select All'}</button>
        <TodoList 
          todoList={this.state.todoList} 
          className='todoList'
          toggleCheckedStatus={this.toggleCheckedStatus}
        />
      </div>
    );
  }
}

export default App;
