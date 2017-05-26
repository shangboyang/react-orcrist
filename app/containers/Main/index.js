import React, {Component} from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';
import Header from '../../components/Header/Header';
import '../../components/Header/Header.less';
import './style.less';
import IMG_ACE from './images/ace.jpg';
import IMG_LUFFY from './images/luffy.jpg';

export default class Loading extends Component {

  static defaultProps = {
    // header config
    header: {
      title: 'React Ocrist',
    }
  };

  render() {
    return (
      <div>
        <Header
          title={this.props.header.title}
        />
        <div className="main">
          <img className="loading-ace" src={IMG_LUFFY}/>
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
