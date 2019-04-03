import React, { Component } from 'react';
import { Breadcrumb, Icon, Table, Button, Input, Modal } from 'antd';
import { Link } from 'react-router-dom';

import './accounts.css';

import PageHeader from '../../../component/page_header/page_header';            //页面头部
import Menus from '../../../component/menus/menus';                             //左边导航栏

class BasicXinxi extends Component {
  constructor() {
    super();
    this.state = {
      visible: false
    }
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
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
                    basicXinxi
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
              {/* 发布 goods */}
              <div className="goodsCss">
                <div className="yajin_header">
                  <h2>basicXinxi </h2>
                </div>
                <hr></hr>
                <div className="basicXinxi_top">
                  <div>
                    <Icon type="check" />
                    <span>// QUESTION: djk</span>
                  </div>
                  <p>prom</p>
                  <p onClick={this.showModal}>go to YajinRecord >></p>
                </div>
                <hr></hr>
                <div className="basicXinxi_top">
                  <div>
                    <Icon type="check" />
                    <span>// QUESTION: djk</span>
                  </div>
                  <p>prom</p>
                  <p onClick={this.showModal}>goly jinRecord >></p>
                </div>
                <hr></hr>
                <div className="basicXinxi_top">
                  <div>
                    <Icon type="check" />
                    <span>// QUESTION: djk</span>
                  </div>
                  <p>prom</p>
                  <p onClick={this.showModal}>o Yajirytt >></p>
                </div>
                <hr></hr>
              </div>
            </div>
          </div>
        </div>

        {/* 登录密码 Modal */}
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        {/* 提现密码 */}
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        {/* 联系方式 */}
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    )
  }
}

export default BasicXinxi
