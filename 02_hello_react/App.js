// 创建 “外壳” 组件App

import React, { Component } from "react"

import Hello from "./components/Hello"
import Welcome from "./components/Welcome/Welcome"


// 创建并暴露App组件
export default class App extends Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome />
                <p>1.组件写到文件夹下 Welcome </p>
                <p>2.组件文件夹下名字改成index，可以省略不写 Hello</p>
                <p>3.防止样式冲突，样式模块化,文件加上module</p>
                <p>4.提示快捷键插件</p>
            </div >
        )
    }
}


