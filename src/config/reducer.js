import appReducer from '@/containers/App/reducers';
import mainReducer from '@/containers/Main/reducers';
// import redux -> combineReducers
const combineReducers = process.env.NODE_ENV !== 'production'
  ? require('redux').combineReducers : window.Redux && window.Redux.combineReducers;

const rootReducer = combineReducers({
  appReducer,
  mainReducer
});

export default rootReducer;
