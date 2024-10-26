import { useState, useMemo } from "react";
import Sidebar from "../../../../components/Sidebar";
import GameChecklist from "../../../../components/GameChecklist";
import weaponsData from "../../../../data/weapons.json";

const weapons = [weaponsData];

// Function to extract weapons based on category and name
const getWeaponsByCategoryAndName = (category, name) => {
  const categoryData =
    weapons.find((weapon) => weapon[category])?.[category] || [];
  return categoryData.find((weapon) => weapon[name])?.[name] || [];
};

const categories = [
  "Hand Guns",
  "Special Hand Guns",
  "Long Guns",
  "Special Long Guns",
  "Melee Weapons",
  "Special Melee Weapons",
  "Corrupted Hand Guns",
  "Corrupted Long Guns",
  "Corrupted Melee Weapons",
];

// Define game names for consistency
const gameNames = [
  "Game Base",
  "The Awakened King",
  "The Forgotten Kingdom",
  "The Dark Horizon",
];

// Function to count weapons by category for each game
const countWeapons = (data) => {
  const counts = {};

  categories.forEach((category) => {
    counts[category] = {};
    gameNames.forEach((gameName) => {
      counts[category][gameName] = data[category][gameName]?.length || 0;
    });
  });

  return counts;
};

const weaponData = categories.reduce((acc, category) => {
  acc[category] = gameNames.reduce((innerAcc, gameName) => {
    innerAcc[gameName] = getWeaponsByCategoryAndName(category, gameName);
    return innerAcc;
  }, {});
  return acc;
}, {});

// Count weapons for display
const weaponCounts = countWeapons(weaponData);

const Weapons = () => {
  const [content, setContent] = useState("sub1");

  const menuItems = useMemo(() => {
    return gameNames.map((gameName) => ({
      label: gameName,
      subOptions: categories.map((category) => ({
        label: `${category} (${weaponData[category][gameName].length})`,
        value: `sub${
          gameNames.indexOf(gameName) * categories.length +
          categories.indexOf(category) +
          1
        }`,
      })),
    }));
  }, []);

  const contentMap = Object.keys(weaponData).reduce((acc, category) => {
    gameNames.forEach((gameName) => {
      const subIndex =
        gameNames.indexOf(gameName) * categories.length +
        categories.indexOf(category) +
        1;
      acc[`sub${subIndex}`] = (
        <GameChecklist items={weaponData[category][gameName]} />
      );
    });
    return acc;
  }, {});

  // Exportar weaponCounts para uso em outros componentes
  const weaponCounts = categories.reduce((acc, category) => {
    acc[category] = gameNames.reduce((innerAcc, gameName) => {
      innerAcc[gameName] = weaponData[category][gameName]?.length || 0;
      return innerAcc;
    }, {});
    return acc;
  }, {});

  return (
    <div className="d-flex">
      <Sidebar menuItems={menuItems} setContent={setContent} />
      <div className="p-3">{contentMap[content]}</div>
    </div>
  );
};

// Exportar também a contagem de armas
export { weaponCounts }; // Certifique-se de exportar aqui
export default Weapons;
