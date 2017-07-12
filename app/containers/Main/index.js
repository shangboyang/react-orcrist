import React, {Component} from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';
import Header from '../../components/Header/Header';
import '../../components/Header/Header.less';
import './style.less';
import IMG_ACE from './images/ace.jpg';
import IMG_LUFFY from './images/luffy.jpg';

import { Button, NavBar, Icon, NoticeBar } from 'antd-mobile';

export default class Loading extends Component {

  static defaultProps = {
    // header config
    header: {
      title: 'React Ocrist',
    }
  };

  render() {
    return (
      <div>
        <Header
          title={this.props.header.title}
        />
        <NavBar leftContent="back"
          mode="light"
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >NavBar</NavBar>
        <div className="main">
          <img className="loading-ace" src={IMG_LUFFY}/>
          <img className="loading-ace" src={IMG_ACE}/>
          <Link to='list' activeStyle={{color: 'red'}}>ListView</Link>
          &nbsp;&nbsp;&nbsp;
          <Link to='limit' activeStyle={{color: 'red'}}>ListView by limit</Link>
          <Link to='propsCb' activeStyle={{color: 'red'}}>父子组件调用</Link>
          <Button>按钮</Button>
          <Button className="btn" type="primary">primary 按钮</Button>
          <Link to='mycnt' activeStyle={{color: 'red'}}>Test Parents</Link>

        </div>
        <NoticeBar mode="closable" icon={<Icon type="check-circle-o" size="xxs" />}>
          Customized icon.
        </NoticeBar>
      </div>
    )
  }
}
