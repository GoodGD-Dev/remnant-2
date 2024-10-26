import { useState, useMemo } from "react";
import Sidebar from "../../../../components/Sidebar";
import GameChecklist from "../../../../components/GameChecklist";
import { gb, ak, fk, dh } from "./armorsSets";

const Armors = () => {
  const [content, setContent] = useState("sub1");

  // Configuração dos itens do menu, agora acessando as propriedades de cada conjunto
  const menuItems = useMemo(
    () => [
      {
        label: "Game Base",
        subOptions: [
          { label: `Light Armor (${gb.Light.length})`, value: "sub1" },
          { label: `Medium Armor (${gb.Medium.length})`, value: "sub2" },
          { label: `Heavy Armor (${gb.Heavy.length})`, value: "sub3" },
          { label: `Ultra Armor (${gb.Ultra.length})`, value: "sub4" },
        ],
      },
      {
        label: "The Awakened King",
        subOptions: [
          { label: `Light Armor (${ak.Light.length})`, value: "sub5" },
          { label: `Medium Armor (${ak.Medium.length})`, value: "sub6" },
          { label: `Heavy Armor (${ak.Heavy.length})`, value: "sub7" },
          { label: `Ultra Armor (${ak.Ultra.length})`, value: "sub8" },
        ],
      },
      {
        label: "The Forgotten Kingdom",
        subOptions: [
          { label: `Light Armor (${fk.Light.length})`, value: "sub9" },
          { label: `Medium Armor (${fk.Medium.length})`, value: "sub10" },
          { label: `Heavy Armor (${fk.Heavy.length})`, value: "sub11" },
          { label: `Ultra Armor (${fk.Ultra.length})`, value: "sub12" },
        ],
      },
      {
        label: "The Dark Horizon",
        subOptions: [
          { label: `Light Armor (${dh.Light.length})`, value: "sub13" },
          { label: `Medium Armor (${dh.Medium.length})`, value: "sub14" },
          { label: `Heavy Armor (${dh.Heavy.length})`, value: "sub15" },
          { label: `Ultra Armor (${dh.Ultra.length})`, value: "sub16" },
        ],
      },
    ],
    []
  );

  // Mapeamento do conteúdo, agora usando a estrutura de cada conjunto
  const contentMap = {
    sub1: <GameChecklist items={gb.Light} />,
    sub2: <GameChecklist items={gb.Medium} />,
    sub3: <GameChecklist items={gb.Heavy} />,
    sub4: <GameChecklist items={gb.Ultra} />,
    sub5: <GameChecklist items={ak.Light} />,
    sub6: <GameChecklist items={ak.Medium} />,
    sub7: <GameChecklist items={ak.Heavy} />,
    sub8: <GameChecklist items={ak.Ultra} />,
    sub9: <GameChecklist items={fk.Light} />,
    sub10: <GameChecklist items={fk.Medium} />,
    sub11: <GameChecklist items={fk.Heavy} />,
    sub12: <GameChecklist items={fk.Ultra} />,
    sub13: <GameChecklist items={dh.Light} />,
    sub14: <GameChecklist items={dh.Medium} />,
    sub15: <GameChecklist items={dh.Heavy} />,
    sub16: <GameChecklist items={dh.Ultra} />,
  };

  return (
    <div className="d-flex">
      <Sidebar menuItems={menuItems} setContent={setContent} />
      <div className="p-4">
        {contentMap[content] || <div>Content not found</div>}
      </div>
    </div>
  );
};

export default Armors;
