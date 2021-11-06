/**
 * 1.该文件专门为Count组件生产action对象
 */
import { INCREMENT, DECREMENT } from './constant'
export const createIncrementAction = (data) => ({ type: INCREMENT, data: data })


export function createDecrementAction(data) {
    return {
        type: DECREMENT,
        data: data
    }
}

