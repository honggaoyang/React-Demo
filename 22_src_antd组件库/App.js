import React, { Component } from 'react'
import { Button,DatePicker } from 'antd';
import { WechatOutlined, WeiboCircleOutlined,SearchOutlined } from '@ant-design/icons';

import 'antd/dist/antd.less'
export default class App extends Component {
    render() {
        return (
            <div>
                123.
                <button>click</button>
                <Button type="primary">Primary Button</Button>
                <Button type="ghost">Primary Button</Button>
                <Button type="dashed">Primary Button</Button>
                <Button type="link">Primary Button</Button>
                <Button type="text">Primary Button</Button>
                <Button type="default">Primary Button</Button>
                <Button type="primary" icon={<SearchOutlined />}>
                    Search
                </Button>
                <WechatOutlined />
                <WeiboCircleOutlined />
                <DatePicker/>
            </div>
        )
    }
}
