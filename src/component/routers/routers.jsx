import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

// Login
import Login from '../../containers/login/login';                               //登录页面
import Register from '../../containers/register/register';                      //注册页面

// 个人中心
import Center_new from '../../containers/center_new/center_new';                //个人中心
  // 绑定店铺
  import Taobao from '../../containers/center_new/bind/taobao';                 //绑定taobao

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
        </div>
      </Router>
    )
  }
}

export default RoutersComponent
