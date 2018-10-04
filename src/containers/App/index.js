import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Connect from '@/containers/App/connect';
import '@/containers/App/style.less';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { transName } = this.props;
    
    return (
      <ReactCSSTransitionGroup
        component="div"
        transitionName={ transName || 'right' }
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={300}
        style={{ height: '100%', width: '100%' }}>

        <div
          key={this.props.location.pathname}
          style={{ height: '100%', width: '100%' }}>
          {this.props.children}
        </div>

      </ReactCSSTransitionGroup>
    );
  }
}


export default Connect(App);
