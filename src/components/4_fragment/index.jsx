import React, { Component, Fragment } from 'react'

export default class Demo4 extends Component {
    render() {
        return (
            <Fragment>
                <p>fragment 可以去的多余的div，防止div多层嵌套</p>
                <p>也可以写成空标签，</p>
            </Fragment>
        )
    }
}
