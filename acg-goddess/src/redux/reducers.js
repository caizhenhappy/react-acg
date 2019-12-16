// 包含了多个的reducers,更新/修改状态数据的函数
// 引入action的type
import { SAVE_USER, DEL_USER } from './action-types.js'
// 引入redux
import { combineReducers } from "redux"
// 引入storage.js 文件
import { setItem, getItem, removeItem } from "../utils/storage.js"
const initUser = {
  user: getItem('user') || {},
  token: getItem("token") || ''
}
function users (prevState = initUser, action) {
  // 判断type
  switch (action.type) {
    case SAVE_USER:
      // 保存用户信息到redux中的同时也要保存到localStorage
      setItem('user', action.data.user)
      // 保存token串到redux中的同时也要保存到localStorage
      setItem('token', action.data.token)
      return action.data
    case DEL_USER:
      removeItem('user')
      removeItem('token')
      return initUser
    default:
      return prevState
  }
}

export default combineReducers({
  users
})