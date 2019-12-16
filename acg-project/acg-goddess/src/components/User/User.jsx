import React, { Component } from 'react';
//引入列表组件
import User1 from './User1.jsx'
//import { PageHeader,Button,Modal} from 'antd';
//import { Table } from 'antd';
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Icon, Table } from 'antd';
import styles from './User.module.less'
////import { connect } from 'react-redux';
import { getData } from '../../redux/action-creators.js';
const { Option } = Select;
//{ users: state.data.data } @connect(state => ({ users: state.data.data }), {getData})
@Form.create()
class User extends Component {
  state = {
    visible: false,
    addUserShow: false
  };

  componentDidMount() {
    //发送一个异步请求
    //this.props.getData()
  }
  // showADD = () => {
  //   this.setState({
  //     visible: true,
  //   });
  // };
  // showUpdate = () => {
  //   this.setState({
  //     addUserShow: true,
  //   });
  // };
  // onClose = () => {
  //   this.setState({
  //     visible: false,
  //     addUserShow: false
  //   });
  // };
  // columns = [
  //   {
  //     title: '用户id',
  //     dataIndex: 'id',
  //   },
  //   {
  //     title: '用户名',
  //     className: 'UserName',
  //     dataIndex: 'UserName',
  //   },
  //   {
  //     title: '用户头像',
  //     dataIndex: 'img',
  //   },
  //   {
  //     title: '操作',
  //     dataIndex: 'handle',
  //   }
  // ];
  // data = [
  //   {
  //     key: '1',
  //     id: 'John Brown',
  //     UserName: '￥300,000.00',
  //     img: 'New York No. 1 Lake Park',
  //     handle: '删除',
  //   },
  //   {
  //     key: '2',
  //     id: 'John Brown',
  //     UserName: '￥300,000.00',
  //     img: 'New York No. 1 Lake Park',
  //     handle: '删除',
  //   },
  //   {
  //     key: '3',
  //     id: 'John Brown',
  //     UserName: '￥300,000.00',
  //     img: 'New York No. 1 Lake Park',
  //     handle: '删除',
  //   },
  // ]

  render () {
    // const { columns, data } = this
    //  const { users } = this.props
    //  console.log('user组件')
    //  console.log(this.props.users)
    // if(users){
    //   const {user} = users
    // }

    //const { getFieldDecorator } = this.props.form
    
    return (
      <div>
        {/* <header>
          <Button onClick={this.showADD} type="primary" style={{ margin: 16, width: '100px' }} size='large'>
            添加用户
        </Button>
          <Button onClick={this.showUpdate} type="primary" style={{ margin: 16, width: '100px' }} size='large'>
            修改用户
        </Button>
        </header> */}
        {/* <Table
          columns={columns}
          dataSource={data}
          className={styles.modelTable}
        /> */}
        <div id="userList">
          <User1  />
        </div>
        
        {/* <div>
          <Drawer
            title="添加用户"
            width={300}
            onClose={this.onClose}
            visible={this.state.visible}
            bodyStyle={{ paddingBottom: '150%' }}
            className={styles.drawerBg}
          >
            <Form layout="vertical" hideRequiredMark>
              <Row gutter={18}>
                <Col span={18}>
                  <Form.Item label="用户名">
                     {getFieldDecorator('name', {
                      rules: [{ required: true, message: '请输入用户名' }],
                    })(<Input placeholder="请输入用户名" />)} 
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={18}>
                <Col span={18}>
                  <Form.Item label="密码">
                    {getFieldDecorator('password', {
                      rules: [{ required: true, message: '请输入密码' }],
                    })(<Input placeholder="请输入密码" />)}
                  </Form.Item>
                </Col>
              </Row>
            </Form>
            <Button type="primary" style={{ width: 190 }} >确认添加</Button>
            <div
              style={{
                position: 'absolute',
                right: 0,
                bottom: 0,
                width: '100%',
                borderTop: '1px solid #e9e9e9',
                padding: '10px 16px',
                background: '#FFFDF9',
                textAlign: 'right',
              }}
            >
            </div>
          </Drawer>
          <Drawer
            title="修改用户"
            width={300}
            onClose={this.onClose}
            visible={this.state.addUserShow}
            bodyStyle={{ paddingBottom: '150%' }}
            className={styles.drawerBg}
          >
            <Form layout="vertical" hideRequiredMark>
              <Row gutter={18}>
                <Col span={18}>
                  <Form.Item label="用户名">
                    {getFieldDecorator('name', {
                      rules: [{ required: true, message: '请输入用户名' }],
                    })(<Input placeholder="请输入用户名" />)}
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={18}>
                <Col span={18}>
                  <Form.Item label="密码">
                    {getFieldDecorator('password', {
                      rules: [{ required: true, message: '请输入密码' }],
                    })(<Input placeholder="请输入密码" />)}
                  </Form.Item>
                </Col>
              </Row>
            </Form>
            <Button type="primary" style={{ width: 190 }} >确认修改</Button>

          </Drawer>
        </div> */}
      </div>
    );
  }
}

export default User;
