import { useState, useCallback, useMemo } from 'react'; // Importa hooks do React para estado, memoização e funções de callback
import { Nav, Dropdown, Button } from 'react-bootstrap'; // Importa componentes da biblioteca React Bootstrap
import PropTypes from 'prop-types'; // Importa PropTypes para validação de tipos de props
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa o CSS do Bootstrap
import './style.css'; // Importa o CSS customizado

// Componente MenuItem - renderiza cada item do menu e trata o dropdown quando há subOpções
const MenuItem = ({ item, index, activeIndex, handleSelect, openDropdownIndex, setOpenDropdownIndex }) => {
  const isOpen = openDropdownIndex === index; // Verifica se o dropdown atual está aberto comparando o índice

  // Função que alterna entre abrir/fechar o dropdown
  const handleDropdownClick = useCallback(() => {
    setOpenDropdownIndex(isOpen ? null : index); // Se está aberto, fecha; se está fechado, abre
  }, [isOpen, index, setOpenDropdownIndex]);

  // Se o item tiver subOpções (submenu), renderiza o dropdown
  if (item.subOptions) {
    return (
      <Dropdown className="mb-2" show={isOpen}> {/* Controla a visibilidade do dropdown */}
        <Dropdown.Toggle
          className={`dropdown-toggle-custom ${activeIndex === index ? 'active-item' : ''}`} // Adiciona classe ativa se o item for o selecionado
          onClick={handleDropdownClick} // Alterna o dropdown ao clicar
          aria-expanded={isOpen} // Acessibilidade: indica se o dropdown está expandido
        >
          {item.label} {/* Rótulo do item do menu */}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {item.subOptions.map((subItem, subIndex) => (
            <Dropdown.Item
              key={subIndex}
              onClick={(e) => {
                e.stopPropagation(); // Evita que o clique feche o dropdown imediatamente
                handleSelect(index, subItem.value); // Chama a função de seleção ao clicar na subopção
              }}
              className="dropdown-item-custom"
            >
              {subItem.label} {/* Rótulo da subopção */}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  }

  // Renderiza um item simples do menu, se não houver subOpções
  return (
    <Nav.Item>
      <Nav.Link
        onClick={() => handleSelect(index, item.value)} // Chama a função de seleção ao clicar
        className={`nav-link-custom ${activeIndex === index ? 'active-item' : ''}`} // Adiciona classe ativa se for o item selecionado
      >
        {item.label} {/* Rótulo do item */}
      </Nav.Link>
    </Nav.Item>
  );
};

// Valida os tipos de props para o MenuItem
MenuItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired, // O rótulo do item é obrigatório
    value: PropTypes.string, // O valor é opcional
    subOptions: PropTypes.arrayOf( // Se houver subOpções, deve ser um array de objetos
      PropTypes.shape({
        label: PropTypes.string.isRequired, // O rótulo das subOpções é obrigatório
        value: PropTypes.string.isRequired, // O valor das subOpções também é obrigatório
      })
    ),
  }).isRequired,
  index: PropTypes.number.isRequired, // O índice do item é obrigatório
  activeIndex: PropTypes.number.isRequired, // O índice ativo é obrigatório
  handleSelect: PropTypes.func.isRequired, // A função de seleção é obrigatória
  openDropdownIndex: PropTypes.number, // O índice do dropdown aberto é opcional
  setOpenDropdownIndex: PropTypes.func.isRequired, // A função para abrir/fechar o dropdown é obrigatória
};

// Componente Sidebar - controla o menu lateral com dropdowns e navegação
const Sidebar = ({ menuItems, setContent }) => {
  const [activeIndex, setActiveIndex] = useState(0); // Estado para o índice do item selecionado
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null); // Estado para o índice do dropdown aberto
  const [showOverlay, setShowOverlay] = useState(false); // Estado para controlar a exibição do overlay (menu lateral visível)

  // Função que é chamada ao selecionar um item ou subitem do menu
  const handleSelect = useCallback((index, value) => {
    setActiveIndex(index); // Define o item ativo (selecionado)
    setContent(value); // Atualiza o conteúdo com base no valor selecionado
    setShowOverlay(false); // Fecha o overlay ao selecionar um item
    setOpenDropdownIndex(null); // Fecha qualquer dropdown aberto
  }, [setContent]);

  // Função para alternar a visibilidade do overlay
  const toggleOverlay = useCallback(() => {
    setShowOverlay(prevShowOverlay => !prevShowOverlay); // Alterna o estado do overlay entre visível/invisível
  }, []);

  // Usa o hook useMemo para memorizar a renderização dos itens do menu, evitando re-renderizações desnecessárias
  const renderedMenuItems = useMemo(() => menuItems.map((item, index) => (
    <MenuItem
      key={index}
      item={item} // Passa o item atual para o componente MenuItem
      index={index} // Passa o índice atual para o MenuItem
      activeIndex={activeIndex} // Passa o índice ativo para controle visual
      handleSelect={handleSelect} // Passa a função de seleção para os itens
      openDropdownIndex={openDropdownIndex} // Passa o índice do dropdown aberto
      setOpenDropdownIndex={setOpenDropdownIndex} // Passa a função para abrir/fechar o dropdown
    />
  )), [menuItems, activeIndex, handleSelect, openDropdownIndex]); // O array de dependências garante que o menu seja re-renderizado apenas quando necessário

  return (
    <div>
      <Button
        className="sidebar-btn btn btn-dark position-fixed" // Botão para abrir/fechar o menu
        onClick={toggleOverlay} // Alterna a visibilidade do overlay ao clicar
      >
        {/* Ícone muda entre 'bi-list' (menu) e 'bi-x' (fechar) */}
        <i className={`bi ${showOverlay ? 'bi-x' : 'bi-list'}`}></i>
      </Button>

      {/* Exibe o overlay com o menu lateral se showOverlay for verdadeiro */}
      {showOverlay && (
        <div className="overlay" onClick={() => setShowOverlay(false)}> {/* Fecha o menu ao clicar fora */}
          <div className="sidebar d-flex flex-column p-3 vh-100 shadow-sm" onClick={(e) => e.stopPropagation()}>
            <h5 className="sidebar-title mb-4 text-dark">Menu</h5> {/* Título do menu */}
            <Nav className="flex-column">
              {renderedMenuItems} {/* Renderiza todos os itens do menu */}
            </Nav>
          </div>
        </div>
      )}
    </div>
  );
};

// Valida os tipos de props para o Sidebar
Sidebar.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired, // O rótulo do item é obrigatório
      value: PropTypes.string, // O valor é opcional
      subOptions: PropTypes.arrayOf( // As subOpções são um array de objetos
        PropTypes.shape({
          label: PropTypes.string.isRequired, // O rótulo das subOpções é obrigatório
          value: PropTypes.string.isRequired, // O valor das subOpções é obrigatório
        })
      ),
    })
  ).isRequired, // menuItems é obrigatório
  setContent: PropTypes.func.isRequired, // A função setContent é obrigatória para definir o conteúdo do menu
};

export default Sidebar; // Exporta o componente Sidebar