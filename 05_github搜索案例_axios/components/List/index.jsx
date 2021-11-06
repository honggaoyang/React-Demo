import React, { Component } from 'react'
import "./index.css"
export default class List extends Component {



    render() {
        const { users, isFirst, isLoading, err } = this.props

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
                                                    <a href={userObj.html_url} target="_blank">
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
