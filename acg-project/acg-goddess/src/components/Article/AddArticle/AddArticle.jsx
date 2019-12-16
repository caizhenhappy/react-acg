import React, {Component} from "react"
// 引入样式
import "./AddArticle.less"
// 引入antd
import {PageHeader, Input, Button, Form, Icon} from "antd"

import {addArt} from "../../../redux/action-creators"
import {connect} from "react-redux"
const {TextArea} = Input
@connect(null, {addArt})
@Form.create()
class Article extends Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const {author, createTime, description, main, title} = values
        this.props.addArt({title, author, createTime, main ,description})
        console.log(author, createTime, description, main, title)
        this.props.history.goBack()
      }
    })
  }

  render() {
    const {getFieldDecorator} = this.props.form
    return (
      <div className="add-article">
        <PageHeader
          onBack={() => console.log(this.props.history.push("/article"))}
          title=" "
        />

        <Form
          labelCol={{span: 2}}
          wrapperCol={{span: 6}}
          onSubmit={this.handleSubmit}
        >
          {/* 
// id: 0, title: "泉 千春", author: "宮城野 凛 （みやぎの りん）", createTime: "2019 2 1", main: ：:remark  description*/}
          <Form.Item label="文章标题">
            {getFieldDecorator("title", {
              rules: [{required: true, message: "请输入文章标题"}]
            })(<Input placeholder="请输入文章标题" />)}
          </Form.Item>

          <Form.Item label="文章说明">
            {getFieldDecorator("description", {
              rules: [{required: true, message: "请输入文章说明"}]
            })(<Input placeholder="请输入文章说明" />)}
          </Form.Item>

          <Form.Item label="文章作者">
            {getFieldDecorator("author", {
              rules: [{required: true, message: "请输入文章作者"}]
            })(<Input placeholder="请输入文章作者" />)}
          </Form.Item>

          <Form.Item label="发布时间">
            {getFieldDecorator("createTime", {
              rules: [{required: true, message: "请输入发布时间"}]
            })(<Input placeholder="请输入发布时间" />)}
          </Form.Item>

          <Form.Item label="文章内容" wrapperCol={{span: 20}}>
            {getFieldDecorator("main", {
              rules: [{required: true, message: "请输入文章内容"}]
            })(<Input placeholder="请输入文章内容" />)}
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{margin: "0 0 0 50%"}}
            >
              提交
            </Button>
            {/* htmltype定义 button 的原始type */}
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Article
