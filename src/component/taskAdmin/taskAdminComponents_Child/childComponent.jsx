import React, { Component } from 'react';
import { Tree, Pagination } from 'antd';
import { Link } from 'react-router-dom';

import './childComponents.css';

const { TreeNode } = Tree;    //树形控件

class ChildComponent extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  // onSelect = (selectedKeys, info) => {
  //   console.log('selected', selectedKeys, info);
  // }

  onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  }

  // 分页
  paginaTions = (e) => {
    console.log(e);
  }
  aaa = (e) => {
    console.log(e);
  }

  render() {
    return(
      <div>
        <Tree className="div_box"
          checkable
          defaultExpandAll={true}
          defaultExpandedKeys={[]}
          defaultSelectedKeys={[]}
          defaultCheckedKeys={[]}
          // onSelect={this.onSelect}
          onCheck={this.onCheck}
        >
          <TreeNode style={{ width: '100%' }} title="全选" key="0">
            <TreeNode className="div_box_child" title={
              <div>
                <div className="div_box_child_top">
                  <div>
                    <img src={require("../../../imgs/taobao.png")} alt="平台店铺图"/>
                    <span>就看到是防具苹果</span>
                  </div>
                  <div className="div_box_child_top_right">
                    <span>就看到是防具苹果 [<Link to="/">查看详情</Link>]</span>
                    <span>taskAdmin：2019-03-14 12:00</span>
                    <span>就看到是sdsds：<span style={{ color: '#e96262' }}>士大夫</span></span>
                  </div>
                </div>
                {/* 《靠近一点点》《小尾巴》《带你去旅行》 */}
                <div className="div_box_child_buttom">
                  <div>
                    <img src={require("../../../imgs/login-bg.png")} alt="sp主图"/>
                    <p>接口了打暑假工打暑假工打发时间个大佛赶集网二极管我就</p>
                  </div>
                  <div>State：non-payment underway（<span>0</span>） To send the goods（<span>0</span>） To be refund（<span>0</span>） Don't answer sheet（<span>0</span>） ok（<span>0</span>）</div>
                </div>
              </div>
            } key="1">
            </TreeNode>
            <TreeNode className="div_box_child" title={
              <div>
                <div className="div_box_child_top">
                  <div>
                    <img src={require("../../../imgs/taobao.png")} alt="平台店铺图"/>
                    <span>就看到是防具苹果</span>
                  </div>
                  <div className="div_box_child_top_right">
                    <span>就看到是防具苹果 [<Link to="/">查看详情</Link>]</span>
                    <span>taskAdmin：2019-03-14 12:00</span>
                    <span>就看到是sdsds：<span style={{ color: '#e96262' }}>士大夫</span></span>
                  </div>
                </div>
                {/* 《靠近一点点》《小尾巴》《带你去旅行》 */}
                <div className="div_box_child_buttom">
                  <div>
                    <img src={require("../../../imgs/login-bg.png")} alt="sp主图"/>
                    <p>接口了打暑假工打暑假工打发时间个大佛赶集网二极管我就</p>
                  </div>
                  <div>State：non-payment underway（<span>0</span>） To send the goods（<span>0</span>） To be refund（<span>0</span>） Don't answer sheet（<span>0</span>） ok（<span>0</span>）</div>
                </div>
              </div>
            } key="2">
            </TreeNode>
          </TreeNode>
        </Tree>
        {/* 分页功能 */}
        <Pagination className="Fpage" onChange={this.paginaTions} onShowSizeChange={this.aaa} defaultPageSize={5} pageSize={5} defaultCurrent={1} total={50} />
      </div>
    )
  }
}

export default ChildComponent
