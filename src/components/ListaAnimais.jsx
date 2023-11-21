import React, { useState } from "react";

const ListaAnimais = ({ animais, onRemover, onConcluir }) => {
  return (
    <ul>
      {animais.map((animal) => (
        <li key={animal.id}>
          <img src={animal.foto} alt={animal.raca} />
          <p>Raça: {animal.raca}</p>
          <p>Local: {animal.local}</p>
          <p>Tipo: {animal.tipo}</p>
          <button onClick={() => onConcluir(animal.id)}>Concluir</button>
          <button onClick={() => onRemover(animal.id)}>Remover</button>
        </li>
      ))}
    </ul>
  );
};

export default ListaAnimais;
