import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './page_header.css';

class PageHeader extends Component {

  render() {
    return(
      <div className="box">
        <div className="child">
          <div className="child_left">
            <span>18779144915</span>
            <Link to="/">退出</Link>
          </div>
          <div className="child_right">
            <Link style={{ borderRight: '1px solid #c0bdbd' }} to="/">zhognzhi</Link>
            <Link to="/">延长技术服务</Link>
            <span>押金：100元</span>
            <span>什么点：0点</span>
          </div>
        </div>
        <div className="child2">
          <div className="child2_left">
            <Link to="/center_new"><img src={require("../../imgs/logo.png")} alt="logo"/></Link>
            {/* <span></span>
              <span></span>
            <span></span> */}
          </div>
          <div className="child2_right">
            <Link to="/center_new">Center</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default PageHeader
