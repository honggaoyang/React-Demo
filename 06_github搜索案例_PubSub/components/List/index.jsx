import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import "./index.css"
export default class List extends Component {

    // 初始化状态
    state = {
        users: [], //users初始值为数组
        isFirst: true,//是否第一次打开页面
        isLoading: false,//是否加载中
        err: '',//存储请求相关错误信息
    }

    componentDidMount() {
        //订阅消息
        this.token = PubSub.subscribe("hong", (msg, stateObj) => {
            this.setState(stateObj)
        })
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }

    render() {
        const { users, isFirst, isLoading, err } = this.state
        return (
            <div>
                <div className="conent">
                    <ul>
                        {
                            isFirst ? <h5>请输入关键词点击搜索</h5> :
                                isLoading ? <h5>Loading...</h5> :
                                    err ? <h5 style={{ color: 'red' }}>{err}</h5> :
                                        users.map((userObj) => {
                                            return (
                                                <li key={userObj.id}>
                                                    <a href={userObj.html_url} rel="noreferrer" target="_blank">
                                                        <img alt="我是头像" src={userObj.avatar_url} />
                                                    </a>
                                                    <span>{userObj.login}</span>
                                                </li>
                                            )
                                        })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
