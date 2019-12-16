import React from "react"
import {Table, Card, Button, Modal} from "antd"
import {connect} from "react-redux"
import {getData, removeArt} from "../../redux/action-creators"
import "./Article.css"

const {confirm} = Modal

@connect(state => ({data: state.data.data}), {getData, removeArt})
class Article extends React.Component {
  state = {
    idnex: "",
    visible: false,
    main: {}
  }

  componentDidMount() {
    this.props.getData()
  }
  // id: 0, title: "泉 千春", author: "宮城野 凛 （みやぎの りん）", createTime: "2019 2 1", main: ：:remark
  columns = [
    {title: "作者", dataIndex: "author", key: "author"},
    {title: "发布时间", dataIndex: "createTime", key: "createTime"},
    {title: "标题", dataIndex: "title", key: "title"},
    {
      title: "操作",
      dataIndex: "",
      key: "x",
      render: item => (
        <div>
          <a
            onClick={() => {
              this.showModal(item)
            }}
          >
            详情
          </a>
          &nbsp; &nbsp; &nbsp;
          <a
            onClick={() => {
              this.showDeleteConfirm(item)
            }}
          >
            删除
          </a>
        </div>
      )
    }
  ]
  //删除文章
  showDeleteConfirm = item => {
    confirm({
      title: "您确定删除吗?",
      okText: "确定",
      okType: "danger",
      cancelText: "取消",
      onOk: () => {
        this.props.removeArt(item.id)
        this.props.getData()
      }
    })
  }

  //显示详情
  showModal = item => {
    console.log(item)
    this.setState({
      visible: true,
      main: item
    })
  }

  handleOk = e => {
    this.setState({
      visible: false
    })
  }

  handleCancel = e => {
    this.setState({
      visible: false
    })
  }

  render() {
    const {columns} = this
    const {main} = this.state
    if (this.props.data) {
      var {article} = this.props.data
    }
    return (
      <div style={{padding: "30px"}}>
        <Card
          size="small"
          title=""
          extra={
            <Button
              type="primary"
              onClick={() => {
                this.props.history.push("/article/addArticle")
              }}
            >
              添加文章
            </Button>
          }
          style={{width: "100%"}}
        >
          <Table
              rowKey="_id" 
            columns={columns}
            expandedRowRender={record => (
              <p style={{margin: 0}}>{record.description}</p>
            )}
            dataSource={article || []}
            className="modelTable"
          />
        </Card>

        <div>
          <Modal
            title={main.title}
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <div>作者:{main.author}</div>
            <div>备注:{main.description}</div>
            <div>时间:{main.createTime}</div>
            <div>内容:{main.main}</div>
          </Modal>
        </div>
      </div>
    )
  }
}

export default Article
