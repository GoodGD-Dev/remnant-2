import { Navbar, Nav, Button, Form, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './style.css';
import Logo from "../../assets/remnant logo.png";

const navItems = [
  { label: "Checklist", path: "/checklist", disabled: false },
  { label: "Wiki", path: "/wiki", disabled: true },
  { label: "Builds", path: "/builds", disabled: true },
  { label: "Community", path: "/community", disabled: true }
];

const Header = () => {
  const location = useLocation();

  const getActiveLinkStyle = (path) => 
    location.pathname === path ? { textDecoration: 'line-through', color: 'white' } : {};

  return (
    <Navbar bg="black" variant="dark" expand="lg" data-aos="fade-right">
      <Container>
        <Navbar.Brand as={Link} to="/" data-aos="fade-down" data-aos-duration="700">
          <h1 className='text-uppercase'>
            <img className='logo-img' src={Logo} alt="Remnant 2 Logo" />
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navItems.map((item, index) => (
              <Nav.Link
                key={item.label}
                as={Link}
                to={item.path}
                className="fs-5"
                style={getActiveLinkStyle(item.path)}
                disabled={item.disabled}
                data-aos="fade-down"
                data-aos-duration={800 + index * 100}
              >
                {item.label}
              </Nav.Link>
            ))}
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