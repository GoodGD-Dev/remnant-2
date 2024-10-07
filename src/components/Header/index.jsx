import React from 'react';
import { Navbar, Nav, Button, Form, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import './style.css';

const Header = () => {
  const location = useLocation(); // Hook para acessar a URL atual

  // Função que aplica o estilo de risco ao link da página atual
  const getActiveLinkStyle = (path) => {
    return location.pathname === path ? { textDecoration: 'line-through', color: 'white' } : {};
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><h1>Remnant 2</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              className="fs-5"
              as={Link}
              to="/checklist"
              style={getActiveLinkStyle('/checklist')} // Aplica o estilo condicional
            >
              Checklist
            </Nav.Link>
            <Nav.Link
              className="fs-5"
              as={Link}
              to="/test123"
              style={getActiveLinkStyle('/test123')} // Aplica o estilo condicional
            >
              Wiki
            </Nav.Link>
            <Nav.Link
              className="fs-5"
              as={Link}
              to="/builds"
              style={getActiveLinkStyle('/builds')} // Aplica o estilo condicional
            >
              Builds
            </Nav.Link>
            <Nav.Link
              className="fs-5"
              as={Link}
              to="/community"
              style={getActiveLinkStyle('/community')} // Aplica o estilo condicional
            >
              Community
            </Nav.Link>
          </Nav>
          <Form className="d-flex me-2">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <Form className="d-flex">
            <Button variant="outline-light" className="me-2">Sign In</Button>
            <Button variant="outline-light">Sign Up</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
