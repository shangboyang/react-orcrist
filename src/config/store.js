// import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '@/config/reducer';

let createStore;
let applyMiddleware;
// development
if (process.env.NODE_ENV !== 'production') {
  createStore = require('redux').createStore;
  applyMiddleware = require('redux').applyMiddleware;
} else {
// production cdn
  createStore = window.Redux && window.Redux.createStore;
  applyMiddleware = window.Redux && window.Redux.applyMiddleware;
}

const middleware = process.env.NODE_ENV !== 'production'
  ? applyMiddleware(thunkMiddleware, createLogger()) : applyMiddleware(thunkMiddleware);

const createStoreWithMiddleware = middleware(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer', () => {
      const nextRootReducer = rootReducer;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
