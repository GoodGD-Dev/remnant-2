import { useEffect, useState } from "react";

import CategoryCounter from "../../../../components/CategoryCounter";
import MatchedItems from "../../../../components/MatchedItems";
import Sidebar from "../../../../components/Sidebar";
import ArmorsSummary from "./others/armors";
import MutatorsSummary from "./others/mutators";

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

import cHandGunsData from "../../../../data/weapons/corrupted/handGuns.json";
import cLongGunsData from "../../../../data/weapons/corrupted/longGuns.json";

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
    { label: "Armors", value: "armors" },
    { label: "Classes", value: "classes" },
    { label: "Mods", value: "mods" },
    { label: "Mutators", value: "mutators" },
    { label: "Relíquias", value: "relics" },
    { label: "Rings", value: "rings" },
    { label: "Traits", value: "traits" },
    { label: "Weapons", value: "weapons" },
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
            <MatchedItems
              title="Game Base"
              datas={amuletsData[0]["Game Base"]}
              checkedItems={checkedItems}
            />
            <MatchedItems
              title="The Awakened King"
              datas={amuletsData[0]["The Awakened King"]}
              checkedItems={checkedItems}
            />
            <MatchedItems
              title="The Forgotten Kingdom"
              datas={amuletsData[0]["The Forgotten Kingdom"]}
              checkedItems={checkedItems}
            />
            <MatchedItems
              title="The Dark Horizon"
              datas={amuletsData[0]["The Dark Horizon"]}
              checkedItems={checkedItems}
            />
          </>
        );
      case "armors":
        return <ArmorsSummary />;
      case "classes":
        return (
          <>
            <CategoryCounter data={classesData} title="Contagem de classes" />
            <MatchedItems
              title="Game Base"
              datas={classesData[0]["Game Base"]}
              checkedItems={checkedItems}
            />
            <MatchedItems
              title="The Awakened King"
              datas={classesData[0]["The Awakened King"]}
              checkedItems={checkedItems}
            />
            <MatchedItems
              title="The Forgotten Kingdom"
              datas={classesData[0]["The Forgotten Kingdom"]}
              checkedItems={checkedItems}
            />
            <MatchedItems
              title="The Dark Horizon"
              datas={classesData[0]["The Dark Horizon"]}
              checkedItems={checkedItems}
            />
          </>
        );
      case "mods":
        return (
          <>
            <CategoryCounter data={modsData} title="Contagem de mods" />
            <MatchedItems
              title="Game Base"
              datas={modsData[0]["Game Base"]}
              checkedItems={checkedItems}
            />
            <MatchedItems
              title="The Awakened King"
              datas={modsData[0]["The Awakened King"]}
              checkedItems={checkedItems}
            />
            <MatchedItems
              title="The Forgotten Kingdom"
              datas={modsData[0]["The Forgotten Kingdom"]}
              checkedItems={checkedItems}
            />
            <MatchedItems
              title="The Dark Horizon"
              datas={modsData[0]["The Dark Horizon"]}
              checkedItems={checkedItems}
            />
          </>
        );
      case "mutators":
        return <MutatorsSummary />;
      case "relics":
        return (
          <>
            <CategoryCounter data={relicsData} title="Contagem de relíquias" />
            <MatchedItems
              title="Game Base"
              datas={relicsData[0]["Game Base"]}
              checkedItems={checkedItems}
            />
            <MatchedItems
              title="The Awakened King"
              datas={relicsData[0]["The Awakened King"]}
              checkedItems={checkedItems}
            />
            <MatchedItems
              title="The Forgotten Kingdom"
              datas={relicsData[0]["The Forgotten Kingdom"]}
              checkedItems={checkedItems}
            />
            <MatchedItems
              title="The Dark Horizon"
              datas={relicsData[0]["The Dark Horizon"]}
              checkedItems={checkedItems}
            />
          </>
        );
      case "rings":
        return (
          <>
            <CategoryCounter data={ringsData} title="Contagem de relíquias" />
            <MatchedItems
              title="Game Base"
              datas={ringsData[0]["Game Base"]}
              checkedItems={checkedItems}
            />
            <MatchedItems
              title="The Awakened King"
              datas={ringsData[0]["The Awakened King"]}
              checkedItems={checkedItems}
            />
            <MatchedItems
              title="The Forgotten Kingdom"
              datas={ringsData[0]["The Forgotten Kingdom"]}
              checkedItems={checkedItems}
            />
            <MatchedItems
              title="The Dark Horizon"
              datas={ringsData[0]["The Dark Horizon"]}
              checkedItems={checkedItems}
            />
          </>
        );
      case "traits":
        return (
          <>
            <CategoryCounter data={traitsData} title="Contagem de relíquias" />
            <MatchedItems
              title="core"
              datas={traitsData[0]["core"]}
              checkedItems={checkedItems}
            />
            <MatchedItems
              title="archetype"
              datas={traitsData[0]["archetype"]}
              checkedItems={checkedItems}
            />
            <MatchedItems
              title="others"
              datas={traitsData[0]["others"]}
              checkedItems={checkedItems}
            />
          </>
        );
      case "weapons":
        return (
          <>
            <div>
              <CategoryCounter
                data={handGunsData}
                title="Contagem de handguns"
              />
              <MatchedItems
                title="Game Base"
                datas={handGunsData[0]["Game Base"]}
                checkedItems={checkedItems}
              />
              <MatchedItems
                title="The Awakened King"
                datas={handGunsData[0]["The Awakened King"]}
                checkedItems={checkedItems}
              />
              <MatchedItems
                title="The Forgotten Kingdom"
                datas={handGunsData[0]["The Forgotten Kingdom"]}
                checkedItems={checkedItems}
              />
              <MatchedItems
                title="The Dark Horizon"
                datas={handGunsData[0]["The Dark Horizon"]}
                checkedItems={checkedItems}
              />
            </div>
            <div>
              <CategoryCounter
                data={sHandGunsData}
                title="Contagem de shandguns"
              />
              <MatchedItems
                title="Game Base"
                datas={sHandGunsData[0]["Game Base"]}
                checkedItems={checkedItems}
              />
              <MatchedItems
                title="The Awakened King"
                datas={sHandGunsData[0]["The Awakened King"]}
                checkedItems={checkedItems}
              />
              <MatchedItems
                title="The Forgotten Kingdom"
                datas={sHandGunsData[0]["The Forgotten Kingdom"]}
                checkedItems={checkedItems}
              />
              <MatchedItems
                title="The Dark Horizon"
                datas={sHandGunsData[0]["The Dark Horizon"]}
                checkedItems={checkedItems}
              />
            </div>
            <div>
              <CategoryCounter
                data={longGunsData}
                title="Contagem de long guns"
              />
              <MatchedItems
                title="Game Base"
                datas={longGunsData[0]["Game Base"]}
                checkedItems={checkedItems}
              />
              <MatchedItems
                title="The Awakened King"
                datas={longGunsData[0]["The Awakened King"]}
                checkedItems={checkedItems}
              />
              <MatchedItems
                title="The Forgotten Kingdom"
                datas={longGunsData[0]["The Forgotten Kingdom"]}
                checkedItems={checkedItems}
              />
              <MatchedItems
                title="The Dark Horizon"
                datas={longGunsData[0]["The Dark Horizon"]}
                checkedItems={checkedItems}
              />
            </div>
            <div>
              <CategoryCounter
                data={sLongGunsData}
                title="Contagem de slong guns"
              />
              <MatchedItems
                title="Game Base"
                datas={sLongGunsData[0]["Game Base"]}
                checkedItems={checkedItems}
              />
              <MatchedItems
                title="The Awakened King"
                datas={sLongGunsData[0]["The Awakened King"]}
                checkedItems={checkedItems}
              />
              <MatchedItems
                title="The Forgotten Kingdom"
                datas={sLongGunsData[0]["The Forgotten Kingdom"]}
                checkedItems={checkedItems}
              />
              <MatchedItems
                title="The Dark Horizon"
                datas={sLongGunsData[0]["The Dark Horizon"]}
                checkedItems={checkedItems}
              />
            </div>
            <div>
              <CategoryCounter data={meleeData} title="Contagem de melee" />
              <MatchedItems
                title="Game Base"
                datas={meleeData[0]["Game Base"]}
                checkedItems={checkedItems}
              />
              <MatchedItems
                title="The Awakened King"
                datas={meleeData[0]["The Awakened King"]}
                checkedItems={checkedItems}
              />
              <MatchedItems
                title="The Forgotten Kingdom"
                datas={meleeData[0]["The Forgotten Kingdom"]}
                checkedItems={checkedItems}
              />
              <MatchedItems
                title="The Dark Horizon"
                datas={meleeData[0]["The Dark Horizon"]}
                checkedItems={checkedItems}
              />
            </div>
            <div>
              <CategoryCounter data={sMeleeData} title="Contagem de smelee" />
              <MatchedItems
                title="Game Base"
                datas={sMeleeData[0]["Game Base"]}
                checkedItems={checkedItems}
              />
              <MatchedItems
                title="The Awakened King"
                datas={sMeleeData[0]["The Awakened King"]}
                checkedItems={checkedItems}
              />
              <MatchedItems
                title="The Forgotten Kingdom"
                datas={sMeleeData[0]["The Forgotten Kingdom"]}
                checkedItems={checkedItems}
              />
              <MatchedItems
                title="The Dark Horizon"
                datas={sMeleeData[0]["The Dark Horizon"]}
                checkedItems={checkedItems}
              />
            </div>
            <div>
              <CategoryCounter
                data={cHandGunsData}
                title="Contagem de corrupted hand guns"
              />
              <MatchedItems
                title="Game Base"
                datas={cHandGunsData[0]["Game Base"]}
                checkedItems={checkedItems}
              />
              <MatchedItems
                title="The Awakened King"
                datas={cHandGunsData[0]["The Awakened King"]}
                checkedItems={checkedItems}
              />
              <MatchedItems
                title="The Forgotten Kingdom"
                datas={cHandGunsData[0]["The Forgotten Kingdom"]}
                checkedItems={checkedItems}
              />
              <MatchedItems
                title="The Dark Horizon"
                datas={cHandGunsData[0]["The Dark Horizon"]}
                checkedItems={checkedItems}
              />
            </div>
            <div>
              <CategoryCounter
                data={cLongGunsData}
                title="Contagem de corrupted long guns"
              />
              <MatchedItems
                title="Game Base"
                datas={cLongGunsData[0]["Game Base"]}
                checkedItems={checkedItems}
              />
              <MatchedItems
                title="The Awakened King"
                datas={cLongGunsData[0]["The Awakened King"]}
                checkedItems={checkedItems}
              />
              <MatchedItems
                title="The Forgotten Kingdom"
                datas={cLongGunsData[0]["The Forgotten Kingdom"]}
                checkedItems={checkedItems}
              />
              <MatchedItems
                title="The Dark Horizon"
                datas={cLongGunsData[0]["The Dark Horizon"]}
                checkedItems={checkedItems}
              />
            </div>
          </>
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
