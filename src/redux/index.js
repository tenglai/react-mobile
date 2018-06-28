/**
 * redux 同步 入口文件
 */
import React from 'react'
import { combineReducers } from 'redux';
import {
  routerReducer,
} from 'react-router-redux';
import bannerRedux from './home/bannerRedux';
import shortCutRedux from './home/shortCutRedux';
import productsRedux from './home/productsRedux';
import globalRedux from './globalRedux';

const config = {
  routerReducer,
  bannerRedux,
  shortCutRedux,
  productsRedux,
  globalRedux,
}

export default combineReducers(config);