// 邀请好友奖励
import React, { Component } from 'react';
import { Breadcrumb, Icon, Alert } from 'antd';
import { Link } from 'react-router-dom';

import './inviteFriends.css';
import PageHeader from '../../../component/page_header/page_header';           //头部
import Menus from '../../../component/menus/menus';                            //左边导航栏

class InviteFriend extends Component {
  constructor() {
    super();
    this.state = {}
    // console.log(localStorage.getItem("key"));
  }

  render() {
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
                    Invite Friend
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <div className="boxPadding friendPage">
                <h2>Accumulated consumption points of more than <span>500</span> points will be eligible for invitation</h2>
                <p>You have spent <span>22.74</span> points, and you need to spend <span>477.26</span> points to qualify for the invitation</p>
                <h3><Link to="/addGoods">Go to the consumer dot ></Link></h3>
              </div>
              {/* yaoqingjiangli */}
              <div className="boxPadding jiangli">
                <h2>Invite rewards</h2>
                <p><Icon type="heart" theme="twoTone" twoToneColor="#e96262" />J;krfokgr;lekkogrekwopwkcxcvweewrewpgre,fbdkokokojoj</p>
                <table className="jiangli_table" border="1">
                  <tbody>
                    <tr>
                      <td>Months</td>
                      <td>Three months reward</td>
                      <td>Three months reward</td>
                      <td>Three months reward</td>
                      <td>Three months reward</td>
                      <td>Three months reward</td>
                    </tr>
                    <tr>
                      <td>Floating number </td>
                      <td><span>Three months</span> reward</td>
                      <td><span>Three months</span> reward</td>
                      <td><span>Three months</span> reward</td>
                      <td><span>Three months</span> reward</td>
                      <td><span>Three months</span> reward</td>
                    </tr>
                  </tbody>
                </table>
                <p><Icon type="heart" theme="twoTone" twoToneColor="#e96262" />J;krfokgr;lekkogrekwopwkcxcvweewrewpgre,fbdkokokojoj</p>
                <table className="jiangli_table2" border="1">
                  <tbody>
                    <tr>
                      <td>Buyer incentives</td>
                      <td>
                        <p>Invite friends to complete the first task, reward <span>10</span> points;</p>
                        <p>For each successful completion of friend's second order, the inviter will get a reward: <span>1</span> point/order</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <Alert
                  message="Warning"
                  description="This is a warning notice about copywriting."
                  type="warning"
                  showIcon
                />
              </div>
              <div className="boxPadding jiangli">
                <h2>Invite rewards</h2>
                <h3>ask ：</h3>
                <div>I invite the buyers to complete the task before this activity starts. Can I get the reward of 10 points for the first order?</div>

                <h3>ask ：</h3>
                <div>I invite the buyers to complete the task before this activity starts. Can I get the reward of 10 points for the first order?</div>

                <h3>ask ：</h3>
                <div>I invite the buyers to complete the task before this activity starts. Can I get the reward of 10 points for the first order?</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default InviteFriend
