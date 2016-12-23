import React, {Component} from 'react';
import './style.less';

class BottomLoading extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'load load-status-' + this.props.status}>
          <div className="load-msg">{this.props.msg}</div>
      </div>
    )
  }
}

class Loading extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          Loading
      </div>
    )
  }
}

export {Loading, BottomLoading};
