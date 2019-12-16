import ajax from './ajax.js'
// //设置本地地址,,mock请求时不要添加
const BASE = 'http://localhost:3000/api'

// import axios from 'axios'
//获取所有信息 data === 用户 文章 评论
export const reqGetDate = () => ajax({
  method: 'GET',
  url: '/data',
})
// export const reqGetDate = axios('/data')
//用户操作 ========
//添加用户
//userName : 用户名,
//isAdmin : 是不是管理员
//password  : 用户密码
export const reqAddUser = ({userName, isAdmin, password}) => ajax({
  method: 'POST',
  url: '/addUser',
  data: {
    userName,
    isAdmin,
    password
  }
})
//删除用户
//id : 用户id
export const reqRemoveUser = (id) => ajax({
  method: 'POST',
  url: '/removeUser',
  data: {
    id
  }
})
//用户详情
//id : 用户id
export const reqDetailUser = (id) => ajax({
  method: 'POST',
  url: '/detailUser',
  data: {
    id
  }
})
//修改用户
//id : 用户id
export const reqUpdateUser = (id,priceurl,username) => ajax({
  method: 'POST',
  url: '/updateUser',
  data: {
    id,
    priceurl,
    username
  }
})
//文章操作=======
//添加文章
// title: 文章标题
// author: 文章作者
// createTime: 创建时间
// mian: 文章内容
export const reqAddArt = ({title, author, createTime, mian}) => ajax({
  method: 'POST',
  url: '/addArt',
  data: {
    title,
    author,
    createTime,
    mian
  }
})
//删除文章
//id 文章ID
export const reqRemoveArt = (id) => ajax({
  method: 'POST',
  url: '/removeArt',
  data: {
    id
  }
})
//评论操作 ======
//删除评论
//id 评论id
export const reqRemoveCom = (id) => ajax({
  method: 'POST',
  url: '/removeCom',
  data: {
    id
  }
})