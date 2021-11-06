import React, { Component } from 'react'
const detailContent = [
    { id: '01', content: '你好中国' },
    { id: '02', content: '你好ANS' },
    { id: '03', content: '你好未来的自己' },
]
export default class Detail extends Component {

    render() {
        console.log(this.props);

        // 接收param参数
        const { id, title } = this.props.match.params

        // 查找内容
        const findResult = detailContent.find((detail) => {
            return detail.id === id;
        })
        return (
            <div>
                <p>ID：{id}</p>
                <p>标题：{title}</p>
                <p>内容：{findResult.content}</p>
            </div>
        )
    }
}
