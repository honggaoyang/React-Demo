import React, { Component } from 'react'
import { Button, Space, Card } from 'antd';


// 引入action
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/actions/count'

// 引入 connect 用于连接UI组件与redux
import { connect } from 'react-redux'

// 定义UI组件
class Count extends Component {

    // 加法
    increment = () => {
        const { value } = this.selctVal// 选中的数字
        this.props.createIncrementAction(value * 1)
    }

    // 减法
    decrement = () => {
        const { value } = this.selctVal// 选中的数字
        this.props.createDecrementAction(value * 1)
    }

    // 奇数在加
    incrementIfOdd = () => {
        const { value } = this.selctVal// 选中的数字
        if (this.props.count % 2 !== 0) {
            this.props.createIncrementAction(value * 1)
        }
    }

    // 异步在加
    incrementAsync = () => {
        const { value } = this.selctVal// 选中的数字 
        this.props.createIncrementAsyncAction(value * 1, 1000)
    }

    render() {
        return (
            <div>
                <h1>Person组件,下方组件总人数为：{this.props.personCount}</h1>
                <Card>
                    <h3>当前求和为：{this.props.count}</h3>
                </Card>
                <br />
                <Space>
                    <select style={{ width: 120 }} ref={c => { this.selctVal = c }} >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>

                    <Button onClick={this.increment}>+</Button>
                    <Button onClick={this.decrement}>-</Button>
                    <Button onClick={this.incrementIfOdd}>当前求和为奇数在加</Button>
                    <Button onClick={this.incrementAsync}>异步加</Button>
                </Space>
            </div>
        )
    }
}

// 使用connect()(ConutUI) 创建并暴露一个Count的容器组件
export default connect(
    state => ({ count: state.count, personCount: state.person.length }),
    {
        createIncrementAction,
        createDecrementAction,
        createIncrementAsyncAction,
    }

)(Count)