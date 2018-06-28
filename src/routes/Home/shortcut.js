import React, {PureComponent} from 'react'
import {connect} from 'react-redux'

import { default as ShortCutComponent} from '../../components/ShortCut';

/**
 * 首页中部快捷按钮组件
 */
class ShortCut extends PureComponent{
  componentDidMount(){
    this.props.dispatch({
      type: 'getShortcutSagaList',
    });
  }

  render(){
    return (
      <ShortCutComponent {...this.props} />
    )
  }
}

export default connect(
  ({ shortCutRedux,})=>{
    return {
      data : shortCutRedux.data,
    }
  },
)(ShortCut);