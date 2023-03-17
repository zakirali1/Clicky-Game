import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

function Header() {

  return (
    <>
    <Container className="header-class">
      
      <Row>
        <Col md={4}>
      <h2 className="header-title">Clicky Game</h2>
        </Col>
        <Col md={4}>
          <h2 className="header-title">Placeholder</h2>
          </Col>
          <Col md={4}>
          <h2 className="header-title">Score</h2>
          </Col>
      </Row>
      
    </Container>
   
    </>
  
  )
}

export default Header