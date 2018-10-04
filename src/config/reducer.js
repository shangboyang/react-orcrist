import { combineReducers } from 'redux';
import appReducer from '@/containers/App/reducers';
import mainReducer from '@/containers/Main/reducers';


const rootReducer = combineReducers({
  appReducer,
  mainReducer
});

export default rootReducer;
