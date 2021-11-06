import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Header from "./components/Header" // Header 是一般组件
import Home from './pages/Home' // Home 是路由组件
import About from './pages/About'  // About 是路由组件
import MyNavLink from './components/MyNavLink'
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
                            <li><MyNavLink to="/about">About</MyNavLink></li>
                            <li><MyNavLink to="/home/a">Home</MyNavLink></li> 
                        </ul>
                    </div>
                    <div className="content">
                        {/* 注册路由 */}
                        <Switch>
                            <Route path="/about" component={About} />
                            <Route exact={true} path="/home" component={Home} /> 
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}
