import React, { Component } from "react";
import { Table, Drawer, Button } from "antd";
import styles from "./banner.module.less";
import {getBanner,addBanner} from '../../api/index'



//缓存做的lowB增删
class Banner extends Component {
  //抽屉 添加图片轮播
  state = { visible: false, id: "" ,banner:[],add_banner:[]};
  showDrawer = () => {
    this.setState({
      visible: true
    });
  };
   onClose = () => {
    this.setState({
      visible: false
    });
  }; 
  //删除
  deleteBanner = (index) => {
    const nowBanner = this.state.banner
    const thenBanner = nowBanner.splice(index,1)
   
    this.setState({
      banner:nowBanner
    })
    window.localStorage.setItem('banner',JSON.stringify(nowBanner))
    window.localStorage.setItem('chooseBanner',JSON.stringify(this.state.add_banner))
  };
  //添加图片轮播
  btnBanner=(id)=>{
    //获取选中的BANNER索引
 const i = this.state.add_banner.findIndex((item)=>item.id===this.state.id)
 //截出来
 const chooseBanner = this.state.add_banner.splice(i,1)
//获取现在使用的BANNER数组
  const nowBanner = this.state.banner
  //添加到其中
  nowBanner.unshift(chooseBanner[0])
  this.setState({
    banner:nowBanner
  })  
  window.localStorage.setItem('banner',JSON.stringify(nowBanner))
  window.localStorage.setItem('chooseBanner',JSON.stringify(this.state.add_banner))
  }
  
  //获取banner  感觉写的好low啊
   async componentDidMount(){
    const result = await getBanner()
    const result2 = await addBanner()
    const result3 = JSON.parse(window.localStorage.getItem('banner'))
    const result4 = JSON.parse(window.localStorage.getItem('chooseBanner')) 
    if(!result3){
      this.setState({
        banner: result,
        add_banner:result2
      }) 
    }else{
      this.setState({
        banner: result3,
        add_banner:result4
      }) 
    }
  }
  //表头
  columns = [ 
    { title: "轮播图Id",width:250, dataIndex: "id", key: "id" },                                                    
    { title: "图片",width:400,dataIndex: "bannerImg", key: "name" ,render:text=>( <img style={{width:'220px',height:'120px'}} src={require(`../../assets/images/bannner${text}`)} /> )
    },
    { title: "图片注释", width:400,dataIndex: "alt", key: "alt" },
   /*  { title: "图片跳转", dataIndex: "href", key: "href" }, */
    {
      title: "操作",
      dataIndex: "doit",
      key: "doit",
      render:  (text, record, index)  => 
        <a
          onClick={() => {
            this.deleteBanner(index)
          }}
        >
          删除
        </a>
      
    }
  ];
 
  render() {
    return (
      <div>
        <div style={{ padding: "15px" }}>
          <Button type="primary" onClick={this.showDrawer}  style={{padding:'0 15px'}}>
            选择添加图片轮播
          </Button>
        </div>

        <Drawer
          title="选择添加轮播图"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          className={styles.drawerBg}
        >
          {
          this.state.add_banner.map(item => {
            return (
              <img
                key={item.id}
                style={
                  this.state.id === item.id
                    ? {
                        width: "95%",
                        //boxSizing:'border-box',
                        marginBottom: "20px",
                        boxShadow:' 0px 0px 0px 2px #1890ff',
                        //border: "2px solid #1890ff",
                        cursor: "pointer",
                        
                      }
                    : {
                        width: "95%", 
                        //boxSizing:'border-box',
                        marginBottom: "20px",
                        cursor: "pointer",
                        
                      }
                }
                onClick={()=>{
                  this.setState({
                      id: item.id
                  })
              }}
              src={require(`../../assets/images/bannner${item.bannerImg}`)}
              />
            );
          })
          }
          <div style={{ textAlign: "center" }}>
            <Button type="primary" onClick={this.btnBanner} style={{padding:'0 15px'}}>
              添加
            </Button>
          </div>
        </Drawer>

        <Table
          rowKey={record => record.id}
          columns={this.columns}
          dataSource={this.state.banner}
          pagination={{pageSize:3}}
          className={styles.modelTable}
        />
      </div>
    );
  }
}
export default Banner;
