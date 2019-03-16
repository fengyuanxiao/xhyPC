import React, { Component } from 'react';
import { Tabs, Select, DatePicker, Form, Button} from 'antd';
// import { Link } from 'react-router-dom';

import TaskAdminComponent from './taskAdminComponents';

import './taskAdmin.css';
const TabPane = Tabs.TabPane;
const Option = Select.Option;
const { RangePicker } = DatePicker;

class TaskAdminss extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return(
      <div className="commonalitys shipment">
        {/* <h2>待处理的任务</h2>待付款的任务（7） 进行中的任务（1） 已完成的任务（0） 所有任务（9） 今日订单（0） */}
        <h2>TaskAdmins</h2>
        <hr></hr>
        <Tabs defaultActiveKey="1" onChange={this.callback} type="card">
          {/* 店铺越多 TabPane就越多 */}
          <TabPane tab="Task pending payment" key="1">
            {/* <div>
              三方：
              <Select defaultValue="lucy" style={{ width: 180 }} onChange={this.handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
              </Select>
              </div>
              <div>
              地方：
              <Select defaultValue="lucy" style={{ width: 260 }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
              </Select>
              </div>
              <div>
              核桃仁和：
              <Select defaultValue="lucy" style={{ width: 180 }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
              </Select>
              </div>
              <div>
              地方：
              <Select defaultValue="lucy" style={{ width: 120 }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
              </Select>
              </div>
              <div>
              核桃仁和：
              <Select defaultValue="lucy" style={{ width: 120 }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
              </Select>
              </div>
              <div>
              核桃仁和：
              <RangePicker
                showTime={{ format: 'HH:mm' }}
                format="YYYY-MM-DD HH:mm"
                placeholder={['开始时间', '结束时间']}
                onChange={this.onChange}
                onOk={this.onOk}
              />
              </div>
              <div>
              核桃仁和：
              <Select defaultValue="lucy" style={{ width: 120 }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
              </Select>
              </div>
              <div>
              核桃仁和：
              <Select defaultValue="lucy" style={{ width: 120 }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
              </Select>
            </div> */}
            <TaskAdminComponent />
          </TabPane>
          <TabPane tab="Task in progress" key="2">
            <TaskAdminComponent />
          </TabPane>
          <TabPane tab="Completed tasks" key="3">
            <TaskAdminComponent />
          </TabPane>
          <TabPane tab="All tasks" key="4">
            <TaskAdminComponent />
          </TabPane>
          <TabPane tab="Today the order" key="5">
            <TaskAdminComponent />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

const TaskAdmins = Form.create()(TaskAdminss);
export default TaskAdmins
