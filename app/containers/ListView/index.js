import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header/Header';
import Pagination from '../Pagination/index';
import request from '../../utils/request';
import Pager from '../../utils/pager';
import store from '../../config/store';
import {addTodo, articleListInit, articleListLoad, articleListError} from './action';
import * as ListActions from './action'
import '../../css/common.less'
import './style.less'
import IMG_LUFFY from './images/luffy.jpg';
import IMG_YOUR_NAME_1 from './images/your_name_1.jpg';
import IMG_YOUR_NAME_2 from './images/your_name_2.jpg';
import IMG_DAO from './images/dao.jpg';


class ListView extends Component {

  state = {
    loadStatus: 0,
    error: null,
    value: null,
  }

  static defaultProps = {
    // header config
    header: {
      title: 'Endless List',
      optionFlag: false,
      backHandler: () => {
        history.back()
        console.log('backHandler for ListView');
      },
      optionHandler: () => {
        console.log('optionHandler for ListView');
      }
    }

  };

  static propTypes = {
    header: React.PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    // this.clickImageHandler = this.clickImageHandler.bind(this);
    this.getArticleList = this.getArticleList.bind(this);
  }

  // render()调用后执行
  componentDidMount() {
    this.getArticleList();
  }

  // clickImageHandler(e) {
  //
  //   const value = this.state.value;
  //   // console.log('hello', value);
  //   value.push({
  //     name: 'Saint Seiya'
  //   });
  //
  //   this.setState({
  //     loadStatus: 0,
  //     value
  //   });
  //
  // }

  getArticleList(pageNo, callback) {

    const data = this.state.value || [];
    pageNo = this.state.pageNo || 0;
    // BottomLoading start loading
    this.setState({
      loadStatus: 1
    });

    // let articlePromise = request('get', '/api', {
    //   pageNo
    // })

    // let articlePromise = request('get', '/cms/open/newArticles', {
    //   pageNo
    // })

    // let articlePromise = request('get', '/mhis-siapp/security/accountQuery/accountQuery.do', {
    //   pageNo
    // })
    console.log('store', store.getState());
    let articlePromise = request('get', '/cms/open/newArticles', {
      pageNo
    })

    articlePromise.promise.then((value) => {
console.log('value', value);
      if (typeof value === 'string') {
        value = JSON.parse(value);
      }

      this.setState({
        loadStatus: 0, // close Loading
        value: data.concat(value.body.dataList),
        pageNo: pageNo + 1
      });

      if (pageNo === 1) {
        store.dispatch(articleListInit(this.state.pageNo));
      } else {
        store.dispatch(articleListLoad(this.state.pageNo));
      }

      store.dispatch(articleListInit(this.state.pageNo));
      // 分页调用
      typeof callback === 'function' && callback(this.state.pageNo);

      return this;
    })
    .catch((err) => {
      console.log(err)
      console.log(this.state);
      // store.dispatch(articleListError(this.state.pageNo));
    })
    .done();

  }

  render() {

    if (!this.state.value) {
console.log(this.state.value);
      return (

        <div ref="listDom" style={this.props.style}>
          <Header
            title={this.props.header.title}
            backHandler={this.backHandler}
            optionHandler={this.optionHandler}
            optionText={'操作'}
          >
          </Header>
          <img className="loading-ace" src={IMG_YOUR_NAME_1}/>
          <div>Loading</div>
          <div className="button" onClick={this.clickImageHandler}>ADD_TODO</div>
        </div>

      )

    } else {

      let list = this.state.value;
      let loadStatus = this.state.loadStatus;
      let pageNo = this.state.pageNo;

      let action = {
        a: 1,
        b: 2,
        c: 3
      }

console.log('action', action);
      return (
        <div ref='listDom' style={this.props.style}>
          <Header
            title={this.props.header.title}
            backHandler={this.props.header.backHandler}
            optionHandler={this.props.header.optionHandler}
            optionText={'操作'}
          />
          <img className="loading-ace" src={IMG_DAO}/>

          <ArticleList articles={list} {...action}></ArticleList>
          <Pagination
            loadStatus={loadStatus}
            callback={this.getArticleList}
            pageNo={pageNo}>
          </Pagination>

        </div>
      )
    }
  }
}

class ArticleList extends Component {

  constructor(props) {
    super(props);

    console.log('this prop', props);
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
// redux ‘s state 非 react state
function mapStateToProps(state) {
  console.log(state);
  return {
    list: state.value
  }
}

function mapActionToProps(dispatch) {
  return {
    actions: bindActionCreators(ListActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapActionToProps
)(ListView)
