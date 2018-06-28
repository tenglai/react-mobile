/**
 * api 请求
 */
import axios from 'axios'
require('../mock/data');

/**
 * 请求轮播图数据
 */
export async function getBanners(){
  return axios.get('/api/banner');
}

/**
 * 请求快捷链接数据
 */
export async function getShortcutList(){
  return axios.get('/api/shortcut')
}

/**
 * 请求产品列表数据
 */
export async function getproduct_1(){
  return axios.get('/api/products_1')
}

/**
 * 请求登录数据
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