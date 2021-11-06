import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {

    back = () => {
        this.props.history.goBack()
    }

    forward = () => {
        this.props.history.goForward()
    }


    go = () => {
        this.props.history.go(-2)
    }

    render() {
        return (
            <div>
                <h3>React Router</h3>
                <button onClick={this.back}>回退</button>
                <button onClick={this.forward}>前进</button>
                <button onClick={this.go}>go</button>
            </div>
        )
    }
}

// withRouter 可以加工一般组件，让一般组件具备路由组件所特有的API
// withRouter 返回值是一个新组件
export default withRouter(Header)
