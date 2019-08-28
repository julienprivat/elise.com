// == Import : npm
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// == Import : local

import './main.scss';

// == Composant
const Main = () => (
  <div id="main">
    <Container>
      <Row>
        <Col xs={12} sm={8} md={6}>

        </Col>
        <Col xs={12} sm={4} md={4}>
          
        </Col>
        <Col xs={0} sm={0} md={2}>
          
        </Col>
      </Row>
    </Container>
  </div>
);

// == Export
export default Main;
