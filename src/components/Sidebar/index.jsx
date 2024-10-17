import React, { useState } from 'react';
import { Nav, Dropdown, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const MenuItem = ({ item, index, activeIndex, handleSelect }) => {
  if (item.subOptions) {
    return (
      <Dropdown className="mb-2">
        <Dropdown.Toggle className={`dropdown-toggle-custom ${activeIndex === index ? 'active-item' : ''}`}>
          {item.label}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {item.subOptions.map((subItem, subIndex) => (
            <Dropdown.Item
              key={subIndex}
              onClick={() => handleSelect(index, subItem.value)}
              className="dropdown-item-custom"
            >
              {subItem.label}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  }

  return (
    <Nav.Item>
      <Nav.Link
        onClick={() => handleSelect(index, item.value)}
        className={`nav-link-custom ${activeIndex === index ? 'active-item' : ''}`}
      >
        {item.label}
      </Nav.Link>
    </Nav.Item>
  );
};

const Sidebar = ({ menuItems, setContent }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false); // Estado para controlar a visibilidade do overlay

  const handleSelect = (index, value) => {
    setActiveIndex(index);
    setContent(value);
    setShowOverlay(false); // Esconder o overlay ao selecionar uma opção
  };

  return (
    <div>
      {/* Botão fixo para abrir o menu */}
      <Button
        className="btn btn-dark position-fixed" // Classe de botão fixo
        onClick={() => setShowOverlay(!showOverlay)}
      >
        <i className={`bi ${showOverlay ? 'bi-x' : 'bi-list'}`}></i> {/* Ícone */}
      </Button>

      {/* Overlay */}
      {showOverlay && (
        <div
          className="overlay"
          onClick={() => setShowOverlay(false)} // Fechar o overlay ao clicar fora
        >
          {/* Sidebar dentro do overlay */}
          <div className="sidebar d-flex flex-column p-3 vh-100 shadow-sm">
            <h5 className="sidebar-title mb-4 text-dark">Menu</h5>
            <Nav className="flex-column">
              {menuItems.map((item, index) => (
                <MenuItem
                  key={index}
                  item={item}
                  index={index}
                  activeIndex={activeIndex}
                  handleSelect={handleSelect}
                />
              ))}
            </Nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
