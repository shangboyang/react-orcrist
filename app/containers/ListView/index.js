import React, {Component} from 'react';
import Header from '../../components/Header/Header';

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

        console.log('ListView props', props);
    }

    // render()调用后执行
    componentDidMount() {
        console.log('componentDidMount::::');
    }
    // render()前最后一次机会改变组件state
    componentWillUnmount() {
        console.log('componentWillUnmount:::::');
    }

    render() {
        console.log('render::::');
        return (
            <div>
                <Header
                    title='智慧人社通'
                    backHandler={this.backHandler}
                    optionHandler={this.optionHandler}
                    optionFlag={false}
                />
                <ul>
                    {
                        data.map((val, idx) => {
                            return (
                                <li key={idx}>{val}</li>
                            )
                        })
                    }

                </ul>
            </div>
        )

    }
}
