/**
 * redux 异步入口文件
 */
import { put,takeEvery,fork,all } from 'redux-saga/effects';
// 全局 异步数据
import globalSaga from './globalSaga';
// 轮播图
import bannerSaga from './home/bannerSaga';
// 快捷链接
import shortcutSaga from './home/shortcutSaga';
// 商品列表
import productSaga from './home/productSaga';
// 购物
import homeShopcarSaga from './home/homeShopcarSaga'

// 所有saga的入口配置文件
const config = [
  fork(globalSaga),
  fork(bannerSaga),
  fork(shortcutSaga),
  fork(productSaga),
  fork(homeShopcarSaga),
]

export default function* rootSaga(){
  yield all(config)
};