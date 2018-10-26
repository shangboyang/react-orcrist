import React from 'react';
import { useScroll } from 'react-router-scroll';
import App from '@/containers/App';
import Main from '@/containers/Main';
// Router
const Router = process.env.NODE_ENV !== 'production'
  ? require('react-router').Router : window.ReactRouter && window.ReactRouter.Router;
// hashHistory
const hashHistory = process.env.NODE_ENV !== 'production'
  ? require('react-router').hashHistory : window.ReactRouter && window.ReactRouter.hashHistory;
// applyRouterMiddleware
const applyRouterMiddleware = process.env.NODE_ENV !== 'production'
  ? require('react-router').applyRouterMiddleware : window.ReactRouter && window.ReactRouter.applyRouterMiddleware;

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
