import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './style.css';

const GameChecklist = ({ items }) => {
  // Se a lista de itens estiver vazia ou for indefinida, exibe uma mensagem.
  if (!items || items.length === 0) {
    return <div>Nenhum item disponível.</div>;
  }

  // Mapeia os itens e renderiza cards para cada um deles.
  return (
    <div className="row justify-content-center">
      {items.map((item, index) => (
        <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={index}>
          <Card className="mb-4 custom-card">
            {/* Contém a imagem do item ou uma imagem padrão */}
            <div className="image-container">
              <Card.Img 
                variant="top" 
                src={item.imagem || 'imagem_padrao.png'} 
                className="img-fluid custom-card-img hover-image"
              />
            </div>
            <Card.Body>
              {/* Título e descrição do card */}
              <Card.Title className="card-title">
                {item.nome || 'Nome não disponível'}
              </Card.Title>
              <Card.Text className="card-text">
                {item.descricao || 'Descrição não disponível'}
              </Card.Text>
              {/* Botão que leva a um link, abrindo em nova aba */}
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

// Definição das props esperadas e seus tipos
GameChecklist.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      nome: PropTypes.string.isRequired,  // O nome é obrigatório
      descricao: PropTypes.string,        // A descrição é opcional
      imagem: PropTypes.string,           // A imagem é opcional
      link: PropTypes.string.isRequired,  // O link é obrigatório
    })
  ).isRequired,  // A lista de itens é obrigatória
};

export default GameChecklist;
