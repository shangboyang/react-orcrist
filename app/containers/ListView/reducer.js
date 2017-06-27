/************************************************/
/********** Reducer 控制State——业务逻辑 ***********/
/************************************************/
import {
  START_REQUEST_LISTVIEW,
  END_REQUEST_LISTVIEW
} from './constant';

/*
const initialState = {
    number: 1,
    lists: [
        {text: '整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。'},
        {text: '惟一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。'},
        {text: '为了描述 action 如何改变 state tree ，你需要编写 reducers。'},
        {text: '就是这样，现在你应该明白 Redux 是怎么回事了。'}
    ],
    data: []
}
*/
 
const initialState = {
  loadStatus: 0,
  list: null,
  pageNo: 1,
  isFetching: false,
}; // 可以是Number 或者字符串 或对象

const listViewReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_REQUEST_LISTVIEW:
      return Object.assign({}, state, {
        loadStatus: 1,
        pageNo: action.pageNo || state.pageNo,
        isFetching: action.isFetching,
      })
    case END_REQUEST_LISTVIEW:
      return Object.assign({}, state, {
        loadStatus: 0,
        pageNo: action.pageNo,
        data: action.data,
        list: action.list,
        isFetching: action.isFetching,
      })
    default:
      return state;
  }
};

export default listViewReducer;
