import PropTypes from "prop-types";
import { Row, Col, ProgressBar } from "react-bootstrap";

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
    <Row className="g-3">
      <Col xs={12}>
        <h2>{title}</h2>
      </Col>
      <Col xs={12}>
        <ul className="list-unstyled d-flex flex-wrap">
          {Object.entries(categoryCounts).map(([categoria, counts]) => {
            const matchedPercentage = Math.round(
              (counts.matchedItems / counts.totalItems) * 100
            );

            return (
              <li
                key={categoria}
                className="d-flex flex-column align-items-start me-3 mb-3"
                style={{ minWidth: "150px" }}
              >
                <h5>{categoria}</h5>
                <ProgressBar
                  now={matchedPercentage}
                  label={`${matchedPercentage}%`}
                  style={{
                    width: "100%",
                    backgroundColor: "black",
                    color: "white",
                  }}
                  variant="danger" // Define a cor de progresso em vermelho
                />
                <div>
                  <small>
                    Itens Marcados: {counts.matchedItems} / Total de Itens:{" "}
                    {counts.totalItems}
                  </small>
                </div>
              </li>
            );
          })}
        </ul>
      </Col>
    </Row>
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
