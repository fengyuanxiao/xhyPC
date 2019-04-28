import axios from 'axios';

const api = "";            //接口固定地址
const tokens = localStorage.getItem("tokens");
// http://www.594sj.cn/index.php
// 注册页面接口调用
export function _register(data) {
  return axios.post(api+'/merchant/Reg/index', data)
  // return axios.post('/merchant/Reg/index', data, {headers: {AppAuthorization: 'hikhkhkhkjhh'}})  加了token
}
// 忘记密码第一步
export function _losePassword_step1(data) {
  return axios.post(api+'/merchant/Reg/losePassword_step1', data)
}
// 忘记密码第二步
export function _losePassword_step2(data) {
  return axios.post(api+'/merchant/Reg/losePassword_step2', data)
}
// 忘记密码第三步
export function _losePassword_step3(data) {
  return axios.post(api+'/merchant/Reg/losePassword_step3', data)
}
// 短信验证码接口
export function _getCode(data) {
  return axios.post(api+'/api/general/sendSms', data)
}
// 登录接口
export function _login(data) {
  return axios.post(api+'/merchant/Reg/login', data)
}
// add shop 接口
export function _addstore(data) {
  return axios.post(api+'/merchant/shop/addstore', data, {headers: {AppAuthorization: tokens}})
}
// 获取类目
export function _getCategory(data) {
  return axios.post(api+'/merchant/General/getCategory', data, {headers: {AppAuthorization: tokens}})
}
// 获得shop认证码
export function _storecheckcode() {
  return axios.get(api+'/merchant/shop/storecheckcode', {headers: {AppAuthorization: tokens}})
}
// 获取shop lists
export function _shopList() {
  return axios.get(api+'/merchant/shop/shopList', {headers: {AppAuthorization: tokens}})
}
// 发布任务显示平台和任务类型
export function _Publishindex() {
  return axios.get(api+'/merchant/Publish/index', {headers: {AppAuthorization: tokens}})
}


// global.constants = {
//     website: "http://www.594sj.cn/index.php",                    //测试
// };
