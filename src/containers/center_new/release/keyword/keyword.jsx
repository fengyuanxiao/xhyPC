import React, { Component } from 'react';
import { Icon, Button, Radio, Input, Checkbox, Row, Col, Form, message,Select  } from 'antd';
// import { Link } from 'react-router-dom';
// import KeyDatas from './keyDatas';

const RadioGroup = Radio.Group;                 //单选框
const { TextArea } = Input;                     //文本框
const CheckboxGroup = Checkbox.Group;           //复选框默认选中
const Option = Select.Option;
const plainOptions1 = ['Checkbox1dsfdfdsfds'];
const plainOptions2 = ['21321321'];
let nums = [1];                     //app关键字组数
let nums1 = [1];                    //淘口令组数
let nums2 = [1];                     //pc关键字组数

class KeywordComponents extends Component  {
  constructor() {
    super();
    this.state = {
      spell: 1,                                   //单选框的值 选择哪个平台类型
      keyword1: 1,                                 //是否多关键词
      keyword2: 1,                                 //是否多关键词
      appPick: 1,                                 //app找查goods
      keywordPick: 1,                             //是否通过keyword找查
      pcPick: 1,                                 //pc找查goods
      taokouling: 0,                              //淘口令
      nums: [1],                                  //app关键字组数
      nums1: [1],                                 //淘口令组数
      nums2: [1],                                 //pc关键字组数
      advancedNum: 0,
    }
  }

  componentWillMount() {
  }

