import React, { useState } from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './style.css';  // Onde você define as animações em CSS

function Checklist() {
  const [activeKey, setActiveKey] = useState('Summary');

  return (
    <Tab.Container
      id="horizontal-tabs"
      activeKey={activeKey}
      onSelect={(k) => setActiveKey(k)}
    >
      <Row>
        <Col>
          <Nav variant="tabs" className="justify-content-center flex-wrap mb-2">
            {["Summary", "Weapons", "Mods", "Mutators", "Armors", "Amulets", "Rings", "Relics", "Classes", "Traits"].map((item) => (
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
                    {activeKey === "Summary" && 
                    <div>Summary tab content</div>}
                    {activeKey === "Weapons" && 
                    <div>Weapons tab content</div>}
                    {activeKey === "Mods" && 
                    <div>Mods tab content</div>}
                    {activeKey === "Mutators" && 
                    <div>Mutators tab content</div>}
                    {activeKey === "Armors" && 
                    <div>Armors tab content</div>}
                    {activeKey === "Amulets" && 
                    <div>Amulets tab content</div>}
                    {activeKey === "Rings" && 
                    <div>Rings tab content</div>}
                    {activeKey === "Relics" && 
                    <div>Relics tab content</div>}
                    {activeKey === "Classes" && 
                    <div>Classes tab content</div>}
                    {activeKey === "Traits" && 
                    <div>Traits tab content</div>}
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
