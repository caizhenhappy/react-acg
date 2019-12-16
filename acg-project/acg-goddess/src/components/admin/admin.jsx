import React, { Component } from 'react';
// 引入antd
import { Tabs, Button, Carousel, Card, Avatar } from 'antd';
// 引入Link
import { Link } from "react-router-dom"
// 引入背景图片
import logo from "../../assets/images/ia_500000005.jpg"
import headPortrait from "../../assets/images/upload_4a5e298a6c72cad8586a07eea65a5bba.jpeg"
import { connect } from "react-redux"
// 引入 redux
import { getData } from '../../redux/action-creators'
import axios from 'axios'
// 引入样式文件
import './admin.css'
// 粒子
/* canvas-particle 粒子 */
import { CanvasParticle } from './canvas-particle.js'

const { TabPane } = Tabs;
@connect((state) => ({ data: state.data.data }), { getData })
class Admin extends Component {
  async componentDidMount () {
    CanvasParticle()
    // 为了获取评论信息，可能需要发送请求
    this.props.getData()
    this.result = await axios('/getBanner')
    if (this.result.code === 0) {
      this.swiper = this.result.data
    }
  }

  render () {
    console.log(this)
    if (this.props.data) {
      this.article = this.props.data.article
      console.log(this.article)
    }

    // if(this.result){
    //   this.swiper = this.result
    //   console.log(this.swiper)
    // }

    return (
      <div className="admin" id='mydiv'>
        <div className="admin-header">
          <img src={logo} alt={logo} />
          <span>天使的二次元</span>
        </div>
        <Tabs className='admin-content'>
          <TabPane tab="首页" key="1" className="admin-tab">
            <Carousel autoplay className="adminSwiper">
              <div>
                <img src={require('../../assets/images/bannner/banner2.jpg')} alt="2" />
              </div>
              {
                (this.swiper || []).map((item, index) => (
                  <div>

                    <div key={index}>
                      <img src={require(`../../assets/images/bannner${item.bannerImg}`)} alt="1" />
                    </div>
                  </div>
                ))}
              {/* <div>
                <img src={''} alt="1"/>
              </div>
              <div>
                <img src="https://picsum.photos/id/13/1000/500" alt="2"/>
              </div>
              <div>
                <img src="https://picsum.photos/id/50/1000/500" alt="3"/>
              </div> */}
            </Carousel>
            <ul className="admin-list">
              {(this.article || []).map((item, index) => {
                console.log(typeof item.bannerImg)
                return (
                  <li className="adminListItem" key={index}>
                    <div className="listItemHeader">
                      <h3>游戏</h3>
                      <p className="listItemTitle">
                        <span>[SLG]</span>
                        封缄之都古拉塞斯塔V1.3 汉化免安装版
                        <span>[5.18G]</span>
                      </p>
                    </div>
                    <img className="listItemImg" src={require(`../../assets/images/bannner${item.bannerImg}`)} alt="tab-img" />
                    <p className="listItemPeriod">
                      {item.main}
                    </p>
                    <div className="listItemFooter">
                      <svg t="1576221559217" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6562" width="20" height="20"><path d="M865.44 912l-0.67-6C844.14 737.69 686 600.78 512 600.78S179.85 737.69 159.26 906l-0.7 6H112.1l0.88-7.76C129.08 756 233.8 622.17 373.85 571.64l4.34-1.55-3.82-2.4c-71.6-45.53-114.21-121.56-114.21-203.1C260 230.1 377.84 112 512 112c134.34 0 252 118.1 252 252.59 0 81.54-42.64 157.57-114.24 203.1l-3.81 2.4 4.34 1.55C790.2 622.33 895.09 756 911 904.4l0.88 7.6zM512 165.75c-103.84 0-205.58 102.07-205.58 206.06 0 108.43 108.5 189.63 205.58 189.63s205.58-81 205.58-189.63c0-104-101.74-206.06-205.58-206.06z m0 0" p-id="6563"></path></svg>
                      <span>{item.author}</span>
                      <svg t="1576221701155" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7349" width="20" height="20"><path d="M512 1024C229.691 1024 0 794.309 0 512S229.691 0 512 0a39.385 39.385 0 0 1 0 78.77A433.703 433.703 0 0 0 78.77 512c0 238.828 194.323 433.23 433.23 433.23 238.828 0 433.23-194.402 433.23-433.23a39.385 39.385 0 0 1 78.77 0c0 282.309-229.691 512-512 512z" fill="#f4ea2a" p-id="7350"></path><path d="M511.212 157.538a39.385 39.385 0 0 0-39.384 39.385V512a39.385 39.385 0 0 0 78.769 0V196.923a39.385 39.385 0 0 0-39.385-39.385z" fill="#f4ea2a" p-id="7351"></path><path d="M747.52 472.615H511.212a39.385 39.385 0 0 0 0 78.77H747.52a39.385 39.385 0 0 0 0-78.77z" fill="#f4ea2a" p-id="7352"></path></svg>
                      <span> {item.createTime} </span>
                      <svg t="1576221741174" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8416" width="20" height="20"><path d="M772.437333 1024a101.853867 101.853867 0 0 1-45.6704-12.0832l-214.4256-111.4112-215.8592 111.2064a94.549333 94.549333 0 0 1-102.877866-8.055467 106.154667 106.154667 0 0 1-38.570667-101.376l44.168533-237.7728-169.1648-163.84a111.0016 111.0016 0 0 1-26.2144-104.516266v-1.2288a99.191467 99.191467 0 0 1 79.803734-70.2464l235.042133-44.373334L424.1408 57.821867A99.396267 99.396267 0 0 1 512-0.068267a96.802133 96.802133 0 0 1 88.200533 58.504534l105.198934 221.7984 235.1104 42.666666a97.006933 97.006933 0 0 1 78.301866 71.0656 105.6768 105.6768 0 0 1-24.507733 104.994134l-0.546133 0.6144-168.686934 164.932266 42.666667 238.1824a104.174933 104.174933 0 0 1-38.0928 100.5568 88.2688 88.2688 0 0 1-57.412267 20.48z" fill="#FBCC02" p-id="8417"></path></svg>
                      <span> {item.startNum} </span>
                      <svg t="1576221795549" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9189" width="20" height="20"><path d="M949.57 212.674l-41.8 41.517-139.205-138.348 41.801-41.459c15.34-15.283 39.523-16.084 53.893-1.768l87.024 86.454c14.427 14.313 13.628 38.324-1.712 53.604z m-369.197 366.92L441.17 441.244l306.239-304.299 139.205 138.349-306.24 304.3z m-19.388 19.275l-194.863 55.315 55.66-193.667L560.984 598.87zM236.552 178.12c-48.133 0-87.082 38.949-87.082 87.024v522.372c0 48.063 38.963 87.026 87.026 87.026h522.486c48.064 0 87.028-38.963 87.028-87.028V439.248l87.08-87.028V816.54c0 80.125-64.955 145.078-145.079 145.078H207.468c-80.125 0-145.078-64.954-145.078-145.078V236.115c0-80.125 64.954-145.079 145.078-145.079h464.436L584.82 178.12H236.55v-0.001z" p-id="9190"></path></svg>
                      <span> {item.commentNum} </span>
                    </div>
                  </li>
                )
              })}

              <div className="adminListRight" style={{ background: 'rgba(249, 244,241,0.6)', padding: '30px' }}>
                <Card title="用户信息" bordered={false} style={{ width: 300 }}>
                  <p><Avatar size={130} src='./images/avatar.jpg' /></p>
                  <p>admin</p>
                  <Button type="link" ghost> 注销</Button>
                  <Button type="link" ghost> 收藏</Button>
                </Card>
              </div>
            </ul>
            <div className="adminHeaderLogin">
              <div className="adminHeader">
                <div className="adminHeaderLeft">
                  <svg t="1576218492921" className="icon welcome" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2479" width="28" height="28"><path d="M842 538.048h-44a22 22 0 0 1 0-44h44a21.984 21.984 0 1 1 0 44z m-88-264v-22l44-44 22 22.016v22l-44 44-22-22.016z m-98.992 326.64c-3.28 1.92-6.912 3.36-11.008 3.36a22 22 0 0 1 0-44v-1.12a55.024 55.024 0 0 0 0-107.76v-1.12a22 22 0 0 1 0-44c4.096 0 7.728 1.424 11.008 3.376 43.952 10.064 76.992 48.624 76.992 95.632s-33.04 85.568-76.992 95.632z m-99.008 223.36s-20.832 0.816-33.36-7.936l-208.64-146.064H204a44 44 0 0 1-44-44v-220a44 44 0 0 1 44-44h110l208.64-146.048a42.16 42.16 0 0 1 25.216-7.936s52.144-3.488 52.144 44v528a44 44 0 0 1-44 44z m0-528c0-45.824-22-22-22-22L336 406.048h-110c-12.16 0-22 9.84-22 22.016v176c0 12.128 9.84 22 22 22H336l198 132s22 19.248 22 0V296.048z m264 484v22l-22 22-44-44V758.08l22-22 44 44z" p-id="2480" fill="#1afa29"></path></svg>
                  <span>欢迎来到竹子次元</span>
                </div>
                <div className="adminHeaderRight">
                  <svg t="1576218701632" className="icon welcome" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3636" width="25" height="25"><path d="M796.874711 772.19745c-13.622764 0-24.667076-11.038516-24.667076-24.66128 0-145.062248-118.015785-263.081031-263.078433-263.081031-145.063247 0-263.080032 118.018583-263.080032 263.081031 0 13.622764-11.041514 24.66128-24.662279 24.66128-13.621764 0-24.663278-11.038516-24.663278-24.66128 0-42.167211 8.262398-83.083469 24.559349-121.612147 15.736331-37.206774 38.26006-70.611925 66.942013-99.294478 28.682953-28.682553 62.089303-51.207082 99.294878-66.942413 38.529677-16.295951 79.445936-24.559349 121.609149-24.559349 42.164812 0 83.081071 8.263397 121.610748 24.559349 37.204575 15.735331 70.613924 38.25986 99.296477 66.942413 28.682553 28.682553 51.201086 62.087705 66.940414 99.294478 16.296951 38.528678 24.559149 79.444936 24.559149 121.612147C821.535791 761.158934 810.497475 772.19745 796.874711 772.19745zM509.306882 484.632219c-48.315242 0-93.735248-18.811246-127.894887-52.972884-34.15984-34.15984-52.971885-79.580444-52.971885-127.894488 0-48.308647 18.812245-93.725254 52.971885-127.888891 34.161838-34.163237 79.581844-52.978481 127.894887-52.978481 48.312644 0 93.733649 18.815243 127.894488 52.978481 34.15884 34.163837 52.970086 79.580444 52.970086 127.888891 0 48.314043-18.811246 93.734648-52.970086 127.894488C603.040531 465.820973 557.619526 484.632219 509.306882 484.632219zM509.306882 172.224832c-72.531624 0-131.540416 59.008792-131.540416 131.540016 0 72.530624 59.008792 131.540016 131.540416 131.540016 72.530025 0 131.542015-59.009392 131.542015-131.540016C640.848896 231.233624 581.836907 172.224832 509.306882 172.224832z" p-id="3637" fill="#1afa29"></path></svg>
                  <Button type="link" ghost> 注册</Button>
                  <svg t="1576224100494" className="icon welcome" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10634" width="20" height="20"><path d="M481.95290368 92.04992117h69.07886357v435.97747585h-69.07886357z" fill="#1afa29" p-id="10635"></path><path d="M628.50614304 192.305102V265.36078714c124.75436557 45.80709291 214.01191635 165.40631939 214.01191636 305.92068155 0.1472897 179.69341911-146.25865998 325.95207907-326.09936877 325.95207907-179.8407088 0-326.09936877-146.25865998-326.09936876-326.09936876 0-140.36707246 89.40484049-259.96629895 214.01191636-305.92068153v-73.05568516c-163.49155345 48.45830729-283.23806962 199.87210635-283.23806962 378.82907702 0 217.98873792 177.3367841 395.32552204 395.32552202 395.32552202 217.98873792 0 395.32552204-177.3367841 395.32552203-395.32552202 0-178.80968097-119.74651617-330.22348003-283.23806962-378.68178733z" fill="#1afa29" p-id="10636"></path></svg>
                  <Link to="/Login">
                    <Button type="link" ghost > 登录</Button>
                  </Link>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="帮助" key="2">z
            帮助
          </TabPane>
          <TabPane tab="收藏" key="3">
            <section>

            </section>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default Admin;