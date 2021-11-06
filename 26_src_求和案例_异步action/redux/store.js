/**
 * 该文件专门用于暴漏一个 store 对象，整个应用是有一个 store 对象
 * 
 */

//  引入 createStore 专门用于创建 redux 中最为核心的 store 对象
import { createStore,applyMiddleware } from 'redux'
// 引入为 Count 组件服务的 reducer.js
import countReducer from './count_reducer'
// 引入 redux-thunk 用于支持异步action
import thunk from 'redux-thunk'

const store = createStore(countReducer,applyMiddleware(thunk))

export default store