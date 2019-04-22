import axios from 'axios';

const api = "";            //接口固定地址
// http://www.594sj.cn/index.php
// 注册页面接口调用
export function _register(data) {
  return axios.post(api+'/merchant/Reg/index', data)
  // return axios.post('/merchant/Reg/index', data, {headers: {AppAuthorization: 'hikhkhkhkjhh'}})  加了token
}

// 短信验证码接口
export function _getCode(data) {
  return axios.post(api+'/api/general/sendSms', data)
}

// 登录接口
export function _login(data) {
  return axios.post(api+'/merchant/Reg/login', data)
}




// global.constants = {
//     website: "http://www.594sj.cn/index.php",                    //测试
// };
