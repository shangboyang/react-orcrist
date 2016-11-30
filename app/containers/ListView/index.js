import React, {Component} from 'react';
import Header from '../../components/Header/Header';
import request from '../../utils/request';
import IMG_ACE from '../Loading/images/ace.jpg';
import store from '../../config/store';
import {addTodo} from './action';
import './style.less';

console.log('addTodo', addTodo);

const data = [1,3,4,5,5,6,67,7];
const headerCfg = {
    optionFlag: false,
    backHandler: () => {
        console.log('backHandler for ListView');
    },
    optionHandler: () => {
        console.log('optionHandler for ListView');
    }
}

export default class ListView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            value: null,
        }
        // console.log('ListView props', props);
    }

    // render()调用后执行
    componentDidMount() {
        request('get', '/api/groupRT.php')
            .then((value) => {
                this.setState({
                    loading: false,
                    value
                });
                console.log('ddddddd');
                console.log(this.getState);
                store.dispatch(addTodo('what a shit~'));
                return this;
            })
            .then((listView) => {
                console.log('ListView Store', store);
                store.dispatch(addTodo('what a shit~'));
                console.log(store.getState());;
            })
            .catch((err) => new Error('wrong'))
            .done();

        /*
        fetch('/api/groupRT.php')
            .then(response => response.json)
            .then(value => {
                console.log(value);
                this.setState({
                    loading: false,
                    value
                })
            })
            .catch(error => {
                this.setState({
                    loading: false,
                    error
                })
            })
        console.log('componentDidMount::::');
        */
    }
    // render()前最后一次机会改变组件state
    componentWillUnmount() {
        console.log('componentWillUnmount:::::');
    }

    clickImageHandler(e) {
        console.log(this);
    }

    render() {
        if (this.state.loading) {
            return (
                <div>
                    <Header
                        title='Loading'
                        backHandler={this.backHandler}
                        optionHandler={this.optionHandler}
                        rightText={'Option'}
                    />
                    <div>Loading</div>
                </div>
            )
        } else {
            return (
                <div>
                    <Header
                        title='智慧人社通1111'
                        backHandler={this.backHandler}
                        optionHandler={this.optionHandler}
                        rightText={'Option'}
                    />
                    <img className="loading-ace" src={IMG_ACE} onClick={this.clickImageHandler}/>
                    <div className="button">ADD_TODO</div>
                    <ul>
                        {
                            this.state.value.map((val, idx) => {
                                return (
                                    <li key={idx}>{val.name}</li>
                                )
                            })
                        }

                    </ul>
                </div>
            )
        }


    }
}
