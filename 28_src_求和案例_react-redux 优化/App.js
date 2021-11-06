import React, { Component } from 'react'
import CountUI from "./containers/Count"
import 'antd/dist/antd.less'
export default class App extends Component {
    render() {
        return (
            <div>
                <CountUI />
            </div>
        )
    }
}
