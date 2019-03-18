import React, { Component } from 'react';
import { Tabs, Select, DatePicker, Form, Button} from 'antd';

import './taskAdmin.css';
const TabPane = Tabs.TabPane;
const Option = Select.Option;
const { RangePicker } = DatePicker;

class TaskAdminComponents4 extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  onChange = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }
  // 日期时间选择
  onOk = (value) => {
    console.log('onOk: ', value);
  }

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
    return(
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('platform', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <div>
              三方：
              <Select defaultValue="platform" style={{ width: 180 }} onChange={this.handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
              </Select>
            </div>
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('shops', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <div>
              地方：
              <Select defaultValue="shops" style={{ width: 260 }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
              </Select>
            </div>
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('taskType', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <div>
              三是的方：
              <Select defaultValue="全部" style={{ width: 180 }} onChange={this.handleChange}>
                <Option value="jack">全部</Option>
                <Option value="lucy">Lucy</Option>
              </Select>
            </div>
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('terminal', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <div>
              地方：
              <Select defaultValue="terminal" style={{ width: 120 }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
              </Select>
            </div>
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('taskState', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <div>
              地方瑟瑟：
              <Select defaultValue="taskState" style={{ width: 120 }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
              </Select>
            </div>
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('times', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <div style={{ marginRight: '0' }}>
              核桃仁和是的：
              <RangePicker
                showTime={{ format: 'HH:mm' }}
                format="YYYY-MM-DD HH:mm"
                placeholder={['开始时间', '结束时间']}
                onChange={this.onChange}
                onOk={this.onOk}
              />
            </div>
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('advancedSearch', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <div>
              地方瑟瑟：
              <Select defaultValue="advancedSearch" style={{ width: 180 }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
              </Select>
            </div>
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('all', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <div>
              地方瑟瑟：
              <Select defaultValue="all" style={{ width: 180 }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
              </Select>
            </div>
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            搜索
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

const TaskAdminComponent4 = Form.create()(TaskAdminComponents4);
export default TaskAdminComponent4
