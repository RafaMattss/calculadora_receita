import React, { useState } from 'react';
import ExpenseForm from './components/form/form';
import Card from './components/card/card';
import '../src/App.css';





function App() {
  const [dados, setDados] = useState([]);

  const handleCadastroSubmit = (formData) => {
    setDados([...dados, formData]);
  };

  const handleExcluir = (item) => {
    const updatedDados = dados.filter((d) => d !== item);
    setDados(updatedDados);
  };

  const receitas = dados.filter((item) => item.tipo === 'receita');
  const despesas = dados.filter((item) => item.tipo === 'despesa');

  const somaReceitas = receitas.reduce((total, receita) => total + parseFloat(receita.valor), 0);
  const somaDespesas = despesas.reduce((total, despesa) => total + parseFloat(despesa.valor), 0);

  return (
    <div className="App">
      <div className="column">
        <h2>Cadastro</h2>
        <ExpenseForm onCadastroSubmit={handleCadastroSubmit} />
      </div>
      <div className="column">
        <h2>Receitas</h2>
        <p>Soma das Receitas: {somaReceitas}</p>
        <div className="card-container">
          {receitas.map((data, index) => (
            <Card key={`receita-${index}`} data={data} type={data.tipo} onExcluir={handleExcluir} />
          ))}
        </div>
      </div>
      <div className="column">
        <h2>Despesas</h2>
        <p>Soma das Despesas: {somaDespesas}</p>
        <div className="card-container">
          {despesas.map((data, index) => (
            <Card key={`despesa-${index}`} data={data} type={data.tipo} onExcluir={handleExcluir} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
