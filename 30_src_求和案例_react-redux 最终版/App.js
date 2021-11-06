import React, { Component } from 'react'
import CountUI from "./containers/Count"   // 引入的是 count 的容器组件(不是ui组件)
import Person from './containers/Person'  // 引入的是 Person 的容器组件(不是ui组件)
import 'antd/dist/antd.less'
export default class App extends Component {
    render() {
        return (
            <div>
                <CountUI />
                <hr />
                <br />
                <br />
                <br />
                <br />
                <Person />
            </div>
        )
    }
}
