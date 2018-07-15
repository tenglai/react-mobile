/**
 * TabBar 组件
 */
import React ,{ PureComponent } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import {menuData} from '../../common/menu';
import 'antd-mobile/lib/tab-bar/style/index.css';
import 'antd-mobile/lib/badge/style/index.css';
import Styles from './index.less';

import home1 from '../../assets/home1.png';

class WxTabBar extends PureComponent {
  state = {
    selectedTab: 'home',
    hidden: false
  }

  changeTab = (tab) => {
    this.setState({
      selectedTab: tab
    })
  }

  // 监听 props 的变化
  componentWillReceiveProps(nextProps){
    let pathName = nextProps.location.pathname;
    if(pathName === '/home' || pathName === '/classify' || pathName === '/shopCar' || pathName === '/me'){
      this.setState({
        hidden:false,
        selectedTab:pathName.substring(1)
      });
    }else{
      this.setState({
        hidden:true
      });
    }
  }

  render(){
    return (
      <div style={{'display': this.state.hidden ? 'none' : 'block'}} className={classNames({
        'am-tabs-tab-bar-wrap':true,
      },Styles.container)}>
        <div className="am-tab-bar-bar" style={{backgroundColor:"white"}}>
          {
            menuData.map(item => (
              <div key={item.key} className="am-tab-bar-tab">
                <Link to={item.path} onClick={this.changeTab.bind(this,item.key)}>
                  <div className="am-tab-bar-tab-icon">
                    <span className="am-badge am-tab-bar-tab-badge tab-badge">
                      {
                        this.state.selectedTab == item.key?
                        <div style={{width: "22px", height: "22px", background: `url(${item.selectedIcon}) center center / 21px 21px no-repeat`}}></div>
                        :
                        <div style={{width: "22px", height: "22px", background: `url(${item.icon}) center center / 21px 21px no-repeat`}}></div>
                      }
                      {/* <sup className="am-badge-text">1</sup> */}
                    </span>
                  </div>
                  <p className="am-tab-bar-tab-title" style={{color: this.state.selectedTab == item.key?item.tintColor:item.unselectedTintColor}}>{item.name}</p>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default WxTabBar;