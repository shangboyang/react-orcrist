import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '@/components/Header';
import Pagination from '@/components/Pagination';
import request from '@/utils/request';

import * as AppActions from '../App/action';


/**
 * Limit分页列表
 */
class LimitPageList extends Component {
  constructor(props) {
    super(props);
    this.pager = {
      limit: 10
    };
    this.state = {
      loadStatus: 0,
      value: null,
      start: 0,
    };
    this.getArticleList = this.getArticleList.bind(this);
  }

  componentDidMount() {
    this.getArticleList();
  }

  getArticleList(callback) {
    const data = this.state.value || [];
    const { limit } = this.pager;
    const start = this.state.start || 0;

    // BottomLoading start loading
    this.setState({
      loadStatus: 1
    });

    const articlePromise = request('get', '/siapp-sms/open/getArticles.do', {
      start,
      limit,
    });

    articlePromise.promise.then((value) => {
      let v;
      if (typeof value === 'string') {
        v = JSON.parse(value);
      }

      this.setState({
        loadStatus: 0, // close Loading
        value: data.concat(v.body.articles),
        start: start + limit,
      });

      // 分页调用
      typeof callback === 'function' && callback(this.state.start);

      return this;
    }).catch(() => {
    }).done();
  }
  

  render() {
    const { ListActions } = this.props;
    if (!this.state.value) {
      return (
        <div>
          <Header
            title={this.props.header.title}
          />
          
        </div>
      );
    }

    const {
      value,
      loadStatus,
      start
    } = this.state;

    return (
      <div ref='listDom' style={this.props.style}>
        <Header
          title={this.props.header.title}
          back={() => {
            ListActions.transRight();
            history.back();
          }}
        />
        <ArticleList articles={value}></ArticleList>
        <Pagination
          loadStatus={loadStatus}
          callback={this.getArticleList}
          start={start}
          limit={this.props.pager.limit}
          {...this.props}
        />
      </div>
    );
  }
}

class ArticleList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { articles } = this.props;
    return (
      <ul>
        {
          articles.map((val, idx) => (
            <li className="arcticle-item" key={idx}>{val.title}</li>
          ))
        }
      </ul>
    );
  }
}
export default connect(() => ({}), dispatch => ({
  ListActions: bindActionCreators(AppActions, dispatch)
}))(LimitPageList);
