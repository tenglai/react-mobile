/**
 * 购物车
 */
import React,{ PureComponent } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import './ShopCar.less';

class ShopCar extends PureComponent {
  // 构造函数
  constructor(props) {
    super(props);
    this.state = {};
  }

  // 跳转详情页
  goDetail(){
    this.props.history.push({
      pathname:'/shopCarDetail',
      params:{
        name:'jack'
      }
    });
  }
  
  render(){
    return (
      <div>
        {/*顶部导航栏*/}
        <NavBar
          mode="dark"
          rightContent={[
            <Icon key="0" onClick={() => this.goDetail()} type="ellipsis" />
          ]}
        >购物车</NavBar>
      </div>
    )
  }
}

export default ShopCar;