import React, { Component } from 'react';
import { Form, Input, Tabs ,Button, Checkbox, Icon, message } from 'antd';
import { Link } from 'react-router-dom';

import CodeLogin from './codeLogin';          //已验证手机号登录方式
import { _login } from '../../component/api'; //引入ajax接口
import './login.css';

const publics = require('../../component/publics'); //引入公共资源文件
const phoneNum = publics.phoneNum; //储存手机号码正则

// tabs
const TabPane = Tabs.TabPane;
// var cookie = document.cookie;                  //或cookie储存
// console.log(cookie);

class Logins extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentDidMount () {
      this.props.form.setFieldsValue({
      mobile: localStorage.getItem("mobile"),        //获取本地账号
      pwd: localStorage.getItem("pwd"),              //获取本地密码
    })
  }

  // 登录提交按钮
  handleSubmit = (e) => {
    e.preventDefault();
    // 登录成功跳转
    this.props.history.push('../center_new/center_new');
    // this.props.form.validateFields((err, values) => {
    //   if (!err) {
    //     // console.log(values);
    //     if ( !phoneNum.test(values.mobile)) {
    //       message.error("请输入正确的手机号码！")
    //     } else {
    //       // ajax
    //       _login(values)
    //       .then(res => {
    //         // console.log(res.data);
    //         if ( res.data.code === 200 ) {
    //           message.success(res.data.msg);
    //             // 保存token到本地
    //             localStorage.setItem("tokens", res.data.data.token);
    //           if ( values.remember ) {                                      //记住密码勾选执行下面
    //             localStorage.setItem("mobile", values.mobile);              //将账号保存到本地
    //             localStorage.setItem("pwd", values.pwd);               //将密码保存到本地
    //           } else {                                                      //记住密码没有勾选
    //             localStorage.removeItem("mobile");                          //删除本地账号密码
    //             localStorage.removeItem("pwd");
    //           }
    //           // 登录成功跳转
    //           this.props.history.push('../center_new/center_new');
    //         } else {
    //           message.warning(res.data.msg)
    //         }
    //       })
    //       .catch(err => {
    //         console.log(err);
    //       })
    //       // 删除指定的key储存值
    //       localStorage.removeItem("key")
    //     }
    //   }
    // });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return(
      <div className="login">
        {/* header */}
        <div className="login-header">
          <div className="login-header-left">
            <img src={require("../../imgs/logo.png")} alt="logo"/>
            <span>登录页面</span>
          </div>
          <div className="login-header-right">
            <span>没有账号，</span>
            <Link to="/register">立即注册</Link>
          </div>
        </div>
        {/* content */}
        <div className="login-content">
          {/* 左边图片 */}
          <div className="content-left">
            {/* <img src={require("../../imgs/logo.png")} alt="logo"/> */}
          </div>
          {/* 右边提交框 */}
          <div className="content-right">
            <Tabs defaultActiveKey="1" onChange={this.callback}>
              {/* 密码登录 */}
              <TabPane tab="密码登录" key="1">
                <Form onSubmit={this.handleSubmit} className="login-form loginPage">
                  <Form.Item>
                    {getFieldDecorator('mobile', {
                      rules: [{ required: true, message: '请输入正确的账号!' }],
                    })(
                      <Input maxLength={11} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="小跳蛙账号\已验证的手机号" />
                    )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator('pwd', {
                      rules: [{ required: true, message: '请输入正确的密码!' }],
                    })(
                      <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                    )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator('remember', {
                      valuePropName: 'checked',
                      initialValue: true,
                    })(
                      <Checkbox>记住密码</Checkbox>
                    )}
                    <Link className="login-form-forgot" to="/find_password">忘记密码</Link>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                      登录
                    </Button>
                    或者 <Link to="/register">立即注册!</Link>
                  </Form.Item>
                </Form>
              </TabPane>
              {/* 验证码登录 */}
              <TabPane tab="验证码登录" key="2">
                <CodeLogin />
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    )
  }
}

const Login = Form.create()(Logins);
export default Login
