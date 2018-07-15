/**
 * 商品搜索框 组件
 */
import React,{PureComponent} from 'react';
import classNames from 'classnames';
// 默认图片
import AvatarImg from '../../assets/avatar.png';
import Styles from './index.less';

class Table extends PureComponent{
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render(){
    return (
      <table className={Styles.tableStyle}>
        <tbody>
          <tr className={Styles.tableTr}>
            <td>姓名</td>
            <td>张三</td>
            <td rowSpan="4" colSpan="2">
              <img className={Styles.avatorImg} src={AvatarImg} alt="" />
            </td>
          </tr>
          <tr className={classNames(Styles.tableTr,Styles.active)}>
            <td>性别</td>
            <td>男</td>
          </tr>
          <tr className={Styles.tableTr}>
            <td>民族</td>
            <td>汉族</td>
          </tr>
          <tr className={classNames(Styles.tableTr,Styles.active)}>
            <td>籍贯</td>
            <td>广东</td>
          </tr>
          <tr className={Styles.tableTr}>
            <td>矫正机构</td>
            <td>XXX</td>
            <td>矫正类别</td>
            <td>XXX</td>
          </tr>
          <tr className={classNames(Styles.tableTr,Styles.active)}>
            <td>矫正开始时间</td>
            <td>XXX</td>
            <td>出生日期</td>
            <td>XXX</td>
          </tr>
          <tr className={Styles.tableTr}>
            <td>联系电话</td>
            <td colSpan="3">XXX</td>
          </tr>
          <tr className={classNames(Styles.tableTr,Styles.active)}>
            <td>监护人电话</td>
            <td colSpan="3">XXX</td>
          </tr>
          <tr className={Styles.tableTr}>
            <td>证件号码</td>
            <td colSpan="3">XXX</td>
          </tr>
          <tr className={classNames(Styles.tableTr,Styles.active)}>
            <td>矫正人员住址</td>
            <td colSpan="3">XXX</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table;