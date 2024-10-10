import { Col, Row, Tab, Card } from 'react-bootstrap';
import weaponsData from '../../../../data/checklistdata.json';
import Sidebar from '../../../../components/Sidebar';

// Grupos de armas para os tabs
const weaponsTabs = [
  { eventKey: "Tab 1", label: "Long Guns", categories: ["Long Guns", "Special Long Guns"] },
  { eventKey: "Tab 2", label: "Melee Weapons", categories: ["Melee Weapons", "Special Melee Weapons"] },
  { eventKey: "Tab 3", label: "Hand Guns", categories: ["Hand Guns", "Special Hand Guns"] },
  { eventKey: "Tab 4", label: "Corrupted Weapons", categories: ["Corrupted Hand Guns", "Corrupted Long Guns"] },
];

// Extrai e organiza as armas por categoria
const weaponsDataByCategory = weaponsData.Weapons.reduce((categories, weaponCategory) => {
  for (const [category, subCategories] of Object.entries(weaponCategory)) {
    categories[category] = (categories[category] || []).concat(
      ...subCategories.flatMap(subCategory => Object.values(subCategory).flat())
    );
  }
  return categories;
}, {});

// Renderiza as cartas de armas
const renderCards = (weapons) =>
  weapons?.map((weapon, index) => (
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

// Componente principal que renderiza as tabs de armas
function Weapons() {
  return (
    <Tab.Container defaultActiveKey="Tab 1">
      <Row>
        <Sidebar tabs={weaponsTabs} defaultKey="Tab 1" />
        <Col sm={9}>
          <Tab.Content>
            {weaponsTabs.map(({ eventKey, categories }) => (
              <Tab.Pane eventKey={eventKey} key={eventKey}>
                <Row>
                  {categories.map(category => (
                    <Col md={6} key={category}>
                      <h5>{category}</h5>
                      {renderCards(weaponsDataByCategory[category])}
                    </Col>
                  ))}
                </Row>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Weapons;