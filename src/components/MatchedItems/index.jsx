import PropTypes from "prop-types";
import "./style.css";

const MatchedItems = ({ title, datas, checkedItems }) => {
  const categoryCounts = {};

  datas.forEach((dataItem) => {
    const categoria = dataItem.categoria;

    if (!categoryCounts[categoria]) {
      categoryCounts[categoria] = { totalItems: 0, matchedItems: 0 };
    }

    categoryCounts[categoria].totalItems++;
  });

  Object.keys(checkedItems).forEach((item) => {
    const dataItem = datas.find((data) => data.nome === item);

    if (dataItem) {
      const categoria = dataItem.categoria;

      if (checkedItems[item]) {
        categoryCounts[categoria].matchedItems++;
      }
    }
  });

  return (
    <div>
      <h2>{title}</h2>
      <ul className="category-list">
        {Object.entries(categoryCounts).map(([categoria, counts]) => (
          <li key={categoria} className="category-item">
            <span>Total de itens: {counts.totalItems}</span>,
            <span> Itens marcados: {counts.matchedItems}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Definir validação das props
MatchedItems.propTypes = {
  title: PropTypes.string.isRequired,
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      nome: PropTypes.string.isRequired,
      categoria: PropTypes.string.isRequired,
    })
  ).isRequired,
  checkedItems: PropTypes.objectOf(PropTypes.bool).isRequired,
};

export default MatchedItems;
