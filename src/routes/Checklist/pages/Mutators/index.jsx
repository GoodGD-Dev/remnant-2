import { useState, useMemo } from "react";
import Sidebar from "../../../../components/Sidebar";
import GameChecklist from "../../../../components/GameChecklist";
import mutatorsData from "../../../../data/mutators.json";

// Função para extrair mutators por tipo
const getMutators = (type) => {
  const mutators = mutatorsData.find((mutator) => mutator[type])?.[type] || [];

  return [
    "Game Base",
    "The Awakened King",
    "The Forgotten Kingdom",
    "The Dark Horizon",
  ].reduce((acc, category) => {
    acc[category] = mutators.find((m) => m[category])?.[category] || [];
    return acc;
  }, {});
};

const Mutators = () => {
  const [content, setContent] = useState("sub1");
  const ranged = getMutators("Ranged");
  const melee = getMutators("Melee");

  const categories = [
    "Game Base",
    "The Awakened King",
    "The Forgotten Kingdom",
    "The Dark Horizon",
  ];

  const menuItems = useMemo(
    () =>
      categories.map((category, index) => ({
        label: category,
        subOptions: [
          {
            label: `Ranged (${ranged[category].length})`,
            value: `sub${index * 2 + 1}`,
          },
          {
            label: `Melee (${melee[category].length})`,
            value: `sub${index * 2 + 2}`,
          },
        ],
      })),
    [ranged, melee]
  );

  const contentMap = Object.fromEntries(
    categories.flatMap((category, index) => [
      [`sub${index * 2 + 1}`, <GameChecklist items={ranged[category]} />],
      [`sub${index * 2 + 2}`, <GameChecklist items={melee[category]} />],
    ])
  );

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
