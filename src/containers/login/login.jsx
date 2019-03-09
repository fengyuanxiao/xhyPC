import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, message, Icon } from 'antd';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import './login.css';

class Logins extends Component {

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
    const { getFieldDecorator } = this.props.form;
    return(
      <div style={{ width: '800px', margin: '0 auto' }}>
        {/* header */}
        <div className="login-header">
          <div className="login-header-left">
            <img src={require("../../imgs/logo.png")} alt="logo"/>
            <span>登录页面</span>
          </div>
          <div className="login-header-right">
            <span>没有账号，</span>
            <span>立即注册</span>
          </div>
        </div>
        {/* content */}
        <div className="login-content">
          {/* 左边图片 */}
          <div className="content-left">
            <img src={require("../../imgs/logo.png")} alt="logo"/>
          </div>
          {/* 右边提交框 */}
          <div className="content-right">
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>Remember me</Checkbox>
                )}
                <a className="login-form-forgot" href="">Forgot password</a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
                Or <a href="">register now!</a>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

const Login = Form.create()(Logins);
export default Login
