import { combineReducers } from 'redux'
import transReducer from '../containers/App/reducer'
import listViewReducer from '../containers/ListView/reducer'
import myCntReducer from '../containers/Mycnt/reducer'

const rootReducer = combineReducers({
  transReducer,
  listViewReducer,
  myCntReducer,
})

export default rootReducer
