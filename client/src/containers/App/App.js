import React, { Component } from 'react';
import './App.css';
import TodoList from '../../components/TodoList/TodoList';
import { getTodos, addTodo, removeTodos, selectAllTodos, unselectAllTodos } from '../../actions';
import ControlPanel from '../../components/ControlPanel/ControPanel';
import { connect } from 'react-redux';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      inputValue: '',
      allSelected: false
    }
  }

  componentDidMount = () => {
    this.props.getTodos();
  }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  }

  handleAddClick = () => {
    this.props.addTodo(this.state.inputValue)
  }

  handleRemoveClick = () => {
    const todosToBeDeleted = this.props.todoList.filter(todo => todo.checked)
    const todosIds = {
      "todosIds" : todosToBeDeleted.map(todo => todo.id)
    }
    this.props.removeTodos(todosIds);

    this.setState({
      allSelected: false
    })
  }

  handleSelectClick = () => {
    // unselect if all selected
    if(this.state.allSelected){
      // store.dispatch(unselectAllTodos());
      this.props.unselectAllTodos();
    }
    else{
      // store.dispatch(selectAllTodos());
      this.props.selectAllTodos();
    }

    this.setState({ 
      allSelected: !this.state.allSelected
    });
  }

  render() {    
    return (
      <div className='App'>
        <ControlPanel 
          state={this.state} 
          handleChange={this.handleChange} 
          handleAddClick={this.handleAddClick} 
          handleRemoveClick={this.handleRemoveClick}
          handleSelectClick={this.handleSelectClick}/>
        <TodoList todoList={this.props.todoList} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ todoList: state.todoList });

const mapDispatchToProps = dispatch => (
  {
    getTodos: () => dispatch(getTodos()),
    addTodo: (todo) => dispatch(addTodo(todo)),
    removeTodos: (todosIds) => dispatch(removeTodos(todosIds)),
    selectAllTodos: () => dispatch(selectAllTodos()),
    unselectAllTodos: () => dispatch(unselectAllTodos())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
