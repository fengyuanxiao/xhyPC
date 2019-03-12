import React, { Component } from 'react';
import { Form, Input ,Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import GetCode from '../../component/getCode';            //引入获取验证码组件

import "../login/login.css";

class Registers extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  // 输入电话号码
  phoneNumber = (e) => {
    this.setState({
      phoneNumbern: e.target.value
    })
  }

  // 登录提交按钮
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { phoneNumbern } = this.state;
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
            <span>我已注册，</span>
            <Link to="/">马上登录</Link>
          </div>
        </div>
        {/* content */}
        <div className="register-content">
          {/* 左边注册说明 */}
          <div className="register-left">
            {/* <h1>获取注册码</h1>
              <p>1.打开微信，扫描下方二维码加好友</p>
              <p>2.自动通过，(1-20秒内)发送注册码到您的微信</p>
              <p>3.查看微信，获取注册码(6位数字)</p>
            <p>4.请填写到注册码栏</p> */}
            <h1>士大夫第三方未覆盖</h1>
            <p>1.的士费无非欺负切个人股好人</p>
            <p>2.下班额不认同和日特惠价好第三方</p>
            <p>3.但是如何突然间天涯倦客而法国问</p>
            <p>4.访问替换就口蹄疫</p>
            <img src={require("../../imgs/registerImg.jpg")} alt="注册需要添加的微信二维码"/>
          </div>
          {/* 右边提交框 */}
          <div className="register-right">
            {/* <h1>注册新商家</h1> */}
            <h1>小跳蛙</h1>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator('Rcode', {
                  rules: [{ required: true, message: '请输入正确的注册码!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请扫描左侧二维码获取注册码" />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('cellNumber', {
                  rules: [{ required: true, message: '请输入正确的手机号!' }],
                })(
                  <Input onChange={this.phoneNumber} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} maxLength={11} placeholder="请输入手机号" />
                )}
              </Form.Item>
              <Form.Item>
                <GetCode phoneNumbern={phoneNumbern}  />
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入正确的密码!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码请设置6-16位数字、字母" />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('qq', {
                  rules: [{ required: true, message: '请输入QQ号码!' }],
                })(
                  <Input prefix={<Icon type="qq" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入QQ号" />
                )}
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

const Register = Form.create()(Registers);
export default Register
