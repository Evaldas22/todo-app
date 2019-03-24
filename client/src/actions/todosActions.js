import * as types from '../types';
import axios from "axios";

export const getTodos = () => dispatch => {
    axios.get('/api/todos').then(res => {
        dispatch({
            type: types.GET_TODOS,
            payload: res.data 
        });
    });
}

export const addTodo = (todoName) => dispatch => {
    const newTodo = {
        "todo": todoName
    };

    axios.post('/api/todos', newTodo).then(res => {
        dispatch({
            type: types.ADD_TODO,
            payload: res.data
        });
    });
}

export const removeTodos = (todosIdsObj) => dispatch => {    
    axios.delete('/api/todos', { data: todosIdsObj}).then(res => {
        if(res.data.success){
            dispatch({
                type: types.REMOVE_TODOS,
                payload: todosIdsObj.todosIds
            })
        }
    })
}

export const selectAllTodos = () => ({
    type: types.SELECT_ALL_TODOS
})

export const unselectAllTodos = () => ({
    type: types.UNSELECT_ALL_TODOS
})

export const toggleCheckbox = (todoId) => ({
    type: types.TOGGLE_CHECKBOX,
    payload: todoId
})