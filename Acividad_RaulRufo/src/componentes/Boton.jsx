import React from 'react';

function Boton({ text, onclick, esClick }) {
  return (
    <button className={esClick ? 'btnClick' : 'btnReiniciar'} onClick={onclick}>
      {text}
    </button>
  );
}

export default Boton;
