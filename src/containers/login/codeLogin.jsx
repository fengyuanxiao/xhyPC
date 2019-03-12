import React, { Component } from 'react';
import { Form, Input ,Button, Icon } from 'antd';
import { Link } from 'react-router-dom';

import GetCode from '../../component/getCode';            //引入获取验证码组件
class CodeLogins extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  // 输入短信验证码
  vCode = (e) => {
    console.log(e);
    this.setState({
      vCoden: e.target.value
    })
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
        console.log(this.state.vCoden);
      }
    });
  }

  render() {
    const { phoneNumbern, vCoden } = this.state;
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
            {/* {
              vCoden === null ?
                getFieldDecorator('noteCode', {
              rules: [{ required: true, message: '请输入短信验证码!' }],
                })(
              <GetCode phoneNumbern={phoneNumbern}  />
                )
              :
              <GetCode phoneNumbern={phoneNumbern} vCode={this.vCode} />
            } */}
            <GetCode phoneNumbern={phoneNumbern}  />
            {/* <Row gutter={16}>
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
            </Row> */}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
            或者 <Link to="/register">立即注册!</Link>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

const CodeLogin = Form.create()(CodeLogins);
export default CodeLogin
