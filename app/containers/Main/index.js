import React, {Component} from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';
import Header from '../../components/Header/Header';
import '../../components/Header/Header.less';
import './style.less';
import IMG_ACE from './images/ace.jpg';

export default class Loading extends Component {

  static defaultProps = {
    // header config
    header: {
      title: 'React Ocrist',
      optionFlag: false,
      optionHandler: (e) => {
        console.log('i want it option---by 首页');
      },
      backHandler: (e) => {
        console.log('i want it back ---by 首页');
      }
    }
  };

  render() {
    return (
      <div>
        <Header
          title={this.props.header.title}
          backHandler={this.props.header.backHandler}
          optionFlag={this.props.header.optionFlag}
          optionHandler={this.props.header.optionHandler}
        />
        <div className="main">
          <div>我是首页</div>
          <img className="loading-ace" src={IMG_ACE}/>
          <Link to='list' activeStyle={{color: 'red'}}>ListView</Link>
          &nbsp;&nbsp;&nbsp;
          <Link to='test' activeStyle={{color: 'red'}}>Test Parents</Link>
        </div>
        <ul>
          <li>12321</li>
          <li>12321</li>
        </ul>
      </div>
    )
  }
}
