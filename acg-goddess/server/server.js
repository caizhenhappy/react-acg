// 连接数据库

const express = require('express');
const cookieParser = require('cookie-parser');
const md5 = require('blueimp-md5');
// 声明使用路由器中间件
require('./db');
const router = require('./routers');
const verify = require('./middleware/verify');
const { SERVER_CONFIG } = require('./config'); //配置
//用于创建超级用户
const Users = require('./models/users');

const app = express();

// 声明使用静态中间件，此时public中所有资源外面可以直接访问
app.use(express.static('public'));
// 声明使用解析post请求的中间件
app.use(express.urlencoded({extended: true}));
app.use(express.json({}));
// 声明使用解析cookie数据的中间件
app.use(cookieParser());

// 权限验证
app.use(verify);
// 应用路由器
app.use(router);

app.listen(SERVER_CONFIG.port, (err) => {
  if (err) {
    console.log('服务器启动失败', err);
  } else {
    console.log(`服务器启动成功, 请访问: http://localhost:${SERVER_CONFIG.port}`)
  }
});
// 初始化默认超级管理员用户: admin/admin
Users.findOne({username: 'admin'}).then(async (user) => {
  if(!user) {
    try {
      const user = await Users.create({username: 'admin', password: md5('admin'), isAdmin:true });   //这里isAdmin无法设置上
      console.log(user,`创建初始管理员用户成功~  用户名: admin 密码: admin`);
    } catch (e) {
      console.log('创建初始管理员用户失败~', e);
    }
  }
});