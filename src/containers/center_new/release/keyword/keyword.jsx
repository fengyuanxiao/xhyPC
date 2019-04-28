// 发布goods
import React, { Component } from 'react';
import { Icon, Button, Radio, Input, Checkbox, Row, Col, Form, message } from 'antd';
import { Link } from 'react-router-dom';

const RadioGroup = Radio.Group;                 //单选框
const { TextArea } = Input;                     //文本框
const CheckboxGroup = Checkbox.Group;           //复选框默认选中
const plainOptions1 = ['Checkbox1dsfdfdsfds'];
const plainOptions2 = ['21321321'];
const plainOptions3 = ['Checkbox2'];
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
    console.log('radio checked', e.target.value);
    this.setState({
      keyword1: e.target.value,
    });
  }
  onKeyword2 = (e) => {
    console.log('radio checked', e.target.value);
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
    console.log(index);
    this.setState({
      advancedShow: index,
    })
  }
  // 高级设置里面的
  // 折扣服务
  discountBtn = (e) => {
    console.log(e);
    this.setState({
      val: e,
    })
  }
  ss = (index) => {
    console.log(index);
    if (index) {

    } else {

    }
  }


  handleSubmit = (e) => {
    e.preventDefault(e);
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
        let app_keywords = [values.appKeyword0,values.appKeyword1,values.appKeyword2,values.appKeyword3,values.appKeyword4];
        let app_words = [values.appWords0,values.appWords1,values.appWords2,values.appWords3,values.appWords4];
        let taokoulings = [values.taokouling0,values.taokouling1,values.taokouling2,values.taokouling3];
        let pc_keywords = [values.pcKeyword0,values.pcKeyword1,values.pcKeyword2,values.pcKeyword3,values.pcKeyword4];
        let pc_words = [values.pcWords0,values.pcWords1,values.pcWords2,values.pcWords3,values.pcWords4];
        const munDatas = {
          app_keywords: app_keywords,
          app_words: app_words,
          taokoulings: taokoulings,
          pc_keywords: pc_keywords,
          pc_words: pc_words,
        }
        console.log(munDatas);
      }
    });
  }

  render() {
    const { keyword1,keyword2,appPick,pcPick,keywordPick,taokouling, nums, nums1, advancedShow } = this.state;
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
                  {
                    keyword1 === 1?
                      nums.map((itme,index) => {
                        return(
                          <div key={index}>
                            <Form.Item style={{ marginBottom: '0' }}>
                              {getFieldDecorator('appKeyword'+index, {
                                rules: [{ required: keywordPick ? true : false , message: '不能为空，请填写搜索关键词!' }],
                              })(
                                <div className="keyword_input">
                                  <span>Keyword{index+1}：sousuoci</span>
                                  <div className="inputs">
                                    <Input index={index} className="inputs_child" />
                                    <Button disabled={index === 0 ? 'disabled' : ''} onClick={()=>this.deteKeyword(index)}>删除</Button>
                                  </div>
                                  <p className="addKeyword" onClick={()=>this.advancedSetupApp_keyword(index)}>高级设置></p>
                                </div>
                              )}
                            </Form.Item>
                            {
                              advancedShow === index ?
                                <div>
                                  <div className="triangle_border_up">
                                    <span></span>
                                  </div>
                                  <div className="advanced">
                                    <div className="advanced_child">
                                      <span>12313465：</span>
                                      <Checkbox.Group style={{ width: '100%' }} onClick={()=>this.ss(index)} onChange={this.discountBtn}>
                                        <Row>
                                          <Col span={4}><Checkbox value="A">低级</Checkbox></Col>
                                          <Col span={4}><Checkbox value="B">BASD</Checkbox></Col>
                                          <Col span={4}><Checkbox value="C">CSD</Checkbox></Col>
                                          <Col span={4}><Checkbox value="D">DSD</Checkbox></Col>
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
                                    </div>
                                  </div>
                                </div>
                              :
                              ''
                            }
                          </div>
                        )
                      })
                    :
                    nums.map((itme,index) => {
                      return(
                        <div key={index}>
                          <Form.Item style={{ marginBottom: '0' }}>
                            {getFieldDecorator('appKeyword'+index, {
                              rules: [{ required: keywordPick ? true : false , message: '不能为空，请填写搜索关键词!' }],
                            })(
                              <div>
                                <div className="keyword_input">
                                  <span>Keyword{index+1}：sousuoci</span>
                                  <div className="inputs">
                                    <Input index={index} className="inputs_child" />
                                    <Button disabled={index === 0 ? 'disabled' : ''} onClick={()=>this.deteKeyword(index)}>删除</Button>
                                  </div>
                                  <p className="addKeyword" onClick={this.advancedSetup}>高级设置></p>
                                </div>
                              </div>
                            )}
                          </Form.Item>
                          <Form.Item style={{ marginBottom: '0', paddingLeft: '60px' }}>
                            {getFieldDecorator('appWords'+index, {
                              rules: [{ required: true, message: '不能为空，请填写成交关键词!' }],
                            })(
                              <div>
                                <div className="keyword_input">
                                  <span>chengjiao{index+1}</span>
                                  <div className="inputs">
                                    <Input style={{ width: '75%' }} index={index} className="inputs_child" />
                                  </div>
                                  <p style={{ paddingLeft: '82px' }} className="addKeyword" onClick={this.advancedSetup}>高级设置></p>
                                </div>
                              </div>
                            )}
                          </Form.Item>
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
                          {getFieldDecorator('taokouling'+index, {
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
            <CheckboxGroup style={{ paddingTop: '15px' }} options={plainOptions3} defaultValue={['Checkbox2']} onChange={this.onChange3}>Checkbox2</CheckboxGroup>
            {/* pcPick为1的时候 显示一下内容 */}
            {
              pcPick ?
                <div className="Keyword_3_child1">
                  <RadioGroup onChange={this.onKeyword2} value={keyword2}>
                    <Radio value={1}>jkkj（klkl;kdfsfe）</Radio>
                    <Radio value={2}>gwef（kdsfopspp）</Radio>
                  </RadioGroup>
                  {
                    keyword2 === 1?
                      nums2.map((itme,index) => {
                        return(
                          <Form.Item key={index} style={{ marginBottom: '0' }}>
                            {getFieldDecorator('pcKeyword'+index, {
                              rules: [{ required:true , message: '不能为空，请填写搜索关键词!' }],
                            })(
                              <div className="keyword_input">
                                <span>Keyword{index+1}：sousuoci</span>
                                <div className="inputs">
                                  <Input index={index} className="inputs_child" />
                                  <Button disabled={index === 0 ? 'disabled' : ''} onClick={()=>this.deteKeyword1(index)}>删除</Button>
                                </div>
                                <p className="addKeyword" onClick={this.advancedSetup}>高级设置></p>
                              </div>
                            )}
                          </Form.Item>
                        )
                      })
                    :
                    nums2.map((itme,index) => {
                      return(
                        <div key={index}>
                          <Form.Item style={{ marginBottom: '0' }}>
                            {getFieldDecorator('pcKeyword'+index, {
                              rules: [{ required: keywordPick ? true : false , message: '不能为空，请填写搜索关键词!' }],
                            })(
                              <div>
                                <div className="keyword_input">
                                  <span>Keyword{index+1}：sousuoci</span>
                                  <div className="inputs">
                                    <Input index={index} className="inputs_child" />
                                    <Button disabled={index === 0 ? 'disabled' : ''} onClick={()=>this.deteKeyword1(index)}>删除</Button>
                                  </div>
                                  <p className="addKeyword" onClick={this.advancedSetup}>高级设置></p>
                                </div>
                              </div>
                            )}
                          </Form.Item>
                          <Form.Item style={{ marginBottom: '0', paddingLeft: '60px' }}>
                            {getFieldDecorator('pcWords'+index, {
                              rules: [{ required: true, message: '不能为空，请填写成交关键词!' }],
                            })(
                              <div>
                                <div className="keyword_input">
                                  <span>chengjiao{index+1}</span>
                                  <div className="inputs">
                                    <Input style={{ width: '75%' }} index={index} className="inputs_child" />
                                  </div>
                                </div>
                              </div>
                            )}
                          </Form.Item>
                        </div>
                      )
                    })
                  }
                  {
                    nums2.length === 5 ?
                      ''
                    :
                    <div onClick={this.addKeywords1} className="addKeyword">
                      <Icon type="plus-circle" theme="twoTone" />
                      <span>tianjia（第三方第三方）</span>
                    </div>
                  }
                </div>
              :
                ''
            }
            <Form.Item style={{ margin: '20px 0 15px 0', textAlign: 'center' }}>
              <Button style={{ width: '10%', height: '50px', fontSize: '19px' }} type="primary" htmlType="submit" className="login-form-button">
                登录
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
