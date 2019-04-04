import React, { Component } from 'react';
import { Breadcrumb, Icon, Button, Tabs } from 'antd';
import { Link } from 'react-router-dom';


import PageHeader from '../../../component/page_header/page_header';
// import Menus from '../../../component/menus/menus';                            //左边导航栏

import './binds.css';

const TabPane = Tabs.TabPane;

class PageTaobao extends Component {
  constructor() {
    super();
    this.state = {};
  }

  callback = (key) => {
    console.log(key);
  }

  render() {
    return(
      <div>
        {/* 头部组件 */}
        <PageHeader />
        {/* 面包屑 */}
        <div className="rawp">
          <div className="contents binds">
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
                  Bind shops
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="contents_left">
              <div className="boxPadding" style={{ marginBottom: 0, borderBottom: '1px solid #ccc' }}>
                <span></span>
                <span></span>
              </div>
              <Tabs defaultActiveKey="1" tabPosition={'left'} onChange={this.callback}>
                <TabPane tab={"Tab 1"} key="1">Content of Tab Pane 1</TabPane>
                <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                <TabPane tab="Tab 4" key="4">Content of Tab Pane 4</TabPane>
              </Tabs>
            </div>
            <div className="contents_right">
              {/* 提交搜索的表单 */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PageTaobao
