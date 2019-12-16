import React, { Component } from 'react';
//引入列表组件
import User1 from './User1.jsx'
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Icon, Table } from 'antd';
import styles from './User.module.less'
import { getData } from '../../redux/action-creators.js';
const { Option } = Select;

@Form.create()
class User extends Component {
  state = {
    visible: false,
    addUserShow: false
  };
 
  render () {
    return (
      <div>
        <div id="userList">
          <User1  />
        </div>
      </div>
    );
  }
}

export default User;
