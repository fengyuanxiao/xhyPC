// 发布goods
import React, { Component } from 'react';
import { Breadcrumb, Icon, Button, Tabs, Radio, Modal, Input } from 'antd';
import { Link } from 'react-router-dom';

import PageHeader from '../../../component/page_header/page_header';           //头部
import AddGoodComponent from '../addGoods/addGoodComponent';                       //添加新商品
import Type1 from './type1';                                                //taobao
import Type2 from './type2';                                                //taobao
import KeywordComponent from './keyword/keyword';                             //KeywordComponent
import { _Publishindex } from '../../../component/api';                        //引入ajax接口

import './release.css';

const TabPane = Tabs.TabPane;                   //Tabs标签页
const RadioGroup = Radio.Group;                 //单选框

class ReleaseTask extends Component  {
  constructor() {
    super();
    this.state = {
      spell: 1,                                   //单选框的值 选择哪个平台类型
      keyword: 1,                                 //是否多关键词
      visible: false,                             //visible 为true 的时候  弹出商品库
      addGoodsNum: false,                         //点击新增按钮 addGoodsNum为 true
      commodity_div: false,                       //从商品库选择商品 commodity_div 为true 显示出来
      data: null,                                 //商品库
      commodity1: 2,                              //为1的时候 不显示关键词方案编辑板
    }
  }

  componentWillMount() {
    _Publishindex()
    .then(res => {
      console.log(res.data.data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  // 单选框 选择pingtai
  onSpell = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      spell: e.target.value,
    });
  }

  // 从商品库中选择商品
  xuanzeBtn = () => {
    this.setState({
      visible: true,
    });
  }
  // 关闭商品库框
  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }

  // xinzengbaobei
  addGoodsBtn = () => {
    console.log(456);
    this.setState({
      addGoodsNum: !this.state.addGoodsNum,                     //更改addGoodsNum 状态
    })
  }

  // 发布下一步
  handleSubmit = () => {
  }

  render() {
    const { spell, addGoodsNum, commodity_div, commodity1 } = this.state;
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
                <RadioGroup className="releaseLabel" onChange={this.onSpell} value={spell}>
                  <Radio value={1}>taobao</Radio>
                  <Radio value={2}>tianmao</Radio>
                  <Radio value={3}>jingdong</Radio>
                  <Radio value={4}>pinduoduo</Radio>
                </RadioGroup>
                {/* 判断单选框 平台类型显示 */}
                {
                  spell === 1 || spell === 2 ?
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
                  {/* 在商品库选中了商品 则会显示方案编辑板 */}
                  {
                    commodity1 === 1 ?
                      <div className="key_scheme">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                      </div>
                    :
                    <KeywordComponent />
                  }
                </div>
                <div>

                </div>
              </TabPane>
              <TabPane tab={<span className="releaseSpan">yjk7y</span>} disabled key="2">Tab 2</TabPane>
              <TabPane tab={<span className="releaseSpan">ykll,</span>} disabled key="3">Tab 3</TabPane>
            </Tabs>
            <div style={{ padding: '50px 0' }} className="releaseBtnok">
              <Button>取消</Button>
              <Button onClick={this.handleSubmit} type="primary">下一步</Button>
            </div>
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
          <div>
            <div className="goodsKu">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>
            <div>
              <p><img src={require('../../../imgs/taobao.png')} alt="types"/></p>
              <div className="goodsKu_bottom">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

export default ReleaseTask
