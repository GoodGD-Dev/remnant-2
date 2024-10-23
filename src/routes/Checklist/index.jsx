import { useState } from "react";
import { Nav } from "react-bootstrap";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import PropTypes from "prop-types";
import "./style.css";

import Summary from "./pages/Summary";
import Weapons from "./pages/Weapons";
import Mods from "./pages/Mods";
import Mutators from "./pages/Mutators";
import Armors from "./pages/Armors";
import Amulets from "./pages/Amulets";
import Rings from "./pages/Rings";
import Relics from "./pages/Relics";
import Classes from "./pages/Classes";
import Traits from "./pages/Traits";

// Configuração das abas e os componentes que elas irão renderizar
const tabConfig = [
  { key: "Summary", Component: Summary },
  { key: "Amulets", Component: Amulets },
  { key: "Armors", Component: Armors },
  { key: "Classes", Component: Classes },
  { key: "Mods", Component: Mods },
  { key: "Mutators", Component: Mutators },
  { key: "Relics", Component: Relics },
  { key: "Rings", Component: Rings },
  { key: "Traits", Component: Traits },
  { key: "Weapons", Component: Weapons },
];

const TabNavigation = ({ activeKey, onSelect }) => (
  <Nav
    variant="tabs"
    className="justify-content-center flex-wrap mb-2"
    style={{ position: "sticky", top: "0", background: "white", zIndex: 1 }}
  >
    {tabConfig.map(({ key }) => (
      <Nav.Item key={key}>
        <Nav.Link
          eventKey={key}
          active={activeKey === key}
          onClick={() => onSelect(key)}
          className="text-dark nav-link--black"
        >
          {key}
        </Nav.Link>
      </Nav.Item>
    ))}
  </Nav>
);

TabNavigation.propTypes = {
  activeKey: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

const TabContent = ({ activeKey }) => {
  const { Component } = tabConfig.find((tab) => tab.key === activeKey) || {};

  return (
    <SwitchTransition>
      <CSSTransition key={activeKey} classNames="fade" timeout={150}>
        <div className="tab-pane">{Component && <Component />}</div>
      </CSSTransition>
    </SwitchTransition>
  );
};

TabContent.propTypes = {
  activeKey: PropTypes.string.isRequired,
};

function Checklist() {
  const [activeKey, setActiveKey] = useState("Summary");

  return (
    <>
      <TabNavigation activeKey={activeKey} onSelect={setActiveKey} />
      <TabContent activeKey={activeKey} />
    </>
  );
}

export default Checklist;
