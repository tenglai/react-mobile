/**
 * 主页
 */
import React ,{PureComponent} from 'react'
import {connect} from 'react-redux'
// 轮播图
import Banner from '../routes/banner'
// 快捷链接
import ShortCut from '../routes/shortcut'
// 商品搜索框 组件
import SearchProduct from '../components/SearchProduct'
// 广告图片 组件
import ImageAd from '../components/ImageAd'
import Popup from '../components/Popup'
// 广告图片
import ad1 from '../assets/ad1.jpg'

import {menuData} from '../common/menu'
// 商品列表
import ProductList from '../routes/productList'
import { width } from 'window-size';

class Home extends PureComponent {
  render(){
    const {homePopup,dispatch}  = this.props;

    return (
      <div style={{ "height": "100%","overflow": "scroll"}}>
        <Banner />
        <ShortCut />
        <SearchProduct text={"搜索商品"} />
        <ImageAd imgurl="" imgsrc={ad1} /> 
        <ProductList />
        <Popup  dispatch = {dispatch}  flag={homePopup} />
      </div>
    )
  }
}

export default  connect(({globalRedux})=>{
  return {
    homePopup:globalRedux.homePopup
  }
})(Home)