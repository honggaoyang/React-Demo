// 入口文件

// 引入 react 核心库
import React from 'react'
// 引入 reactDOM
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'

// 引入 App 组件
import App from './App'

// 渲染App到页面
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root"))