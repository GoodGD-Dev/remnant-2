import { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Importar prop-types

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

// Definir validação das props
CategoryCounter.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.array.isRequired // Cada valor de chave no objeto precisa ser um array
    ).isRequired // Cada item da array precisa ser um objeto
  ).isRequired,
  title: PropTypes.string.isRequired, // O título precisa ser uma string
};

export default CategoryCounter;
