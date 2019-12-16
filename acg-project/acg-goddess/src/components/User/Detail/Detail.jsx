import React, { Component } from 'react';
import { Form, Input } from 'antd';
import PropTypes  from 'prop-types'


@Form.create()
class Detail extends Component {
    
    componentDidMount(){
        this.props.setForm(this.props.form)
        console.log(this.props.setForm(this.props.form))
    }

    static porpTypes ={
        setForm:PropTypes.func.isRequired,
        updateState:PropTypes.number.isRequired,
        user: PropTypes.object.isRequired
    }
  render () {
    const { getFieldDecorator } = this.props.form;
    const { user,updateState } = this.props;
     console.log(user)
    const pictureUrl = user.userImg
    const name = user.userName
    const id = user.id
    console.log(id,name,pictureUrl)
    
    return (
      <Form>
             <Form.Item label="用户id">
                {
                        getFieldDecorator('id', {
                            initialValue:id,  //设置默认值
                            rules: [
                                { required: true, message: '请输入ID' }
                            ],
                        })(<Input   disabled/>)
                      
                }

            </Form.Item>
            <Form.Item label="头像">
                {
                        updateState===1? 
                        getFieldDecorator('pictureUrl', {
                            initialValue:pictureUrl,  //设置默认值
                            rules: [
                                { required: true, message: '请输入昵称' }
                            ],
                        })(<Input placeholder='请输入昵称'  disabled/>)
                        :
                        getFieldDecorator('pictureUrl', {
                        initialValue:pictureUrl,  //设置默认值
                        rules: [
                            { required: true, message: '请输入昵称' }
                        ],
                    })(<Input placeholder='请输入昵称'   />)
                }

            </Form.Item>
            <Form.Item label="昵称" onChange={(e)=>{console.log('e',arguments)}}>
            {
                   updateState===1? 
                   getFieldDecorator('name', {
                    initialValue:name,  //设置默认值
                    rules: [
                        { required: true, message: '请输入昵称' }
                    ],
                    })(<Input placeholder='请输入昵称'  disabled />)
                   :
                   getFieldDecorator('name', {
                    initialValue:name,  //设置默认值
                    rules: [
                        { required: true, message: '请输入昵称' }
                    ],
                   })(<Input placeholder='请输入昵称'  />)
            }
            </Form.Item>
      </Form>

    )
  }
}

export default Detail;
