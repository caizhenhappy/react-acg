import React, { Component } from 'react';
import { Card, Button,PageHeader  } from 'antd';
// 引入样式
import './Article.css'


class Article extends Component {
  addArticle=()=>{
  this.props.history.push('/article/addArticle')
  }
  render () {
    const test = [0, 1, 2, 3]
    return (
      <div className='article' >
         <Button type="primary" className='titleBtn' size='large' onClick={this.addArticle}>添加文章</Button>
        <div className='articleList'>
          {
            test.map((te, index) => (
              
              <Card
                key={index}
                className='articleItem'
                
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
              >
                <div className='btn'>
                  <button style={{backgroundColor:'#D3F4FF',border: 'none',borderRadius: '10px',width:'25%',minHeight:'30px'}} >修改</button>
                  <button style={{backgroundColor:'#D3F4FF',border: 'none',borderRadius: '10px',width:'25%',minHeight:'30px'}} >删除</button>
                </div>
              </Card>
            ))
          }
        </div>
      </div>

    );
  }
}

export default Article;