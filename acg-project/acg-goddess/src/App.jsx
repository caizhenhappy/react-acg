// 创建
import React, { Component } from 'react';
// 引入 css

// 引入Home 组件
import Home from './components/Home/Home.jsx'
// 引入 BasicLayout组件
import BasicLayout from './components/basic-layout/BasicLayout.jsx'
//引入Article 组件
import Article from './components/Article/Article.jsx'


class App extends Component {
  render() {
    return (
      <div>
        {/* <Home /> */}
        <BasicLayout />
      </div>
    );
  }
}

export default App;