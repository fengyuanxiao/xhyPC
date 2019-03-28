// 邀请好友记录
import React, { Component } from 'react';
import { Breadcrumb, Icon, Table } from 'antd';
import { Link } from 'react-router-dom';

import './inviteFriends.css';
import PageHeader from '../../../component/page_header/page_header';           //头部
import Menus from '../../../component/menus/menus';                            //左边导航栏

const { Column } = Table;                                          //表格

class InviteFriendR extends Component {
  constructor() {
    super();
    this.state = {
      recordDatas: false,                             //false表示没有数据
    }
    // console.log(localStorage.getItem("key"));
  }

  componentWillMount() {
    const data = [{
      key: '1',
      date: 'John',
      inviteNumber: 'Brown',
      didOrder: 32,
      youOrdered: 'New York No. 1 Lake Park',
      reward: 'developer',
      operation: 'sdsd'
    }];
    this.setState({
      data,
    })
  }

  render() {
    const { data } = this.state;
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
                    Invite friends record
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <div className="boxPadding friends_none">
                <h2>Accumulated consumption</h2>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default InviteFriendR
