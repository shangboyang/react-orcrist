import React, {Component} from 'react';
import Header from '../../components/Header/Header';
import '../../components/Header/Header.less';
import './Loading.less';

const header = '智慧人社通';

export default class Loading extends Component {
    render() {
        return (
            <div>
                <Header title={header}/>
                <div>Loading.........</div>
            </div>
        )
    }
}
