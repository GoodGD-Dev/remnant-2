import PropTypes from "prop-types";

const MatchedItems = ({ title, datas, checkedItems }) => {
  // Criação de um objeto para armazenar contagens por categoria
  const categoryCounts = {};

  // Contar o total de itens por categoria usando datas
  datas.forEach((dataItem) => {
    const categoria = dataItem.categoria;

    // Inicializa a categoria se não existir
    if (!categoryCounts[categoria]) {
      categoryCounts[categoria] = { totalItems: 0, matchedItems: 0 };
    }

    // Incrementa o total de itens da categoria
    categoryCounts[categoria].totalItems++;
  });

  // Filtrar os itens marcados e contar os correspondentes
  Object.keys(checkedItems).forEach((item) => {
    const dataItem = datas.find((data) => data.nome === item);

    if (dataItem) {
      const categoria = dataItem.categoria;

      // Incrementa o número de itens marcados correspondentes
      if (checkedItems[item]) {
        categoryCounts[categoria].matchedItems++;
      }
    }
  });

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {Object.entries(categoryCounts).map(([categoria, counts]) => (
          <li key={categoria}>
            <strong>{categoria}</strong>:
            <span> Total de itens: {counts.totalItems}</span>,
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
      categoria: PropTypes.string.isRequired, // Adiciona a validação para categoria
    })
  ).isRequired,
  checkedItems: PropTypes.objectOf(PropTypes.bool).isRequired,
};

export default MatchedItems;
