import React from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import weaponsData from '../../../../data/checklistdata.json';
import './style.css';

const labelGunsName = ["Long Guns", "Melee Weapons", "Hand Guns", "Corrupted Weapons"];
const labelCheckGuns = [
  "Long Guns",
  "Special Long Guns",
  "Melee Weapons",
  "Special Melee Weapons",
  "Hand Guns",
  "Special Hand Guns",
  "Corrupted Hand Guns",
  "Corrupted Long Guns"
];

// Função para extrair armas do JSON
const extractWeapons = (data) => {
  const weaponsByCategory = {
    "Long Guns": [],
    "Special Long Guns": [],
    "Melee Weapons": [],
    "Special Melee Weapons": [],
    "Hand Guns": [],
    "Special Hand Guns": [],
    "Corrupted Hand Guns": [],
    "Corrupted Long Guns": []
  };

  data.Weapons.forEach(category => {
    for (const categoryName in category) {
      const subCategories = category[categoryName];

      subCategories.forEach(subCategory => {
        for (const subCatName in subCategory) {
          const weapons = subCategory[subCatName];

          if (Array.isArray(weapons)) {
            weapons.forEach(weapon => {
              if (weaponsByCategory[categoryName]) {
                weaponsByCategory[categoryName].push({
                  nome: weapon.nome,
                  descricao: weapon.descricao,
                  link: weapon.link,
                  imagem: weapon.imagem
                });
              }
            });
          }
        }
      });
    }
  });

  return weaponsByCategory;
};

// Extraindo todas as armas
const weaponsDataByCategory = extractWeapons(weaponsData);

// Função para renderizar os cartões das armas
const renderCards = (data) => {
  return data.map((gun, index) => (
    <Col md={12} className="mb-4" key={index}>
      <Card>
        <Card.Img variant="top" src={gun.imagem} alt={gun.nome} />
        <Card.Body>
          <Card.Title>{gun.nome}</Card.Title>
          <Card.Text>{gun.descricao}</Card.Text>
          <Card.Link href={gun.link} target="_blank">Saiba mais</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  ));
};

// Definindo o conteúdo para as abas
const weaponsTabs = [
  { eventKey: "Tab 1", label: labelGunsName[0], content: (
      <Row>
        <Col md={6}>
          <h5>Long Guns</h5>
          {renderCards(weaponsDataByCategory["Long Guns"])}
        </Col>
        <Col md={6}>
          <h5>Special Long Guns</h5>
          {renderCards(weaponsDataByCategory["Special Long Guns"])}
        </Col>
      </Row>
    ) 
  },
  { eventKey: "Tab 2", label: labelGunsName[1], content: (
      <Row>
        <Col md={6}>
          <h5>Melee Weapons</h5>
          {renderCards(weaponsDataByCategory["Melee Weapons"])}
        </Col>
        <Col md={6}>
          <h5>Special Melee Weapons</h5>
          {renderCards(weaponsDataByCategory["Special Melee Weapons"])}
        </Col>
      </Row>
    ) 
  },
  { eventKey: "Tab 3", label: labelGunsName[2], content: (
      <Row>
        <Col md={6}>
          <h5>Hand Guns</h5>
          {renderCards(weaponsDataByCategory["Hand Guns"])}
        </Col>
        <Col md={6}>
          <h5>Special Hand Guns</h5>
          {renderCards(weaponsDataByCategory["Special Hand Guns"])}
        </Col>
      </Row>
    ) 
  },
  { eventKey: "Tab 4", label: labelGunsName[3], content: (
      <Row>
        <Col md={6}>
          <h5>Corrupted Hand Guns</h5>
          {renderCards(weaponsDataByCategory["Corrupted Hand Guns"])}
        </Col>
        <Col md={6}>
          <h5>Corrupted Long Guns</h5>
          {renderCards(weaponsDataByCategory["Corrupted Long Guns"])}
        </Col>
      </Row>
    ) 
  },
];

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
