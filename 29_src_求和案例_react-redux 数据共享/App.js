import React, { Component } from 'react'
import CountUI from "./containers/Count"
import Person from './containers/Person'
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
