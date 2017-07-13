import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header';
import Pagination from '../../components/Pagination/index';
import Content from '../../components/Content'
import request from '../../utils/request';
import * as ListActions from './action'

import './style.less';
class Mycnt extends Component {
    static defaultProps = {
      // header config
      header: {
        title: 'My Title',
        optionFlag: false,
        backHandler: () => {
          history.back()
          console.log('backHandler for ListView');
        },
        optionHandler: () => {
          console.log('222');
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

    render(){
        const { loadStatus, list, pageNo, action } = this.props
console.log('list', list);
        return (
            <div ref='listDom' className="view">
            <Header type={'header'}
            title={this.props.header.title}
            backHandler={this.props.header.backHandler}
            optionText={this.props.header.optionText}
                />
            <Content>
                    {
                      list.length > 0 &&
                      <ArticleList articles={list} {...this.props}></ArticleList>
                    }
                </Content>
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
    console.log('a', articles);
    return (
      <div>
        <div className="my-list">
          {
            articles.map((obj, idx) => {
              return (
                <div className="mycnt-item"
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
  const { myCntReducer } = state
  return {
    loadStatus: myCntReducer.loadStatus,
    data: myCntReducer.data, // 当前request data
    list: myCntReducer.list || [], // 所有列表数据
    pageNo: myCntReducer.pageNo,
    isFetching: myCntReducer.isFetching,
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
)(Mycnt)
