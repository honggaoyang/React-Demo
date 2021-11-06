import { ADD_PERSON } from '../constant'

// 初始化状态
const initState = [{ id: '001', name: 'tom', age: 15 }]

export default function personRedicer(preState = initState, action) {
    const { data, type } = action

    switch (type) {
        case ADD_PERSON:  //ADD_PERSON 添加一个人
            return [data, ...preState]

        default:
            return preState
    }
}