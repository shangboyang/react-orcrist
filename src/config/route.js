import React from 'react';
import {
  Router, hashHistory, applyRouterMiddleware
} from 'react-router';
import { useScroll } from 'react-router-scroll';
import App from '@/containers/App';
import Main from '@/containers/Main';

const config = [
  {
    path: '/',
    component: App,
    indexRoute: {
      component: Main
    },
    childRoutes: [
      { path: '/main', name: 'main', component: Main }
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
