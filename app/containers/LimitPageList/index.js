import React, { Component, PropTypes } from 'react'
import Header from '../../components/Header/Header'
import Pagination from '../Pagination/index'
import request from '../../utils/request'
import Pager from '../../utils/pager'

/**
 * Limit分页列表
 */
export default class LimitPageList extends Component {

  state = {
    loadStatus: 0,
    value: null,
    start: 0,
  }

  static defaultProps = {
    header: {
      title: 'Limit分页列表',
    },
    pager: {
      limit: 10
    }
  }

  constructor(props) {
    super(props);
    this.getArticleList = this.getArticleList.bind(this);
  }

  componentDidMount() {
    this.getArticleList();
  }

  getArticleList(callback) {

    const data = this.state.value || [];
    const limit = this.props.pager.limit;
    const start = this.state.start || 0;

    // BottomLoading start loading
    this.setState({
      loadStatus: 1
    });

    let articlePromise = request('get', '/siapp-sms/open/getArticles.do', {
      start,
      limit,
    })

    articlePromise.promise.then((value) => {

      if (typeof value === 'string') {
        value = JSON.parse(value);
      }
console.log(value);
      this.setState({
        loadStatus: 0, // close Loading
        value: data.concat(value.body.articles),
        start: start + limit,
      });

      // 分页调用
      typeof callback === 'function' && callback(this.state.start);

      return this;
    })
    .catch((err) => {
      console.log(err)
    })
    .done();

  }


  render() {

    if (!this.state.value) {
      return (
        <div>
          <Header
            title={this.props.header.title}
          />
          <div>
            Loading...............
          </div>
        </div>
      )
    } else {

      let list = this.state.value;
      let loadStatus = this.state.loadStatus;
      let start = this.state.start;

      return (
        <div ref='listDom' style={this.props.style}>
          <Header
            title={this.props.header.title}
          />
          <ArticleList articles={list}></ArticleList>
          <Pagination
            loadStatus={loadStatus}
            callback={this.getArticleList}
            start={start}
            limit={this.props.pager.limit}
            {...this.props}
          />

        </div>
      )
    }
  }

}

class ArticleList extends Component {

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !(this.props == nextProps);
  }

  render() {
    let { articles } = this.props;
    return (
      <ul>
        {
          articles.map((val, idx) => {
            return (
              <li className="arcticle-item" key={idx}>{val.title}</li>
            )
          })
        }
      </ul>
    );
  }
}
