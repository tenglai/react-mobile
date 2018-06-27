/**
 * 服务
 */
import axios from 'axios'
require('../mock/data');

/**
 * 轮播图
 */
export async function getBanners(){
  return axios.get('/api/banner');
}

/**
 * 捷径
 */
export async function getShortcutList(){
  return axios.get('/api/shortcut')
}

/**
 * 产品列表
 */
export async function getproduct_1(){
  return axios.get('/api/products_1')
}

/**
 * 登录
 */
export async function login(param) {
  const {username,password,type} = param;

  return axios.get('/api/login').then(function(response){
    if(username === 'admin' && password === '888888'){
      return {
        status:'ok',
        type:type,
        currentAuthority:'admin'
      };
    }else if(password === '123456' && username === 'user'){
      return {
        status: 'ok',
        type,
        currentAuthority: 'user'
      }
    }else{
      return {
        status:'error',
        type:type,
      }
    }
  })
}