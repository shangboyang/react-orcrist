import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import route from './config/route';
import ListView from './containers/ListView/ListView';

// import store from './config/store';

import './css/resets.less'; //重置浏览器默认样式
import 'flex-css-layout';
import './css/style.less'; //css文件
import IMG_USER from './css/images/user-bg.jpg';
import IMG_TIMEG from './css/images/timg.jpg';
// import './iconfont/iconfont.css'; //字体图标文件

/*
store.subscribe(function () {
    //    console.log(store.getState());
});
*/

ReactDOM.render(

    <div className='common-header'>
        React react react
        <img src={IMG_TIMEG} width="100" height="100"/>
        <ListView/>
    </div>,
    document.body.appendChild(document.getElementById('app'))
);
