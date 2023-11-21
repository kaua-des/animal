import React, { useState } from 'react';
import './App.css';
import CadastroAnimal from './components/CadastroAnimal.jsx';
import ListaAnimais from './components/ListaAnimais.jsx';

const App = () => {
  const [animais, setAnimais] = useState([]);

  const handleCadastro = (novoAnimal) => {
    setAnimais([...animais, novoAnimal]);
  };

  const handleRemover = (id) => {
    setAnimais(animais.filter((animal) => animal.id !== id));
  };

  const handleConcluir = (id) => {
    setAnimais((prevAnimais) =>
      prevAnimais.map((animal) =>
        animal.id === id
          ? { ...animal, tipo: animal.tipo === "perdido" ? "resgatado" : "perdido" }
          : animal
      )
    );
  };

  return (
    <>
    <div className="container">
      <CadastroAnimal onCadastro={handleCadastro} />
      
    </div>
    <div className='listagem'>
    <ListaAnimais
        animais={animais}
        onRemover={handleRemover}
        onConcluir={handleConcluir}
      />
    </div>
    </>
  );
};

export default App;
