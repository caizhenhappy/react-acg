import React, { Component } from 'react';
 import { PageHeader,Button,Modal} from 'antd';
//import { Table } from 'antd';


// 引入样式
import './User.less'
import User1 from './User1.jsx'
//引入新增用户组件
//import AddUser from './AddUser/AddUser.jsx'
//引入分页组件
//import paginaTions from '../Pagination/Pagination.jsx'
class User extends Component {

    state = {
      usesLength:0,
      userLists:[],
      visible:false,//新增用户窗口
    };
    //打开新增用户窗口
    addDetail = () =>{
      this.setState({
        visible:true
      })
    }
   //新增用户确定回调
    addUserOk = () =>{

    }

    //新增用户取消回调
    addUserCancel = () =>{

    }
  
  render () {
    
    // const { columns, data } = this
    return (
      <div className='userConent'>
          <PageHeader
            style={{
              border: '1px solid rgb(235, 237, 240)',
            }}
            title="用户列表"
            extra={[
              <Button key="1" type="primary" onClick="addDetail">
                新增用户
              </Button>,
            ]}
          />

          <Modal
            title="新增用户"
            visible={this.visible}
            onOk={this.addUserOk}
            onCancel={this.addUserCancel}
            okText='确定'
            cancelText='取消'
            width={500}
          >
           
          </Modal>


          <div className="userList" ref='userList'>
            <User1 />
          </div>
      </div>
    );
  }
}

export default User;