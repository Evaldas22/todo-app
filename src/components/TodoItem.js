import React from 'react';
import './style/TodoItem.css';

const TodoItem = (props) => {
    return (
        <div>
            <p className='todoItem'>{props.item}</p>
        </div>
    )
} 

export default TodoItem;