import React, { Component } from 'react'
import { Button, Space, Card } from 'antd';
// 引入 store 用于获取 redux 中保存的状态
import store from '../../redux/store'
//  引入 actionCreator 专门用于创建active对象
import { createIncrementAction, createDecrementAction } from '../../redux/count_action'


export default class Count extends Component {


    componentDidMount() {
        // 检测 redux 中状态的变化，只有变化，就调用render
        store.subscribe(() => {
            this.setState({})
        })
    }

    // 加法
    increment = () => {
        const { value } = this.selctVal// 选中的数字
        store.dispatch(createIncrementAction(value * 1))
    }

    // 减法
    decrement = () => {
        const { value } = this.selctVal// 选中的数字
        store.dispatch(createDecrementAction(value * 1))
    }

    // 奇数在加
    incrementIfOdd = () => {
        const { value } = this.selctVal// 选中的数字
        const count = store.getState()
        if (count % 2 !== 0) {
            store.dispatch(createIncrementAction(value * 1))
        }

    }

    // 异步在加
    incrementAsync = () => {
        const { value } = this.selctVal// 选中的数字 
        setTimeout(() => {
            store.dispatch(createIncrementAction(value * 1))
        }, 500);
    }

    render() {
        return (
            <div>
                <Card>
                    <h3>当前求和为：{store.getState()}</h3>
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