import React from 'react';
import './TodoItem.css';
import { toggleCheckbox } from '../../actions';
import { connect } from 'react-redux';

const TodoItem = ({ id, todoName, checked}) => {

    const handleChange = () => {
        // store.dispatch(toggleCheckbox(todo.todoId));
        // props.toggleCheckbox(todoId);
    }

    console.log(id, todoName, checked);
    

    return (
        <div className='todoItem'>
            <input type="checkbox" checked={checked} onChange={handleChange}/>
            <p className='todoItem-text' >{todoName}</p>
        </div>
    ) 
} 

const mapDispatchToProps = dispatch => (
    { 
        toggleCheckbox: todoId => { dispatch(toggleCheckbox(todoId)) }
    }
);

export default connect(null, mapDispatchToProps)(TodoItem);