/*
用来定义路由的路由器模块
 */
const express = require('express');
const md5 = require('blueimp-md5');
const jwt = require('jsonwebtoken');
const { PRIVATE_KEY } = require('../config');
const Users = require('../models/users');
const userRouter = require('./user-router');
// 得到路由器对象
const router = express.Router();
// 指定需要过滤的属性
// 登陆
router.post('/api/login', async (req, res) => {

  const { username, password } = req.body;

  const user = await Users.findOne({username, password: md5(password)}, {password: 0, __v: 0});
  console.log(user)
  if (!user) {
    return res.json({
      status: 1,
      msg: '用户名或密码不正确!'
    })
  }
  // 返回登陆成功信息(包含user)
  const userToken = {
    id: user._id
  };

  //签发token 指定过期时间 7 天
  const token = jwt.sign(userToken, PRIVATE_KEY, { expiresIn: '7 days' });

  res.json({
    status: 0,
    data: {
      token,
      user: {
        username: user.username,
        createTime: user.createTime,
        isAdmin:user.isAdmin,
        imgUrl:user.imgUrl
      }
    }
  })
});

// 其他路由
router.use(userRouter);

module.exports = router;