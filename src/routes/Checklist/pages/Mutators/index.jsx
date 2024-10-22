import { useState, useMemo } from "react";
import Sidebar from "../../../../components/Sidebar";
import GameChecklist from "../../../../components/GameChecklist";
import mutatorsData from "../../../../data/mutators.json";

// Função para extrair mutators por tipo
const getMutators = (type) => {
  const mutators = mutatorsData.find((mutator) => mutator[type])?.[type] || [];
  return {
    gameBase: mutators.find((m) => m["Game Base"])?.["Game Base"] || [],
    awakenedKing:
      mutators.find((m) => m["The Awakened King"])?.["The Awakened King"] || [],
    forgottenKingdom:
      mutators.find((m) => m["The Forgotten Kingdom"])?.[
        "The Forgotten Kingdom"
      ] || [],
    darkHorizon:
      mutators.find((m) => m["The Dark Horizon"])?.["The Dark Horizon"] || [],
  };
};

const Mutators = () => {
  const [content, setContent] = useState("sub1");
  const ranged = getMutators("Ranged");
  const melee = getMutators("Melee");

  const menuItems = useMemo(
    () => [
      {
        label: "Game Base",
        subOptions: [
          { label: `Ranged (${ranged.gameBase.length})`, value: "sub1" },
          { label: `Melee (${melee.gameBase.length})`, value: "sub2" },
        ],
      },
      {
        label: "The Awakened King",
        subOptions: [
          { label: `Ranged (${ranged.awakenedKing.length})`, value: "sub3" },
          { label: `Melee (${melee.awakenedKing.length})`, value: "sub4" },
        ],
      },
      {
        label: "The Forgotten Kingdom",
        subOptions: [
          {
            label: `Ranged (${ranged.forgottenKingdom.length})`,
            value: "sub5",
          },
          { label: `Melee (${melee.forgottenKingdom.length})`, value: "sub6" },
        ],
      },
      {
        label: "The Dark Horizon",
        subOptions: [
          { label: `Ranged (${ranged.darkHorizon.length})`, value: "sub7" },
          { label: `Melee (${melee.darkHorizon.length})`, value: "sub8" },
        ],
      },
    ],
    [ranged, melee]
  );

  const contentMap = {
    sub1: <GameChecklist items={ranged.gameBase} />,
    sub2: <GameChecklist items={melee.gameBase} />,
    sub3: <GameChecklist items={ranged.awakenedKing} />,
    sub4: <GameChecklist items={melee.awakenedKing} />,
    sub5: <GameChecklist items={ranged.forgottenKingdom} />,
    sub6: <GameChecklist items={melee.forgottenKingdom} />,
    sub7: <GameChecklist items={ranged.darkHorizon} />,
    sub8: <GameChecklist items={melee.darkHorizon} />,
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

export default Mutators;
