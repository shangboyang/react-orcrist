import React, {Component} from 'react'
import { Link } from 'react-router'
import Header from '../../components/Header'
import './style.less'
import IMG_ACE from './images/ace.jpg'
import IMG_LUFFY from './images/luffy.jpg'

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
        <NavBar
          mode="light"
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="1" type="ellipsis" />,
          ]}
        >Orcrist Bussiness Components</NavBar>
        <div className="main">
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
