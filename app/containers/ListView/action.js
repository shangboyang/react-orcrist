// Action 是一个对象。其中的type属性是必须的，表示 Action 的名称。 TYPE唯一
import {
    LIST_ADD,
    LIST_DEL
} from './constant';
/*
const action = {
    type: 'ADD_TODO',
    payload: 'Learn Redux'
};
*/
// action Creator

export function addTodo(text) {
    return {
        type: LIST_ADD,
        text,
        payload: 5
    }
}

export function delTodo(text) {
    return {
        type: LIST_DEL,
        text,
        payload: 2
    }
}

// const action = addTodo('Learn Redux');

// console.log('action', action);

// export default action;
