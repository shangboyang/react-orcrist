
import request from '../../utils/request';
import {
    START_LOAD_LISTVIEW,
    FINISH_LOAD_LISTVIEW,
    REQUEST_DATA,
} from './constant';


// action Creator 包含编写所有action同步请求等动作
// Action 返回一个对象。其中的type属性是必须的，表示 Action 的名称。 TYPE唯一
export function startLoadData() {
  return {
    type: START_LOAD_LISTVIEW
  }
}

export function finishLoadData() {
  return {
    type: FINISH_LOAD_LISTVIEW
  }
}

export function requestData() {
  return {
    type: REQUEST_DATA
  }
}

function fetchArticleList() {
  return dispatch => {
    let articlePromise = request('get', '/cms/open/newArticles', {
      pageNo
    })

    articlePromise.promise.then((data) => {

      if (typeof data === 'string') {
        value = JSON.parse(data);
      }

      this.setState({
        loadStatus: 0, // close Loading
        value: data.concat(value.body.dataList),
        pageNo: pageNo + 1
      });

      // 分页调用
      // typeof callback === 'function' && callback(this.state.pageNo);

      return this;
    })
    .catch((err) => {
      console.log(err)
    })
    .done();

    return
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
