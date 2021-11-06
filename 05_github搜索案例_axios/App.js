import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
export default class App extends Component {
    // 初始化状态
    state = {
        users: [], //users初始值为数组
        isFirst: true,//是否第一次打开页面
        isLoading: false,//是否加载中
        err: '',//存储请求相关错误信息
    }

    // 更新App的state
    updateAppState = (stateObj) => {
        this.setState(stateObj)
    }


    render() {


        return (
            <div className="container" style={{ width: '500px', margin: 'auto' }}>
                <Search updateAppState={this.updateAppState} />
                <List {...this.state} />
            </div>
        )
    }
}
