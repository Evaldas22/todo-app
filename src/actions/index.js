import * as types from '../types';

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