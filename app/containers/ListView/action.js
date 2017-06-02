// Action 是一个对象。其中的type属性是必须的，表示 Action 的名称。 TYPE唯一
import {
    START_LOAD_LISTVIEW,
    FINISH_LOAD_LISTVIEW,
} from './constant';

/*
const action = {
    type: 'ADD_TODO',
    payload: 'Learn Redux'
};
*/
// action Creator 包含编写所有action同步请求等动作

export function startLoadData() {
  console.log('sssss');
  return {
    type: START_LOAD_LISTVIEW
  }
}

export function finishLoadData() {
  return {
    type: FINISH_LOAD_LISTVIEW
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
