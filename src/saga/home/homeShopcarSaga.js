/**
 * 购物车 异步数据
 */
import { put,takeLatest,call,select } from 'redux-saga/effects'
import {getHShopCar} from '../../services/api'

function* getHomeShopcarSaga(){
  const res = yield call(getHShopCar)

  yield put({
    type:'addHomeShopCar',
    payload:res.data,
  })
}

function* homeShopcarSaga(){
  yield takeLatest('getHomeShopcarSaga',getHomeShopcarSaga);
}
   
export default homeShopcarSaga;