import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import route from './config/route';
import './css/resets.less';

import store from './config/store';

// require('es6-promise').polyfill();

//重置浏览器默认样式
// import './css/common.less'; //css文件
// import 'flex-css-layout';
// import './iconfont/iconfont.css'; //字体图标文件

store.subscribe(function () {
    // console.log('subscribe...::::....' + store.getState());
});

ReactDOM.render(
    <Provider store={store}>{route}</Provider>,
    document.getElementById('app')
)
