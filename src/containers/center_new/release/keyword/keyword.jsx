import React, { Component } from 'react';
import { Icon, Button, Radio, Input, Checkbox, Row, Col, Form, message,Select  } from 'antd';
import { _holdKeyWay, _getHoldKeyWay, _delKeyWay } from '../../../../component/api';                        //引入ajax接口

const RadioGroup = Radio.Group;                 //单选框
const { TextArea } = Input;                     //文本框
const CheckboxGroup = Checkbox.Group;           //复选框默认选中
const Option = Select.Option;                   //选择器
const plainOptions1 = ['APP端查找宝贝'];
const plainOptions2 = ['通过“关键词”查找宝贝'];
let nums = [1];                     //app关键字组数
let nums1 = [1];                    //淘口令组数

class KeywordComponents extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      spell: 1,                                   //单选框的值 选择哪个平台类型
      keyword1: 1,                                //是否多关键词
      appPick: 1,                                 //app找查goods
      keywordPick: true,                          //是否通过“关键词”查找宝贝
      pcPick: 1,                                  //pc找查goods
      is_kouling_search: false,                   //淘口令
      is_qrcode_search: false,                    //是否二维码搜索宝贝
      nums: [1],                                  //关键字组数
      nums1: [1],                                 //淘口令组数
      fanganShow: false,                          //方案列表点击编辑改变状态
    }
    // console.log(props);
  }

  componentDidMount() {
  }

  // 单选框 选择pingtai
  onSpell = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      spell: e.target.value,
    });
  }

  // 关闭关键词方案
  hiddenFangan = () => {
    this.props.hidden(true,this.props.keyWayLists)
  }
  // 查找baobei方案
  onChange1 = (e) => {
    this.setState({
      appPick: !this.state.appPick,
    })
  }
  onChange2 = (e) => {
    this.setState({
      keywordPick: !this.state.keywordPick,
    })
  }
  onChange3 = (e) => {
    this.setState({
      pcPick: !this.state.pcPick,
    })
  }
  onChange4 = () => {
    this.setState({
      is_kouling_search: !this.state.is_kouling_search,
    })
  }
  onChange5 = () => {
    this.setState({
      is_qrcode_search: !this.state.is_qrcode_search,
    })
  }

  // onKeyword 单  或者 多
  onKeyword1 = (e) => {
    // console.log('radio checked', e.target.value);
    this.setState({
      keyword1: e.target.value,
    });
  }
  // APP 找查 添加addKeywords
  addKeywords = () => {
    nums.push(1)
    // console.log(nums);
    if ( nums.length <= 5 ) {
      this.setState({
        nums: nums,
      })
    }
  }
  //删除deteKeyword
  deteKeyword = (index) => {
    if ( index === 0 ) {                        //索引为0的不能删除
      message.warning('关键词1不能删除！');
    } else {                                    //删除多余的值
      let as = this.state.nums;
      as.splice(index,1)
      this.setState({
        nums: as
      })
    }
  }
  //添加淘口令
  addNewPassword = () => {
    nums1.push(1)
    // console.log(nums);
    if ( nums1.length <= 5 ) {
      this.setState({
        nums1: nums1,
      })
    }
  }
  //删除淘口令
  deteNewPassword = (index) => {
    if ( index === 0 ) {                        //索引为0的不能删除
      message.warning('淘口令1不能删除！');
    } else {                                    //删除多余的值
      let as1 = this.state.nums1;
      as1.splice(index,1)
      this.setState({
        nums1: as1,
      })
    }
  }

  // 编辑关键词方案
  handleCompilekeyW = (id) => {
    let ids = {
      id: id
    }
    this.props.hidden(false);
    // 获得关键词方案详细信息
    _getHoldKeyWay(ids)
    .then(res => {
      let datas = res.data.data;
      console.log(res.data.data);
      this.setState({
        keyword1: res.data.data.phone_key_word_type,            //获取是否是单关键词或者双关键词
        nums: res.data.data.world_total,                        //关键字组数
        nums1:res.data.data.tao_kl_total,                       //淘口令组数
      })
      this.props.form.setFieldsValue({
        key_way_name: datas.key_way_name,                       //方案名称
        search_key_world0: datas.search_key_world0,
        search_key_world1: datas.search_key_world1,
        search_key_world2: datas.search_key_world2,
        search_key_world3: datas.search_key_world3,
        search_key_world4: datas.search_key_world4,
        search_discount_text0: datas.search_discount_text0,     //多关键词折扣服务数组
        search_discount_text1: datas.search_discount_text1,
        search_discount_text2: datas.search_discount_text2,
        search_discount_text3: datas.search_discount_text3,
        search_discount_text4: datas.search_discount_text4,
        search_max_price0: datas.search_max_price0,             //0搜索词的最大价格
        search_max_price1: datas.search_max_price1,             //1搜索词的最大价格
        search_max_price2: datas.search_max_price2,
        search_max_price3: datas.search_max_price3,
        search_max_price4: datas.search_max_price4,
        search_send_addr0: datas.search_send_addr0,              //
        search_send_addr1: datas.search_send_addr1,
        search_send_addr2: datas.search_send_addr2,
        search_send_addr3: datas.search_send_addr3,
        search_send_addr4: datas.search_send_addr4,
        make_key_world0: datas.make_key_world0,                 //成交词
        make_key_world1: datas.make_key_world1,
        make_key_world2: datas.make_key_world2,
        make_key_world3: datas.make_key_world3,
        make_key_world4: datas.make_key_world4,
        make_classify00: datas.make_classify00,                 //成交词的筛选
        make_classify01: datas.make_classify01,
        make_classify02: datas.make_classify02,
        make_classify03: datas.make_classify03,
        make_classify04: datas.make_classify04,
        make_classify10: datas.make_classify10,
        make_classify11: datas.make_classify11,
        make_classify12: datas.make_classify12,
        make_classify13: datas.make_classify13,
        make_classify14: datas.make_classify14,
        make_classify20: datas.make_classify20,
        make_classify21: datas.make_classify21,
        make_classify22: datas.make_classify22,
        make_classify23: datas.make_classify23,
        make_classify24: datas.make_classify23,
        make_classify30: datas.make_classify30,
        make_classify31: datas.make_classify31,
        make_classify32: datas.make_classify32,
        make_classify33: datas.make_classify33,
        make_classify34: datas.make_classify34,
        search_classify00: datas.search_classify00,               //关键词的筛选
        search_classify01: datas.search_classify01,
        search_classify02: datas.search_classify02,
        search_classify03: datas.search_classify03,
        search_classify04: datas.search_classify04,
        search_classify10: datas.search_classify10,
        search_classify11: datas.search_classify11,
        search_classify12: datas.search_classify12,
        search_classify13: datas.search_classify13,
        search_classify14: datas.search_classify14,
        search_classify20: datas.search_classify20,
        search_classify21: datas.search_classify21,
        search_classify22: datas.search_classify22,
        search_classify23: datas.search_classify23,
        search_classify24: datas.search_classify24,
        search_classify30: datas.search_classify30,
        search_classify31: datas.search_classify31,
        search_classify32: datas.search_classify32,
        search_classify33: datas.search_classify33,
        search_classify34: datas.search_classify34,
        tao_kl0: datas.tao_kl0,
        tao_kl1: datas.tao_kl1,
        tao_kl2: datas.tao_kl2,
        tao_kl3: datas.tao_kl3,
        tao_kl4: datas.tao_kl4,
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
  // 删除关键词方案
  handleRemovekeyW = (id) => {
    let aids = {
      id: id
    }
    console.log(id);
    // 删除关键词方案详细信息
    _delKeyWay(aids)
    .then(res => {
      console.log(res.data);
      this.props.hidden(true,res.data.data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  // 表单提交
  handleSubmit = (e) => {
    e.preventDefault(e);
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values.goods_id = this.props.goods_id;                          //任务宝贝ID
        values.is_key_world_search = this.state.keywordPick;            //是否关键词搜索宝贝
        values.is_kouling_search = this.state.is_kouling_search;        //是否淘口令搜索宝贝
        values.is_qrcode_search = this.state.is_qrcode_search;          //是否二维码搜索宝贝
        values.phone_key_word_type = this.state.keyword1;               //关键词类型
        console.log(values);
        _holdKeyWay(values)
        // .then(res=> {
        //   // console.log(res.data.data);
        //   if ( res.data.code === 200 ) {
        //     this.props.hidden(this.props.commodity1,res.data.data);
        //     message.success(res.data.msg);
        //   } else {
        //     message.success(res.data.msg);
        //   }
        // })
        // .catch(err => {
        //   console.log(err);
        // })
      }
    });
  }

  render() {
    const { commodity1, keyWayLists } = this.props;
    const { keyword1,appPick,keywordPick,is_kouling_search, nums, nums1 } = this.state;
    const { getFieldDecorator } = this.props.form;
    return(
      <div>
        <div className="typestyle">
          <span style={{ display: 'flex', alignItems:'center' }}><h2>3.选择关键词方案</h2><span style={{ color:'gray', paddingLeft: '15px' }}>平台默认保存最近5套关键词方案</span></span>
          {/* 在商品库选中了商品 则会显示方案编辑板 */}
          <div style={{ marginBottom: '0' }} className="key_scheme">
            <div>方案名称</div>
            <div>APP搜索词</div>
            {/* <span>PC搜索词</span> */}
            <div>淘口令下单</div>
            <div>二维码下单</div>
            <div>操作</div>
          </div>
          {/* ******** */}
          {
            //获取关键词方案列表
            keyWayLists ?
              keyWayLists.map((item, index) => {
                return(
                  <div key={index} style={{ marginBottom: '0', marginTop: '10px' }} className="key_scheme">
                    <div>{item.key_way_name}</div>
                    <div>
                      {
                        item.key_world.map((item, index) => {
                          return(
                            <p key={index}>{item}</p>
                          )
                        })
                      }
                    </div>
                    {/* <span>PC搜索词</span> */}
                    {
                      item.is_kouling_search ?
                        <div>有</div>
                      :
                      <div>无</div>
                    }
                    {
                      item.is_qrcode_search ?
                        <div>有</div>
                      :
                      <div>无</div>
                    }
                    <div className="keyword_handle">
                      <span onClick={()=>this.handleCompilekeyW(item.id)}>编辑</span>
                      <span onClick={()=>this.handleRemovekeyW(item.id)}>删除</span>
                    </div>
                  </div>
                )
              })
            :
            ''
          }
        </div>
        {
          !commodity1 ?
            ''
          :
          <div>

            {/* 原有的不能动 */}
            <div style={{ position: 'relative' }}>
              <Icon onClick={this.hiddenFangan} style={{ position: 'absolute', right: '0', fontSize: '20px', padding: '10px' }} type="close" />
              <div className="Keyword_3">
                <Form onSubmit={this.handleSubmit} className="login-form loginPage">
                  <div className="Keyword_3_header" style={{ alignItems: 'normal' }}>
                    <h3 style={{ lineHeight: '37px' }}>方案名称：</h3>
                    <Form.Item style={{ marginBottom: '10px', width: '25%' }}>
                      {getFieldDecorator('key_way_name', {
                        rules: [{ required: true, message: '不能为空，请填写方案名称!' }],
                      })(
                        <Input className="inputw" />
                      )}
                    </Form.Item>
                    <div style={{ lineHeight: '37px', marginLeft:'10px' }}>
                      <span>*必填</span>
                      <span style={{ marginLeft:'10px' }}>方案名称仅为方便您的记忆及区分您的不同方案</span>
                    </div>
                  </div>
                  <CheckboxGroup options={plainOptions1} defaultValue={['APP端查找宝贝']} style={{ display: 'block' }} onChange={this.onChange1}>APP端查找宝贝<span style={{ marginLeft: '20px' }}>请商家确保所给关键词可以在手机端前20屏找到商品</span></CheckboxGroup>
                  {/* appPick为1的时候 显示一下内容 */}
                  {
                    appPick ?
                      <div className="Keyword_3_child1"><CheckboxGroup options={plainOptions2} onChange={this.onChange2} defaultValue={['通过“关键词”查找宝贝']}>通过“关键词”查找宝贝</CheckboxGroup>
                        <div>
                          <RadioGroup onChange={this.onKeyword1} value={keyword1}>
                            <Radio value={1}>单关键词<span>（搜索词和成交词相同）</span></Radio>
                            <Radio value={2}>双关键词<span>（分别设置搜索词和成交词，有利于关键词权重累积 <span>查看设置建议</span>）</span></Radio>
                          </RadioGroup>
                        </div>
                        {/* keyword1为1 显示单关键字，为2 则显示多关键字 */}
                        {
                          keyword1 === 1?
                            // 单关键词
                            nums.map((itme,index) => {
                              return(
                                <div key={index}>
                                  {/* 关键词组 */}
                                  <div className="Keyword_3_header" style={{ alignItems: 'normal' }}>
                                    <span style={{ lineHeight: '37px' }}>关键词{index+1}:搜索词：</span>
                                    <Form.Item style={{ marginBottom: '0', width: '25%' }}>
                                      {getFieldDecorator('search_key_world'+index, {
                                        rules: [{ required: keywordPick ? true : false , message: '不能为空，请填写搜索关键词!' }],
                                      })(
                                        <Input placeholder="关键词" className="inputw" />
                                      )}
                                    </Form.Item>
                                    <Button style={{ marginTop: '3px', marginLeft: '10px' }} disabled={index === 0 ? 'disabled' : ''} type="primary" onClick={()=>this.deteKeyword(index)}>删除</Button>
                                  </div>
                                  {/* 折扣服务 */}
                                  <div>
                                    <div className="triangle_border_up">
                                      <span></span>
                                    </div>
                                    <div className="advanced">
                                      <div className="advanced_child">
                                        <span>折扣服务：</span>
                                        <Form.Item style={{ width: '85%', marginBottom: '0' }}>
                                          {getFieldDecorator("search_discount_text"+index, {
                                            initialValue: [],
                                          })(
                                            <Checkbox.Group style={{ width: '100%' }} onChange={this.discountBtn}>
                                              <Row>
                                                <Col span={4}><Checkbox value="A">A</Checkbox></Col>
                                                <Col span={4}><Checkbox value="B">B</Checkbox></Col>
                                                <Col span={4}><Checkbox value="C">C</Checkbox></Col>
                                                <Col span={4}><Checkbox value="D">D</Checkbox></Col>
                                                <Col span={4}><Checkbox value="E">E</Checkbox></Col>
                                                <Col span={4}><Checkbox value="F">F</Checkbox></Col>
                                                <Col span={4}><Checkbox value="G">G</Checkbox></Col>
                                                <Col span={4}><Checkbox value="H">H</Checkbox></Col>
                                                <Col span={4}><Checkbox value="I">I</Checkbox></Col>
                                                <Col span={4}><Checkbox value="J">J</Checkbox></Col>
                                                <Col span={4}><Checkbox value="K">K</Checkbox></Col>
                                                <Col span={4}><Checkbox value="L">L</Checkbox></Col>
                                              </Row>
                                            </Checkbox.Group>
                                          )}
                                        </Form.Item>
                                      </div>
                                      {/* 筛选分类 */}
                                      <div className="advanced_child">
                                        <span>筛选：</span>
                                        <Form.Item className="zhekoucss">
                                          {getFieldDecorator('search_classify0'+index, {
                                            rules: [{ required: false , message: '不能为空，请填写搜索关键词!' }],
                                          })(
                                            <Input style={{ width: '100%' }} index={index} className="inputs_childs" />
                                          )}
                                        </Form.Item>
                                        <Form.Item className="zhekoucss">
                                          {getFieldDecorator('search_classify1'+index, {
                                            rules: [{ required: false , message: '不能为空，请填写搜索关键词!' }],
                                          })(
                                            <Input style={{ width: '100%' }} index={index} className="inputs_childs" />
                                          )}
                                        </Form.Item>
                                        <Form.Item className="zhekoucss">
                                          {getFieldDecorator('search_classify2'+index, {
                                            rules: [{ required: false , message: '不能为空，请填写搜索关键词!' }],
                                          })(
                                            <Input style={{ width: '100%' }} index={index} className="inputs_childs" />
                                          )}
                                        </Form.Item>
                                        <Form.Item className="zhekoucss">
                                          {getFieldDecorator('search_classify3'+index, {
                                            rules: [{ required: false , message: '不能为空，请填写搜索关键词!' }],
                                          })(
                                            <Input style={{ width: '100%' }} index={index} className="inputs_childs" />
                                          )}
                                        </Form.Item>
                                        <span>最多筛选</span>
                                      </div>
                                      {/* 排序方式 */}
                                      <div className="advanced_child">
                                        <span>排序：</span>
                                        <Form.Item style={{ width: '15%', margin: '0 25px 0 0' }}>
                                          {getFieldDecorator('search_order_way'+index, {
                                            rules: [{ required: false , message: '不能为空，请填写搜索关键词!' }],
                                          })(
                                            <Select placeholder="综合排序">
                                              <Option value="销量排序">销量排序</Option>
                                              <Option value="从高到低">从高到低</Option>
                                              <Option value="从低到高">从低到高</Option>
                                            </Select>
                                          )}
                                        </Form.Item>
                                        <span>价格：</span>
                                        <Form.Item  className="zhekoucss">
                                          {getFieldDecorator('search_max_price'+index, {
                                            rules: [{ required: false , message: '不能为空，请填写搜索关键词!' }],
                                          })(
                                            <Input index={index} className="inputs_childs" />
                                          )}
                                        </Form.Item>
                                        <span>元 -</span>
                                        <Form.Item className="zhekoucss">
                                          {getFieldDecorator('search_min_price'+index, {
                                            rules: [{ required: false , message: '不能为空，请填写搜索关键词!' }],
                                          })(
                                            <Input index={index} className="inputs_childs" />
                                          )}
                                        </Form.Item>
                                        <span style={{ marginRight: '25px' }}>元</span>
                                        <span>dsjojji：</span>
                                        <Form.Item style={{ width: '15%', margin: '0 25px 0 0' }}>
                                          {getFieldDecorator('search_send_addr'+index, {
                                            rules: [{ required: false , message: '不能为空，请填写搜索关键词!' }],
                                          })(
                                            <Select placeholder="全国">
                                              <Option value="北京">北京</Option>
                                              <Option value="上海">上海</Option>
                                              <Option value="广东">广东</Option>
                                              <Option value="江西">江西</Option>
                                              <Option value="上饶">上饶</Option>
                                              <Option value="九江">九江</Option>
                                            </Select>
                                          )}
                                        </Form.Item>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )
                            })
                          :
                          // 多关键词
                          nums.map((itme,index) => {
                            return(
                              <div key={index}>
                                {/* 关键词组 */}
                                <div>
                                  <div className="Keyword_3_header" style={{ alignItems: 'normal' }}>
                                    <span style={{ lineHeight: '37px' }}>关键词{index+1}:搜索词：</span>
                                    <Form.Item style={{ marginBottom: '0', width: '25%' }}>
                                      {getFieldDecorator('search_key_world'+index, {
                                        rules: [{ required: keywordPick ? true : false , message: '不能为空，请填写搜索关键词!' }],
                                      })(
                                        <Input placeholder="关键词" className="inputw" />
                                      )}
                                    </Form.Item>
                                    <Button style={{ marginTop: '3px', marginLeft: '10px' }} disabled={index === 0 ? 'disabled' : ''} type="primary" onClick={()=>this.deteKeyword(index)}>删除</Button>
                                  </div>
                                  {/* 折扣服务 */}
                                  <div>
                                    <div className="triangle_border_up">
                                      <span></span>
                                    </div>
                                    <div className="advanced">
                                      <div className="advanced_child">
                                        <span>折扣服务：</span>
                                        <Form.Item style={{ width: '85%', marginBottom: '0' }}>
                                          {getFieldDecorator("search_discount_text"+index, {
                                            initialValue: [],
                                          })(
                                            <Checkbox.Group style={{ width: '100%' }} onChange={this.discountBtn}>
                                              <Row>
                                                <Col span={4}><Checkbox value="A">A</Checkbox></Col>
                                                <Col span={4}><Checkbox value="B">B</Checkbox></Col>
                                                <Col span={4}><Checkbox value="C">C</Checkbox></Col>
                                                <Col span={4}><Checkbox value="D">D</Checkbox></Col>
                                                <Col span={4}><Checkbox value="E">E</Checkbox></Col>
                                                <Col span={4}><Checkbox value="F">F</Checkbox></Col>
                                                <Col span={4}><Checkbox value="G">G</Checkbox></Col>
                                                <Col span={4}><Checkbox value="H">H</Checkbox></Col>
                                                <Col span={4}><Checkbox value="I">I</Checkbox></Col>
                                                <Col span={4}><Checkbox value="J">J</Checkbox></Col>
                                                <Col span={4}><Checkbox value="K">K</Checkbox></Col>
                                                <Col span={4}><Checkbox value="L">L</Checkbox></Col>
                                              </Row>
                                            </Checkbox.Group>
                                          )}
                                        </Form.Item>
                                      </div>
                                      {/* 筛选分类 */}
                                      <div className="advanced_child">
                                        <span>筛选：</span>
                                        <Form.Item className="zhekoucss">
                                          {getFieldDecorator('search_classify0'+index, {
                                            rules: [{ required: false , message: '不能为空，请填写搜索关键词!' }],
                                          })(
                                            <Input style={{ width: '100%' }} index={index} className="inputs_childs" />
                                          )}
                                        </Form.Item>
                                        <Form.Item className="zhekoucss">
                                          {getFieldDecorator('search_classify1'+index, {
                                            rules: [{ required: false , message: '不能为空，请填写搜索关键词!' }],
                                          })(
                                            <Input style={{ width: '100%' }} index={index} className="inputs_childs" />
                                          )}
                                        </Form.Item>
                                        <Form.Item className="zhekoucss">
                                          {getFieldDecorator('search_classify2'+index, {
                                            rules: [{ required: false , message: '不能为空，请填写搜索关键词!' }],
                                          })(
                                            <Input style={{ width: '100%' }} index={index} className="inputs_childs" />
                                          )}
                                        </Form.Item>
                                        <Form.Item className="zhekoucss">
                                          {getFieldDecorator('search_classify3'+index, {
                                            rules: [{ required: false , message: '不能为空，请填写搜索关键词!' }],
                                          })(
                                            <Input style={{ width: '100%' }} index={index} className="inputs_childs" />
                                          )}
                                        </Form.Item>
                                        <span>最多筛选</span>
                                      </div>
                                      {/* 排序方式 */}
                                      <div className="advanced_child">
                                        <span>排序：</span>
                                        <Form.Item style={{ width: '15%', margin: '0 25px 0 0' }}>
                                          {getFieldDecorator('search_order_way'+index, {
                                            rules: [{ required: false , message: '不能为空，请填写搜索关键词!' }],
                                          })(
                                            <Select placeholder="综合排序">
                                              <Option value="销量排序">销量排序</Option>
                                              <Option value="从高到低">从高到低</Option>
                                              <Option value="从低到高">从低到高</Option>
                                            </Select>
                                          )}
                                        </Form.Item>
                                        <span>价格：</span>
                                        <Form.Item  className="zhekoucss">
                                          {getFieldDecorator('search_max_price'+index, {
                                            rules: [{ required: false , message: '不能为空，请填写搜索关键词!' }],
                                          })(
                                            <Input index={index} className="inputs_childs" />
                                          )}
                                        </Form.Item>
                                        <span>元 -</span>
                                        <Form.Item className="zhekoucss">
                                          {getFieldDecorator('search_min_price'+index, {
                                            rules: [{ required: false , message: '不能为空，请填写搜索关键词!' }],
                                          })(
                                            <Input index={index} className="inputs_childs" />
                                          )}
                                        </Form.Item>
                                        <span style={{ marginRight: '25px' }}>元</span>
                                        <span>dsjojji：</span>
                                        <Form.Item style={{ width: '15%', margin: '0 25px 0 0' }}>
                                          {getFieldDecorator('search_send_addr'+index, {
                                            rules: [{ required: false , message: '不能为空，请填写搜索关键词!' }],
                                          })(
                                            <Select placeholder="全国">
                                              <Option value="北京">北京</Option>
                                              <Option value="上海">上海</Option>
                                              <Option value="广东">广东</Option>
                                              <Option value="江西">江西</Option>
                                              <Option value="上饶">上饶</Option>
                                              <Option value="九江">九江</Option>
                                            </Select>
                                          )}
                                        </Form.Item>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* 成交词组 */}
                                <div>
                                  <div className="Keyword_3_header" style={{ alignItems: 'normal', marginTop: '15px' }}>
                                    <span style={{ lineHeight: '37px' }}>成交词{index+1}：</span>
                                    <Form.Item style={{ marginBottom: '0', width: '25%' }}>
                                      {getFieldDecorator('make_key_world'+index, {
                                        rules: [{ required: true, message: '不能为空，请填写成交关键词!' }],
                                      })(
                                        <Input placeholder="成交词" className="inputw" />
                                      )}
                                    </Form.Item>
                                  </div>
                                  {/* <Form.Item style={{ marginBottom: '0', paddingLeft: '60px' }}>
                                    {getFieldDecorator('make_key_world'+index, {
                                      rules: [{ required: true, message: '不能为空，请填写成交关键词!' }],
                                    })(
                                      <div>
                                    <div className="keyword_input">
                                    <span>chengjiao{index+1}</span>
                                    <div className="inputs">
                                    <Input style={{ width: '75%' }}  placeholder="成交词" className="inputs_child" />
                                    </div>
                                    </div>
                                      </div>
                                    )}
                                  </Form.Item> */}
                                  {/* 折扣服务 */}
                                  <div>
                                    <div className="triangle_border_up">
                                      <span></span>
                                    </div>
                                    <div className="advanced">
                                      <div className="advanced_child">
                                        <span>折扣服务：</span>
                                        <Form.Item style={{ width: '85%', marginBottom: '0' }}>
                                          {getFieldDecorator("make_discount_text"+index, {
                                            initialValue: [],
                                          })(
                                            <Checkbox.Group style={{ width: '100%' }} onChange={this.discountBtn}>
                                              <Row>
                                                <Col span={4}><Checkbox value="A">A</Checkbox></Col>
                                                <Col span={4}><Checkbox value="B">B</Checkbox></Col>
                                                <Col span={4}><Checkbox value="C">C</Checkbox></Col>
                                                <Col span={4}><Checkbox value="D">D</Checkbox></Col>
                                                <Col span={4}><Checkbox value="E">E</Checkbox></Col>
                                                <Col span={4}><Checkbox value="F">F</Checkbox></Col>
                                                <Col span={4}><Checkbox value="G">G</Checkbox></Col>
                                                <Col span={4}><Checkbox value="H">H</Checkbox></Col>
                                                <Col span={4}><Checkbox value="I">I</Checkbox></Col>
                                                <Col span={4}><Checkbox value="J">J</Checkbox></Col>
                                                <Col span={4}><Checkbox value="K">K</Checkbox></Col>
                                                <Col span={4}><Checkbox value="L">L</Checkbox></Col>
                                              </Row>
                                            </Checkbox.Group>
                                          )}
                                        </Form.Item>
                                      </div>
                                      <div className="advanced_child">
                                        <span>筛选：</span>
                                        <Form.Item className="zhekoucss">
                                          {getFieldDecorator('make_classify0'+index, {
                                            rules: [{ required: false , message: '不能为空，请填写搜索关键词!' }],
                                          })(
                                            <Input style={{ width: '100%' }} index={index} className="inputs_childs" />
                                          )}
                                        </Form.Item>
                                        <Form.Item className="zhekoucss">
                                          {getFieldDecorator('make_classify1'+index, {
                                            rules: [{ required: false , message: '不能为空，请填写搜索关键词!' }],
                                          })(
                                            <Input style={{ width: '100%' }} index={index} className="inputs_childs" />
                                          )}
                                        </Form.Item>
                                        <Form.Item className="zhekoucss">
                                          {getFieldDecorator('make_classify2'+index, {
                                            rules: [{ required: false , message: '不能为空，请填写搜索关键词!' }],
                                          })(
                                            <Input style={{ width: '100%' }} index={index} className="inputs_childs" />
                                          )}
                                        </Form.Item>
                                        <Form.Item className="zhekoucss">
                                          {getFieldDecorator('make_classify3'+index, {
                                            rules: [{ required: false , message: '不能为空，请填写搜索关键词!' }],
                                          })(
                                            <Input style={{ width: '100%' }} index={index} className="inputs_childs" />
                                          )}
                                        </Form.Item>
                                        <span>最多筛选</span>
                                      </div>
                                      <div className="advanced_child">
                                        <span>排序：</span>
                                        <Form.Item style={{ width: '15%', margin: '0 25px 0 0' }}>
                                          {getFieldDecorator('make_order_way'+index, {
                                            rules: [{ required: false , message: '不能为空，请填写搜索关键词!' }],
                                          })(
                                            <Select placeholder="综合排序">
                                              <Option value="销量排序">销量排序</Option>
                                              <Option value="从高到低">从高到低</Option>
                                              <Option value="从低到高">从低到高</Option>
                                            </Select>
                                          )}
                                        </Form.Item>
                                        <span>价格：</span>
                                        <Form.Item  className="zhekoucss">
                                          {getFieldDecorator('make_max_price'+index, {
                                            rules: [{ required: false , message: '不能为空，请填写搜索关键词!' }],
                                          })(
                                            <Input index={index} className="inputs_childs" />
                                          )}
                                        </Form.Item>
                                        <span>元 -</span>
                                        <Form.Item className="zhekoucss">
                                          {getFieldDecorator('make_min_price'+index, {
                                            rules: [{ required: false , message: '不能为空，请填写搜索关键词!' }],
                                          })(
                                            <Input index={index} className="inputs_childs" />
                                          )}
                                        </Form.Item>
                                        <span style={{ marginRight: '25px' }}>元</span>
                                        <span>dsjojji：</span>
                                        <Form.Item style={{ width: '15%', margin: '0 25px 0 0' }}>
                                          {getFieldDecorator('make_send_addr'+index, {
                                            rules: [{ required: false , message: '不能为空，请填写搜索关键词!' }],
                                          })(
                                            <Select placeholder="全国">
                                              <Option value="北京">北京</Option>
                                              <Option value="上海">上海</Option>
                                              <Option value="广东">广东</Option>
                                              <Option value="江西">江西</Option>
                                              <Option value="上饶">上饶</Option>
                                              <Option value="九江">九江</Option>
                                            </Select>
                                          )}
                                        </Form.Item>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                          })
                        }
                        {
                          nums.length === 5 ?
                            ''
                          :
                          <div onClick={this.addKeywords} className="addKeyword">
                            <Icon type="plus-circle" theme="twoTone" />
                            <span>tianjia（最多5组）</span>
                          </div>
                        }
                        <div style={{ paddingBottom: '15px' }}><Checkbox onChange={this.onChange4}>通过“淘口令”查找宝贝</Checkbox></div>
                        {/* 循环口令长度 */}
                        {
                          nums1 ?
                            nums1.map((itme,index) => {
                              return(
                                <div key={index} className="Keyword_3_header" style={{ alignItems: 'normal' }}>
                                  <span style={{ lineHeight: '37px' }}>淘口令{index+1}：</span>
                                  <Form.Item style={{ marginBottom: '0', width: '50%', marginRight: '15px' }}>
                                    {getFieldDecorator('tao_kl'+index, {
                                      rules: [{ required: is_kouling_search ? true : false, message: '不能为空，请填写商品淘口令!' }],
                                    })(
                                      <TextArea style={{ width: '100%' }} rows={4} />
                                    )}
                                  </Form.Item>
                                  <Button disabled={index === 0 ? 'disabled' : ''} type="primary" onClick={()=>this.deteNewPassword(index)}>删除</Button>
                                </div>
                              )
                            })
                          :
                          ''
                        }
                        {
                          nums1.length === 5 ?
                            ''
                          :
                          <div onClick={this.addNewPassword} className="addKeyword">
                            <Icon type="plus-circle" theme="twoTone" />
                            <span>tianjia（最多5组）</span>
                          </div>
                        }
                        <div style={{ paddingBottom: '15px' }}><Checkbox onChange={this.onChange5}>通过“宝贝二维码”查找商品，选择后系统将自动生成二维码供买手使用</Checkbox></div>
                      </div>
                    :
                    ''
                  }
                  {/* PC 查 */}
                  <Form.Item style={{ margin: '20px 0 15px 0', textAlign: 'center' }}>
                    <Button style={{ width: '10%', height: '50px', fontSize: '19px' }} type="primary" htmlType="submit" className="login-form-button">
                      保存
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

const KeywordComponent = Form.create()(KeywordComponents);
export default KeywordComponent
