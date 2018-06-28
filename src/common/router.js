/**
 * 路由配置
 */
// 首页
import Home from '../routes/Home/home';
// 分类
import Classify from '../routes/Classify/classify';
// 购物车
import ShopCar from '../routes/ShopCar/shopcar';
// 我的
import Me from '../routes/Me/me';
// 基础布局
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