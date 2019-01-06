import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import logger from 'redux-logger';

// Redux dev tools stuff
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const intialState = {
    todoList: [
        {
            todoId: 1,
            text: 'Wash dishes',
            checked: false
        },
        {
            todoId: 2,
            text: 'Shop for groceries',
            checked: false
        },
        {
            todoId: 3,
            text: 'Wash clothes',
            checked: false
        }
    ]
}

const store = createStore(rootReducer, intialState, composeEnhancers(applyMiddleware(logger)));

export default store;