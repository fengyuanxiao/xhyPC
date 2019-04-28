import React, { Component } from 'react';
import { Form, Select, Input, Button, Cascader, message } from 'antd';
import { _addstore, _getCategory, _storecheckcode } from '../../../component/api'; //引入ajax接口
import copy from 'copy-to-clipboard';
const city_new = require('../../../component/city.js');    //三级联动资源库
const publics = require('../../../component/publics');        //引入公共资源文件

const options = city_new.data.RECORDS;    //展示用户选择的省市区
const Option = Select.Option;

class BindFroms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category_oneShow: false,                                        //yijileimu 缓冲器
      category_twoShow: false,                                        //erjileimu 缓冲器
    }
    // console.log(props);
  }

  componentWillMount() {
    // 获取一级类目
    _getCategory()
    .then(res => {
      this.setState({
        category_one: res.data.data,
        category_oneShow: true,
      })
    })
    .catch(err => {
      console.log(err);
    })
    // 获取shop认证码
    _storecheckcode()
    .then(res => {
      // console.log(res.data);
      this.setState({
        code: res.data.data.code
      })
    })
  }

  // closeState按钮关闭 add Shop from
  closeState = () => {
    this.props.hidden()
  }
  // category_one 调用接口执行以下
  handleChange = (e) => {
    // console.log(e);
    let categoryData = {
      id: e
    }
    // 获取category_two调用的 ajax接口
    _getCategory(categoryData)
    .then(res => {
      this.setState({
        category_two: res.data.data,
        category_twoShow: true,
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  // 复制shop code
  copyBtn = () => {
    copy(this.state.code);                              //点击按钮拷贝
    message.success('复制成功，如果失败，请手动复制。');
  }
  // 省市区联动回调
  // onChange = (value) => {
  //   console.log(value);
  // }

  // 提交from表单，
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        if ( !publics.phoneNum.test(values.send_phone) ) {
          message.error("请输入正确的手机号码！");
        } else {
          _addstore(values)
          .then(res => {
            console.log(res.data);
            message.warning(res.data.msg);
          })
          .catch(err => {
            console.log(err);
          })
        }
      }
    });
  }

  render() {
    const { category_one, category_two, category_oneShow, category_twoShow, code } = this.state;
    const { getFieldDecorator } = this.props.form;
    return(
      <div className="bind_box">
        <div className="new_header">
          <h2>bind new shop</h2>
          <span>（jjio Dojodo // DEBUG: ）</span>
        </div>
        <Form className="addGoods_form new_headerChild" onSubmit={this.handleSubmit}>
          <Form.Item
            label="Gender"
          >
            {getFieldDecorator('category_one', {
              rules: [{ required: true, message: 'Please select your gender!' }],
            })(
              <Select placeholder="请选择" style={{ width: 180 }} onChange={this.handleChange}>
                {
                  category_oneShow ?
                    category_one.map((item,index) => {
                      return(
                        <Option key={item.id} value={item.id}>{item.name}</Option>
                      )
                    })
                  :
                  ''
                }
              </Select>
            )}
          </Form.Item>
          <Form.Item
            label="Gender"
          >
            {getFieldDecorator('category_two', {
              rules: [{ required: true, message: 'Please select your gender!' }],
            })(
              <Select placeholder="请选择" style={{ width: 250 }}>
                {
                  category_twoShow ?
                    category_two.map((item,index) => {
                      return(
                        <Option key={item.id} value={item.id}>{item.name}</Option>
                      )
                    })
                  :
                  ''
                }
              </Select>
            )}
          </Form.Item>
          {/* <Form.Item
            label="home URL"
            className="form_item"
            >
            {getFieldDecorator('note', {
              rules: [{ required: true, message: 'Please input your note!' }],
            })(
              <Input placeholder="shopsLink" />
            )}
          </Form.Item> */}
          <div className="new_header form_divs">
            <div>验证码：</div>
            <p>{code}</p>
            <Button onClick={this.copyBtn} type="primary">Copy</Button>
          </div>
          <div className="form_divs" style={{ display: 'block' }}>
            <div>1.就开始叫高品位苹果皮未公开普外科</div>
            <img src={require('../../../imgs/captchaImg.png')} alt="typeShop"/>
          </div>
          <div className="form_divs" style={{ display: 'block' }}>
            <div>2.就开始叫高品位苹果皮未公开普外科<span style={{ color: '#FF6000' }}>ji：（jidsojgojewjgfksldsfdsljfslij）</span></div>
          </div>
          <Form.Item
            label="goods URL"
            className="form_item"
          >
            {getFieldDecorator('goods_url', {
              rules: [{ required: true, message: 'Please input your babyName!' }],
            })(
              <Input placeholder="shopsLink" />
            )}
          </Form.Item>
          {/* <Form.Item
            label="wangwang"
            className="form_item"
            >
            {getFieldDecorator('wangwang', {
              rules: [{ required: true, message: 'Please input your babyName!' }],
            })(
              <Input placeholder="shopsLink" />
            )}
          </Form.Item> */}
          {/* <Form.Item
            label="shopName"
            className="form_item"
            >
            {getFieldDecorator('babyName', {
              rules: [{ required: true, message: 'Please input your babyName!' }],
            })(
              <Input placeholder="shopsLink" />
            )}
          </Form.Item> */}
          <div>
            <Form.Item
              label="所在地区：："
              className="form_item"
              style={{ display: 'flex', width: '30%' }}
            >
              {getFieldDecorator('site', {
                rules: [{ required: true, message: '请完全所在地区!' }],
              })(
                <Cascader style={{ width: '100%', marginLeft: '10px' }} options={options} onChange={this.onChange} placeholder="所在地区" />
                // {/* <Input placeholder="shopsLink" /> */}
              )}
            </Form.Item>
            <Form.Item
              style={{ width: '50%' }}
            >
              {getFieldDecorator('address', {
                rules: [{ required: true, message: '请完全详细地址!' }],
              })(
                <Input style={{ marginLeft: '20px' }} placeholder="详细地址" />
              )}
            </Form.Item>
          </div>
          <Form.Item
            label="send_name"
            className="form_item"
          >
            {getFieldDecorator('send_name', {
              rules: [{ required: true, message: 'Please input your send_name!' }],
            })(
              <Input placeholder="shopsLink" />
            )}
          </Form.Item>
          <Form.Item
            label="send_phone "
            className="form_item"
          >
            {getFieldDecorator('send_phone', {
              rules: [{ required: true, message: 'Please input your send_phone!' }],
            })(
              <Input placeholder="shopsLink" />
            )}
          </Form.Item>
          {/* 提交按钮 */}
          <Form.Item className="submit_btn">
            <Button onClick={this.closeState} className="bottom_btns" type="danger" ghost>danger</Button>
            <Button className="bottom_btns" type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

const BindFrom = Form.create()(BindFroms);
export default BindFrom
