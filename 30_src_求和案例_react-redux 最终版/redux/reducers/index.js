/**
 * 该文件用于汇总所有的 reducer 为一个总的 reducer ，交给store
 */


// 引入为 Count 组件服务的 reducer.js
import count from './count'

// 引入为 Person 组件服务的 reducer.js
import person from './person'

//  引入 combineReducers 用于汇总多个reducer
import { combineReducers } from 'redux'


// 汇总所有的 reducer 变为一个总的 reducer 
export default combineReducers({
    count,
    person
})
