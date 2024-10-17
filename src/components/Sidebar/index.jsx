import { useState } from 'react';
import { Nav, Dropdown, Button } from 'react-bootstrap';
import PropTypes from 'prop-types'; // Importa PropTypes para validação
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const MenuItem = ({ item, index, activeIndex, handleSelect, openDropdownIndex, setOpenDropdownIndex }) => {
  const isOpen = openDropdownIndex === index;

  const handleDropdownClick = () => {
    if (isOpen) {
      setOpenDropdownIndex(null); // Fecha o dropdown se já estiver aberto
    } else {
      setOpenDropdownIndex(index); // Abre o dropdown e fecha os outros
    }
  };

  if (item.subOptions) {
    return (
      <Dropdown className="mb-2" show={isOpen} onClick={(e) => e.stopPropagation()}>
        <Dropdown.Toggle
          className={`dropdown-toggle-custom ${activeIndex === index ? 'active-item' : ''}`}
          onClick={handleDropdownClick}
        >
          {item.label}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {item.subOptions.map((subItem, subIndex) => (
            <Dropdown.Item
              key={subIndex}
              onClick={(e) => {
                e.stopPropagation();
                handleSelect(index, subItem.value);
              }}
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

// Validação das props do MenuItem
MenuItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired, // O rótulo do item é uma string obrigatória
    value: PropTypes.string, // Valor pode ser string (não é obrigatório)
    subOptions: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired, // Cada subitem precisa ter um rótulo (string)
      value: PropTypes.string.isRequired, // Cada subitem precisa ter um valor (string)
    })),
  }).isRequired, // Cada item é um objeto com as propriedades mencionadas, obrigatório
  index: PropTypes.number.isRequired, // O índice do item é um número obrigatório
  activeIndex: PropTypes.number.isRequired, // Índice do item ativo é um número obrigatório
  handleSelect: PropTypes.func.isRequired, // Função para selecionar um item
  openDropdownIndex: PropTypes.number, // Índice do dropdown aberto pode ser null ou um número
  setOpenDropdownIndex: PropTypes.func.isRequired, // Função para alterar o dropdown aberto
};

const Sidebar = ({ menuItems, setContent }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null); // Estado para controlar dropdowns abertos
  const [showOverlay, setShowOverlay] = useState(false);

  const handleSelect = (index, value) => {
    setActiveIndex(index);
    setContent(value);
    setShowOverlay(false);
    setOpenDropdownIndex(null); // Fecha qualquer dropdown aberto
  };

  return (
    <div>
      <Button
        className="btn btn-dark position-fixed"
        onClick={() => setShowOverlay(!showOverlay)}
      >
        <i className={`bi ${showOverlay ? 'bi-x' : 'bi-list'}`}></i>
      </Button>

      {showOverlay && (
        <div className="overlay" onClick={() => setShowOverlay(false)}>
          <div className="sidebar d-flex flex-column p-3 vh-100 shadow-sm" onClick={(e) => e.stopPropagation()}>
            <h5 className="sidebar-title mb-4 text-dark">Menu</h5>
            <Nav className="flex-column">
              {menuItems.map((item, index) => (
                <MenuItem
                  key={index}
                  item={item}
                  index={index}
                  activeIndex={activeIndex}
                  handleSelect={handleSelect}
                  openDropdownIndex={openDropdownIndex}
                  setOpenDropdownIndex={setOpenDropdownIndex}
                />
              ))}
            </Nav>
          </div>
        </div>
      )}
    </div>
  );
};

// Validação das props do Sidebar
Sidebar.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired, // O rótulo do item é uma string obrigatória
    value: PropTypes.string, // O valor pode ser uma string (não é obrigatório)
    subOptions: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired, // O rótulo de cada subitem é uma string obrigatória
      value: PropTypes.string.isRequired, // O valor de cada subitem é uma string obrigatória
    })),
  })).isRequired, // A lista de menuItems é um array de objetos com a estrutura descrita
  setContent: PropTypes.func.isRequired, // Função que define o conteúdo é obrigatória
};

export default Sidebar;