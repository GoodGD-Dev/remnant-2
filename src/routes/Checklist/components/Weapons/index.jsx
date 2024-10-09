import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';

const labelCheckGuns = ["Long Guns", "Melee Weapons", "Hand Guns", "Corrupted Guns"];

const longGunsData = [
  {
    imgSrc: "https://via.placeholder.com/150?text=Long+Gun+1",
    title: "Long Gun 1",
    text: "Description of Long Gun 1."
  },
  {
    imgSrc: "https://via.placeholder.com/150?text=Long+Gun+2",
    title: "Long Gun 2",
    text: "Description of Long Gun 2."
  }
];

const specialLongGunsData = [
  {
    imgSrc: "https://via.placeholder.com/150?text=Long+Gun+1",
    title: "Long Gun 1",
    text: "Description of Long Gun 1."
  },
  {
    imgSrc: "https://via.placeholder.com/150?text=Long+Gun+2",
    title: "Long Gun 2",
    text: "Description of Long Gun 2."
  }
];

const renderCards = (data) => {
  return data.map((gun, index) => (
    <Col md={6} className="mb-4" key={index}>
      <Card>
        <Card.Img variant="top" src={gun.imgSrc} />
        <Card.Body>
          <Card.Title>{gun.title}</Card.Title>
          <Card.Text>{gun.text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ));
};

// Conteúdo para as abas
const longGunsContent = (
  <Row>
    <Col md={6}>
      <h5 className="text-center">Long Guns</h5>
      <Row>
        {renderCards(longGunsData)}
      </Row>
    </Col>

    <Col md={6}>
      <h5 className="text-center">Special Long Guns</h5>
      <Row>
        {renderCards(specialLongGunsData)}
      </Row>
    </Col>
  </Row>
);

const meleeWeaponsContent = "test2";
const handGunsContent = "test3";
const corruptedGunsContent = "test4";

const weaponsTabs = [
  { eventKey: "Tab 1", label: labelCheckGuns[0], content: longGunsContent },
  { eventKey: "Tab 2", label: labelCheckGuns[1], content: meleeWeaponsContent },
  { eventKey: "Tab 3", label: labelCheckGuns[2], content: handGunsContent },
  { eventKey: "Tab 4", label: labelCheckGuns[3], content: corruptedGunsContent },
];

function Weapons() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="Tab 1">
      <Row>
        <Col>
          <Nav variant="pills" className="flex-column">
            {weaponsTabs.map(({ eventKey, label }) => (
              <Nav.Item key={eventKey}>
                <Nav.Link eventKey={eventKey} className="text-dark nav-link--black">
                  {label}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            {weaponsTabs.map(({ eventKey, content }) => (
              <Tab.Pane eventKey={eventKey} key={eventKey}>
                {content}
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Weapons;
