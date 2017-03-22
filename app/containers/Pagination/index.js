import React, {Component, PropTypes} from 'react';
import Pager from '../../utils/pager';
import request from '../../utils/request';
import {BottomLoading} from '../../components/Loading/index';
import './style.less';

export default class Pagination extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loadStatus: 0
    };
  }

  componentWillMount() {
    // console.log('hello componentWillMount');
  }

  componentDidMount() {

    const { loadStatus, callback } = this.props;

    const pager = new Pager(this.refs.pager, {
      callback
    });

    // console.log('componentDidMount loadStatus::::', this.state.loadStatus);
  }

  shouldComponentUpdate(nextProps, nextState) {

    // if (nextState.loadStatus > 0) {
    //   return false;
    // }

    return true;

  }

  render() {

    const { loadStatus } = this.props;
    // console.log('LOAD_STATUS::::' + loadStatus);
    return (
      <div className="pager" ref="pager">
        <div className="pager-line"></div>
        {this.props.text}
        <BottomLoading status={loadStatus} msg="上拉加载更多"></BottomLoading>
      </div>
    )
  }

};

Pagination.propTypes = {
  loadStatus: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired
};
