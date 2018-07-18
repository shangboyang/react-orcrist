import {
  FETCH_DATA_START,
  FETCH_DATA_END
} from '@/containers/Main/constants';

const initialState = {
  fetching: false,
  mainData: {}
};

const mainReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case FETCH_DATA_START:
      newState = Object.assign({}, state, {
        fetching: action.fetching
      });
      break;
    case FETCH_DATA_END:
      newState = Object.assign({}, state, {
        mainData: action.data || {}
      });
      break;
    default:
      newState = Object.assign({}, state);
  }
  return newState;
};

export default mainReducer;
