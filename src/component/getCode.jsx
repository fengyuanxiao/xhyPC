
// import axios from 'axios';
import { message } from 'antd';
const publics = require('./publics');    //引入公共资源文件
const phoneNum = publics.phoneNum;       //储存手机号码正则

// pNumber:电话号码   codeNum：倒计时60秒    TestGetCode：60秒过去后获取短信验证码文字更换成重新获取
export default function getCodes( pNumber , codeNum , getCodesState , TestGetCode ) {
    // let dataCode_ = this.state;
    let this_ = this;   //存入  this
    if (pNumber === "请输入手机号") {
      message.error("请输入手机号码！");
    } else if (!phoneNum.test(pNumber)) {
      message.error("请输入正确的手机号码！");
    } else {
      // let codeNum = dataCode_.codeNum;
      const timer = setInterval(() => {
      this_.setState({
        getCodesState:false,
        codeNum: (codeNum--)
        }, () => {
            if (codeNum === 0) {
            clearInterval(timer);
            this_.setState({
              getCodesState: true,
              codeNum: 60,
              TestGetCode: "重新获取"
            })
          }
        })
      }, 1000)
      // 获取短信验证码接口ajax
      // axios.post(global.constants.website+'/api/user/sendcode', {
      //   sid: dataCode_.sid,
      //   tuCode: dataCode_.tuCode,
      //   phoneNum: dataCode_.placeholder
      // })
      // .then(function (response) {   //调用接口成功执行
      //   // console.log(response.data);
      //   // 判断后台返回数据 status 状态 true 图片验证码正确 执行下面
      //   if ( response.data.status ) {
      //     // 倒计时 获取短信验证码
      //     let codeNum = dataCode_.codeNum;
      //     const timer = setInterval(() => {
      //     this_.setState({
      //       getCodesState:false,
      //       codeNum: (codeNum--)
      //       }, () => {
      //           if (codeNum === 0) {
      //           clearInterval(timer);
      //           this_.setState({
      //             getCodesState: true,
      //             codeNum: 60,
      //             TestGetCode: "重新获取"
      //           })
      //         }
      //       })
      //     }, 1000)
      //     // 图片验证码正确显示提示
      //     message.success(response.data.msg);
      //   } else {  // 判断后台返回数据 status 状态 false执行else
      //     // 图片验证码错误显示提示
      //     message.error(response.data.msg);
      //   }
      // })
      // .catch(function (error) {   //调用接口失败执行
      //   console.log(error);
      // });
      }
    }
