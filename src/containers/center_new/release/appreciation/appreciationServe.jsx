import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, DatePicker, message } from 'antd';
import locale from 'antd/lib/date-picker/locale/zh_CN';

import './serve.css';

let nums = [1];                     //app关键字组数

class AppreciationServes extends Component {
  constructor() {
    super();
    this.state = {
      mode: 'time',
      nums: [1],
    }
  }

  // 设置task上线时间
  onChangeTask = (e) => {
    if ( e.target.checked ) {
      this.setState({
        dateShow: true,
      })
    } else {
      this.setState({
        dateShow: false,
      })
    }
  }
  // 选择定时时间
  handleOpenChange = (open) => {
    if (open) {
      this.setState({ mode: 'time' });
    }
  }
  handlePanelChange = (value, mode) => {
    console.log(value);
    console.log(mode);
    this.setState({ mode });
  }
  handleOk = (e) => {
    console.log(e);
  }
  handleChange = (e) => {
    console.log(e);
  }

  // 添加投放数量
  addPlanBtn = () => {
    nums.push(1)
    this.setState({
      nums: nums,
    })
  }
  // 删除投放数量
  deleteBtn = (index) => {
    if ( index === 0 ) {                        //索引为0的不能删除
      message.warning('关键词1不能删除！');
    } else {                                    //删除多余的值
      let as = this.state.nums;
      as.splice(index,1)
      this.setState({
        nums: as
      })
    }
  }

  // 提交表单
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render(){
    const { dateShow, nums } = this.state;
    const { getFieldDecorator } = this.props.form;
    return(
      <div>
        <h2>1.设置计划</h2>
        <div className="first_header">
          {/* 设置task上线时间 */}
          <Checkbox onChange={this.onChangeTask}>设置task上线日期（<span className="colors">2</span>符点）</Checkbox>
          <table className="first_table">
            <tbody>
              <tr>
                <td className="bgslash">
                  <p className={dateShow? "p_heigth" : ''}>上线time</p>
                  <p className={dateShow? "p_heigth" : ''}>keyWord</p>
                </td>
                <td>keyWord1</td>
                <td>keyWord2</td>
              </tr>
              {
                nums.map((item, index) => {
                  return(
                    <tr key={index}>
                      <td style={{ position: 'relative' }}>
                        <span>第一天（05月07日）</span><Icon onClick={()=>this.deleteBtn(index)} className="tdI" type="close" />
                        {/* dateShow为true 选择定时时间 */}
                        {
                          dateShow ?
                            <DatePicker
                              mode={this.state.mode}
                              showTime
                              onOpenChange={this.handleOpenChange}
                              onPanelChange={this.handlePanelChange}
                              onOk={this.handleOk}
                              onChange={this.handleChange}
                              locale={locale}
                            />
                          :
                          ''
                        }
                      </td>
                      <td>5</td>
                      <td><span className="colors">2</span>鸡</td>
                    </tr>
                  )
                })
              }
              <tr className="addplan">
                <td>
                  <div onClick={this.addPlanBtn}>
                    <Icon type="plus" />
                    <span>添加</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const AppreciationServe = Form.create()(AppreciationServes);
export default AppreciationServe
