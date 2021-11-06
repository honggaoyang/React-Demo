import React from 'react'
import ReactDOM from 'react-dom'

// 类组件
// class Demo3 extends React.Component {
//     state = { count: 1 }

//     myRef = React.createRef()

//     show = () => {
//         alert(this.myRef.current.value)
//     }

//     handleClick = () => {
//         this.setState(state => ({ count: state.count + 1 }))
//     }

//     //卸载组件
//     unmount = () => {
//         ReactDOM.unmountComponentAtNode(document.getElementById("root"))
//     }

//     componentWillUnmount() {
//         clearInterval(this.timer)
//     }

//     componentDidMount() {
//         this.timer = setInterval(() => {
//             this.setState(state => ({ count: state.count + 1 }))
//         }, 1000)

//     }



//     render() {
//         return (
//             <div>
//                 <input type="text" ref={this.myRef} />
//                 <h1>当前求和为：{this.state.count}</h1>
//                 <button onClick={this.handleClick}>点我+1</button>
//                 <button onClick={this.unmount}>卸载组件</button>
//                 <button onClick={this.show}>显示内容</button>
//             </div>
//         )
//     }
// }

//函数组件
function Demo3() {
    const [count, setCount] = React.useState(0)
    const myRef = React.useRef()
    React.useEffect(() => {
        let timer = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])// 相当于两个组件，后面数组写谁就是监听谁，不写都监听，空数组谁也不监听

    //提示输入的回调
    function show(){
        alert(myRef.current.value)
    }

    // 加1回调
    function add() {
        // setCount(count + 1)  //第一种写法
        setCount(count => count + 1)
    }

    // 卸载组件回调
    function unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById("root"))
    }

    return (
        <div>
            <input type="text" ref={myRef} />
            <h4>当前求和为：{count}</h4>
            <button onClick={add}>点我+1</button>
            <button onClick={unmount}>卸载组件</button>
            <button onClick={show}>显示内容</button>
        </div>
    )
}

export default Demo3;
