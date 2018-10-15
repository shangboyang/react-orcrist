import React, { Component } from 'react';
import {
  NavBar,
  Icon
} from 'antd-mobile';
import Connect from '@/containers/Main/connect';
import Content from '@/components/Content';
import '@/containers/Main/style.less';
import IMG_THORIN from '@/containers/Main/images/Thorin.jpg';
import IMG_ORCRIST from '@/containers/Main/images/Orcrist.jpg';

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
          <img width="100%" src={IMG_THORIN}></img>
          <div className="content-title">Welcome to use react-orcrist!</div>
          <img width="100%" src={IMG_ORCRIST}></img>
          <section className="content-text">
            Orcrist was an Elven sword from Gondolin, the mate of Glamdring, which became the sword of Thorin II Oakenshield during The Quest of Erebor.
          </section>
          <section className="content-text">
            It was used by Thorin in The Hobbit, and was feared and called Biter by the Goblins.
          </section>
        </Content>

      </div>
    );
  }
}


export default Connect(Main);
