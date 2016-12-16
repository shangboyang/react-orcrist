import React, {Component} from 'react';
import Pager from '../../utils/pager';
import request from '../../utils/request';
import {BottomLoading} from '../../components/Loading/index';
import './style.less';

console.log('pager', Pager);
console.log('BottomLoading', BottomLoading);
export default class Pagination extends Component {
    constructor(props) {
        super(props);


        this.state = {
            loadStatus: 0
        };
    }

    componentDidMount() {
        let pager = new Pager(this.refs.pager);
        this.setState({
            loadStatus: 1
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('nextProps', nextProps);
        console.log('nextState', nextState);
        return true;
    }

    render() {
        return (
            <div className="pager pager-line" ref="pager">
                {this.props.text}
                <BottomLoading status="0" msg="上拉加载更多"></BottomLoading>
            </div>
        )
    }

};
