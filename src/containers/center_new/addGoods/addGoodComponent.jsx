import React, { Component } from 'react';
import { Icon, Select, Form, Button, Input, Upload, Modal, Radio, Checkbox, Row, Col } from 'antd';
// import { Link } from 'react-router-dom';
import { _getnfo } from '../../../component/api';                        //引入ajax接口


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
      port: false,                                                              //为false PC端，true 移动端
      value1: 1,                                                                //单选框选中的值
      value2: 1,
    }
  }

  // xuanze shops
  handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  // 关闭图片按钮
  handleCancel = () => this.setState({ previewVisible: false })
  // 查看图片按钮
  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }
  // 上传图片按钮
  handleUpload = ({ fileList }) => {
    console.log(fileList);
    this.setState({
      fileList,
      port: true,
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

  // 添加商品时通过商品链接获取商品信息
  getNfo = () => {
    let url = {
      url: this.state.shopURL,
    }
    _getnfo(url)
    .then(res => {
      console.log(res.data.data);
      this.setState({
         goodMsg: res.data.data,
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
  onShopURL = (e) => {  //商品链接
    console.log(e.target.value);
    this.setState({
      shopURL: e.target.value,
    })
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
    const { previewVisible, previewImage, fileList, port } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        {
          port ?
            <div className="ant-upload-text">Mobile</div>
          :
          <div className="ant-upload-text">PC</div>
        }
      </div>
    );
    return(
      <div className="goodsCss">
        <h2>Goods message </h2>
        <Form className="addGoods_form" onSubmit={this.handleSubmit}>
          <Form.Item
            label="阿萨德是"
            className="form_item"
          >
            {getFieldDecorator('note', {
              rules: [{ required: true, message: 'Please input your note!' }],
            })(
              <div style={{ display: 'flex' }}>
                <Input onChange={this.onShopURL} placeholder="shopsLink" />
                <Button onClick={this.getNfo} style={{ marginLeft: '20px' }} type="primary">getGoods xinxi</Button>
              </div>
            )}
          </Form.Item>
          <Form.Item
            label="Gender"
          >
            {getFieldDecorator('gender', {
              rules: [{ required: true, message: 'Please select your gender!' }],
            })(
              <Select placeholder="shops" initialValue="lucy" style={{ width: 250 }} onChange={this.handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item
            label="睡懒觉了"
            className="form_item"
          >
            {getFieldDecorator('babyName', {
              rules: [{ required: true, message: 'Please input your babyName!' }],
            })(
              <Input placeholder="shopsLink" />
            )}
          </Form.Item>
          <Form.Item label="Baby name">
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
          {/* 单选框 */}
          <Form.Item label="Specifications" className="form_item" style={{ display: 'flex', alignItems: 'center' }}>
            <RadioGroup className="radio_child" onChange={this.radioBtn1} value={this.state.value1}>
              <Radio value={1}>多少个大概</Radio>
              <Radio value={2}>自定义
                <Input className="radio_input" placeholder="如：color" />
                <Input className="radio_input" placeholder="如：size" />
              </Radio>
            </RadioGroup>
          </Form.Item>
          {/* 单价，件数 */}
          <Form.Item label="Specifications" className="form_item">
            {getFieldDecorator('moneys', {
              rules: [{ required: true, message: 'Please input your babyName!' }],
            })(
              <div className="xaidanMoney">
                <p>
                  <Input className="xaidanMoney_input" placeholder="如：size" />
                  <span> money</span>
                </p>
                <p>
                  <span>的数据：</span>
                  <Input className="xaidanMoney_input" placeholder="如：size" />
                  <span> and </span>
                  <span className="xaidanMoney_span">（dg rg rg werfqwefdqwdwqd dfwaf）</span>
                </p>
              </div>
            )}
          </Form.Item>
          {/* expressage */}
          <Form.Item label="Specificatsdsions" className="form_item">
            {getFieldDecorator('moneys', {
              rules: [{ required: true, message: 'Please input your babyName!' }],
            })(
              <div className="xaidanMoney">
                <p>
                  <Input className="xaidanMoney_input" placeholder="如：size" />
                  <span className="xaidanMoney_span">（几多的价格的观点，大概的感觉文件柜欧文）</span>
                </p>
              </div>
            )}
          </Form.Item>
          {/* expressage 单选框 */}
          <Form.Item label="Specifications" className="form_item" style={{ display: 'flex', alignItems: 'center' }}>
            <RadioGroup className="radio_child" onChange={this.radioBtn2} value={this.state.value2}>
              <Radio value={1}>多少个大概</Radio>
              <Radio value={2}>
                <span>自定义</span>
                <span className="xaidanMoney_span">（几多的价格的观点，大概的感觉文件柜欧文）</span>
              </Radio>
            </RadioGroup>
          </Form.Item>
          {/* card 复选框 */}
          <Form.Item label="Specifications" className="form_item" style={{ display: 'flex', alignItems: 'center', height: '30px' }}>
            <Checkbox.Group style={{ width: '100%' }} onChange={this.checkboxBtn}>
              <Row style={{ paddingTop: '10px' }}>
                <Col span={6}><Checkbox value="A">jksdjgodd</Checkbox></Col>
                <Col span={6}><Checkbox value="B">
                  <span>自定义</span>
                  {/* <span className="xaidanMoney_span">（几多的价格的观点，大概的感觉文件柜欧文）</span> */}
                </Checkbox></Col>
                <span className="xaidanMoney_span">（几多的价格的观点，大概的感觉文件柜欧文）</span>
              </Row>
            </Checkbox.Group>
          </Form.Item>
          <p className="button_p">djiodjgsdoujopwejjfoiwejmlkjoiujio</p>
          {/* 提交按钮 */}
          <Form.Item className="submit_btn">
            <Button className="bottom_btns" type="danger" ghost>danger</Button>
            <Button className="bottom_btns" type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

const addGoodComponent = Form.create()(addGoodComponents);
export default addGoodComponent
