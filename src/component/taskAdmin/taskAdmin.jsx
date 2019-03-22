import React, { Component } from 'react';
import { Tabs, Form} from 'antd';

import TaskAdminComponent from './taskAdminComponents';
import TaskAdminComponent2 from './taskAdminComponents2';
import TaskAdminComponent3 from './taskAdminComponents3';
import TaskAdminComponent4 from './TaskAdminComponents4';
import TaskAdminComponent5 from './TaskAdminComponents5';

import './taskAdmin.css';
const TabPane = Tabs.TabPane;

class TaskAdminss extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return(
      <div className="shipment" style={{ borderRadius: '5px' }}>
        {/* <h2>待处理的任务</h2>待付款的任务（7） 进行中的任务（1） 已完成的任务（0） 所有任务（9） 今日订单（0） */}
        <h2>TaskAdmins</h2>
        <hr></hr>
        <Tabs defaultActiveKey="1" onChange={this.callback} type="card">
          {/* 店铺越多 TabPane就越多 */}
          {/* 待付款的任务 */}
          <TabPane tab="Task pending payment" key="1">
            <TaskAdminComponent />
          </TabPane>
          {/* 进行中的任务 */}
          <TabPane tab="Task in progress" key="2">
            <TaskAdminComponent2 />
          </TabPane>
          {/* 已完成的任务 */}
          <TabPane tab="Completed tasks" key="3">
            <TaskAdminComponent3 />
          </TabPane>
          {/* 所有任务 */}
          <TabPane tab="All tasks" key="4">
            <TaskAdminComponent4 />
          </TabPane>
          {/* 今日订单 */}
          <TabPane tab="Today the order" key="5">
            <TaskAdminComponent5 />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

const TaskAdmins = Form.create()(TaskAdminss);
export default TaskAdmins
