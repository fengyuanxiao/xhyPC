// 发布goods
import React, { Component } from 'react';
import { Breadcrumb, Icon, Button, Tabs, Radio, Modal, Input, Select, Pagination } from 'antd';
import { Link } from 'react-router-dom';

import PageHeader from '../../../component/page_header/page_header';         //头部
import AddGoodComponent from '../addGoods/addGoodComponent';                 //添加新商品
import Type1 from './type1';                                                //taobao
import Type2 from './type2';                                                //taobao
import KeywordComponent from './keyword/keyword';                             //KeywordComponent
import AppreciationServe from './appreciation/appreciationServe';            //增值服务
import { _Publishindex, _GoodsInfoList } from '../../../component/api';                        //引入ajax接口

import './release.css';

const TabPane = Tabs.TabPane;                   //Tabs标签页
const RadioGroup = Radio.Group;                 //单选框
const Option = Select.Option;                   //选择器

class ReleaseTask extends Component  {
  constructor() {
    super();
    this.state = {
      spell: 100,                                   //单选框的值 选择哪个平台类型
      keyword: 1,                                 //是否多关键词
      visible: false,                              //visible 为true 的时候  弹出商品库
      addGoodsNum: false,                         //点击新增按钮 addGoodsNum为 true
      commodity_div: false,                       //从商品库选择商品块 commodity_div 为true 显示出来
      commodity1: 1,                              //为1的时候 不显示关键词方案编辑板 商品关键词或成交词编辑板
      additionalReview: false,                    //是否是追评单 默认是否
      publish_type: false,                        //发布单类型  回访单和追评单只有天猫和淘宝值为true
    }
  }

