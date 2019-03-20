import React, { Component } from 'react';
import { Breadcrumb, Icon, Select, Form, Button, Input } from 'antd';
import { Link } from 'react-router-dom';

import PageHeader from '../../../component/page_header/page_header';
import Menus from '../../../component/menus/menus';                            //左边导航栏
import MyCenter from '../myCenter/myCenter';                                 //右侧内容栏
import './myGoods.css';

const Option = Select.Option;         //Selest 选择器

class MyGoodss extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  //Select选择器
  handleChange = (value) => {
    console.log(`selected ${value}`);
  }
  //form 表单提交函数
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
        {/* 头部组件 */}
        <PageHeader />
        <div className="rawp">
          <div className="contents">
            <div className="contents_left">
              <Menus history ={this.props.history} />
            </div>
            <div className="contents_right">
              {/* 子页面 */}
              <div className="boxPadding">
                <Breadcrumb className="mbx">
                  <Breadcrumb.Item>
                    <Link to="/center_new">
                      <Icon type="home" />
                    </Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <Link to="/center_new">
                      <Icon type="user" />
                      <span>Center</span>
                    </Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    My Goods
                  </Breadcrumb.Item>
                </Breadcrumb>
                <Button type="danger" ghost>+1232</Button>
              </div>
              <Form onSubmit={this.handleSubmit} className="login-form my_goods">
                <Form.Item>
                  {getFieldDecorator('platform', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                    <div>
                      三方：
                      <Select defaultValue="全部" style={{ width: 120 }} onChange={this.handleChange}>
                        <Option value="jack">全部</Option>
                        <Option value="lucy">Lucy</Option>
                      </Select>
                    </div>
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('terminal', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                    <div>
                      地方：
                      <Select defaultValue="terminal" style={{ width: 120 }}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                      </Select>
                    </div>
                  )}
                </Form.Item>
                <Form.Item>
                  <div>
                    jiage：
                    <Input className="moneys" />
                    至
                    <Input className="moneys" />
                    money
                  </div>
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('taskState', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                    <div>
                      地方瑟瑟：
                      <Input className="sousuo" placeholder="Basic usage" />
                    </div>
                  )}
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" className="login-form-button">
                    搜索
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const MyGoods = Form.create()(MyGoodss);
export default MyGoods
