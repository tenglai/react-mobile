/**
 * 项目入口文件
 */
import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
/**
 * 引入 react-redux
 * Provider 提供的是一个顶层容器的作用，实现store的上下文传递
 * connect 可以把state和dispatch绑定到react组件，使得组件可以访问到redux的数据
 */
import { connect, Provider } from 'react-redux';
import store ,{history} from './store';
/**
 * react-router-redux
 * 把react-router url的变化、参数等信息作为状态，交给redux的store管理，一般场景下直接使用react-router即可
 */
import { ConnectedRouter } from 'react-router-redux';
/**
 * 引入 react-router-dom
 * Route 是路由的一个原材料，它是控制路径对应显示的组件。我们经常用的是exact、path以及component属性。
 * Switch 常常会用来包裹Route，它里面不能放其他元素，用来只显示一个路由。
 */
import { Route, Switch } from 'react-router-dom';
// 基础页面布局
import BaseLayout from './layouts/BaseLayout';

import './index.css'; 

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
       <Route path="/"  component={BaseLayout} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)