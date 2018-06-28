/**
 * 购物车 组件
 */
import React,{PureComponent} from 'react'
import Styles from './index.less'

class HomeShopCar extends PureComponent{
  render(){
    const {data} = this.props;
    console.log(data);
    
    return (
      <div>
        购物车
      </div>
    )
  }
}

export default HomeShopCar;