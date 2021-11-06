import React, { Component, lazy, Suspense } from 'react'
import { NavLink, Route, BrowserRouter } from 'react-router-dom'
import './index.css'
// import Home from './Home'
// import About from './About'
import Loading from './Loading'

const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))

export default class Demo2 extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <h3>React Router</h3>
                    <div className="container">
                        <div className="menu">
                            <ul>
                                {/* 编写路由链接 */}
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to="/home">Home</NavLink></li>
                            </ul>
                        </div>
                        <div className="content">
                            {/* 注册路由 */}
                            <Suspense fallback={<Loading />}>
                                <Route path="/about" component={About} />
                                <Route path="/home" component={Home} />
                            </Suspense>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}
