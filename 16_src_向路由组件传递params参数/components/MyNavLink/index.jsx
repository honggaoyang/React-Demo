import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class MyNavLink extends Component {
    render() {
        // const { children } = this.props;
        // console.log(this.props);
        return (
            <div>
                <NavLink activeClassName="hong" {...this.props} />
            </div>
        )
    }
}
