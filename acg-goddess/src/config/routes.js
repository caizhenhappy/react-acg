// 引入两个路由组件
import Login from '../components/Login/Login.jsx'
import Register from "../components/Register/Register.jsx"
import Admin from "../components/Admin/Admin.jsx"
export default[
  {
    exact:true,
    path: '/login',
    component: Login
},
{
  exact:true,
  path: '/register',
  component: Register
},
{
  exact:true,
  path:'/',
  component:Admin

}
]