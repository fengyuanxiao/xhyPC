import React, {Component} from 'react';
import { Select, Form, Button, Tree, Pagination} from 'antd';
import { Link } from 'react-router-dom';

import PageHeader from '../../../../component/page_header/page_header'; //头部
import Menus from '../../../../component/menus/menus'; //左边导航栏

const Option = Select.Option;
const { TreeNode } = Tree;    //树形控件

class PublishTaskss extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (<div>
      {/* 头部组件 */}
      <PageHeader/>
      <div className="rawp">
        <div className="contents">
          <div className="contents_left">
            <Menus history={this.props.history}/>
          </div>
          <div className="contents_right">
            {/* 子页面 */}
            <div className="shipment">
              <h2>PublishTasks</h2>
              <hr></hr>
              <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                  {
                    getFieldDecorator('platform', {
                      rules: [
                      {
                          required: true,
                          message: 'Please input your username!'
                      }
                      ]
                    })(<div>
                      三方：
                      <Select defaultValue="全部" style={{
                          width: 180
                      }} onChange={this.handleChange}>
                        <Option value="jack">全部</Option>
                        <Option value="lucy">Lucy</Option>
                      </Select>
                    </div>)
                  }
                </Form.Item>
                <Form.Item>
                  {
                    getFieldDecorator('shops', {
                      rules: [
                      {
                          required: true,
                          message: 'Please input your Password!'
                      }
                      ]
                    })(<div>
                      地方：
                      <Select defaultValue="shops" style={{
                          width: 260
                      }}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                      </Select>
                    </div>)
                  }
                </Form.Item>
                <Form.Item>
                  {
                    getFieldDecorator('taskType', {
                      rules: [
                      {
                          required: true,
                          message: 'Please input your Password!'
                      }
                      ]
                    })(<div>
                      三是的方：
                      <Select defaultValue="taskType" style={{
                          width: 180
                      }} onChange={this.handleChange}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                      </Select>
                    </div>)
                  }
                </Form.Item>
                <Form.Item>
                  {
                    getFieldDecorator('terminal', {
                      rules: [
                      {
                          required: true,
                          message: 'Please input your Password!'
                      }
                      ]
                    })(<div>
                      地方：
                      <Select defaultValue="terminal" style={{
                          width: 120
                      }}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                      </Select>
                    </div>)
                  }
                </Form.Item>
                <Form.Item>
                  {
                    getFieldDecorator('taskState', {
                      rules: [
                      {
                          required: true,
                          message: 'Please input your Password!'
                      }
                      ]
                    })(<div>
                      地方瑟瑟：
                      <Select defaultValue="taskState" style={{
                          width: 120
                      }}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                      </Select>
                    </div>)
                  }
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" className="login-form-button">
                    搜索
                  </Button>
                </Form.Item>
              </Form>
              <Tree className="div_box"
                checkable
                defaultExpandAll={true}
                defaultExpandedKeys={[]}
                defaultSelectedKeys={[]}
                defaultCheckedKeys={[]}
                // onSelect={this.onSelect}
                onCheck={this.onCheck}
              >
                <TreeNode style={{ width: '100%' }} title="全选" key="0">
                  <TreeNode className="div_box_child" title={
                    <div>
                      <div className="div_box_child_top">
                        <div>
                          <img src={require("../../../../imgs/taobao.png")} alt="平台店铺图"/>
                          <span>就看到是防具苹果</span>
                        </div>
                        <div className="div_box_child_top_right">
                          <span>就看到是防具苹果 [<Link to="/">查看详情</Link>]</span>
                          <span>taskAdmin：2019-03-14 12:00</span>
                          <span>就看到是sdsds：<span style={{ color: '#e96262' }}>士大夫</span></span>
                        </div>
                      </div>
                      {/* 《靠近一点点》《小尾巴》《带你去旅行》 */}
                      <div className="publishTasks_css">
                        <div>
                          <div className="publishTasks_css_child">
                            <img className="goodsImgs" src={require("../../../../imgs/login-bg.png")} alt="sp主图"/>
                            <p>接口了打暑假工打暑假工打发时间个大佛赶集网二极管我就</p>
                          </div>
                          <div>State：underway（<span>0</span>） Toe goods（<span>0</span>） Tofund（<span>0</span>） Der sheet（<span>0</span>） ok（<span>0</span>）</div>
                        </div>
                        {/* 右边一键 按钮 */}
                        <div>
                          <Button type="primary">Ftasks</Button>
                          <p>
                            <img style={{ width: '70px', height: '70px' }} src={require("../../../../imgs/login-bg.png")} alt="pingtai"/>
                          </p>
                        </div>
                      </div>
                    </div>
                  } key="1">
                  </TreeNode>
                  <TreeNode className="div_box_child" title={
                    <div>
                      <div className="div_box_child_top">
                        <div>
                          <img src={require("../../../../imgs/taobao.png")} alt="平台店铺图"/>
                          <span>就看到是防具苹果</span>
                        </div>
                        <div className="div_box_child_top_right">
                          <span>就看到是防具苹果 [<Link to="/">查看详情</Link>]</span>
                          <span>taskAdmin：2019-03-14 12:00</span>
                          <span>就看到是sdsds：<span style={{ color: '#e96262' }}>士大夫</span></span>
                        </div>
                      </div>
                      {/* 《靠近一点点》《小尾巴》《带你去旅行》 */}
                      <div className="publishTasks_css">
                        <div>
                          <div className="publishTasks_css_child">
                            <img className="goodsImgs" src={require("../../../../imgs/login-bg.png")} alt="sp主图"/>
                            <p>接口了打暑假工打暑假工打发时间个大佛赶集网二极管我就</p>
                          </div>
                          <div>State：underway（<span>0</span>） Toe goods（<span>0</span>） Tofund（<span>0</span>） Der sheet（<span>0</span>） ok（<span>0</span>）</div>
                        </div>
                        {/* 右边一键 按钮 */}
                        <div>
                          <Button type="primary">Ftasks</Button>
                          <p>
                            <img style={{ width: '70px', height: '70px' }} src={require("../../../../imgs/login-bg.png")} alt="pingtai"/>
                          </p>
                        </div>
                      </div>
                    </div>
                  } key="2">
                  </TreeNode>
                </TreeNode>
              </Tree>
              {/* 分页功能 */}
              <Pagination className="Fpage" onChange={this.paginaTions} onShowSizeChange={this.aaa} defaultCurrent={1} total={15} />
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
}

const PublishTasks = Form.create()(PublishTaskss);
export default PublishTasks
