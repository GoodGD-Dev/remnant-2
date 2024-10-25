import { useEffect, useState } from "react";
import CategoryCounter from "../../../../components/CategoryCounter";
import MatchedItems from "../../../../components/MatchedItems";
import Sidebar from "../../../../components/Sidebar";
import amuletsData from "../../../../data/amulets.json";
import armorsData from "../../../../data/armors.json";
import classesData from "../../../../data/classes.json";
import modsData from "../../../../data/mods.json";
import mutatorsData from "../../../../data/mutators.json";
import relicsData from "../../../../data/relics.json";
import ringsData from "../../../../data/rings.json";
import traitsData from "../../../../data/traits.json";
import weaponsData from "../../../../data/weapons.json";
import { Container } from "react-bootstrap";

const Summary = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const [content, setContent] = useState("resume"); // Estado para controlar o conteúdo a ser exibido

  useEffect(() => {
    // Carregar os dados do localStorage
    const items = JSON.parse(localStorage.getItem("checkedItems")) || {};
    setCheckedItems(items);
  }, []);

  // Itens do menu para a sidebar
  const menuItems = [
    { label: "Resume", value: "resume" },
    { label: "Amuletos", value: "amulets" },
    { label: "Armors (aind nn)", value: "armors" },
    { label: "Classes", value: "classes" },
    { label: "Mods", value: "mods" },
    { label: "Mutators (ainda nn)", value: "mutators" },
    { label: "Relíquias", value: "relics" },
    { label: "Rings", value: "rings" },
    { label: "Traits", value: "traits" },
    { label: "Weapons (ainda nn)", value: "weapons" },
  ];

  // Função para renderizar o conteúdo com base no estado "content"
  const renderContent = () => {
    switch (content) {
      case "resume":
        return <div>test</div>;
      case "amulets":
        return (
          <>
            <CategoryCounter data={amuletsData} title="Contagem de amuletos" />
          </>
        );
      case "armors":
        return (
          <>
            <div>test</div>
          </>
        );
      case "classes":
        return (
          <CategoryCounter data={classesData} title="Contagem de classes" />
        );
      case "mods":
        return (
          <>
            <CategoryCounter data={modsData} title="Contagem de mods" />
            <MatchedItems
              title="Game Base"
              mods={modsData[0]["Game Base"]}
              checkedItems={checkedItems}
            />
            <MatchedItems
              title="The Awakened King"
              mods={modsData[0]["The Awakened King"]}
              checkedItems={checkedItems}
            />
            <MatchedItems
              title="The Forgotten Kingdom"
              mods={modsData[0]["The Forgotten Kingdom"]}
              checkedItems={checkedItems}
            />
            <MatchedItems
              title="The Dark Horizon"
              mods={modsData[0]["The Dark Horizon"]}
              checkedItems={checkedItems}
            />
          </>
        );
      case "mutators":
        return (
          <CategoryCounter data={mutatorsData} title="Contagem de relíquias" />
        );
      case "relics":
        return (
          <CategoryCounter data={relicsData} title="Contagem de relíquias" />
        );
      case "rings":
        return (
          <CategoryCounter data={ringsData} title="Contagem de relíquias" />
        );
      case "traits":
        return (
          <CategoryCounter data={traitsData} title="Contagem de relíquias" />
        );
      case "weapons":
        return (
          <CategoryCounter data={weaponsData} title="Contagem de relíquias" />
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <div className="d-flex">
        <Sidebar menuItems={menuItems} setContent={setContent} />{" "}
        <div className="content-area"> {renderContent()} </div>
      </div>
    </Container>
  );
};

export default Summary;
