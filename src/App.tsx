import React from 'react';
import { Col, Row } from 'antd';
import 'antd/dist/antd.css';
import Navbar from './components/Navbar';
import HeaderTitle from './components/HeaderTitle';
import RootComponent from './components/RootComponent';


function App() {
  return (
    <Row>
      <Col xs={24}>
        <Navbar />
        <HeaderTitle />
      </Col>
      <Col xs={24}>
        <RootComponent />
      </Col>

    </Row>
  );
}

export default App;
