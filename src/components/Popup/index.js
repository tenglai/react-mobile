/**
 * 弹出层
 */
import React, {PureComponent} from 'react';
import classNames from 'classnames';
import Styles from './index.less';
// 引入 购物车 组件
import HomeShopcar from '../../routes/Home/homeShopcar';

class Popup extends PureComponent {
  // 构造函数
  constructor(props) {
    super(props);
  }

  // 遮罩层 点击事件
  closeMe=()=>{
    // 显示弹出窗
    this.props.dispatch({
      type:'closePopup'
    })
  }

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
          onClick={this.closeMe}
          className={Styles.wx_modal}
          style={{"display": flag ? "none" :"block" }}>
        </div>
      </div>
    )
  }
}

export default Popup;