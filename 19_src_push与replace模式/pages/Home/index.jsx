import React, { Component } from 'react'
import "./index.css"
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'
// import MyNavLink from '../../components/MyNavLink'
import News from "./News"
import Message from "./Message"

export default class Home extends Component {
    render() {
        return (
            <div>
                <div>Home内容</div>
                <div className="home_menu">
                    <ul>
                        <li><NavLink replace={true} to='/home/news'>News</NavLink></li>
                        <li><NavLink replace={true} to='/home/message'>Message</NavLink></li>
                    </ul>
                </div>
                <div>
                    <Switch>
                        <Route path='/home/news' component={News} />
                        <Route path='/home/message' component={Message} />
                        <Redirect to='/home/news' />
                    </Switch>
                </div>
            </div>
        )
    }
}
