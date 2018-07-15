import { combineReducers } from 'redux';
import transReducer from '@/containers/App/reducers';


const rootReducer = combineReducers({
  transReducer,
});

export default rootReducer;
