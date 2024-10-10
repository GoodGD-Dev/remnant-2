import { Col, Nav, Row, Tab, Card } from 'react-bootstrap';
import weaponsData from '../../../../data/checklistdata.json';
import './style.css';

const labelGunsName = ["Long Guns", "Melee Weapons", "Hand Guns", "Corrupted Weapons"];

// Função para extrair armas do JSON
const extractWeapons = (data) => {
  const categories = [
    "Long Guns", "Special Long Guns", "Melee Weapons", "Special Melee Weapons",
    "Hand Guns", "Special Hand Guns", "Corrupted Hand Guns", "Corrupted Long Guns"
  ];

  return categories.reduce((acc, category) => {
    acc[category] = [];

    data.Weapons.forEach(weaponCategory => {
      if (weaponCategory[category]) {
        weaponCategory[category].forEach(subCategory =>
          Object.values(subCategory).forEach(weapons =>
            acc[category].push(...weapons)
          )
        );
      }
    });

    return acc;
  }, {});
};

const weaponsDataByCategory = extractWeapons(weaponsData);

// Função para renderizar os cartões das armas
const renderCards = (weapons) => weapons.map((weapon, index) => (
  <Col md={12} className="mb-4" key={index}>
    <Card>
      <Card.Img variant="top" src={weapon.imagem} alt={weapon.nome} />
      <Card.Body>
        <Card.Title>{weapon.nome}</Card.Title>
        <Card.Text>{weapon.descricao}</Card.Text>
        <Card.Link href={weapon.link} target="_blank">Saiba mais</Card.Link>
      </Card.Body>
    </Card>
  </Col>
));

// Configurando as abas
const weaponsTabs = [
  { eventKey: "Tab 1", label: labelGunsName[0], categories: ["Long Guns", "Special Long Guns"] },
  { eventKey: "Tab 2", label: labelGunsName[1], categories: ["Melee Weapons", "Special Melee Weapons"] },
  { eventKey: "Tab 3", label: labelGunsName[2], categories: ["Hand Guns", "Special Hand Guns"] },
  { eventKey: "Tab 4", label: labelGunsName[3], categories: ["Corrupted Hand Guns", "Corrupted Long Guns"] },
];

const renderTabContent = (categories) => (
  <Row>
    {categories.map(category => (
      <Col md={6} key={category}>
        <h5>{category}</h5>
        {renderCards(weaponsDataByCategory[category])}
      </Col>
    ))}
  </Row>
);

// Componente Weapons
function Weapons() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="Tab 1">
      <Row>
        <Col className="sidebar" md={2}>
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
            {weaponsTabs.map(({ eventKey, categories }) => (
              <Tab.Pane eventKey={eventKey} key={eventKey}>
                {renderTabContent(categories)}
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Weapons;
