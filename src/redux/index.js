/**
 * redux 同步 入口文件
 */
import React from 'react'
import { combineReducers } from 'redux';
import {
  routerReducer,
} from 'react-router-redux';
// 全局 同步数据
import globalRedux from './globalRedux';
// 轮播图
import bannerRedux from './home/bannerRedux';
// 快捷链接
import shortCutRedux from './home/shortCutRedux';
// 商品列表
import productsRedux from './home/productsRedux';
// 购物车
import homeShopcarRedux from './home/homeShopcarRedux';

const config = {
  globalRedux,
  routerReducer,
  bannerRedux,
  shortCutRedux,
  productsRedux,
  homeShopcarRedux,
}

export default combineReducers(config);