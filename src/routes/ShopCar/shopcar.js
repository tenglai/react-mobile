/**
 * 购物车
 */
import React,{ PureComponent } from 'react';
import './ShopCar.less';

class ShopCar extends PureComponent {
  // 构造函数
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render(){
    return (
      <div>
        <p>购物车</p>
      </div>
    )
  }
}

export default ShopCar;