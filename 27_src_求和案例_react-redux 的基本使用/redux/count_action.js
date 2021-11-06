/**
 * 1.该文件专门为Count组件生产action对象
 */
import { INCREMENT, DECREMENT } from './constant'
// import store from './store'


//同步Action 返回是一个{} 对象
export const createIncrementAction = (data) => ({ type: INCREMENT, data: data })

//同步Action 返回是一个{} 对象
export function createDecrementAction(data) {
    return {
        type: DECREMENT,
        data: data
    }
}

//异步Action 返回时一个function 函数,异步Action中一般都会调用同步Action，异步action不是必须要用的
export function createIncrementAsyncAction(data, time) {
    // return () => {
    //     setTimeout(() => {
    //         store.dispatch(createIncrementAction(data))
    //     }, time)
    // }

    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time)
    }
}

