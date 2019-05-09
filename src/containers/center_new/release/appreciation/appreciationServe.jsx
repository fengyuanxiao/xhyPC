import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, DatePicker, Radio, Select, Row, Col, Upload } from 'antd';
import locale from 'antd/lib/date-picker/locale/zh_CN';

import './serve.css';

const { TextArea } = Input;         //文本框
const RadioGroup = Radio.Group;     //单选框
const Option = Select.Option;       //选择器
let nums = [1];                     //app关键字组数
let buyerNum = [1,2,3];             //买手评价关键词
let merchantNum = [1];              //商家提供评价内容
let graphicNum = [1];              //商家提供评价内容

class AppreciationServes extends Component {
  constructor() {
    super();
    this.state = {
      mode: 'time',                         //时间日期
      nums: [1],                            //添加计划数组
      buyerNum: [1,2,3],                    //买手评价关键词
      merchantNum: [1],                     //商家提供评价内容
      graphicNum: [1],                      //图文好评
      value: 1,                             //选择快递类型
      speedNum: 1,                          //快速完成的速度 单选选中的浮点
      shoppingNum: 1,                       //延长买家购物周期 单选框选中数
      goodreputationShow: true,             //好评优化默认选中显示
      additionalReviewShow: false,          //追评服务显示
      fileList: [],                         //没有默认图片，空数组
      previewVisible: false,                //关闭观看图片状态
      previewImage: '',
    }
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
      this.setState({ mode: 'time' });
    }
  }
  handlePanelChange = (value, mode) => {
    console.log(value);
    console.log(mode);
    this.setState({ mode });
  }
  handleOk = (e) => {
    console.log(e);
  }
  handleChange = (e) => {
    console.log(e);
  }

  // 添加投放数量
  addPlanBtn = () => {
    nums.push(1)
    this.setState({
      nums: nums,
    })
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
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
  // 快速完成任务项
  // 提升任务完成速度
  onAccomplish = (e) => {
    console.log(`提升任务完成速度 = ${e.target.checked}`);
  }//提升任务完成速度选中的浮点单选框
  onAccomplishChild = (e) => {
    console.log('选择的浮点', e.target.value);
    this.setState({
      speedNum: e.target.value,
    });
  }
  // 加赏任务佣金
  onToreward = (e) => {
    console.log(`加赏任务佣金 = ${e.target.checked}`);
  }
  // 优化审核
  onOptimizeaudit = (e) => {
    console.log(`优化审核 = ${e.target.checked}`);
  }

  // 安全优化项
  // 自动结束任务
  onEndautomatically = (e) => {
    console.log(`自动结束任务 = ${e.target.checked}`);
  }
  // 任务发布间隔
  onPublishinterval = (e) => {
    console.log(`任务发布间隔 = ${e.target.checked}`);
  }//选择每隔多少分钟
  handleInterval = (value) => {
    console.log(`多少分钟 ${value}`);
  }//每隔多少分钟发布多少单
  handleTasks = (value) => {
    console.log(`多少单 ${value}`);
  }//延长买家购物周期
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
    if ( checkedValues.indexOf('B') === -1 ) {
      this.setState({//买手评价关键词
        show1: false,
      })
    } else {
      this.setState({//买手评价关键词
        show1: true,
      })
    }
    if ( checkedValues.indexOf('C') === -1 ) {
      this.setState({//商家提供评价内容
        show2: false,
      })
    } else {
      this.setState({//商家提供评价内容
        show2: true,
      })
    }
    if ( checkedValues.indexOf('D') === -1 ) {
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
  //追评服务
  onAdditional = (e) => {
    console.log('好评优化勾选', e.target.checked);
    this.setState({
      additionalReviewShow: e.target.checked,
    })
  }

  // 提交表单
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render(){
    const { dateShow, nums,goodreputationShow,additionalReviewShow,show1,show2,show3,buyerNum,merchantNum,graphicNum,fileList } = this.state;
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
                  <p className={dateShow? "p_heigth" : ''}>上线time</p>
                  <p className={dateShow? "p_heigth" : ''}>keyWord</p>
                </td>
                {/* 这里循环keyWord */}
                <td>keyWord1</td>
                <td>keyWord2</td>
              </tr>
              {
                nums.map((item, index) => {
                  return(
                    <tr key={index}>
                      <td style={{ position: 'relative' }}>
                        <span>第一天（05月07日）</span>
                        {
                          index > 0?
                            <Icon onClick={()=>this.deleteBtn(index)} className="tdI" type="close" />
                          :
                          ''
                        }
                        {/* dateShow为true 选择定时时间 */}
                        {
                          dateShow ?
                            <DatePicker
                              mode={this.state.mode}
                              showTime
                              onOpenChange={this.handleOpenChange}
                              onPanelChange={this.handlePanelChange}
                              onOk={this.handleOk}
                              onChange={this.handleChange}
                              locale={locale}
                            />
                          :
                          ''
                        }
                      </td>
                      <td>5</td>
                      <td><span className="colors">2</span>鸡</td>
                    </tr>
                  )
                })
              }
              <tr className="addplan">
                <td style={{ border: 'none' }}>
                  <div onClick={this.addPlanBtn}>
                    <Icon type="plus" />
                    <span>添加</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="subtotalBox">
            <p>1231321</p>
            <p>1231321</p>
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
                    <Checkbox className="labels" checked={true}>Checkbox</Checkbox>
                    <div style={{ paddingLeft: '15px' }}>
                      <RadioGroup onChange={this.onExpressage} value={this.state.value}>
                        <Radio className="labels" style={radioStyle} value={1}>Option A设置每个订单包裹重量 <Input className="inputWidth"/>kg <span style={{ paddingLeft: '200px' }}>最大不超过25kg，可设置小数点后两位</span></Radio>
                        <Radio className="labels" style={radioStyle} value={2}>Option B设置每个订单包裹重量 <Input className="inputWidth"/>kg <span style={{ paddingLeft: '200px' }}>最大不超过25kg，可设置小数点后两位</span></Radio>
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
                      <Checkbox onChange={this.onAccomplish}>Checkbox</Checkbox>
                      <RadioGroup onChange={this.onAccomplishChild} value={this.state.speedNum}>
                        <Radio value={1}>A</Radio>
                        <Radio value={2}>B</Radio>
                        <Radio value={3}>C</Radio>
                      </RadioGroup>
                      <span>增加符点数越多，排名越靠前，任务完成更快</span>
                    </div>
                    {/* 加赏任务佣金 */}
                    <div className="childBoxs">
                      <Checkbox onChange={this.onToreward}>Checkbox</Checkbox>
                      <span>每单加赏佣金</span>
                      <Input className="inputWidth"/>
                      <span>符点，共计：3单 x 3万运符点 = 9.00符点</span>
                      <span>（最低为2符点）</span>
                    </div>
                    {/* 优先审核 */}
                    <div className="childBoxs">
                      <Checkbox defaultChecked={true} onChange={this.onOptimizeaudit}>优先审核（3符点）</Checkbox>
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
                      <Checkbox onChange={this.onEndautomatically}>自动结束任务（2符点）</Checkbox>
                      <span>当天24点前未完成的订单，系统将自动结算剩余订单的费用到您的账户，不再顺延到第二天发布。</span>
                    </div>
                    {/* 任务发布间隔 */}
                    <div className="childBoxs">
                      <Checkbox onChange={this.onPublishinterval}>任务发布间隔（6符点）</Checkbox>
                      <span>每隔</span>
                      <Select defaultValue="10分钟" style={{ width: 120 }} onChange={this.handleInterval }>
                        <Option value="10分钟">10分钟</Option>
                        <Option value="15分钟">15分钟</Option>
                        <Option value="30分钟">30分钟</Option>
                        <Option value="1小时">1小时</Option>
                        <Option value="2小时">2小时</Option>
                        <Option value="3小时">3小时</Option>
                      </Select>
                      <span>发布</span>
                      <Select defaultValue="1单" style={{ width: 120 }} onChange={this.handleTasks}>
                        <Option value="1单">1单</Option>
                        <Option value="2单">2单</Option>
                        <Option value="5单">5单</Option>
                        <Option value="10单">10单</Option>
                        <Option value="20单">20单</Option>
                        <Option value="50单">50单</Option>
                      </Select>
                      <span>任务</span>
                    </div>
                    {/* 延长买家购物周期 */}
                    <div className="childBoxs">
                      <Checkbox onChange={this.onShoppingperiod}>延长买家购物周期</Checkbox>
                      <RadioGroup onChange={this.onShoppingperiodChild} value={this.state.shoppingNum}>
                        <Radio value={1}>1个月（0.5符点/单/店铺）</Radio>
                        <Radio value={2}>2个月（1符点/单/店铺）</Radio>
                        <Radio value={3}>3个月（1.5符点/单/店铺）</Radio>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
                {/* 好评优化 */}
                <div className="four_serveBox_child">
                  <div>好评优化</div>
                  <div style={{ padding: '11px', width: '100%' }}>
                    {/* 设置好评优化 */}
                    <div className="childBoxs" style={{ display: 'block' }}>
                      <Checkbox defaultChecked={true} onChange={this.onGood}>设置好评优化</Checkbox>
                      <span>选择此服务后，将有助于提升评价质量并优化您商品评价映像关键词</span>
                      {
                        goodreputationShow ?//goodreputationShow为true 默认展现出来
                          <div style={{ paddingLeft: '15px' }}>
                            <p style={{ padding: '13px' }}>可设置任务投放总数：<span>3</span>单，当前已设置：<span>0</span>单</p>
                            <Checkbox.Group style={{ width: '100%' }} onChange={this.onGoodreputation}>
                              <Row>
                                <Col className="dashed">
                                  <Checkbox className="labels" value="A">默认好评:<Input className="inputWidth"/>单（免费） 选择此服务后，接手任务买手将对商品5分默认好评</Checkbox>
                                </Col>
                                <Col className="dashed">
                                  <Checkbox className="labels" value="B">买手写评价:<Input className="inputWidth"/>单（1符点/单） 选择此项服务后，将有助于提升评价质量并优化您商品评价映像关键词</Checkbox>
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
                                  <Checkbox className="labels" value="C">商家提供评价:<Input className="inputWidth"/>单（2符点/单） 选择此项服务后，将有助于提升评价质量</Checkbox>
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
                                  <Checkbox className="labels" value="D">图文好评:<Input className="inputWidth"/>单（4符点/单） 选择此项服务后，买手会根据商家提供的好评图片进行评价，有利于优化评价内容及转化率</Checkbox>
                                  {
                                    show3 ?
                                      <div>
                                        {
                                          graphicNum.map((item, index) =>{
                                            return(
                                              <div key={index} className="graphic">
                                                <div>第{index+1}单</div>
                                                <div>
                                                  <div className="labels">
                                                    <span>选择评价方式：</span>
                                                    <RadioGroup onChange={this.onAccomplishChild} value={this.state.speedNum}>
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
                                                      label=<span>商家提供评价内容</span>
                                                      style={{ width: '70%' }}
                                                    >
                                                      {getFieldDecorator('contents'+(index+1), {
                                                        rules: [{ required: true, message: 'Please input your username!' }],
                                                      })(
                                                        <Input className="addplanWidth" />
                                                      )}
                                                    </Form.Item>
                                                    <span style={{ paddingTop: '9px' }}>（最多输入500个字）</span>
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
                                                          fileList={fileList}
                                                          onPreview={this.handlePreview}
                                                          onChange={this.handleUpload}
                                                        >
                                                          {fileList.length >= 5 ? null : uploadButton}
                                                        </Upload>
                                                      )}
                                                    </Form.Item>
                                                  </div>
                                                </div>
                                              </div>
                                            )
                                          })
                                        }
                                        <p onClick={this.addGraphic} style={{ paddingLeft: '50px', cursor: 'pointer', paddingTop: '10px' }}>
                                          <span style={{ color: '#007eff' }}>+添加1个关键词</span>
                                          <span>（最多可添加10个关键词）</span>
                                        </p>
                                      </div>
                                    :
                                    ''
                                  }
                                </Col>
                              </Row>
                            </Checkbox.Group>
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
                            <Checkbox.Group style={{ width: '100%' }} onChange={this.onGoodreputation}>
                              <Row>
                                <Col className="dashed">
                                  <Checkbox className="labels" value="A">默认好评:<Input className="inputWidth"/>单（免费） 选择此服务后，接手任务买手将对商品5分默认好评</Checkbox>
                                </Col>
                                <Col className="dashed"><Checkbox className="labels" value="B">买手写评价:<Input className="inputWidth"/>单（1符点/单） 选择此项服务后，将有助于提升评价质量并优化您商品评价映像关键词</Checkbox></Col>
                                <Col className="dashed"><Checkbox className="labels" value="C">商家提供评价:<Input className="inputWidth"/>单（2符点/单） 选择此项服务后，将有助于提升评价质量</Checkbox></Col>
                                <Col className="dashed"><Checkbox className="labels" value="D">图文好评:<Input className="inputWidth"/>单（4符点/单） 选择此项服务后，买手会根据商家提供的好评图片进行评价，有利于优化评价内容及转化率</Checkbox></Col>
                              </Row>
                            </Checkbox.Group>
                          </div>
                        :
                          ''
                      }
                    </div>
                  </div>
                </div>
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
