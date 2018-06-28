/**
 * 主页
 */
import React ,{PureComponent} from 'react'
// 轮播图
import Banner from '../routes/banner'

import ShortCut from '../routes/shortcut'
// 商品搜索框 组件
import SearchProduct from '../components/SearchProduct'
// 广告图片 组件
import ImageAd from '../components/ImageAd'
// 广告图片
import ad1 from '../assets/ad1.jpg'

import {menuData} from '../common/menu'
// 商品列表
import ProductList from '../routes/productList'
import { width } from 'window-size';

export default class Home extends PureComponent{
  render(){
    return (
      <div style={{width:"100%"}}>
        <Banner />
        <ShortCut />
        <SearchProduct text={"搜索商品"} />
        <ImageAd imgurl="" imgsrc={ad1} /> 
        <ProductList />
      </div>
    )
  }
}
