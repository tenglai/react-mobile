/**
 * 基础布局
 */
import React ,{ PureComponent } from 'react';
/**
 * 引入 react-router-dom
 * Route 是路由的一个原材料，它是控制路径对应显示的组件。我们经常用的是exact、path以及component属性。
 * Switch 常常会用来包裹Route，它里面不能放其他元素，用来只显示一个路由。
 */
import {Switch,Route,Redirect} from 'react-router-dom';
// 获取路由数据
import {getRouterData} from '../common/router';

import Styles from './BaseLayout.less';
// 首页
import Home from '../routes/Home/Home';
// 底部 tabbar
import WxTabBar from '../components/TabBar';

class BaseLayout extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      fullScreen: true,
    };
  }

  // 路由重定向
  getBashRedirect = () => {
    // According to the url parameter to redirect
    // 这里是重定向的,重定向到 url 的 redirect 参数所示地址
    const urlParams = new URL(window.location.href);

    const redirect = urlParams.searchParams.get('redirect');
    // Remove the parameters in the url
    if (redirect) {
      urlParams.searchParams.delete('redirect');
      window.history.replaceState(null, 'redirect', urlParams.href);
    } else {
      return '/home';
    }
    return redirect;
  }

  render(){
    const bashRedirect = this.getBashRedirect();
    // const { match } = this.props;
    // console.log(match);

    return (
      <div>
        <Switch>
          {
            getRouterData().map((item,index)=>(
              <Route exact key={index} path={item.path} component={item.component} />
            ))
          }
          <Redirect exact from="/" to={bashRedirect} />
        </Switch>
        <WxTabBar {...this.props} />
      </div>
    )
  }
}

export default BaseLayout;
