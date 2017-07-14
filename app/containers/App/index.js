import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './style.less'
import '../../css/common.less'

class App extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    document.body.style.margin = "0px";
  }

  render() {
    const transName = this.props.transName
    console.log('transName', transName);
    return (
      <ReactCSSTransitionGroup
        component="div"
        transitionName={ transName }
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

function mapStateToProps(state) {
  console.log("Appp Comp State::", state);
  const { transReducer } = state
  return {
    transName: transReducer.transName,
  }
}

export default connect(
  mapStateToProps
)(App)
