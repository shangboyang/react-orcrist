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
    // this.clickImageHandler = this.clickImageHandler.bind(this);
    this.getArticleList = this.getArticleList.bind(this);

  }

  // render()调用后执行
  componentDidMount() {

    const { dispatch, requestData } = this.props

    console.log('Props', this.props)

    console.log('d', dispatch, 'requestData', requestData);

    this.getArticleList();
  }


  getArticleList(pageNo, callback) {

  }

  render() {

    if (!false) {
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
  console.log('State', state);
  return {
    loadStatus: state.loadStatus,
    list: state.data,
  }
}

function mapActionToProps(dispatch) {
  const action = bindActionCreators(ListActions, dispatch)
  console.log('action:::', action);
  const handler = () => console.log('hello')
  handler()
  return {
    action
  }
}

export default connect(
  mapStateToProps,
  mapActionToProps,
)(ListView)
