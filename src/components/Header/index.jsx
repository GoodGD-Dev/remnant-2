import { Navbar, Nav, Button, Form, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/remnant logo.png";
import "./style.css";

// Definição dos itens de navegação
const navItems = [
  { label: "Checklist", path: "/checklist", disabled: false },
  { label: "Wiki", path: "/wiki", disabled: true },
  { label: "Builds", path: "/builds", disabled: true },
  { label: "Community", path: "/community", disabled: true },
];

const Header = () => {
  const location = useLocation(); // Obtém o caminho atual da URL
  const [expanded, setExpanded] = useState(false); // Estado para gerenciar o menu expandido

  // Função para aplicar estilo ao item ativo
  const getActiveLinkStyle = (path) =>
    location.pathname === path
      ? { textDecoration: "line-through", color: "white" }
      : {};

  // Função que fecha o menu quando um item é clicado
  const handleNavItemClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      bg="black"
      variant="dark"
      expand="lg"
      expanded={expanded}
      onToggle={setExpanded}
      data-aos="fade-right"
    >
      <Container>
        {/* Marca do Navbar com logo */}
        <Navbar.Brand
          as={Link}
          to="/"
          data-aos="fade-down"
          data-aos-duration="700"
        >
          <h1 className="text-uppercase">
            <img className="logo-img" src={Logo} alt="Remnant 2 Logo" />
          </h1>
        </Navbar.Brand>

        {/* Botão de alternância para dispositivos móveis */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />

        {/* Menu colapsável */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navItems.map((item, index) => (
              <Nav.Link
                key={item.label} // Chave única para cada item
                as={Link} // Usa Link para navegação
                to={item.path}
                className="fs-5"
                style={getActiveLinkStyle(item.path)} // Aplica estilo ao link ativo
                disabled={item.disabled} // Desabilita o link se especificado
                data-aos="fade-down" // Animação AOS
                data-aos-duration={800 + index * 100} // Define a duração da animação
                onClick={handleNavItemClick} // Fecha o menu quando o item é clicado
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>

          {/* Campo de busca */}
          <Form
            className="d-flex me-2 mt-3 mb-3 m-lg-0"
            data-aos="fade-down"
            data-aos-duration="1200"
          >
            <Form.Control
              type="search"
              placeholder="Disabled"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
