import { combineReducers } from 'redux'
import transReducer from '../containers/App/reducer'
import listViewReducer from '../containers/ListView/reducer'

const rootReducer = combineReducers({
  transReducer,
  listViewReducer,
})

export default rootReducer
