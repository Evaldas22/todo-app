import React, { Component } from 'react';
import './App.css';
import TodoList from '../../components/TodoList/TodoList';
import store from '../../store';
import { addTodo, removeTodos, selectAllTodos, unselectAllTodos } from '../../actions';
import ControlPanel from '../../components/ControlPanel/ControPanel';

let ID_COUNTER = 4;

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      inputValue: '',
      allSelected: false
    }
  }

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

    store.dispatch(addTodo(newTodo));

    this.setState({
      inputValue: ''
    });

  }

  handleRemoveClick = () => {
    store.dispatch(removeTodos());

    this.setState({
      allSelected: false
    })
  }

  handleSelectClick = () => {
    // unselect if all selected
    if(this.state.allSelected){
      store.dispatch(unselectAllTodos());
    }
    else{
      store.dispatch(selectAllTodos());
    }

    this.setState({ 
      allSelected: !this.state.allSelected
    });
  }

  render() {
    const state = store.getState();

    return (
      <div className='App'>
        <ControlPanel 
          state={this.state} 
          handleChange={this.handleChange} 
          handleAddClick={this.handleAddClick} 
          handleRemoveClick={this.handleRemoveClick}
          handleSelectClick={this.handleSelectClick}/>
        <TodoList todoList={state.todoList} />
      </div>
    );
  }
}

export default App;
