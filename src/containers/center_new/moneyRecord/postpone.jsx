import React, { Component } from 'react';
import { Breadcrumb, Icon, Button, Radio } from 'antd';
import { Link } from 'react-router-dom';

import PageHeader from '../../../component/page_header/page_header';                             //头部

const RadioGroup = Radio.Group;                                   //单选框
const RadioButton = Radio.Button;

class Postpone extends Component {
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
          <div className="contents UpDeposit">
            <div style={{ padding: '10px 0' }}>
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
                  Invite Friend
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="UpDeposit_top">
              <div className="UpDeposit_header">
                <h2>Recharge</h2>
                <span>huihlkjpkpo;klm;kgyug<span>11</span>gegergrghrthtr</span>
              </div>
              <hr className="hrs"></hr>
              <div>
                <span>1.dsjiodij</span>
                <span>（jdsjfio）<span>600/da</span></span>
                <span>sasdfdsghthtrjhtyjtytjerte</span>
              </div>
              <RadioGroup onChange={this.FudianBtn} className="marginR-L langFuwu" defaultValue="1179" size="large">
                <div>
                  <RadioButton value="1179">
                    Hangzhou
                  </RadioButton>
                  <div>
                    <p><span>Hangzhou</span>da</p>
                    <p>（dfgsrgdfhdfhdfhdfh）</p>
                  </div>
                </div>
                <div>
                  <RadioButton value="2721">
                    Hangzhou
                  </RadioButton>
                  <div>
                    <p><span>Hangzhou</span>da</p>
                    <p>（dfgsrgdfhdfhdfhdfh）</p>
                  </div>
                </div>
                <div>
                  <RadioButton value="4124">
                    Hangzhou
                  </RadioButton>
                  <div>
                    <p><span>Hangzhou</span>da</p>
                    <p>（dfgsrgdfhdfhdfhdfh）</p>
                  </div>
                </div>
                <div>
                  <RadioButton value="8986">
                    Hangzhou
                  </RadioButton>
                  <div>
                    <p><span>Hangzhou</span>da</p>
                    <p>（dfgsrgdfhdfhdfhdfh）</p>
                  </div>
                </div>
                <div>
                  <RadioButton value="14391">
                    Hangzhou
                  </RadioButton>
                  <div>
                    <p><span>Hangzhou</span>da</p>
                    <p>（dfgsrgdfhdfhdfhdfh）</p>
                  </div>
                </div>
              </RadioGroup>
              <div className="dinggou">
                <p>fsdgdfghdfhefhdf</p><span>3dsf</span>,<p>dsfd:</p><span>sdfsddfsd</span>
              </div>
              <div className="dinggou" style={{ backgroundColor: '#ffffff', marginTop:'20px' }}>
                <p>2.sdgjskdjgoigjjl</p><span>dsfdsjgiosdjoj</span>
              </div>
              <div className="dinggou">
                <Radio>Radio</Radio>
              </div>
              <div className="tjBtn">
                <p>12316456</p>
                <Button type="primary">jkjdpop</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Postpone
