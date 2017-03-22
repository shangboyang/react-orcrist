import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import '../../css/common.less'

export default class App extends Component {

  constructor(props) {
    super(props)
  }

  componentWillEnter(sss) {
    console.log('componentWillEnter', sss);
  }

  componentWillLeave(status) {
    console.log('componentWillLeave', status);
  }

  componentWillMount() {
    document.body.style.margin = "0px";
    // 这是防止页面被拖拽
    // document.body.addEventListener('touchmove', (ev) => {
    //   ev.preventDefault();
    // });
  }

  render() {

    return (
        <ReactCSSTransitionGroup
          component="div"
          transitionName={ true ? 'left' : 'right'}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={300}>
          <div key={this.props.location.pathname}
               style={{position:"absolute", width: "100%"}}
          >
              <Main ref='mainDom' children={this.props.children}/>
          </div>

        </ReactCSSTransitionGroup>
    )

  }
}

class Main extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}
