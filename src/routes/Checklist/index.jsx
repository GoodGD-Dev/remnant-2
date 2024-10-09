import React, { useState } from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './style.css';

import Summary from './components/Summary';
import Weapons from './components/Weapons';
import Mods from './components/Mods';
import Mutators from './components/Mutators';
import Armors from './components/Armors';
import Amulets from './components/Amulets';
import Rings from './components/Rings';
import Relics from './components/Relics';
import Classes from './components/Classes';
import Traits from './components/Traits';

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
    <Tab.Container
      id="horizontal-tabs"
      activeKey={activeKey}
      onSelect={(k) => setActiveKey(k)}
    >
      <Row>
        <Col>
          <Nav variant="tabs" className="justify-content-center flex-wrap mb-2">
            {tapButtons.map((item) => (
              <Col xs={4} sm={4} lg={1} key={item}>
                <Nav.Item>
                  <Nav.Link
                    eventKey={item}
                    className="text-dark nav-link--black"
                  >
                    {item}
                  </Nav.Link>
                </Nav.Item>
              </Col>
            ))}
          </Nav>
        </Col>
      </Row>
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
  );
}

export default Checklist;
