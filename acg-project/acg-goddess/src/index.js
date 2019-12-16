// 引入React
import React from 'react'
// 引入ReactDOM
import ReactDOM from 'react-dom'
// 引入App 组件
import App from './App.jsx'
//引入store
import store from "./redux/store.js";
//引入react-redux
import {Provider} from 'react-redux'
// 引入样式重置的文件
import './assets/css/reset.css'
//引入mock
import './mock/mock-server.js'
//引入store
ReactDOM.render((
  <div>
    <Provider store={store}>
      <App/>
    </Provider>
  </div>
),document.getElementById('root'))
// 渲染组件
//ReactDOM.render(<App/>,document.getElementById('root'))

