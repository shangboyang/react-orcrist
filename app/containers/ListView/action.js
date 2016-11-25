// Action 是一个对象。其中的type属性是必须的，表示 Action 的名称。
/*
const action = {
    type: 'ADD_TODO',
    payload: 'Learn Redux'
};
*/
// action Creator

export function addTodo(text) {
    return {
        type: 'ADD_TODO',
        text,
        payload: 1
    }
}

export function delTodo(text) {
    return {
        type: 'DEL_TODO',
        text,
        payload: 2
    }
}

// const action = addTodo('Learn Redux');

// console.log('action', action);

// export default action;
