import React, { Component } from 'react';
import { Breadcrumb, Icon, Select, Form, Button, Table, Input, Divider } from 'antd';
import { Link } from 'react-router-dom';

import PageHeader from '../../../component/page_header/page_header';
import Menus from '../../../component/menus/menus';                            //左边导航栏
// import MyCenter from '../myCenter/myCenter';                                 //右侧内容栏
import './myGoods.css';

const Option = Select.Option;         //Selest 选择器
const { Column } = Table;

class MyGoodss extends Component {
  constructor() {
    super();
    this.state = {
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
    }
  }

  componentWillMount() {
    // 获取后端返回的数据并且储存 再做渲染
    const datas = [{
      key: '1',
      name: <div style={{ display: 'flex', alignItems: 'center', width: '300px' }}>
        <img style={{ paddingRight: '10px' }} src={require('../../../imgs/logo.png')} alt="主图"/>
        <span>寄几个我就哦你公交我估计广播剧和偶记pkkoj脚孤拐告白</span>
      </div>,
      shopName: <div>
        <img src={require('../../../imgs/taobao.png')} alt="shopImg"/>
        <span>就哦你公交我估计广播剧和偶</span>
      </div>,
      age: 32,
      address: '第三方个',
      tags: ['编辑', '加的四个'],
    },{
      key: '11',
      name: <div style={{ display: 'flex', alignItems: 'center', width: '300px' }}>
        <img style={{ paddingRight: '10px' }} src={require('../../../imgs/logo.png')} alt="主图"/>
        <span>寄几个我就哦你公交我估计广播剧和偶记pkkoj脚孤拐告白</span>
      </div>,
      shopName: 'dsjgiosd',
      age: 32,
      address: '第三方个',
      tags: ['编辑', '加的四个'],
    }];
    this.setState({
      datas,
    })
  }

  //Select选择器
  handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  djkj = () => {
    console.log(123321);
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
    const { datas } = this.state;
    return(
      <div>
        {/* 头部组件 */}
        <PageHeader />
        {/* 子页面 */}
        <div className="rawp">
          <div className="contents">
            <div className="contents_left">
              {/* 左侧边栏 */}
              <Menus history ={this.props.history} />
            </div>
            <div className="contents_right">
              <div className="boxPadding">
                {/* 面包屑 */}
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
                <Button type="danger" ghost><Link to="/addGoods">+1232</Link></Button>
              </div>
              {/* 提交搜索的表单 */}
              <Form onSubmit={this.handleSubmit} className="login-form my_goods">
                <Form.Item>
                  {getFieldDecorator('platform', {
                    rules: [{ required: false, message: 'Please input your username!' }],
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
                    rules: [{ required: false, message: 'Please input your Password!' }],
                  })(
                    <div>
                      地方：
                      <Select defaultValue="terminal" style={{ width: 155 }}>
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
                    rules: [{ required: false, message: 'Please input your Password!' }],
                  })(
                    <Input className="sousuo" placeholder="Basic usage" />
                  )}
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" className="login-form-button">
                    搜索
                  </Button>
                </Form.Item>
              </Form>
              {/* shop列表 */}
              {/* 商品信息 价格 规格 最近一次使用时间 操作 */}
              <div>
                <Table className="goodsList" dataSource={datas}>
                  <Column
                    title="First Name"
                    dataIndex="name"
                    key="name"
                  />
                  <Column
                    title="Last Name"
                    dataIndex="shopName"
                    key="shopName"
                  />
                  <Column
                    title="Age"
                    dataIndex="age"
                    key="age"
                  />
                  <Column
                    title="Address"
                    dataIndex="address"
                    key="address"
                  />
                  <Column
                    title="Tags"
                    dataIndex="tags"
                    key="tags"
                    render={tags => (
                      <span>
                        <Button className="goodsBtn" type="danger" ghost><Link to="/">{tags.slice(0,1)}</Link></Button>
                        <Divider type="vertical" />
                        <Button className="goodsBtn" type="primary"><Link to="/">{tags.slice(1)}</Link></Button>
                      </span>
                    )}
                  />
                  <Column
                    title="Action"
                    key="action"
                    render={(text, record) => (
                      <span>
                        <span className="deletes" onClick={this.djkj}>Delete</span>
                      </span>
                    )}
                  />
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const MyGoods = Form.create()(MyGoodss);
export default MyGoods
