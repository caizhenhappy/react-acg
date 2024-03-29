import React from 'react';
import ReactDOM from 'react-dom';

// 引入store
//import store from './redux/store.js'

// 引入react-redux
import {Provider} from 'react-redux'
// 引入App.jsx
import App from './App.jsx'
// 引入重置的样式文件
//import './assets/reset.css'

// 渲染组件
ReactDOM.render((
    <App/>
),document.getElementById('root'))

/* ReactDOM.render((
  <Provider store={store}>
    <App/>
  </Provider>
),document.getElementById('root')) */