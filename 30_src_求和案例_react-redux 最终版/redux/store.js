/**
 * 该文件专门用于暴漏一个 store 对象，整个应用是有一个 store 对象
 */

//  引入 createStore 专门用于创建 redux 中最为核心的 store 对象
import { createStore, applyMiddleware } from 'redux'


//开发者配置项
// import { composeWithDevTools } from 'redux-devtools-extension'

// 引入 redux-thunk 用于支持异步action
import thunk from 'redux-thunk'

// 引入汇总之后的reducer
import reducer from './reducers'


// const store = createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))
const store = createStore(reducer, applyMiddleware(thunk))

export default store