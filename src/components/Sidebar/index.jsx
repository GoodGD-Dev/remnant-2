import { Nav, Col } from 'react-bootstrap';
import './style.css';

function Sidebar({ tabs, defaultKey, onSelect }) {
  return (
    <Col className="sidebar" md={2}>
      <Nav variant="pills" className="flex-column" activeKey={defaultKey} onSelect={onSelect}>
        {tabs.map(({ eventKey, label }) => (
          <Nav.Item key={eventKey}>
            <Nav.Link eventKey={eventKey} className="text-dark nav-link--black">
              {label}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </Col>
  );
}

export default Sidebar;
