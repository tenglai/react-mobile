/**
 * 路由配置
 */
// 首页
import Home from '../routes/home';
// 分类
import Classify from '../routes/classify';
// 购物车
import ShopCar from '../routes/shopcar';
// 我的
import Me from '../routes/me';
import BasicLayout from '../layouts/BaseLayout';

export const getRouterData = () => {
  const routerConfig = [
    {
      path:'/home',
      component:Home,
    },
    {
      path:'/classify',
      component:Classify,
    },
    {
      path:'/shopcar',
      component:ShopCar,
    },
    {
      path:'/me',
      component:Me,
    }
  ]

  return routerConfig;
}