// 发布goods
import React, { Component } from 'react';
import { Breadcrumb, Icon, Button, Tabs, Radio, Modal, Input, Table } from 'antd';
import { Link } from 'react-router-dom';

import PageHeader from '../../../component/page_header/page_header';           //头部
import AddGoodComponent from '../addGoods/addGoodComponent';                       //添加新商品
import Type1 from './type1';                  //taobao
import Type2 from './type2';                  //taobao

import './release.css';

const TabPane = Tabs.TabPane;                   //Tabs标签页
const RadioGroup = Radio.Group;                 //单选框

const columns = [{
  title: 'Name',
  dataIndex: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
}, {
  title: 'jin Teim',
  dataIndex: 'teims'
}, {
  title: 'Cao zuo',
  dataIndex: 'buttons'
}];

class ReleaseTask extends Component  {
  constructor() {
    super();
    this.state = {
      value: 1,                                   //选择哪个平台类型
      visible: false,                             //visible 为true 的时候  弹出对话框
      addGoodsNum: false,                         //点击新增按钮 addGoodsNum为 true
      commodity_div: false,                       //从商品库选择商品 commodity_div 为true 显示出来
      data: null,
    }
  }

  componentWillMount() {
    const data = [{
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      teims: 'recently',
      buttons: <Button>bt</Button>
    }, {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      teims: 'recently',
      buttons: <Button>bt</Button>
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 L',
      teims: 'recently',
      buttons: <Button>bt</Button>
    }, {
      key: '4',
      name: 'Joe Black',
      age: 32,
      address: 'Sidke Park',
      teims: 'recently',
      buttons: <Button>bt</Button>
    }, {
      key: '5',
      name: 'Joe Black',
      age: 32,
      address: 'Si. 1 Lake Park',
      teims: 'recently',
      buttons: <Button>bt</Button>
    }];
    this.setState({
      data: data,
    })
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
    this.setState({
      visible: true,
    });
  }
  // 关闭对话框
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  // xinjianbaobei
  addGoodsBtn = () => {
    console.log(456);
    this.setState({
      addGoodsNum: !this.state.addGoodsNum,                     //更改addGoodsNum 状态
    })
  }

  render() {
    const { value, addGoodsNum, commodity_div, data } = this.state;
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
                <Button className="goodsBtns" onClick={ this.xuanzeBtn }>jdioowljh</Button>
                <Button className="goodsBtns" onClick={ this.addGoodsBtn }>addGoods</Button>
                {/* commodity_div为true的时候 商品库选择的模板则会显示出来 */}
                {
                  commodity_div ?
                    <div className="addGoodComponents_style">
                      <div className="commodity_div">
                        <p>
                          <img src={require('../../../imgs/taobao.png')} alt='typeTu'/>
                          <span>shops：niunius</span>
                        </p>
                        <p>bianji</p>
                      </div>
                      <div className="commodity_div commodity_div1">
                        <div style={{ display: 'flex', alignItems:'center' }}>
                          <img src={require('../../../imgs/taobao.png')} alt='typeTu'/>
                          <p>safgg5446464</p>
                        </div>
                        <p>ds：ew</p>
                        <p>ds：ew</p>
                        <p>ds：ew</p>
                        <p>ds：ew</p>
                        <p>sdfsw</p>
                      </div>
                    </div>
                  :
                    ""
                }

                {/* addGoodsNum为true的时候 显示新增goods模板 */}
                {
                  addGoodsNum ?
                    <div className="addGoodComponents_style">
                      <AddGoodComponent />
                    </div>
                  :
                    ""
                }
                {/* 3.解决方案 */}
                <div className="typestyle">
                  <h2>3.guanjianchi fankgjioajo</h2>
                  {/* <div className="key_scheme">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                  </div> */}
                  <div className="key_scheme">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                  </div>
                </div>
                <div>

                </div>
              </TabPane>
              <TabPane tab={<span className="releaseSpan">yjk7y</span>} disabled key="2">Tab 2</TabPane>
              <TabPane tab={<span className="releaseSpan">ykll,</span>} disabled key="3">Tab 3</TabPane>
            </Tabs>
          </div>
        </div>


        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          footer={null}
          onCancel={this.handleCancel}
          wrapClassName="modal_Width"
          style={{ width: '70%' }}
        >
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
          {/* 选择goods */}
          <Table columns={columns} dataSource={data} size="middle" />
        </Modal>
      </div>
    )
  }
}

export default ReleaseTask
