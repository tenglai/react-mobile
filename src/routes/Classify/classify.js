/**
 * 分类
 */
import React,{ PureComponent } from 'react';

import Tloader from '../../components/Tloader';
// import Tloader from 'react-touch-loader';

import Styles from './classify.less';

// 设置视图滚动区域
let mainStyle = {
  flex: 1,
  overflowX:'hidden',
  overflowY:'scroll',
  overflowScrolling:'touch'
}

class Classify extends PureComponent {
  // 构造函数
  constructor() {
    super();
    this.state = {
      listLen: 0,
      hasMore: 0,
      initializing: 1
    }
  }

  // 生命周期--组件挂载完毕
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        listLen: 9,
        hasMore: 1,
        initializing: 2, // initialized
      });
    }, 2000);
  }

  // 下拉刷新
  refresh(resolve, reject) {
    console.log('下拉刷新');
    setTimeout(() => {
      this.setState({
        listLen: 9,
        hasMore: 1
      });
      resolve();
    }, 2000);
  }

  // 上拉加载更多
  loadMore(resolve) {
    console.log('上拉加载更多');
    setTimeout(() => {
      var l = this.state.listLen + 9;

      this.setState({
        listLen: l,
        hasMore: l > 0 && l < 50 // 决定是否能够执行loadMore
      });

      resolve();
    }, 2000);
  }

  render() {
    var { listLen, hasMore, initializing } = this.state;
    var { refresh, loadMore } = this;
    var list = [];

    if (listLen) {
      for (var i = 0; i < listLen; i++) {
        list.push(
          <li key={i}>
            <p>{i}</p>
          </li>
        );
      }
    }
    return (
      <div className={Styles.view}>
        <Tloader
          classStyle={mainStyle}
          onRefresh={(resolve, reject) => this.refresh(resolve, reject)}
          onLoadMore={(resolve) => this.loadMore(resolve)}
          hasMore={hasMore}
          initializing={initializing}>
          <ul>{list}</ul>
        </Tloader>
      </div>
    );
  }
}

export default Classify;