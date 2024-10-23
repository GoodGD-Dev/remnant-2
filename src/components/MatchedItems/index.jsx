import React from "react";

const MatchedItems = ({ title, mods, checkedItems }) => {
  // Filtrar os itens que correspondem
  const matchedItems = Object.keys(checkedItems).filter((item) =>
    mods.some((mod) => mod.nome === item)
  );

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {matchedItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default MatchedItems;
