const express = require('express');
const md5 = require('blueimp-md5');
const Users = require('../models/users');
const jwt = require('jsonwebtoken');
const router = new express.Router();
const { PRIVATE_KEY } = require('../config');

// 添加用户
router.post('/api/user/add', async (req, res) => {
  // 读取请求参数数据
  const { username, password,imgUrl } = req.body;
  // 处理: 判断用户是否已经存在, 如果存在, 返回提示错误的信息, 如果不存在, 保存
  // 查询(根据username)
  try {
    let user = await Users.findOne({ username });
    console.log(user)
    if (user) {
      res.json({ status: 1, msg: '此用户已存在' });
      return;
    }
    user = await Users.create({ ...req.body, password: md5(password),imgUrl });
    res.json({
      status: 0,
      data: "注册成功"
    });
  } catch (error) {
    res.json({ status: 1, msg: '添加用户失败' });
  }

});

// 修改用户密码
router.post('/api/user/updatePWD', async (req, res) => {
  const user = req.body;

  try {
    await Users.findOneAndUpdate({ username: user.username }, {
      ...user,
      password: md5(user.password)
    });
    // 返回
    res.json({
      status: 0,
      data: {
        username: user.username,
      }
    })

  } catch (e) {
    res.json({ status: 1, msg: '更新用户密码失败' });
  }
});
//自动登陆
router.get('/api/auto_login',async (req, res) =>{
  // 获取请求头中的token
  const token=req.headers['authorization']
  // 如果请求头中没有token,直接返回token
  if(!token){
    return req.send({code:1,msg:'请先登录'})
  }
  // 解码token,如果失败或者过了有效期返回401
  const decoded=jwt.decode(token,PRIVATE_KEY)
  if(!decoded||decoded.exp<Date.now()/1000){
    res.status(401)
    return res.json({message:'token过期,请重新登录'})
  }
   // 根据解码出的用户id,查询得到对应的user,返回给客户端
   const userId=decoded.id
   Users.findOne({_id:userId})
    .then(users => {
      res.json({ status: 0, data: users })
    })
    .catch(error => {
      res.json({ status: 1, msg: '请重新登录' })
    })
})

// 获取所有用户列表
router.get('/api/user/get', (req, res) => {
  Users.find({ username: { '$ne': 'admin' } })
    .then(users => {
      res.json({ status: 0, data: users })
    })
    .catch(error => {
      res.json({ status: 1, msg: '获取用户列表失败' })
    })
});

module.exports = router;