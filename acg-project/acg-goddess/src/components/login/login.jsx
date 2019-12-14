import React, { Component } from 'react';
// 引入样式文件
import "./login.css"
// 引入antd
import { Form, Icon, Input, Button } from "antd"
const Item = Form.Item
// 装饰器的使用
@Form.create()

class Login extends Component {
  handleSubmit = e => {
    // 阻止默认事件
    e.preventDefault();
 
  }
    // 做表单的验证
    validator = (rule, value, callback) => {
      // console.log(rule)
       // 密码验证:规则和用户名验证规则是一样的(必须有内容,大于3位,小于12位,有数字/字母/下划线)
       if (!value) {
         // 用来做提示的
         callback('必须输入密码')
       } else if (value.length < 4) {
         callback('必须大于3位')
       } else if (value.length >= 12) {
         callback('必须小于12位')
       } else if (!/^[0-9a-zA-Z]+$/.test(value)) {
         callback('只能输入数字、字母、下划线')
       } else {
         callback()
       }

     }
  render() {
    const {getFieldDecorator} = this.props.form
    return (
      <div className="login">
        <div className="login_content">
          <h2 >用户登录</h2>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Item>
              {
                // 用户名,必须是大于4位,必须是小于12位,用户名只能是数字/字母/下划线
                getFieldDecorator('username', {
                  rules: [
                    { required: true, message: '请输入用户名' },
                    { min: 4, message: '必须是大于3位' },
                    { max: 12, message: '必须是小于12位' },
                    { pattern: /^[0-9a-zA-Z_]+$/, message: '只能输入数字、字母、下划线' },
                  ]
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="帐号" className="login-input"
                  />
                )
              }

            </Item>
            <Item>
              {
                getFieldDecorator('password', {
                  rules: [
                    { validator: this.validator }
                  ]
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="密码"
                    className="login-input"
                  />
                )
              }

            </Item>
            <Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登 录
              </Button>
            </Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;