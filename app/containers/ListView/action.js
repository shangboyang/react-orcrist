
import request from '../../utils/request'
import {
  START_REQUEST_LISTVIEW,
  END_REQUEST_LISTVIEW,
} from './constant';

// action Creator 包含编写所有action同步请求等动作
// Action 返回一个对象。其中的type属性是必须的，表示 Action 的名称，TYPE唯一
export function startRequest(pageNo, isFetching) {
  return {
    type: START_REQUEST_LISTVIEW,
    pageNo,
    isFetching,
  }
}

export function endRequest(pageNo, data, list, isFetching) {
  return {
    type: END_REQUEST_LISTVIEW,
    pageNo,
    data,
    list,
    isFetching,
  }
}

export function requestArticleList(callback) {

  return (dispatch, getState) => {

    let isFetching = getState().listViewReducer.isFetching
    // 必须再结束上次请求
    if (!isFetching) {
      let pageNo = getState().listViewReducer.pageNo || 1
      let regions = '440300' // 深圳
      dispatch(startRequest(pageNo, isFetching = true))

      // Test bottom loadding
      let articlePromise = request('get', '/siapp-sms/open/getArticles.do', {
        regions,
        pageNo
      })
      setTimeout(function() {
        return articlePromise.promise.then((data) => {
          let pageNo = getState().listViewReducer.pageNo || 1
          let list = getState().listViewReducer.list || []

          if (typeof data === 'string') {
            data = JSON.parse(data);
          }

          if (data.body && data.body.articles) {
            list = list.concat(data.body.articles);
            pageNo++;

            // 分页调用
            typeof callback === 'function' && callback(pageNo);
          }
          // 没有更多数据??????
          if (data.body && data.body.articles && pageNo > 1) {

          }

          dispatch(endRequest(pageNo, data, list, isFetching = false));
        })
        .catch(err => {
          console.log(err);
        })
        .done()

      }, 3000)

    }
  }
}
