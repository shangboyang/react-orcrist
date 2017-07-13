import React, {Component, PropTypes} from 'react'
import BottomLoading from '../BottomLoading'
import Pager from '../../utils/pager'
import request from '../../utils/request'
import './style.less'

export default class Pagination extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

    const { pageNo, start, limit, callback } = this.props;
    // domObj or selector
    const pager = new Pager('.pager-line', {
      pageNo,
      start,
      limit,
      callback,
    });

  }

  render() {
    return (
      <div className="pager" ref="pager">
        <div className="pager-line"></div>
        <BottomLoading {...this.props}></BottomLoading>
      </div>
    )
  }


};

Pagination.propTypes = {
  loadStatus: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired
};
