import React from 'react';
import { Layout } from 'antd';
import { GithubFilled } from '@ant-design/icons';
import '../css/Navbar.css';
import logo from '../assets/img.jpg';

const { Header } = Layout;

export default function Navbar() {
    return (
        <Header className='container'>
            <ul className='left-ul'>
                <img src={logo} alt="buendoc" className="image" />
            </ul>
            <ul className='right-ul'>
                <a href="!#"><GithubFilled className='github-icon'/></a>
            </ul>
        </Header>
    )
};

