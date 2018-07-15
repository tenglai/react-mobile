/**
 * 弹出层
 */
import React, {PureComponent} from 'react';
import classNames from 'classnames';
import Styles from './index.less';
// 引入 购物车 组件
import HomeShopcar from '../../routes/Home/HomeShopCar';

class Popup extends PureComponent {
  render(){
    const {flag} = this.props;

    return(
      <div>
        <div
          className={classNames(Styles.wx_popup,Styles.wx_content_bottom)}
          style={{"display": flag ? "none" :"block" }}>
          <HomeShopcar />
        </div>
        <div
          className={Styles.wx_modal}
          style={{"display": flag ? "none" :"block" }}>
        </div>
      </div>
    )
  }
}

export default Popup;