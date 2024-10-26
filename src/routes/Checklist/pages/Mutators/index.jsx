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

  // Use useMemo para evitar recriar o array de categories a cada render
  const categories = useMemo(
    () => [
      "Game Base",
      "The Awakened King",
      "The Forgotten Kingdom",
      "The Dark Horizon",
    ],
    [] // Nenhuma dependência porque os valores são constantes
  );

  // useMemo para gerar menuItems baseado em categories
  const menuItems = useMemo(
    () =>
      categories.map((category, index) => ({
        label: category,
        subOptions: [
          {
            label: `Ranged (${ranged[category].length})`,
            value: `sub${index * 2 + 1}`,
            key: `ranged-${category}`, // Adicionando key
          },
          {
            label: `Melee (${melee[category].length})`,
            value: `sub${index * 2 + 2}`,
            key: `melee-${category}`, // Adicionando key
          },
        ],
      })),
    [ranged, melee, categories] // Dependências corretas
  );

  // useMemo para gerar contentMap baseado em categories
  const contentMap = useMemo(
    () =>
      Object.fromEntries(
        categories.flatMap((category, index) => [
          [
            `sub${index * 2 + 1}`,
            <GameChecklist
              key={`ranged-${category}`}
              items={ranged[category]}
            />,
          ],
          [
            `sub${index * 2 + 2}`,
            <GameChecklist key={`melee-${category}`} items={melee[category]} />,
          ],
        ])
      ),
    [ranged, melee, categories]
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
