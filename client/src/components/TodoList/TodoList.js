import React from 'react';
import './TodoList.css';
import TodoItem from '../../containers/TodoItem/TodoItem';

const TodoList = ({ todoList }) => {   

    return (
        <div className='todoList'>
            {todoList.map((todo, i) => <TodoItem key={i} todo={todo}/>)}
        </div>
    )
}

export default TodoList;