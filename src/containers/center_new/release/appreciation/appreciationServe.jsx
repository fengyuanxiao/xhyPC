import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, DatePicker, Radio, Select, Row, Col, Upload, InputNumber, Tree } from 'antd';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

import './serve.css';
moment.locale('zh-cn');

const { TextArea } = Input;         //文本框
const { TreeNode } = Tree;          //树形控件
const RadioGroup = Radio.Group;     //单选框
const Option = Select.Option;       //选择器
let nums = [1];                     //app关键字组数
let buyerNum = [1,2,3];             //好评优化里面，，，买手评价关键词
let buyerNum1 = [1,2,3];            //追评里面，，，买手评价关键词
let merchantNum = [1];              //好评优化里面，，，商家提供评价内容
let merchantNum1 = [1];             //追评里面，，，商家提供评价内容
let merchantNum2 = [1];             //自定义差评，，，商家提供评价内容
let graphicNum = [1];               //商家提供评价内容
let myDate = new Date();            //获取月日

class AppreciationServes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      object: {},                           //增值服务 第一步设置计划 关键词选择的单数对象
      mode: 'date',                         //时间日期
      nums: [1],                            //添加计划数组
      buyerNum: [1,2,3],                    //好评优化里面，，，买手评价关键词
      buyerNum1: [1,2,3],                   //追评里面，，，买手评价关键词
      merchantNum: [1],                     //好评优化里面，，，商家提供评价内容
      merchantNum1: [1],                     //追评里面，，，商家提供评价内容
      merchantNum2: [1],                     //自定义差评，，，商家提供评价内容
      graphicNum: [1],                      //图文好评
      value: 1,                             //选择快递类型
      speedNum: '',                          //快速完成的速度 单选选中的浮点
      shoppingNum: 1,                       //延长买家购物周期 单选框选中数
      evaluateNum: 1,                       //1是买手写评价，，，2是商家提供评价
      goodreputationShow: true,             //好评优化默认选中显示
      additionalReviewShow: false,          //追评服务显示
      fileList: [],                         //没有默认图片，空数组
      previewVisible: false,                //关闭观看图片状态
      previewImage: '',
    }
    console.log(props.firstDatas);
  }

  componentDidMount() {
    this.setState({
      getMonth: myDate.getMonth()+1,        //获取这个月
      getDate: myDate.getDate(),            //获取今天
    })
  }

  // 设置task上线时间
  onChangeTask = (e) => {
    if ( e.target.checked ) {
      this.setState({
        dateShow: true,
      })
    } else {
      this.setState({
        dateShow: false,
      })
    }
  }
  // 选择定时时间
  handleOpenChange = (open) => {
    if (open) {
      this.setState({ mode: 'date' });
    }
  }
  handlePanelChange = (value, mode) => {
    this.setState({ mode });
  }
  handleOk = (e) => {//日期点击确认回调
    console.log(e._d);
  }
  handleChange = (e) => {
    console.log(e._d);
  }
  // 单量增加
  onInputNumber = (type,value) => {
    console.log(type,value);
    const newObject = Object.assign({}, this.state.object, {
      [type]: value
    });
    this.setState({
      object: newObject,
    })
    console.log(this.state.object);
  }

  // 添加投放数量
  addPlanBtn = () => {
    nums.push(1)
    this.setState({
      nums: nums,
    })
    // this.props.form.setFieldsValue({
    //   bill_2: 1,
    // })
  }
  // 删除投放数量
  deleteBtn = (index) => {
    let as = this.state.nums;
    as.splice(index,1)
    this.setState({
      nums: as
    })
  }

  // 选择快递类型
  onExpressage = (e) => {
    console.log('选择快递类型', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
  // 快速完成任务项
  // 提升任务完成速度
  onAccomplish = (e) => {
    console.log(`提升任务完成速度 = ${e.target.checked}`);
    if ( e.target.checked ) {
      this.setState({
        speedNum: 1,
      })
    } else {
      this.setState({
        speedNum: '',
      })
    }
  }//提升任务完成速度选中的浮点单选框
  onAccomplishChild = (e) => {
    console.log('选择的浮点', e.target.value);
    this.setState({
      speedNum: e.target.value,
    });
  }
  // 安全优化项
  // 自动结束任务
  onEndautomatically = (e) => {
    console.log(`自动结束任务 = ${e.target.checked}`);
  }
  // 任务发布间隔
  onPublishinterval = (e) => {
    console.log(`任务发布间隔 = ${e.target.checked}`);
    if ( e.target.checked ) {
      this.setState({
        publishinterval_state: e.target.checked,
      })
    } else {
      this.setState({
        publishinterval_state: e.target.checked,
      })
    }
  }
  //延长买家购物周期
  onShoppingperiod = (e) => {
    console.log(`延长买家购物周期 = ${e.target.checked}`);
  }//延长买家购物周期 单选框选中数
  onShoppingperiodChild = (e) => {
    console.log('延长买家购物周期', e.target.value);
    this.setState({
      shoppingNum: e.target.value,
    });
  }

  // 好评优化
  onGood = (e) => {
    console.log('好评优化勾选', e.target.checked);
    this.setState({
      goodreputationShow: e.target.checked,
    })
  }// 默认好评、买手评价、商家提供评价、图文好评
  onGoodreputation = (checkedValues) => {
    // console.log('checked = ', checkedValues);
    if ( checkedValues.indexOf('member_eva') === -1 ) {
      this.setState({//买手评价关键词
        show1: false,
      })
    } else {
      this.setState({//买手评价关键词
        show1: true,
      })
    }
    if ( checkedValues.indexOf('merchants_eva') === -1 ) {
      this.setState({//商家提供评价内容
        show2: false,
      })
    } else {
      this.setState({//商家提供评价内容
        show2: true,
      })
    }
    if ( checkedValues.indexOf('text_pic_eva') === -1 ) {
      this.setState({//商家提供评价内容
        show3: false,
      })
    } else {
      this.setState({//商家提供评价内容
        show3: true,
      })
    }
  }
  // 添加买手评价关键词input框
  addBuyer = () => {
    buyerNum.push(1)
    this.setState({
      buyerNum: buyerNum,
    })
  }//删除买手评价关键词input框
  delBuyer = (index) => {
    let delB = this.state.buyerNum;
    delB.splice(index,1)
    this.setState({
      buyerNum: delB
    })
  }
  // 添加商家提供的评价内容input框
  addMerchant = () => {
    merchantNum.push(1)
    this.setState({
      merchantNum: merchantNum,
    })
  }//删除商家提供的评价内容input框
  delMerchant = (index) => {
    let delM = this.state.merchantNum;
    delM.splice(index,1)
    this.setState({
      merchantNum: delM
    })
  }
  // 图文好评项
  // 关闭图片按钮
  handleCancel = () => this.setState({ previewVisible: false })
  // 查看图片按钮
  handlePreview = (file) => {
    console.log(file);
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }
  // 上传图片按钮
  handleUpload = ({fileList}) => {
    console.log(fileList);
    this.setState({
      fileList,
    })
  }
  // 添加图文好评
  addGraphic = () => {
    graphicNum.push(1)
    this.setState({
      graphicNum: graphicNum,
    })
  }// 删除图文好评
  delGraphic = (index) => {
    let delG = this.state.graphicNum;
    delG.splice(index,1)
    this.setState({
      graphicNum: delG
    })
  }
  // 图文好评里面的 买手评价或商家提供评价
  onEvaluate = (e) => {
    console.log('提供评价或写评价', e.target.value);
    this.setState({
      evaluateNum: e.target.value,
    })
  }
  //追评服务
  onAdditional = (e) => {
    console.log('追评', e.target.checked);
    this.setState({
      additionalReviewShow: e.target.checked,
    })
  }
  // 追评里的 评价按钮勾选
  onGoodreputation1 = (checkedValues) => {
    // console.log('checked = ', checkedValues);
    if ( checkedValues.indexOf('add_to_merchants_eva') === -1 ) {
      this.setState({//买手评价关键词
        show4: false,
      })
    } else {
      this.setState({//买手评价关键词
        show4: true,
      })
    }
    if ( checkedValues.indexOf('add_to_text_pic_eva') === -1 ) {
      this.setState({//商家提供评价内容
        show5: false,
      })
    } else {
      this.setState({//商家提供评价内容
        show5: true,
      })
    }
  }
  // 添加买手评价关键词input框
  addBuyer1 = () => {
    buyerNum1.push(1)
    this.setState({
      buyerNum1: buyerNum1,
    })
  }//删除买手评价关键词input框
  delBuyer1 = (index) => {
    let delB1 = this.state.buyerNum1;
    delB1.splice(index,1)
    this.setState({
      buyerNum1: delB1
    })
  }
  // 添加商家提供的评价内容input框
  addMerchant1 = () => {
    merchantNum1.push(1)
    this.setState({
      merchantNum1: merchantNum1,
    })
  }//删除商家提供的评价内容input框
  delMerchant1 = (index) => {
    let delM1 = this.state.merchantNum1;
    delM1.splice(index,1)
    this.setState({
      merchantNum1: delM1
    })
  }
  // 自定义差评
  onBadcomment = (e) => {
    console.log('自定义差评', e.target.checked);
    this.setState({
      badcomment: e.target.checked,
    })
  }
  // 添加商家提供的评价内容input框
  addMerchant2 = () => {
    merchantNum2.push(1)
    this.setState({
      merchantNum2: merchantNum2,
    })
  }//删除商家提供的评价内容input框
  delMerchant2 = (index) => {
    let delM2 = this.state.merchantNum2;
    delM2.splice(index,1)
    this.setState({
      merchantNum2: delM2
    })
  }
  // 千人千面
  // 年龄段限制
  onAgebracket = (e) => {
    console.log(`年龄段限制 = ${e.target.checked}`);
  }//选择年龄段
  onAgebracketChild = (value) => {
    console.log(`几岁到几岁 ${value}`);
  }
  // 性别限制
  onAge = (e) => {
    console.log(`性别限制 = ${e.target.checked}`);
  }//选择性别
  onAgeChild = (e) => {
    console.log('选择年龄段', e.target.value);
    this.setState({
      ages: e.target.value,
    });
  }
  // 仅限钻级别的买号
  onHeightclass = (e) => {
    console.log(`仅限钻级别的买号 = ${e.target.checked}`);
  }
   // 仅限开通花呗
  onAntCheck = (e) => {
    console.log(`仅限开通花呗 = ${e.target.checked}`);
  }
  // 限制买号类目
  onCategory = (e) => {
    console.log(`限制买号类目 = ${e.target.checked}`);
    this.setState({
      category: e.target.checked,
    })
  }
  // 区域限制
  onRegion = (e) => {
    console.log(`区域限制 = ${e.target.checked}`);
    this.setState({
      region: e.target.checked,
    })
  }
  onCheck0 = (checkedKeys, info) => {
    console.log(checkedKeys);
  };
  onCheck1 = (checkedKeys, info) => {
    console.log(checkedKeys);
  };
  onCheck2 = (checkedKeys, info) => {
    console.log(checkedKeys);
  };
  onCheck3 = (checkedKeys, info) => {
    console.log(checkedKeys);
  };
  onCheck4 = (checkedKeys, info) => {
    console.log(checkedKeys);
  };
  onCheck5 = (checkedKeys, info) => {
    console.log(checkedKeys);
  };
  onCheck6 = (checkedKeys, info) => {
    console.log(checkedKeys);
  };

  // 聊天服务
  onChitchat = (e) => {
    console.log(`聊天服务 = ${e.target.checked}`);
  }//选择年龄段
  onChitchatChild = (e) => {
    console.log('选中的是否需要聊天', e.target.value);
    this.setState({
      chitchat: e.target.value,
    });
  }



  // 提交表单
  handleSubmit = (e) => {
    let sDatas = this.state;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('传给后端的值: ', values);
        console.log('提升任务完成速度', sDatas.speedNum);
        console.log(this.state.object);
      }
    });
  }

  render(){
    const { key,ADD_QUICK_FINISH_COST,PAY_AGE,PAY_CLASS,EXTENDED_CYCLE_MOUTH_COST } = this.props.firstDatas;
    const { publishinterval_state,speedNum,oneNum,region,category,badcomment,getMonth,getDate,evaluateNum,dateShow, nums,goodreputationShow,additionalReviewShow,show1,show2,show3,show4,show5,buyerNum,buyerNum1,merchantNum,merchantNum1,merchantNum2,graphicNum,fileList } = this.state;
    const { getFieldDecorator } = this.props.form;
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">上传图片</div>
      </div>
    );
    return(
      <div>
        {/* 1.设置计划 */}
        <h2>1.设置计划</h2>
        <div className="first_header">
          {/* 设置task上线时间 */}
          <Checkbox onChange={this.onChangeTask}>设置task上线日期（<span className="colors">2</span>符点）</Checkbox>
          <table className="first_table">
            <tbody>
              <tr>
                <td className="bgslash">
                  <p className={dateShow? "p_heigth" : ''}>任务上线时间</p>
                  <p className={dateShow? "p_heigth" : ''}>关键词</p>
                </td>
                {/* 这里循环keyWord */}
                {
                  key.map((item, index) => {
                    return(
                      <td key={index}>{item}</td>
                    )
                  })
                }
                {/* 小计 */}
                <td>小计</td>
              </tr>
              {
                nums.map((item, index) => {
                  return(
                    <tr key={index}>
                      <td style={{ position: 'relative' }}>
                        {
                          index > 0?
                            <span>第{index+1}天<span className="colors">（请定义时间）</span></span>
                          :
                          <span>第{index+1}天（{getMonth}月{getDate}日）</span>
                        }
                        {
                          index > 0?
                            <Icon onClick={()=>this.deleteBtn(index)} className="tdI" type="close" />
                          :
                          ''
                        }
                        {/* dateShow为true 选择定时时间 */}
                        {
                          dateShow ?
                            <Form.Item
                              style={{ height: '48px', marginBottom: '0', paddingTop: '4px' }}
                            >
                              {getFieldDecorator('dates_'+(index+1), {
                                rules: [{ type: 'object', required: false, message: 'Please input your username!' }],
                              })(
                                <DatePicker
                                  showTime
                                  locale={locale}
                                />
                              )}
                            </Form.Item>
                          :
                          ''
                        }
                      </td>
                      {/* 关键词选择的单数 */}
                      {
                        key.map((item, indexs) => {
                          return(
                            <td key={indexs}>
                              <div style={{ display: 'flex' }}>
                                <Form.Item
                                  style={{ height: '48px', marginBottom: '0', paddingTop: '4px' }}
                                >
                                  {getFieldDecorator('bill_'+(indexs+1)+'_'+(index+1),{initialValue: 1})(
                                    <InputNumber style={{ marginRight: '5px', width: '80%' }} setFieldsValue={this.state.object[indexs+1]} min={1} max={9999} onChange={(event)=>this.onInputNumber('Change_'+(indexs+1)+'_'+(index+1),event)} />
                                  )}
                                </Form.Item>
                                <span>单</span>
                              </div>
                            </td>
                          )
                        })
                      }
                      {/* 小计的多少单 */}
                      <td>
                        <span className="colors">{oneNum}单</span>
                      </td>
                    </tr>
                  )
                })
              }
              {
                nums.length === 8?
                  <tr className="addplan">
                    <td style={{ border: 'none' }}>

                    </td>
                  </tr>
                :
                <tr className="addplan">
                  <td style={{ border: 'none' }}>
                    <div onClick={this.addPlanBtn}>
                      <Icon type="plus" />
                      <span>添加</span>
                    </div>
                  </td>
                </tr>
              }
            </tbody>
          </table>
          <div className="subtotalBox">
            <p>投放：{oneNum}单</p>
            <p>总计投放：<span className="colors">2</span>单×<span className="colors">32.60</span>符点 =<span className="colors">32.60</span>符点</p>
          </div>
        </div>
        <Form onSubmit={this.handleSubmit}>
          {/* 2.下单提示 */}
          <h2>2.下单提示</h2>
          <div className="first_header">
            <span>注：买手接任务时可看见该提示，提示内容自由填写，如：商品在第*页*行、聊天时不要问发货地和哪家快递等。属可选项，限50字内。
            （下单提示仅作为参考使用，不具有强制性）</span>
            <Form.Item className="serveInput">
              {getFieldDecorator('TextArea', {
                rules: [{ required: false, message: 'Please input your username!' }],
              })(
                <TextArea style={{ marginTop: '10px' }} rows={4} />
              )}
            </Form.Item>
          </div>
          {/* 第三步 */}
          <h2>3.请选择增值服务</h2>
          <div className="first_header">
            <div className='threeServe' style={{ position: 'relative' }}>
              <Icon onClick={this.addGoodsNumShow} style={{ position: 'absolute', top: '0', right: '0', fontSize: '20px', padding: '10px' }} type="close" />
              <Radio defaultChecked={true}>自定义</Radio>
              <div className="four_serveBox">
                {/* 重复的box 可以重复使用 */}
                {/* 免费服务 */}
                <div className="four_serveBox_child">
                  <div>免费服务</div>
                  <div style={{ padding: '11px', width: '100%' }}>
                    <Checkbox className="labels" checked={true}>自定义快递类型与包裹重量</Checkbox>
                    <div style={{ paddingLeft: '15px' }}>
                      <RadioGroup onChange={this.onExpressage} value={this.state.value}>
                        <Radio className="labels" style={radioStyle} value={1}>圆通快递 设置每个订单包裹重量
                          <Input defaultValue="2" className="inputWidth"/>
                          kg <span style={{ paddingLeft: '200px' }}>最大不超过25kg，可设置小数点后两位</span>
                        </Radio>
                        <Radio className="labels" style={radioStyle} value={2}>申通快递 设置每个订单包裹重量
                          <Input defaultValue="2" className="inputWidth"/>
                          kg <span style={{ paddingLeft: '200px' }}>最大不超过25kg，可设置小数点后两位</span>
                        </Radio>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
                {/* 快速完成任务项 */}
                <div className="four_serveBox_child">
                  <div>快速完成任务</div>
                  <div style={{ width: '100%' }}>
                    {/*提升任务完成速度*/}
                    <div className="childBoxs">
                      <Checkbox onChange={this.onAccomplish}>提升任务完成速度</Checkbox>
                      <RadioGroup onChange={this.onAccomplishChild} value={speedNum}>
                        {
                          ADD_QUICK_FINISH_COST.map((item, index)=> {
                            return(
                              <Radio disabled={speedNum? false: true} key={index} value={index+1}><span className="colors">+{item}</span>符点</Radio>
                            )
                          })
                        }
                      </RadioGroup>
                      <span>增加符点数越多，排名越靠前，任务完成更快</span>
                    </div>
                    {/* 加赏任务佣金 */}
                    <div className="childBoxs">
                      <Form.Item style={{ marginBottom: '0' }}>
                        {getFieldDecorator('toreward_state')(
                          <Checkbox>加赏任务佣金</Checkbox>
                        )}
                      </Form.Item>
                      <span>每单加赏佣金</span>
                      <Form.Item style={{ marginBottom: '0' }}>
                        {getFieldDecorator('toreward_input',{initialValue: 3})(
                          <Input style={{ width: '90%' }} className="inputWidth"/>
                        )}
                      </Form.Item>
                      <span>符点，共计：<span className="colors">3</span>单 x <span className="colors">3</span>万运符点 = <span className="colors">9.00</span>符点</span>
                      <span>（最低为<span className="colors">2</span>符点）</span>
                    </div>
                    {/* 优先审核 */}
                    <div className="childBoxs">
                      <Form.Item style={{ marginBottom: '0' }}>
                        {getFieldDecorator('optimizeaudit_state')(
                          <Checkbox defaultChecked={true}>优先审核（<span className="colors">3</span>符点）</Checkbox>
                        )}
                      </Form.Item>
                      <span>每单加赏佣金</span>
                      <span>选择此服务后，万运符将会优先审核您发布的任务</span>
                    </div>
                  </div>
                </div>
                {/* 安全优化 */}
                <div className="four_serveBox_child">
                  <div>安全优化</div>
                  <div style={{ width: '100%' }}>
                    {/* 自动结束任务 */}
                    <div className="childBoxs">
                      <Form.Item style={{ marginBottom: '0' }}>
                        {getFieldDecorator('endautomatically_state')(
                          <Checkbox onChange={this.onEndautomatically}>自动结束任务（<span className="colors">2</span>符点）</Checkbox>
                        )}
                      </Form.Item>
                      <span>当天24点前未完成的订单，系统将自动结算剩余订单的费用到您的账户，不再顺延到第二天发布。</span>
                    </div>
                    {/* 任务发布间隔 */}
                    <div className="childBoxs">
                      <Form.Item style={{ marginBottom: '0' }}>
                        {getFieldDecorator('publishinterval_state')(
                          <Checkbox onChange={this.onPublishinterval}>任务发布间隔（<span className="colors">6</span>符点）</Checkbox>
                        )}
                      </Form.Item>
                      <span>每隔</span>
                      <Form.Item style={{ margin: '0 7px', }}>
                        {getFieldDecorator('select_tiem', {
                          rules: [{ required: publishinterval_state?true:false, message: '请选择间隔时间!' }],
                        })(
                          <Select placeholder="选择间隔时间" style={{ width: 180 }}>
                            <Option value="10分钟">10分钟</Option>
                            <Option value="15分钟">15分钟</Option>
                            <Option value="30分钟">30分钟</Option>
                            <Option value="1小时">1小时</Option>
                            <Option value="2小时">2小时</Option>
                            <Option value="3小时">3小时</Option>
                          </Select>
                        )}
                      </Form.Item>
                      <span>发布</span>
                      <Form.Item style={{ margin: '0 7px', }}>
                        {getFieldDecorator('select_dan', {
                          rules: [{ required: publishinterval_state?true:false, message: '请选择发布的单量!' }],
                        })(
                          <Select placeholder="选择发布的单量" style={{ width: 180 }}>
                            <Option value="1单">1单</Option>
                            <Option value="2单">2单</Option>
                            <Option value="5单">5单</Option>
                            <Option value="10单">10单</Option>
                            <Option value="20单">20单</Option>
                            <Option value="50单">50单</Option>
                          </Select>
                        )}
                      </Form.Item>
                      <span>任务</span>
                    </div>
                    {/* 延长买家购物周期 */}
                    <div className="childBoxs">
                      <Form.Item style={{ marginBottom: '0' }}>
                        {getFieldDecorator('shoppingperiod_state')(
                          <Checkbox onChange={this.onShoppingperiod}>延长买家购物周期</Checkbox>
                        )}
                      </Form.Item>
                      <Form.Item style={{ marginBottom: '0' }}>
                        {getFieldDecorator('shoppingperiodChild')(
                          <RadioGroup onChange={this.onShoppingperiodChild}>
                            {
                              EXTENDED_CYCLE_MOUTH_COST.map((item, index) => {
                                return(
                                  <Radio key={index} value={index+1}>1个月（{item}符点/单/店铺）</Radio>
                                )
                              })
                            }
                          </RadioGroup>
                        )}
                      </Form.Item>
                    </div>
                  </div>
                </div>
                {/* 好评优化 */}
                <div className="four_serveBox_child">
                  <div>好评优化</div>
                  <div style={{ width: '100%' }}>
                    {/* 设置好评优化 */}
                    <div className="childBoxs" style={{ display: 'block' }}>
                      <Checkbox defaultChecked={true} onChange={this.onGood}>设置好评优化</Checkbox>
                      <span>选择此服务后，将有助于提升评价质量并优化您商品评价映像关键词</span>
                      {
                        goodreputationShow ?//goodreputationShow为true 默认展现出来
                          <div style={{ paddingLeft: '15px' }}>
                            <p style={{ padding: '13px' }}>可设置任务投放总数：<span>3</span>单，当前已设置：<span>0</span>单</p>
                            <Form.Item>
                              {getFieldDecorator('goodreputation_state', {
                                initialValue: [],
                              })(
                                <Checkbox.Group style={{ width: '100%' }} onChange={this.onGoodreputation}>
                                  <Row>
                                    <Col className="dashed">
                                      <Checkbox className="labels" value='default_eva'>
                                        <span>默认好评：</span>
                                        <Form.Item className="labels_input">
                                          {getFieldDecorator('default_goodValue' ,{initialValue: 1}, {
                                            rules: [{ required: true, message: '请输入单数!' }],
                                          })(
                                            <Input className="labels_input_C"/>
                                          )}
                                        </Form.Item>
                                        <span>单（<span className="colors">免费</span>） 选择此服务后，接手任务买手将对商品5分默认好评</span>
                                      </Checkbox>
                                    </Col>
                                    <Col className="dashed">
                                      <Checkbox className="labels" value='member_eva'>
                                        <span>买手写评价：</span>
                                        <Form.Item className="labels_input">
                                          {getFieldDecorator('buy_by_hand' ,{initialValue: 1}, {
                                            rules: [{ required: true, message: 'Please input your username!' }],
                                          })(
                                            <Input className="labels_input_C"/>
                                          )}
                                        </Form.Item>
                                        <span>单（<span className="colors">1</span>符点/单） 选择此项服务后，将有助于提升评价质量并优化您商品评价映像关键词</span>
                                      </Checkbox>
                                      {//买手评价关键词
                                        show1 ?
                                          <div>
                                            <p className="good_reputation">
                                              请根据您发布任务的商品设定<span>几个关键词</span>作为买手的<span>评价范围</span>独自发挥撰写评价，例如<span>"手感很舒服，款式很漂亮，包装很讲究，物流很快，性价比高"</span>等... 注意：请不要填写完整的评价内容，避免所有买手评价商品的内容一模一样
                                            </p>
                                            {
                                              buyerNum.map((item, index) => {
                                                return(
                                                  <div key={index} className="good_reputationBox">
                                                    <div style={{ display: 'flex' }}>
                                                      <Form.Item
                                                        className="serveInput addplan"
                                                        label=<span>买手评价关键词{index+1}</span>
                                                        style={{ width: '70%' }}
                                                      >
                                                        {getFieldDecorator('buyer'+(index+1), {
                                                          rules: [{ required: true, message: 'Please input your username!' }],
                                                        })(
                                                          <Input className="addplanWidth" />
                                                        )}
                                                      </Form.Item>
                                                      {
                                                        index === 0?
                                                          <span style={{ paddingTop: '9px' }}>（每个关键词最多输入10个字）</span>
                                                        :
                                                        ''
                                                      }
                                                      {
                                                        index > 2?
                                                          <Button onClick={()=>this.delBuyer(index)} type="primary" style={{ marginTop: '4px', marginLeft: '20px' }}>删除</Button>
                                                        :
                                                        ''
                                                      }
                                                    </div>
                                                  </div>
                                                )
                                              })
                                            }
                                            {//添加到了十组的时候 去掉添加按钮
                                              buyerNum.length === 10?
                                                ''
                                              :
                                              <p onClick={this.addBuyer} style={{ paddingLeft: '50px', cursor: 'pointer' }}>
                                                <span style={{ color: '#007eff' }}>+添加1个关键词</span>
                                                <span>（最多可添加10个关键词）</span>
                                              </p>
                                            }
                                          </div>
                                        :
                                        ''
                                      }
                                    </Col>
                                    <Col className="dashed">
                                      <Checkbox className="labels" value='merchants_eva'>
                                        <span>商家提供评价：</span>
                                        <Form.Item className="labels_input">
                                          {getFieldDecorator('merchant_reviews' ,{initialValue: 1}, {
                                            rules: [{ required: true, message: 'Please input your username!' }],
                                          })(
                                            <Input className="labels_input_C"/>
                                          )}
                                        </Form.Item>
                                        <span>单（<span className="colors">2</span>符点/单） 选择此项服务后，将有助于提升评价质量</span>
                                      </Checkbox>
                                      {//商家提供评价内容
                                        show2 ?
                                          <div>
                                            <p className="good_reputation">
                                              请根据您发布商品的实际情况提供评价内容<span>注意：发布多单任务时务必保证评价内容不同，避免重复</span>
                                            </p>
                                            {
                                              merchantNum.map((item, index) => {
                                                return(
                                                  <div key={index} className="good_reputationBox">
                                                    <div style={{ display: 'flex' }}>
                                                      <Form.Item
                                                        className="serveInput addplan"
                                                        label=<span>商家提供评价内容{index+1}</span>
                                                        style={{ width: '70%' }}
                                                      >
                                                        {getFieldDecorator('merchant'+(index+1), {
                                                          rules: [{ required: true, message: 'Please input your username!' }],
                                                        })(
                                                          <Input className="addplanWidth" />
                                                        )}
                                                      </Form.Item>
                                                      {
                                                        index === 0?
                                                          <span style={{ paddingTop: '9px' }}>（最多输入500个字）</span>
                                                        :
                                                        ''
                                                      }
                                                      {
                                                        index > 0?
                                                          <Button onClick={()=>this.delMerchant(index)} type="primary" style={{ marginTop: '4px', marginLeft: '20px' }}>删除</Button>
                                                        :
                                                        ''
                                                      }
                                                    </div>
                                                  </div>
                                                )
                                              })
                                            }
                                            {//添加到了十组的时候 去掉添加按钮
                                              merchantNum.length === 10?
                                                ''
                                              :
                                              <p onClick={this.addMerchant} style={{ paddingLeft: '50px', cursor: 'pointer' }}>
                                                <span style={{ color: '#007eff' }}>+添加1个关键词</span>
                                                <span>（最多可添加10个关键词）</span>
                                              </p>
                                            }
                                          </div>
                                        :
                                        ''
                                      }
                                    </Col>
                                    <Col className="dashed">
                                      <Checkbox className="labels" value='text_pic_eva'>
                                        <span>图文好评：</span>
                                        <Form.Item className="labels_input">
                                          {getFieldDecorator('graphic_evaluation' ,{initialValue: 1}, {
                                            rules: [{ required: true, message: 'Please input your username!' }],
                                          })(
                                            <Input className="labels_input_C"/>
                                          )}
                                        </Form.Item>
                                        <span>单（<span className="colors">4</span>符点/单） 选择此项服务后，买手会根据商家提供的好评图片进行评价，有利于优化评价内容及转化率</span>
                                      </Checkbox>
                                      {
                                        show3 ?
                                          <div>
                                            {
                                              graphicNum.map((item, index) =>{
                                                return(
                                                  <div key={index} className="graphic">
                                                    <div>
                                                      <span>第{index+1}单</span>
                                                      {
                                                        index > 0?
                                                          <Icon onClick={()=>this.delGraphic(index)} className="tdI" type="close" />
                                                        :
                                                        ''
                                                      }
                                                    </div>
                                                    <div>
                                                      <div className="labels">
                                                        <span>选择评价方式：</span>
                                                        <RadioGroup onChange={this.onEvaluate } value={evaluateNum}>
                                                          <Radio value={1}>买手写评价</Radio>
                                                          <Radio value={2}>商家提供评价</Radio>
                                                        </RadioGroup>
                                                      </div>
                                                      <div style={{ display: 'flex', alignItems: 'center', margin: '7px 0' }}>
                                                        <span style={{ width: '8%' }}>商品规格：</span>
                                                        <Form.Item
                                                          className="graphic_child"
                                                        >
                                                          {getFieldDecorator('color'+(index+1), {
                                                            rules: [{ required: false, message: 'Please input your username!' }],
                                                          })(
                                                            <Input placeholder="如：颜色" style={{width: '100%' }} />
                                                          )}
                                                        </Form.Item>
                                                        <Form.Item
                                                          className="graphic_child"
                                                        >
                                                          {getFieldDecorator('size'+(index+1), {
                                                            rules: [{ required: false, message: 'Please input your username!' }],
                                                          })(
                                                            <Input placeholder="如：尺寸" style={{width: '100%' }} />
                                                          )}
                                                        </Form.Item>
                                                        <span>提示：主要针对商品规格不同颜色、花色、款式进行设置和好评图片保持一致</span>
                                                      </div>
                                                      <div style={{ display: 'flex', margin: '7px 0' }}>
                                                        <Form.Item
                                                          className="serveInput addplan"
                                                          label={evaluateNum === 1?<span>买手评价关键词</span>:<span>商家提供评价内容</span>}
                                                          style={{ width: '70%' }}
                                                        >
                                                          {getFieldDecorator('contents'+(index+1), {
                                                            rules: [{ required: true, message: 'Please input your username!' }],
                                                          })(
                                                            evaluateNum === 1?
                                                              <Input maxLength={25} className="addplanWidth" />
                                                            :
                                                            <Input maxLength={500} className="addplanWidth" />
                                                          )}
                                                        </Form.Item>
                                                        {
                                                          evaluateNum === 1?
                                                            <span style={{ paddingTop: '9px' }}>（每个关键词最多输入25个字）</span>
                                                          :
                                                          <span style={{ paddingTop: '9px' }}>（最多输入500个字）</span>
                                                        }
                                                      </div>
                                                      <div style={{ paddingLeft: '15px', margin: '7px 0' }}>
                                                        <p style={{ margin: '10px 0' }}>评价图片：请将你的商品根据你要的图文评价数量，拍摄不同的组数，每组可传1-5张商品图片，每张图片不可大于2Mb</p>
                                                        <Form.Item>
                                                          {getFieldDecorator('upload'+(index+1), {
                                                            rules: [{ required: true, message: 'Please input your username!' }],
                                                            getValueFromEvent: this.normFile,
                                                          })(
                                                            <Upload
                                                              action="//jsonplaceholder.typicode.com/posts/"
                                                              listType="picture-card"
                                                              fileList1={fileList}
                                                              onPreview={this.handlePreview}
                                                              onChange={this.handleUpload}
                                                            >
                                                              {/* {fileList.length >= 5 ? null : uploadButton} */}
                                                              {uploadButton}
                                                            </Upload>
                                                          )}
                                                        </Form.Item>
                                                      </div>
                                                    </div>
                                                  </div>
                                                )
                                              })
                                            }
                                            {
                                              graphicNum.length === 10 ?
                                                ""
                                              :
                                              <p onClick={this.addGraphic} style={{ paddingLeft: '50px', cursor: 'pointer', paddingTop: '10px' }}>
                                                <span style={{ color: '#007eff' }}>+添加1个关键词</span>
                                                <span>（最多可添加10个关键词）</span>
                                              </p>
                                            }
                                          </div>
                                        :
                                        ''
                                      }
                                    </Col>
                                  </Row>
                                </Checkbox.Group>
                              )}
                            </Form.Item>
                          </div>
                        :
                        ''
                      }
                    </div>
                    {/* 追评服务 */}
                    <div className="childBoxs" style={{ display: 'block' }}>
                      <Checkbox onChange={this.onAdditional}>追评服务</Checkbox>
                      <span>选择此服务后，买手会根据您的要求对任务订单进行追评</span>
                      {
                        additionalReviewShow ?//additionalReviewShow为false 默认隐藏
                          <div style={{ paddingLeft: '15px' }}>
                            <p style={{ padding: '13px' }}>可设置任务投放总数：<span>3</span>单，当前已设置：<span>0</span>单</p>
                            <Form.Item>
                              {getFieldDecorator('additional_state', {
                                initialValue: [],
                              })(
                                <Checkbox.Group style={{ width: '100%' }} onChange={this.onGoodreputation1}>
                                  <Row>
                                    <Col className="dashed">
                                      <Checkbox className="labels" value='add_to_default_eva'>
                                        <span>设置几天后去追评：</span>
                                        <Form.Item className="labels_input">
                                          {getFieldDecorator('Zadd_to__goodValue' ,{initialValue: 1}, {
                                            rules: [{ required: true, message: '请输入单数!' }],
                                          })(
                                            <Input className="labels_input_C"/>
                                          )}
                                        </Form.Item>
                                        <span>单（<span className="colors">1</span>符点/单） 选择此项服务后，接手任务买手将对商品进行自由发挥追评</span>
                                      </Checkbox>
                                    </Col>
                                    <Col className="dashed">
                                      <Checkbox className="labels" value='add_to_member_eva'>
                                        <span>默认好评：</span>
                                        <Form.Item className="labels_input">
                                          {getFieldDecorator('Zdefasult_goodValue' ,{initialValue: 1}, {
                                            rules: [{ required: true, message: '请输入单数!' }],
                                          })(
                                            <Input className="labels_input_C"/>
                                          )}
                                        </Form.Item>
                                        <span>单（<span className="colors">7</span>符点/单） 选择此项服务后，接手任务买手将对商品进行自由发挥追评</span>
                                      </Checkbox>
                                    </Col>
                                    <Col className="dashed">
                                      <Checkbox className="labels" value='add_to_merchants_eva'>
                                        <span>买手写评价：</span>
                                        <Form.Item className="labels_input">
                                          {getFieldDecorator('Zbuy_by_hand' ,{initialValue: 1}, {
                                            rules: [{ required: true, message: '请输入单数!' }],
                                          })(
                                            <Input className="labels_input_C"/>
                                          )}
                                        </Form.Item>
                                        <span>单（<span className="colors">7</span>符点/单） 选择此项服务后，将有助于提升评价质量并优化您商品评价映像关键词</span>
                                      </Checkbox>
                                      {//追评、买手评价关键词
                                        show4 ?
                                          <div>
                                            <p className="good_reputation">
                                              请根据您发布任务的商品设定<span>几个关键词</span>作为买手的<span>评价范围</span>独自发挥撰写评价，例如<span>"手感很舒服，款式很漂亮，包装很讲究，物流很快，性价比高"</span>等... 注意：请不要填写完整的评价内容，避免所有买手评价商品的内容一模一样
                                            </p>
                                            {
                                              buyerNum1.map((item, index) => {
                                                return(
                                                  <div key={index} className="good_reputationBox">
                                                    <div style={{ display: 'flex' }}>
                                                      <Form.Item
                                                        className="serveInput addplan"
                                                        label=<span>买手评价关键词{index+1}</span>
                                                        style={{ width: '70%' }}
                                                      >
                                                        {getFieldDecorator('addbuyer'+(index+1), {
                                                          rules: [{ required: true, message: 'Please input your username!' }],
                                                        })(
                                                          <Input className="addplanWidth" />
                                                        )}
                                                      </Form.Item>
                                                      {
                                                        index === 0?
                                                          <span style={{ paddingTop: '9px' }}>（每个关键词最多输入10个字）</span>
                                                        :
                                                        ''
                                                      }
                                                      {
                                                        index > 2?
                                                          <Button onClick={()=>this.delBuyer1(index)} type="primary" style={{ marginTop: '4px', marginLeft: '20px' }}>删除</Button>
                                                        :
                                                        ''
                                                      }
                                                    </div>
                                                  </div>
                                                )
                                              })
                                            }
                                            {//添加到了十组的时候 去掉添加按钮
                                              buyerNum1.length === 10?
                                                ''
                                              :
                                              <p onClick={this.addBuyer1} style={{ paddingLeft: '50px', cursor: 'pointer' }}>
                                                <span style={{ color: '#007eff' }}>+添加1个关键词</span>
                                                <span>（最多可添加10个关键词）</span>
                                              </p>
                                            }
                                          </div>
                                        :
                                        ''
                                      }
                                    </Col>
                                    <Col className="dashed">
                                      <Checkbox className="labels" value='add_to_text_pic_eva'>
                                        <span>商家提供评价：</span>
                                        <Form.Item className="labels_input">
                                          {getFieldDecorator('Zmerchant_reviews' ,{initialValue: 1}, {
                                            rules: [{ required: true, message: '请输入单数!' }],
                                          })(
                                            <Input className="labels_input_C"/>
                                          )}
                                        </Form.Item>
                                        <span>单（<span className="colors">7</span>符点/单） 选择此项服务后，将有助于提升评价质量</span>
                                      </Checkbox>
                                      {//追评、商家提供评价内容
                                        show5 ?
                                          <div>
                                            <p className="good_reputation">
                                              请根据您发布商品的实际情况提供评价内容<span>注意：发布多单任务时务必保证评价内容不同，避免重复</span>
                                            </p>
                                            {
                                              merchantNum1.map((item, index) => {
                                                return(
                                                  <div key={index} className="good_reputationBox">
                                                    <div style={{ display: 'flex' }}>
                                                      <Form.Item
                                                        className="serveInput addplan"
                                                        label=<span>商家提供评价内容{index+1}</span>
                                                        style={{ width: '70%' }}
                                                      >
                                                        {getFieldDecorator('addmerchant'+(index+1), {
                                                          rules: [{ required: true, message: 'Please input your username!' }],
                                                        })(
                                                          <Input className="addplanWidth" />
                                                        )}
                                                      </Form.Item>
                                                      {
                                                        index === 0?
                                                          <span style={{ paddingTop: '9px' }}>（最多输入500个字）</span>
                                                        :
                                                        ''
                                                      }
                                                      {
                                                        index > 0?
                                                          <Button onClick={()=>this.delMerchant1(index)} type="primary" style={{ marginTop: '4px', marginLeft: '20px' }}>删除</Button>
                                                        :
                                                        ''
                                                      }
                                                    </div>
                                                  </div>
                                                )
                                              })
                                            }
                                            {//添加到了十组的时候 去掉添加按钮
                                              merchantNum1.length === 10?
                                                ''
                                              :
                                              <p onClick={this.addMerchant1} style={{ paddingLeft: '50px', cursor: 'pointer' }}>
                                                <span style={{ color: '#007eff' }}>+添加1个关键词</span>
                                                <span>（最多可添加10个关键词）</span>
                                              </p>
                                            }
                                          </div>
                                        :
                                        ''
                                      }
                                    </Col>
                                  </Row>
                                </Checkbox.Group>
                              )}
                            </Form.Item>
                          </div>
                        :
                          ''
                      }
                    </div>
                  </div>
                </div>
                {/* 自定义差评 */}
                <div className="four_serveBox_child">
                  <div>自定义差评</div>
                  <div style={{ padding: '20px', width: '100%' }}>
                    <div>
                      <Form.Item style={{ marginBottom: '0' }}>
                        {getFieldDecorator('badcomment_state')(
                          <Checkbox onChange={this.onBadcomment }>定义差评</Checkbox>
                        )}
                      </Form.Item>
                      <div style={{ paddingLeft: '20px' }}>
                        <p className="good_reputation">
                          请根据您发布商品的实际情况提供评价内容<span>注意：发布多单任务时务必保证评价内容不同，避免重复</span>
                        </p>
                        {
                          merchantNum2.map((item, index) => {
                            return(
                              <div key={index} className="good_reputationBox">
                                <div style={{ display: 'flex' }}>
                                  <Form.Item
                                    className="serveInput addplan"
                                    label=<span>商家提供评价内容{index+1}</span>
                                    style={{ width: '70%' }}
                                  >
                                    {getFieldDecorator('badcomment'+(index+1), {
                                      rules: [{ required: badcomment? true : false, message: 'Please input your username!' }],
                                    })(
                                      <Input className="addplanWidth" />
                                    )}
                                  </Form.Item>
                                  {
                                    index === 0?
                                      <span style={{ paddingTop: '9px' }}>（最多输入500个字）</span>
                                    :
                                    ''
                                  }
                                  {
                                    index > 0?
                                      <Button onClick={()=>this.delMerchant2(index)} type="primary" style={{ marginTop: '4px', marginLeft: '20px' }}>删除</Button>
                                    :
                                    ''
                                  }
                                </div>
                              </div>
                            )
                          })
                        }
                        {//添加到了十组的时候 去掉添加按钮
                          merchantNum1.length === 10?
                            ''
                          :
                          <p onClick={this.addMerchant2} style={{ paddingLeft: '50px', cursor: 'pointer' }}>
                            <span style={{ color: '#007eff' }}>+添加1个关键词</span>
                            <span>（最多可添加10个关键词）</span>
                          </p>
                        }
                      </div>
                    </div>
                  </div>
                </div>
                {/* 千人千面 */}
                <div className="four_serveBox_child">
                  <div>千人千面</div>
                  <div style={{ width: '100%' }}>
                    {/* 年龄段限制 */}
                    <div className="childBoxs">
                      <Checkbox onChange={this.onAgebracket }>需要人群的年龄段（0.5符点/单）</Checkbox>
                      <Select defaultValue="18~25" style={{ width: 120 }} onChange={this.onAgebracketChild }>
                        {
                          PAY_AGE.map((item, index) => {
                            return(
                              <Option key={index} value={item}>{item}</Option>
                            )
                          })
                        }
                      </Select>
                      <span style={{ marginLeft: '10px' }}>岁</span>
                    </div>
                    {/* 指定买号性别 */}
                    <div className="childBoxs">
                      <Checkbox onChange={this.onAge }>需要人群的年龄段（0.5符点/单）</Checkbox>
                      <RadioGroup onChange={this.onAgeChild} value={this.state.ages}>
                        <Radio value={'男'}>男号（1符点/单）</Radio>
                        <Radio value={'女'}>女号（0.5符点/单）</Radio>
                      </RadioGroup>
                      <span style={{ marginLeft: '10px' }}>例：选择此服务后，会根据选择性别筛选买号。</span>
                    </div>
                    {/* 买号等级限制 */}
                    <div className="childBoxs">
                      <Checkbox onChange={this.onHeightclass }>仅限钻级别的买号可接该任务（1符点/单）</Checkbox>
                    </div>
                    {/* 仅限开通花呗买号可以接 */}
                    <div className="childBoxs">
                      <Checkbox onChange={this.onAntCheck}>仅限开通花呗买号可以接该任务（2符点/单，指已开通花呗的用户，不是指任务要用花呗付款，开通了花呗的买号在淘宝内部被认为是优质的账号，用这些账号很安全，权重高）</Checkbox>
                    </div>
                    {/* 限制买号类目 */}
                    <div className="childBoxs" style={{ display: 'block' }}>
                      <Checkbox onChange={this.onCategory}>限制买号类目（0.5浮点/单）</Checkbox>
                      {
                        category ?
                          <Form.Item style={{ marginBottom: '0', marginTop: '15px' }}>
                            {getFieldDecorator("search_discount_text", {
                              initialValue: [],
                            })(
                              <Checkbox.Group style={{ width: '100%' }} onChange={this.discountBtn}>
                                <Row>
                                  {
                                    PAY_CLASS.map((item, index) => {
                                      return(
                                        <Col key={index} span={4}><Checkbox value={item}>{item}</Checkbox></Col>
                                      )
                                    })
                                  }
                                </Row>
                              </Checkbox.Group>
                            )}
                          </Form.Item>
                        :
                          ''
                      }
                    </div>
                    {/* 地区限制 */}
                    <div className="childBoxs" style={{ display: 'block' }}>
                      <Checkbox onChange={this.onRegion}>地区限制（0.5浮点/单）</Checkbox>
                      {
                        region ?
                          <div className="childBoxs dresss" style={{ alignItems: 'flex-start' }}>
                            <Form.Item>
                              {getFieldDecorator('radio-button')(
                                <Tree
                                  checkable
                                  defaultExpandAll={true}
                                  onCheck={this.onCheck0}
                                >
                                  <TreeNode title="华东" key="0">
                                    <TreeNode title="上海" key="310000" />
                                    <TreeNode title="江苏" key="320000" />
                                    <TreeNode title="浙江" key="330000" />
                                    <TreeNode title="安徽" key="340000" />
                                    <TreeNode title="江西" key="360000" />
                                  </TreeNode>
                                </Tree>
                              )}
                            </Form.Item>
                            <Tree
                              checkable
                              defaultExpandAll={true}
                              onCheck={this.onCheck1}
                            >
                              <TreeNode title="华北" key="1">
                                <TreeNode title="北京" key="110000" />
                                <TreeNode title="天津" key="120000" />
                                <TreeNode title="河北" key="130000" />
                                <TreeNode title="山西" key="140000" />
                                <TreeNode title="内蒙古" key="150000" />
                                <TreeNode title="山东" key="370000" />
                              </TreeNode>
                            </Tree>
                            <Tree
                              checkable
                              defaultExpandAll={true}
                              onCheck={this.onCheck2}
                            >
                              <TreeNode title="华中" key="2">
                                <TreeNode title="河南" key="410000" />
                                <TreeNode title="湖北" key="420000" />
                                <TreeNode title="湖南" key="430000" />
                              </TreeNode>
                            </Tree>
                            <Tree
                              checkable
                              defaultExpandAll={true}
                              onCheck={this.onCheck3}
                            >
                              <TreeNode title="华南" key="3">
                                <TreeNode title="福建" key="350000" />
                                <TreeNode title="广东" key="440000" />
                                <TreeNode title="广西" key="450000" />
                                <TreeNode title="海南" key="460000" />
                              </TreeNode>
                            </Tree>
                            <Tree
                              checkable
                              defaultExpandAll={true}
                              onCheck={this.onCheck4}
                            >
                              <TreeNode title="东北" key="4">
                                <TreeNode title="辽宁" key="210000" />
                                <TreeNode title="吉林" key="220000" />
                                <TreeNode title="黑龙江" key="230000" />
                              </TreeNode>
                            </Tree>
                            <Tree
                              checkable
                              defaultExpandAll={true}
                              onCheck={this.onCheck5}
                            >
                              <TreeNode title="西北" key="5">
                                <TreeNode title="陕西" key="610000" />
                                <TreeNode title="甘肃" key="620000" />
                                <TreeNode title="青海" key="630000" />
                                <TreeNode title="宁夏" key="640000" />
                                <TreeNode title="新疆" key="650000" />
                              </TreeNode>
                            </Tree>
                            <Tree
                              checkable
                              defaultExpandAll={true}
                              onCheck={this.onCheck6}
                            >
                              <TreeNode title="西南" key="6">
                                <TreeNode title="重庆" key="500000" />
                                <TreeNode title="四川" key="510000" />
                                <TreeNode title="贵州" key="520000" />
                                <TreeNode title="云南" key="530000" />
                                <TreeNode title="西藏" key="540000" />
                              </TreeNode>
                            </Tree>
                          </div>
                        :
                          ''
                      }
                    </div>
                  </div>
                </div>
                {/* 聊天服务 */}
                <div className="four_serveBox_child">
                  <div>聊天服务</div>
                  <div style={{ width: '100%' }}>
                    <div className="childBoxs" style={{ display: 'block' }}>
                      <div><Checkbox onChange={this.onChitchat }>聊天服务</Checkbox><span>选择此项服务后，买手会根据您的要求进行聊天</span></div>
                      <RadioGroup style={{ marginTop: '20px', marginLeft: '15px' }} onChange={this.onChitchatChild} value={this.state.chitchat}>
                        <Radio value={1}>默认假聊<span className="colors">（免费）</span></Radio>
                        <Radio value={2}>无需买手假聊<span className="colors">（免费）</span></Radio>
                        <Radio value={3}>自定义聊天关键词<span className="colors">（2符点）</span></Radio>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
                {/* 返款方式 */}
                <div className="four_serveBox_child">
                  <div>返款方式</div>
                  <div style={{ width: '100%' }}>
                    <div className="childBoxs" style={{ display: 'block', padding: '40px 15px' }}>
                      <div><Checkbox onChange={this.onChitchat }>聊天服务</Checkbox><span>平台将使用押金返款，商家无需耗费人力处理退款，减少押款周期。费用：6单 x 100元 x 0.65%（平台服务费） = 3.90符点</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 第四步 */}
          <h2>3.请选择增值服务</h2>
          <div className="first_header">
            <div className="four_serveBox" style={{ borderRadius: '6px', fontSize: '15px' }}>
              <div className="serve_footer" style={{ backgroundColor: '#F5F5FA' }}>
                <div>分类</div>
                <div>费用明细</div>
                <div>小计</div>
                <div>合计</div>
              </div>
              <div className="serve_footer">
                <div>押金</div>
                <div>
                  <div>商品： 100元/单×1单</div>
                  <div>任务保证金<Icon type="question-circle" /> ：5元/单（100.00元/单×1单×0.05）</div>
                </div>
                <div>105元</div>
                <div>105×6 = <span className="colors">630.00</span>元</div>
              </div>
              <div className="serve_footer">
                <div>文字好评</div>
                <div>
                  <div>套餐服务费<Icon type="question-circle" />：15.8符点/单</div>
                </div>
                <div>
                  <div>15.8符点 </div>
                </div>
                <div>15.8×6 = <span className="colors">94.80</span>符点</div>
              </div>
              <div className="serve_footer">
                <div>增值服务</div>
                <div>
                  <div>自定义快递/重量：0符点</div>
                  <div>好评优化：0符点</div>
                  <div>默认假聊：0符点</div>
                  <div>平台返款<Icon type="question-circle" /> ：3.90符点</div>
                </div>
                <div>
                  <div>20.90符点</div>
                </div>
                <div><span className="colors">20.90</span>符点</div>
              </div>
              <div className="serve_footer" style={{ display: 'block', textAlign: 'center', padding: '30px 0', fontSize: '18px' }}>
                <p>合计：押金：<span>630.00</span>元    万运符：<span>118.70</span>符点</p>
              </div>
            </div>
          </div>
          {/* 提交按钮 */}
          <div style={{ padding: '50px 0' }} className="releaseBtnok">
            <Button>上一步</Button>
            <Button type="primary" htmlType="submit">下一步</Button>
          </div>
        </Form>
      </div>
    )
  }
}

const AppreciationServe = Form.create()(AppreciationServes);
export default AppreciationServe
