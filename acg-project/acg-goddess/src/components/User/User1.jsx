import React, { Component } from 'react';

import { Table,Button,Modal,Form } from 'antd';
import { connect } from 'react-redux';
import { getData,removeUser,updateUser } from '../../redux/action-creators.js';
// import aa from '../../static/image/1YmTwPP.jpg'
// import bb from '../../static/image/2dB3pRBm.jpg'
// import cc from '../../static/image/4ErkmiU.jpg'
// import dd from '../../static/image/4mhu1BT.jpg'
// import a1 from '../../static/image/DIWunre.jpg'
// import b1 from '../../static/image/hxMvM59.jpg'
// import c1 from '../../static/image/MMN4RTG.jpg'
// import d1 from '../../static/image/sDn7toN.jpg'
// 引入样式
import './User.less'
//引入详情组件
import Detail from './Detail/Detail.jsx'
//({ users: state.data.data })
const { confirm } = Modal;
@Form.create()
@connect(state => ({ users: state.data.data }), {getData,removeUser,updateUser})
class User1 extends Component {
  DetailRef=React.createRef();
   componentDidMount() {
    //发送一个异步请求
     this.props.getData()
  }

  state = {
    
    visible: false, //打开用户详情的弹窗
    detailOk:false,//用户详情的弹窗 确认按钮
    detailCancel:false,//用户详情的弹窗 取消按钮
    updateState:1,//1,不能修改,文本为只读状态.0,文本为输入状态 可修改
  };

  

  columns = [
    {
      dataIndex:"user",
      render: (item,user) => (           
        <div className="userItem" onClick={() => {this.goDetail(user)}}>
          <img src={user.userImg} alt={'nvsheng'+user.alt} />
          <div className='text'>{user.userName}</div>
        </div>
      )
    }

  ];


  //打开用户详情的弹窗
  goDetail = (user) =>{
    console.log(user)
    this.userName = user
    this.setState({
      visible: true,
    });
  }
  
  //用户详情 确定按钮
  handleOk = () => {
    // console.log(user)
    console.log(this.props)
    let form=this.DetailRef.current;
    form.validateFields((err, values) => {
      if(!err){
        console.log(values)
         const user = values.name
         const userId = values.id
         const priceUrl = values.pictureUrl
         console.log(1111,user,userId,priceUrl)
         this.props.updateUser(userId,priceUrl,user)
         //this.props.getData()
         //关闭窗口,清空文本框数据
         this.handleCancel()
      }
    })
  };

  //用户详情 取消按钮
  handleCancel = () => {
    this.setState({
      visible: false,
      updateState:1
    });
    let form=this.DetailRef.current;
    form.resetFields();//清空值
  };

   //用户详情 点击修改按钮
   handUpdate = () => {
     console.log('修改')
    this.setState({
      updateState: 0,
    });
  };


  handDel = (userId) =>{
    confirm({
      title: '确定删除吗?',
      okText:'确定',
      cancelText:'取消',
      onOk:()=> {
        this.props.removeUser(userId)
        this.props.getData()
        this.handleCancel()
      }
    });
  }

  render () {
    const { columns, data } = this
    const { users } = this.props
    const {visible} = this.state
    if(users){
      var {user} = users
    }
    const userName = this.userName
    console.log(userName)
    return (
      <div>
        <Table 
        columns={columns} 
        dataSource={user}
        rowKey='id'
        pagination={{
          showSizeChanger:true,
          showQuickJumper:true
        }}
        />

          <Modal
            title="用户详情"
            visible={visible}
            // onOk={this.handleOk}
            // onCancel={this.handleCancel}
            //okText='确定'
            //cancelText='取消'
            width={500}
             footer={[
              // 定义右下角 按钮的地方 可根据需要使用 一个或者 2个按钮
              <button type="button" className="ant-btn ant-btn-primary" onClick={this.handUpdate}><span>修 改</span></button>,
              <button type="button" className="ant-btn ant-btn-primary"  onClick={()=>{this.handleOk()}}><span>确 定</span></button>,
              <button type="button" className="ant-btn ant-btn-danger" onClick={()=>{this.handDel(userName.id)}}><span>删 除</span></button>,
              <button type="button" className="ant-btn" onClick={this.handleCancel}><span>取 消</span></button>
             ]}
  
          >
            <Detail ref={this.DetailRef} setForm={form => this.form = form} updateState={this.state.updateState} user={userName}/>
          </Modal>
      </div>
    );
  }
}

export default User1;
