import React from 'react';
import { Nav, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = ({ menuItems, setContent }) => {
  return (
    <div className="sidebar d-flex flex-column bg-light p-3 vh-100 shadow-lg" style={{ width: '250px' }}>
      <h5 className="sidebar-title mb-4 text-primary">Menu</h5>
      <Nav className="flex-column">
        {menuItems.map((item, index) => (
          item.subOptions ? (
            // Dropdown for items with subOptions
            <Dropdown key={index} className="mb-2">
              <Dropdown.Toggle className="text-dark mb-2 px-3 py-2 rounded hover-link bg-light border-0">
                {item.label}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {item.subOptions.map((subItem, subIndex) => (
                  <Dropdown.Item
                    key={subIndex}
                    onClick={() => setContent(subItem.value)}>
                    {subItem.label}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            // Regular Nav.Link for items without subOptions
            <Nav.Item key={index}>
              <Nav.Link
                onClick={() => setContent(item.value)}
                className="text-dark mb-2 px-3 py-2 rounded hover-link">
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
