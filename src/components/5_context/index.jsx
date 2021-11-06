import React, { Component } from 'react'

// 创建 Context 容器对象
const MyContext = React.createContext()
export default class A extends Component {

    state = { username: "admin", password: 123456 }

    render() {
        const { username, password } = this.state
        return (
            <div style={{ width: '400px', backgroundColor: 'orange', padding: '8px' }}>
                <h3>我是A组件</h3>
                <p>用户名是：{username} 密码：{password}</p>
                <MyContext.Provider value={{ username, password }}>
                    <B />
                </MyContext.Provider>
            </div>
        )
    }
}

class B extends Component {

    render() {
        return (
            <div style={{ width: '100%', backgroundColor: 'skyblue', padding: '8px', boxSizing: 'border-box' }}>
                <h3>我是B组件</h3>
                <p>从A组件接收到用户名是：？？</p>
                <C />
            </div>
        )
    }
}

// class C extends Component {
//     static contextType = MyContext  // 声明接收 context
//     render() {
//         const { username, password } = this.context
//         return (
//             <div style={{ width: '100', backgroundColor: '#CCC', padding: '8px' }}>
//                 <h3>我是C组件</h3>
//                 <p>从A组件接收到用户名是：{username}--{password}</p>
//             </div>
//         )
//     }
// }

function C() {
    return (
        <div style={{ width: '100', backgroundColor: '#CCC', padding: '8px' }}>
            <h3>我是C组件</h3>
            <p>从A组件接收到用户名是：</p>
            <MyContext.Consumer>
                {value => `${value.username}--${value.password}`}
            </MyContext.Consumer>
        </div>
    )
}

