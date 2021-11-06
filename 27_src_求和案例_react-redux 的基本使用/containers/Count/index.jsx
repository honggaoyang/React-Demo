// 引入 Count 的 UI 组件
import ConutUI from '../../components/Count'

// 引入action
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'

// 引入 connect 用于连接UI组件与redux
import { connect } from 'react-redux'

/**
 *  1.mapStateToProps函数返回是一个对象
 *  2.返回对象中的key就作为传递给ui组件props的key,value就作为传递给ui组件props的value
 *  3.mapStateToPropsy 用于传递状态
 */
function mapStateToProps(state) {
    return { count: state }
}

/**
 *  1.mapDispatchToProps 函数返回是一个对象
 *  2.返回对象中的key就作为传递给ui组件props的key,value就作为传递给ui组件props的value
 *  3.mapDispatchToProps 用于传递操作状态的方法
 */
function mapDispatchToProps(dispatch) {
    return {
        jia: (number) => {
            // 通知redux执行加法
            dispatch(createIncrementAction(number))
        },
        jian: (number) => {
            // 通知redux执行加法
            dispatch(createDecrementAction(number))
        },
        yibujia: (number, timer) => {
            // 通知redux执行加法
            dispatch(createIncrementAsyncAction(number, timer))
        }
    }
}

// 使用connect()(ConutUI) 创建并暴露一个Count的容器组件
const CountContainer = connect(mapStateToProps, mapDispatchToProps)(ConutUI)
export default CountContainer