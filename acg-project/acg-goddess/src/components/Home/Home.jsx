import React, { Component } from 'react';
// 引入User页面
import User from '../User/User.jsx'
//import Comment from '../Comment/Comment.jsx'
import './Home.css'
// 引入antd
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


class Home extends Component {
  state = {
    collapsed: false,
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>用户管理</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>文章管理</span>
            </Menu.Item>
            <SubMenu
              key="3"
              title={
                <span>
                  <Icon type="user" />
                  <span>评论管理</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="8"
              title={
                <span>
                  <Icon type="team" />
                  <span>轮播图管理</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>其他小东西管理</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 23, }}  className='header'>
            ACG 女神管理系统
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <User />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}


export default Home;