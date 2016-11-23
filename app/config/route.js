import React, {Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';
import App from '../containers/App/index';
import ListView from '../containers/ListView/index';
import Loading from '../containers/Loading/index';

const config = [
    {
        path: '/',
        component: App,
        // default index
        indexRoute: {
            component: Loading
        },
        childRoutes: [
            { path: '/list', name: 'list', component: ListView },
            { path: '/load', name: 'load', component: Loading }
        ]
    }
];

const route = (
    <Router
        history={hashHistory}
        routes={config}
        render={applyRouterMiddleware(useScroll())}>
    </Router>
);


export default route;
