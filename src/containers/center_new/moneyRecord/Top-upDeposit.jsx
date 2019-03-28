// chognzhiyajin
import React, { Component } from 'react';
import { Breadcrumb, Icon, Button } from 'antd';
import { Link } from 'react-router-dom';

import './updeposit.css';

import PageHeader from '../../../component/page_header/page_header';                             //头部

class TopUpDeposit extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return(
        <div>
          {/* 头部组件 */}
          <PageHeader />
          <div className="rawp">
            <div className="contents UpDeposit">
              <div style={{ padding: '10px 0' }}>
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
                    Invite Friend
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <div className="UpDeposit_top">
                <div className="UpDeposit_header">
                  <h1>Recharge</h1>
                  <span>huihlkjpkpo;klm;kgyug<span>11</span>gegergrghrthtr</span>
                </div>
              </div>
              <table className="UpDeposit_table" border="1">
                <tbody>
                  <tr>
                    <td>
                      <Icon className="header_right" type="sound" />
                      <span className="header_right">Buyer incentives</span>
                    </td>
                    <td>
                      <p>1、Invite friends to complete the first task, reward <span>10</span> points;</p>
                      <p className="header_leftfonts">2、For each successful completion of friend's second order, the inviter will get a reward: <span>1</span> point/order</p>
                      <p className="header_leftfonts"> ①Invite friends to complete the first task, reward <span>10</span> points;</p>
                      <p className="header_leftfonts"> ②Invite friends to complete the first task, reward <span>10</span> points;</p>
                      <p className="header_leftfonts"> ③Invite friends to complete the first task, reward <span>10</span> points;</p>
                      <p>3、Invite friends to complete the first task, reward <span>10</span> points<Button style={{ marginLeft: '10px' }} type="primary">jkjdpop</Button></p></td>
                  </tr>
                </tbody>
              </table>
              <div className="">
                123
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default TopUpDeposit
