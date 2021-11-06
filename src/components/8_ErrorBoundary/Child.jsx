import React, { Component } from 'react'

export default class Child extends Component {

    state = {
        // users: [
        //     { id: '001', name: 'Tom', age: 15 },
        //     { id: '002', name: 'jack', age: 13 },
        //     { id: '003', name: 'peiqi', age: 11 },
        // ]

        users: "123"
    }

    render() {
        return (
            <div>
                <p>我是Child组件</p>
                {
                    this.state.users.map((userObj) => {
                        return <p key={userObj.id}>{userObj.name}---{userObj.age}</p>
                    })
                }
            </div>
        )
    }
}
