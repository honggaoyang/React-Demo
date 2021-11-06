// 入口文件

// 引入 react 核心库
import React from 'react'
// 引入 reactDOM
import ReactDOM from 'react-dom'

import store from './redux/store'
import { Provider } from 'react-redux'

// 引入 App 组件
import App from './App'

// 渲染App到页面
ReactDOM.render(
    // 次数需要用 Provider 包裹 App，目的是让App所有的后代容器组件都能接收到store
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root"))

