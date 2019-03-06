import React from 'react';
import './TodoItem.css';
import { toggleCheckbox } from '../../actions';
import { connect } from 'react-redux';

const TodoItem = (props) => {
    const { _id, name, checked } = props.todo;

    const handleChange = (todoId) => {
        props.toggleCheckbox(todoId);
    }    

    return (
        <div className='todoItem'>
            <input type="checkbox" checked={checked} onChange={() => handleChange(_id)}/>
            <p className='todoItem-text' >{name}</p>
        </div>
    ) 
} 

const mapDispatchToProps = dispatch => (
    { toggleCheckbox: todoId => dispatch(toggleCheckbox(todoId))}
);

export default connect(null, mapDispatchToProps)(TodoItem);