// 引入React
import React from 'react'
// 引入ReactDOM
import ReactDOM from "react-dom"
// 引入app.jsx
import App from './App.jsx'

import store from './redux/store'
// 引入重置的样式文件
import './assets/css/reset.css'
import {Provider} from 'react-redux'
// 渲染组件
ReactDOM.render(
 ( <Provider store={store}>
      <App />
  </Provider>),document.getElementById('root'))