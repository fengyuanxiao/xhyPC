import React, { Component } from 'react';
import { Layout, Menu, Icon, Badge } from 'antd';
import { Link } from 'react-router-dom';

import MyCenter from '../../containers/center_new/myCenter/myCenter';           //个人中心页
import MyGoods from '../../containers/center_new/myGoods/myGoods';              //我的shagnpingye
import '../page_header/page_header.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header, Content, Footer, Sider } = Layout;

class Menus extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleClick = (e) => {
    let keydata = e.key;
    // if ( keydata === 2 ) {
    //
    // } else {
    //
    // }
    this.setState({
      keydata
    })
    console.log(keydata);
    // localStorage.setItem("key", e.key);
    // console.log(localStorage.getItem("key"));
  }

  render() {
    const { keydata } = this.state;
    return(
      <Menu
        onClick={this.handleClick}
        style={{ width: 256, borderRadius: 5 }}
        defaultOpenKeys={['sub1','sub2','sub4']}
        mode="inline"
      >
        <SubMenu key="sub1" title={<span><Icon type="shop" /><span>ShopAdmin</span></span>}>
          <MenuItemGroup key="g1" title="Is binding">
            <Menu.Item key="1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><Link to="/bind/taobao">taobao</Link><Badge count={1} style={{ backgroundColor: '#e96262' }} /></Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup key="g2" title="Go Shop Bind">
            <Menu.Item key="3"><Link style={{ color: '#1890ff' }} to="/">+ BindShop</Link></Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="shopping" /><span>MerchandiseAdmin</span></span>}>
          <Menu.Item key="5"><Link to="/myGoods">My Merchandise</Link></Menu.Item>
          {/* <Menu.Item key="5">My Merchandise</Menu.Item> */}
          <Menu.Item key="6">New Merchandise</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="profile" /><span>TaskAdmin</span></span>}>
          <Menu.Item key="9">TasksAdmin</Menu.Item>
          <Menu.Item key="10">Completed tasks</Menu.Item>
          <Menu.Item key="11">Task pending payment</Menu.Item>
          <Menu.Item key="12">Tasks to be processed</Menu.Item>
          <Menu.Item key="13">Task management </Menu.Item>
          <Menu.Item key="14">Publish previous tasks</Menu.Item>
        </SubMenu>
      </Menu>
      // <Layout>
      //   <Sider style={{ marginRight: '20px', backgroundColor: '#fff' }}
      //     breakpoint="lg"
      //     collapsedWidth="0"
      //     onBreakpoint={(broken) => { console.log(broken); }}
      //     onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
      //   >
      //     <Menu onClick={ this.handleClick } className="navs" style={{ backgroundColor: '#fff' }} theme="dark" mode="inline" defaultSelectedKeys={['4']}>
      //       <Menu.Item key="1">
      //         <Icon type="user" />
      //         <span className="nav-text">nav 1</span>
      //       </Menu.Item>
      //       <Menu.Item key="2">
      //         <Icon type="video-camera" />
      //         <span className="nav-text">nav 2</span>
      //       </Menu.Item>
      //       <Menu.Item key="3">
      //         <Icon type="upload" />
      //         <span className="nav-text">nav 3</span>
      //       </Menu.Item>
      //       <Menu.Item key="4">
      //         <Icon type="user" />
      //         <span className="nav-text">nav 4</span>
      //       </Menu.Item>
      //     </Menu>
      //   </Sider>
      //   <Layout>
      //     <Content>
      //       {
      //         keydata === 2 ? <MyGoods /> : <MyCenter />
      //       }
      //       {/* <MyCenter /> */}
      //     </Content>
      //     <Footer style={{ textAlign: 'center' }}>
      //       Ant Design ©2018 Created by Ant UED
      //     </Footer>
      //   </Layout>
      // </Layout>
    )
  }
}

export default Menus
