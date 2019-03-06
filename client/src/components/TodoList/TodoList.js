import React from 'react';
import './TodoList.css';
import TodoItem from '../../containers/TodoItem/TodoItem';

const TodoList = ({ todoList }) => {   

    return (
        <div className='todoList'>
            {todoList.map((todo, i) => <TodoItem key={i} id={todo._id} todoName={todo.name} checked={todo.checked} />)}
        </div>
    )
}

export default TodoList;