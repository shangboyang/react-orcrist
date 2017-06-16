import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../../css/common.less'

export default class App extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    document.body.style.margin = "0px";
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        component="div"
        transitionName={ true ? 'left' : 'right'}
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={300}
        style={{height:"100%", width: "100%"}}>

        <div
          key={this.props.location.pathname}
          style={{height:"100%", width: "100%"}}>
          {this.props.children}
        </div>

      </ReactCSSTransitionGroup>
    )
  }
}
