import React, { Component } from 'react'
// import qs from 'querystring'

// let obj = { name: 'tom', age: 18 }  // name=tom&age=18  urlencoded 编码
// // 对象转 urlencoded 编码
// console.log(qs.stringify(obj));


// let obj2="name=tom&age=18"
// // // urlencoded 编码转换成对象
// console.log(qs.parse(obj2));

const detailContent = [
    { id: '01', content: '你好中国' },
    { id: '02', content: '你好ANS' },
    { id: '03', content: '你好未来的自己' },
]
export default class Detail extends Component {

    render() {
        console.log(this.props);

        // 接收 param 参数
        // const { id, title } = this.props.match.params

        // 接收 search 参数
        // const { search } = this.props.location
        // const { id, title } = qs.parse(search.slice(1))

        // 接收 state 参数
        const { id, title } = this.props.location.state || {}

        // 查找内容
        const findResult = detailContent.find((detail) => {
            return detail.id === id;
        }) || {}
        return (
            <div>
                <p>ID：{id}</p>
                <p>标题：{title}</p>
                <p>内容：{findResult.content}</p>
            </div>
        )
    }
}
