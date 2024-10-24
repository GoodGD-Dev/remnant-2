import { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import "./style.css";

const GameChecklist = ({ items }) => {
  // Estado para armazenar os itens marcados
  const [checkedItems, setCheckedItems] = useState(() => {
    // Tenta recuperar o estado do localStorage
    const savedItems = localStorage.getItem("checkedItems");
    return savedItems ? JSON.parse(savedItems) : {};
  });

  // Função que atualiza o estado quando o usuário marca/desmarca um item
  const handleCheckChange = (itemName) => {
    setCheckedItems((prevCheckedItems) => {
      const isChecked = prevCheckedItems[itemName]; // Verifica se o item está marcado
      const newCheckedItems = {
        ...prevCheckedItems,
        [itemName]: !isChecked, // Inverte o valor do item marcado
      };

      // Se o item está sendo desmarcado, remove do objeto
      if (!newCheckedItems[itemName]) {
        delete newCheckedItems[itemName]; // Remove a propriedade do objeto
      }

      // Salva no localStorage
      localStorage.setItem("checkedItems", JSON.stringify(newCheckedItems));
      return newCheckedItems;
    });
  };

  // Se a lista de itens estiver vazia ou for indefinida, exibe uma mensagem.
  if (!items || items.length === 0) {
    return <div>Nenhum item disponível.</div>;
  }

  // Mapeia os itens e renderiza cards para cada um deles.
  return (
    <div className="row justify-content-center">
      <h4>Total de itens: {items.length}</h4>{" "}
      {/* Exibe o número total de itens */}
      {items.map((item, index) => (
        <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={index}>
          <Card className="mb-4 custom-card">
            <div className="image-container">
              <Card.Img
                variant="top"
                src={item.imagem || "imagem_padrao.png"}
                className="img-fluid custom-card-img hover-image"
              />
            </div>
            <Card.Body>
              <Card.Title className="card-title">
                {item.nome || "Nome não disponível"}
              </Card.Title>
              <Card.Text className="card-text">
                {item.descricao || "Descrição não disponível"}
              </Card.Text>
              <Button href={item.link} target="_blank" variant="primary">
                Ver mais
              </Button>
              <Form.Group controlId={`checkbox-${index}`} className="mt-3">
                <Form.Check
                  type="checkbox"
                  label="Peguei"
                  checked={checkedItems[item.nome] || false} // Estado do checkbox
                  onChange={() => handleCheckChange(item.nome)} // Atualiza estado ao clicar
                />
              </Form.Group>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

// Definição das props esperadas e seus tipos
GameChecklist.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      nome: PropTypes.string.isRequired,
      descricao: PropTypes.string,
      imagem: PropTypes.string,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GameChecklist;
