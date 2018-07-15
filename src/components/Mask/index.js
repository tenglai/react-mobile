/**
 * 遮罩层 组件
 */
import React,{PureComponent} from 'react';
import classNames from 'classnames';
import Styles from './index.less';

class Mask extends PureComponent{
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render(){
    return (
      <div
        onClick={() => this.props.closeZoomImg(false)}
        style={{'display': this.props.show ? 'block' : 'none'}}
        className={Styles.maskStyle}>
        <img className={Styles.imgStyle} src={this.props.zoomImg} />
      </div>
    )
  }
}

export default Mask;