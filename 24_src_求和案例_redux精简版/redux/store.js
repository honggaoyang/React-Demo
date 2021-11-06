/**
 * 该文件专门用于暴漏一个 store 对象，整个应用是有一个 store 对象
 * 
 */

//  引入 createStore 专门用于创建 redux 中最为核心的 store 对象
import { createStore } from 'redux'
// 引入为 Count 组件服务的 reducer.js
import countReducer from './count_reducer'

const store = createStore(countReducer)

export default store