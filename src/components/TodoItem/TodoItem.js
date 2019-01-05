import React from 'react';
import './TodoItem.css';

class TodoItem extends React.Component {
    
    handleChange = () => {
        this.props.toggleCheckedStatus(this.props.todoId);
    }

    render(){
        const {text, checked} = this.props.todo;

        return (
            <div className='todoItem'>
                <input type="checkbox" checked={checked} onChange={this.handleChange}/>
                <p className='todoItem-text' >{text}</p>
            </div>
        ) 
    }
} 


export default TodoItem;