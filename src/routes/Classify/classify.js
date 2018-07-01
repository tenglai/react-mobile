/**
 * 分类
 */
import React,{ PureComponent } from 'react';

import Tloader from '../../components/ReactTouchLoader';
// import Tloader from 'react-touch-loader';

import './classify.less';

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
    }, 2e3);
  }

  // 下拉刷新
  refresh(resolve, reject) {
    console.log(1);
    setTimeout(() => {
      this.setState({
        listLen: 9,
        hasMore: 1
      });
      resolve();
    }, 2e3);
  }

  // 上拉加载更多
  loadMore(resolve) {
    setTimeout(() => {
      var l = this.state.listLen + 9;

      this.setState({
        listLen: l,
        hasMore: l > 0 && l < 50
      });

      resolve();
    }, 2e3);
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
      <div className="view">
        <Tloader className="main"
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