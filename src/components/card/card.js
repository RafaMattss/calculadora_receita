import React from 'react';
import '../card/card.css';

const Card = ({ data, type, onExcluir }) => {
    const handleExcluir = () => {
      onExcluir(data);
    };
  
    return (
      <div className="card">
        <p>Nome: {data.nome}</p>
        <p>Valor: {data.valor}</p>
        <p>Tipo: {type}</p>
        <p>Pago Por: {data.pagoPor}</p>
        <button onClick={handleExcluir}>Excluir</button>
      </div>
    );
  };

export default Card;