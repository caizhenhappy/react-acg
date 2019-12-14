const express = require('express');
const md5 = require('blueimp-md5');
const Users = require('../models/users');

const router = new express.Router();

// 添加用户
router.post('/api/user/add', async (req, res) => {
  // 读取请求参数数据
  console.log(req.body)
  const { username, password,imgUrl } = req.body;
  // 处理: 判断用户是否已经存在, 如果存在, 返回提示错误的信息, 如果不存在, 保存
  // 查询(根据username)
  const isAdmin = false;
  if(!imgUrl) req.body.imgUrl = 'avatar.jpg';
  try {
    let user = await Users.findOne({ username });
    if (user) {
      res.json({ status: 1, msg: '此用户已存在' });
      return;
    }
    user = await Users.create({ ...req.body, password: md5(password), isAdmin });

    res.json({
      status: 0,
      data: {
        username, isAdmin, createTime: user.createTime, _id: user._id, imgUrl:req.body.imgUrl
      }
    });
  } catch (error) {

    res.json({ status: 1, msg: '添加用户失败' });
  }

});

// 更新用户
router.post('/api/user/update', async (req, res) => {
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