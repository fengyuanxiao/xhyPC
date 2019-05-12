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
// 商品库宝贝列表
export function _GoodsInfoList(data, page) {
  return axios.post(api+'/merchant/Publish/GoodsInfoList?page_now='+page, data, {headers: {AppAuthorization: tokens}})
}
// 添加商品时通过商品链接获取商品信息
export function _getnfo(data) {
  return axios.post(api+'/merchant/Publish/getinfo',data, {headers: {AppAuthorization: tokens}})
}
// 新建/编辑关键词词方案
export function _holdKeyWay(data) {
  return axios.post(api+'/merchant/Publish/holdKeyWay',data, {headers: {AppAuthorization: tokens}})
}
// 新建/编辑宝贝时的店铺名称下拉列表
export function _getStoreList(data) {
  return axios.post(api+'/merchant/Publish/getStoreList',data, {headers: {AppAuthorization: tokens}})
}
// 关键词方案列表
export function _keyWayList(data) {
  return axios.post(api+'/merchant/Publish/keyWayList',data, {headers: {AppAuthorization: tokens}})
}
// 获得关键词方案详细信息
export function _getHoldKeyWay(data) {
  return axios.post(api+'/merchant/Publish/getHoldKeyWay',data, {headers: {AppAuthorization: tokens}})
}
// 删除关键词方案详细信息
export function _delKeyWay(data) {
  return axios.post(api+'/merchant/Publish/delKeyWay',data, {headers: {AppAuthorization: tokens}})
}



// global.constants = {
//     website: "http://www.594sj.cn/index.php",                    //测试
// };
