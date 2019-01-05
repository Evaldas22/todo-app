import React from 'react';
import './style/TodoList.css';
import TodoItem from './TodoItem';

const TodoList = (props) => {
    
    return (
        <div className='todoList'>
            <ul>
                {props.todoList.map((todo, i) => <TodoItem item={todo}/>)}
            </ul>
        </div>
    )
}

export default TodoList;