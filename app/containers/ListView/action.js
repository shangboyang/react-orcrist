
import request from '../../utils/request';
import {
    START_REQUEST_LISTVIEW,
    END_REQUEST_LISTVIEW,
} from './constant';


// action Creator 包含编写所有action同步请求等动作
// Action 返回一个对象。其中的type属性是必须的，表示 Action 的名称。 TYPE唯一
export function startRequest(pageNo) {
  return {
    type: START_REQUEST_LISTVIEW,
    pageNo,
  }
}

export function endRequest(pageNo, data, list) {
  return {
    type: END_REQUEST_LISTVIEW,
    pageNo,
    data,
    list,
  }
}

export function requestArticleList(pageOpt, callback) {
  return (dispatch, getState) => {

    let pageNo = getState().listViewReducer.pageNo || 1

    dispatch(startRequest(pageNo))

    let articlePromise = request('get', '/cms/open/newArticles', {
      pageNo
    })

    return articlePromise.promise.then((data) => {

      let pageNo = getState().listViewReducer.pageNo || 1
      let list = getState().listViewReducer.list || []

      if (typeof data === 'string') {
        data = JSON.parse(data);
      }

      list = list.concat(data.body.dataList);
      pageNo++;
      
      // 分页调用
      typeof callback === 'function' && callback(pageNo);


      dispatch(endRequest(pageNo, data, list));

    })
    .catch(err => {})
    .done()

  }
}

/************************************************************/
/* Action Creator 包含编写所有action同步请求等动作 */
/* Normal ActionCreater return {}，Special ActionCreater return function */
/* 使用redux-thunk polyfill
/************************************************************/


// const action = addTodo('Learn Redux');

// console.log('action', action);

// export default action;
