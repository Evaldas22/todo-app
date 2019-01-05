import React from 'react';
import './style/TodoList.css';
import TodoItem from './TodoItem';

const TodoList = (props) => {
    
    return (
        <div className='todoList'>
            {props.todoList.map((todo, i) => <TodoItem item={todo}/>)}
        </div>
    )
}

export default TodoList;