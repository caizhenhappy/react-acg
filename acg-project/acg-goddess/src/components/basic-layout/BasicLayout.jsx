import React, { Component } from 'react';
// 引入logo图片
import logo from '../../img/logo.png'
// 引入样式
import './BasicLayout.css'
//beijing tyu pian 
import Background  from './ia_500000004.jpg'
// 引入antd
import { Layout, Breadcrumb } from 'antd';
import LeftNav from './LeftNav/LeftNav.jsx';
const { Header, Content, Footer, Sider } = Layout;



class BasictLayout extends Component {
  state = {
    collapsed: false,
  };
  //背景div
  main = {
    width:'100%',
    height: '100%',
    backgroundImage:`url(${Background})`,
    backgroundSize:'cover',
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render () {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} >
        <div className="basic-layout-logo">
            <img src={logo} alt="logo" />
          </div>
          <LeftNav />
       </Sider>
        <Layout >
          <Header style={{ padding: 23, }} className='header'>
            ACG 女神管理系统
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 16px' }}>
              <Breadcrumb.Item>女神~</Breadcrumb.Item>
            </Breadcrumb>
            <div style={this.main}>
              {
                this.props.children
              }
            </div>
          </Content>
          
        </Layout>
      </Layout>
    );
  }
}
export default BasictLayout;