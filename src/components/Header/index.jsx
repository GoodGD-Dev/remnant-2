import { Navbar, Nav, Button, Form, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './style.css';
import Logo from "../../assets/remnant logo.png";

const Header = () => {
  const location = useLocation(); // Hook para acessar a URL atual

  // Função que aplica o estilo de risco ao link da página atual
  const getActiveLinkStyle = (path) => {
    return location.pathname === path ? { textDecoration: 'line-through', color: 'white' } : {};
  };

  return (
    <Navbar bg="black" variant="dark" expand="lg" data-aos="fade-right">
      <Container>
        <Navbar.Brand data-aos="fade-down" data-aos-duration="700">
          <Link to="/">
            <h1 className='text-uppercase'>
              <img className='logo-img' src={Logo} alt="Remnant 2 Logo" />
            </h1>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link data-aos="fade-down" data-aos-duration="800"
              className="fs-5"
              as={Link}
              to="/checklist"
              style={getActiveLinkStyle('/checklist')}>
              Checklist
            </Nav.Link>
            <Nav.Link data-aos="fade-down" data-aos-duration="900"
              className="fs-5"
              as={Link}
              to="/wiki"
              style={getActiveLinkStyle('/wiki')}
              disabled>
              Wiki
            </Nav.Link>
            <Nav.Link data-aos="fade-down" data-aos-duration="1000"
              className="fs-5"
              as={Link}
              to="/builds"
              style={getActiveLinkStyle('/builds')}
              disabled>
              Builds
            </Nav.Link>
            <Nav.Link data-aos="fade-down" data-aos-duration="1100"
              className="fs-5"
              as={Link}
              to="/community"
              style={getActiveLinkStyle('/community')}
              disabled>
              Community
            </Nav.Link>
          </Nav>
          <Form className="d-flex me-2 mt-3 mb-3 m-lg-0" data-aos="fade-down" data-aos-duration="1200">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <Form className="d-flex justify-content-center" data-aos="fade-down" data-aos-duration="1300">
            <Button variant="outline-light" className="me-2">Sign In</Button>
            <Button variant="outline-light">Sign Up</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
