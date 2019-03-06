import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// Redux dev tools stuff
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

export default store;