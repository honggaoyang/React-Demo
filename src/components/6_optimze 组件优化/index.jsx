import React, { Component } from 'react'


/**
 * render 执行次数问题
 * 
 * 当不给子组件传递属性时候，子组件还是会render ，添加阀门生命周期钩子
 * 或者 修改状态为空的时候，
 * 
 *  使用阀门生命周期钩子   或者   修改 Component组件为 PureComponent
 * 
 */
export default class A extends Component {

    state = { name: 'zs' }

    updateName = () => {
        this.setState({ name: 'ls' })
    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log(this.props, this.state); // 目前的props和state
        // console.log(nextProps, nextState); // 接下来要变化的 props 和 state
        return !(this.state.name === nextState.name)
    }

    render() {
        console.log("A--render");
        return (
            <div style={{ backgroundColor: 'skyblue', padding: '10px' }}>
                <p>我的名字是：{this.state.name}</p>
                <button onClick={this.updateName}>修改名字</button>
                <B name={this.state.name}></B>
            </div>
        )
    }
}
class B extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return !(this.props.name === nextProps.name)
    }

    render() {
        console.log("B--render");
        return (
            <div style={{ backgroundColor: '#CCC', padding: '10px', marginTop: '20px' }}>
                接收到的name是：{this.props.name}
            </div>
        )
    }
}
