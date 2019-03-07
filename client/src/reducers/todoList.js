import * as types from '../types';

const todoList = (state = [], action) => {
    switch (action.type){
        case types.GET_TODOS:
            return action.payload.map(todo => ({
                id: todo._id,
                name: todo.name,
                date: todo.date,
                checked: false
            }));

        case types.ADD_TODO:
            const addedTodo = action.payload[0];
            const formattedTodo = {
                id: addedTodo._id,
                name: addedTodo.name,
                date: addedTodo.date,
                checked: false
            }
            return [formattedTodo, ...state];

        case types.REMOVE_TODOS:
            const newState = state.filter(todo => !action.payload.includes(todo.id))
            return newState;

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
                if(todo.id === action.payload){
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