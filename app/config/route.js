import React from 'react';
import {
  Router, hashHistory, applyRouterMiddleware
} from 'react-router';
import { useScroll } from 'react-router-scroll';
import App from '@/containers/App';
import Main from '@/containers/Main';
import ListView from '@/containers/ListView';
import PropsCallback from '@/containers/PropsCallback';
import LimitPageList from '@/containers/LimitPageList';

const config = [
  {
    path: '/',
    component: App,
    // default index
    indexRoute: {
      component: Main
    },
    childRoutes: [
      { path: '/list', name: 'list', component: ListView },
      { path: '/main', name: 'main', component: Main },
      { path: '/props-callback', name: 'propsCb', component: PropsCallback },
      { path: '/limit', name: 'limit', component: LimitPageList },
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
