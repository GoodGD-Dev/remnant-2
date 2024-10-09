import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';

function Checklist() {
  return (
    <Tab.Container id="horizontal-tabs" defaultActiveKey="Summary">
      <Row>
        <Col>
          <Nav variant="tabs" className="justify-content-center flex-wrap mb-2">
            {["Summary", "Weapons", "Mods", "Mutators", "Armors", "Amulets", "Rings", "Relics", "Classes", "Traits"].map((item) => (
              <Col xs={4} sm={4} lg={1} key={item}>
                <Nav.Item>
                  <Nav.Link eventKey={item} className="text-dark">{item}</Nav.Link>
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
              <Tab.Pane eventKey="Summary">First tab content</Tab.Pane>
              <Tab.Pane eventKey="Weapons">Weapons tab content</Tab.Pane>
              <Tab.Pane eventKey="Mods">Mods tab content</Tab.Pane>
              <Tab.Pane eventKey="Mutators">Mutators tab content</Tab.Pane>
              <Tab.Pane eventKey="Armors">Armors tab content</Tab.Pane>
              <Tab.Pane eventKey="Amulets">Amulets tab content</Tab.Pane>
              <Tab.Pane eventKey="Rings">Rings tab content</Tab.Pane>
              <Tab.Pane eventKey="Relics">Relics tab content</Tab.Pane>
              <Tab.Pane eventKey="Classes">Classes tab content</Tab.Pane>
              <Tab.Pane eventKey="Traits">Traits tab content</Tab.Pane>
            </Tab.Content>
          </Container>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Checklist;
