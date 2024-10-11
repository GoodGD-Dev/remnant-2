import React, { useState } from 'react';

const FourCards = ({ cards, cardsPerRow = 4 }) => {
  // Estado para armazenar quais cards foram marcados
  const [checkedCards, setCheckedCards] = useState(Array(cards.length).fill(false));

  // Função para alternar o estado do card
  const handleCheck = (index) => {
    const newCheckedCards = [...checkedCards];
    newCheckedCards[index] = !newCheckedCards[index];
    setCheckedCards(newCheckedCards);
  };

  // Divide os cards em linhas com base no número de cards por linha
  const rows = [];
  for (let i = 0; i < cards.length; i += cardsPerRow) {
    rows.push(cards.slice(i, i + cardsPerRow));
  }

  return (
    <div className="card-grid">
      {rows.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((card, cardIndex) => {
            const globalIndex = rowIndex * cardsPerRow + cardIndex; // Índice global do card
            return (
              <div className={`col-${12 / cardsPerRow}`} key={globalIndex}>
                <div className="card mb-4">
                  {/* Verifica se a imagem existe antes de exibi-la */}
                  {card.image && (
                    <img src={card.image} className="card-img-top" alt={card.title} />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.description}</p>
                    <a href={card.link} className="btn btn-primary">
                      Go to link
                    </a>
                    {/* Checkbox */}
                    <div className="form-check mt-2">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={`check-${globalIndex}`}
                        checked={checkedCards[globalIndex]}
                        onChange={() => handleCheck(globalIndex)}
                      />
                      <label className="form-check-label" htmlFor={`check-${globalIndex}`}>
                        {checkedCards[globalIndex] ? ' Checked' : ' Check'}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default FourCards;
