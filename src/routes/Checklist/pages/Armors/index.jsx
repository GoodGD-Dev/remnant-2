import { useState, useMemo } from "react";
import Sidebar from "../../../../components/Sidebar";
import GameChecklist from "../../../../components/GameChecklist";
import { gb, ak, fk, dh, du } from "./armorsSets";

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
          { label: `Head (${gb.Head.length})`, value: "sub5" },
        ],
      },
      {
        label: "The Awakened King",
        subOptions: [
          { label: `Light Armor (${ak.Light.length})`, value: "sub6" },
          { label: `Medium Armor (${ak.Medium.length})`, value: "sub7" },
          { label: `Heavy Armor (${ak.Heavy.length})`, value: "sub8" },
          { label: `Ultra Armor (${ak.Ultra.length})`, value: "sub9" },
          { label: `Head Armor (${ak.Head.length})`, value: "sub10" },
        ],
      },
      {
        label: "The Forgotten Kingdom",
        subOptions: [
          { label: `Light Armor (${fk.Light.length})`, value: "sub11" },
          { label: `Medium Armor (${fk.Medium.length})`, value: "sub12" },
          { label: `Heavy Armor (${fk.Heavy.length})`, value: "sub13" },
          { label: `Ultra Armor (${fk.Ultra.length})`, value: "sub14" },
          { label: `Head Armor (${fk.Head.length})`, value: "sub15" },
        ],
      },
      {
        label: "The Dark Horizon",
        subOptions: [
          { label: `Light Armor (${dh.Light.length})`, value: "sub16" },
          { label: `Medium Armor (${dh.Medium.length})`, value: "sub17" },
          { label: `Heavy Armor (${dh.Heavy.length})`, value: "sub18" },
          { label: `Ultra Armor (${dh.Ultra.length})`, value: "sub19" },
          { label: `Head Armor (${dh.Head.length})`, value: "sub20" },
        ],
      },
      {
        label: "Deluxe/Ultimate Edition",
        subOptions: [
          { label: `Light Armor (${du.Light.length})`, value: "sub21" },
          { label: `Medium Armor (${du.Medium.length})`, value: "sub22" },
          { label: `Heavy Armor (${du.Heavy.length})`, value: "sub23" },
          { label: `Ultra Armor (${du.Ultra.length})`, value: "sub24" },
          { label: `Head Armor (${du.Head.length})`, value: "sub25" },
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
    sub5: <GameChecklist items={gb.Head} />,
    sub6: <GameChecklist items={ak.Light} />,
    sub7: <GameChecklist items={ak.Medium} />,
    sub8: <GameChecklist items={ak.Heavy} />,
    sub9: <GameChecklist items={ak.Ultra} />,
    sub10: <GameChecklist items={ak.Head} />,
    sub11: <GameChecklist items={fk.Light} />,
    sub12: <GameChecklist items={fk.Medium} />,
    sub13: <GameChecklist items={fk.Heavy} />,
    sub14: <GameChecklist items={fk.Ultra} />,
    sub15: <GameChecklist items={fk.Head} />,
    sub16: <GameChecklist items={dh.Light} />,
    sub17: <GameChecklist items={dh.Medium} />,
    sub18: <GameChecklist items={dh.Heavy} />,
    sub19: <GameChecklist items={dh.Ultra} />,
    sub20: <GameChecklist items={dh.Head} />,
    sub21: <GameChecklist items={du.Light} />,
    sub22: <GameChecklist items={du.Medium} />,
    sub23: <GameChecklist items={du.Heavy} />,
    sub24: <GameChecklist items={du.Ultra} />,
    sub25: <GameChecklist items={du.Head} />,
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
