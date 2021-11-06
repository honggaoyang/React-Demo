import React, { Component } from 'react'

export default class Demo extends Component {

    state = { count: 1 }


    // 对象式的 getState
    // handleClick = () => {

    //     // 获取对象中count值
    //     const { count } = this.state;

    //     // 更新状态
    //     this.setState({ count: count + 1 }, () => {
    //         console.log(this.state.count);
    //     })
    // }

    // 函数式的 getState
    handleClick = () => {  

        // 更新状态
        this.setState((state, props) => {
            console.log(state);
            console.log(props);
            return { count: state.count + 1 }
        })
    }

    render() {
        return (
            <div>
                <h1>当前求和为：{this.state.count}</h1>
                <button onClick={this.handleClick}>点我+1</button>
            </div>
        )
    }
}
