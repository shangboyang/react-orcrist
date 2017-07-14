import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import Pagination from '../../components/Pagination'
import request from '../../utils/request'
import Pager from '../../utils/pager'
import PullToRefresh from '../../components/PullToRefresh'
import * as AppActions from '../App/action'

console.log('AppActions', AppActions);
/**
 * Limit分页列表
 */
class LimitPageList extends Component {

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
  handleRefresh(resolve, reject) {
    // do some async code here
    if (true) {
      console.log('resolve~~~~~~~');
      // resolve();
    } else {
      console.log('reject~~~~~~')
      // reject();
    }
  }

  render() {
    const { ListActions } = this.props
    if (!this.state.value) {
      return (
        <div>
          <Header
            title={this.props.header.title}
          />
          <PullToRefresh
            onRefresh={this.handleRefresh}
            className="your-own-class-if-you-want"
            style={{textAlign: 'center'}}>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
            <div>
              Loading...............
            </div>
          </PullToRefresh>
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
            back={() => {
              ListActions.transRight()
              history.back()
            }}
          />
          <PullToRefresh
            onRefresh={this.handleRefresh}
            className="your-own-class-if-you-want"
            style={{textAlign: 'center'}}>
            <ArticleList articles={list}></ArticleList>
            <Pagination
              loadStatus={loadStatus}
              callback={this.getArticleList}
              start={start}
              limit={this.props.pager.limit}
              {...this.props}
            />
          </PullToRefresh>
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
export default connect(function(state) {
  return {}
}, function(dispatch) {
  return {
    ListActions: bindActionCreators(AppActions, dispatch)
  }
})(LimitPageList)
