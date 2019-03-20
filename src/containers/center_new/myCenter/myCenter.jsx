import React, { Component } from 'react';
import { Icon, Button, Popover, Tabs, Badge } from 'antd';
import { Link } from 'react-router-dom';

import './myCenter.css';

import TaskAdmins from '../../../component/taskAdmin/taskAdmin';

const TabPane = Tabs.TabPane;
const content = (
  <div>
    <p>商家发布任务需要订购技术服务才能发布任务</p>
  </div>
);

class MyCenter extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  callback = (key) => {
    console.log(key);
  }

  render() {
    return(
      <div className="content_box">
        {/* 头像头部 发布任务按钮 */}
        <div className="content_top">
          <div className="content_header">
            <p className="center_Img">
              <img src={require("../../../imgs/registerImg.jpg")} alt="toux"/>
            </p>
            <div>
              <p className="header_top_center">
                <span>19979058262</span>
                <span>技术服务时长</span>
                <img style={{ width: "24%" }} src={require("../../../imgs/captchaImg.png")} alt="升级图"/>
                <Popover content={content} placement="right" trigger="hover">
                  <Icon type="question-circle" />
                </Popover>
              </p>
              <div className="header_top_center1">
                <p>到期时间： <span style={{ color: '#e96262' }}>2019-06-29</span></p>
                <Button type="danger">延长技术服务时长></Button>
                <p className="anquan">安全级别：
                  <Link to="/"><Icon type="mobile" /></Link>
                  <Link to="/"><Icon type="lock" /></Link>
                </p>
              </div>
            </div>
          </div>
          <div className="header_top_right">
            <Button type="primary">老翁就就</Button>
          </div>
        </div>
        {/* 我的押金、可用浮点、邀请好友 */}
        <div className="content_top_next commonalitys">
          <div className="content_top_next_left">
            <div className="content_top_next_left_Child">
              <div>
                <div>
                  My cash pledge
                  <Popover content={content} placement="right" trigger="hover">
                    <Icon type="question-circle" />
                  </Popover>
                </div>
                <div className="next_left_Child1">
                  <span>1123.1</span>
                  <Button type="danger">Chas</Button>
                </div>
                <div className="next_left_Child1">
                  <p><span>dongJ：</span><span>money</span></p>
                  <Button className="deposit" type="danger">Top-up deposit</Button>
                </div>
              </div>
              <div>
                <p>可用浮点
                  <Popover content={content} placement="right" trigger="hover">
                    <Icon style={{ paddingLeft: '10px' }} type="question-circle" />
                  </Popover>
                </p>
                <p><span>0.00</span>浮点</p>
                <Button type="danger">啦啦浮点</Button>
              </div>
            </div>
            <div className="content_top_next_left_button">
              资金记录：
              <p>
                <Popover placement="bottom" content={content} trigger="click">
                  <Icon type="clock-circle" theme="twoTone" />最近押金记录<Icon type="caret-down" />
                </Popover>
              </p>
              <p>
                <Popover placement="bottom" content={content} trigger="click">
                  <Icon type="pay-circle" />最近符点记录<Icon type="caret-down" />
                </Popover>
              </p>
            </div>
          </div>
          <div className="content_top_next_right">
            <p>yaoiqngHaoyou</p>
            <p>dayYaoqing：<span>0</span>点点</p>
            <p>dayYaoqing：<span>0</span>比伯</p>
            <div className="content_top_next_right_div">
              <div>
                <p>dayYaoqing：<span>0</span>点点</p>
                <p>dayYaoqing：<span>0</span>比伯</p>
              </div>
              <Button type="danger">Yaoqing</Button>
            </div>
          </div>
        </div>
        {/* 网站公告、常见问题 */}
        <Tabs className="commonalitys" defaultActiveKey="1" onChange={this.callback}>
          <TabPane className="commonalitys_child" tab="网站公告" key="1">
            {/* <p><Link to="/">【商家必读】平台返款功能规则调整上线通知</Link><span>2019-01-11</span></p>
              <p><Link to="/">【公告】关于平台批量发货的优化问题</Link><span>2019-01-11</span></p>
              <p><Link to="/">【商家必读】商家发布任务流程介绍！</Link><span>2019-01-11</span></p>
            <p><Link to="/">【公告】请商家及时给买手返款！超48小时订单自动扣除5%的退款保证金！</Link><span>2019-01-11</span></p> */}
            <p><Link to="/">【能规则调整】能规则调整能规则调整能规则调整能规则调整</Link><span>2019-01-11</span></p>
            <p><Link to="/">能规则调整能规则调整能规则调整能规则调整</Link><span>2019-01-11</span></p>
            <p><Link to="/">能规则调整能规则调整能规则调整</Link><span>2019-01-11</span></p>
            <p><Link to="/">能规则调整能规则调整能规则调整</Link><span>2019-01-11</span></p>
          </TabPane>
          <TabPane className="commonalitys_child" tab="常见问题" key="2">
            <p><Link to="/">押金提现后退到哪里去了？</Link><span>2019-01-11</span></p>
            <p><Link to="/">什么情况下客服会撤回商家的任务？</Link><span>2019-01-11</span></p>
            <p><Link to="/">商家在任务列表找不到已发布任务情况说明</Link><span>2019-01-11</span></p>
            <p><Link to="/">平台返款功能及流程介绍</Link><span>2019-01-11</span></p>
            <p><Link to="/">商家发布手机端任务的注意事项！</Link><span>2019-01-11</span></p>
            <p><Link to="/">商家如何加快已发布任务的完成速度？</Link><span>2019-01-11</span></p>
            <p><Link to="/">【商家必读】商家发货流程介绍【重要！】</Link><span>2019-01-11</span></p>
            <p><Link to="/">商家发布任务流程介绍</Link><span>2019-01-11</span></p>
          </TabPane>
        </Tabs>
        {/* 待处理任务 */}
        <div className="commonalitys shipment">
          {/* <h2>待处理的任务</h2> */}
          <h2>待处理的html代码</h2>
          <hr></hr>
          <Tabs defaultActiveKey="1" onChange={this.callback} type="card" animated={true}>
            {/* 店铺越多 TabPane就越多 */}
            <TabPane className="pending_shop" tab="妞妞" key="1">
              <Link to="/">Paid, awaiting shipment<span>（0）</span></Link>
              <Link to="/">Paid, awaiting shipment<span>（0）</span></Link>
              <Link to="/">Paid, awaiting shipment<span>（0）</span></Link>
              <Link to="/">Paid, awaiting shipment<span>（0）</span></Link>
              <Link to="/">Paid, awaiting shipment<span>（0）</span></Link>
              <Link to="/">Paid, awaiting shipment<span>（0）</span></Link>
            </TabPane>
            <TabPane className="pending_shop" tab="笑笑" key="2">
              <Link to="/">Paid, awaiting shipment<span>（0）</span></Link>
              <Link to="/">Paid, awaiting shipment<span>（0）</span></Link>
              <Link to="/">Paid, awaiting shipment<span>（0）</span></Link>
              <Link to="/">Paid, awaiting shipment<span>（0）</span></Link>
              <Link to="/">Paid, awaiting shipment<span>（0）</span></Link>
              <Link to="/">Paid, awaiting shipment<span>（0）</span></Link>
            </TabPane>
          </Tabs>
        </div>
        {/* task管理 */}
        <TaskAdmins />
      </div>
    )
  }
}

export default MyCenter
