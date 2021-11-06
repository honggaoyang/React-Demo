import React, { Component, Fragment } from 'react'
import Demo from './components/1_setState'
import Demo2 from './components/2_lazyLoad'
import Demo3 from './components/3_hooks'
import Demo4 from './components/4_fragment'
import Demo5 from './components/5_context'
import Demo6 from './components/6_optimze 组件优化'
import Demo7 from './components/7_renderProps'
import Demo8 from './components/8_ErrorBoundary/Parent'

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <h5 style={{ background: '#CCC' }}>setState两种方式</h5>
                <Demo />
                <hr />
                <h5 style={{ background: '#CCC' }}>路由懒加载</h5>
                <Demo2 />
                <h5 style={{ background: '#CCC' }}>Hook</h5>
                <Demo3 />
                <h5 style={{ background: '#CCC' }}>Fragment</h5>
                <Demo4 />
                <h5 style={{ background: '#CCC' }}>Context</h5>
                <Demo5 />
                <h5 style={{ background: '#CCC' }}>optimze 组件优化</h5>
                <Demo6 />
                <h5 style={{ background: '#CCC' }}>renderProps</h5>
                <Demo7 />
                <h5 style={{ background: '#CCC' }}>8_ErrorBoundary错误边界</h5>
                <Demo8 />
            </Fragment>
        )
    }
}
