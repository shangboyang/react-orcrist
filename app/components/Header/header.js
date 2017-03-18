import React, {Component} from 'react';
import './Header.less';

export default class Header extends Component {

  static defaultProps = {
    optionFlag: false
  }

  static propTypes = {
    optionFlag: React.PropTypes.bool.isRequired
  }

  constructor(props) {
    console.log('PropTypes', React.PropTypes);
    console.log('Header Super Props', props);
    super(props);
    this.optionHandler = this.optionHandler.bind(this); // 1 selector
    this.backHandler = this.backHandler.bind(this); // 1 selector

  }

  componentDidMount() {
    // console.log('Header', this);
    // console.log('Header:::componentDidMount', this);
  }

  backHandler(e) {
    history.back();
  }

  optionHandler(e) {

    if (this.props.optionFlag) {
      console.log('option handler');
    } else {
      console.log('Nothing');
    }

  }

  render() {
    return (
      <div className="ost-header">
        <div className="ost-header-left" onClick={this.props.backHandler || this.backHandler}>返回</div>
        <div className="ost-header-main">{this.props.title}</div>
        <div className="ost-header-right"
          onClick={this.props.optionHandler || this.optionHandler}>{this.props.optionText}
        </div>
      </div>
    )
  }
}
