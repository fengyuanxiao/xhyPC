import React, { Component } from 'react';

import PageHeader from '../../component/page_header/page_header';
import Menus from '../../component/menus/menus';                            //左边导航栏
import MyCenter from './myCenter/myCenter';                                 //右侧内容栏
import './center_new.css'

class Center_new extends Component {
  constructor() {
    super();
    this.state = {}
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
              <MyCenter />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Center_new
