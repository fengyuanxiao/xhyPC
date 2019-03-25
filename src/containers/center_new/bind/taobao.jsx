import React, { Component } from 'react';
import { Breadcrumb, Icon, Select, Form, Button, Table, Input, Divider } from 'antd';
import { Link } from 'react-router-dom';

import PageHeader from '../../../component/page_header/page_header';
import Menus from '../../../component/menus/menus';                            //左边导航栏

class PageTaobao extends Component {

  render() {
    return(
      <div>
        {/* 头部组件 */}
        <PageHeader />
        {/* 面包屑 */}
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
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PageTaobao
