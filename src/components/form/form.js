// ExpenseForm.js
import React, { useState } from 'react';
import '../form/form.css'

const ExpenseForm = ({ onCadastroSubmit }) => {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState('receita');
  const [pagoPor, setPagoPor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { nome, valor, tipo, pagoPor };
    onCadastroSubmit(formData);
    setNome('');
    setValor('');
    setTipo('receita');
    setPagoPor('');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <br />

        <label>
          Valor:
          <input
            type="number"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
        </label>
        <br />

        <label>
          Tipo:
          <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="receita">Receita</option>
            <option value="despesa">Despesa</option>
          </select>
        </label>
        <br />

        <label>
          Pago Por:
          <input
            type="text"
            value={pagoPor}
            onChange={(e) => setPagoPor(e.target.value)}
          />
        </label>
        <br />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
