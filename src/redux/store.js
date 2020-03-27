import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root.reducer';

const middlewares = [logger]; // add all middleware options in this array

const store = createStore(rootReducer, applyMiddleware(...middlewares)) // this spreads all the values in the middleware

export default store;

