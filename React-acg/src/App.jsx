import React ,{ Component } from 'react';
// 引入routes
import routes from './config/routes.js'

import { Card, Table, Button, Icon, Modal } from 'antd';
class App extends Component {
  render() {
    return (
      <Card title="分类列表" extra={<Button type="primary" onClick={() => this.setState({ isShowAdd: true })}><Icon type="plus" />分类列表</Button>} >
      <Table
        columns={this.columns}
       
        rowKey="_id"
        bordered
        pagination={{
          showSizeChanger: true,
          showQuickJumper: true,
          defaultPageSize: 3,
          pageSizeOptions: ['3', '6', '9', '12']
        }}
      />
      <Modal
       
        title="添加分类"
        onOk={this.addCategory}
        onCancel={this.hideAdd}
        okText='确定'
        cancelText='取消'
        width={300}
      >
        
      </Modal>

      <Modal
        
        title="修改分类"
        onOk={this.updateCategory}
        onCancel={this.hideUpdate}
        okText='确定'
        cancelText='取消'
        width={300}
      >
       
      </Modal>
    </Card >
    );
  }
}

export default App;