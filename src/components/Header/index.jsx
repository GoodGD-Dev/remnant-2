import { Navbar, Nav, Button, Form, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './style.css';
import Logo from "../../assets/remnant logo.png";

const navButtons = ["Checklist", "Wiki", "Builds", "Community", "Search", "Sign In", "Sign Up"];

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
              {navButtons[0]}
            </Nav.Link>
            <Nav.Link data-aos="fade-down" data-aos-duration="900"
              className="fs-5"
              as={Link}
              to="/wiki"
              style={getActiveLinkStyle('/wiki')}
              disabled>
              {navButtons[1]}
            </Nav.Link>
            <Nav.Link data-aos="fade-down" data-aos-duration="1000"
              className="fs-5"
              as={Link}
              to="/builds"
              style={getActiveLinkStyle('/builds')}
              disabled>
              {navButtons[2]}
            </Nav.Link>
            <Nav.Link data-aos="fade-down" data-aos-duration="1100"
              className="fs-5"
              as={Link}
              to="/community"
              style={getActiveLinkStyle('/community')}
              disabled>
              {navButtons[3]}
            </Nav.Link>
          </Nav>
          <Form className="d-flex me-2 mt-3 mb-3 m-lg-0" data-aos="fade-down" data-aos-duration="1200">
            <Form.Control
              type="search"
              placeholder={navButtons[4]}
              className="me-2"
              aria-label="Search"/>
          </Form>
          <Form className="d-flex justify-content-center" data-aos="fade-down" data-aos-duration="1300">
            <Button variant="outline-light" className="me-2">{navButtons[5]}</Button>
            <Button variant="outline-light">{navButtons[6]}</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
