import React, {Component, PropTypes} from 'react'
import Pager from '../../utils/pager'
import request from '../../utils/request'
import './style.less'


export default class Pagination extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loadStatus: 0
    };
  }

  componentDidMount() {

    const { loadStatus, callback } = this.props;

    const pager = new Pager(this.refs.pager, {
      callback
    });

  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {

    const { loadStatus, text } = this.props;
    return (
      <div className="pager" ref="pager">
        <div className="pager-line"></div>
        <BottomLoading status={loadStatus} msg="上拉加载更多"></BottomLoading>
      </div>
    )
  }

};

Pagination.propTypes = {
  loadStatus: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired
};

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
