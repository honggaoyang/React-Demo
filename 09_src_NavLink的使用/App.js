import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import './App.css'
import Header from "./components/Header" // Header 是一般组件
import Home from './pages/Home' // Home 是路由组件
import About from './pages/About'  // About 是路由组件
export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="menu">
                        <ul>
                            {/* <li className="active">About</li>
                            <li>Home</li> */}
                            {/* 编写路由链接 */}
                            <li><NavLink activeClassName="hong" to="/about">About</NavLink></li>
                            <li><NavLink activeClassName="hong" to="/home">Home</NavLink></li>
                        </ul>
                    </div>
                    <div className="content">
                        {/* 注册路由 */}
                        <Route path="/about" component={About} />
                        <Route path="/home" component={Home} />
                    </div>
                </div>
            </div>
        )
    }
}
