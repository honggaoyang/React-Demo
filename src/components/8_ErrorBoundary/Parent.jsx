import React, { Component } from 'react'
import Child from './Child'
export default class Parent extends Component {

    state = {
        hasError: ''//用于标识子组件是否产生错误
    }

    // 错误边界，只适用于生产环境

    //当parent的子组件出现报错的时候，会触发getDerivedStateFromError 调用并携带错误信息
    static getDerivedStateFromError(error) {
        console.log(error);
        return { hasError: error }
    }

    componentDidCatch(){
        console.log("此处统计错误，反馈给服务器，用于通知编码人员进行bug的解决");
    }

    render() {
        return (
            <div>
                {this.state.hasError ? <h2>当前网络不稳定，请稍后再试</h2> : <Child />}
            </div>
        )
    }
}
