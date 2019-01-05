import React from 'react';
import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({ todoList, toggleCheckedStatus }) => {
    
    return (
        <div className='todoList'>
            {todoList.map((todo, i) => <TodoItem 
                                            key={todo.todoId} 
                                            todo={todo}
                                            todoId={todo.todoId}
                                            toggleCheckedStatus={toggleCheckedStatus}
                                        />)}
        </div>
    )
}

export default TodoList;