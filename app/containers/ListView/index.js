import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import Pagination from '../../components/Pagination'
import request from '../../utils/request'
import * as AppActions from '../App/action'
import * as ListActions from './action'
import './style.less'
import IMG_LUFFY from './images/luffy.jpg'
import IMG_YOUR_NAME_1 from './images/your_name_1.jpg'
import IMG_YOUR_NAME_2 from './images/your_name_2.jpg'
import IMG_DAO from './images/dao.jpg'

// 合并所有Action
const ListViewActions = Object.assign({}, AppActions, ListActions)

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
  }

  // render()调用后执行
  componentDidMount() {
    const { action } = this.props
    action.requestArticleList() // action

  }

  render() {

    const { loadStatus, list, pageNo, action } = this.props

    return (
      <div ref='listDom' style={{height:"100%", width: "100%"}} >
        <Header
          title={this.props.header.title}
          back={()=> {
            action.transRight()
            this.props.header.backHandler()
          }}
          optionHandler={this.props.header.optionHandler}
          optionText={'操作'}
          {...action}
        />
        <div>ListView~~~~~~~~~~</div>
        {
          list.length > 0 &&
          <ArticleList articles={list} {...this.props}></ArticleList>
        }
      </div>
    )

  }

}

class ArticleList extends Component {

  constructor(props) {
    super(props);
  }

  goDetailHandler(...param) {
    this.props.router.push('/props-callback')
  }

  render() {
    const { articles, loadStatus, pageNo, action } = this.props
    return (
      <div>
        <div className="art-list">
          {
            articles.map((obj, idx) => {
              return (
                <div className="arcticle-item"
                  key={idx}
                  onClick={this.goDetailHandler.bind(this, obj, idx)}>
                  {obj.title}
                </div>
              )
            })
          }
        </div>
        {
          articles.length > 0 && loadStatus > -1 && <Pagination
            loadStatus={loadStatus}
            callback={action.requestArticleList}
            pageNo={pageNo}
            {...action}>
          </Pagination>
        }
      </div>
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
    isFetching: listViewReducer.isFetching,
  }
}

function mapActionToProps(dispatch) {
  return {
    action: bindActionCreators(ListViewActions, dispatch)
  }

}

export default connect(
  mapStateToProps,
  mapActionToProps,
)(ListView)
