import React, {Component} from 'react';
import Header from '../../components/Header/Header';
import request from '../../utils/request';
import IMG_LUFFY from './images/luffy.jpg';
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

        store.subscribe(function() {
            console.log('ListView subscribe::::' + this);
        })
        // alert('map:::' + Array.prototype.map);
        this.clickImageHandler = this.clickImageHandler.bind(this);
        // console.log('ListView props', props);
    }

    // render()调用后执行
    componentDidMount() {
        request('get', '/api/groupRT.php')
            .then((value) => {
                try {
                    if (typeof value === 'string') {
                        value = JSON.parse(value);
                    }
                    this.setState({
                        loading: false,
                        value
                    });
                    store.dispatch(addTodo('what a shit~'));
                } catch(e) {
                    alert(e);
                }

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
        */
        console.log('componentDidMount::::');

    }

    clickImageHandler(e) {

        const value = this.state.value;
        console.log('hello', value);
        value.push({
            name: 'Saint Seiya'
        });

        this.setState({
            loading: false,
            value
        });

        /*
        request('get', '/api/groupRT.php')
            .then((value) => {
                if (typeof value === 'string') {
                    value = JSON.parse(value);
                }
                console.log('value', value);

                value.push({
                    name: 'Saint Seiya'
                });

                this.setState({
                    loading: false,
                    value
                });
                console.log(value);
                store.dispatch(addTodo('what a shit~'));
                return this;
            })
            .catch((err) => {
                alert(err);
                new Error('wrong')
            })
            .done();
        */
        /*
        this.state.value.map((val, idx) => {
            return (
                <li key={idx}>{val.name}</li>
            )
        })
        */
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
            try {
                if (typeof this.state.value === 'string') {
                    // this.state.value = this.state.value.split(',');
                }
                // alert('ddd this.state.value :::' + this.state.value);
                // alert('[] type is :::' + Object.prototype.toString.call([1, 3, 4]));
                // alert('this.state.value type is :::' + Object.prototype.toString.call(this.state.value));
                // alert(typeof this.state.value);
            } catch(e) {
                alert('ddd map:::' + e);
            }

            return (
                <div>
                    <Header
                        title='智慧人社通1111'
                        backHandler={this.backHandler}
                        optionHandler={this.optionHandler}
                        rightText={'Option'}
                    />
                    <img className="loading-ace" src={IMG_LUFFY}/>
                    <div className="button" onClick={this.clickImageHandler}>ADD_TODO</div>
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
