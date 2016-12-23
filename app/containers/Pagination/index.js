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


    console.log('Pagination', props);
    console.log(status);
  }

  componentWillMount() {
    console.log('hello componentWillMount');
  }

  componentDidMount() {

    const { loadStatus, callback } = this.props;

    const pager = new Pager(this.refs.pager, {
      callback
    });

    console.log('componentDidMount loadStatus::::', this.state.loadStatus);
  }

  shouldComponentUpdate(nextProps, nextState) {

    if (nextState.loadStatus > 0) {
      return false;
    }

    return true;

  }

  render() {

    const { uri, pageNo, pageSize } = this.props;

    return (
      <div className="pager pager-line" ref="pager">
        {this.props.text}
        <BottomLoading status="0" msg="上拉加载更多"></BottomLoading>
      </div>
    )
  }

};

/*
Pagination.propTypes = {
  uri   : PropTypes.string.isRequired,
  pageNo: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired
};
*/
