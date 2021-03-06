import React from 'react';
import './TodoItem.css';
import { toggleCheckbox } from '../../actions/todosActions';
import { connect } from 'react-redux';

const TodoItem = (props) => {
    const { id, name, checked } = props.todo;

    const handleChange = (todoId) => {
        props.toggleCheckbox(todoId);
    }  

    return (
        <div className='todoItem'>
            <input type="checkbox" checked={checked} onChange={() => handleChange(id)}/>
            <p className='todoItem-text' >{name}</p>
        </div>
    ) 
} 

const mapDispatchToProps = dispatch => (
    { toggleCheckbox: todoId => dispatch(toggleCheckbox(todoId))}
);

export default connect(null, mapDispatchToProps)(TodoItem);