import React, {Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import ListView from '../containers/ListView/ListView';
import Loading from '../containers/Loading/Loading';

class Main extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
};

const route = (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
            <IndexRoute component={Loading}/>
			<Route path="ListView" component={ListView} />
		</Route>
	</Router>
);


export default route;
