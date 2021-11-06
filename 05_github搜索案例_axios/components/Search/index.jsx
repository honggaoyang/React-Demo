import React, { Component } from 'react'
import axios from 'axios'
import "./index.css"
export default class Search extends Component {

    //搜索
    searchUser = () => {
        // 获取用户输入（连续解构赋值+重命名）
        // const { value } = this.keywordInfo;
        const { keywordInfo: { value: keyword } } = this

        //发送请求前更新App状态
        this.props.updateAppState({ isFirst: false, isLoading: true })

        // 发送网络请求
        axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
            response => {
                //请求成功后通知App更新状态
                this.props.updateAppState({ isLoading: false, users: response.data.items })
            },
            error => {
                //请求失败后通知App更新状态
                this.props.updateAppState({ isLoading: false, err: error.message })
            }
        )

    }

    render() {
        return (
            <div className="search">
                <h5>搜索gitHub用户</h5>
                <input placeholder="输入您搜索的名称" ref={(c) => { this.keywordInfo = c }} /> <button onClick={this.searchUser}>搜索</button>
            </div>
        )
    }
}
