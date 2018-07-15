import React, { Component } from 'react';
import {
  NavBar,
  Icon
} from 'antd-mobile';
import Connect from '@/containers/Main/connect'
import Content from '@/components/Content';
import '@/containers/Main/style.less';

class Main extends Component {
  render() {
    // const { MainActions } = this.props;

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

          <div class="content">Welcome to use react-orcrist!</div>

        </Content>

      </div>
    );
  }
}


export default Connect(Main);
