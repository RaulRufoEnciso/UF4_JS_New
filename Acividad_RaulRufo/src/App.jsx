import React, { useState } from 'react';
import Button from './componentes/Button';
import LlistatTasques from './componentes/LlistatTasques';
import './App.css';

function App() {
  const [numClics, setNumClics] = useState(0);

  const incrementNum = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarNum = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="counter-display">
        <div className="number">{numClics}</div>
      </div>
      <div className="button-container">
        <Button text="Clic" onClick={incrementNum} esClick={true} />
        <Button text="Reiniciar" onClick={reiniciarNum} esClick={false} />
      </div>
      <div className='tarques'>
        <LlistatTasques />
      </div>
      

    </div>
  );
}

export default App;
