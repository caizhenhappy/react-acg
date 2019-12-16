// 包含了多个同步级异步的action的creator
// 包含了多个产生action对象的工厂函数
// 引入action的type
import { SAVE_USER, DEL_USER } from './action-types.js'
import { } from '../api'

export const saveUser = (value) => ({ type: SAVE_USER, data: value })
export const delUser = (value) => ({type: DEL_USER, data: value})