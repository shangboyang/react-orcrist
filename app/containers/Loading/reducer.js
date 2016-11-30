import {addTodo, delTodo} from './action';

const initialState = 0; // 可以是Number 或者字符串 或对象
const loadReducer = (state = initialState, action) => {
    // console.log('init reducer', action);
    switch (action.type) {
        case 'LOAD_ADD_TODO':
            console.log('add');
            return state + action.payload;
        case 'LOAD_DEL_TODO':
            return state + action.payload;
        default:
            return state;
    }
};

// 手工调用reducer函数 由Store.dispatch来管理
// const state = reducer(1, addTodo('what?'));

export default loadReducer;
