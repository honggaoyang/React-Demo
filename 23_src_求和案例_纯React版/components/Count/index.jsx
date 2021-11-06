import React, { Component } from 'react'
import { Button, Space, Card } from 'antd';



export default class Count extends Component {

    state = { count: 0 }


    // 加法
    increment = () => {
        const { value } = this.selctVal// 选中的数字
        const { count } = this.state; // 获取原来状态
        this.setState({ count: count + value * 1 }) //修改状态
    }

    // 减法
    decrement = () => {
        const { value } = this.selctVal// 选中的数字
        const { count } = this.state; // 获取原来状态
        this.setState({ count: count - value * 1 }) //修改状态
    }

    // 奇数在加
    incrementIfOdd = () => {
        const { value } = this.selctVal// 选中的数字
        const { count } = this.state; // 获取原来状态
        if (count % 2 !== 0) {
            this.setState({ count: count + value * 1 }) //修改状态
        }

    }

    // 异步在加
    incrementAsync = () => {
        const { value } = this.selctVal// 选中的数字
        const { count } = this.state; // 获取原来状态
        setTimeout(() => {
            this.setState({ count: count + value * 1 }) //修改状态
        }, 500);
    }

    render() {
        return (
            <div>
                <Card>
                    <h3>当前求和为：{this.state.count}</h3>
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