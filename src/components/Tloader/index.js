/**
 * 下拉刷新/上拉加载更多 组件
 */
import React from 'react';
import classNames from 'classnames';
import Styles from './index.less';
// 状态
const STATS = {
  init: '',
  pulling: 'pulling',
  enough: 'pulling enough',
  refreshing: 'refreshing',
  refreshed: 'refreshed',
  reset: 'reset',

  loading: 'loading'// loading more
};

// 下拉刷新
// 点击底部加载更多
class Tloader extends React.Component {
  // 构造函数
  constructor() {
    super();
    this.state = {
      loaderState: STATS.init,
      pullHeight: 0,
      progressed: 0
    };
  }
  // 设置初始化触摸
  setInitialTouch(touch) {
    this._initialTouch = {
      clientY: touch.clientY
    };
  }
  // 计算距离
  calculateDistance(touch) {
    return touch.clientY - this._initialTouch.clientY;
  }
  // 拖拽的缓动公式 - easeOutSine
  easing(distance) {
    // t: current time, b: begInnIng value, c: change In value, d: duration
    var t = distance;
    var b = 0;
    var d = window.screen.availHeight; // 允许拖拽的最大距离
    var c = d / 2.5; // 提示标签最大有效拖拽距离

    return c * Math.sin(t / d * (Math.PI / 2)) + b;
  }
  // 判断是否可以刷新
  canRefresh() {
    return this.props.onRefresh && [STATS.refreshing, STATS.loading].indexOf(this.state.loaderState) < 0;
  }
  // 开始滑动
  touchStart(e) {
    if (!this.canRefresh()) return;
    if (e.touches.length == 1) this._initialTouch = {
      clientY: e.touches[0].clientY,
      scrollTop: this.refs.panel.scrollTop
    };
  }
  // 滑动中
  touchMove(e) {
    if (!this.canRefresh()) return;
    var scrollTop = this.refs.panel.scrollTop;
    var distance = this.calculateDistance(e.touches[0]);

    if (distance > 0 && scrollTop <= 0) {
      var pullDistance = distance - this._initialTouch.scrollTop;
      if (pullDistance < 0) {
        // 修复 webview 滚动过程中 touchstart 时计算panel.scrollTop不准
        pullDistance = 0;
        this._initialTouch.scrollTop = distance;
      }
      var pullHeight = this.easing(pullDistance);
      if (pullHeight) e.preventDefault();// 减弱滚动

      this.setState({
        loaderState: pullHeight > this.props.distanceToRefresh ? STATS.enough : STATS.pulling,
        pullHeight: pullHeight
      });
    }
  }
  // 结束滑动
  touchEnd() {
    if (!this.canRefresh()) return;
    var endState = {
      loaderState: STATS.reset,
      pullHeight: 0
    };

    if (this.state.loaderState == STATS.enough) {
      // refreshing
      this.setState({
        loaderState: STATS.refreshing,
        pullHeight: 0
      });

      // trigger refresh action
      this.props.onRefresh(() => {
        // resolve
        this.setState({
          loaderState: STATS.refreshed,
          pullHeight: 0
        });
      }, () => {
        // reject
        this.setState(endState);// reset
      });
    } else this.setState(endState);// reset
  }
  // 加载更多
  loadMore() {
    this.setState({ loaderState: STATS.loading });
    this.props.onLoadMore(() => {
      // resolve
      this.setState({ loaderState: STATS.init });
    });
  }
  // 滚动
  onScroll(e) {
    if (
      this.props.autoLoadMore &&
      this.props.hasMore &&
      this.state.loaderState != STATS.loading
    ) {
      let panel = e.currentTarget;
      let scrollBottom = panel.scrollHeight - panel.clientHeight - panel.scrollTop;

      if (scrollBottom < 5) this.loadMore();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.initializing < 2) this.setState({
      progressed: 0 // reset progress animation state
    });
  }
  // 动画结束
  animationEnd() {
    var newState = {};

    if (this.state.loaderState == STATS.refreshed) newState.loaderState = STATS.init;
    if (this.props.initializing > 1) newState.progressed = 1;

    this.setState(newState);
  }

  // 页面渲染
  render() {
    const { classStyle, hasMore, initializing } = this.props;
    const { loaderState, pullHeight, progressed } = this.state;

    var footer = hasMore ? (
      <div className={Styles.tloader_footer}>
        <div className={Styles.tloader_btn} onClick={e => this.loadMore(e)} />
        <div className={Styles.tloader_loading}><i className={Styles.ui_loading} /></div>
      </div>
    ) : (<div className={Styles.tloader_no_more}></div>);

    var style = pullHeight ? {
      WebkitTransform: `translate3d(0,${pullHeight}px,0)`
    } : null;

    var progressClassName = '';
    if (!progressed) {
      if (initializing > 0) progressClassName += 'tloader_progress';
      if (initializing > 1) progressClassName += 'ed';
    }

    return (
      <div
        ref="panel"
        className={classNames(Styles['tloader'],Styles[`state_${loaderState}`],Styles[`${progressClassName}`])}
        style={classStyle}
        onScroll={e => this.onScroll(e)}
        onTouchStart={e => this.touchStart(e)}
        onTouchMove={e => this.touchMove(e)}
        onTouchEnd={e => this.touchEnd(e)}
        onAnimationEnd={e => this.animationEnd(e)}>

        <div className={Styles.tloader_symbol}>
          <div className={Styles.tloader_msg}><i /></div>
          <div className={Styles.tloader_loading}><i className={Styles.ui_loading} /></div>
        </div>
        <div className={Styles.tloader_body} style={style}>{this.props.children}</div>
        {footer}
      </div>
    );
  }
}

Tloader.defaultProps = {
  distanceToRefresh: 60,
  autoLoadMore: 1
};

export default Tloader;