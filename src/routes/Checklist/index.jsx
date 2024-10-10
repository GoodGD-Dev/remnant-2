import { useState } from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './style.css';

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

const tapButtons = ["Summary", "Weapons", "Mods", "Mutators", "Armors", "Amulets", "Rings", "Relics", "Classes", "Traits"];

function Checklist() {
  const [activeKey, setActiveKey] = useState('Summary');

  const renderTabContent = () => {
    switch (activeKey) {
      case 'Summary':
        return <Summary />;
      case 'Weapons':
        return <Weapons />;
      case 'Mods':
        return <Mods />;
      case 'Mutators':
        return <Mutators />;
      case 'Armors':
        return <Armors />;
      case 'Amulets':
        return <Amulets />;
      case 'Rings':
        return <Rings />;
      case 'Relics':
        return <Relics />;
      case 'Classes':
        return <Classes />;
      case 'Traits':
        return <Traits />;
      default:
        return null;
    }
  };

  return (
    <Container>
      {/* Barra de Navegação Horizontal */}
      <Nav variant="tabs" className="justify-content-center flex-wrap mb-2" style={{ position: 'sticky', top: '0', background: 'white', zIndex: 1 }}>
        {tapButtons.map((item) => (
          <Nav.Item key={item}>
            <Nav.Link
              eventKey={item}
              className="text-dark nav-link--black"
              onClick={() => setActiveKey(item)} // Altera o estado ao clicar
            >
              {item}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      <Tab.Container
        id="horizontal-tabs"
        activeKey={activeKey}
        onSelect={(k) => setActiveKey(k)}
      >
        <Row>
          <Col>
            <Container>
              <Tab.Content>
                <SwitchTransition>
                  <CSSTransition
                    key={activeKey}
                    classNames="fade"
                    timeout={150}
                  >
                    <Tab.Pane eventKey={activeKey} className="tab-pane">
                      {renderTabContent()}
                    </Tab.Pane>
                  </CSSTransition>
                </SwitchTransition>
              </Tab.Content>
            </Container>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

export default Checklist;
