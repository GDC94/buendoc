import React from 'react';
import { Spin, Space } from 'antd';


export default function Loading() {
    return (
        <div style={{display:'flex', justifyContent:'center', alignItems: 'center'}}>
            <Space size="middle">
                <Spin size="large"/>
            </Space>
        </div>
    )
}
