import React, {Component, PropTypes} from 'react'
import BottomLoading from '../../components/BottomLoading/loading'
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

    const { pageNo, start, limit, callback } = this.props;

    const pager = new Pager(this.refs.pager, {
      pageNo,
      start,
      limit,
      callback,
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
