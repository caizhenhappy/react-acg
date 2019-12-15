import React, { Component } from 'react';
// 引入antd
import { Table, Button, Modal } from 'antd';
// 引入样式
import styles from './Discuss.module.less'
// 引入 redux
import { removeCom, getData } from '../../redux/action-creators'
import { connect } from 'react-redux';



@connect((state)=>({data:state.data.data}),{removeCom,getData})

class Discuss extends Component {
  componentDidMount(){
    // 为了获取评论信息，可能需要发送请求
    this.props.getData()
  }

  // 第一行中的每一列要显示的数据的设置
  columns = [
    {
      title: '消息id',
      dataIndex: 'id',

    },
    {
      title: '发消息的用户',
      dataIndex: 'commentUser',
    },
    {
      title: '消息所在的文章',
      dataIndex: 'commentArtId',
    },
    {
      title: '内容',
      dataIndex: 'commentMain',
    },
    {
      title: '发送时间',
      dataIndex: 'commentTime',
    },
    /* {
      title: '操作',
      dataIndex: 'handle',
      render: (comment) => {
        return <Button type="link" onClick={()=>{this.delDiscuss(comment.id)}}>
        删除
      </Button>
      },
    }, */
  ];

 /*  // 删除用户
  delDiscuss=(id)=>{
    Modal.confirm({
      title: '确认删除吗',
      okText: '确认',
      cancelText: '取消',
      // 箭头函数
      onOk: () => {
        this.props.removeCom(id)
      }
    })
  } */

  render () {
    const { columns } = this
    if(this.props.data){
      this.comment = this.props.data.comment
    }
    const {comment} = this
    console.log(comment);
    
    return (
      <div>
        <Table
          columns={columns}
          dataSource={comment}
          className={styles.modelTable}
          
        />
      </div>
    );
  }
}
export default Discuss;