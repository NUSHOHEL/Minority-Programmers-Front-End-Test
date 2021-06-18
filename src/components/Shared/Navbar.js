import React from 'react';
import { Nav,Navbar } from 'react-bootstrap';
import logo from '../../logo.svg'
import { Link } from 'react-router-dom';
import './Navbar.css'

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
  <Navbar.Brand href="#home"><img src={logo} alt="logo"style={{width:'70px'}} /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav>
  <Nav.Item>
    <Nav.Link ><Link to='/home'> Home</Link> </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link ><Link to='/incubator'>Incubator</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link ><Link to='/learn'>Learn</Link> </Nav.Link>
  </Nav.Item>

</Nav>
</Navbar.Collapse>
</Navbar>
    );
};

export default NavBar;