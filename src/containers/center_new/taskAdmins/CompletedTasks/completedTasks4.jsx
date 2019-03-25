import React, { Component } from 'react';

// import TaskAdminComponents from '../../../../component/taskAdmin/taskAdminComponents';              //daifukuanderenwu
import TaskAdmins from '../../../../component/taskAdmin/taskAdmin';                                 //任务管理组件
import PageHeader from '../../../../component/page_header/page_header';                             //头部
import Menus from '../../../../component/menus/menus';                                              //左边导航栏

class CompletedTasks4 extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return(
        <div>
          {/* 头部组件 */}
          <PageHeader />
          <div className="rawp">
            <div className="contents">
              <div className="contents_left">
                <Menus history ={this.props.history} />
              </div>
              <div className="contents_right">
                {/* 子页面 */}
                <TaskAdmins />
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default CompletedTasks4
