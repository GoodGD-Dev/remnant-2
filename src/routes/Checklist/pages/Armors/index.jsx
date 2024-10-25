import { useState, useMemo } from "react";
import Sidebar from "../../../../components/Sidebar";
import GameChecklist from "../../../../components/GameChecklist";
import {
  gbLight,
  gbMedium,
  gbHeavy,
  gbUltra,
  akLight,
  akMedium,
  akHeavy,
  akUltra,
  fkLight,
  fkMedium,
  fkHeavy,
  fkUltra,
  dhLight,
  dhMedium,
  dhHeavy,
  dhUltra,
} from "./armorsSets";

const Armors = () => {
  const [content, setContent] = useState("sub1");

  const menuItems = useMemo(
    () => [
      {
        label: "Game Base",
        subOptions: [
          { label: `Light Armor (${gbLight.length})`, value: "sub1" },
          { label: `Medium Armor (${gbMedium.length})`, value: "sub2" },
          { label: `Heavy Armor (${gbHeavy.length})`, value: "sub3" },
          { label: `Ultra Armor (${gbUltra.length})`, value: "sub4" },
        ],
      },
      {
        label: "The Awakened King",
        subOptions: [
          { label: `Light Armor (${akLight.length})`, value: "sub5" },
          { label: `Medium Armor (${akMedium.length})`, value: "sub6" },
          { label: `Heavy Armor (${akHeavy.length})`, value: "sub7" },
          { label: `Ultra Armor (${akUltra.length})`, value: "sub8" },
        ],
      },
      {
        label: "The Forgotten Kingdom",
        subOptions: [
          { label: `Light Armor (${fkLight.length})`, value: "sub9" },
          { label: `Medium Armor (${fkMedium.length})`, value: "sub10" },
          { label: `Heavy Armor (${fkHeavy.length})`, value: "sub11" },
          { label: `Ultra Armor (${fkUltra.length})`, value: "sub12" },
        ],
      },
      {
        label: "The Dark Horizon",
        subOptions: [
          { label: `Light Armor (${dhLight.length})`, value: "sub13" },
          { label: `Medium Armor (${dhMedium.length})`, value: "sub14" },
          { label: `Heavy Armor (${dhHeavy.length})`, value: "sub15" },
          { label: `Ultra Armor (${dhUltra.length})`, value: "sub16" },
        ],
      },
    ],
    []
  );

  const contentMap = {
    sub1: <GameChecklist items={gbLight} />,
    sub2: <GameChecklist items={gbMedium} />,
    sub3: <GameChecklist items={gbHeavy} />,
    sub4: <GameChecklist items={gbUltra} />,
    sub5: <GameChecklist items={akLight} />,
    sub6: <GameChecklist items={akMedium} />,
    sub7: <GameChecklist items={akHeavy} />,
    sub8: <GameChecklist items={akUltra} />,
    sub9: <GameChecklist items={fkLight} />,
    sub10: <GameChecklist items={fkMedium} />,
    sub11: <GameChecklist items={fkHeavy} />,
    sub12: <GameChecklist items={fkUltra} />,
    sub13: <GameChecklist items={dhLight} />,
    sub14: <GameChecklist items={dhMedium} />,
    sub15: <GameChecklist items={dhHeavy} />,
    sub16: <GameChecklist items={dhUltra} />,
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
