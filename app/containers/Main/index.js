import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Header from '../../components/Header'
import Content from '../../components/Content'
import './style.less'
import IMG_ACE from './images/ace.jpg'
import IMG_LUFFY from './images/luffy.jpg'
import * as AppActions from '../App/action'

import { Button, NavBar, Icon, NoticeBar, Accordion, List } from 'antd-mobile';

class Main extends Component {

  static defaultProps = {};

  render() {

    const { MainActions } = this.props

    return (
      <div>

        <NavBar
          mode="light"
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="1" type="ellipsis" />,
          ]}
        >Orcrist Boilerplate</NavBar>
        <Content>

          <NoticeBar mode="closable" icon={<Icon type="check-circle-o" size="xxs" />}>
            Orcrist是一个React样板工程.
          </NoticeBar>
          <img className="loading-ace" src={IMG_ACE}/>

          <Accordion defaultActiveKey="2" className="my-accordion" onChange={this.onChange}>
            <Accordion.Panel header="基础组件">
              <List className="my-list">
                <List.Item>Header + Content</List.Item>
                <List.Item>Pagination 分页</List.Item>
                <List.Item>PullToRefresh 下拉刷新</List.Item>
                <List.Item>Loading（缺）</List.Item>
              </List>
            </Accordion.Panel>

            <Accordion.Panel header="业务组件" className="my-accordion">
              <List className="my-list">
                <List.Item>Content 1</List.Item>
                <List.Item>Content 2</List.Item>
                <List.Item>Content 3</List.Item>
              </List>
            </Accordion.Panel>

            <Accordion.Panel header="独立Demo" className="my-accordion">
              <List className="my-list">
                <List.Item arrow="horizontal" onClick={() => { MainActions.transLeft(); this.props.router.push('/list'); }}>分页列表 pageNo ver.</List.Item>
                <List.Item arrow="horizontal" onClick={() => { MainActions.transLeft(); this.props.router.push('/limit'); }}>分页列表 pageStart + limit ver.</List.Item>
                <List.Item arrow="horizontal" onClick={() => { MainActions.transLeft(); this.props.router.push('/props-callback'); }}>父子组件通信</List.Item>
              </List>
            </Accordion.Panel>

            <Accordion.Panel header="附录" className="my-accordion">
              <List className="my-list">
                <List.Item arrow="horizontal">Ant antd-mobile</List.Item>
              </List>
            </Accordion.Panel>
          </Accordion>

        </Content>

      </div>
    )
  }
}

// redux ‘s state 非 react state
function mapStateToProps(state) {
  return {}
}

function mapActionToProps(dispatch) {
  return {
    MainActions: bindActionCreators(AppActions, dispatch)
  }

}

export default connect(mapStateToProps, mapActionToProps)(Main)
