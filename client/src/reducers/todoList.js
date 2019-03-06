import * as types from '../types';

const todoList = (state = [], action) => {
    switch (action.type){
        case types.GET_TODOS:
            return action.payload;

        case types.ADD_TODO:
            return [...state, action.payload];

        case types.REMOVE_TODOS:
            const remainingTodos = state.filter( todo => {
                return !todo.checked;
            });
            return remainingTodos;

        case types.SELECT_ALL_TODOS:
            return state.map(todo => ({
                ...todo,
                checked: true
            }));

        case types.UNSELECT_ALL_TODOS:
            return state.map(todo => ({
                ...todo,
                checked: false
            }));

        case types.TOGGLE_CHECKBOX:
            return state.map(todo => {
                if(todo.todoId === action.payload){
                    return {
                        ...todo,
                        checked: !todo.checked
                    }
                }
                else return todo;
            });

        default:
            return state;
    }
}

export default todoList;