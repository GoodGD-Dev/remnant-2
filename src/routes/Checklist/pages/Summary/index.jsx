import React, { useEffect, useState } from "react";
import CategoryCounter from "../../../../components/CategoryCounter";
import amuletsData from "../../../../data/amulets.json";
import armorsData from "../../../../data/armors.json";
import classesData from "../../../../data/classes.json";
import modsData from "../../../../data/mods.json";
import mutatorsData from "../../../../data/mutators.json";
import relicsData from "../../../../data/relics.json";
import ringsData from "../../../../data/rings.json";
import statsData from "../../../../data/stats.json";
import traitsData from "../../../../data/traits.json";
import weaponsData from "../../../../data/weapons.json";

const Summary = () => {
  const [filteredModsData, setFilteredModsData] = useState([]);

  useEffect(() => {
    // Recuperar dados do localStorage
    const localStorageData = localStorage.getItem("modNames"); // Altere "modNames" para a chave correta, se necessário
    if (localStorageData) {
      const modNames = JSON.parse(localStorageData); // Converter JSON para objeto

      // Filtrar modsData com base nos nomes do localStorage
      const filteredData = modsData.flatMap((category) => {
        return category.itens
          .filter((mod) => modNames[mod.nome])
          .map((mod) => ({
            nome: mod.nome,
            categoria: category.categoria,
          }));
      });

      setFilteredModsData(filteredData);
    }
  }, []);

  return (
    <div>
      <CategoryCounter data={amuletsData} title="Contagem de amulets" />
      <CategoryCounter data={classesData} title="Contagem de classes" />
      <CategoryCounter
        data={filteredModsData}
        title="Contagem de Mods Filtrados"
      />
      <CategoryCounter data={relicsData} title="Contagem de relics" />
      <CategoryCounter data={ringsData} title="Contagem de rings" />
      <CategoryCounter data={traitsData} title="Contagem de traits" />
    </div>
  );
};

export default Summary;
