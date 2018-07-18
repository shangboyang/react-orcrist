import React, { Component } from 'react';
import {
  NavBar,
  Icon
} from 'antd-mobile';
import Connect from '@/containers/Main/connect';
import Content from '@/components/Content';
import '@/containers/Main/style.less';
import IMG_ACE from '@/containers/Main/images/ace.jpg';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { Actions } = this.props;

    Actions.fetchData();
  }

  render() {
    const {
      Actions
    } = this.props;

    return (
      <div>
        <NavBar
          mode="light"
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="1" type="ellipsis" onClick={() => {
              Actions.fetchData();
            }} />,
          ]}
        >Orcrist Boilerplate</NavBar>
        <Content>
          <img src={IMG_ACE}></img>
          <div className="content-text">Welcome to use react-orcrist!</div>

        </Content>

      </div>
    );
  }
}


export default Connect(Main);
