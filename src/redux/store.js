import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root.reducer';
import { persistStore } from 'redux-persist';

const middlewares = [logger]; // add all middleware options in this array

const store = createStore(rootReducer, applyMiddleware(...middlewares)) // this spreads all the values in the middleware

const persistor = persistStore(store); // we use persistor to create stored version of our store

export {store, persistor};

