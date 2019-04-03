import React, { Component } from 'react';
import { Breadcrumb, Icon, Table, Button, Input } from 'antd';
import { Link } from 'react-router-dom';

import './accounts.css';

import PageHeader from '../../../component/page_header/page_header';            //页面头部
import Menus from '../../../component/menus/menus';                             //左边导航栏

const columns = [{
  title: 'Buy no',
  dataIndex: 'buy',
}, {
  title: 'Blocking time',
  dataIndex: 'blockTime',
}, {
  title: 'Blocking reason',
  dataIndex: 'blockReason',
}, {
  title: 'Freezing time',
  dataIndex: 'freezingTime',
}, {
  title: 'Caozuo',
  dataIndex: 'caozuo',
}];
const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    buy: `Edward King ${i}`,
    blockTime: '2019-4-2 20:25',
    blockReason: `London, Park Lane no. ${i}`,
    freezingTime: <span style={{ color: 'red' }}>{`freezingTime ${i}`}</span>,
    caozuo: `caozuo ${i}`
  });
}

class AccountXX extends Component {
  constructor() {
    super();
    this.state = {
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
    }
  }

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  }

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
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
                    blacklist
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
              {/* 发布 goods */}
              <div className="goodsCss">
                <div className="yajin_header">
                  <h2>blacklist </h2>
                </div>
                <hr></hr>
                {/* 全选 */}
                <div>
                  <div className="blacklist_top">
                    <Button
                      type="primary"
                      onClick={this.start}
                      disabled={!hasSelected}
                      loading={loading}
                    >
                      Reload
                    </Button>
                    <div className="blacklist_top_child">
                      <span>profile</span>
                      <span>+profile</span>
                      <span>+profile</span>
                    </div>
                  </div>
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
                  <span style={{ marginLeft: 8 }}>
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                  </span>
                </div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AccountXX
