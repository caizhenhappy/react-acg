import React, { Component } from 'react';

import { Table,Button } from 'antd';


class Comment extends Component {
  columns = [
    {
      title: '用户名',
      width: 150,
      dataIndex: 'name'
    },
    {
      title: '消息ID',
      width: 150,
      className: 'column-money',
      dataIndex: 'messageId',
    },
    {
      title: '评论所在文章',
      dataIndex: 'title',
    },
    {
      title: '内容',
      dataIndex: 'content',
    },
    {
      title: '发送时间',
      dataIndex: 'sendTime',
    },
    {
      title: '操作',
      dataIndex: 'operation',
      width: 200,
      render: (product) => {
        return (
          <div >
            <Button type="link" >详情</Button>
            <Button type="link" >删除</Button>
          </div>
        )
      },
    }
  ];

  data = [
    {
      key: '1',
      name: 'John Brown',
      messageId: '￥300,000.00',
      title: 'New York No. 1 Lake Park',
      content: 'New York No. 1 Lake Park',
      sendTime: '2019-10-10',
    },
    {
      key: '2',
      name: 'Jim Green',
      messageId: '￥1,256,000.00',
      title: 'London No. 1 Lake Park',
      content: 'London No. 1 Lake Park',
      sendTime: '2019-10-10',
    },
    {
      key: '3',
      name: 'Joe Black',
      messageId: '￥120,000.00',
      title: 'Sidney No. 1 Lake Park',
      content: 'Sidney No. 1 Lake Park',
      sendTime: '2019-10-10',
    },
  ];

goto(a){

}
  render () {
    const { columns, data } = this
    return (
      <div>
        <Table columns={columns} dataSource={data}/>
      </div>
    );
  }
}

export default Comment;
