import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header/Header';
import Pagination from '../Pagination/index';
import request from '../../utils/request';
import * as ListActions from './action'
import '../../css/common.less'
import './style.less'
import IMG_LUFFY from './images/luffy.jpg';
import IMG_YOUR_NAME_1 from './images/your_name_1.jpg';
import IMG_YOUR_NAME_2 from './images/your_name_2.jpg';
import IMG_DAO from './images/dao.jpg';


class ListView extends Component {


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
    console.log('eee');
    // this.clickImageHandler = this.clickImageHandler.bind(this);
    this.getArticleList = this.getArticleList.bind(this);

  }

  // render()调用后执行
  componentDidMount() {
    const { action } = this.props

    action.requestArticleList() // action
  }


  getArticleList(pageNo, callback) {}

  render() {

    const { loadStatus, list, pageNo, action } = this.props

    return (
      <div ref='listDom' style={this.props.style}>
        <Header
          title={this.props.header.title}
          backHandler={this.props.header.backHandler}
          optionHandler={this.props.header.optionHandler}
          optionText={'操作'}
        />
        {
          list.length > 0 &&
          <ArticleList articles={list}></ArticleList>
        }
        {
          list.length > 0 && loadStatus > -1 && <Pagination
            loadStatus={loadStatus}
            callback={action.requestArticleList}
            pageNo={pageNo}
            {...action}>
          </Pagination>
        }

      </div>
    )

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
// redux ‘s state 非 react state
function mapStateToProps(state) {
  const { listViewReducer } = state
  return {
    loadStatus: listViewReducer.loadStatus,
    data: listViewReducer.data, // 当前request data
    list: listViewReducer.list || [], // 所有列表数据
    pageNo: listViewReducer.pageNo,
  }
}

function mapActionToProps(dispatch) {
  return {
    action: bindActionCreators(ListActions, dispatch)
  }

}

export default connect(
  mapStateToProps,
  mapActionToProps,
)(ListView)
