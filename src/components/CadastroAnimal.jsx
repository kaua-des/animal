import React, { useState } from 'react';

const CadastroAnimal = ({ onCadastro }) => {
  const [foto, setFoto] = useState('');
  const [raca, setRaca] = useState('');
  const [local, setLocal] = useState('');
  const [tipo, setTipo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoAnimal = { id: Date.now(), foto, raca, local, tipo, status: 'pendente' };
    onCadastro(novoAnimal);
    // Não limpar os campos após o cadastro para permitir adicionar mais animais
  };

  return (
    <form onSubmit={handleSubmit}>
        <h1>Ache seu Amigo</h1>
      <label>Foto URL:</label>
      <input type="text" value={foto} onChange={(e) => setFoto(e.target.value)} required />

      <label>Raça:</label>
      <input type="text" value={raca} onChange={(e) => setRaca(e.target.value)} required />

      <label>Local (encontrado/perdido):</label>
      <input type="text" value={local} onChange={(e) => setLocal(e.target.value)} required />

      <label>Tipo (perdido/resgatado):</label>
      <input type="text" value={tipo} onChange={(e) => setTipo(e.target.value)} required />

      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default CadastroAnimal;
