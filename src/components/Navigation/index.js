// == Import : npm
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'


// == Import : local
import './navigation.scss';

// == Composant
const Navigation = () => (
  <div id="navigation">
    <Container>
      <Row>
        <Col xs={12} md={6} className="searchPart">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Categories</Form.Label>
            <Form.Control as="select">
              <option>ALL</option>
              <option>COMMERCIAL</option>
              <option>EDITORIAL</option>
              <option>CONTACT</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Styles</Form.Label>
            <Form.Control as="select">
              <option>ALL</option>
              <option>WOMEN</option>
              <option>MEN</option>
              <option>CHILDREN</option>
            </Form.Control>
          </Form.Group>
          <div className="button">Contact</div>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>search</Form.Label>
            <Form.Control type="text" placeholder="SEARCH" />
          </Form.Group>
        </Col>
        <Col xs={6}>
          
        </Col>
      </Row>
    </Container>

  </div>
);

// == Export
export default Navigation;
