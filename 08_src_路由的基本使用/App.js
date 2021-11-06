import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
export default class App extends Component {
    render() {
        return (
            <div>
                <h3>React Router</h3> 
                    <div className="container">
                        <div className="menu">
                            <ul>
                                {/* <li className="active">About</li>
                            <li>Home</li> */}
                                {/* 编写路由链接 */}
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/home">Home</Link></li>
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
