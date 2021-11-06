import React, { Component } from 'react'
import { Link, Route } from "react-router-dom"
import Detail from './Detail'

export default class Message extends Component {
    state = {
        messageArr: [
            { id: '01', title: 'Message1', content: '我是message信息内容1' },
            { id: '02', title: 'Message2', content: '我是message信息内容2' },
            { id: '03', title: 'Message3', content: '我是message信息内容3' },
        ]
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messageArr.map((msg) => {
                            return (
                                <li key={msg.id}>
                                    {/* 向路由组件传递params参数 */}
                                    <Link to={`/home/message/detail/${msg.id}/${msg.title}`}>{msg.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                {/* 声明接收params参数 */}
                <Route path='/home/message/detail/:id/:title' component={Detail} />
            </div>
        )
    }
}
