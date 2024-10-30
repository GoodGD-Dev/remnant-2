import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import CategoryCounter from "../../../../components/CategoryCounter";
import MatchedItems from "../../../../components/MatchedItems";
import Sidebar from "../../../../components/Sidebar";
import ArmorsSummary from "./others/armors";

import amuletsData from "../../../../data/amulets.json";
import classesData from "../../../../data/classes.json";
import modsData from "../../../../data/mods.json";
import relicsData from "../../../../data/relics.json";
import ringsData from "../../../../data/rings.json";
import handGunsData from "../../../../data/weapons/normal/handGuns.json";
import longGunsData from "../../../../data/weapons/normal/longGuns.json";
import meleeData from "../../../../data/weapons/normal/melee.json";
import sHandGunsData from "../../../../data/weapons/special/handGuns.json";
import sLongGunsData from "../../../../data/weapons/special/longGuns.json";
import sMeleeData from "../../../../data/weapons/special/melee.json";
import meleeMutatorsData from "../../../../data/mutators/melee.json";
import rangedMutatorsData from "../../../../data/mutators/ranged.json";

const Summary = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const [content, setContent] = useState("resume");

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("checkedItems")) || {};
    setCheckedItems(items);
  }, []);

  const menuItems = [
    { label: "Resume", value: "resume" },
    { label: "Amuletos", value: "amulets" },
    { label: "Armors", value: "armors" },
    { label: "Classes", value: "classes" },
    { label: "Mods", value: "mods" },
    { label: "Mutators", value: "mutators" },
    { label: "Relíquias", value: "relics" },
    { label: "Rings", value: "rings" },
    { label: "Traits", value: "traits" },
    { label: "Weapons", value: "weapons" },
  ];

  const renderMatchedItems = (data, title) => (
    <Row>
      <Col xs={6} sm={4} md={3} lg={12}>
        <CategoryCounter data={data} title={`Contagem de ${title}`} />
      </Col>
      <Col xs={12}>
        {" "}
        {/* Usando Col para o MatchedItems */}
        <Row>
          {Object.keys(data[0]).map((key) => (
            <Col xs={12} sm={6} md={4} lg={3} key={key}>
              {" "}
              {/* Ajuste as larguras conforme necessário */}
              <MatchedItems
                title={key}
                datas={data[0][key]}
                checkedItems={checkedItems}
              />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );

  const renderContent = () => {
    switch (content) {
      case "resume":
        return <div>test</div>;
      case "amulets":
        return renderMatchedItems(amuletsData, "amuletos");
      case "armors":
        return <ArmorsSummary />;
      case "classes":
        return renderMatchedItems(classesData, "classes");
      case "mods":
        return renderMatchedItems(modsData, "mods");
      case "mutators":
        return (
          <>
            {renderMatchedItems(meleeMutatorsData, "melee")}
            {renderMatchedItems(rangedMutatorsData, "ranged")}
          </>
        );
      case "relics":
        return renderMatchedItems(relicsData, "relíquias");
      case "rings":
        return renderMatchedItems(ringsData, "rings");
      case "traits":
        return renderMatchedItems(traitsData, "traits");
      case "weapons":
        return (
          <>
            {renderMatchedItems(handGunsData, "handguns")}
            {renderMatchedItems(sHandGunsData, "shandguns")}
            {renderMatchedItems(longGunsData, "long guns")}
            {renderMatchedItems(sLongGunsData, "slong guns")}
            {renderMatchedItems(meleeData, "melee")}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <Sidebar menuItems={menuItems} setContent={setContent} />
      <div className="d-flex">{renderContent()}</div>
    </Container>
  );
};

export default Summary;
