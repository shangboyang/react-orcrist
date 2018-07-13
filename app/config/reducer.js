import { combineReducers } from 'redux';
import transReducer from '@/containers/App/reducers';
import listViewReducer from '@/containers/ListView/reducer';


const rootReducer = combineReducers({
  transReducer,
  listViewReducer,
});

export default rootReducer;
