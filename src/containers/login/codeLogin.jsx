import React, { Component } from 'react';
import { Form, Input ,Button, Icon ,Row ,Col } from 'antd';
import { Link } from 'react-router-dom';

import GetCode from '../../component/getCode';            //引入获取验证码组件
class CodeLogins extends Component {
  constructor() {
    super();
    this.state = {
      getCodesState: true,        //为true 显示 获取验证码按钮
      codeNum: 60,                //倒计时 60 秒
      TestGetCode: "获取验证码",
      vCoden: null,
      placeholder: "请输入手机号",
    }
  }

  // 短信验证码
  getCodes = () => {
    let states = this.state;
    let pNumber = states.phoneNumbern;
    let vCoden = states.vCoden;
    let codeNum = states.codeNum;
    let TestGetCode = states.TestGetCode;
    let getCodesState = states.getCodesState;
    GetCode( pNumber, vCoden, codeNum , getCodesState , TestGetCode )   //调用获取短信验证码
  }
  vCode = (e) => {
    this.setState({
      vCoden: e.target.value
    })
  }
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
    const { getFieldDecorator } = this.props.form;
    return(
      <div>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('userPhone', {
              rules: [{ required: true, message: '请输入正确的手机号码!' }],
            })(
              <Input onChange={this.phoneNumber} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="输入已验证的手机号" />
            )}
          </Form.Item>
          <Form.Item>
            {/* 获取短信验证码组件 */}
            {/* <GetCode /> */}
            <Row gutter={16}>
              <Col span={14}>
                {
                  getFieldDecorator('captcha', {
                    rules: [
                    {
                      required: true,
                      message: '请输入短信验证码!'
                    }
                    ]
                  })(<Input className="register-input" placeholder="请输入短信验证码" onChange={this.vCode} />)
                }
              </Col>
              <Col span={10}>
                {
                  this.state.getCodesState
                    ? <Button style={{ marginTop: '0' }} onClick={this.getCodes}>{ this.state.TestGetCode }</Button>
                    : <Button style={{ marginTop: '0' }} disabled="disabled">{this.state.codeNum}秒</Button>
                }
              </Col>
            </Row>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
            或者 <Link to="/">立即注册!</Link>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

const CodeLogin = Form.create()(CodeLogins);
export default CodeLogin
