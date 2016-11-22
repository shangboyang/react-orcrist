import React, {Component} from 'react';
import './Header.less';

export default class Header extends Component {

    constructor(props) {
        super(props);
        console.log('this.props', this.props);
    }

    componentDidMount() {
        console.log('Header:::componentDidMount', this);
    }

    backHandler() {
        history.back();
    }

    optionHandler() {
        console.log('option handler');
    }

    render() {
        console.log('Header:::render');
        return (
            <div className="ost-header">
                <div className="ost-header-left" onClick={this.props.backHandler || this.backHandler}>返回</div>
                <div className="ost-header-main">{this.props.title}</div>
                <div className="ost-header-right" onClick={this.props.optionHandler || this.optionHandler}>操作</div>
            </div>
        )
    }
}
