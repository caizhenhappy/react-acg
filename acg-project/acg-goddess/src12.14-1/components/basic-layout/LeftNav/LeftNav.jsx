import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
const { SubMenu } = Menu;
class LeftNav extends Component {
  render() {
    return (
      <div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          {" "}
          {/* style={{ background: '#ffedef',}} */}
          <Menu.Item key="1">
            <Icon style={{color:'#6C7B95'}} type="user" />
            <span style={{color:'#6C7B95'}}>用户管理</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon style={{color:'#6C7B95'}} type="container" />
            <span style={{color:'#6C7B95'}}>文章管理</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon style={{color:'#6C7B95'}} type="message" />
            <span style={{color:'#6C7B95'}}>评论管理</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon style={{color:'#6C7B95'}} type="file-image" />
            <span style={{color:'#6C7B95'}}>轮播图管理</span>
          </Menu.Item>
          <Menu.Item key="5">
            <Icon style={{color:'#6C7B95'}} type="smile" />
            <span style={{color:'#6C7B95'}}>其他小东西管理</span>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default LeftNav;
