// 引入ajax
import ajax from './ajax.js'
// 包含多个请求接口函数
export const reqLogin = (username,password)=>ajax({
  method: "POST",
  url:'/login',
  data:{
    username,
    password
  }
})

export const reRegister = ({username,password,imgUrl}) => ajax({
  method:"POST",
  url:'/user/add',
  data:{
    username,
    password,
    imgUrl
  }
})