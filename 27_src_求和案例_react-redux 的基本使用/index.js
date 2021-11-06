// 入口文件

// 引入 react 核心库
import React from 'react'
// 引入 reactDOM
import ReactDOM from 'react-dom'

import store from './redux/store'

// 引入 App 组件
import App from './App'

// 渲染App到页面
ReactDOM.render(<App />, document.getElementById("root"))

//  // 检测 redux 中状态的变化，只有变化，就渲染App到页面
store.subscribe(() => {
    ReactDOM.render(<App />, document.getElementById("root"))
})