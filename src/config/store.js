import ReduxThunk from 'redux-thunk'; // use cdn
import rootReducer from '@/config/reducer';

// development
const devMode = process.env.NODE_ENV !== 'production';
// import redux cdn
const createStore = devMode ? require('redux').createStore : window.Redux && window.Redux.createStore;
const applyMiddleware = devMode ? require('redux').applyMiddleware : window.Redux && window.Redux.applyMiddleware;
// apply middleware [ thunk & logger ] cdn
const createLogger = devMode ? require('redux-logger').createLogger : undefined;

const middleware = devMode && createLogger
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
