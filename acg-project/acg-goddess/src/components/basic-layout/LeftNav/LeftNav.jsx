import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
class LeftNav extends Component {
  render() {
    return (
        <div >
           <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" style={{ background: '#ffedef',}}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>用户管理</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="container" />
              <span>文章管理</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="message" />
              <span>评论管理</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="file-image" />
              <span>轮播图管理</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="smile" />
              <span>其他小东西管理</span>
            </Menu.Item>
          </Menu>
      </div>
    );
  }
}

export default LeftNav;