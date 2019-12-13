import React, { Component } from 'react';

import { Table } from 'antd';


class User extends Component {
  columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (aa) => (
        <div onClick={
          () => {
            console.log(this)
          }
        }>
          点我
        </div>
      ),
    },
    {
      title: 'Cash Assets',
      className: 'column-money',
      dataIndex: 'money',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];

  data = [
    {
      key: '1',
      name: 'John Brown',
      money: '￥300,000.00',
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      money: '￥1,256,000.00',
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      money: '￥120,000.00',
      address: 'Sidney No. 1 Lake Park',
    },
  ];

goto(a){

}
  render () {
    const { columns, data } = this
    return (
      <div>

        <Table
          columns={columns}
          dataSource={data}
          bordered
          title={() => 'Header'}
          footer={() => 'Footer'}
        />
        <div goto={to => this.goto(to)}></div>
      </div>
    );
  }
}

export default User;