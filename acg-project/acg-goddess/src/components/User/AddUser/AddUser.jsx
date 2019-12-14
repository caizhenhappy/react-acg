import React, { Component } from 'react';
import { From } from 'antd';

const { Item } = Form

@Form.create()
class AddUser extends Components {
  render () {
    return (
      <Card title={
        <div>
          <Icon type="arrow-left" onClick={() => { this.props.history.goBack() }} />&nbsp;&nbsp;&nbsp;
            <span>添加用户</span>
        </div>
      } >

        < Form labelCol={{ span: 2 }} wrapperCol={{ span: 10 }} onSubmit={this.submit}>
          <Item label="用户名称">
            {getFieldDecorator('username', {
              initialValue: product.username || '',
              rules: [
                { required: true, message: '请输入用户名称' }
              ],
            })(
              <Input placeholder='请输入用户名称' />
            )}
          </Item>

          <Item label="商品描述">
            {getFieldDecorator('desc', {
              initialValue: product.desc || '',
              rules: [
                { required: true, message: '请输入商品描述' }
              ],
            })(
              <Input placeholder='请输入商品描述' />
            )}
          </Item>


          <Item label="商品分类">
            {
              getFieldDecorator('categoryId', {
                initialValue: product.categoryId || '请选择商品分类',
                rules: [
                  { required: true, message: '请选择商品分类' }
                ],
              })(
                <Select placeholder="请选择商品分类" style={{ color: '#ccc' }}>
                  {
                    categories.map(category => {
                      return <Option key={category._id} value={category._id}>{category.name}</Option>
                    })
                  }
                </Select>
              )
            }
          </Item>

          <Item wrapperCol={{ span: 20 }}>
            <TextEditor setEditor={(EditorValue) => { this.EditorValue = EditorValue }} detail={product.detail || ''} />
          </Item>
          <Item >
            <Button type="primary" htmlType="submit">提交</Button>
          </Item>
        </Form >

      </Card>
    )
  }
}

export default AddUser
