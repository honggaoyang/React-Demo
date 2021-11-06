import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import "./index.css"

export default class Header extends Component {

    // 对接受的props进行：类型 必要性的限制
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }


    // 键盘事件的回掉
    handleKeyUp = (event) => {
        // 结构赋值获取 target, keyCode
        const { target, keyCode } = event;

        // 判断是否是回车按键
        if (keyCode !== 13) return

        // 添加的todo名字不能为空
        if (target.value.trim() === '') {
            alert("输入不能为空")
            return
        }

        // 准备一个todo对象
        const todoObj = { id: nanoid(), name: target.value, done: false }

        // 将todoObj传递给obj
        this.props.addTodo(todoObj)

        // 清空输入框
        target.value = ""
    }


    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="输入名称，按回车键确认" />
            </div>
        )
    }
}
