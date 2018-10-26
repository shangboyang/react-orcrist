import {
  TRANSITION_LEFT,
  TRANSITION_RIGHT
} from '@/containers/App/constants';

const initialState = {
  transName: 'right'
};

const appReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case TRANSITION_LEFT:
      newState = Object.assign({}, state, {
        transName: 'left'
      });
      break;
    case TRANSITION_RIGHT:
      newState = Object.assign({}, state, {
        transName: 'right'
      });
      break;
    default:
      newState = state;
  }
  return newState;
};

export default appReducer;
