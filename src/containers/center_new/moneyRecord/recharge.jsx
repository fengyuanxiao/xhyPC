// 充值记录
import React, { Component } from 'react';
import { Breadcrumb, Icon, Tabs, Input, Button, Table } from 'antd';
import { Link } from 'react-router-dom';

import PageHeader from '../../../component/page_header/page_header';            //页面头部
import Menus from '../../../component/menus/menus';                             //左边导航栏

import './updeposit.css';

const TabPane = Tabs.TabPane;                                                   //标签页
const { Column } = Table;                                          //表格

class Recharge extends Component {
  constructor() {
    super();
    this.state = {
      recordDatas: false,                             //false表示没有数据
    }
  }

  componentWillMount() {
    // 返回的记录数据
      //押金记录
    const data = [{
      key: '1',
      date: 'John',
      inviteNumber: 'Brown',
      didOrder: 32,
      youOrdered: 'New York No. 1 Lake Park',
      reward: 'developer',
      operation: 'sdsd'
    },{
      key: '2',
      date: 'John',
      inviteNumber: 'Brown',
      didOrder: 32,
      youOrdered: 'New York No. 1 Lake Park',
      reward: 'developer',
      operation: 'sdsd'
    }];
    // fudian记录
  const fudian = [{
    key: '1',
    date: 'John',
    inviteNumber: 'Brown',
    didOrder: 32,
  },{
    key: '2',
    date: 'John',
    inviteNumber: 'Brown',
    didOrder: 32,
  }];
    this.setState({
      data,
      fudian,
    })
  }

  callback = (key) => {
    console.log(key);
  }

  render() {
    const { data, fudian } = this.state;
    return(
      <div>
        {/* 头部组件 */}
        <PageHeader />
        <div className="rawp">
          <div className="contents">
            <div className="contents_left">
              {/* 左侧边栏 */}
              <Menus history ={this.props.history} />
            </div>
            <div className="contents_right">
              {/* 内容 */}
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
                    Yajin record
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
              {/* 发布 goods */}
              <div className="goodsCss">
                <div className="yajin_header">
                  <h2>Goods message </h2>
                  <span>（dsgrhtjghjyhkteqqwewqe）</span>
                </div>
                <hr></hr>
              </div>
              <Tabs className="yajin_center" onChange={this.callback} type="card">
                <TabPane tab="Tab 1" key="1">
                  <div className="yajin_center_tab">
                    <p>
                      <span>dsfds：</span>
                      <Input />
                    </p>
                    <p>
                      <span>itme：</span>
                      <Input />
                      <span>-</span>
                      <Input />
                    </p>
                    <p>
                      <Button>sad</Button>
                      <Button>ret</Button>
                    </p>
                  </div>
                  <Table dataSource={data}>
                    <Column
                      title="Date"
                      dataIndex="date"
                      key="date"
                    />
                    <Column
                      title="InviteNumber"
                      dataIndex="inviteNumber"
                      key="inviteNumber"
                    />
                    <Column
                      title="DidOrder"
                      dataIndex="didOrder"
                      key="didOrder"
                    />
                    <Column
                      title="YouOrdered"
                      dataIndex="youOrdered"
                      key="youOrdered"
                    />
                    <Column
                      title="Reward"
                      dataIndex="reward"
                      key="reward"
                    />
                    <Column
                      title="Operation"
                      key="operation"
                      dataIndex="operation"
                    />
                  </Table>
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                  <div className="yajin_center_tab">
                    <p>
                      <span>itme：</span>
                      <Input />
                      <span>-</span>
                      <Input />
                    </p>
                    <p>
                      <Button>sad</Button>
                      <Button>ret</Button>
                    </p>
                  </div>
                  <Table dataSource={fudian}>
                    <Column
                      title="Date"
                      dataIndex="date"
                      key="date"
                    />
                    <Column
                      title="InviteNumber"
                      dataIndex="inviteNumber"
                      key="inviteNumber"
                    />
                    <Column
                      title="DidOrder"
                      dataIndex="didOrder"
                      key="didOrder"
                    />
                  </Table>
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Recharge
