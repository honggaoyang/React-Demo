import React, { Component } from 'react'
import { Link, Route } from "react-router-dom"
import Detail from './Detail'

export default class Message extends Component {
    state = {
        messageArr: [
            { id: '01', title: '消息1', content: '我是message信息内容1' },
            { id: '02', title: '消息2', content: '我是message信息内容2' },
            { id: '03', title: '消息3', content: '我是message信息内容3' },
        ]
    }

    // 编程式路由导航
    replaceShow = (id, title) => {
        // replace 跳转 + 携带 params 参数
        // this.props.history.replace(`/home/message/detail/${id}/${title}`)

        // replace 跳转 + 携带 search(query) 参数
        // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

        // replace 跳转 + 携带 state 参数
        this.props.history.replace(`/home/message/detail`, { id, title })
    }

    // 编程式路由导航
    pushShow = (id, title) => {
        // push 跳转 + 携带 params 参数
        // this.props.history.push(`/home/message/detail/${id}/${title}`)

        // push 跳转 + 携带 search(query) 参数
        // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)

        // push 跳转 + 携带 state 参数
        this.props.history.push(`/home/message/detail`, { id: id, title: title })
    }

    back = () => {
        this.props.history.goBack()
    }

    forward = () => {
        this.props.history.goForward()
    }


    go = () => {
        this.props.history.go(-2)
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messageArr.map((msg) => {
                            return (
                                <li key={msg.id}>
                                    {/* 向路由组件传递 params 参数 */}
                                    {/* <Link to={`/home/message/detail/${msg.id}/${msg.title}`}>{msg.title}</Link> */}

                                    {/* 向路由组件传递 search 参数 */}
                                    {/* <Link to={`/home/message/detail/?id=${msg.id}&title=${msg.title}`}>{msg.title}</Link> */}

                                    {/* 向路由组件传递 state 参数 */}
                                    <Link to={{ pathname: '/home/message/detail', state: { id: msg.id, title: msg.title } }}>{msg.title}</Link>
                                    <button onClick={() => { this.pushShow(msg.id, msg.title) }}>push查看</button>
                                    <button onClick={() => { this.replaceShow(msg.id, msg.title) }}>replace查看</button>

                                </li>
                            )
                        })
                    }
                </ul>


                <hr />
                {/* 声明接收 params 参数 */}
                {/* <Route path='/home/message/detail/:id/:title' component={Detail} /> */}

                {/* search 参数无需声明接收 */}
                {/* <Route path='/home/message/detail' component={Detail} /> */}

                {/* state 参数无需声明接收 */}
                <Route path='/home/message/detail' component={Detail} />

                <button onClick={this.back}>回退</button>
                <button onClick={this.forward}>前进</button>
                <button onClick={this.go}>go</button>
            </div>
        )
    }
}
