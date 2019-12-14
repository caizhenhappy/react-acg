import React, { Component } from 'react';

import { Table,Button } from 'antd';
import aa from '../../static/image/1YmTwPP.jpg'
import bb from '../../static/image/2dB3pRBm.jpg'
import cc from '../../static/image/4ErkmiU.jpg'
import dd from '../../static/image/4mhu1BT.jpg'
import a1 from '../../static/image/DIWunre.jpg'
import b1 from '../../static/image/hxMvM59.jpg'
import c1 from '../../static/image/MMN4RTG.jpg'
import d1 from '../../static/image/sDn7toN.jpg'
// 引入样式
import './User.less'
class User1 extends Component {
  columns = [
    {
      dataIndex:"item",
      render: (item) => (           
        <div className="userItem">
          <img src={item.src} alt={item.alt} /> 
          <div className='text'>{item.text1}</div>
          <div className='text2'>{item.text2}</div>
        </div>
      )
    }

  ];

  data = [
    {
      key: '1',
      item:{
        src:aa,
        alt:'nvsheng',
        text1:'Lake',
        text2:'New York No. 1 Lake ParkNew York No. 1 Lake Park'
      }
     },
    {
      key: '2',
      item:{
        src:bb,
        alt:'nvsheng',
        text1:'Lake',
        text2:'New York No. 1 Lake ParkNew York No. 1 Lake Park'
      }
    },
    {
      key: '3',
      item:{
        src:cc,
        alt:'nvsheng',
        text1:'Lake',
        text2:'New York No. 1 Lake ParkNew York No. 1 Lake Park'
      }
    },
    {
      key: '4',
      item:{
        src:dd,
        alt:'nvsheng',
        text1:'Lake',
        text2:'New York No. 1 Lake ParkNew York No. 1 Lake Park'
      }
    },
    {
      key: '5',
      item:{
        src:a1,
        alt:'nvsheng',
        text1:'Lake',
        text2:'New York No. 1 Lake ParkNew York No. 1 Lake Park'
      }
    },
    {
      key: '6',
      item:{
        src:b1,
        alt:'nvsheng',
        text1:'Lake',
        text2:'New York No. 1 Lake ParkNew York No. 1 Lake Park'
      }
    },
    {
      key: '7',
      item:{
        src:c1,
        alt:'nvsheng',
        text1:'Lake',
        text2:'New York No. 1 Lake ParkNew York No. 1 Lake Park'
      }
    },
    {
      key: '8',
      item:{
        src:d1,
        alt:'nvsheng',
        text1:'Lake',
        text2:'New York No. 1 Lake ParkNew York No. 1 Lake Park'
      }
    },
    {
      key: '9',
      item:{
        src:aa,
        alt:'nvsheng',
        text1:'Lake',
        text2:'New York No. 1 Lake ParkNew York No. 1 Lake Park'
      }
    },
    {
      key: '10',
      item:{
        src:aa,
        alt:'nvsheng',
        text1:'Lake',
        text2:'New York No. 1 Lake ParkNew York No. 1 Lake Park'
      }
    },
    {
      key: '11',
      item:{
        src:bb,
        alt:'nvsheng',
        text1:'Lake',
        text2:'New York No. 1 Lake ParkNew York No. 1 Lake Park'
      }
    },
    {
      key: '12',
      item:{
        src:cc,
        alt:'nvsheng',
        text1:'Lake',
        text2:'New York No. 1 Lake ParkNew York No. 1 Lake Park'
      }
    }
   
  ];


  render () {
    const { columns, data } = this
    return (
      <div>
        <Table 
        columns={columns} 
        dataSource={data}
        pagination={{
          showSizeChanger:true,
          showQuickJumper:true,
          pageSizeOptions:['3','6','9','12']
        }}
        
        />
      </div>
    );
  }
}

export default User1;
