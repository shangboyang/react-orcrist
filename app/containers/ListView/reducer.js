/************************************************/
/********** Reducer 控制State——业务逻辑 ***********/
/************************************************/

import { startLoadData, finishLoadData } from './action';
import {
  START_LOAD_LISTVIEW,
  FINISH_LOAD_LISTVIEW
} from './constant';

const initialState = {
  loadStatus: 0,
  list: null,
}; // 可以是Number 或者字符串 或对象

const listViewReducer = (state = initialState, action) => {
  // console.log('init reducer', action);
  switch (action.type) {
    case START_LOAD_LISTVIEW:
    console.log('EEESfdsafds');
      state.loadStatus = 1;
      return state.loadStatus
    case FINISH_LOAD_LISTVIEW:
      state.loadStatus = 0;
      return state.loadStatus
    default:
      return state;
  }
};

export default listViewReducer;
