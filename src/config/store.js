import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '@/config/reducer';

// import redux
const createStore = process.env.NODE_ENV !== 'production'
  ? require('redux').createStore : window.Redux && window.Redux.createStore;
const applyMiddleware = process.env.NODE_ENV !== 'production'
  ? require('redux').applyMiddleware : window.Redux && window.Redux.applyMiddleware;
// apply middleware [ thunk & logger ]
const middleware = process.env.NODE_ENV !== 'production'
  ? applyMiddleware(ReduxThunk, createLogger()) : applyMiddleware(ReduxThunk);

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
