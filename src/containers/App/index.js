import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // 23k
import Connect from '@/containers/App/connect';
import '@/containers/App/style.less';

const App = props => <ReactCSSTransitionGroup
  component="div"
  transitionName = {
    props.transName || 'right'
  }
  transitionEnterTimeout={1000}
  transitionLeaveTimeout={300}
  style={{ height: '100%', width: '100%' }}>

  <div
    key={props.location.pathname}
    style={{ height: '100%', width: '100%' }}>
    {props.children}
  </div>

</ReactCSSTransitionGroup>;

export default Connect(App);
