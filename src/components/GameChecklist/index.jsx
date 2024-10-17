import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './style.css';

const GameChecklist = ({ items }) => {
  if (!items || items.length === 0) {
    return <div>Nenhum mod disponível.</div>;
  }

  return (
    <div className="row justify-content-center"> {/* Centraliza os cards */}
      {items.map((item, index) => (
        <div className="col-6 col-sm-4 col-md-3" key={index}> {/* Ajuste de colunas */}
          <Card className="mb-4 custom-card"> {/* Classe personalizada */}
            <Card.Img 
              variant="top" 
              src={item.imagem || 'imagem_padrao.png'} 
              className="img-fluid custom-card-img" // Classe personalizada para imagem
            />
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

export default GameChecklist;
