import React from 'react';
import './TodoItem.css';
import store from '../../store';
import { toggleCheckbox } from '../../actions';

const TodoItem = ({ todo }) => {

    const handleChange = () => {
        store.dispatch(toggleCheckbox(todo.todoId));
    }

    const {text, checked} = todo;

    return (
        <div className='todoItem'>
            <input type="checkbox" checked={checked} onChange={handleChange}/>
            <p className='todoItem-text' >{text}</p>
        </div>
    ) 
} 

export default TodoItem;