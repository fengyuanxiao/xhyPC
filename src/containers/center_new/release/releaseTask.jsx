// 发布goods
import React, { Component } from 'react';
import { Breadcrumb, Icon, Alert, Button, Tabs, Radio } from 'antd';
import { Link } from 'react-router-dom';

import PageHeader from '../../../component/page_header/page_header';           //头部
import AddGoodComponent from '../addGoods/addGoodComponent';                       //添加新商品
import Type1 from './type1';                  //taobao
import Type2 from './type2';                  //taobao

import './release.css';

const TabPane = Tabs.TabPane;                   //Tabs标签页
const RadioGroup = Radio.Group;                 //单选框

class ReleaseTask extends Component  {
  constructor() {
    super();
    this.state = {
      value: 1,
      addGoodsNum: false,
    }
  }

  // 单选框 选择pingtai
  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

  // xuanze goodsBtn
  xuanzeBtn = () => {
    console.log(123);
  }

  // xinjianbaobei
  addGoodsBtn = () => {
    console.log(456);
    this.setState({
      addGoodsNum: !this.state.addGoodsNum,
    })
  }

  render() {
    const { value, addGoodsNum } = this.state;
    return(
      <div>
        {/* 头部组件 */}
        <PageHeader />
        <div className="rawp">
          <div className="contents release">
            <div>
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
                  Release a task
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="releasetop">
              <div>
                <Icon type="alert" />
                <span className="releasetop_span">Hil lkKowiwy sojlij</span>
                <span>jo</span>
              </div>
              <Button>Click to expand the previous task</Button>
            </div>
            <h1 style={{ color: '#e96262' }}>releaseTask</h1>
            <Tabs className="releaseHeader" defaultActiveKey="1">
              {/* <TabPane tab={<span className="releaseSpan">第一步：选择任务类型和商品信息</span>} key="1">Tab 1</TabPane>
                <TabPane tab={<span className="releaseSpan">第二步：设置活动计划和增值服务</span>} disabled key="2">Tab 2</TabPane>
              <TabPane tab={<span className="releaseSpan">第三步：支付</span>} disabled key="3">Tab 3</TabPane> */}
              <TabPane tab={<span className="releaseSpan">gwee</span>} key="1">
                <h2>1.Select the platform and task type</h2>
                <RadioGroup className="releaseLabel" onChange={this.onChange} value={this.state.value}>
                  <Radio value={1}>taobao</Radio>
                  <Radio value={2}>tianmao</Radio>
                  <Radio value={3}>jingdong</Radio>
                  <Radio value={4}>pinduoduo</Radio>
                </RadioGroup>
                {/* 判断单选框 平台类型显示 */}
                {
                  value === 1 || value === 2 ?
                    <Type1 />
                  :
                  <Type2 />
                }
                <h2>2.Xuan ze goods</h2>
                <Button onClick={ this.xuanzeBtn }>jdioowljh</Button>
                <Button onClick={ this.addGoodsBtn }>addGoods</Button>
                {
                  addGoodsNum ?
                    <div style={{ boxShadow: '0 0 8px 1px rgba(0,0,0,0.2)' }}>
                      <AddGoodComponent />
                    </div>
                  :
                    ""
                }
                <div>
                  <h2>3.guanjianchi fankgjioajo</h2>
                  <span>dfsdgsdg</span>
                </div>
                <div>

                </div>
              </TabPane>
              <TabPane tab={<span className="releaseSpan">yjk7y</span>} disabled key="2">Tab 2</TabPane>
              <TabPane tab={<span className="releaseSpan">ykll,</span>} disabled key="3">Tab 3</TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    )
  }
}

export default ReleaseTask
