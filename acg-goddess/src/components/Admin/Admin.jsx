import React, { Component } from 'react';
// 引入antd
import { Tabs, Button, Carousel } from 'antd';
// 引入背景图片
import logo from "../../assets/images/ia_500000005.jpg"
// 引入样式文件
import './Admin.css'

const { TabPane } = Tabs;
const operations = <Button>登录</Button>;

class Admin extends Component {
  render() {
    return (
      <div className="admin">
        <div className="admin-header">
          <img src={logo} alt={logo}/>
          <span>天使的二次元</span>        
        </div>
        <Tabs tabBarExtraContent={operations} className='admin-content'>
          <TabPane tab="首页" key="1" className="admin-tab">
            <Carousel autoplay>
              <div>
                <img src="https://picsum.photos/id/16/1000/500" alt="1"/>
              </div>
              <div>
                <img src="https://picsum.photos/id/13/1000/500" alt="2"/>
              </div>
              <div>
                <img src="https://picsum.photos/id/50/1000/500" alt="3"/>
              </div>
              <div>
                <img src="https://picsum.photos/id/60/1000/500" alt="4"/>
              </div>
            </Carousel>
            <ul className="admin-list">
              <li className="adminListItem">
                <div className="listItemHeader">
                  <span>游戏</span>
                  <p className="listItemTitle">
                    <span>[SLG]</span>
                    封缄之都古拉塞斯塔V1.3 汉化免安装版
                    <span>[5.18G]</span>
                  </p>                  
                </div>
                <img className="listItemImg" src="https://picsum.photos/id/10/1000/500" alt="tab-img"/>
                <p className="listItemPeriod">
                在以『强大』为绝对价值,各种各样的欲望所席卷的『大封锁地」从最底层的隶士往上攀登吧--贝加拉德王国的贫民街出身的主人公『杰达尔·修瓦卢卡】作为佣兵参加了战争,在败北后论为敌国俘虏,被卖到遥远的东戈迪亚王国。他所到达的是王都r迎击都市格拉塞斯塔』,乃地下沉睡着庞大的迷宫r黑抗」的萨马拉魔族国的葬身之地,不间断地与魔物进行着抗争的"佣兵与奴隶的者市"”。"只要在这个国家修炼打倒魔物的力量,就能成王"宛如证明了这种谎言一般的吹嘘一般,在迎击都市格拉塞斯塔有一位靠实实的实力拼搏到顶点的英雄。现任国王『萨罗·格拉塞斯塔27世』是个原本连姓氏都没有的奴隶,经过无数次生死搏斗后最终赢得了荣誉。-就算论为奴隶,也不该放弃希望。杰达尔在为了从奴隶升为自由民而积极攻略迷宫的时候,遇到了一个贵族女孩。E为特殊的状况,平时只能以小巧人偶身体生活的女孩『莉莉卡·鲁西蒂尼】据说在寻找将自己带到迷宫最深处的协助者。有贵族做后台的话,就算是奴隶,在各种事情上会方便许多。虽然也有这样的小算盘,但他也很喜欢莉莉卡那种不在乎身份差距的态度。彼此利害一致,因此成为莉莉卡所有的奴隶的杰达尔将要共同走遍末开拓的阶层、解开沉睡在迷宫中的谜团、与潜伏与迎击都市中的黑暗势力对峙。这是从最低贱的底层开始"发迹"的故事一
                </p>
                <div className="listItemFooter">
                  <span>小人头</span>
                  <span>admin</span>
                  <span>小闹钟</span>
                  <span>time</span>
                  <span>小星星</span>
                  <span>start-num</span>
                  <span>评论</span>
                  <span>评论num</span>
                </div>
              </li>
            </ul>
          </TabPane>
          <TabPane tab="帮助" key="2">
            帮助
          </TabPane>
          <TabPane tab="收藏" key="3">
            收藏
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default Admin;