  // 单选框 选择pingtai
  onSpell = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      spell: e.target.value,
    });
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
      taokouling: !this.state.taokouling,
    })
  }
  // 方案名称
  schemeName = (e) => {
  }

  // onKeyword 单  或者 多
  onKeyword1 = (e) => {
    // console.log('radio checked', e.target.value);
    this.setState({
      keyword1: e.target.value,
    });
  }
  onKeyword2 = (e) => {
    // console.log('radio checked', e.target.value);
    this.setState({
      keyword2: e.target.value,
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
    if ( nums1.length <= 4 ) {
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

  // PC 找查 添加addKeywords
  addKeywords1 = () => {
    nums2.push(1)
    if ( nums2.length <= 5 ) {
      this.setState({
        nums2: nums2,
      })
    }
  }
  //删除deteKeyword
  deteKeyword1 = (index) => {
    if ( index === 0 ) {                        //索引为0的不能删除
      message.warning('关键词1不能删除！');
    } else {                                    //删除多余的值
      let as2 = this.state.nums2;
      as2.splice(index,1)
      this.setState({
        nums2: as2
      })
    }
  }

  // 高级设置
  advancedSetupApp_keyword = (index) => {
    // this.setState({
    //   advancedNum: index,
    // })
    // if ( this.state.advancedNum === index ) {
    //   this.setState({
    //     advancedShow: !this.state.advancedShow,
    //   })
    // }
    if ( index === 0 ) {
      this.setState({
        advancedShow1: !this.state.advancedShow1,
      })
    } else if ( index === 1 ) {
      this.setState({
        advancedShow2: !this.state.advancedShow2,
      })
    } else {
      this.setState({
        advancedShow3: !this.state.advancedShow3,
      })
    }
    console.log(index);
  }
  // 高级设置里面的
  // 折扣服务
  discountBtn = (e) => {
    console.log(e);
    this.setState({
      val: e,
    })
  }


  handleSubmit = (e) => {
    e.preventDefault(e);
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
      }
    });
  }

  render() {
    const { keyword1,appPick,keywordPick,taokouling, nums, nums1 } = this.state;
    const { getFieldDecorator } = this.props.form;
    return(
      <div>
        <div className="Keyword_3">
          <Form onSubmit={this.handleSubmit} className="login-form loginPage">
            <Form.Item style={{ marginBottom: '10px' }}>
              {getFieldDecorator('key_way_name', {
                rules: [{ required: true, message: '不能为空，请填写方案名称!' }],
              })(
                <div className="Keyword_3_header">
                  <h3>方案名称：</h3>
                  <Input onChange={this.schemeName} className="inputs" />
                  <span>*必填</span>
                  <span>jksdjiojsaljojojljkjjhh</span>
                </div>
              )}
            </Form.Item>
            <CheckboxGroup options={plainOptions1} defaultValue={['Checkbox1dsfdfdsfds']} style={{ display: 'block' }} onChange={this.onChange1}>Checkbox1dsfdfdsfds</CheckboxGroup>
            {/* appPick为1的时候 显示一下内容 */}
            {
              appPick ?
                <div className="Keyword_3_child1"><CheckboxGroup options={plainOptions2} onChange={this.onChange2} defaultValue={['21321321']}>21321321</CheckboxGroup>
                  <div>
                    <RadioGroup onChange={this.onKeyword1} value={keyword1}>
                      <Radio value={1}>jkkj（klkl;kdfsfe）</Radio>
                      <Radio value={2}>gwef（kdsfopspp）</Radio>
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
                            <Form.Item style={{ marginBottom: '0' }}>
                              {getFieldDecorator('search_key_world'+index, {
                                rules: [{ required: keywordPick ? true : false , message: '不能为空，请填写搜索关键词!' }],
                              })(
                                <div className="keyword_input">
                                  <span>Keyword{index+1}：sousuoci</span>
                                  <div className="inputs">
                                    <Input index={index} className="inputs_child" />
                                    <Button disabled={index === 0 ? 'disabled' : ''} onClick={()=>this.deteKeyword(index)}>删除</Button>
                                  </div>
                                  {/* <p className="addKeyword" onClick={()=>this.advancedSetupApp_keyword(index)}>高级设置></p> */}
                                </div>
                              )}
                            </Form.Item>
                            {/* 折扣服务 */}
                            <div>
                              <div className="triangle_border_up">
                                <span></span>
                              </div>
                              <div className="advanced">
                                <div className="advanced_child">
                                  <span>折扣萨达：</span>
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
                            <Form.Item style={{ marginBottom: '0' }}>
                              {getFieldDecorator('search_key_world'+index, {
                                rules: [{ required: keywordPick ? true : false , message: '不能为空，请填写搜索关键词!' }],
                              })(
                                <div>
                                  <div className="keyword_input">
                                    <span>Keyword{index+1}：sousuoci</span>
                                    <div className="inputs">
                                      <Input index={index} className="inputs_child" />
                                      <Button disabled={index === 0 ? 'disabled' : ''} onClick={()=>this.deteKeyword(index)}>删除</Button>
                                    </div>
                                    {/* <p className="addKeyword" onClick={this.advancedSetup}>高级设置></p> */}
                                  </div>
                                </div>
                              )}
                            </Form.Item>
                            {/* 折扣服务 */}
                            <div>
                              <div className="triangle_border_up">
                                <span></span>
                              </div>
                              <div className="advanced">
                                <div className="advanced_child">
                                  <span>折扣萨达：</span>
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
                            <Form.Item style={{ marginBottom: '0', paddingLeft: '60px' }}>
                              {getFieldDecorator('make_key_world'+index, {
                                rules: [{ required: true, message: '不能为空，请填写成交关键词!' }],
                              })(
                                <div>
                                  <div className="keyword_input">
                                    <span>chengjiao{index+1}</span>
                                    <div className="inputs">
                                      <Input style={{ width: '75%' }} index={index} className="inputs_child" />
                                    </div>
                                    {/* <p style={{ paddingLeft: '82px' }} className="addKeyword" onClick={this.advancedSetup}>高级设置></p> */}
                                  </div>
                                </div>
                              )}
                            </Form.Item>
                            {/* 折扣服务 */}
                            <div>
                              <div className="triangle_border_up">
                                <span></span>
                              </div>
                              <div className="advanced">
                                <div className="advanced_child">
                                  <span>12313465：</span>
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
                  <div style={{ paddingBottom: '15px' }}><Checkbox onChange={this.onChange4}>21“3213”21</Checkbox></div>
                  {/* 循环口令长度 */}
                  {
                    nums1.map((itme,index) => {
                      return(
                        <Form.Item key={index} style={{ marginBottom: '0' }}>
                          {getFieldDecorator('tao_kl'+index, {
                            rules: [{ required: taokouling ? true : false, message: '不能为空，请填写商品淘口令!' }],
                          })(
                            <div>
                              <div style={{ display: 'flex', paddingLeft: '50px' }}>
                                <span>jklj{index+1}：</span>
                                <TextArea className="inputsWB" rows={4} />
                                <Button disabled={index === 0 ? 'disabled' : ''} onClick={()=>this.deteNewPassword(index)}>删除</Button>
                              </div>
                            </div>
                          )}
                        </Form.Item>
                      )
                    })
                  }
                  {
                    nums1.length === 4 ?
                      ''
                    :
                    <div onClick={this.addNewPassword} className="addKeyword">
                      <Icon type="plus-circle" theme="twoTone" />
                      <span>tianjia（最多4组）</span>
                    </div>
                  }
                  <div style={{ paddingBottom: '15px' }}><Checkbox>21“3213”21dgfdsfgregrg</Checkbox></div>
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
    )
  }
}

const KeywordComponent = Form.create()(KeywordComponents);
export default KeywordComponent
