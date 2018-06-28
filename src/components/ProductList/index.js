/**
 * 商品列表 组件
 */
import React,{ PureComponent } from 'react'
// 路由跳转
import {Link} from 'react-router-dom'

import Styles from './index.less';
// 弹出层 组件
import Popup from '../../components/Popup';
// 购物车 背景图
import scar from '../../assets/scar.svg';

class ProductList extends PureComponent {
  state = {
    hidden:false
  }

  clickShopCar = (index)=>{
    // 显示弹出窗
    this.props.dispatch({
      type:'openPopup'
    })

    return false;
  }

  render(){
    const {data} = this.props;
    const content = (<div>44444444</div>);

    return (
      // 商品列表
      <div className={Styles.list_container}>
        <div className={Styles.list_warper}>
          <ul>
            {
              data.map((item,index)=>(
                <li key={index}>
                  <div className={Styles.pwarper}>
                    <div>
                      <img src={item.imgsrc} />
                    </div>
                    <div className={Styles.title_warper}>
                      <p>{item.title}</p>
                    </div>
                    <div className={Styles.price_warper}>
                      <p><em>¥ {item.price}</em></p>
                      <div className={Styles.shop_cart}>
                        <div className={Styles.cap_goods_list__buy_btn}>
                          <img onClick={this.clickShopCar.bind(this,index)}  className={Styles.scimg} src={scar} />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))
            }                
          </ul>
        </div>
      </div>
    )
  }
}

export default ProductList;