import React, { Component } from 'react';
import { Menu, Icon, Badge } from 'antd';
import { Link } from 'react-router-dom';

import '../page_header/page_header.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Menus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: '',                                           //Menu当前选中的菜单项 key 数组
    }
  }

  componentWillMount() {
    // 当前选中的菜单项 key 数组
    this.setState({
      selectedKeys: localStorage.getItem("key")
    })
  }

  handleClick = (e) => {
    // console.log(e);
    localStorage.setItem("key", e.key);                           //储存menu 当前选中的key
  }

  render() {
    const { selectedKeys } = this.state;
    return(
      <Menu
        onClick={this.handleClick}
        style={{ width: 256, borderRadius: 5 }}
        defaultOpenKeys={['sub1','sub2','sub4','sub5','sub6','sub7']}
        selectedKeys={[selectedKeys]}
        mode="inline"
      >
        <SubMenu key="sub1" title={<span><Icon type="shop" /><span>ShopAdmin</span></span>}>
          <MenuItemGroup key="g1" title="Is binding">
            <Menu.Item key="6" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><Link to="/bind/taobao" target="_blank">taobao</Link><Badge count={1} style={{ backgroundColor: '#e96262' }} /></Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup key="g2" title="Go Shop Bind">
            <Menu.Item key="7"><Link style={{ color: '#1890ff' }} to="/bind/bindShops" target="_blank">+ BindShop</Link></Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="shopping" /><span>MerchandiseAdmin</span></span>}>
          <Menu.Item key="8"><Link to="/myGoods">My Merchandise</Link></Menu.Item>
          <Menu.Item key="9"><Link to="/addGoods">New Merchandise</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="profile" /><span>TaskAdmin</span></span>}>
          <Menu.Item key="1"><Link to="/completedTasks">Completed tasks</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/completedTasks2">Outstanding task</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/completedTasks3">Task in progress</Link></Menu.Item>
          <Menu.Item key="4"><Link to="/completedTasks4">Task management</Link></Menu.Item>
          <Menu.Item key="5"><Link to="/publishTasks">Publish tasks with one click</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="sub5" title={<span><Icon type="red-envelope" /><span>Invite Friends</span></span>}>
          <Menu.Item key="10"><Link to="/inviteFriend">Invite friends</Link></Menu.Item>
          <Menu.Item key="11"><Link to="/inviteFriendR">Invite friends record</Link></Menu.Item>
          <Menu.Item key="12"><Link to="/questRewards">Quest Rewards</Link></Menu.Item>
          <Menu.Item key="13"><Link to="/lapsedReward">Lapsed reward</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="sub6" title={<span><Icon type="money-collect" /><span>Money record</span></span>}>
          <Menu.Item key="14"><Link to="/Top-upDeposit" target="_blank">Top-up Deposit</Link></Menu.Item>
          <Menu.Item key="15"><Link to="/postpone">Postpone</Link></Menu.Item>
          <Menu.Item key="16"><Link to="/yajinRecord">YajinRecord</Link></Menu.Item>
          <Menu.Item key="17"><Link to="/recharge">Recharge</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="sub7" title={<span><Icon type="user" /><span>Account information </span></span>}>
          <Menu.Item key="18"><Link to="/blacklist">Blacklist</Link></Menu.Item>
          <Menu.Item key="19"><Link to="/basicXinxi">BasicXinxi</Link></Menu.Item>
          <Menu.Item key="20"><Link to="/yajinRecord">YajinRecord</Link></Menu.Item>
        </SubMenu>
      </Menu>
    )
  }
}

export default Menus
