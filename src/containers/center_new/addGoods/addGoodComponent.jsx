import React, { Component } from 'react';
import { Icon, Select, Form, Button, Input, Upload, Modal, Radio, Checkbox, Row, Col, message } from 'antd';
import { Link } from 'react-router-dom';
import { _getnfo, _getStoreList } from '../../../component/api';                        //引入ajax接口


import './addGoods.css';                                                        //引入的样式

const Option = Select.Option;                                                   //选择框
const RadioGroup = Radio.Group;                                                 //单选框

class addGoodComponents extends Component {
  constructor() {
    super();
    this.state = {
      previewVisible: false,                                                    //关闭观看图片状态
      previewImage: '',
      fileList: [],                                                             //没有默认图片，空数组
      value1: 1,                                                                //单选框选中的值
      value2: 1,
      mobileImg: '手机主图一',                                                   //手机主图一 文字
    }
  }

  componentWillMount() {
    let platform = {}
    _getStoreList(platform)
    .then(res=> {
      // console.log(res.data.data);
      this.setState({
        storeList: res.data.data.list,                     //获取店铺列表
      })
    })
    .catch(err=> {
      console.log(err);
    })
  }

  // xuanze shops
  handleChange = (value) => {
    console.log(`selected ${value}`);
  }

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
    if ( fileList.length === 0 ) {
      this.setState({
        mobileImg: '手机主图一',
      })
    } else if ( fileList.length === 1 ) {
      this.setState({
        mobileImg: '手机主图二',
      })
    } else {
      this.setState({
        mobileImg: '手机主图三',
      })
    }
  }
  // 添加商品时通过商品链接获取商品信息
  getNfo = () => {
    if ( this.state.shopURL ) {
      let url = {
        url: this.state.shopURL,
      }
      _getnfo(url)
      .then(res => {
          console.log(res.data.data);
          // 获取数据填入到form表单中
          this.props.form.setFieldsValue({
            goods_name: res.data.data.goods_name,
          })
          if (this.state.fileList) {          //图片数组长度为true 上传按钮处改为 Mobile
            this.setState({
              port: true,
            })
          }
          // 商品链接获取的商品主图
          this.setState({
             fileList: [
               {
                 url:res.data.data.img1,
                 uid: '1',
               },
               {
                 url:res.data.data.img2,
                 uid: '2',
               }
             ],
          })
      })
      .catch(err => {
        console.log(err);
      })
    } else {
      message.error("请输入商品链接")
    }
  }
  onShopURL = (e) => {  //商品链接
    // console.log(e.target.value);
    this.setState({
      shopURL: e.target.value,
    })
  }

  // 单选框函数
  radioBtn1 = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value1: e.target.value,
    });
  }
  radioBtn2 = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value2: e.target.value,
    });
  }
  // 复选框
  checkboxBtn = (e) => {
    console.log(e);
  }


  // from表单提交按钮
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { previewVisible, previewImage, fileList, mobileImg, storeList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">{mobileImg}</div>
      </div>
    );
    return(
      <div className="goodsCss">
        <h2>Goods message </h2>
        <Form className="addGoods_form" onSubmit={this.handleSubmit}>
          <Form.Item
            label="宝贝链接"
            className="form_item"
          >
            {getFieldDecorator('note', {
              rules: [{ required: true, message: '请输入宝贝链接!' }],
            })(
              <div style={{ display: 'flex' }}>
                <Input onChange={this.onShopURL} placeholder="请输入宝贝链接" />
                <Button onClick={this.getNfo} style={{ marginLeft: '20px' }} type="primary">getGoods xinxi</Button>
              </div>
            )}
          </Form.Item>
          <div>
            <Form.Item
              label="店铺名称"
              style={{ display: 'flex' }}
            >
              {getFieldDecorator('gender', {
                rules: [{ required: true, message: '请选择店铺!' }],
              })(

                <Select placeholder="请选择店铺" style={{ width: 250, marginRight:'10px' }} onChange={this.handleChange}>
                  {
                    storeList ?
                      storeList.map((item, index) => {
                        return(
                          <Option key={index} value={item.id}>{item.store_name}</Option>
                        )
                      })
                    :
                    <Option value="先绑定店铺">先绑定店铺</Option>
                  }
                </Select>
              )}
            </Form.Item>
            <Link style={{ paddingTop: '9px' }} to="/bind/bindShops">+ bingShops</Link>
          </div>
          <Form.Item
            label="宝贝名称"
            className="form_item"
          >
            {getFieldDecorator('goods_name', {
              rules: [{ required: true, message: '请输入宝贝名称!' }],
            })(
              <Input placeholder="请输入宝贝名称" />
            )}
          </Form.Item>
          <Form.Item label="宝贝主图">
            <div className="uploads">
              <Upload
                action="//jsonplaceholder.typicode.com/posts/"
                listType="picture-card"
                fileList={fileList}
                onPreview={this.handlePreview}
                onChange={this.handleUpload}
              >
                {fileList.length >= 3 ? null : uploadButton}
              </Upload>
              <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
              </Modal>
            </div>
          </Form.Item>
          {/* <Form.Item
            label="Baby name"
            >
            {getFieldDecorator('images', {
              rules: [{ required: false, message: '请上传必要截图截图!' }],
            })(
              <div>
            {
            fileList ?
            fileList.map((item, index) => {
            return(
            <img style={{ width: '20%', paddingRight: '10px' }} key={index} src={item.url} alt="goodstu"/>
            )
            })
            :
            ''
            }
            <ImagePicker
            length={3}
            files={fileList}
            onChange={this.handleUpload}
            onImageClick={(index, fs) => console.log(index, fs)}
            selectable={fileList.length < 3}
            />
              </div>
            )}
          </Form.Item> */}
          {/* 单选框 */}
          <Form.Item label="下单指定规格" className="form_item" style={{ display: 'flex', alignItems: 'center' }}>
            <RadioGroup className="radio_child" onChange={this.radioBtn1} value={this.state.value1}>
              <Radio value={1}>任意规格</Radio>
              <Radio value={2}>自定义
                <Input className="radio_input" placeholder="如：颜色" />
                <Input className="radio_input" placeholder="如：尺码" />
              </Radio>
            </RadioGroup>
          </Form.Item>
          {/* 单价，件数 */}
          <Form.Item label="宝贝下单价" className="form_item">
            {getFieldDecorator('moneys', {
              rules: [{ required: true, message: 'Please input your babyName!' }],
            })(
              <div className="xaidanMoney">
                <p>
                  <Input className="xaidanMoney_input" placeholder="如：size" />
                  <span> 元</span>
                </p>
                <p>
                  <span>每单拍：</span>
                  <Input className="xaidanMoney_input" />
                  <span> 件 </span>
                  <span className="xaidanMoney_span">（出于安全，建议每单不要超过两件）</span>
                </p>
              </div>
            )}
          </Form.Item>
          {/* expressage */}
          <Form.Item label="搜索页面展示价格" className="form_item">
            {getFieldDecorator('moneys', {
              rules: [{ required: true, message: 'Please input your babyName!' }],
            })(
              <div className="xaidanMoney">
                <p>
                  <Input className="xaidanMoney_input" placeholder="如：size" />
                  <span className="xaidanMoney_span">非必填，如该商品有满减、促销、多规格等情况，请填写此金额</span>
                </p>
              </div>
            )}
          </Form.Item>
          {/* expressage 单选框 */}
          <Form.Item label="宝贝下单时是否包邮" className="form_item" style={{ display: 'flex', alignItems: 'center' }}>
            <RadioGroup className="radio_child" onChange={this.radioBtn2} value={this.state.value2}>
              <Radio value={1}>不包邮</Radio>
              <Radio value={2}>
                <span>包邮</span>
                <span className="xaidanMoney_span">（不包邮商品每单需支付10元运费押金，任务完成后运费押金将自动退还）</span>
              </Radio>
            </RadioGroup>
          </Form.Item>
          {/* card 复选框 */}
          <Form.Item label="是否允许使用优惠券和花呗/信用卡付款" className="form_item" style={{ display: 'flex', alignItems: 'center', height: '30px' }}>
            <Checkbox.Group style={{ width: '100%' }} onChange={this.checkboxBtn}>
              <Row style={{ paddingTop: '10px' }}>
                <Col span={6}><Checkbox value="A">允许优惠券</Checkbox></Col>
                <Col span={6}><Checkbox value="B">
                  <span>允许花呗/信用卡</span>
                  {/* <span className="xaidanMoney_span">（几多的价格的观点，大概的感觉文件柜欧文）</span> */}
                </Checkbox></Col>
                <span className="xaidanMoney_span">（允许使用则自行承担手续费）</span>
              </Row>
            </Checkbox.Group>
          </Form.Item>
          <p className="button_p">根据您的设置买家下单包邮价预计为元</p>
          {/* 提交按钮 */}
          <Form.Item className="submit_btn">
            <Button className="bottom_btns" type="danger" ghost>取消</Button>
            <Button className="bottom_btns" type="primary" htmlType="submit">保存</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

const addGoodComponent = Form.create()(addGoodComponents);
export default addGoodComponent
