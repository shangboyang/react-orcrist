import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import route from '@/config/route';
import configureStore from '@/config/store';
import '@/css/resets.less';

require('@/utils/polyfill').execute();

const store = configureStore();
// 添加Global订阅事件
store.subscribe(() => {});

ReactDOM.render(
  <Provider store={store}>{route}</Provider>,
  document.getElementById('app')
);
