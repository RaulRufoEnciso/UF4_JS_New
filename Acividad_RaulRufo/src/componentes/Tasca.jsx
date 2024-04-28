import React from 'react';
import { IoMdClose } from 'react-icons/io'; // Asegúrate de tener 'react-icons' instalado
import "../styles/tasca.css"

function Tasca({ id, text, completada, completarTasca, eliminarTasca }) {
  return (
    <div className={`tasca ${completada ? 'tascaCompletada' : ''}`} onClick={() => completarTasca(id)}>
      <p>{text}</p>
      <IoMdClose onClick={(e) => {e.stopPropagation(); eliminarTasca(id);}} />
    </div>
  );
}

export default Tasca;
