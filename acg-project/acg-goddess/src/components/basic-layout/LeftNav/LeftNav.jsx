import React, {Component} from "react"
import {Menu, Icon} from "antd"
import {Link, withRouter} from "react-router-dom"
import menus from "../../../config/menus.js"

@withRouter
class LeftNav extends Component {
  state = {
    index: "1"
  }

  creteMenus = () => {
    return menus.map(menu => (
      <Menu.Item
        key={menu.key}
        className="menuItem"
        onClick={() => {
          this.getIndex(menu.key)
        }}
      >
        <Link to={menu.path}>
          <Icon type={menu.icon} style={{color: "#6C7B95"}} />
          <span style={{color: "#6C7B95"}}>{menu.title}</span>
        </Link>
      </Menu.Item>
    ))
  }
  //点击获取index
  getIndex = index => {
    this.setState({
      index
    })
  }

  componentDidMount() {}
  render() {
    const menu = this.creteMenus()
    //找到对应在index，，从而显示那个被点击左侧列表
    const path = this.props.location.pathname

    const item = menus.filter(item => item.path === path)
    var index = "1"
    if(item && item.length >= 1){
     index = item[0].key 
    }
    else{
     const a =  path.split('/')
     index = '/'+a[1]
     const ab = menus.findIndex(item => item.path===index)
     index=(ab+1).toString()
    }

    return (
      <div>
        <Menu
          theme="dark"
          defaultSelectedKeys={[index]}
          mode="inline"
          className="menuList"
        >
          {menu}
        </Menu>
      </div>
    )
  }
}
export default LeftNav
