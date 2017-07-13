import React, {Component } from 'react'
import { Router, Route, IndexRoute, browserHistory, hashHistory, applyRouterMiddleware } from 'react-router'
import { useScroll } from 'react-router-scroll'
import App from '../containers/App'
import ListView from '../containers/ListView'
import Main from '../containers/Main'
import PropsCallback from '../containers/PropsCallback'
import LimitPageList from '../containers/LimitPageList'
import Mycnt from '../containers/Mycnt'

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
      { path: '/mycnt', name: 'mycnt', component: Mycnt },
    ]
  }
]

const route = (
  <Router
    history={hashHistory}
    routes={config}
    render={applyRouterMiddleware(useScroll())}>
  </Router>
)


export default route
