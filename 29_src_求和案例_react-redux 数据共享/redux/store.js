/**
 * 该文件专门用于暴漏一个 store 对象，整个应用是有一个 store 对象
 * 
 */

//  引入 createStore 专门用于创建 redux 中最为核心的 store 对象
import { createStore, applyMiddleware, combineReducers } from 'redux'

// 引入为 Count 组件服务的 reducer.js
import countReducer from './reducers/count'
// 引入为 Person 组件服务的 reducer.js
import personReducer from './reducers/person'

// 引入 redux-thunk 用于支持异步action
import thunk from 'redux-thunk'

// 汇总所有的 reducer 变为一个总的 reducer 
const allReducer = combineReducers({
    count: countReducer,
    person: personReducer
})

const store = createStore(allReducer, applyMiddleware(thunk))

export default store