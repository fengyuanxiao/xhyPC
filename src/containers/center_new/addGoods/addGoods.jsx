import React, { Component } from 'react';
import { Breadcrumb, Icon, Select, Form, Button, Input, Upload, Modal, Radio, Checkbox, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

import PageHeader from '../../../component/page_header/page_header';            //页面头部
import Menus from '../../../component/menus/menus';                             //左边导航栏
import AddGoodComponent from './addGoodComponent';

import './addGoods.css';                                                        //引入的样式

const Option = Select.Option;                                                   //选择框
const RadioGroup = Radio.Group;                                                 //单选框

class AddGoodss extends Component {
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
      <div>
        {/* 头部组件 */}
        <PageHeader />
        <div className="rawp">
          <div className="contents">
            <div className="contents_left">
              {/* 左侧边栏 */}
              <Menus history ={this.props.history} />
            </div>
            <div className="contents_right">
              {/* 内容 */}
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
                    <Link to="/myGoods">
                      <Icon type="setting" />
                      <span>My Goods</span>
                    </Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    Add Goods
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
              {/* 发布 goods */}
              <AddGoodComponent />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const AddGoods = Form.create()(AddGoodss);
export default AddGoods
