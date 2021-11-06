import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {


    getNewsData = () => {
        axios.get('https://localhost:3000/api1/getTime').then(
            response => console.log("成功了", response.data),
            error => console.log("失败了", error)
        )
    }

    getPoetryDate = () => {
        axios.get('https://localhost:3000/hong/singlePoetry').then(
            response => console.log("成功了", response.data),
            error => console.log("失败了", error)
        )
    }

    render() {
        return (
            <div>
                <button onClick={this.getNewsData}>获取网易新闻</button>
                <button onClick={this.getPoetryDate}>获取古诗词</button>
            </div>
        )
    }
}
