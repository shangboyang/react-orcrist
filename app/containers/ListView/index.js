import React, {Component} from 'react';
import Header from '../../components/Header/Header';
import {BottomLoading} from '../../components/Loading/index';
import Pagination from '../Pagination/index';
import request from '../../utils/request';
import Pager from '../../utils/pager';
import store from '../../config/store';
import {addTodo, articleListInit, articleListLoad, articleListError} from './action';
import './style.less';
// images
import IMG_LUFFY from './images/luffy.jpg';
import IMG_YOUR_NAME_1 from './images/your_name_1.jpg';
import IMG_YOUR_NAME_2 from './images/your_name_2.jpg';
import IMG_DAO from './images/dao.jpg';

const headerCfg = {
  optionFlag: false,
  backHandler: () => {
    console.log('backHandler for ListView');
  },
  optionHandler: () => {
    console.log('optionHandler for ListView');
  }
}

// console.log('Pagination', Pagination);

export default class ListView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      value: null,
    }

    this.clickImageHandler = this.clickImageHandler.bind(this);
    this.getArticleList = this.getArticleList.bind(this);
  }

  // render()调用后执行
  componentDidMount() {

    this.getArticleList(1);

    /*
    fetch('/api/groupRT.php')
      .then(response => response.json)
      .then(value => {
        console.log(value);
        this.setState({
          loading: false,
          value
        })
      })
      .catch(error => {
        this.setState({
          loading: false,
          error
        })
      })
    */


  }

  clickImageHandler(e) {

    const value = this.state.value;
    // console.log('hello', value);
    value.push({
      name: 'Saint Seiya'
    });

    this.setState({
      loading: false,
      value
    });

  }

  getArticleList(pageNo) {

    console.log('getMoreData handler ++++++++++++++++++');

    let data = this.state.value || [];
    pageNo = this.state.pageNo || 0;

    request('get', '/api/groupRT.php', {
      pageNo
    })
    .then((value) => {

      if (typeof value === 'string') {
        value = JSON.parse(value);
      }

      this.setState({
        loading: false,
        value: data.concat(value),
        pageNo: pageNo + 1
      });

      if (pageNo === 1) {
        store.dispatch(articleListInit(this.state.pageNo));
      } else {
        store.dispatch(articleListLoad(this.state.pageNo));
      }

      store.dispatch(articleListInit(this.state.pageNo));
      console.log('Store', store.getState());

      return this;
    })
    .then((listView) => {
      store.dispatch(addTodo('what a shit~'));
    })
    .catch((err) => {
      store.dispatch(articleListError(this.state.pageNo));
    })
    .done();
  }

  render() {
    console.log('listView:::render++++++++++++++++++++++++++++++++++');
    if (this.state.loading) {
    /* loading 展示页 */
      return (
        <div>
          <Header
          title='Loading'
          backHandler={this.backHandler}
          optionHandler={this.optionHandler}
          rightText={'Option'}
          ></Header>
          <img className="loading-ace" src={IMG_YOUR_NAME_1}/>
          <div>Loading</div>
        </div>
      )
    } else {

      let list = this.state.value;
      let loadStatus = this.state.loadStatus;
      let pageNo = this.state.pageNo;

      return (
        <div>
          <Header
            title='智慧人社通1111'
            backHandler={this.backHandler}
            optionHandler={this.optionHandler}
            rightText={'Option'}
          />
          <img className="loading-ace" src={IMG_DAO}/>
          <div>道</div>
          <div className="button" onClick={this.clickImageHandler}>ADD_TODO</div>

          <ArticleList articles={list}></ArticleList>
          <Pagination loadStatus={loadStatus} callback={this.getArticleList} pageNo={pageNo}></Pagination>

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
    console.log('ArticleList::: shouldComponentUpdate~~~~~');
    return !(this.props == nextProps);
  }

  render() {
    let { articles } = this.props;
    return (
      <ul>
        {
          articles.map((val, idx) => {
            return (
              <li className="arcticle-item" key={idx}>{val.name}</li>
            )
          })
        }
      </ul>
    );
  }
}
