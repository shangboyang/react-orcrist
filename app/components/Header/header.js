import React, {Component} from 'react';
import './Header.less';

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.optionHandler = this.optionHandler.bind(this); // 1 selector
        this.backHandler = this.backHandler.bind(this); // 1 selector

    }

    componentDidMount() {
        console.log('Header', this);
        // console.log('Header:::componentDidMount', this);
    }

    backHandler(e) {
        history.back();
    }

    optionHandler(e) {
        if (this.props.rightText) {
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
                    onClick={this.props.optionHandler || this.optionHandler}>
                    {this.props.rightText}
                </div>
            </div>
        )
    }
}
