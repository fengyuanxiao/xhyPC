import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

// Login
import Login from '../../containers/login/login';                               //登录页面
import Register from '../../containers/register/register';                      //注册页面

class RoutersComponent extends Component {
  render() {
    return(
      <Router>
        <div>
          {/* login */}
          <Route exact path="/" component={Login} />
          {/* 注册页面 */}
          <Route path='/register' component={Register} />
        </div>
      </Router>
    )
  }
}

export default RoutersComponent
