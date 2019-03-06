import * as types from '../types';
import axios from "axios";

export const getTodos = () => dispatch => {
    axios.get('/api/todos')
        .then(res => {
            dispatch({
                type: types.GET_TODOS,
                payload: res.data
            })
        });
}

export const addTodo = (todo) => ({
    type: types.ADD_TODO,
    payload: todo
})

export const removeTodos = () => ({
    type: types.REMOVE_TODOS
})

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