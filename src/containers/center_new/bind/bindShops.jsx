import React, { Component } from 'react';
import { Breadcrumb, Icon, Tabs, Badge, Button, Form } from 'antd';
import { Link } from 'react-router-dom';

import { _shopList } from '../../../component/api'; //引入ajax接口
import PageHeader from '../../../component/page_header/page_header';
import BindFrom from './bindFrom';
// import Menus from '../../../component/menus/menus';                            //左边导航栏

import './binds.css';

const TabPane = Tabs.TabPane;

class BindShopss extends Component {
  constructor() {
    super();
    this.state = {
      addShopsForm: false,                      //添加shop from表单 如果为true 则显示出来
    };
  }

  componentWillMount() {
    _shopList()
    .then(res => {
      console.log(res.data);
      let shopLists = res.data.data;
      this.setState({
        taobaoList: shopLists.taobao.list,                  //shop lists
        jdList: shopLists.jd.list,                          //shop list
        pddList: shopLists.pdd.list,                        //shop list
        tmaillList: shopLists.tmaill.list,                  //shop list
        taobao: shopLists.taobao.count,                     //shop type
        jd: shopLists.jd.count,                             //shop type
        pdd: shopLists.pdd.count,                           //shop type
        tmaill: shopLists.tmaill.count,                     //shop type
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  // 选择bind shops
  callback = (key) => {
    // console.log(key);
  }

  // 添加shop from
  addShopsForm = () => {
    this.setState({
      addShopsForm: true,             //点击按钮添加shop， from表单显示出来
    })
  }
  // 子组件控制父组件的状态，控制 shop from 的隐藏
  handleClose = () => {
    this.setState({
      addShopsForm: false,             //点击按钮添加shop， from表单隐藏，由子组件控制该状态
    })
  }

  render() {
    const { addShopsForm, taobao, jd, pdd, tmaill, taobaoList,jdList,pddList,tmaillList } = this.state;
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
                <span>Shops Admin</span>
                <span>Bind shop</span>
              </div>
              <Tabs className="tabContent" defaultActiveKey="1" tabPosition={'left'} onChange={this.callback}>
                <TabPane tab={<div className="tabBind"><span>123dsfge</span><Badge count={taobao} /></div>} key="1">
                  <h2>一.Bind shops xuzhi</h2>
                  <p>1.Each account can be bound to 14 major platforms, including taobao, Tmall, jd, yihaodian, jumei, amazon, dangdang, paipai, alibaba, mogujie, meilishuo, gome, suning, and pengduo. Each platform can be bound to 3 stores at most (the bound stores are valid for a long time).</p>
                  <p>2.Each account can be bound to 14 major platforms, including taobao, Tmall, jd, yihaodian, jumei, amazon, dangdang, paipai, alibaba, mogujie, meilishuo, </p>
                  <h2 style={{ paddingTop: '20px' }}>二.And bind Shops</h2>
                  {/* Binds */}
                  {
                    taobaoList ?
                      taobaoList.map((item, index) => {
                        return(
                          <table key={index} className="jiangli_table2" border="1">
                            <tbody>
                              <tr>
                                <td style={{ backgroundColor: '#F4FAFF', width: '15%' }}>
                                  <p>store_name</p>
                                  <p>master_wang</p>
                                  <p>send_name</p>
                                  <p>send_phone</p>
                                  <p>address</p>
                                </td>
                                <td style={{ width: '70%' }}>
                                  <p>{item.store_name}</p>
                                  <p>{item.master_wang}</p>
                                  <p>{item.send_name}</p>
                                  <p>{item.send_phone}</p>
                                  <p>{item.address}</p>
                                </td>
                                <td>
                                  <p style={{ textAlign: 'center', color: '#29d64b' }}>{item.status === 1? 'shenhetongguo' : 'daishenh'}</p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        )
                      })
                    :
                    ''
                  }
                  {/* bind new shop */}
                  {
                    addShopsForm ?
                      <BindFrom hidden={this.handleClose} />
                    :
                    <div className="addShopsBtn">
                      <Button onClick={this.addShopsForm} type="primary">+老翁就就</Button>
                    </div>
                  }
                </TabPane>
                <TabPane tab={<div className="tabBind"><span>123dsfge</span><Badge count={jd} /></div>} key="2">
                  <h2>一.Bind shops xuzhi</h2>
                  <p>1.Each account can be bound to 14 major platforms, including taobao, Tmall, jd, yihaodian, jumei, amazon, dangdang, paipai, alibaba, mogujie, meilishuo, gome, suning, and pengduo. Each platform can be bound to 3 stores at most (the bound stores are valid for a long time).</p>
                  <p>2.Each account can be bound to 14 major platforms, including taobao, Tmall, jd, yihaodian, jumei, amazon, dangdang, paipai, alibaba, mogujie, meilishuo, </p>
                  <h2 style={{ paddingTop: '20px' }}>二.And bind Shops</h2>
                  {/* Binds */}
                  {
                    jd ?
                      jdList.map((item, index) => {
                        return(
                          <table key={index} className="jiangli_table2" border="1">
                            <tbody>
                              <tr>
                                <td style={{ backgroundColor: '#F4FAFF', width: '15%' }}>
                                  <p>store_name</p>
                                  <p>master_wang</p>
                                  <p>send_name</p>
                                  <p>send_phone</p>
                                  <p>address</p>
                                </td>
                                <td style={{ width: '70%' }}>
                                  <p>{item.store_name}</p>
                                  <p>{item.master_wang}</p>
                                  <p>{item.send_name}</p>
                                  <p>{item.send_phone}</p>
                                  <p>{item.address}</p>
                                </td>
                                <td>
                                  <p style={{ textAlign: 'center', color: '#29d64b' }}>{item.status === 1? 'shenhetongguo' : 'daishenh'}</p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        )
                      })
                    :
                    ''
                  }
                  {/* bind new shop */}
                  {
                    addShopsForm ?
                      <BindFrom hidden={this.handleClose} />
                    :
                    <div className="addShopsBtn">
                      <Button onClick={this.addShopsForm} type="primary">+老翁就就</Button>
                    </div>
                  }
                </TabPane>
                <TabPane tab={<div className="tabBind"><span>123dsfge</span><Badge count={pdd} /></div>} key="3">
                  <h2>一.Bind shops xuzhi</h2>
                  <p>1.Each account can be bound to 14 major platforms, including taobao, Tmall, jd, yihaodian, jumei, amazon, dangdang, paipai, alibaba, mogujie, meilishuo, gome, suning, and pengduo. Each platform can be bound to 3 stores at most (the bound stores are valid for a long time).</p>
                  <p>2.Each account can be bound to 14 major platforms, including taobao, Tmall, jd, yihaodian, jumei, amazon, dangdang, paipai, alibaba, mogujie, meilishuo, </p>
                  <h2 style={{ paddingTop: '20px' }}>二.And bind Shops</h2>
                  {/* Binds */}
                  {
                    pdd ?
                      pddList.map((item, index) => {
                        return(
                          <table key={index} className="jiangli_table2" border="1">
                            <tbody>
                              <tr>
                                <td style={{ backgroundColor: '#F4FAFF', width: '15%' }}>
                                  <p>store_name</p>
                                  <p>master_wang</p>
                                  <p>send_name</p>
                                  <p>send_phone</p>
                                  <p>address</p>
                                </td>
                                <td style={{ width: '70%' }}>
                                  <p>{item.store_name}</p>
                                  <p>{item.master_wang}</p>
                                  <p>{item.send_name}</p>
                                  <p>{item.send_phone}</p>
                                  <p>{item.address}</p>
                                </td>
                                <td>
                                  <p style={{ textAlign: 'center', color: '#29d64b' }}>{item.status === 1? 'shenhetongguo' : 'daishenh'}</p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        )
                      })
                    :
                    ''
                  }
                  {/* bind new shop */}
                  {
                    addShopsForm ?
                      <BindFrom hidden={this.handleClose} />
                    :
                    <div className="addShopsBtn">
                      <Button onClick={this.addShopsForm} type="primary">+老翁就就</Button>
                    </div>
                  }
                </TabPane>
                <TabPane tab={<div className="tabBind"><span>123dsfge</span><Badge count={tmaill} /></div>} key="4">
                  <h2>一.Bind shops xuzhi</h2>
                  <p>1.Each account can be bound to 14 major platforms, including taobao, Tmall, jd, yihaodian, jumei, amazon, dangdang, paipai, alibaba, mogujie, meilishuo, gome, suning, and pengduo. Each platform can be bound to 3 stores at most (the bound stores are valid for a long time).</p>
                  <p>2.Each account can be bound to 14 major platforms, including taobao, Tmall, jd, yihaodian, jumei, amazon, dangdang, paipai, alibaba, mogujie, meilishuo, </p>
                  <h2 style={{ paddingTop: '20px' }}>二.And bind Shops</h2>
                  {/* Binds */}
                  {
                    tmaill ?
                      tmaillList.map((item, index) => {
                        return(
                          <table key={index} className="jiangli_table2" border="1">
                            <tbody>
                              <tr>
                                <td style={{ backgroundColor: '#F4FAFF', width: '15%' }}>
                                  <p>store_name</p>
                                  <p>master_wang</p>
                                  <p>send_name</p>
                                  <p>send_phone</p>
                                  <p>address</p>
                                </td>
                                <td style={{ width: '70%' }}>
                                  <p>{item.store_name}</p>
                                  <p>{item.master_wang}</p>
                                  <p>{item.send_name}</p>
                                  <p>{item.send_phone}</p>
                                  <p>{item.address}</p>
                                </td>
                                <td>
                                  <p style={{ textAlign: 'center', color: '#29d64b' }}>{item.status === 1? 'shenhetongguo' : 'daishenh'}</p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        )
                      })
                    :
                    ''
                  }
                  {/* bind new shop */}
                  {
                    addShopsForm ?
                      <BindFrom hidden={this.handleClose} />
                    :
                    <div className="addShopsBtn">
                      <Button onClick={this.addShopsForm} type="primary">+老翁就就</Button>
                    </div>
                  }
                </TabPane>
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

const BindShops = Form.create()(BindShopss);
export default BindShops
