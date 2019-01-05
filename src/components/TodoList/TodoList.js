import React from 'react';
import './TodoList.css';
import TodoItem from '../../containers/TodoItem/TodoItem';

const TodoList = ({ todoList, toggleCheckedStatus }) => {
    
    return (
        <div className='todoList'>
            {todoList.map((todo, i) => <TodoItem key={todo.todoId} todo={todo} />)}
        </div>
    )
}

export default TodoList;