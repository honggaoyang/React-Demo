import React, { Component } from 'react'
import CountUI from "./containers/Count"
import store from './redux/store'
import 'antd/dist/antd.less'
export default class App extends Component {
    render() {
        return (
            <div>
                {/* 给容器组件传递store */}
                <CountUI store={store} />
            </div>
        )
    }
}
