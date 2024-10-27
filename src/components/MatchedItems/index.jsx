import PropTypes from "prop-types";

const MatchedItems = ({ title, datas, checkedItems }) => {
  // Filtrar os itens que correspondem
  const matchedItems = Object.keys(checkedItems).filter((item) =>
    datas.some((data) => data.nome === item)
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

// Definir validação das props
MatchedItems.propTypes = {
  title: PropTypes.string.isRequired, // `title` é uma string obrigatória
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      nome: PropTypes.string.isRequired, // Cada objeto no array `datas` deve ter uma string `nome`
    })
  ).isRequired, // `datas` é uma array de objetos obrigatória
  checkedItems: PropTypes.objectOf(PropTypes.bool).isRequired, // `checkedItems` é um objeto cujas chaves são strings e os valores são booleanos
};

export default MatchedItems;
