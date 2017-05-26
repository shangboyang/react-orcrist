import React, { Component } from 'react'
import './loading.less'

export default class BottomLoading extends Component {

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
