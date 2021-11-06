import React, { Component } from 'react'
import Count from '../1_setState'

export default class Parent extends Component {


    render() {

        return (
            <div style={{ width: '400px', backgroundColor: 'orange', padding: '8px' }}>
                <h3>我是Parent组件</h3>
                <A render={name => <Count name={name} />} />
            </div>
        )
    }
}

class A extends Component {

    state = { AName: 'TOM' }

    render() {
        return (
            <div style={{ width: '100%', backgroundColor: 'skyblue', padding: '8px', boxSizing: 'border-box' }}>
                <h3>我是A组件</h3>
                {/* 相当于预留一个位置,相当于vue里面插槽 */}
                {this.props.render(this.state.AName)}
            </div>
        )
    }
}

// class B extends Component {
//     render() {

//         return (
//             <div style={{ width: '100', backgroundColor: '#CCC', padding: '8px' }}>
//                 <h3>我是B组件{this.props.name}</h3>
//             </div>
//         )
//     }
// }


