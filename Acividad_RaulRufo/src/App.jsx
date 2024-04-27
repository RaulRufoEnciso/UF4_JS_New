import React, { useState } from 'react';
import './App.css';
import Boton from '../src/componentes/Boton.jsx';

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const incrementNum = () => {
    setNumClicks(numClicks + 1);
    console.log('Número de clics incrementado');
  };

  const reiniciarNum = () => {
    setNumClicks(0);
    console.log('Número reiniciado');
  };

  return (
    <div className="container">
      <h1>Contador de Clicks</h1>
      <p>Número de Clicks: {numClicks}</p>
      <div className="botones">
        <Boton text="Clic" onclick={incrementNum} esClick={true} />
        <Boton text="Reiniciar" onclick={reiniciarNum} esClick={false} />
      </div>
    </div>
  );
}

export default App;
