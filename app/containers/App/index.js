import React, {Component} from 'react'
// import RouteTransition from '../../utils/routeTransition'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './style.less'
console.log('ReactCSSTransitionGroup', ReactCSSTransitionGroup);
export default class Main extends Component {

  constructor(props) {
    super(props)
  }
  componentWillEnter() {
    console.log('componentWillEnter');
  }
  componentWillMount() {
    document.body.style.margin = "0px";
    // 这是防止页面被拖拽
    document.body.addEventListener('touchmove', (ev) => {
      ev.preventDefault();
    });
  }

  render() {
    return (
        <ReactCSSTransitionGroup
          component="div"
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          <div key={this.props.location.pathname}
               style={{position:"absolute", width: "100%"}}>
              {
                  this.props.children
              }
          </div>
        </ReactCSSTransitionGroup>
    )
  }
}
