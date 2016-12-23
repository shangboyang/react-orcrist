
import {createStore, combineReducers, applyMiddleware} from 'redux';
import listViewReducer from '../containers/ListView/reducer';
import loadReducer from '../containers/Loading/reducer';
import thunk from 'redux-thunk';

const reducer = {listViewReducer, loadReducer}

// Store 就是保存数据的地方，你可以把它看成一个容器。整个应用只能有一个 Store。
// let { subscribe, dispatch, getState } = createStore
// combineReducers 合成reducer
const store = createStore(
	// reducer
	combineReducers(reducer),
	// applyMiddleware(thunk, promise, logger)
	applyMiddleware(thunk)
);
// Redux 规定， 一个 State 对应一个 View。只要 State 相同，View 就相同。你知道 State，就知道 View 是什么样，反之亦然。
// const state = store.getState();

// console.log(store.getState()); // state没有被监听 每次要获取最新的
export default store;
