import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'

export default class NavBarHere extends Component {
  render() {
    return (
        
  <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="/home"></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/Styles">styles</Nav.Link>
      <Nav.Link href="/Cart">Cart</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

    )

    
  }
}
