import { useState, useEffect } from "react";

const CategoryCounter = ({ data, title }) => {
  const [categoryCounts, setCategoryCounts] = useState({});

  useEffect(() => {
    const counts = {};

    // Iterar sobre cada objeto no JSON
    data.forEach((item) => {
      // Iterar sobre cada chave (categoria)
      Object.keys(item).forEach((category) => {
        // Se a categoria ainda não existir no objeto de contagem, inicialize-a
        if (!counts[category]) {
          counts[category] = 0;
        }
        // Adicione a contagem de mods dessa categoria
        counts[category] += item[category].length;
      });
    });

    // Atualiza o estado com a contagem de categorias
    setCategoryCounts(counts);
  }, [data]);

  return (
    <div>
      <h1>{title}</h1> {/* Use a propriedade title aqui */}
      <ul>
        {Object.entries(categoryCounts).map(([category, count]) => (
          <li key={category}>
            {category}: {count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryCounter;
