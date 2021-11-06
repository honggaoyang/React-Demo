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
                                    {/* 向路由组件传递 params 参数 */}
                                    {/* <Link to={`/home/message/detail/${msg.id}/${msg.title}`}>{msg.title}</Link> */}

                                    {/* 向路由组件传递 search 参数 */}
                                    {/* <Link to={`/home/message/detail/?id=${msg.id}&title=${msg.title}`}>{msg.title}</Link> */}

                                    {/* 向路由组件传递 state 参数 */}
                                    <Link replace={true} to={{ pathname: '/home/message/detail', state: { id: msg.id, title: msg.title } }}>{msg.title}</Link>
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
            </div>
        )
    }
}
