import React, { useState } from 'react';
import { Nav, Dropdown, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';  // Importando o arquivo CSS externo

const Sidebar = ({ menuItems, setContent }) => {
  const [activeIndex, setActiveIndex] = useState(0); // Inicializa com a tab 1 ativa por padrão

  const handleSelect = (index, value) => {
    setActiveIndex(index);
    setContent(value);
  };

  return (
    <div className="sidebar d-flex flex-column p-3 vh-100 shadow-sm">
      <h5 className="sidebar-title mb-4 text-dark">Menu</h5>
      <Nav className="flex-column">
        {menuItems.map((item, index) => (
          item.subOptions ? (
            <Dropdown key={index} className="mb-2">
              <Dropdown.Toggle 
                className={`dropdown-toggle-custom ${activeIndex === index ? 'active-item' : ''}`}>
                {item.label}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {item.subOptions.map((subItem, subIndex) => (
                  <Dropdown.Item
                    key={subIndex}
                    onClick={() => handleSelect(index, subItem.value)}
                    className="dropdown-item-custom">
                    {subItem.label}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Nav.Item key={index}>
              <Nav.Link
                onClick={() => handleSelect(index, item.value)}
                className={`nav-link-custom ${activeIndex === index ? 'active-item' : ''}`}>
                {item.label}
              </Nav.Link>
            </Nav.Item>
          )
        ))}
      </Nav>
    </div>
  );
};

export default Sidebar;
