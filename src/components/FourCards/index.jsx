import React, { useState, useMemo } from 'react';

const Card = ({ card, isChecked, onCheck, index }) => (
  <div className="card mb-4">
    {card.image && <img src={card.image} className="card-img-top" alt={card.title} />}
    <div className="card-body">
      <h5 className="card-title">{card.title}</h5>
      <p className="card-text">{card.description}</p>
      <a href={card.link} className="btn btn-primary">Go to link</a>
      <div className="form-check mt-2">
        <input
          type="checkbox"
          className="form-check-input"
          id={`check-${index}`}
          checked={isChecked}
          onChange={() => onCheck(index)}
        />
        <label className="form-check-label" htmlFor={`check-${index}`}>
          {isChecked ? 'Checked' : 'Check'}
        </label>
      </div>
    </div>
  </div>
);

const FourCards = ({ cards, cardsPerRow = 4 }) => {
  const [checkedCards, setCheckedCards] = useState(() => new Array(cards.length).fill(false));

  const handleCheck = (index) => {
    setCheckedCards(prev => {
      const newChecked = [...prev];
      newChecked[index] = !newChecked[index];
      return newChecked;
    });
  };

  const rows = useMemo(() => {
    const result = [];
    for (let i = 0; i < cards.length; i += cardsPerRow) {
      result.push(cards.slice(i, i + cardsPerRow));
    }
    return result;
  }, [cards, cardsPerRow]);

  return (
    <div className="card-grid">
      {rows.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((card, cardIndex) => {
            const globalIndex = rowIndex * cardsPerRow + cardIndex;
            return (
              <div className={`col-${12 / cardsPerRow}`} key={globalIndex}>
                <Card
                  card={card}
                  isChecked={checkedCards[globalIndex]}
                  onCheck={handleCheck}
                  index={globalIndex}
                />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default FourCards;