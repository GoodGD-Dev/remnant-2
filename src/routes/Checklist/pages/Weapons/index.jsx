import React from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import weaponsData from '../../../../data/checklistdata.json'; // Substitua pelo caminho correto do seu JSON

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

  // Acessa as armas
  data.Weapons.forEach(category => {
    for (const categoryName in category) {
      const subCategories = category[categoryName];

      // Acessa cada subcategoria
      subCategories.forEach(subCategory => {
        for (const subCatName in subCategory) {
          const weapons = subCategory[subCatName];

          // Verifica se weapons é um array e itera sobre ele
          if (Array.isArray(weapons)) {
            weapons.forEach(weapon => {
              // Adiciona a arma na categoria correta
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
    <Col md={6} className="mb-4" key={index}>
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
  { eventKey: "Tab 1", label: labelCheckGuns[0], content: (
      <Row>
        {renderCards([
          ...weaponsDataByCategory["Long Guns"],
          ...weaponsDataByCategory["Special Long Guns"]
        ])}
      </Row>
    ) 
  },
  { eventKey: "Tab 2", label: labelCheckGuns[1], content: (
      <Row>
        {renderCards([
          ...weaponsDataByCategory["Melee Weapons"],
          ...weaponsDataByCategory["Special Melee Weapons"] // Corrigido aqui
        ])}
      </Row>
    ) 
  },
  { eventKey: "Tab 3", label: labelCheckGuns[2], content: (
      <Row>
        {renderCards([
          ...weaponsDataByCategory["Hand Guns"],
          ...weaponsDataByCategory["Special Hand Guns"]
        ])}
      </Row>
    ) 
  },
  { eventKey: "Tab 4", label: labelCheckGuns[3], content: (
      <Row>
        {renderCards([
          ...weaponsDataByCategory["Corrupted Hand Guns"], // Corrigido aqui
          ...weaponsDataByCategory["Corrupted Long Guns"]
        ])}
      </Row>
    ) 
  },
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
