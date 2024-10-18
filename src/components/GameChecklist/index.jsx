import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types'; // Importa PropTypes para validação
import './style.css';

const GameChecklist = ({ items }) => {
  if (!items || items.length === 0) {
    return <div>Nenhum item disponível.</div>;
  }

  return (
    <div className="row justify-content-center">
      {items.map((item, index) => (
        <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={index}>
          <Card className="mb-4 custom-card">
            <div className="image-container">
              <Card.Img 
                variant="top" 
                src={item.imagem || 'imagem_padrao.png'} 
                className="img-fluid custom-card-img hover-image"
              />
            </div>
            <Card.Body>
              <Card.Title className="card-title">{item.nome || 'Nome não disponível'}</Card.Title>
              <Card.Text className="card-text">
                {item.descricao || 'Descrição não disponível'}
              </Card.Text>
              <Button href={item.link} target="_blank" variant="primary">
                Ver mais
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

// Validação das props do GameChecklist
GameChecklist.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    nome: PropTypes.string.isRequired, // O nome do item é uma string obrigatória
    descricao: PropTypes.string, // A descrição pode ser uma string (não é obrigatório)
    imagem: PropTypes.string, // A imagem pode ser uma string (não é obrigatório)
    link: PropTypes.string.isRequired, // O link deve ser uma string obrigatória
  })).isRequired, // A lista de items é um array de objetos com a estrutura descrita
};

export default GameChecklist;
