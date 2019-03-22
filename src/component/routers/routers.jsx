import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

// Login
import Login from '../../containers/login/login';                               //登录页面
import Register from '../../containers/register/register';                      //注册页面

// 个人中心
import Center_new from '../../containers/center_new/center_new';                //个人中心
  // bindshops
  import Taobao from '../../containers/center_new/bind/taobao';                 //bindtaobao
// MyGoods
import MyGoods from '../../containers/center_new/myGoods/myGoods';              //myGoods
// addGoods
import AddGoods from '../../containers/center_new/addGoods/addGoods';           //addGoods

import CompletedTasks from '../../containers/center_new/taskAdmins/CompletedTasks/completedTasks';      //已完成的任务

class RoutersComponent extends Component {
  render() {
    return(
      <Router>
        <div>
          {/* login */}
          <Route exact path="/" component={Login} />
          {/* 注册页面 */}
          <Route path='/register' component={Register} />
          {/* 个人中心 */}
          <Route path='/center_new' component={Center_new} />
          {/* 绑定taobao */}
          <Route path="/bind/taobao" component={Taobao} />
          {/* 我的商品 */}
          <Route path="/myGoods" component={MyGoods} />
          {/* addGoods */}
          <Route path="/addGoods" component={AddGoods} />

          {/* 已完成的任务 */}
          <Route path="/completedTasks" component={CompletedTasks} />
        </div>
      </Router>
    )
  }
}

export default RoutersComponent
