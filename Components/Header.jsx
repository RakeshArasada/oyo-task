import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <NavDropdown title='Banglore' id="basic-nav-dropdown"></NavDropdown>
          <NavDropdown title='Chennai' id="basic-nav-dropdown"></NavDropdown>
          <NavDropdown title='Delhi' id="basic-nav-dropdown"></NavDropdown>
          <NavDropdown title='Gurgaon' id="basic-nav-dropdown"></NavDropdown>
          <NavDropdown title='Hyderabad' id="basic-nav-dropdown"></NavDropdown>
          <NavDropdown title='Kolkata' id="basic-nav-dropdown"></NavDropdown>
          <NavDropdown title='Mumbai' id="basic-nav-dropdown"></NavDropdown>
          <NavDropdown title='Noida' id="basic-nav-dropdown"></NavDropdown>
          <NavDropdown title='Pune' id="basic-nav-dropdown"></NavDropdown>
          <Nav.Link className="active">All Cities</Nav.Link>
        </Container>
      </Navbar>
  )
}

export default Header