  componentWillMount() {
    // 发布任务显示平台和任务类型接口
    _Publishindex()
    .then(res => {
      console.log(res.data.data);
    })
    .catch(err => {
      console.log(err);
    });
    // 商品库宝贝列表
    let platform = {  //存储平台类型 传给后台
      platform: this.state.spell,
    }
    _GoodsInfoList(platform, 1)
    .then(res => {
      // console.log(res.data.data);
      this.setState({
        goodsLists: res.data.data.list,                                         //商品列表
        page_count: res.data.data.page_count,                                   //商品总页数
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
  // 发布task进度步骤
  onTabs = (key) => {
    // console.log(key);
    if ( key === '1' ) {
      this.setState({
        recentlyShow: true,
      })
    } else {
      this.setState({
        recentlyShow: false,
      })
    }
  }

  // 单选框 选择pingtai
  onSpell = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      spell: e.target.value,
      commodity_div: false,
      commodity1: 1,
    });
  }
  FudianBtn = (e) => {
    console.log(e.target.value);
    if ( e.target.value === '2' ) {
      this.setState({
        additionalReview: true,
        commodity_div: false,
        publish_type: true,
        commodity1: 1,
      })
    } else if ( e.target.value === '3' ) {
      this.setState({
        publish_type: true,
        additionalReview: false,
      })
    } else {
      this.setState({
        additionalReview: false,
        publish_type: false,
        commodity_div: false,
        commodity1: 1,
      })
    }
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
  // 商品库分页
  onPagination = (pageNumber) => {
    // 商品库宝贝列表
    let platform = {  //存储平台类型 传给后台
      platform: this.state.spell,
    }
    _GoodsInfoList(platform, pageNumber)
    .then(res => {
      console.log(res.data.data);
      this.setState({
        goodsLists: res.data.data.list,                                         //商品列表
      })
    })
    .catch(err => {
      console.log(err);
    })
    console.log('Page: ', pageNumber);
  }
  // 商品库选中的商品
  goodSelectBtn = (id) => {
    console.log(id);
    let goodsLists = this.state.goodsLists;
    for (let i = 0; i < goodsLists.length; i++) {
      if ( goodsLists[i].id === id ) {
        this.setState({
          newGoodsLists: [goodsLists[i]],
        })
      }
    }
    this.setState({
      visible: false,                     //关闭商品库
      commodity1: 2,                      //显示商品关键词或成交词编辑板
      commodity_div: true,                //显示选中的商品块
    });
  }
  // xinzengbaobei
  addGoodsBtn = () => {
    this.setState({
      addGoodsNum: !this.state.addGoodsNum,                     //更改addGoodsNum 状态
    })
  }
  // 编辑baobei
  compileGoods = () => {
    this.setState({
      addGoodsNum: !this.state.addGoodsNum,                     //更改addGoodsNum 状态
    })
  }

  // 发布下一步
  handleSubmit = () => {
  }

  render() {
    const { recentlyShow, spell, addGoodsNum, commodity_div, commodity1, additionalReview, goodsLists,page_count,newGoodsLists,publish_type } = this.state;
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
            {/* 最近发布任务内容  一键发布 */}
            {
              recentlyShow ?
                <div className="releasetop">
                  <div>
                    <Icon type="alert" />
                    <span className="releasetop_span">Hil lkKowiwy sojlij</span>
                    <span>jo</span>
                  </div>
                  <Button>Click to expand the previous task</Button>
                </div>
              :
                ''
            }
            <h1 style={{ color: '#e96262' }}>releaseTask</h1>
            <Tabs onChange={this.onTabs} className="releaseHeader" defaultActiveKey="2">
              {/* <TabPane tab={<span className="releaseSpan">第一步：选择任务类型和商品信息</span>} key="1">Tab 1</TabPane>
                <TabPane tab={<span className="releaseSpan">第二步：设置活动计划和增值服务</span>} disabled key="2">Tab 2</TabPane>
              <TabPane tab={<span className="releaseSpan">第三步：支付</span>} disabled key="3">Tab 3</TabPane> */}
              {/* 第一步 */}
              <TabPane tab={<span className="releaseSpan">gwee</span>} key="1">
                <h2>1.Select the platform and task type</h2>
                <RadioGroup className="releaseLabel" onChange={this.onSpell} value={spell}>
                  {
                    publish_type ?
                      <div>
                        <Radio value={100}>taobao</Radio>
                        <Radio value={101}>tianmao</Radio>
                      </div>
                    :
                    <div>
                      <Radio value={100}>taobao</Radio>
                      <Radio value={101}>tianmao</Radio>
                      <Radio value={3}>jingdong</Radio>
                      <Radio value={4}>pinduoduo</Radio>
                    </div>
                  }
                </RadioGroup>
                {/* 判断单选框 平台类型显示 */}
                {
                  spell === 100 || spell === 101 ?
                    <Type1 FudianBtn={this.FudianBtn} />
                  :
                  <Type2 />
                }
                <h2>2.Xuan ze goods</h2>
                <Button className="goodsBtns" onClick={ this.xuanzeBtn }>jdioowljh</Button>
                {/* //是否是追评单 默认是否  如果选择追评则会隐藏关键词编辑板 和 新增宝贝按钮 */}
                {
                  additionalReview ?
                    ''
                  :
                  <Button className="goodsBtns" onClick={ this.addGoodsBtn }>addGoods</Button>
                }
                {/* commodity_div为true的时候 商品库选择的模板则会显示出来 */}
                {
                  commodity_div ?
                    newGoodsLists.map((item, index) => {
                      return(
                        <div key={item.id} className="addGoodComponents_style">
                          <div className="commodity_div">
                            <p>
                              <img src={item.icon_img} alt='typeTu'/>
                              <span>taoba：{item.store_name}</span>
                            </p>
                            <p onClick={this.compileGoods}>编辑</p>
                          </div>
                          <div className="commodity_div commodity_div1">
                            <div style={{ display: 'flex', alignItems:'center' }}>
                              <img style={{ width: '16%' }} src={item.phone_img1} alt='typeTu'/>
                              <p>{item.goods_name}</p>
                            </div>
                            <p>ds：{item.pay_price}</p>
                            <p>ds：{item.show_price}</p>
                            <p>ds：{item.pay_nums}</p>
                            <p>ds：{item.rules}</p>
                            {
                              item.free_post === 1?
                                <p>bao</p>
                              :
                              <p>sdfsw</p>
                            }
                          </div>
                        </div>
                      )
                    })
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
                {/* 3.guanjianchi方案 */}
                {/* //是否是追评单 默认是否  如果选择追评则会隐藏关键词编辑板 */}
                {
                  additionalReview ?
                    ''
                  :
                  <div className="typestyle">
                    <h2>3.guanjianchi fankgjioajo</h2>
                    {/* 在商品库选中了商品 则会显示方案编辑板 */}
                    {
                      commodity1 === 1 ?
                        <div className="key_scheme">
                          <span>方案名称</span>
                          <span>APP搜索词</span>
                          <span>PC搜索词</span>
                          <span>淘口令下单</span>
                          <span>二维码下单</span>
                          <span>操作</span>
                        </div>
                      :
                      <KeywordComponent />
                    }
                  </div>
                }
              </TabPane>
              {/* 第二步 */}
              <TabPane tab={<span className="releaseSpan">yjk7y</span>} key="2">
                <AppreciationServe />
              </TabPane>
              {/* 第三步 */}
              <TabPane tab={<span className="releaseSpan">ykll,</span>} disabled key="3">Tab 3</TabPane>
            </Tabs>
            <div style={{ padding: '50px 0' }} className="releaseBtnok">
              <Button>取消</Button>
              <Button onClick={this.handleSubmit} type="primary">下一步</Button>
            </div>
          </div>
        </div>

        {/* 商品库中的商品 */}
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          footer={null}
          onCancel={this.handleCancel}
          wrapClassName="modal_Width"
          style={{ width: '70%' }}
        >
          <div className="yajin_center_tab">
            <div style={{ width: '30%' }}>
              <span>dsfds：</span>
              <Select style={{ width: '75%' }} placeholder="综合排序">
                <Option value="销量排序">销量排序</Option>
                <Option value="从高到低">从高到低</Option>
                <Option value="从低到高">从低到高</Option>
              </Select>
            </div>
            <p style={{ width: '30%' }}>
              <span>itme：</span>
              <Input style={{ width: '20%', marginRight: '5px' }} />
              <span>至</span>
              <Input style={{ width: '20%', margin: '0 5px' }} />
              <span>元</span>
            </p>
            <p style={{ width: '40%', marginRight: '0' }}>
              <Input placeholder="请输入关键字进行精确搜索" style={{ marginRight: '15px' }} />
              <Button>搜索</Button>
            </p>
          </div>
          {/* 选择goods */}
          <div>
            <div className="goodsKu">
              <span>商品信息</span>
              <span>价格</span>
              <span>规格</span>
              <span>最近一次使用时间</span>
              <span>操作</span>
            </div>
            {/* 循环此处div */}
            {
              goodsLists ?
                goodsLists.map((item, index) => {
                  return(
                    <div key={index} className="goodsKu_child">
                      <p>
                        <img src={item.icon_img} alt="types"/>
                        <span>{item.store_name}</span>
                      </p>
                      <div className="goodsKu_bottom">
                        <img src={item.phone_img1} alt="商品图" />
                        <span>{item.goods_name}</span>
                        <span>{item.pay_price}</span>
                        <span>{item.rules}</span>
                        <span>{item.use_last_time}</span>
                        <Button onClick={()=>this.goodSelectBtn(item.id) } type="primary">选择</Button>
                      </div>
                    </div>
                  )
                })
              :
              ''
            }
            <Pagination className="paginations" defaultPageSize={3} showQuickJumper defaultCurrent={1} total={page_count} onChange={this.onPagination} />
          </div>
        </Modal>
      </div>
    )
  }
}

export default ReleaseTask
