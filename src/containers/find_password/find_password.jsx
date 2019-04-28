import React, { Component } from 'react';
import { Form, Input, Icon, Button, Progress, message } from 'antd';
import { Link } from 'react-router-dom';
import { _losePassword_step1, _losePassword_step2, _losePassword_step3 } from '../../component/api'; //引入ajax接口
import GetCode from '../../component/getCode';            //引入获取验证码组件
const publics = require('../../component/publics'); //引入公共资源文件

class FindPasswords extends Component {
  constructor() {
    super();
    this.state = {
      pwdState: 1,                          //修改密码到达的步骤
    }
  }

  // 处理内存泄露
  componentWillUnmount = () => {
    this.setState = (state,callback)=>{
      return;
    };
  }

  // 第一步：输入手机号码
  handleSubmit1 = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if ( !publics.phoneNum.test(values.mobile) ) {
          message.error("请输入正确的手机号码！")
        } else {
          _losePassword_step1(values)
          .then(res => {
            // console.log(res.data);
            if ( res.data.code === 200 ) {
              this.setState({
                hide_mobile: res.data.data.hide_mobile,                 //填入手机号后，返回加密手机号
                pwdState: 2,                                            //第一步接口调用成功，pwdState状态更好， 并跳转到短信验证
                phoneNumbern: res.data.data.mobile,                     //获取到手机号码
                newAdmin: 2,                                            //添加短信状态码，如果为2 则是忘记密码步骤
              })
              message.success(res.data.msg)
            } else {
              message.warning(res.data.msg)
            }
          })
          .catch(err => {
            console.log(err);
          })
        }
      }
    });
  }

  // 子组件给父组件传来的 输入短信input值
  vCode = (e) => {
    this.setState({
      code: e.target.value
    })
  }
  // 第二步：短信验证码
  handleSubmit2 = (e) => {
    e.preventDefault(e);
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let datas = {
          mobile: this.state.phoneNumbern,
          code: this.state.code,
        }
        _losePassword_step2(datas)
        .then(res => {
          // console.log(res.data);
          if ( res.data.code === 200 ) {
            this.setState({
              pwdState: 3,                           //第二步接口调用成功，pwdState状态再次更换， 并跳转到输入新密码                                   //第一步接口调用成功，pwdState状态更好， 并跳转到短信验证
              pri_key: res.data.data.pri_key,        //用户修改密码的缓存id
            })
          } else {
            message.warning(res.data.msg)
          }
        })
        .catch(err => {
          console.log(err);
        })
      }
    });
  }

  // 第三步：新密码
  handleSubmit3 = (e) => {
    e.preventDefault(e);
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values.pri_key = this.state.pri_key;
        _losePassword_step3(values)
        .then(res => {
          // console.log(res.data);
          if ( res.data.code === 200 ) {
            message.success(res.data.msg);
            this.props.history.push('/');
          } else {
            message.warning(res.data.msg)
          }
        })
        .catch(err => {
          console.log(err);
        })
      }
    });
  }

  render(){
    const { pwdState, hide_mobile, phoneNumbern, newAdmin } = this.state;
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
            <Link to="/">返回登录</Link>
            or
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
          <div className="content-right" style={{ textAlign: 'center' }}>
            <Progress type="circle" width={90} percent={ pwdState === 1 ? 25 : (pwdState === 2 ? 50 : 100) } />
            {
              pwdState === 1 ?
                <p style={{ padding: '19px 0', fontSize: '18px' }}>第一步：请输入手机号</p>
              :
              (pwdState === 2 ?
                <p style={{ padding: '19px 0', fontSize: '18px' }}>第二步：请输入短信验证码</p>
              :
              <p style={{ padding: '19px 0', fontSize: '18px' }}>第三步：请输入新密码</p>
              )
            }
            {/* 成功提交 实施以下步骤 */}
            {
              pwdState === 1 ?
                <Form onSubmit={this.handleSubmit1} className="login-form loginPage">
                  <Form.Item style={{ marginRight: '0' }}>
                    {getFieldDecorator('mobile', {
                      rules: [{ required: true, message: '请输入正确的账号!' }],
                    })(
                      <Input maxLength={11} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="小跳蛙账号\已验证的手机号" />
                    )}
                  </Form.Item>
                  <Form.Item style={{ marginRight: '0' }}>
                    <Button type="primary"  htmlType="submit" style={{ width: '100%' }}>下一步</Button>
                  </Form.Item>
                </Form>
              :
              (pwdState === 2 ?
                <Form onSubmit={this.handleSubmit2} className="login-form loginPage">
                  <Form.Item style={{ marginRight: '0', marginBottom: '0' }}>
                    <p>您的手机号：{hide_mobile}</p>
                  </Form.Item>
                  <Form.Item style={{ marginRight: '0' }}>
                    {/* 短信验证码组件，phoneNumbern获取到后端出来的手机号， newAdmin改为状态码 并传入到验证码组件里面 */}
                    <GetCode vCode={this.vCode} phoneNumbern={phoneNumbern} newAdmin={newAdmin} />
                  </Form.Item>
                  <Form.Item style={{ marginRight: '0' }}>
                    <Button type="primary"  htmlType="submit" style={{ width: '100%' }}>下一步</Button>
                  </Form.Item>
                </Form>
              :
              <Form onSubmit={this.handleSubmit3} className="login-form loginPage">
                <Form.Item
                  label="新密码："
                  style={{ marginRight: '0', display: 'flex', justifyContent: 'space-around' }}
                >
                  {getFieldDecorator('pwd', {
                    rules: [{ required: true, message: '请输入新密码!' }],
                  })(
                    <Input type="password" prefix={<Icon type="lock" />} placeholder="新密码" />
                  )}
                </Form.Item>
                <Form.Item
                  label="确认密码："
                  style={{ marginRight: '0', display: 'flex' }}
                >
                  {getFieldDecorator('confirm_pwd', {
                    rules: [{ required: true, message: '请确认密码!' }],
                  })(
                    <Input type="password" prefix={<Icon type="lock" />} placeholder="确认密码" />
                  )}
                </Form.Item>
                <Form.Item style={{ marginRight: '0' }}>
                  <Button type="primary"  htmlType="submit" style={{ width: '100%' }}>下一步</Button>
                </Form.Item>
              </Form>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

const FindPassword = Form.create()(FindPasswords);
export default FindPassword
