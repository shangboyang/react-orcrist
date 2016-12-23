/************************************************/
/********** Reducer 控制State——业务逻辑 ***********/
/************************************************/

import {addTodo, delTodo} from './action';
import {
  LIST_ADD,
  LIST_DEL,
  GET_ARTICLE_LIST_INIT,
  GET_ARTICLE_LIST_LOAD,
  GET_ARTICLE_LIST_SUCCESS,
  GET_ARTICLE_LIST_ERROR
} from './constant';

const initialState = {
  loadStatus: 0
}; // 可以是Number 或者字符串 或对象
/*
let state = {
    isFetching: false,
    lastUpdated: 'xxx'
}
*/
const listViewReducer = (state = initialState, action) => {
  // console.log('init reducer', action);
  switch (action.type) {
    case LIST_ADD:
      return state.loadStatus + action.payload;
    case LIST_DEL:
      return state.loadStatus + action.payload;
    case GET_ARTICLE_LIST_INIT:
      return action.loadStatus;
    case GET_ARTICLE_LIST_LOAD:
      return action.loadStatus;
    case GET_ARTICLE_LIST_SUCCESS:
      return action.loadStatus;
    case GET_ARTICLE_LIST_ERROR:
      return action.loadStatus;
    default:
      return state;
  }
};

// 手工调用reducer函数 由Store.dispatch来管理
// const state = reducer(1, addTodo('what?'));

export default listViewReducer;
