/** ********************************************* */
/** ******** Reducer 控制State——业务逻辑 ********** */
/** ********************************************* */
import {
  TRANSITION_LEFT,
  TRANSITION_RIGHT
} from '@/containers/App/constants';

const initialState = {
  transName: 'right'
};

const transReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRANSITION_LEFT:
      return Object.assign({}, state, {
        transName: 'left'
      });
    case TRANSITION_RIGHT:
      return Object.assign({}, state, {
        transName: 'right'
      });
    default:
      return state;
  }
};

export default transReducer;
