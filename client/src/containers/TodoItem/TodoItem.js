import React from 'react';
import './TodoItem.css';
import { toggleCheckbox } from '../../actions';
import { connect } from 'react-redux';

const TodoItem = (props) => {

    const { id, todoName, checked } = props;

    const handleChange = (todoId) => {
        // store.dispatch(toggleCheckbox(todo.todoId));
        props.toggleCheckbox(todoId);
    }    

    return (
        <div className='todoItem'>
            <input type="checkbox" checked={checked} onChange={() => handleChange(id)}/>
            <p className='todoItem-text' >{todoName}</p>
        </div>
    ) 
} 

const mapDispatchToProps = dispatch => (
    { toggleCheckbox: todoId => dispatch(toggleCheckbox(todoId))}
);

export default connect(null, mapDispatchToProps)(TodoItem);