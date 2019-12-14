// 引入路由组件
// 用户管理
import User from '../components/User/User.jsx'

// 文章管理
import Article from '../components/Article/Article.jsx'
// 增加文章管理
import AddArticle from '../components/Article/AddArticle/AddArticle.jsx'
// 评论管理
import  Discuss from '../components/Discuss/Discuss'
// 轮播图的
import Banner from '../components/Banner/banner.jsx'
//引入首页
import Home from '../components/Home/home.js'


export default[
  {
    exact:true,
    path:'/home',
    component:Home
  },
  {
    exact:true,
    path:'/user',
    component:User
  },
  {
    exact:true,
    path:'/article',
    component:Article
  },
  {
    exact:true,
    path:'/article/addArticle',
    component:AddArticle
  },
  {
    exact:true,
    path:'/discuss',
    component:Discuss
  },
  {
    exact:true,
    path:'/banner',
    component:Banner
  }
]