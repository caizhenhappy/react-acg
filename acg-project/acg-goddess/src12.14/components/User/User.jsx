import React, { Component } from 'react';

import { Table ,Button} from 'antd';



class User extends Component {
  columns = [
    {
      title: '用户id',
      dataIndex: 'id',
    },
    {
      title: '用户名',
      className: 'UserName',
      dataIndex: 'UserName',
    },
    {
      title: '用户头像',
      dataIndex: 'img',
    },
    {
      title: '操作',
      dataIndex: 'handle',
    }
  ];

  data = [
    {
      key: '1',
      id: 'John Brown',
      UserName: '￥300,000.00',
      img: 'New York No. 1 Lake Park',
      handle: '删除',
    },
    {
      key: '1',
      id: 'John Brown',
      UserName: '￥300,000.00',
      img: 'New York No. 1 Lake Park',
      handle: '删除',
    },
    {
      key: '1',
      id: 'John Brown',
      UserName: '￥300,000.00',
      img: 'New York No. 1 Lake Park',
      handle: '删除',
    },
    
  ];

  render () {
    const { columns, data } = this
    return (
      <div>
        <header>
        <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
          添加用户
        </Button>
        </header>
        <Table
          columns={columns}
          dataSource={data}
        />
        
      </div>
    );
  }
}

export default User;