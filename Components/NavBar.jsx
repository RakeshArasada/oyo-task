import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar className="justify-content-end">
      <Container>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/OYO_Rooms_%28logo%29.png/600px-OYO_Rooms_%28logo%29.png?20190710031955" alt="OYO logo" width={80} height={70} />
        <Nav className="ml-auto">
        <img className='mx-2' src={require('../Images/handshake.png')} alt="" width="40" height="auto" />
        <Nav.Link style={{borderRight:'1px solid black'}} className="active">Become a Member</Nav.Link>
        <img className='mx-3' src={require('../Images/portfolio.png')} alt="" width="35" height="auto" />
        <Nav.Link style={{borderRight:'1px solid black'}} className="active">OYO for Business</Nav.Link>
        <img className='mx-3' src={require('../Images/apartment.png')} alt="" width="35" height="auto" />
        <Nav.Link style={{borderRight:'1px solid black'}} className="active">List your property</Nav.Link>
        <img className='mx-3' src={require('../Images/phone.png')} alt="" width="35" height="auto" />
        <Nav.Link style={{borderRight:'1px solid black'}} className="active">0124-6201611</Nav.Link>
        <img className='mx-2' src={require('../Images/globe.png')} alt="" width="35" height="auto" />
        <NavDropdown className='mx-1' style={{borderRight:'1px solid black'}} title="English" id="basic-nav-dropdown">
        </NavDropdown>
        <img className='mx-1' src={require('../Images/user.png')} alt="" width="40" height="auto" />
        <Nav.Link  className="active mx-2">Login/Signup</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;