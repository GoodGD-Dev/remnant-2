import { useState } from 'react'; 
import { Nav } from 'react-bootstrap';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import PropTypes from 'prop-types'; // Importa PropTypes para validação
import './style.css';

// Importa os componentes correspondentes a cada aba
import Summary from './pages/Summary';
import Weapons from './pages/Weapons';
import Mods from './pages/Mods';
import Mutators from './pages/Mutators';
import Armors from './pages/Armors';
import Amulets from './pages/Amulets';
import Rings from './pages/Rings';
import Relics from './pages/Relics';
import Classes from './pages/Classes';
import Traits from './pages/Traits';

// Configuração das abas e os componentes que elas irão renderizar
const tabConfig = [
  { key: 'Summary', Component: Summary },
  { key: 'Weapons', Component: Weapons },
  { key: 'Mods', Component: Mods },
  { key: 'Mutators', Component: Mutators },
  { key: 'Armors', Component: Armors },
  { key: 'Amulets', Component: Amulets },
  { key: 'Rings', Component: Rings },
  { key: 'Relics', Component: Relics },
  { key: 'Classes', Component: Classes },
  { key: 'Traits', Component: Traits },
];

// Componente responsável pela navegação entre as abas
const TabNavigation = ({ activeKey, onSelect }) => (
  <Nav 
    variant="tabs" 
    className="justify-content-center flex-wrap mb-2"
    style={{ position: 'sticky', top: '0', background: 'white', zIndex: 1 }} // Define as abas fixas no topo
  >
    {tabConfig.map(({ key }) => ( // Mapeia as abas de acordo com a configuração
      <Nav.Item key={key}>
        <Nav.Link
          eventKey={key} // Define a chave de evento da aba
          active={activeKey === key} // Define se a aba está ativa
          onClick={() => onSelect(key)} // Troca a aba quando clicada
          className="text-dark nav-link--black"
        >
          {key} {/* Mostra o nome da aba */}
        </Nav.Link>
      </Nav.Item>
    ))}
  </Nav>
);

// Validação das props do TabNavigation
TabNavigation.propTypes = {
  activeKey: PropTypes.string.isRequired, // activeKey deve ser uma string obrigatória
  onSelect: PropTypes.func.isRequired, // onSelect deve ser uma função obrigatória
};

// Componente que exibe o conteúdo da aba selecionada
const TabContent = ({ activeKey }) => {
  // Encontra o componente associado à aba ativa
  const { Component } = tabConfig.find(tab => tab.key === activeKey) || {};

  return (
    <SwitchTransition>
      <CSSTransition key={activeKey} classNames="fade" timeout={150}> 
        <div className="tab-pane">
          {Component && <Component />} {/* Renderiza o componente da aba ativa */}
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
};

// Componente principal que contém a lógica de navegação e exibição de conteúdo
function Checklist() {
  const [activeKey, setActiveKey] = useState('Summary'); // Define o estado da aba ativa (inicia na aba 'Summary')

  return (
    <>
      <TabNavigation activeKey={activeKey} onSelect={setActiveKey} /> {/* Renderiza as abas de navegação */}
      <TabContent activeKey={activeKey} /> {/* Renderiza o conteúdo da aba selecionada */}
    </>
  );
}

export default Checklist;
