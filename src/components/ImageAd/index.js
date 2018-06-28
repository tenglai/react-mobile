/**
 * 图片广告 组件
 */
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Styles from './index.less';
/**
 * classnames
 * 动态加添加多个class
 * 将true的class 显示出来，false 的隐藏
 * 例如：className={classes}
 */
// import classNames from 'classnames';

class ImageAd extends PureComponent {
  render(){
    const { imgsrc,imgurl } = this.props;
    return (
      // 图片广告
      <div className={Styles.image_ad_container}>
        <Link to={imgurl} >
          <img src={imgsrc} />
        </Link>
      </div>
    )
  }
}

export default ImageAd;